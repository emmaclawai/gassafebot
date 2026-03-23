import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gas Engineer Coventry CV3 | Boiler Service & Gas Safe Engineer | GasSafeBot',
  description: 'Gas Safe registered engineer marketing for Coventry CV3. We help engineers rank for boiler service, boiler installation and gas safety searches across Cheylesmore, Styvechale and Finham.',
  keywords: 'gas engineer Coventry CV3, boiler service CV3, gas safe engineer Cheylesmore Coventry, boiler installation Styvechale, heating engineer Finham Coventry',
  alternates: { canonical: 'https://www.gassafebot.co.uk/gas-engineer-coventry-cv3/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gas Engineer Marketing — Coventry CV3',
  provider: { '@type': 'ProfessionalService', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  areaServed: { '@type': 'PostalAddress', addressLocality: 'Coventry', postalCode: 'CV3', addressCountry: 'GB' },
  description: 'GasSafeBot helps Gas Safe registered engineers in Coventry CV3 rank on Google and win more local enquiries.',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Gas Engineer Marketing', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/' },
    { '@type': 'ListItem', position: 3, name: 'Gas Engineer Coventry CV3', item: 'https://www.gassafebot.co.uk/gas-engineer-coventry-cv3/' },
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
          <div style={{ display: 'inline-block', background: '#1a1a2e', color: '#818cf8', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Coventry CV3</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Gas Engineer Coventry CV3<br /><span style={{ color: '#FF6B00' }}>Cheylesmore, Styvechale & Binley Woods</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            GasSafeBot helps Gas Safe registered engineers in Coventry CV3 get found on Google. We build websites and local SEO systems that rank for gas engineer searches across Cheylesmore, Styvechale & Binley Woods and all CV3 postcodes — so your phone rings from local customers, not just word of mouth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Get My Free CV3 Audit →</Link>
            <Link href="/gas-engineer-marketing/swindon" style={{ border: '1px solid #334155', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>See Our Swindon Rankings →</Link>
          </div>
        </section>

        <section style={{ padding: '3rem 2rem', background: '#111827', borderTop: '1px solid #1e2a1e', borderBottom: '1px solid #1e2a1e' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Areas Covered in CV3</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <span key="Cheylesmore" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Cheylesmore</span>
              <span key="Styvechale" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Styvechale</span>
              <span key="Binley Woods" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Binley Woods</span>
              <span key="Willenhall" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Willenhall</span>
              <span key="Brandon" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Brandon</span>
              <span key="Finham" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Finham</span>
              <span key="Green Lane" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Green Lane</span>
              <span key="Whitley" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Whitley</span>
              <span key="Ernesford Grange" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Ernesford Grange</span>
              <span key="Toll Bar End" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Toll Bar End</span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>The CV3 Market for Gas Engineers</h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>CV3 is one of Coventry's most affluent postcodes — Styvechale and Cheylesmore are established owner-occupier areas with large detached and semi-detached homes. These properties have more complex heating systems, older boilers requiring servicing, and homeowners who are willing to pay a premium for a professional they can trust. Boiler installation values in CV3 are consistently at the higher end. An engineer who ranks for CV3 terms is positioning for the highest-value residential gas work in the city.</p>
            <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get My Free Audit →</Link>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Why Coventry CV3 Is a Smart Target for Gas Engineer Marketing</h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Coventry is one of the UK largest cities outside London, with over 370,000 residents and a high proportion of privately rented homes. Most gas engineers operating in CV3 have no optimised website — they rely on word of mouth, Checkatrade, or a basic page that Google ignores completely at postcode level.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>
            A dedicated page targeting CV3 gas engineer searches is a low-competition opportunity with real commercial demand. GasSafeBot builds the pages, handles the technical SEO, and sets up Emma to answer every call while you are on site.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {['Ranked website built for CV3', 'Google Business Profile optimised', 'Emma answers every call 24/7', 'Monthly ranking reports'].map(f => (
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
            <span style={{ color: '#94a3b8' }}>Gas Engineer Coventry CV3</span>
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
