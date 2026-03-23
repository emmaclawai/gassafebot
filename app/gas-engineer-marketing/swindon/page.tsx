import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gas Engineer Marketing Swindon | Rank #1 on Google | GasSafeBot',
  description: 'We help Gas Safe engineers in Swindon dominate Google. Websites built for local search, AI receptionist that never misses a call, and SEO targeting SN1–SN5 postcodes. First audit is free.',
  keywords: 'gas engineer marketing Swindon, gas engineer website Swindon, boiler engineer SEO Swindon, Gas Safe engineer Swindon, heating engineer website SN1 SN2 SN3',
  alternates: {
    canonical: 'https://gassafebot.co.uk/gas-engineer-marketing/swindon/',
  },
  openGraph: {
    title: 'Gas Engineer Marketing Swindon | GasSafeBot',
    description: 'Rank #1 on Google for gas engineer searches across Swindon, Old Town, Wroughton, Freshbrook and the wider SN postcode area.',
    url: 'https://gassafebot.co.uk/gas-engineer-marketing/swindon/',
    type: 'website',
  },
}

const swindonAreas = [
  { name: 'Old Town', postcode: 'SN1' },
  { name: 'Freshbrook', postcode: 'SN5' },
  { name: 'Wroughton', postcode: 'SN4' },
  { name: 'Stratton St Margaret', postcode: 'SN3' },
  { name: 'Haydon Wick', postcode: 'SN25' },
  { name: 'Park North', postcode: 'SN3' },
  { name: 'Liden', postcode: 'SN3' },
  { name: 'Pinehurst', postcode: 'SN2' },
  { name: 'Walcot', postcode: 'SN3' },
  { name: 'Rodbourne', postcode: 'SN2' },
  { name: 'Covingham', postcode: 'SN3' },
  { name: 'Wichelstowe', postcode: 'SN1' },
]

const keywords = [
  'gas engineer Swindon',
  'boiler service Swindon',
  'Gas Safe engineer Swindon',
  'boiler installation Swindon',
  'emergency gas engineer Swindon',
  'heating engineer SN1',
  'boiler repair Swindon',
  'landlord gas certificate Swindon',
  'central heating Swindon',
  'gas engineer Old Town Swindon',
]

const stats = [
  { value: '2,400+', label: 'Monthly searches for gas engineers in Swindon' },
  { value: '£0', label: 'Most Swindon engineers spend on Google presence' },
  { value: '94%', label: 'Of customers pick from the first Google page' },
  { value: '6–10', label: 'Weeks to rank on page 1 for Swindon terms' },
]

export default function SwindonPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .responsive-grid-2 {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .responsive-grid-2 {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      ` }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Gas Engineer Marketing Swindon',
            provider: {
              '@type': 'Organization',
              name: 'GasSafeBot',
              url: 'https://gassafebot.co.uk',
            },
            areaServed: {
              '@type': 'City',
              name: 'Swindon',
              containsPlace: swindonAreas.map(a => ({
                '@type': 'Place',
                name: a.name,
                postalCode: a.postcode,
              })),
            },
            description: 'SEO, websites and AI receptionists for Gas Safe engineers in Swindon',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gassafebot.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Gas Engineer Marketing', item: 'https://gassafebot.co.uk/gas-engineer-marketing/' },
              { '@type': 'ListItem', position: 3, name: 'Swindon', item: 'https://gassafebot.co.uk/gas-engineer-marketing/swindon/' },
            ],
          }),
        }}
      />
      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', fontSize: '0.85rem', color: 'var(--muted)' }}>
          <div className="container">
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <span aria-hidden="true"> › </span>
            <Link href="/gas-engineer-marketing" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Gas Engineer Marketing</Link>
            <span aria-hidden="true"> › </span>
            <span aria-current="page">Swindon</span>
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
              📍 Swindon · SN1–SN5 &amp; surrounding
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Gas Engineer Marketing<br />
              <span style={{ color: 'var(--fire)' }}>Swindon</span>
            </h1>
            <p style={{ maxWidth: 680, margin: '0 auto 2.5rem', fontSize: '1.15rem', lineHeight: 1.7, opacity: 0.75 }}>
              Every month, over 2,400 people in Swindon search Google for a gas engineer. Right now, most of that work goes to whoever shows up first — and it&apos;s rarely the best engineer in the area. It&apos;s the one with the best Google presence. We fix that.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#audit" className="btn-primary">Get My Free Swindon Audit →</Link>
              <Link href="#how-it-works" className="btn-ghost">See How It Works</Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ background: 'rgba(255,107,0,0.06)', borderTop: '1px solid rgba(255,107,0,0.15)', borderBottom: '1px solid rgba(255,107,0,0.15)', padding: '2.5rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <span style={{ display: 'block', fontSize: '2.2rem', fontWeight: 800, color: 'var(--fire)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.value}</span>
                  <span style={{ fontSize: '0.88rem', opacity: 0.6, lineHeight: 1.4 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The opportunity */}
        <section style={{ padding: '5rem 0' }}>
          <div className="container responsive-grid-2">
            <div>
              <h2 style={{ fontSize: '1.9rem', marginBottom: '1.5rem', textAlign: 'left' }}>Why Swindon Is a Goldmine for Gas Engineers Right Now</h2>
              <p style={{ lineHeight: 1.8, marginBottom: '1.2rem', opacity: 0.75 }}>
                Swindon is one of the fastest-growing towns in the South West. New housing estates in Wichelstowe and North Swindon, a high density of rental properties across SN2 and SN3, and year-round demand for boiler installs, landlord CP12 certificates, and annual services — the work is there. The problem is visibility.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '1.2rem', opacity: 0.75 }}>
                When a homeowner in Freshbrook or a landlord in Stratton St Margaret searches &quot;gas engineer Swindon&quot; on their phone, they see a wall of directory listings — Checkatrade, MyBuilder, Yell — and just one or two dedicated engineer websites, most built years ago, loading badly on mobile.
              </p>
              <p style={{ lineHeight: 1.8, opacity: 0.75 }}>
                <strong style={{ color: 'white' }}>That gap is your opportunity.</strong> A professional, fast, mobile-first website with genuine Swindon-area content can reach page 1 of Google in 6–10 weeks. We know, because we ranked ourselves before offering it to anyone else.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.8rem' }}>
              <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fire)', marginBottom: '1.2rem' }}>Swindon at a glance</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  ['Population', '~230,000'],
                  ['Key postcodes', 'SN1, SN2, SN3, SN4, SN5, SN25'],
                  ['Top searches', 'gas engineer, boiler service, CP12'],
                  ['Peak demand', 'Oct–Mar + new build season'],
                  ['Competition', 'Low–Medium'],
                  ['Ranking timeline', '6–10 weeks to page 1'],
                ].map(([k, v]) => (
                  <li key={k} style={{ fontSize: '0.9rem', opacity: 0.75, paddingBottom: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <strong style={{ color: 'white' }}>{k}:</strong> {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Keywords */}
        <section style={{ padding: '5rem 0', background: 'rgba(255,255,255,0.02)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Keywords We Target for Swindon Engineers</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 3rem', opacity: 0.7, lineHeight: 1.7 }}>
              These are the exact searches your potential customers type — we make sure your business shows up for all of them.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
              {keywords.map((kw) => (
                <div key={kw} style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.2)', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '2rem', fontSize: '0.9rem' }}>
                  🔍 {kw}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ padding: '5rem 0' }} id="how-it-works">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>How We Rank You in Swindon</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 3rem', opacity: 0.7, lineHeight: 1.7 }}>
              Three things working together. Each one compounds the others.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left' }}>
              {[
                {
                  num: '01',
                  title: 'Your Swindon Website',
                  body: 'Built specifically for the Swindon market — not a national template with your name swapped in. Every page targets real Swindon postcodes, neighbourhoods, and the services your customers actually search for. Fast on mobile. Clear call to action. Designed to convert visitors into calls.',
                },
                {
                  num: '02',
                  title: 'Local SEO That Sticks',
                  body: 'We set up and optimise your Google Business Profile for Swindon and surrounding villages. We build citations on the directories that matter. We create content that earns rankings — area pages for Old Town, Freshbrook, Wroughton, Stratton, and more. This is what gets you into the map pack.',
                },
                {
                  num: '03',
                  title: 'Emma — Never Miss a Swindon Call',
                  body: "When someone in Haydon Wick calls at 7pm because their boiler's gone, Emma answers. She qualifies the job, captures their details, and books them into your calendar while you're on another job. Repeat callers are recognised by name. No more lost work.",
                },
              ].map((s) => (
                <div key={s.num} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(255,107,0,0.25)', lineHeight: 1, marginBottom: '1rem' }}>{s.num}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.7, margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section style={{ padding: '5rem 0', background: 'rgba(255,255,255,0.02)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Swindon Areas We Build Pages For</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 3rem', opacity: 0.7, lineHeight: 1.7 }}>
              Every suburb gets its own dedicated page targeting local searches — so you rank for &quot;gas engineer Stratton&quot; and &quot;boiler service Haydon Wick&quot; as well as the main Swindon terms.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
              {swindonAreas.map((area) => (
                <div key={area.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '0.9rem 1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{area.name}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--fire)', background: 'rgba(255,107,0,0.1)', padding: '0.2rem 0.5rem', borderRadius: 4, fontWeight: 600 }}>{area.postcode}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section style={{ padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>We Ranked Ourselves First</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 2.5rem', opacity: 0.7, lineHeight: 1.7 }}>
              Before offering this to any gas engineer, we proved it works by ranking GasSafeBot itself on page 1 of Google. The same process — local content, Google Business Profile, targeted keywords — applied to your business in Swindon. No theory. No guesswork.
            </p>
            <div style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: 12, padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', maxWidth: 680, margin: '0 auto', textAlign: 'left' }}>
              <span style={{ fontSize: '2rem', flexShrink: 0 }}>📊</span>
              <div style={{ lineHeight: 1.7, opacity: 0.8 }}>
                <strong style={{ color: 'white' }}>Seeing is believing.</strong> Request your free Swindon audit and we&apos;ll show you exactly where you rank today, who&apos;s ahead of you, and the step-by-step plan to overtake them — before you spend a penny.
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section style={{ padding: '5rem 0', background: 'rgba(255,255,255,0.02)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Packages for Swindon Engineers</h2>
            <p style={{ maxWidth: 580, margin: '0 auto 3rem', opacity: 0.7, lineHeight: 1.7 }}>
              All packages include a website, local SEO targeting the SN postcode area, and Emma the AI receptionist.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {[
                {
                  name: 'Pilot',
                  setup: '£497',
                  monthly: '+ £197/month',
                  featured: false,
                  features: ['5-page Swindon website', 'Google Business Profile setup', 'Emma AI receptionist', '3 area landing pages', 'Monthly ranking report'],
                },
                {
                  name: 'Growth',
                  setup: '£997',
                  monthly: '+ £347/month',
                  featured: true,
                  features: ['10-page Swindon website', 'Full Google Business optimisation', 'Emma AI receptionist', 'All SN postcode area pages', 'Directory citation building', 'Monthly content updates', 'Competitor tracking'],
                },
                {
                  name: 'Dominator',
                  setup: '£1,797',
                  monthly: '+ £597/month',
                  featured: false,
                  features: ['Full Swindon area dominance', '20+ area landing pages', 'Emma AI receptionist + calendar', 'Weekly content & SEO', 'Backlink building', 'Priority support'],
                },
              ].map((pkg) => (
                <div key={pkg.name} style={{ background: pkg.featured ? 'rgba(255,107,0,0.05)' : 'rgba(255,255,255,0.03)', border: pkg.featured ? '1px solid rgba(255,107,0,0.4)' : '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '2rem', position: 'relative' }}>
                  {pkg.featured && (
                    <div style={{ position: 'absolute', top: '-0.7rem', left: '50%', transform: 'translateX(-50%)', background: 'var(--fire)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.9rem', borderRadius: '2rem', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Most Popular</div>
                  )}
                  <div style={{ color: 'var(--fire)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{pkg.name}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}>{pkg.setup} <span style={{ fontSize: '0.9rem', fontWeight: 400, opacity: 0.5 }}>setup</span></div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '1.5rem' }}>{pkg.monthly}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', opacity: 0.75, textAlign: 'left' }}>
                    {pkg.features.map(f => <li key={f}>✓ {f}</li>)}
                  </ul>
                  <Link href="/#audit" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Start with {pkg.name} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ padding: '6rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2>Ready to Own Gas Engineer Search in Swindon?</h2>
            <p style={{ maxWidth: 520, margin: '0 auto 2.5rem', opacity: 0.7, lineHeight: 1.7 }}>
              Get your free Swindon audit. We&apos;ll show you where you rank today, who&apos;s beating you, and exactly what it takes to reach page 1 — at no cost and no obligation.
            </p>
            <Link href="/#audit" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem' }}>
              Get My Free Swindon Audit →
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