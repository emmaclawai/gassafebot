import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gas Engineer Swindon SN1 | Boiler Service & Gas Safe Engineer | GasSafeBot',
  description: 'Looking for a gas engineer in Swindon SN1? We connect Gas Safe registered engineers covering Old Town, Town Centre, Kingshill and all SN1 postcodes. Boiler service, CP12 certificates, emergency callout.',
  keywords: 'gas engineer Swindon SN1, boiler service SN1, gas safe engineer Old Town Swindon, emergency gas engineer SN1, CP12 certificate Swindon town centre',
  alternates: { canonical: 'https://www.gassafebot.co.uk/gas-engineer-swindon-sn1/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gas Engineer Marketing — Swindon SN1',
  provider: { '@type': 'ProfessionalService', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  areaServed: { '@type': 'PostalAddress', addressLocality: 'Swindon', postalCode: 'SN1', addressCountry: 'GB' },
  description: 'GasSafeBot helps Gas Safe registered engineers in Swindon SN1 rank on Google and win more local enquiries.',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Gas Engineer Marketing', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/' },
    { '@type': 'ListItem', position: 3, name: 'Swindon', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/swindon/' },
    { '@type': 'ListItem', position: 4, name: 'Gas Engineer Swindon SN1', item: 'https://www.gassafebot.co.uk/gas-engineer-swindon-sn1/' },
  ],
}

export default function GasEngineerSwindonSN1() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ background: '#0d1117', borderBottom: '1px solid #1e2a1e', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
        <Link href="/" style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>GasSafe<span style={{ color: '#FF6B00' }}>●</span>Bot</Link>
        <Link href="/#contact" style={{ background: '#FF6B00', color: '#fff', padding: '0.5rem 1.2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Free Audit →</Link>
      </nav>
      <main style={{ background: '#0d1117', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
        <section style={{ padding: '5rem 2rem 4rem', maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#1a2a1a', color: '#4ade80', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Swindon SN1</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Gas Engineer Swindon SN1<br /><span style={{ color: '#FF6B00' }}>Old Town, Kingshill & Town Centre</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            GasSafeBot helps Gas Safe registered engineers in Swindon SN1 get found on Google. We build websites and local SEO systems that rank for gas engineer searches across Old Town, Kingshill, the Town Centre, and all SN1 postcodes — so your phone rings from local customers, not just word of mouth.
          </p>
          <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Get My Free SN1 Audit →</Link>
        </section>

        <section style={{ padding: '3rem 2rem', background: '#111827', borderTop: '1px solid #1e2a1e', borderBottom: '1px solid #1e2a1e' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>SN1 Coverage Areas</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              {['Old Town', 'Town Centre', 'Kingshill', 'Westcott Place', 'Queenstown', 'Even Swindon', 'Prospect', 'Clifton', 'Drove', 'Upper Stratton'].map(area => (
                <span key={area} style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>{area}</span>
              ))}
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services We Market in SN1</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { title: 'Boiler service SN1', body: 'Annual boiler servicing is the highest-volume search in any residential postcode. We build dedicated pages that rank for it.' },
                { title: 'Gas safety certificate SN1', body: 'CP12 landlord certificates are legally required annually. SN1 has a high rental density — consistent recurring demand.' },
                { title: 'Emergency gas engineer SN1', body: 'Emergency callout searches have high intent and urgency. These rankings convert at the highest rate of any gas search term.' },
                { title: 'Boiler installation SN1', body: 'The highest-value gas job. A single boiler installation page ranking in SN1 can generate thousands in revenue from one call.' },
              ].map(item => (
                <div key={item.title} style={{ background: '#0d1117', border: '1px solid #1e2a1e', borderRadius: '8px', padding: '1.25rem' }}>
                  <div style={{ color: '#FF6B00', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{item.title}</div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>The SN1 Market for Gas Engineers</h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            SN1 covers central Swindon and Old Town — one of the most densely populated areas of the borough. Old Town has a high proportion of Victorian and Edwardian housing stock with older boilers that need regular servicing and replacement. The Town Centre and surrounding streets have a mix of flats and conversion properties with high tenant turnover — meaning strong landlord CP12 demand.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>
            Most gas engineers in SN1 rely on word of mouth and directory listings. A dedicated website with postcode-level pages is enough to significantly outrank the competition in this area within 30–60 days.
          </p>
          <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get My Free Audit →</Link>
        </section>

        <div style={{ padding: '1rem 2rem', borderTop: '1px solid #1e2a1e', maxWidth: '860px', margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.82rem', color: '#475569' }}>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href="/gas-engineer-marketing" style={{ color: '#64748b', textDecoration: 'none' }}>Gas Engineer Marketing</Link> <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href="/gas-engineer-marketing/swindon" style={{ color: '#64748b', textDecoration: 'none' }}>Swindon</Link> <span style={{ margin: '0 0.4rem' }}>›</span>
            <span style={{ color: '#94a3b8' }}>SN1</span>
          </nav>
        </div>
      </main>
      <footer style={{ background: '#0a0f0a', borderTop: '1px solid #1e2a1e', padding: '2rem', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#fff', fontWeight: 700, textDecoration: 'none' }}>GasSafe<span style={{ color: '#FF6B00' }}>●</span>Bot</Link>
        <p style={{ color: '#475569', fontSize: '0.82rem', marginTop: '0.75rem' }}>© 2026 GasSafeBot.co.uk · <Link href="/privacy-policy" style={{ color: '#475569', textDecoration: 'none' }}>Privacy</Link> · <Link href="/terms" style={{ color: '#475569', textDecoration: 'none' }}>Terms</Link></p>
      </footer>
    </>
  )
}
