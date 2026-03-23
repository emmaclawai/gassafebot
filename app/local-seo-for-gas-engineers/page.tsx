import Link from 'next/link'

export const metadata = {
  title: 'Local SEO for Gas Engineers | Rank on Google in Your Area | GasSafeBot',
  description: 'Local SEO services built exclusively for Gas Safe engineers. Rank for gas engineer searches in every town you cover. UK-wide, proven process.',
  alternates: { canonical: 'https://www.gassafebot.co.uk/local-seo-for-gas-engineers/' },
  openGraph: {
    title: 'Local SEO for Gas Engineers | GasSafeBot',
    description: 'We handle all local SEO for gas engineers — Google Business Profile, postcode pages, citations, and rankings. You focus on the job.',
    url: 'https://www.gassafebot.co.uk/local-seo-for-gas-engineers/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO for Gas Engineers',
  provider: { '@type': 'ProfessionalService', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  description: 'Local SEO services for Gas Safe registered engineers. Google Business Profile optimisation, local citations, area landing pages, and ongoing rank tracking.',
  areaServed: 'GB',
  serviceType: 'Local SEO for Tradespeople',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Local SEO for Gas Engineers', item: 'https://www.gassafebot.co.uk/local-seo-for-gas-engineers/' },
  ],
}

export default function LocalSEOForGasEngineers() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
        {/* Nav */}
        <nav style={{ borderBottom: '1px solid #21262d', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#e6edf3', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>
            GasSafe<span style={{ color: '#FF6B00' }}>●</span>Bot
          </Link>
          <Link href="/#contact" style={{ background: '#FF6B00', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Free Audit →
          </Link>
        </nav>

        {/* Breadcrumb */}
        <div style={{ padding: '0.75rem 2rem', fontSize: '0.85rem', color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>›</span>
          <span style={{ color: '#FF6B00' }}>Local SEO for Gas Engineers</span>
        </div>

        {/* Hero */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
          <p style={{ color: '#FF6B00', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Local SEO for Gas Engineers
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Get Found When Gas Customers<br />
            <span style={{ color: '#FF6B00' }}>Search in Your Area</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '680px' }}>
            When someone in your town types "gas engineer near me" or "boiler service [town]" — do they find you? Local SEO is the system that makes that happen. We build and run it for you.
          </p>
          <Link href="/#contact" style={{ background: '#FF6B00', color: '#fff', padding: '0.85rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>
            Get a Free Local SEO Audit →
          </Link>
        </section>

        {/* How local SEO works for gas engineers */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem' }}>How Local SEO Actually Works for Gas Engineers</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
              When someone searches "gas engineer Swindon" Google shows three types of results: the map pack (3 GBP listings), the organic results (10 website links), and paid ads. Local SEO puts you in the map pack AND the organic results — two chances to win the click without paying per click.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {[
                { label: 'Map Pack', desc: 'The 3 businesses shown on the map. Driven entirely by your Google Business Profile. High click rate — customers see reviews, hours, and location immediately.' },
                { label: 'Organic Results', desc: 'The 10 website links below the map. Driven by your website content, technical SEO, and backlinks. Includes postcode and service pages.' },
                { label: 'Local Pack for suburbs', desc: 'When someone searches "gas engineer SN2" or "boiler repair Haydon Wick" — dedicated area pages are the only thing that can rank here.' },
              ].map(item => (
                <div key={item.label} style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', padding: '1.5rem' }}>
                  <h3 style={{ color: '#FF6B00', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.label}</h3>
                  <p style={{ color: '#8b949e', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we do */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '2rem' }}>What's Included in Our Local SEO Service</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { n: '01', title: 'Google Business Profile setup and optimisation', body: 'Most GBPs are half-finished. We complete every field, add service areas and categories, write a keyword-rich description, set up service listings, and add real photos. This alone can move you from position 8 to position 3 in the map pack.' },
              { n: '02', title: 'Postcode and area landing pages', body: '"Gas engineer Swindon" is competitive. "Gas engineer SN1" is winnable in weeks. We build pages targeting every postcode and town you work in — the fastest route to first page rankings for new sites.' },
              { n: '03', title: 'Local citation building (50+ directories)', body: 'Your business name, address, and phone number needs to appear consistently across Yell, Bing Places, TrustATrader, Checkatrade listings, Apple Maps, and 45 other directories. Inconsistency confuses Google. We clean it up and build it out.' },
              { n: '04', title: 'Competitor gap analysis', body: 'We analyse every ranking engineer in your target towns. What keywords are they ranking for that you aren\'t? What pages do they have that you don\'t? We build the gaps into your strategy.' },
              { n: '05', title: 'Review generation strategy', body: 'GBP listings with 50+ reviews rank higher than those with 5. We set up a review request system that automatically prompts satisfied customers to leave a Google review — without you having to ask awkwardly.' },
              { n: '06', title: 'Monthly keyword ranking reports', body: 'Every month you see exactly where your keywords rank, what moved, and what we\'re doing next. Transparent, specific, and useful — not a PDF full of numbers that don\'t mean anything.' },
            ].map(item => (
              <div key={item.n} style={{ display: 'flex', gap: '1.5rem', background: '#161b22', border: '1px solid #21262d', borderRadius: '8px', padding: '1.5rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#FF6B00', fontWeight: 800, fontSize: '1.2rem', minWidth: '2.5rem' }}>{item.n}</span>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#8b949e', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Realistic timeline */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem' }}>Honest Ranking Timeline</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
              Anyone who promises page 1 rankings in 2 weeks is lying. Here's what a realistic campaign looks like for a medium-sized UK town with low-to-medium competition:
            </p>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {[
                { period: 'Week 1–2', outcome: 'Site indexed by Google. GBP live. Sitemap submitted. Postcode pages crawled.' },
                { period: 'Week 2–4', outcome: 'Postcode pages start entering search results. Long-tail keywords (SN1, SN3) appearing in positions 10–30.' },
                { period: 'Month 2', outcome: 'First postcode keywords breaking into top 10. Map pack impressions increasing. Citations building.' },
                { period: 'Month 3', outcome: 'Core town keyword ("gas engineer Swindon") entering top 20. Map pack improving. First organic enquiries.' },
                { period: 'Month 3–6', outcome: 'Core keyword in top 10. Multiple postcode terms on page 1. Review count growing. Consistent enquiry flow.' },
              ].map(item => (
                <div key={item.period} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1rem 1.25rem', background: '#0d1117', borderRadius: '6px', border: '1px solid #21262d' }}>
                  <span style={{ color: '#FF6B00', fontWeight: 700, fontSize: '0.9rem', minWidth: '90px' }}>{item.period}</span>
                  <p style={{ color: '#8b949e', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{item.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '3rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem' }}>See Where You Stand Right Now</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
              Our free audit tells you exactly where you rank today, who you're losing work to, and what it would take to overtake them. No obligation, no sales pressure.
            </p>
            <Link href="/#contact" style={{ background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>
              Get My Free Local SEO Audit →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #21262d', padding: '2rem', textAlign: 'center', color: '#8b949e', fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} GasSafeBot. Built for UK Gas Safe Engineers. <Link href="/privacy-policy" style={{ color: '#8b949e' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: '#8b949e' }}>Terms</Link></p>
        </footer>
      </main>
    </>
  )
}
