import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emergency Gas Engineer Swindon SN2 | 24/7 Emergency Callout | GasSafeBot',
  description: 'Emergency gas engineer in Swindon SN2. We help Gas Safe registered engineers rank for emergency callout searches across Penhill, Moredon, Rodbourne and Park North — the highest-intent gas search term.',
  keywords: 'emergency gas engineer Swindon SN2, emergency boiler repair SN2, gas leak engineer Penhill, no heating SN2 Swindon, urgent gas engineer Moredon',
  alternates: { canonical: 'https://www.gassafebot.co.uk/emergency-gas-engineer-swindon-sn2/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gas Engineer Marketing — Swindon SN2',
  provider: { '@type': 'ProfessionalService', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  areaServed: { '@type': 'PostalAddress', addressLocality: 'Swindon', postalCode: 'SN2', addressCountry: 'GB' },
  description: 'GasSafeBot helps Gas Safe registered engineers in Swindon SN2 rank on Google and win more local enquiries.',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Gas Engineer Marketing', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/' },
    { '@type': 'ListItem', position: 3, name: 'Swindon', item: 'https://www.gassafebot.co.uk/gas-engineer-marketing/swindon/' },
    { '@type': 'ListItem', position: 4, name: 'Emergency Gas Engineer Swindon SN2', item: 'https://www.gassafebot.co.uk/emergency-gas-engineer-swindon-sn2/' },
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
          <div style={{ display: 'inline-block', background: '#1a2a1a', color: '#4ade80', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Swindon SN2</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Emergency Gas Engineer Swindon SN2<br /><span style={{ color: '#FF6B00' }}>24/7 Emergency Callout — Penhill, Moredon & Rodbourne</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            GasSafeBot helps Gas Safe registered engineers in Swindon SN2 get found on Google. We build websites and local SEO systems that rank for gas engineer searches across 24/7 Emergency Callout — Penhill, Moredon & Rodbourne and all SN2 postcodes — so your phone rings from local customers, not just word of mouth.
          </p>
          <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Get My Free Emergency SN2 Audit →</Link>
        </section>

        <section style={{ padding: '3rem 2rem', background: '#111827', borderTop: '1px solid #1e2a1e', borderBottom: '1px solid #1e2a1e' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Areas Covered in SN2</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              <span key="Penhill" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Penhill</span>
              <span key="Moredon" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Moredon</span>
              <span key="Rodbourne" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Rodbourne</span>
              <span key="Park North" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Park North</span>
              <span key="Gorse Hill" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Gorse Hill</span>
              <span key="Pinehurst" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Pinehurst</span>
              <span key="Whitehouse" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Whitehouse</span>
              <span key="Walcot West" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Walcot West</span>
              <span key="Even Swindon" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Even Swindon</span>
              <span key="Stratton" style={{ background: '#1a2a1a', color: '#4ade80', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', border: '1px solid #2d4a2d' }}>Stratton</span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>The SN2 Market for Gas Engineers</h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>Emergency gas searches — 'emergency gas engineer SN2', 'no heating Moredon', 'gas leak Rodbourne' — convert at the highest rate of any gas search term because the customer needs help immediately and will call the first trusted result they find. In SN2's dense residential postcodes, an engineer who ranks for emergency terms will receive calls even at 10pm in January. Emma, our AI receptionist, answers every one of those calls 24/7 so no job is ever missed.</p>
            <Link href="/#contact" style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get My Free Audit →</Link>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Why Gas Engineers in SN2 Need a Ranked Website</h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            The majority of gas engineers in Swindon SN2 have no optimised website. Most rely on word of mouth, Checkatrade listings, or a basic Wix page that Google ignores. When a homeowner in 24/7 Emergency Callout — Penhill, Moredon & Rodbourne searches for a gas engineer, the results are dominated by national directories — not local engineers.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>
            A dedicated page targeting 'Emergency Gas Engineer Swindon SN2' is a low-competition ranking opportunity that most engineers are leaving on the table. GasSafeBot builds the pages, writes the content, and handles the technical SEO so you start appearing where your customers are already looking.
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
            <span style={{ color: '#94a3b8' }}>Emergency Gas Engineer Swindon SN2</span>
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
