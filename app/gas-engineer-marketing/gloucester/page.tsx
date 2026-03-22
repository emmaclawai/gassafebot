import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gas Engineer Marketing Gloucester | Rank #1 on Google | GasSafeBot',
  description: 'We help Gas Safe engineers in Gloucester dominate Google. Websites built for local search, AI receptionist, SEO targeting GL1–GL4 postcodes. Free audit.',
  alternates: {
    canonical: 'https://gassafebot.co.uk/gas-engineer-marketing/gloucester/'
  },
  openGraph: {
    title: 'Gas Engineer Marketing Gloucester | GasSafeBot',
    description: 'Rank #1 on Google for gas engineer searches across Gloucester and the surrounding area.',
    url: 'https://gassafebot.co.uk/gas-engineer-marketing/gloucester/',
    type: 'website',
  },
}

const areas = [
  { name: "City Centre", postcode: "GL1" },
  { name: "Longlevens", postcode: "GL2" },
  { name: "Barnwood", postcode: "GL4" },
  { name: "Quedgeley", postcode: "GL2" },
  { name: "Hucclecote", postcode: "GL3" },
  { name: "Tuffley", postcode: "GL4" },
  { name: "Kingsholm", postcode: "GL1" },
  { name: "Matson", postcode: "GL4" },
  { name: "Abbeydale", postcode: "GL4" },
  { name: "Innsworth", postcode: "GL3" },
  { name: "Brockworth", postcode: "GL3" },
  { name: "Churchdown", postcode: "GL3" }
]

const keywords = [
  "gas engineer Gloucester",
  "boiler service Gloucester",
  "Gas Safe engineer GL1",
  "boiler installation Gloucester",
  "emergency gas engineer Gloucester",
  "heating engineer Longlevens",
  "landlord gas certificate Gloucester",
  "boiler repair GL4",
  "central heating Gloucester",
  "gas engineer Quedgeley"
]

const stats = [
  { value: '1,600+', label: 'Monthly searches for gas engineers in Gloucester' },
  { value: '£0', label: 'Most Gloucester engineers spend on Google presence' },
  { value: '94%', label: 'Of customers pick from the first Google page' },
  { value: '4–7', label: 'Weeks to rank on page 1 for Gloucester terms' },
]

const packages = [
  {
    name: 'Pilot',
    setup: '£497',
    monthly: '+ £197/month',
    featured: false,
    features: ['5-page Gloucester website', 'Google Business Profile setup', 'Emma AI receptionist', '3 area landing pages', 'Monthly ranking report']
  },
  {
    name: 'Growth',
    setup: '£997',
    monthly: '+ £347/month',
    featured: true,
    features: ['10-page Gloucester website', 'Full Google Business optimisation', 'Emma AI receptionist', 'All GL1–GL4 area pages', 'Directory citation building', 'Monthly content updates', 'Competitor tracking']
  },
  {
    name: 'Dominator',
    setup: '£1,797',
    monthly: '+ £597/month',
    featured: false,
    features: ['Full Gloucester area dominance', '20+ area landing pages', 'Emma AI receptionist + calendar', 'Weekly content & SEO', 'Backlink building', 'Priority support']
  },
]

export default function GloucesterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Gas Engineer Marketing Gloucester',
            provider: {
              '@type': 'Organization',
              name: 'GasSafeBot',
              url: 'https://gassafebot.co.uk'
            },
            areaServed: {
              '@type': 'City',
              name: 'Gloucester'
            },
            description: 'SEO, websites and AI receptionists for Gas Safe engineers in Gloucester'
          })
        }}
      />
      <main>
        <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', fontSize: '0.85rem', color: 'var(--muted)' }}>
          <div className="container">
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            {' '}›{' '}
            <Link href="/gas-engineer-marketing" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Gas Engineer Marketing</Link>
            {' '}›{' '}
            <span aria-current="page">Gloucester</span>
          </div>
        </nav>

        <section style={{ padding: '5rem 0 4rem', textAlign: 'center' }}>
          <div className="container">
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,107,0,0.12)',
              color: 'var(--fire)',
              border: '1px solid rgba(255,107,0,0.3)',
              padding: '0.4rem 1.2rem',
              borderRadius: '2rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              letterSpacing: '0.05em'
            }}>
              📍 Gloucester · GL1–GL4 &amp; surrounding
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Gas Engineer Marketing<br /><span style={{ color: 'var(--fire)' }}>Gloucester</span>
            </h1>

            <p style={{ maxWidth: 680, margin: '0 auto 2.5rem', fontSize: '1.15rem', lineHeight: 1.7, opacity: 0.75 }}>
              Gloucester is one of the most underserved markets for gas engineer SEO in the UK. The city has a high proportion of older housing stock — terraced Victorian and Edwardian homes that need regular servicing and eventual boiler replacements. Engineers who rank here face almost no digital competition.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#audit" className="btn-primary">Get My Free Gloucester Audit →</Link>
              <Link href="#how-it-works" className="btn-ghost">See How It Works</Link>
            </div>
          </div>
        </section>

        <section style={{ background: 'rgba(255,107,0,0.06)', borderTop: '1px solid rgba(255,107,0,0.15)', borderBottom: '1px solid rgba(255,107,0,0.15)', padding: '2.5rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <span style={{ display: 'block', fontSize: '2.2rem', fontWeight: 800, color: 'var(--fire)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.value}</span>
                  <span style={{ fontSize: '0.88rem', opacity: 0.6, lineHeight: 1.4 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.9rem', marginBottom: '1.5rem' }}>The Gloucester Opportunity</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.2rem', opacity: 0.75 }}>Gloucester sits in a sweet spot: large enough to sustain a busy gas engineering business, but small enough that almost no engineer has invested in their online presence. The GL postcode area also covers parts of the Cotswolds where wealthy homeowners expect fast, professional service and will pay premium rates. A well-ranked website here can book an engineer solid for months.</p>

            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.5rem', marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                ['Population', '~140,000'],
                ['Key postcodes', 'GL1, GL2, GL3, GL4'],
                ['Competition', 'Low'],
                ['Peak demand', 'Oct–Mar + Cotswold overflow'],
                ['Ranking timeline', '4–7 weeks to page 1']
              ].map(([k,v]) => (
                <div key={k} style={{ fontSize: '0.9rem', opacity: 0.75 }}>
                  <strong style={{ color: 'white' }}>{k}:</strong> {v}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 0', background: 'rgba(255,255,255,0.02)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Keywords We Target for Gloucester Engineers</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 3rem', opacity: 0.7, lineHeight: 1.7 }}>The exact searches your customers type — we make sure you show up for all of them.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
              {keywords.map(kw => (
                <div key={kw} style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.2)', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '2rem', fontSize: '0.9rem' }}>
                  🔍 {kw}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 0' }} id="how-it-works">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>How We Rank You in Gloucester</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 3rem', opacity: 0.7, lineHeight: 1.7 }}>Three things working together. Each one compounds the others.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', textAlign: 'left' }}>
              {[
                {
                  num: '01',
                  title: 'Your Gloucester Website',
                  body: 'Built for the GL1–GL4 postcode area with real local content. Fast on mobile. Every page targets the suburbs and searches your customers actually use.'
                },
                {
                  num: '02',
                  title: 'Local SEO That Sticks',
                  body: 'Google Business Profile optimised for Gloucester. Directory citations. Area pages for every major suburb. This gets you into the map pack where most enquiries come from.'
                },
                {
                  num: '03',
                  title: 'Emma — Never Miss a Call',
                  body: 'When a customer in Quedgeley calls about a gas safety check while you\'re on a job, Emma answers, qualifies the work, and books it straight into your calendar.'
                },
              ].map(s => (
                <div key={s.num} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(255,107,0,0.25)', lineHeight: 1, marginBottom: '1rem' }}>{s.num}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.7, margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 0', background: 'rgba(255,255,255,0.02)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Gloucester Areas We Build Pages For</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 3rem', opacity: 0.7, lineHeight: 1.7 }}>Every suburb gets its own page so you rank for hyper-local searches too.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
              {areas.map(area => (
                <div key={area.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '0.9rem 1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{area.name}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--fire)', background: 'rgba(255,107,0,0.1)', padding: '0.2rem 0.5rem', borderRadius: 4, fontWeight: 600 }}>{area.postcode}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Packages for Gloucester Engineers</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 3rem', opacity: 0.7, lineHeight: 1.7 }}>All packages include website, local SEO for the GL1–GL4 area, and Emma the AI receptionist.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {packages.map(pkg => (
                <div key={pkg.name} style={{ background: pkg.featured ? 'rgba(255,107,0,0.05)' : 'rgba(255,255,255,0.03)', border: pkg.featured ? '1px solid rgba(255,107,0,0.4)' : '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '2rem', position: 'relative' }}>
                  {pkg.featured && (
                    <div style={{ position: 'absolute', top: '-0.7rem', left: '50%', transform: 'translateX(-50%)', background: 'var(--fire)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.9rem', borderRadius: '2rem', whiteSpace: 'nowrap' }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ color: 'var(--fire)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{pkg.name}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}>
                    {pkg.setup} <span style={{ fontSize: '0.9rem', fontWeight: 400, opacity: 0.5 }}>setup</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '1.5rem' }}>{pkg.monthly}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', opacity: 0.75, textAlign: 'left' }}>
                    {pkg.features.map(f => <li key={f}>✓ {f}</li>)}
                  </ul>
                  <Link href="/#audit" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Start with {pkg.name} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '6rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2>Ready to Own Gas Engineer Search in Gloucester?</h2>
            <p style={{ maxWidth: 520, margin: '0 auto 2.5rem', opacity: 0.7, lineHeight: 1.7 }}>Get your free Gloucester audit. We&apos;ll show you where you rank, who&apos;s ahead, and the exact plan to reach page 1.</p>
            <Link href="/#audit" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem' }}>Get My Free Gloucester Audit →</Link>
            <p style={{ marginTop: '1.2rem', fontSize: '0.85rem', opacity: 0.45 }}>No contract. No cold call. Personalised plan within 1 business day.</p>
          </div>
        </section>
      </main>
    </>
  )
}
