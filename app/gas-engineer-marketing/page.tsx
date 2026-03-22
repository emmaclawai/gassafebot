import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gas Engineer Marketing | Local SEO for Heating Engineers | UK Cities',
  description: 'Gas engineer marketing services across UK cities. Professional websites, local SEO, and AI receptionists to help Gas Safe engineers dominate Google in their target areas.',
  alternates: {
    canonical: 'https://gassafebot.co.uk/gas-engineer-marketing/',
  },
  openGraph: {
    title: 'Gas Engineer Marketing | GasSafeBot',
    description: 'Professional websites and local SEO for Gas Safe engineers across UK cities.',
    url: 'https://gassafebot.co.uk/gas-engineer-marketing/',
    type: 'website',
  },
}

const cities = [
  { name: 'Swindon', slug: 'swindon', region: 'Wiltshire' },
  { name: 'Peterborough', slug: 'peterborough', region: 'Cambridgeshire' },
  { name: 'Telford', slug: 'telford', region: 'Shropshire' },
  { name: 'Northampton', slug: 'northampton', region: 'Northamptonshire' },
  { name: 'Gloucester', slug: 'gloucester', region: 'Gloucestershire' },
  { name: 'Basildon', slug: 'basildon', region: 'Essex' },
  { name: 'Cheltenham', slug: 'cheltenham', region: 'Gloucestershire' },
  { name: 'Wakefield', slug: 'wakefield', region: 'West Yorkshire' },
  { name: 'Derby', slug: 'derby', region: 'Derbyshire' },
  { name: 'Luton', slug: 'luton', region: 'Bedfordshire' },
]

export default function GasEngineerMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Gas Engineer Marketing',
            description: 'Local SEO and website services for Gas Safe engineers across UK cities',
            url: 'https://gassafebot.co.uk/gas-engineer-marketing/',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: cities.map((city, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: city.name,
                url: `https://gassafebot.co.uk/gas-engineer-marketing/${city.slug}`,
              })),
            },
          }),
        }}
      />
      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', fontSize: '0.85rem', color: 'var(--muted)' }}>
          <div className="container">
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <span aria-hidden="true"> › </span>
            <span aria-current="page">Gas Engineer Marketing</span>
          </div>
        </nav>

        {/* Hero */}
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
              letterSpacing: '0.05em',
            }}>
              📍 UK-Wide Coverage
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Gas Engineer Marketing
              <br />
              <span style={{ color: 'var(--fire)' }}>By City</span>
            </h1>
            <p style={{ maxWidth: 680, margin: '0 auto 2.5rem', fontSize: '1.15rem', lineHeight: 1.7, opacity: 0.75 }}>
              We build local SEO systems and professional websites that help Gas Safe engineers 
              dominate Google in their target cities. Choose your area to see city-specific packages.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#audit" className="btn-primary">Get My Free Audit →</Link>
              <Link href="/" className="btn-ghost">Back to Home</Link>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section style={{ padding: '5rem 0', background: 'rgba(255,255,255,0.02)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>Target Cities</h2>
              <p style={{ maxWidth: 580, margin: '0 auto', opacity: 0.7, lineHeight: 1.7 }}>
                Click any city to see our tailored gas engineer marketing packages for that area.
              </p>
            </div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/gas-engineer-marketing/${city.slug}`}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 12,
                    padding: '1.5rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s ease',
                  }}
                  className="city-card-link"
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem' }}>{city.name}</div>
                    <div style={{ fontSize: '0.85rem', opacity: 0.5 }}>{city.region}</div>
                  </div>
                  <span style={{ 
                    fontSize: '1.2rem', 
                    color: 'var(--fire)',
                    background: 'rgba(255,107,0,0.1)',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%'
                  }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section style={{ padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '3rem' }}>What We Do in Every City</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem', 
              textAlign: 'left' 
            }}>
              {[
                {
                  icon: '🎯',
                  title: 'City-Specific SEO',
                  body: 'Every city gets tailored keyword research, competitor analysis, and local landing pages targeting the exact searches your customers make.',
                },
                {
                  icon: '🖥️',
                  title: 'Professional Websites',
                  body: 'Fast, mobile-first websites built to rank. Schema markup, optimised content, and clear calls-to-action that convert visitors into enquiries.',
                },
                {
                  icon: '📞',
                  title: 'Emma AI Receptionist',
                  body: 'Never miss another call. Emma answers 24/7, qualifies leads, captures details, and sends SMS summaries while you work.',
                },
                {
                  icon: '📍',
                  title: 'Google Business Optimisation',
                  body: 'Complete setup and ongoing optimisation of your Google Business Profile to get you into the map pack for local searches.',
                },
                {
                  icon: '📊',
                  title: 'Monthly Ranking Reports',
                  body: 'Clear, honest reports showing exactly where your keywords rank, what moved, and what we are doing next to improve.',
                },
                {
                  icon: '⚡',
                  title: 'Fast Turnaround',
                  body: 'Most city-specific websites are live within 2 weeks. SEO work begins immediately, with rankings typically improving within 6–10 weeks.',
                },
              ].map((item) => (
                <div key={item.title} style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.07)', 
                  borderRadius: 12, 
                  padding: '1.8rem' 
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.7, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '6rem 0', textAlign: 'center', background: 'rgba(255,107,0,0.03)' }}>
          <div className="container">
            <h2>Ready to Dominate Your City?</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 2.5rem', opacity: 0.7, lineHeight: 1.7 }}>
              Get your free audit and see exactly where you rank today, who is beating you, 
              and the step-by-step plan to reach page 1 in your target areas.
            </p>
            <Link href="/#audit" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem' }}>
              Get My Free City Audit →
            </Link>
            <p style={{ marginTop: '1.2rem', fontSize: '0.85rem', opacity: 0.45 }}>
              No contract. No cold call. Just a personalised ranking plan within 1 business day.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}