import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gas Safe Engineer Swindon SN5 | Freshbrook & West Swindon | GasSafeBot',
  description: 'Gas Safe registered engineer marketing for Swindon SN5. We help engineers rank for Gas Safe searches across Freshbrook, Toothill, Westlea and West Swindon — one of Swindon's fastest-growing areas.',
  keywords: 'gas safe engineer Swindon SN5, Gas Safe engineer Freshbrook, boiler repair West Swindon, gas engineer Toothill, gas safe check Nine Elms Swindon',
  alternates: { canonical: 'https://www.gassafebot.co.uk/gas-safe-engineer-swindon-sn5/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gas Engineer Marketing — Swindon SN5',
  provider: { '@type': 'ProfessionalService', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  areaServed: { '@type': 'PostalAddress', addressLocality: 'Swindon', postalCode: 'SN5', addressCountry: 'GB' },
  description: 'GasSafeBot helps Gas Safe registered engineers in Swindon SN5 rank on Google and win more local enquiries.',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Gas Engineer Marketing', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/' },
    { '@type': 'ListItem', position: 3, name: 'Swindon', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/swindon/' },
    { '@type': 'ListItem', position: 4, name: 'Gas Safe Engineer Swindon SN5', item: 'https://www.gassafebot.co.uk/gas-safe-engineer-swindon-sn5/' },
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
          <div style={{ display: 'inline-block', background: '#1a2a1a', color: '#4ade80', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Swindon SN5</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Gas Safe Engineer Swindon SN5<br /><span style={{ color: '#FF6B00' }}>Freshbrook, Toothill, Westlea & West Swindon</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            GasSafeBot helps Gas Safe registered engineers in Swindon SN5 get found on Google. We build websites and local SEO systems that rank for gas engineer searches across Freshbrook, Toothill, Westlea & West Swindon and all SN5 postcodes — so your phone rings from local customers, not just word of mouth.
          </p>
          <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Get My Free SN5 Audit →</Link>
        </section>

        <section style={{ padding: '3rem 2rem', background: '#111827', borderTop: '1px solid #1e2a1e', borderBottom: '1px solid #1e2a1e' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Areas Covered in SN5</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              <span key="Freshbrook" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Freshbrook</span>
              <span key="Toothill" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Toothill</span>
              <span key="Westlea" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Westlea</span>
              <span key="Nine Elms" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Nine Elms</span>
              <span key="Peatmoor" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Peatmoor</span>
              <span key="West Swindon" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>West Swindon</span>
              <span key="Shaw" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Shaw</span>
              <span key="Lydiard Millicent" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Lydiard Millicent</span>
              <span key="Lydiard Tregoze" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Lydiard Tregoze</span>
              <span key="Wichelstowe" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Wichelstowe</span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>The SN5 Market for Gas Engineers</h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>SN5 — West Swindon — is one of the most significant opportunities for a gas engineer marketing campaign in the whole borough. The housing stock built in the 1980s and 1990s means a large concentration of boilers now approaching 30 years old, creating enormous demand for both servicing and replacement. Wichelstowe, the newer development at the southern edge of SN5, adds first-fit boiler installation demand on top. Searches for 'Gas Safe engineer SN5' and 'boiler repair West Swindon' have clear commercial intent and almost no optimised competition.</p>
            <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get My Free Audit →</Link>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Why Gas Engineers in SN5 Need a Ranked Website</h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            The majority of gas engineers in Swindon SN5 have no optimised website. Most rely on word of mouth, Checkatrade listings, or a basic Wix page that Google ignores. When a homeowner in Freshbrook, Toothill, Westlea & West Swindon searches for a gas engineer, the results are dominated by national directories — not local engineers.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>
            A dedicated page targeting 'Gas Safe Engineer Swindon SN5' is a low-competition ranking opportunity that most engineers are leaving on the table. GasSafeBot builds the pages, writes the content, and handles the technical SEO so you start appearing where your customers are already looking.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get My Free Audit →</Link>
            <Link href="/gas-engineer-marketing/swindon" style={{ border: '1px solid #334155', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Swindon Overview →</Link>
          </div>
        </section>

        <div style={{ padding: '1rem 2rem', borderTop: '1px solid #1e2a1e', maxWidth: '860px', margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.82rem', color: '#475569' }}>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href="/gas-engineer-marketing" style={{ color: '#64748b', textDecoration: 'none' }}>Gas Engineer Marketing</Link> <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href="/gas-engineer-marketing/swindon" style={{ color: '#64748b', textDecoration: 'none' }}>Swindon</Link> <span style={{ margin: '0 0.4rem' }}>›</span>
            <span style={{ color: '#94a3b8' }}>Gas Safe Engineer Swindon SN5</span>
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
