import Link from 'next/link'

export const metadata = {
  title: 'Websites for Gas Engineers | Built to Rank on Google | GasSafeBot',
  description: 'Professional websites for Gas Safe registered engineers, built to rank on Google. Fast, mobile-first, SEO-optimised from day one. UK-wide service.',
  alternates: { canonical: 'https://www.gassafebot.co.uk/websites-for-gas-engineers/' },
  openGraph: {
    title: 'Websites for Gas Engineers | GasSafeBot',
    description: 'We build websites for gas engineers that actually rank on Google. Not just design — full local SEO built in from day one.',
    url: 'https://www.gassafebot.co.uk/websites-for-gas-engineers/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Websites for Gas Engineers',
  provider: { '@type': 'ProfessionalService', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  description: 'Professional websites for Gas Safe registered engineers built to rank on Google and generate local enquiries.',
  areaServed: 'GB',
  serviceType: 'Web Design for Gas Engineers',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Websites for Gas Engineers', item: 'https://www.gassafebot.co.uk/websites-for-gas-engineers/' },
  ],
}

export default function WebsitesForGasEngineers() {
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
          <span style={{ color: '#FF6B00' }}>Websites for Gas Engineers</span>
        </div>

        {/* Hero */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
          <p style={{ color: '#FF6B00', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Web Design for Gas Engineers
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Websites for Gas Engineers<br />
            <span style={{ color: '#FF6B00' }}>Built to Rank. Not Just Look Good.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '680px' }}>
            Most web designers build you something pretty then hand it over and wish you luck. We build gas engineer websites that are engineered from the ground up to appear when your customers search on Google.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ background: '#FF6B00', color: '#fff', padding: '0.85rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700 }}>
              Get a Free Website Audit →
            </Link>
            <Link href="/sample-website" style={{ border: '1px solid #30363d', color: '#e6edf3', padding: '0.85rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600 }}>
              See a Sample Site
            </Link>
          </div>
        </section>

        {/* The problem with generic web designers */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '2rem' }}> Why Most Gas Engineer Websites Don't Generate Enquiries </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Built for looks, not search', body: 'Generic designers have never researched "gas engineer Swindon SN1" or "emergency boiler repair near me". They build beautiful sites that sit on page 4.' },
                { title: 'No local area pages', body: 'One homepage targeting your whole region does nothing. Google wants dedicated pages for each town and postcode you cover.' },
                { title: 'Slow load times', body: 'A site that loads in 4 seconds loses 25% of visitors before they even see your number. Core Web Vitals directly affect your Google ranking.' },
                { title: 'Missing technical SEO', body: 'Schema markup, canonical tags, sitemap, proper heading structure — most web designers don\'t know these exist, let alone implement them correctly.' },
              ].map(item => (
                <div key={item.title} style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', padding: '1.5rem' }}>
                  <h3 style={{ color: '#FF6B00', fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: '#8b949e', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we build */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem' }}>What's in a GasSafeBot Website</h2>
          <p style={{ color: '#8b949e', marginBottom: '2rem', lineHeight: 1.6 }}> Every page we build is written specifically for your trade and optimised for the searches your customers actually type. </p>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { n: '01', title: 'Homepage with primary keyword targeting', body: 'Your homepage targets your most important search term — "gas engineer [your town]" — with proper H1, meta title, structured content, and schema markup.' },
              { n: '02', title: 'Service pages for every job type', body: 'Dedicated pages for boiler service, boiler installation, landlord gas certificates (CP12), emergency callouts, and any other services you offer. Each targets its own keyword set.' },
              { n: '03', title: 'Local area landing pages', body: 'A page for every town and postcode you cover. "Gas engineer SN1", "boiler service Wroughton", "CP12 certificate Old Town Swindon" — pages Google can rank for fast.' },
              { n: '04', title: 'Google Business Profile integration', body: 'Your GBP and website are linked, consistent, and reinforcing each other. The map pack and organic results working together.' },
              { n: '05', title: 'Mobile-first, sub-2 second load time', body: 'Built on Next.js with static export. Scores 90+ on Google PageSpeed. Your site loads fast on every device — and Google rewards it.' },
              { n: '06', title: 'Contact form with instant lead alerts', body: 'Every enquiry sends an immediate email notification. No leads sitting unread in a CMS. You know about every job opportunity within seconds.' },
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

        {/* Why not Wix/Squarespace */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem' }}>Why Not Just Use Wix or Squarespace?</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1.5rem' }}> You can. But here's what you're giving up: Wix and Squarespace sites have known SEO limitations — slow load times, limited schema support, weak Core Web Vitals scores. They're built to make websites easy to create, not easy for Google to rank. </p>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1.5rem' }}> More importantly — you still need someone to write the content. A Wix site with no SEO content is just an expensive business card. The content is what ranks. That's what we provide. </p>
            <p style={{ color: '#8b949e', lineHeight: 1.7 }}> Our sites are built on Next.js, deployed on Vercel's UK edge network, and you own the code, the domain, and the hosting account. We don't lock you in. You could take the site and host it yourself if you wanted to. </p>
          </div>
        </section>

        {/* Pricing */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem' }}>Website Packages</h2>
          <p style={{ color: '#8b949e', marginBottom: '2rem' }}>One setup fee. Monthly retainer. Everything included.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { name: 'Pilot', price: '£497', monthly: '£197/mo', pages: '5 pages', areas: '1 area', ideal: 'New or no website' },
              { name: 'Growth', price: '£997', monthly: '£347/mo', pages: '8 pages + area pages', areas: '3 areas', ideal: 'Established engineer', highlight: true },
              { name: 'Dominator', price: '£1,797', monthly: '£597/mo', pages: 'Unlimited pages', areas: '10 areas', ideal: 'Multi-area operations' },
            ].map(pkg => (
              <div key={pkg.name} style={{ background: pkg.highlight ? '#1a2332' : '#161b22', border: `1px solid ${pkg.highlight ? '#FF6B00' : '#21262d'}`, borderRadius: '8px', padding: '1.5rem' }}>
                {pkg.highlight && <p style={{ color: '#FF6B00', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Most Popular</p>}
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{pkg.name}</h3>
                <p style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.25rem' }}>{pkg.price}</p>
                <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: '1rem' }}>then {pkg.monthly}</p>
                <p style={{ color: '#e6edf3', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{pkg.pages}</p>
                <p style={{ color: '#e6edf3', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{pkg.areas}</p>
                <p style={{ color: '#8b949e', fontSize: '0.85rem', marginTop: '0.75rem' }}>Ideal for: {pkg.ideal}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/#contact" style={{ background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>
              Get a Free Audit — We'll Recommend the Right Package →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', padding: '3rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '580px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem' }}>Ready to Get Found on Google?</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}> Fill in the free audit form and we'll analyse your current online presence, your target areas, and your competition — and send back a personalised ranking plan within 1 business day. </p>
            <Link href="/#contact" style={{ background: '#FF6B00', color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>
              Get My Free Gas Engineer Website Audit →
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
