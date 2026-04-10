import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend for email notifications
const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiting store (simple in-memory, resets on deploy)
// For production, use Redis or similar
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5 // 5 submissions per IP per hour

// CSRF token store (valid for 1 hour)
const csrfStore = new Map<string, { token: string; expiresAt: number }>()

interface AuditFormData {
  name: string
  business: string
  email: string
  phone: string
  postcode: string
  gasSafeNo?: string
  targetAreas: string
  currentWebsite?: string
  packageInterest?: string
  message?: string
  company?: string // honeypot
  consent: boolean
  turnstileToken?: string
  csrfToken: string
  sessionId: string
}

function generateCsrfToken(): string {
  return Array.from({ length: 32 }, () => 
    Math.floor(Math.random() * 36).toString(36)
  ).join('')
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .trim()
    .slice(0, 1000) // Max length
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

function validatePhone(phone: string): boolean {
  // UK phone number validation (mobiles and landlines)
  const cleaned = phone.replace(/\s/g, '').replace(/^\+44/, '0')
  const phoneRegex = /^(0[1-9]\d{8,10})$/
  return phoneRegex.test(cleaned)
}

function validatePostcode(postcode: string): boolean {
  // UK postcode validation (basic)
  const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i
  return postcodeRegex.test(postcode)
}

function validateGasSafeNumber(gasNo: string): boolean {
  if (!gasNo) return true // Optional field
  // Gas Safe numbers are typically 5-7 digits
  const gasNoRegex = /^\d{5,7}$/
  return gasNoRegex.test(gasNo.replace(/\s/g, ''))
}

function validateUrl(url: string): boolean {
  if (!url) return true // Optional field
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

async function verifyTurnstile(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.warn('Turnstile secret key not configured, skipping verification')
    return true
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error('Turnstile verification error:', error)
    return false
  }
}

function checkRateLimit(ip: string): { allowed: boolean; resetAt?: number } {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true }
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, resetAt: record.resetAt }
  }

  record.count++
  return { allowed: true }
}

function validateCsrfToken(sessionId: string, token: string): boolean {
  const record = csrfStore.get(sessionId)
  if (!record) return false
  
  if (Date.now() > record.expiresAt) {
    csrfStore.delete(sessionId)
    return false
  }
  
  return record.token === token
}

export async function GET(): Promise<NextResponse> {
  // Generate and return a CSRF token
  const sessionId = generateCsrfToken()
  const token = generateCsrfToken()
  
  csrfStore.set(sessionId, {
    token,
    expiresAt: Date.now() + 60 * 60 * 1000, // 1 hour expiry
  })

  // Clean up expired tokens periodically
  const now = Date.now()
  csrfStore.forEach((value, key) => {
    if (now > value.expiresAt) {
      csrfStore.delete(key)
    }
  })

  return NextResponse.json({ 
    csrfToken: token,
    sessionId: sessionId,
  }, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  })
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    let body: Partial<AuditFormData>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      )
    }

    // Honeypot check (bots often fill this hidden field)
    if (body.company && body.company.trim() !== '') {
      // Silently accept but don't process (don't reveal it's a honeypot)
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // CSRF validation
    if (!body.csrfToken || !body.sessionId) {
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 403 }
      )
    }

    if (!validateCsrfToken(body.sessionId, body.csrfToken)) {
      return NextResponse.json(
        { error: 'Invalid or expired session' },
        { status: 403 }
      )
    }

    // Turnstile verification
    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!body.turnstileToken) {
        return NextResponse.json(
          { error: 'Bot verification required' },
          { status: 400 }
        )
      }

      const turnstileValid = await verifyTurnstile(body.turnstileToken)
      if (!turnstileValid) {
        return NextResponse.json(
          { error: 'Bot verification failed' },
          { status: 400 }
        )
      }
    }

    // Strict server-side validation
    const errors: string[] = []

    // Required fields
    if (!body.name?.trim()) {
      errors.push('Name is required')
    } else if (body.name.length > 100) {
      errors.push('Name is too long')
    }

    if (!body.business?.trim()) {
      errors.push('Business name is required')
    } else if (body.business.length > 200) {
      errors.push('Business name is too long')
    }

    if (!body.email?.trim()) {
      errors.push('Email is required')
    } else if (!validateEmail(body.email)) {
      errors.push('Invalid email address')
    }

    if (!body.phone?.trim()) {
      errors.push('Phone number is required')
    } else if (!validatePhone(body.phone)) {
      errors.push('Invalid UK phone number')
    }

    if (!body.postcode?.trim()) {
      errors.push('Postcode is required')
    } else if (!validatePostcode(body.postcode)) {
      errors.push('Invalid UK postcode')
    }

    if (!body.targetAreas?.trim()) {
      errors.push('Target service areas are required')
    }

    if (body.consent !== true) {
      errors.push('Consent is required')
    }

    // Optional field validations
    if (body.gasSafeNo && !validateGasSafeNumber(body.gasSafeNo)) {
      errors.push('Invalid Gas Safe registration number')
    }

    if (body.currentWebsite && !validateUrl(body.currentWebsite)) {
      errors.push('Invalid website URL')
    }

    if (body.packageInterest && !['pilot', 'growth', 'dominator', 'emma', 'audit', ''].includes(body.packageInterest)) {
      errors.push('Invalid package selection')
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', errors },
        { status: 400 }
      )
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(body.name!),
      business: sanitizeInput(body.business!),
      email: body.email!.toLowerCase().trim(),
      phone: body.phone!.trim(),
      postcode: body.postcode!.toUpperCase().trim(),
      gasSafeNo: body.gasSafeNo ? body.gasSafeNo.trim() : '',
      targetAreas: sanitizeInput(body.targetAreas!),
      currentWebsite: body.currentWebsite?.trim() || '',
      packageInterest: body.packageInterest || '',
      message: body.message ? sanitizeInput(body.message) : '',
      submittedAt: new Date().toISOString(),
      source: 'gassafebot.co.uk',
      ip: ip === 'unknown' ? undefined : ip,
    }

    // Send notification email via Resend
    try {
      await resend.emails.send({
        from: 'GasSafeBot <hello@gassafebot.co.uk>',
        to: 'hello@gassafebot.co.uk',
        subject: `New Audit Request: ${sanitizedData.business}`,
        reply_to: sanitizedData.email,
        text: `
New Audit Request

Name: ${sanitizedData.name}
Business: ${sanitizedData.business}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone}
Postcode: ${sanitizedData.postcode}
Gas Safe No: ${sanitizedData.gasSafeNo || 'Not provided'}
Target Areas: ${sanitizedData.targetAreas}
Current Website: ${sanitizedData.currentWebsite || 'Not provided'}
Package Interest: ${sanitizedData.packageInterest || 'Not specified'}

Message:
${sanitizedData.message || 'No additional message'}

Submitted: ${sanitizedData.submittedAt}
Source: ${sanitizedData.source}
        `.trim(),
        html: `
<h2>New Audit Request</h2>
<table>
<tr><td><strong>Name:</strong></td><td>${sanitizedData.name}</td></tr>
<tr><td><strong>Business:</strong></td><td>${sanitizedData.business}</td></tr>
<tr><td><strong>Email:</strong></td><td>${sanitizedData.email}</td></tr>
<tr><td><strong>Phone:</strong></td><td>${sanitizedData.phone}</td></tr>
<tr><td><strong>Postcode:</strong></td><td>${sanitizedData.postcode}</td></tr>
<tr><td><strong>Gas Safe No:</strong></td><td>${sanitizedData.gasSafeNo || 'Not provided'}</td></tr>
<tr><td><strong>Target Areas:</strong></td><td>${sanitizedData.targetAreas}</td></tr>
<tr><td><strong>Current Website:</strong></td><td>${sanitizedData.currentWebsite || 'Not provided'}</td></tr>
<tr><td><strong>Package Interest:</strong></td><td>${sanitizedData.packageInterest || 'Not specified'}</td></tr>
</table>
<h3>Message:</h3>
<p>${sanitizedData.message || 'No additional message'}</p>
<p><small>Submitted: ${sanitizedData.submittedAt}<br>Source: ${sanitizedData.source}</small></p>
        `.trim(),
      })
    } catch (emailError) {
      console.error('Email send failed:', emailError)
      // Don't fail the request if email fails, but log it
    }

    // Also submit to Formspree for backup (optional)
    try {
      const formData = new FormData()
      formData.append('email', sanitizedData.email)
      formData.append('name', sanitizedData.name)
      formData.append('business', sanitizedData.business)
      formData.append('phone', sanitizedData.phone)
      formData.append('postcode', sanitizedData.postcode)
      formData.append('gas_safe_no', sanitizedData.gasSafeNo)
      formData.append('target_areas', sanitizedData.targetAreas)
      formData.append('current_website', sanitizedData.currentWebsite)
      formData.append('package_interest', sanitizedData.packageInterest)
      formData.append('message', sanitizedData.message)
      formData.append('submitted_at', sanitizedData.submittedAt)
      formData.append('source', sanitizedData.source)

      await fetch('https://formspree.io/f/maqplbpp', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })
    } catch {
      // Formspree backup is non-critical
    }

    // Clean up used CSRF token
    csrfStore.delete(body.sessionId)

    return NextResponse.json({ 
      success: true,
      message: 'Audit request received successfully'
    }, { status: 200 })

  } catch (error) {
    console.error('Audit submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
