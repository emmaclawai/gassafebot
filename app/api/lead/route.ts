import { NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set')
  }
  return new Resend(apiKey)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name, business, email, phone, postcode,
      gas_safe_no, target_areas, current_website,
      package_interest, message, submitted_at, source,
    } = body

    // Server-side validation
    if (!name || !business || !email || !phone || !postcode || !target_areas) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Escape all user input before inserting into HTML email
    const safeName = escapeHtml(String(name))
    const safeBusiness = escapeHtml(String(business))
    const safeEmail = escapeHtml(String(email))
    const safePhone = escapeHtml(String(phone || 'Not provided'))
    const safePostcode = escapeHtml(String(postcode || 'Not provided'))
    const safeGasNo = escapeHtml(String(gas_safe_no || 'Not provided'))
    const safeAreas = escapeHtml(String(target_areas || 'Not provided'))
    const safeWebsite = escapeHtml(String(current_website || 'None'))
    const safePackage = escapeHtml(String(package_interest || 'Not selected'))
    const safeMessage = escapeHtml(String(message || 'None'))
    const safeSubmittedAt = escapeHtml(String(submitted_at || new Date().toISOString()))
    const safeSource = escapeHtml(String(source || 'gassafebot.co.uk'))

    const toEmail = process.env.LEAD_EMAIL || 'hello@gassafebot.co.uk'
    const fromEmail = process.env.FROM_EMAIL || 'audit@gassafebot.co.uk'

    const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
body { font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; }
h1 { font-size: 22px; color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px; }
table { width: 100%; border-collapse: collapse; margin: 20px 0; }
td { padding: 10px 12px; border-bottom: 1px solid #eee; vertical-align: top; }
td:first-child { font-weight: bold; color: #555; width: 40%; }
.highlight { background: #fff7ed; }
.footer { font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; }
</style></head>
<body>
<h1>🔥 New GasSafeBot Audit Lead</h1>
<p>A new audit request has been submitted on gassafebot.co.uk.</p>
<table>
  <tr class="highlight"><td>Name</td><td>${safeName}</td></tr>
  <tr><td>Business</td><td>${safeBusiness}</td></tr>
  <tr class="highlight"><td>Email</td><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
  <tr><td>Mobile</td><td>${safePhone}</td></tr>
  <tr class="highlight"><td>Postcode</td><td>${safePostcode}</td></tr>
  <tr><td>Gas Safe Reg No.</td><td>${safeGasNo}</td></tr>
  <tr class="highlight"><td>Target Areas</td><td>${safeAreas}</td></tr>
  <tr><td>Current Website</td><td>${safeWebsite}</td></tr>
  <tr class="highlight"><td>Package Interest</td><td>${safePackage}</td></tr>
  <tr><td>Message</td><td>${safeMessage}</td></tr>
  <tr class="highlight"><td>Submitted At</td><td>${safeSubmittedAt}</td></tr>
  <tr><td>Source</td><td>${safeSource}</td></tr>
</table>
<div class="footer">
  This lead was submitted via gassafebot.co.uk. Reply to this email to contact ${safeName} directly.
</div>
</body>
</html>`

    const resend = getResend()
    await resend.emails.send({
      from: `GasSafeBot Leads <${fromEmail}>`,
      to: toEmail,
      reply_to: email,
      subject: `🔥 New Audit Request: ${safeBusiness} (${safePostcode})`,
      html: emailHtml,
    })

    // Optional: send confirmation email to lead
    if (process.env.SEND_CONFIRMATION === 'true') {
      await resend.emails.send({
        from: `GasSafeBot <${fromEmail}>`,
        to: email,
        subject: 'Your GasSafeBot Audit Request — Received',
        html: `
<html><body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
<h2 style="color:#f97316">We've got your request, ${name.split(' ')[0]}</h2>
<p>Thanks for reaching out to GasSafeBot. We'll review your business and area, check your local competition, and send your personalised ranking plan within 1 business day.</p>
<p><strong>What to expect:</strong> A clear audit of your current online presence, your competitors in <strong>${target_areas}</strong>, recommended target keywords, and a realistic assessment of what it would take to rank there.</p>
<p style="color:#888;font-size:13px">If you have any questions in the meantime, reply to this email.</p>
<p>— The GasSafeBot team</p>
</body></html>`,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
