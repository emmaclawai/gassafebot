import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import AuditForm from '@/components/AuditForm'
import { cities, getCityBySlug } from '@/content/cities'

interface Props {
  params: { city: string }
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  if (!city) return {}
  const title = `Gas Engineer Website & SEO ${city.name} | GasSafeBot`
  const description = `Website design and local SEO for Gas Safe engineers in ${city.name}. Built to win more enquiries in ${city.region}. From £497. Free audit available.`
  return {
    title,
    description,
    alternates: { canonical: `https://gassafebot.co.uk/gas-engineer-marketing/${city.slug}` },
    openGraph: {
      title: `Gas Engineer Marketing ${city.name} | GasSafeBot`,
      description,
      url: `https://gassafebot.co.uk/gas-engineer-marketing/${city.slug}`,
    },
  }
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Gas Engineer Marketing ${city.name}`,
    provider: { '@type': 'Organization', name: 'GasSafeBot', url: 'https://gassafebot.co.uk' },
    areaServed: { '@type': 'City', name: city.name },
    description: `Website design, local SEO, and AI voice receptionist for Gas Safe engineers in ${city.name} and ${city.region}.`,
    serviceType: ['Website Design', 'Local SEO', 'AI Voice Receptionist'],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <NavBar />
      <main id="main-content">
        {/* City Hero */}
        <section className="city-hero">
          <div className="container">
            <nav className="city-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link> › {city.name}
            </nav>
            <div className="tag" style={{ marginBottom: '1.2rem' }}>
              <span className="tag-dot" aria-hidden="true" />
              Gas Engineer Website &amp; SEO — {city.region}
            </div>
            <h1>
              Gas Engineer Website &amp; SEO<br />
              <span>{city.name}</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate)', maxWidth: '600px', lineHeight: '1.7', marginBottom: '2rem' }}>
              {city.description || ''}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href="#city-contact" className="btn btn-fire btn-lg">Get My Free {city.name} SEO Audit →</a>
              <a href="/#packages" className="btn btn-outline">View Pricing</a>
            </div>
            <div>
              <p style={{ fontSize: '0.78rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
                Target search terms we rank for:
              </p>
              <div className="city-terms">
                {(city.searchTerms || []).map((term) => (
                  <span key={term} className="city-term">{term}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why rank in this city */}
        <section className="section section--mid">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div className="eyebrow">The Opportunity</div>
                <h2>Why {city.name} Gas Engineers<br /><span>Need Strong SEO</span></h2>
                <p style={{ color: 'var(--dim)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                  Most gas engineers in {city.name} rely on word of mouth, Checkatrade, or Google Ads — all of which are either unreliable or expensive. A well-built website with strong local SEO can generate consistent enquiries without relying entirely on paid ads.
                </p>
                <p style={{ color: 'var(--dim)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                  Most gas engineers in {city.name} rely on word of mouth, Checkatrade, or Google Ads — all of which are either unreliable or expensive. A well-built website with proper local SEO generates enquiries consistently, without ongoing ad spend, and from customers who are actively searching for your services right now.
                </p>
                <p style={{ color: 'var(--dim)', lineHeight: '1.75' }}>
                  We build and maintain your {city.name} online presence so that when someone searches for a gas engineer in {(city.areas || []).slice(0, 3).join(', ')} or anywhere across{' '}
                  {city.region}, you&apos;re the one they find.
                </p>
              </div>
              <div>
                <div className="why-visual">
                  <div style={{ fontSize: '0.75rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
                    Areas we target in {city.name}
                  </div>
                  <div className="city-areas">
                    {(city.areas || []).map((area) => (
                      <span key={area} className="city-area-tag">{area}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.15)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--fire)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                      Demand level
                    </div>
                    <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: 'var(--white)' }}>
                      {city.demand}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--dim)', marginTop: '0.3rem' }}>
                      for gas engineer services in {city.region}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="section section--dark">
          <div className="container">
            <div className="eyebrow">Our {city.name} Service</div>
            <h2>What We Build For<br /><span>{city.name} Engineers</span></h2>
            <div className="services-grid" style={{ marginTop: '2.5rem' }}>
              <div className="service-card">
                <span className="service-icon" aria-hidden="true">🖥️</span>
                <h3>Website Built For {city.name}</h3>
                <p>Every page is written and structured specifically for gas engineer searches in {city.name} and its surrounding areas. No templates reused from other cities.</p>
                <ul className="service-includes">
                  <li>Pages targeting {(city.areas || []).slice(0, 4).join(', ')}</li>
                  <li>Local search intent matched per page</li>
                  <li>Schema with {city.name} location data</li>
                  <li>Fast loading, mobile-first build</li>
                </ul>
              </div>
              <div className="service-card">
                <span className="service-icon" aria-hidden="true">📍</span>
                <h3>Local SEO — {city.name}</h3>
                <p>We build your Google Business Profile for {city.name}, get you listed in the right local directories, and target every postcode area you cover.</p>
                <ul className="service-includes">
                  <li>Google Business Profile optimised for {city.name}</li>
                  <li>Local citations across {city.region} directories</li>
                  <li>Area pages for each town you cover</li>
                  <li>Competitor monitoring specific to {city.name}</li>
                </ul>
              </div>
              <div className="service-card">
                <span className="service-icon" aria-hidden="true">📞</span>
                <h3>Emma — 24/7 Calls</h3>
                <p>Emma answers every inbound call in {city.name} — emergency or routine — around the clock. You never miss a job while you&apos;re on-site.</p>
                <ul className="service-includes">
                  <li>Identifies {city.name} area caller location</li>
                  <li>Flags gas emergencies for immediate transfer</li>
                  <li>SMS job summary within 30 seconds</li>
                  <li>Books within your coverage postcodes only</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Audit form */}
        <section className="section section--mid" id="city-contact">
          <div className="container">
            <div className="contact-wrap">
              <div className="contact-info">
                <div className="eyebrow">Free {city.name} Audit</div>
                <h2>Get A Free <span>{city.name} Ranking Plan</span></h2>
                <p className="lead">
                  We&apos;ll check your current visibility in {city.name}, analyse your competitors, and send you a clear plan — what to target, what it would take to rank there, and the most realistic starting package.
                </p>
                <div className="contact-detail">
                  <div className="cd-icon" aria-hidden="true">📍</div>
                  <div className="cd-info">
                    <h4>Specific to {city.name}</h4>
                    <p>Your audit will be built around the actual competition in {city.name} and {city.region}</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="cd-icon" aria-hidden="true">⏱️</div>
                  <div className="cd-info">
                    <h4>Response time</h4>
                    <p>Audit sent within 1 business day</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="cd-icon" aria-hidden="true">🔒</div>
                  <div className="cd-info">
                    <h4>No obligation</h4>
                    <p>Free, honest, no pressure</p>
                  </div>
                </div>
              </div>
              <div className="form-card">
                <AuditForm />
              </div>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div style={{ background: 'var(--ink2)', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="container">
            <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none', fontSize: '0.85rem' }}>
              ← Back to GasSafeBot
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-legal">
              © 2026 GasSafeBot.co.uk. All rights reserved.
            </div>
            <div className="footer-disclaimer">
              GasSafeBot is an independent marketing and software service for heating and gas businesses. We are not affiliated with, endorsed by, or operated by the Gas Safe Register. Gas Safe® is a registered trademark of the Gas Safe Register.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
