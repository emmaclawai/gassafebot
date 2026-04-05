'use client'

import { useState, FormEvent, useEffect } from 'react'
import Script from 'next/script'

interface FormState {
  name: string
  business: string
  email: string
  phone: string
  postcode: string
  gasno: string
  areas: string
  site: string
  pkg: string
  msg: string
  company: string // honeypot
  consent: boolean
}

interface CsrfData {
  token: string
  sessionId: string
}

const initialState: FormState = {
  name: '', business: '', email: '', phone: '',
  postcode: '', gasno: '', areas: '', site: '',
  pkg: '', msg: '', company: '', consent: false,
}

export default function AuditForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [csrf, setCsrf] = useState<CsrfData | null>(null)
  const [turnstileLoaded, setTurnstileLoaded] = useState(false)

  // Fetch CSRF token on mount
  useEffect(() => {
    const fetchCsrf = async () => {
      try {
        const res = await fetch('/api/audit')
        if (res.ok) {
          const data = await res.json()
          setCsrf(data)
        }
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error)
      }
    }
    fetchCsrf()
  }, [])

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const val = e.target.type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : e.target.value
    setForm((f) => ({ ...f, [key]: val }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: false }))
  }

  const validate = (): boolean => {
    const required: (keyof FormState)[] = ['name', 'business', 'email', 'phone', 'postcode', 'areas', 'consent']
    const newErrors: Partial<Record<keyof FormState, boolean>> = {}
    
    required.forEach((k) => {
      if (!form[k] || (typeof form[k] === 'string' && !(form[k] as string).trim())) {
        newErrors[k] = true
      }
    })
    
    if (!form.consent) newErrors.consent = true
    
    // Additional client-side validation
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = true
    }
    
    // UK phone validation
    if (form.phone) {
      const cleaned = form.phone.replace(/\s/g, '').replace(/^\+44/, '0')
      if (!/^(0[1-9]\d{8,10})$/.test(cleaned)) {
        newErrors.phone = true
      }
    }
    
    // UK postcode validation
    if (form.postcode) {
      const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i
      if (!postcodeRegex.test(form.postcode)) {
        newErrors.postcode = true
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (form.company) return
    
    // Validation
    if (!validate()) return

    // CSRF check
    if (!csrf) {
      setServerError('Session expired. Please refresh the page.')
      return
    }

    // Turnstile verification
    const turnstileResponse = (window as typeof window & { turnstile?: { getResponse: (id: string) => string | undefined; reset: (id: string) => void } }).turnstile?.getResponse('audit-turnstile')
    if (!turnstileResponse && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      setServerError('Please complete the security verification.')
      return
    }

    setSubmitting(true)
    setServerError(null)

    try {
      const payload = {
        name: form.name.trim(),
        business: form.business.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        postcode: form.postcode.trim().toUpperCase(),
        gasSafeNo: form.gasno.trim(),
        targetAreas: form.areas.trim(),
        currentWebsite: form.site.trim(),
        packageInterest: form.pkg,
        message: form.msg.trim(),
        company: form.company,
        consent: form.consent,
        turnstileToken: turnstileResponse,
        csrfToken: csrf.token,
        sessionId: csrf.sessionId,
      }

      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || data.errors?.[0] || 'Submission failed')
      }

      setSuccess(true)
      
      // Reset turnstile
      const turnstile = (window as typeof window & { turnstile?: { reset: (id: string) => void } }).turnstile
      if (turnstile) {
        turnstile.reset('audit-turnstile')
      }
      
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      
      // Reset turnstile on error
      const turnstile = (window as typeof window & { turnstile?: { reset: (id: string) => void } }).turnstile
      if (turnstile) {
        turnstile.reset('audit-turnstile')
      }
      
      // Refresh CSRF token on error
      try {
        const res = await fetch('/api/audit')
        if (res.ok) {
          const data = await res.json()
          setCsrf(data)
        }
      } catch {
        // Ignore refresh error
      }
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="form-success show">
        <div className="check">🔥</div>
        <h3>Audit Request Received</h3>
        <p>
          We&apos;ll review your business and area, check your local competition, and send your personalised
          ranking plan to <strong>{form.email}</strong> within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onLoad={() => setTurnstileLoaded(true)}
      />
      
      <form onSubmit={handleSubmit}>
        {serverError && (
          <div className="form-error-banner show" role="alert">
            {serverError}
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text" id="name" name="name" autoComplete="name"
              placeholder="John Smith" required maxLength={100}
              value={form.name} onChange={set('name')}
              className={errors.name ? 'error' : ''}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span id="name-error" className="field-error">Name is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="biz">Business Name *</label>
            <input
              type="text" id="biz" name="business" autoComplete="organization"
              placeholder="Smith Gas Services" required maxLength={200}
              value={form.business} onChange={set('business')}
              className={errors.business ? 'error' : ''}
              aria-invalid={errors.business ? 'true' : 'false'}
            />
            {errors.business && <span className="field-error">Business name is required</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email" id="email" name="email" autoComplete="email"
              placeholder="john@smithgas.co.uk" required maxLength={254}
              value={form.email} onChange={set('email')}
              className={errors.email ? 'error' : ''}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <span className="field-error">Valid email is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile *</label>
            <input
              type="tel" id="phone" name="phone" autoComplete="tel"
              placeholder="07700 900000" required
              value={form.phone} onChange={set('phone')}
              className={errors.phone ? 'error' : ''}
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && <span className="field-error">Valid UK phone number required</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="postcode">Your Postcode *</label>
            <input
              type="text" id="postcode" name="postcode" autoComplete="postal-code"
              placeholder="M1 2AB" required maxLength={10}
              value={form.postcode} onChange={set('postcode')}
              className={errors.postcode ? 'error' : ''}
              aria-invalid={errors.postcode ? 'true' : 'false'}
            />
            {errors.postcode && <span className="field-error">Valid UK postcode required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="gasno">Gas Safe Reg No.</label>
            <input
              type="text" id="gasno" name="gasno"
              placeholder="123456" maxLength={10}
              value={form.gasno} onChange={set('gasno')}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="areas">Target Service Areas *</label>
          <input
            type="text" id="areas" name="areas"
            placeholder="e.g. Manchester, Salford, Eccles, Stretford" required maxLength={500}
            value={form.areas} onChange={set('areas')}
            className={errors.areas ? 'error' : ''}
            aria-invalid={errors.areas ? 'true' : 'false'}
          />
          {errors.areas && <span className="field-error">Service areas are required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="site">Current Website (if any)</label>
          <input
            type="url" id="site" name="site" autoComplete="url"
            placeholder="https://yoursite.co.uk — leave blank if none" maxLength={500}
            value={form.site} onChange={set('site')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pkg">I&apos;m Interested In</label>
          <select id="pkg" name="pkg" value={form.pkg} onChange={set('pkg')}>
            <option value="">Select a package...</option>
            <option value="pilot">Pilot — £497 + £197/month</option>
            <option value="growth">Growth — £997 + £347/month (Most Popular)</option>
            <option value="dominator">Dominator — £1,797 + £597/month</option>
            <option value="emma">Emma add-on only</option>
            <option value="audit">Just the free audit first</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="msg">Anything Else?</label>
          <textarea
            id="msg" name="msg"
            placeholder="Tell us about your business, how many areas you cover, what services you offer, biggest challenge..."
            value={form.msg} onChange={set('msg')}
            maxLength={2000}
            rows={4}
          />
        </div>

        {/* Honeypot - hidden from users, bots often fill it */}
        <div className="honeypot-field" aria-hidden="true" style={{ display: 'none' }}>
          <label htmlFor="company">Leave this field blank</label>
          <input
            type="text" id="company" name="company" tabIndex={-1} autoComplete="off"
            value={form.company} onChange={set('company')}
            aria-hidden="true"
          />
        </div>

        {/* Turnstile Widget */}
        {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <div
              className="cf-turnstile"
              data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              data-theme="dark"
              id="audit-turnstile"
            />
          </div>
        )}

        <div className="form-group">
          <label className="label-normal" htmlFor="consent" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="checkbox" id="consent" name="consent" required
              checked={form.consent} onChange={set('consent')}
              style={{ width: 'auto', marginTop: '2px', flexShrink: 0 }}
              className={errors.consent ? 'error' : ''}
              aria-invalid={errors.consent ? 'true' : 'false'}
            />
            <span>
              I agree to the{' '}
              <a href="/privacy-policy" style={{ color: 'var(--fire)' }} target="_blank" rel="noopener">
                privacy policy
              </a>{' '}
              and consent to being contacted about my audit request. *
            </span>
          </label>
          {errors.consent && <span className="field-error">Consent is required</span>}
        </div>

        <button
          type="submit"
          className="form-submit"
          disabled={submitting || !csrf}
          aria-busy={submitting}
        >
          {submitting ? 'Sending...' : csrf ? 'Send My Free Audit Request →' : 'Loading...'}
        </button>

        <p className="form-note">
          No spam. No unsolicited calls. Just a personalised ranking plan within 1 business day.
        </p>
      </form>
    </>
  )
}
