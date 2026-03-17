'use client'

import { useState, FormEvent } from 'react'

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
  const [serverError, setServerError] = useState(false)

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const val = e.target.type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : e.target.value
    setForm((f) => ({ ...f, [key]: val }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: false }))
  }

  const validate = () => {
    const required: (keyof FormState)[] = ['name', 'business', 'email', 'phone', 'postcode', 'areas', 'consent']
    const newErrors: Partial<Record<keyof FormState, boolean>> = {}
    required.forEach((k) => {
      if (!form[k] || (typeof form[k] === 'string' && !(form[k] as string).trim())) {
        newErrors[k] = true
      }
    })
    if (!form.consent) newErrors.consent = true
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (form.company) return // honeypot triggered
    if (!validate()) return

    setSubmitting(true)
    setServerError(false)

    try {
      const res = await fetch('https://formspree.io/f/maqplbpp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          business: form.business,
          email: form.email,
          phone: form.phone,
          postcode: form.postcode,
          gas_safe_no: form.gasno,
          target_areas: form.areas,
          current_website: form.site,
          package_interest: form.pkg,
          message: form.msg,
          submitted_at: new Date().toISOString(),
          source: 'gassafebot.co.uk',
        }),
      })

      if (!res.ok) throw new Error('API error')
      setSuccess(true)
    } catch {
      setServerError(true)
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
    <form onSubmit={handleSubmit} noValidate>
      {serverError && (
        <div className="form-error-banner show" role="alert">
          Something went wrong. Please try again or email{' '}
          <a href="mailto:hello@gassafebot.co.uk" style={{ color: 'var(--fire)' }}>
            hello@gassafebot.co.uk
          </a>
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input
            type="text" id="name" name="name" autoComplete="name"
            placeholder="John Smith" required
            value={form.name} onChange={set('name')}
            className={errors.name ? 'error' : ''}
            aria-invalid={errors.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="biz">Business Name *</label>
          <input
            type="text" id="biz" name="business" autoComplete="organization"
            placeholder="Smith Gas Services" required
            value={form.business} onChange={set('business')}
            className={errors.business ? 'error' : ''}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email" id="email" name="email" autoComplete="email"
            placeholder="john@smithgas.co.uk" required
            value={form.email} onChange={set('email')}
            className={errors.email ? 'error' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Mobile *</label>
          <input
            type="tel" id="phone" name="phone" autoComplete="tel"
            placeholder="07700 900000" required
            value={form.phone} onChange={set('phone')}
            className={errors.phone ? 'error' : ''}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="postcode">Your Postcode *</label>
          <input
            type="text" id="postcode" name="postcode" autoComplete="postal-code"
            placeholder="M1 2AB" required
            value={form.postcode} onChange={set('postcode')}
            className={errors.postcode ? 'error' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gasno">Gas Safe Reg No.</label>
          <input
            type="text" id="gasno" name="gasno"
            placeholder="123456"
            value={form.gasno} onChange={set('gasno')}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="areas">Target Service Areas *</label>
        <input
          type="text" id="areas" name="areas"
          placeholder="e.g. Manchester, Salford, Eccles, Stretford" required
          value={form.areas} onChange={set('areas')}
          className={errors.areas ? 'error' : ''}
        />
      </div>

      <div className="form-group">
        <label htmlFor="site">Current Website (if any)</label>
        <input
          type="url" id="site" name="site" autoComplete="url"
          placeholder="https://yoursite.co.uk — leave blank if none"
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
        />
      </div>

      {/* Honeypot */}
      <div className="honeypot-field" aria-hidden="true">
        <label htmlFor="company">Leave blank</label>
        <input
          type="text" id="company" name="company" tabIndex={-1} autoComplete="off"
          value={form.company} onChange={set('company')}
        />
      </div>

      <div className="form-group">
        <label className="label-normal" htmlFor="consent" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox" id="consent" name="consent" required
            checked={form.consent} onChange={set('consent')}
            style={{ width: 'auto', marginTop: '2px', flexShrink: 0 }}
            className={errors.consent ? 'error' : ''}
          />
          <span>
            I agree to the{' '}
            <a href="/privacy-policy" style={{ color: 'var(--fire)' }} target="_blank" rel="noopener">
              privacy policy
            </a>{' '}
            and consent to being contacted about my audit request. *
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="form-submit"
        disabled={submitting}
        aria-busy={submitting}
      >
        {submitting ? 'Sending...' : 'Send My Free Audit Request →'}
      </button>

      <p className="form-note">
        No spam. No unsolicited calls. Just a personalised ranking plan within 1 business day.
      </p>
    </form>
  )
}
