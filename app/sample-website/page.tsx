import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sample Gas Engineer Website | GasSafeBot',
  description: 'Preview the style, structure, and content of a GasSafeBot gas engineer website before you commit.',
}

const pages = [
  { name: 'Homepage', path: '/', description: 'Hero, services, trust signals, contact form', keywords: '"gas engineer [town]", "boiler service [town]"' },
  { name: 'Boiler Servicing', path: '/boiler-servicing', description: 'Dedicated service page, pricing info, FAQs', keywords: '"boiler service [town]", "annual boiler service"' },
  { name: 'Boiler Installation', path: '/boiler-installation', description: 'Brands, process, guarantees, finance options', keywords: '"new boiler [town]", "boiler installation [town]"' },
  { name: 'Gas Safety Certificates', path: '/gas-safety-certificates', description: 'Landlord CP12, what\'s included, booking', keywords: '"landlord gas certificate [town]", "CP12 [town]"' },
  { name: 'Emergency Callout', path: '/emergency-gas-engineer', description: 'Urgent copy, response time, 24/7 availability', keywords: '"emergency gas engineer [town]"' },
  { name: 'Area Pages (×10)', path: '/[area]', description: 'One page per suburb — unique local content per area', keywords: '"gas engineer [postcode]", "[suburb] boiler service"' },
  { name: 'About', path: '/about', description: 'Engineer background, Gas Safe number, photo, story', keywords: 'Trust signal — not for ranking' },
  { name: 'Contact', path: '/contact', description: 'Form, phone, coverage map, working hours', keywords: 'Conversion page' },
]

const features = [
  { icon: '⚡', title: 'Sub-2 second load time', body: 'Built on Next.js, hosted on Vercel\'s edge network. Fast everywhere in the UK.' },
  { icon: '📱', title: 'Mobile-first layout', body: '78% of gas engineer searches happen on phones. Every page is designed for mobile first.' },
  { icon: '🔍', title: 'SEO-optimised from day one', body: 'Schema markup, optimised title tags, meta descriptions, and H1s — all written for your target keywords.' },
  { icon: '📍', title: 'Local area pages', body: 'Dedicated pages for every suburb you cover. Each one targets postcode-level search terms.' },
  { icon: '📞', title: 'Click-to-call on every page', body: 'Your phone number is tappable on every page — no copying, no frustration.' },
  { icon: '🔒', title: 'SSL and secure hosting', body: 'HTTPS as standard. Google penalises non-secure sites — yours will never have this problem.' },
  { icon: '✉️', title: 'Instant lead alerts', body: 'Every form submission emails you immediately. No leads sit waiting in a dashboard.' },
  { icon: '🏅', title: 'Gas Safe badge displayed', body: 'Your registration number and Gas Safe logo displayed prominently on every page.' },
]

export default function SampleWebsitePage() {
  return (
    <main>
      <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', fontSize: '0.85rem', opacity: 0.5 }}>
        <div className="container">
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> › <span>Sample Website</span>
        </div>
      </nav>

      <section style={{ padding: '4rem 0 3rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,107,0,0.12)', color: 'var(--fire)', border: '1px solid rgba(255,107,0,0.3)', padding: '0.4rem 1.2rem', borderRadius: '2rem', fontSize: '0.82rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>🖥️ Sample Website</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}>What We Build for Every Gas Engineer</h1>
          <p style={{ maxWidth: 620, margin: '0 auto 2rem', opacity: 0.7, lineHeight: 1.7, fontSize: '1.05rem' }}>A professional, fast-loading website isn&apos;t just about looking good. Every page, every word, every technical detail is built around one goal: getting you found when customers search for a gas engineer in your area.</p>
        </div>
      </section>

      {/* Mock website preview */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.8rem' }}>Website Structure</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '2.5rem', fontSize: '0.95rem' }}>Every website includes these pages as standard. Area pages scale based on your package.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {pages.map((page) => (
              <div key={page.name} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '1.3rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <strong style={{ fontSize: '0.95rem' }}>{page.name}</strong>
                  <code style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.5rem', borderRadius: 4, opacity: 0.6, whiteSpace: 'nowrap' }}>{page.path}</code>
                </div>
                <p style={{ fontSize: '0.85rem', opacity: 0.65, lineHeight: 1.5, margin: '0 0 0.5rem' }}>{page.description}</p>
                <div style={{ fontSize: '0.78rem', color: 'var(--fire)', opacity: 0.8 }}>🔍 {page.keywords}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock homepage preview */}
      <section style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.8rem' }}>Homepage Preview</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '2.5rem', fontSize: '0.95rem' }}>This is the structure and content approach we use on every homepage — adapted for your business name, area, and services.</p>
          <div style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, overflow: 'hidden', maxWidth: 680, margin: '0 auto' }}>
            {/* Browser chrome */}
            <div style={{ background: '#1a1f2e', padding: '0.7rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {['#ef4444','#f97316','#22c55e'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.6 }} />)}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 4, padding: '0.25rem 1rem', fontSize: '0.78rem', opacity: 0.5, flex: 1, textAlign: 'center' }}>johnsmithheating.co.uk</div>
            </div>
            {/* Mock content */}
            <div style={{ padding: '2rem' }}>
              <div style={{ fontSize: '0.7rem', opacity: 0.4, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Gas Safe Reg: 123456 · Serving Swindon & Wiltshire</div>
              <div style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '0.8rem' }}>Swindon&apos;s Trusted<br /><span style={{ color: 'var(--fire)' }}>Gas Engineer</span></div>
              <p style={{ fontSize: '0.88rem', opacity: 0.65, lineHeight: 1.6, marginBottom: '1.2rem' }}>Gas Safe registered engineer covering Swindon, Old Town, Freshbrook, Wroughton and surrounding areas. Boiler servicing, installations, repairs, and landlord CP12 certificates.</p>
              <div style={{ display: 'flex', gap: '0.7rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ background: 'var(--fire)', color: 'white', padding: '0.6rem 1.2rem', borderRadius: 6, fontSize: '0.85rem', fontWeight: 700 }}>📞 Call Now</div>
                <div style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '0.6rem 1.2rem', borderRadius: 6, fontSize: '0.85rem', opacity: 0.7 }}>Get a Quote</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['⭐ Gas Safe Registered', '✓ Swindon based', '✓ Same-day available'].map(t => (
                  <span key={t} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.6rem', borderRadius: 20, opacity: 0.7 }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8rem' }}>
                {[['🔥', 'Boiler Service', 'From £75'], ['🏠', 'New Boilers', 'Supply & fit'], ['📋', 'CP12 Certs', 'Same day']].map(([icon, title, sub]) => (
                  <div key={title} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '0.8rem 0.5rem' }}>
                    <div style={{ fontSize: '1.2rem' }}>{icon}</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '0.3rem' }}>{title}</div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.5 }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.8rem' }}>What Every Website Includes</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '2.5rem', fontSize: '0.95rem' }}>No hidden extras. Everything below is standard on every build.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {features.map((f) => (
              <div key={f.title} style={{ display: 'flex', gap: '1rem', padding: '1.2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem', marginBottom: '0.3rem' }}>{f.title}</strong>
                  <span style={{ fontSize: '0.85rem', opacity: 0.6, lineHeight: 1.5 }}>{f.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Want a Website Like This?</h2>
          <p style={{ maxWidth: 500, margin: '0 auto 2.5rem', opacity: 0.7, lineHeight: 1.7 }}>Fill in the audit form and we&apos;ll show you exactly what your site would look like and what it would take to rank in your area.</p>
          <Link href="/#audit" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.05rem' }}>Get My Free Audit →</Link>
          <p style={{ marginTop: '1.2rem', fontSize: '0.85rem', opacity: 0.4 }}>No cost. No obligation. No sales call unless you ask for one.</p>
        </div>
      </section>
    </main>
  )
}
