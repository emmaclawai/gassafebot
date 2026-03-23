import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emergency Gas Engineer Coventry CV1 | 24/7 Emergency Callout | GasSafeBot',
  description: 'Emergency gas engineer in Coventry CV1. We help Gas Safe registered engineers rank for emergency callout searches across the City Centre, Hillfields and Spon End — the highest-intent gas search term.',
  keywords: 'emergency gas engineer Coventry CV1, emergency boiler repair CV1, gas leak engineer Hillfields, no heating Coventry city centre, urgent gas engineer Spon End Coventry',
  alternates: { canonical: 'https://www.gassafebot.co.uk/emergency-gas-engineer-coventry-cv1/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gas Engineer Marketing — Coventry CV1',
  provider: { '@type': 'ProfessionalService', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  areaServed: { '@type': 'PostalAddress', addressLocality: 'Coventry', postalCode: 'CV1', addressCountry: 'GB' },
  description: 'GasSafeBot helps Gas Safe registered engineers in Coventry CV1 rank on Google and win more local enquiries.',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Gas Engineer Marketing', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/' },
    { '@type': 'ListItem', position: 3, name: 'Emergency Gas Engineer Coventry CV1', item: 'https://www.gassafebot.co.uk/emergency-gas-engineer-coventry-cv1/' },
  ],
}

export default function Page() {
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
          <div style={{ display: 'inline-block', background: '#1a1a2e', color: '#818cf8', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Coventry CV1</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Emergency Gas Engineer Coventry CV1<br /><span style={{ color: '#FF6B00' }}>24/7 Emergency Callout — City Centre & Hillfields</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            GasSafeBot helps Gas Safe registered engineers in Coventry CV1 get found on Google. We build websites and local SEO systems that rank for gas engineer searches across 24/7 Emergency Callout — City Centre & Hillfields and all CV1 postcodes — so your phone rings from local customers, not just word of mouth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Get My Free CV1 Audit →</Link>
            <Link href="/gas-engineer-marketing/swindon" style={{ border: '1px solid #334155', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>See Our Swindon Rankings →</Link>
          </div>
        </section>

        <section style={{ padding: '3rem 2rem', background: '#111827', borderTop: '1px solid #1e2a1e', borderBottom: '1px solid #1e2a1e' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Areas Covered in CV1</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <span key="City Centre" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>City Centre</span>
              <span key="Hillfields" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Hillfields</span>
              <span key="Spon End" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Spon End</span>
              <span key="Chapelfields" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Chapelfields</span>
              <span key="Earlsdon" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Earlsdon</span>
              <span key="Stoke" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Stoke</span>
              <span key="Ball Hill" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Ball Hill</span>
              <span key="Gosford Green" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Gosford Green</span>
              <span key="Foleshill Road" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Foleshill Road</span>
              <span key="Radford Road" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Radford Road</span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>The CV1 Market for Gas Engineers</h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>Emergency gas searches in CV1 — covering the city centre, student areas, and high-density rental streets of Hillfields — convert at the highest rate of any gas search term because the caller needs help immediately. In a postcode with thousands of rental properties and student lets, emergency callout demand is year-round, not just winter. An engineer who ranks for emergency CV1 terms and has Emma answering every call 24/7 will capture jobs that every other local engineer misses while they are out on site.</p>
            <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get My Free Audit →</Link>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Why Coventry CV1 Is a Smart Target for Gas Engineer Marketing</h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Coventry is one of the UK largest cities outside London, with over 370,000 residents and a high proportion of privately rented homes. Most gas engineers operating in CV1 have no optimised website — they rely on word of mouth, Checkatrade, or a basic page that Google ignores completely at postcode level.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>
            A dedicated page targeting CV1 gas engineer searches is a low-competition opportunity with real commercial demand. GasSafeBot builds the pages, handles the technical SEO, and sets up Emma to answer every call while you are on site.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {['Ranked website built for CV1', 'Google Business Profile optimised', 'Emma answers every call 24/7', 'Monthly ranking reports'].map(f => (
              <div key={f} style={{ background: '#111827', border: '1px solid #1e2a1e', borderRadius: '8px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#4ade80', flexShrink: 0 }}>✓</span>
                <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>{}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ padding: '1rem 2rem', borderTop: '1px solid #1e2a1e', maxWidth: '860px', margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.82rem', color: '#475569' }}>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href="/gas-engineer-marketing" style={{ color: '#64748b', textDecoration: 'none' }}>Gas Engineer Marketing</Link> <span style={{ margin: '0 0.4rem' }}>›</span>
            <span style={{ color: '#94a3b8' }}>Emergency Gas Engineer Coventry CV1</span>
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
