import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Boiler Installation Swindon SN4 | New Boiler SN4 | GasSafeBot',
  description: 'Boiler installation in Swindon SN4. We help Gas Safe registered engineers rank for new boiler and boiler replacement searches across Wroughton, Royal Wootton Bassett and Chiseldon.',
  keywords: 'boiler installation Swindon SN4, new boiler Wroughton, boiler replacement Royal Wootton Bassett, boiler fitting SN4, gas boiler installation Chiseldon',
  alternates: { canonical: 'https://www.gassafebot.co.uk/boiler-installation-swindon-sn4/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gas Engineer Marketing — Swindon SN4',
  provider: { '@type': 'ProfessionalService', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  areaServed: { '@type': 'PostalAddress', addressLocality: 'Swindon', postalCode: 'SN4', addressCountry: 'GB' },
  description: 'GasSafeBot helps Gas Safe registered engineers in Swindon SN4 rank on Google and win more local enquiries.',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Gas Engineer Marketing', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/' },
    { '@type': 'ListItem', position: 3, name: 'Swindon', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/swindon/' },
    { '@type': 'ListItem', position: 4, name: 'Boiler Installation Swindon SN4', item: 'https://www.gassafebot.co.uk/boiler-installation-swindon-sn4/' },
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
          <div style={{ display: 'inline-block', background: '#1a2a1a', color: '#4ade80', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Swindon SN4</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Boiler Installation Swindon SN4<br /><span style={{ color: '#FF6B00' }}>New Boiler & Boiler Replacement in Wroughton & Wootton Bassett</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            GasSafeBot helps Gas Safe registered engineers in Swindon SN4 get found on Google. We build websites and local SEO systems that rank for gas engineer searches across New Boiler & Boiler Replacement in Wroughton & Wootton Bassett and all SN4 postcodes — so your phone rings from local customers, not just word of mouth.
          </p>
          <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Get My Free Boiler Installation SN4 Audit →</Link>
        </section>

        <section style={{ padding: '3rem 2rem', background: '#111827', borderTop: '1px solid #1e2a1e', borderBottom: '1px solid #1e2a1e' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Areas Covered in SN4</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              <span key="Wroughton" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Wroughton</span>
              <span key="Royal Wootton Bassett" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Royal Wootton Bassett</span>
              <span key="Chiseldon" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Chiseldon</span>
              <span key="Liddington" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Liddington</span>
              <span key="Wanborough" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Wanborough</span>
              <span key="Broad Hinton" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Broad Hinton</span>
              <span key="Clyffe Pypard" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Clyffe Pypard</span>
              <span key="Broad Town" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Broad Town</span>
              <span key="Lyneham" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Lyneham</span>
              <span key="Hook" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Hook</span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>The SN4 Market for Gas Engineers</h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>A boiler installation in the SN4 area typically costs between £2,000 and £4,500 depending on boiler type, complexity, and whether a system upgrade is required. Royal Wootton Bassett has seen significant housing growth with both new builds requiring first installations and older properties needing replacements. Ranking for 'boiler installation SN4' or 'new boiler Wroughton' captures the highest-value jobs available to a residential gas engineer — one page, one ranking, one job can cover months of retainer cost.</p>
            <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get My Free Audit →</Link>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Why Gas Engineers in SN4 Need a Ranked Website</h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            The majority of gas engineers in Swindon SN4 have no optimised website. Most rely on word of mouth, Checkatrade listings, or a basic Wix page that Google ignores. When a homeowner in New Boiler & Boiler Replacement in Wroughton & Wootton Bassett searches for a gas engineer, the results are dominated by national directories — not local engineers.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>
            A dedicated page targeting 'Boiler Installation Swindon SN4' is a low-competition ranking opportunity that most engineers are leaving on the table. GasSafeBot builds the pages, writes the content, and handles the technical SEO so you start appearing where your customers are already looking.
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
            <span style={{ color: '#94a3b8' }}>Boiler Installation Swindon SN4</span>
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
