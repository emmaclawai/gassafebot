import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Boiler Service Coventry CV2 | Annual Boiler Servicing | GasSafeBot',
  description: 'Annual boiler servicing in Coventry CV2. Gas Safe registered engineers covering Stoke Heath, Wyken and Binley. We help engineers rank for boiler service searches across CV2.',
  keywords: 'boiler service Coventry CV2, annual boiler service Wyken, boiler servicing CV2 Coventry, boiler check Stoke Heath, gas boiler service Binley Coventry',
  alternates: { canonical: 'https://www.gassafebot.co.uk/boiler-service-coventry-cv2/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gas Engineer Marketing — Coventry CV2',
  provider: { '@type': 'ProfessionalService', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  areaServed: { '@type': 'PostalAddress', addressLocality: 'Coventry', postalCode: 'CV2', addressCountry: 'GB' },
  description: 'GasSafeBot helps Gas Safe registered engineers in Coventry CV2 rank on Google and win more local enquiries.',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Gas Engineer Marketing', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/' },
    { '@type': 'ListItem', position: 3, name: 'Boiler Service Coventry CV2', item: 'https://www.gassafebot.co.uk/boiler-service-coventry-cv2/' },
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
          <div style={{ display: 'inline-block', background: '#1a1a2e', color: '#818cf8', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Coventry CV2</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Boiler Service Coventry CV2<br /><span style={{ color: '#FF6B00' }}>Annual Boiler Servicing — Stoke Heath, Wyken & Binley</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            GasSafeBot helps Gas Safe registered engineers in Coventry CV2 get found on Google. We build websites and local SEO systems that rank for gas engineer searches across Annual Boiler Servicing — Stoke Heath, Wyken & Binley and all CV2 postcodes — so your phone rings from local customers, not just word of mouth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Get My Free CV2 Audit →</Link>
            <Link href="/gas-engineer-marketing/swindon" style={{ border: '1px solid #334155', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>See Our Swindon Rankings →</Link>
          </div>
        </section>

        <section style={{ padding: '3rem 2rem', background: '#111827', borderTop: '1px solid #1e2a1e', borderBottom: '1px solid #1e2a1e' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Areas Covered in CV2</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <span key="Stoke Heath" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Stoke Heath</span>
              <span key="Wyken" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Wyken</span>
              <span key="Binley" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Binley</span>
              <span key="Walsgrave" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Walsgrave</span>
              <span key="Caludon" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Caludon</span>
              <span key="Bell Green" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Bell Green</span>
              <span key="Wood End" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Wood End</span>
              <span key="Henley Green" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Henley Green</span>
              <span key="Courthouse Green" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Courthouse Green</span>
              <span key="Ansty Road" style={{ background: '#1a1a2e', color: '#818cf8', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d2d5e' }}>Ansty Road</span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>The CV2 Market for Gas Engineers</h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>An annual boiler service in the Coventry area typically costs between £80 and £150. CV2 has a large residential population across Stoke Heath, Wyken, and Binley with a strong proportion of 1970s and 1980s housing — meaning boilers that are approaching end of servicing life. Engineers who rank for boiler service CV2 capture the annual servicing relationship that leads to repair and replacement work over time. It is the highest-volume recurring search for any residential gas engineer and the foundation of a stable client base.</p>
            <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get My Free Audit →</Link>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Why Coventry CV2 Is a Smart Target for Gas Engineer Marketing</h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Coventry is one of the UK largest cities outside London, with over 370,000 residents and a high proportion of privately rented homes. Most gas engineers operating in CV2 have no optimised website — they rely on word of mouth, Checkatrade, or a basic page that Google ignores completely at postcode level.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>
            A dedicated page targeting CV2 gas engineer searches is a low-competition opportunity with real commercial demand. GasSafeBot builds the pages, handles the technical SEO, and sets up Emma to answer every call while you are on site.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {['Ranked website built for CV2', 'Google Business Profile optimised', 'Emma answers every call 24/7', 'Monthly ranking reports'].map(f => (
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
            <span style={{ color: '#94a3b8' }}>Boiler Service Coventry CV2</span>
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
