import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gas Engineer Marketing Wakefield | Rank #1 on Google | GasSafeBot',
  description: 'We help Gas Safe engineers in Wakefield dominate Google. Websites built for local search, AI receptionist, SEO targeting WF1–WF4 postcodes. Free audit.',
  alternates: {
    canonical: 'https://gassafebot.co.uk/gas-engineer-marketing/wakefield/'
  },
  openGraph: {
    title: 'Gas Engineer Marketing Wakefield | GasSafeBot',
    description: 'Rank #1 on Google for gas engineer searches across Wakefield and the surrounding area.',
    url: 'https://gassafebot.co.uk/gas-engineer-marketing/wakefield/',
    type: 'website',
  },
}

const areas = [
  { name: "City Centre", postcode: "WF1" },
  { name: "Horbury", postcode: "WF4" },
  { name: "Ossett", postcode: "WF5" },
  { name: "Sandal", postcode: "WF2" },
  { name: "Lupset", postcode: "WF2" },
  { name: "Agbrigg", postcode: "WF1" },
  { name: "Stanley", postcode: "WF3" },
  { name: "Outwood", postcode: "WF1" },
  { name: "Normanton", postcode: "WF6" },
  { name: "Castleford", postcode: "WF10" },
  { name: "Pontefract", postcode: "WF8" },
  { name: "Knottingley", postcode: "WF11" }
]

const keywords = [
  "gas engineer Wakefield",
  "boiler service Wakefield",
  "Gas Safe engineer WF1",
  "boiler installation Wakefield",
  "emergency gas engineer Wakefield",
  "heating engineer Horbury",
  "landlord gas certificate Wakefield",
  "boiler repair WF2",
  "central heating Wakefield",
  "gas engineer Ossett"
]

const stats = [
  { value: '2,400+', label: 'Monthly searches for gas engineers in Wakefield' },
  { value: '£0', label: 'Most Wakefield engineers spend on Google presence' },
  { value: '94%', label: 'Of customers pick from the first Google page' },
  { value: '6–10', label: 'Weeks to rank on page 1 for Wakefield terms' },
]

const packages = [
  {
    name: 'Pilot',
    setup: '£497',
    monthly: '+ £197/month',
    featured: false,
    features: ['5-page Wakefield website', 'Google Business Profile setup', 'Emma AI receptionist', '3 area landing pages', 'Monthly ranking report']
  },
  {
    name: 'Growth',
    setup: '£997',
    monthly: '+ £347/month',
    featured: true,
    features: ['10-page Wakefield website', 'Full Google Business optimisation', 'Emma AI receptionist', 'All WF1–WF4 area pages', 'Directory citation building', 'Monthly content updates', 'Competitor tracking']
  },
  {
    name: 'Dominator',
    setup: '£1,797',
    monthly: '+ £597/month',
    featured: false,
    features: ['Full Wakefield area dominance', '20+ area landing pages', 'Emma AI receptionist + calendar', 'Weekly content & SEO', 'Backlink building', 'Priority support']
  },
]

export default function WakefieldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gassafebot.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Gas Engineer Marketing', item: 'https://gassafebot.co.uk/gas-engineer-marketing/' },
              { '@type': 'ListItem', position: 3, name: 'Wakefield', item: 'https://gassafebot.co.uk/gas-engineer-marketing/wakefield/' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Gas Engineer Marketing Wakefield',
            provider: {
              '@type': 'Organization',
              name: 'GasSafeBot',
              url: 'https://gassafebot.co.uk'
            },
            areaServed: {
              '@type': 'City',
              name: 'Wakefield'
            },
            description: 'SEO, websites and AI receptionists for Gas Safe engineers in Wakefield'
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
            <span aria-current="page">Wakefield</span>
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
              📍 Wakefield · WF1–WF4 &amp; surrounding
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Gas Engineer Marketing<br /><span style={{ color: 'var(--fire)' }}>Wakefield</span>
            </h1>

            <p style={{ maxWidth: 680, margin: '0 auto 2.5rem', fontSize: '1.15rem', lineHeight: 1.7, opacity: 0.75 }}>
              Yorkshire winters hit hard. Wakefield homeowners know what a broken boiler in January means, and they search Google the moment something goes wrong. Most engineers in this area have no website at all — they're relying on word of mouth in a city of 230,000 people. The engineer who shows up on Google page 1 picks up all the work their neighbours never knew existed.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#audit" className="btn-primary">Get My Free Wakefield Audit →</Link>
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
            <h2 style={{ fontSize: '1.9rem', marginBottom: '1.5rem' }}>The Wakefield Opportunity</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.2rem', opacity: 0.75 }}>Wakefield has a strong mix of owner-occupied and rental housing across WF1 to WF4, with significant older housing stock in Horbury, Ossett, and Sandal that needs regular servicing. The city is part of the Leeds-Bradford conurbation but searches for local engineers specifically — people in Wakefield search 'gas engineer Wakefield', not Leeds. This makes it a self-contained, very winnable market.</p>

            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.5rem', marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                ['Population', '~230,000'],
                ['Key postcodes', 'WF1, WF2, WF3, WF4'],
                ['Competition', 'Low'],
                ['Peak demand', 'Oct–Apr + Yorkshire cold winters'],
                ['Ranking timeline', '6–10 weeks to page 1']
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
            <h2>Keywords We Target for Wakefield Engineers</h2>
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
            <h2>How We Rank You in Wakefield</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 3rem', opacity: 0.7, lineHeight: 1.7 }}>Three things working together. Each one compounds the others.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', textAlign: 'left' }}>
              {[
                {
                  num: '01',
                  title: 'Your Wakefield Website',
                  body: 'Built for the WF1–WF4 postcode area with real local content. Fast on mobile. Every page targets the suburbs and searches your customers actually use.'
                },
                {
                  num: '02',
                  title: 'Local SEO That Sticks',
                  body: 'Google Business Profile optimised for Wakefield. Directory citations. Area pages for every major suburb. This gets you into the map pack where most enquiries come from.'
                },
                {
                  num: '03',
                  title: 'Emma — Never Miss a Call',
                  body: 'When a customer in Horbury calls about a emergency boiler repair while you\'re on a job, Emma answers, qualifies the work, and books it straight into your calendar.'
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
            <h2>Wakefield Areas We Build Pages For</h2>
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
            <h2>Packages for Wakefield Engineers</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 3rem', opacity: 0.7, lineHeight: 1.7 }}>All packages include website, local SEO for the WF1–WF4 area, and Emma the AI receptionist.</p>
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
            <h2>Ready to Own Gas Engineer Search in Wakefield?</h2>
            <p style={{ maxWidth: 520, margin: '0 auto 2.5rem', opacity: 0.7, lineHeight: 1.7 }}>Get your free Wakefield audit. We&apos;ll show you where you rank, who&apos;s ahead, and the exact plan to reach page 1.</p>
            <Link href="/#audit" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem' }}>Get My Free Wakefield Audit →</Link>
            <p style={{ marginTop: '1.2rem', fontSize: '0.85rem', opacity: 0.45 }}>No contract. No cold call. Personalised plan within 1 business day.</p>
          </div>
        </section>
      </main>
    </>
  )
}
