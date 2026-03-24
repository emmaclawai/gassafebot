import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import AuditForm from '@/components/AuditForm'
import FaqAccordion from '@/components/FaqAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { getPhase1Cities } from '@/content/cities'
import { WrenchIcon, MapPinIcon, PhoneIcon, GlobeAltIcon, BoltIcon, FireIcon, XCircleIcon, CheckCircleIcon, ComputerDesktopIcon, ChartBarIcon, LockClosedIcon, ClockIcon, TrophyIcon, EnvelopeIcon, CurrencyPoundIcon, MapIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'GasSafeBot | Websites & Local SEO for Gas Safe Engineers | UK',
  description:
    'Websites, local SEO, and AI receptionist systems built for UK Gas Safe engineers. Designed to help heating businesses win more enquiries in their service areas.',
  alternates: { canonical: 'https://gassafebot.co.uk/' },
  // Deploy: 2026-03-24
  robots: { index: true, follow: true },
  openGraph: {
    title: 'GasSafeBot | Websites & Local SEO for Gas Safe Engineers',
    description: 'Websites and local SEO built to help UK gas engineers win more enquiries in their service areas.',
    url: 'https://gassafebot.co.uk',
    siteName: 'GasSafeBot',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gas Engineer Website & Local SEO',
  provider: { '@type': 'Organization', name: 'GasSafeBot' },
  description:
    'Website design, local SEO, and AI voice receptionist systems built exclusively for Gas Safe registered engineers across the UK.',
  offers: [
    { '@type': 'Offer', name: 'Pilot', price: '497', priceCurrency: 'GBP', description: '5-page website, 1-area local SEO, Google Business setup' },
    { '@type': 'Offer', name: 'Growth', price: '997', priceCurrency: 'GBP', description: 'Full website, 3-area local SEO, competitor analysis, blog content' },
    { '@type': 'Offer', name: 'Dominator', price: '1797', priceCurrency: 'GBP', description: '10-area local SEO domination, full citation building, monthly content' },
  ],
}

const rankingWebsiteServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ranking Website for Gas Engineers',
  provider: { '@type': 'Organization', name: 'GasSafeBot' },
  description: 'A professional, fast-loading website built from the ground up to rank for gas engineer searches in your target areas. Written by us, optimised for Google from day one.',
  serviceType: 'Website Design',
  areaServed: 'GB',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Features',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '5-10 pages of SEO-optimised content' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile-first, sub-2s load time' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local area landing pages' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Schema markup & technical SEO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contact form with instant lead alerts' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fast UK-based hosting' } },
    ],
  },
}

const localSeoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO for Gas Engineers',
  provider: { '@type': 'Organization', name: 'GasSafeBot' },
  description: 'Dominate the map pack and organic results in every area you work. We handle every aspect of local search — Google Business, citations, reviews, and ongoing content.',
  serviceType: 'Local SEO',
  areaServed: 'GB',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Local SEO Features',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile setup & optimisation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local citation building (50+ directories)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Area-specific landing pages' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Review generation strategy' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Competitor gap analysis' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monthly keyword ranking reports' } },
    ],
  },
}

const emmaServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emma AI Voice Receptionist',
  provider: { '@type': 'Organization', name: 'GasSafeBot' },
  description: 'Our AI receptionist answers every inbound call, 24 hours a day, 7 days a week. She identifies caller type, flags urgency, captures job details, and keeps your diary full while you\'re on the tools.',
  serviceType: 'AI Receptionist',
  areaServed: 'GB',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Emma Features',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Captures tenant / homeowner / landlord type' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flags gas leak / no heating / no hot water urgency' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sends job summary by SMS within 30 seconds' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Books only within your hours & postcodes' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transfers emergencies or VIPs to your mobile' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logs missed-call opportunities automatically' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take for a gas engineer website to rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many local SEO campaigns begin gaining traction within the first 60–90 days, depending on your area, competition, website age, and Google Business Profile strength. We provide a realistic timeline for your specific market before any work starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to know anything about websites or SEO to work with GasSafeBot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nothing at all. You fill in a form with your business details, service areas, and what services you offer. We handle everything — writing, design, hosting, Google Business, citations, content, and monthly reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Emma the AI voice receptionist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emma is an AI voice receptionist that answers every inbound call 24/7. She identifies caller type (tenant, homeowner, landlord), flags urgency, captures job details, sends an SMS summary to your phone, and only books within your working hours and coverage postcodes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a gas engineer website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Pilot package starts at £497 setup plus £197/month, Growth at £997 plus £347/month, and Dominator at £1,797 plus £597/month. The Emma AI receptionist add-on is £297 setup plus £197/month. All packages include everything — no hidden fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You own your domain, website files, Google Business Profile, and all accounts we set up. Everything is registered in your name from day one. If you ever cancel, you keep everything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel anytime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work on a rolling monthly basis with 30 days notice. There are no lock-in contracts or cancellation fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with Gas Safe registered engineers across the entire UK. Our local SEO strategies are tailored to each specific city and region, including London, Manchester, Birmingham, Leeds, Glasgow, Liverpool, and all major towns.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes GasSafeBot different from other web designers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We only work with gas engineers. Every website we build is optimised specifically for heating industry keywords and local SEO. We understand what your customers search for and how to get you found.',
      },
    },
  ],
}

const cities = getPhase1Cities()

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rankingWebsiteServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emmaServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <NavBar />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-lines" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="tag">
              <span className="tag-dot" aria-hidden="true" />
              Built for UK Gas Safe Engineers
            </div>
            <h1>
              Websites &amp; Local SEO
              <span className="fire">for Gas Safe Engineers</span>
            </h1>
            <p className="hero-sub">
              We build fast, professional websites and local SEO systems designed
              to help UK gas engineers win more enquiries in their service areas.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-fire btn-lg">Get My Free Gas Engineer SEO Audit →</a>
              <a href="#packages" className="btn btn-outline">Compare Packages</a>
            </div>
            <div className="hero-proof">
              <span className="hero-proof-icon" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" /></span>
              Built for UK heating businesses
              <span aria-hidden="true">&nbsp;·&nbsp;</span>
              <span className="hero-proof-icon" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" /></span>
              You own your website &amp; domain
              <span aria-hidden="true">&nbsp;·&nbsp;</span>
              <span className="hero-proof-icon" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" /></span>
              Rolling monthly support
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-n">100<span className="acc">%</span></div>
                <div className="stat-l">Gas engineer focus</div>
              </div>
              <div>
                <div className="stat-n">SEO<span className="acc">+</span>Web</div>
                <div className="stat-l">Full digital system</div>
              </div>
              <div>
                <div className="stat-n">24<span className="acc">/7</span></div>
                <div className="stat-l">Emma answers calls</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="trust">
          <div className="container trust-inner">
            <div className="trust-item"><WrenchIcon className="w-4 h-4 inline" /> <strong>Gas Safe specialists</strong> — we know your trade</div>
            <div className="trust-item"><MapPinIcon className="w-4 h-4 inline" /> <strong>Local SEO</strong> — rank in every area you cover</div>
            <div className="trust-item"><PhoneIcon className="w-4 h-4 inline" /> <strong>Emma</strong> — AI receptionist, never misses a call</div>
            <div className="trust-item"><GlobeAltIcon className="w-4 h-4 inline" /> <strong>UK only</strong> — built for British engineers</div>
            <div className="trust-item"><BoltIcon className="w-4 h-4 inline" /> <strong>Fast builds</strong> — typically live within 2 weeks</div>
          </div>
        </div>

        {/* ── PROBLEM / SOLUTION ── */}
        <section className="section section--dark" id="problem">
          <div className="container">
            <ScrollReveal>
              <div className="problem-grid">
                <div className="reveal">
                  <div className="eyebrow">The Problem</div>
                  <h2>Most Gas Engineer Websites<br /><span>Don&apos;t Get Found</span></h2>
                  <p className="lead">
                    You&apos;re brilliant at your job — but if your website isn&apos;t visible on Google,
                    your phone won&apos;t ring. Generic web designers don&apos;t understand what gas engineers need.
                  </p>
                  <div className="problem-points">
                    <div className="problem-point bad">
                      <span className="pp-icon" aria-hidden="true"><XCircleIcon className="w-6 h-6" /></span>
                      <div className="pp-text">
                        <h4>Generic websites that don&apos;t rank</h4>
                        <p>A web designer builds you a pretty site but has no idea how to get &quot;gas engineer Manchester&quot; on page one. It sits on page four — invisible.</p>
                      </div>
                    </div>
                    <div className="problem-point bad">
                      <span className="pp-icon" aria-hidden="true"><XCircleIcon className="w-6 h-6" /></span>
                      <div className="pp-text">
                        <h4>Missing calls while you&apos;re on the job</h4>
                        <p>You&apos;re up a loft or under a boiler. A customer calls, gets no answer, and books someone else. Every missed call is lost revenue.</p>
                      </div>
                    </div>
                    <div className="problem-point bad">
                      <span className="pp-icon" aria-hidden="true"><XCircleIcon className="w-6 h-6" /></span>
                      <div className="pp-text">
                        <h4>Paying Checkatrade for leads you could own</h4>
                        <p>Directory sites take your money and show customers your competitors too. We build you an asset you own, so you&apos;re less reliant on rented leads from third-party platforms.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="reveal reveal-delay-1">
                  <div className="eyebrow">The Solution</div>
                  <h2>Websites and Local SEO Built To <span>Win More Enquiries</span></h2>
                  <div className="problem-points" style={{ marginTop: '1.5rem' }}>
                    <div className="problem-point good">
                      <span className="pp-icon" aria-hidden="true"><FireIcon className="w-6 h-6" /></span>
                      <div className="pp-text">
                        <h4>Websites built to rank — not just look good</h4>
                        <p>Every page, every word, every technical detail is built around getting you found when gas engineers in your area are searched for on Google.</p>
                      </div>
                    </div>
                    <div className="problem-point good">
                      <span className="pp-icon" aria-hidden="true"><PhoneIcon className="w-6 h-6" /></span>
                      <div className="pp-text">
                        <h4>Emma answers every call 24/7</h4>
                        <p>Our AI receptionist Emma qualifies callers, captures their details, and syncs bookings to your calendar. You never miss a job again.</p>
                      </div>
                    </div>
                    <div className="problem-point good">
                      <span className="pp-icon" aria-hidden="true"><MapPinIcon className="w-6 h-6" /></span>
                      <div className="pp-text">
                        <h4>Local SEO that builds your own pipeline</h4>
                        <p>We optimise your Google Business Profile, build local citations, and create area pages so customers in every town you cover can find you.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="section section--mid" id="services">
          <div className="container">
            <div className="eyebrow">What We Build</div>
            <h2>Three Things That <span>Fill Your Diary</span></h2>
            <p className="lead">
              We handle the complete digital picture for your gas engineering business — not just a website,
              but the full system that generates consistent enquiries.
            </p>
            <ScrollReveal>
              <div className="services-grid reveal">
                <div className="service-card">
                  <span className="service-icon" aria-hidden="true"><ComputerDesktopIcon className="w-8 h-8" /></span>
                  <h3>Ranking Website</h3>
                  <p>A professional, fast-loading website built from the ground up to rank for gas engineer searches in your target areas. Written by us, optimised for Google from day one.</p>
                  <ul className="service-includes" aria-label="What's included">
                    <li>5–10 pages of SEO-optimised content</li>
                    <li>Mobile-first, sub-2s load time</li>
                    <li>Local area landing pages</li>
                    <li>Schema markup &amp; technical SEO</li>
                    <li>Contact form with instant lead alerts</li>
                    <li>Fast UK-based hosting</li>
                  </ul>
                </div>
                <div className="service-card">
                  <span className="service-icon" aria-hidden="true"><MapPinIcon className="w-8 h-8" /></span>
                  <h3>Local SEO</h3>
                  <p>Dominate the map pack and organic results in every area you work. We handle every aspect of local search — Google Business, citations, reviews, and ongoing content.</p>
                  <ul className="service-includes" aria-label="What's included">
                    <li>Google Business Profile setup &amp; optimisation</li>
                    <li>Local citation building (50+ directories)</li>
                    <li>Area-specific landing pages</li>
                    <li>Review generation strategy</li>
                    <li>Competitor gap analysis</li>
                    <li>Monthly keyword ranking reports</li>
                  </ul>
                </div>
                <div className="service-card">
                  <span className="service-icon" aria-hidden="true"><PhoneIcon className="w-8 h-8" /></span>
                  <h3>Emma — Voice Receptionist</h3>
                  <p>Our AI receptionist answers every inbound call, 24 hours a day, 7 days a week. She identifies caller type, flags urgency, and keeps your diary full while you&apos;re on the tools.</p>
                  <ul className="service-includes" aria-label="Emma features">
                    <li>Captures tenant / homeowner / landlord type</li>
                    <li>Flags gas leak / no heating / no hot water urgency</li>
                    <li>Sends job summary by SMS within 30 seconds</li>
                    <li>Books only within your working hours &amp; postcodes</li>
                    <li>Transfers emergencies or VIPs to your mobile</li>
                    <li>Logs missed-call opportunities automatically</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="section section--dark" id="how-it-works">
          <div className="container">
            <div className="eyebrow">The Process</div>
            <h2>Live &amp; Ranking in <span>Four Steps</span></h2>
            <p className="lead">We&apos;ve stripped the process down to the bare essentials. You fill in a form. We do the rest.</p>
            <ScrollReveal>
              <div className="steps reveal">
                <div className="step">
                  <div className="step-n" aria-hidden="true">01</div>
                  <div className="step-badge">Day 1</div>
                  <h3>Free Audit</h3>
                  <p>Fill in the contact form below. We analyse your current online presence, your target areas, and your competition — and send you a personalised ranking plan within 1 business day.</p>
                </div>
                <div className="step">
                  <div className="step-n" aria-hidden="true">02</div>
                  <div className="step-badge">Days 2–10</div>
                  <h3>We Build</h3>
                  <p>You tell us about your business, areas, and services. Our team writes the content, builds the site, optimises every page, and sets up your Google Business Profile.</p>
                </div>
                <div className="step">
                  <div className="step-n" aria-hidden="true">03</div>
                  <div className="step-badge">Days 10–90+</div>
                  <h3>We Rank</h3>
                  <p>Citations get built, content gets published, links get earned, and rankings climb. Many local SEO campaigns begin gaining traction within 60–90 days, depending on your area and competition.</p>
                </div>
                <div className="step">
                  <div className="step-n" aria-hidden="true">04</div>
                  <div className="step-badge">Ongoing</div>
                  <h3>We Grow</h3>
                  <p>Monthly reports, fresh content, ranking maintenance, and Emma handling your calls. The retainer keeps you at the top — and expanding into new areas as your business grows.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="section section--dark" id="packages">
          <div className="container">
            <div className="eyebrow">Packages &amp; Pricing</div>
            <h2>Straight Prices. <span>No Surprises.</span></h2>
            <p className="lead">
              One setup fee. One monthly retainer. Everything included. No hidden extras, no upsells you
              didn&apos;t ask for, no lock-in contracts.
            </p>
            <ScrollReveal>
              <div className="packages-grid reveal">

                <div className="pkg">
                  <div className="pkg-name">Pilot</div>
                  <div className="pkg-tagline">Perfect if you have no site or a very basic one. Get visible in your main area fast.</div>
                  <div className="pkg-price-main"><sup>£</sup>497</div>
                  <div className="pkg-monthly">then <strong>£197/month</strong></div>
                  <hr className="pkg-divider" />
                  <ul className="pkg-features">
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> 5-page professional website</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> 1 local area SEO target</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Google Business Profile setup</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Mobile-first, fast loading</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Contact form with instant lead alerts</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Schema markup</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Monthly ranking report</li>
                    <li><span className="cross" aria-hidden="true">–</span> <span style={{ color: 'var(--dim)' }}>Multiple area pages</span></li>
                    <li><span className="cross" aria-hidden="true">–</span> <span style={{ color: 'var(--dim)' }}>Competitor gap analysis</span></li>
                  </ul>
                  <a href="#contact" className="pkg-cta">Get Started →</a>
                </div>

                <div className="pkg pop">
                  <div className="pkg-label">Most Popular</div>
                  <div className="pkg-name">Growth</div>
                  <div className="pkg-tagline">Established engineer. Multiple service areas. Ready to build a real pipeline.</div>
                  <div className="pkg-price-main"><sup>£</sup>997</div>
                  <div className="pkg-monthly">then <strong>£347/month</strong></div>
                  <hr className="pkg-divider" />
                  <ul className="pkg-features">
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> 8-page website with area landing pages</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> 3 local area SEO targets</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Google Business Profile full optimisation</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Competitor gap analysis</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Citation building (20+ directories)</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Blog setup (2 posts included)</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Google reviews strategy</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Monthly keyword ranking report</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Priority email support</li>
                  </ul>
                  <a href="#contact" className="pkg-cta">Get Started →</a>
                </div>

                <div className="pkg">
                  <div className="pkg-name">Dominator</div>
                  <div className="pkg-tagline">Multi-area operations. You want to own your local search results completely.</div>
                  <div className="pkg-price-main"><sup>£</sup>1,797</div>
                  <div className="pkg-monthly">then <strong>£597/month</strong></div>
                  <hr className="pkg-divider" />
                  <ul className="pkg-features">
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Full website — unlimited pages</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> 10 local area SEO targets</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Full citation building (50+ directories)</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Monthly blog content (1 post/month)</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Competitor monitoring alerts</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Quarterly strategy review call</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Priority support (same-day response)</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Advanced schema &amp; rich results</li>
                    <li><span className="tick" aria-hidden="true"><CheckCircleIcon className="w-4 h-4" />
    </span> Link building campaign</li>
                  </ul>
                  <a href="#contact" className="pkg-cta">Get Started →</a>
                </div>

              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="emma-addon reveal">
                <div>
                  <div className="emma-badge">Add-on — Works With Any Package</div>
                  <h3>Emma — AI Voice Receptionist</h3>
                  <p>
                    Emma is an AI voice receptionist built specifically for heating and gas businesses. She
                    identifies caller type, flags urgency, captures job details, sends SMS summaries within
                    30 seconds, and only books inside your actual working hours and coverage postcodes.
                    While you&apos;re fitting a boiler, Emma is handling your next job.
                  </p>
                  <div className="emma-features">
                    <div className="emma-feature">Captures tenant / homeowner / landlord type</div>
                    <div className="emma-feature">Flags gas leak / no heating / no hot water urgency</div>
                    <div className="emma-feature">SMS job summary within 30 seconds</div>
                    <div className="emma-feature">Books within your hours &amp; postcodes only</div>
                    <div className="emma-feature">Transfers emergencies to your mobile</div>
                    <div className="emma-feature">Logs missed-call opportunities automatically</div>
                  </div>
                </div>
                <div className="emma-price-block">
                  <div className="pkg-price-main"><sup>£</sup>297</div>
                  <div className="pkg-monthly" style={{ marginBottom: '1.5rem' }}>then <strong>£197/month</strong></div>
                  <a href="#contact" className="pkg-cta" style={{ borderColor: 'rgba(251,191,36,0.3)', color: 'var(--ember)' }}>Add Emma →</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── WHY ── */}
        <section className="section section--mid" id="why">
          <div className="container">
            <ScrollReveal>
              <div className="why-grid">
                <div className="reveal">
                  <div className="eyebrow">Why GasSafeBot</div>
                  <h2>We Only Work With<br /><span>Gas Engineers</span></h2>
                  <p className="lead">
                    We&apos;re not a general web agency. We don&apos;t do restaurants, gyms, or estate agents.
                    Every client we have is a Gas Safe registered engineer. That focus is why our results are different.
                  </p>
                  <div className="why-points">
                    <div className="why-point">
                      <div className="why-icon" aria-hidden="true"><TrophyIcon className="w-6 h-6" /></div>
                      <div>
                        <h3>We know how customers search</h3>
                        <p>We&apos;ve researched every keyword your potential customers use — boiler repair, gas safety certificate, annual service, emergency callout. We target all of them.</p>
                      </div>
                    </div>
                    <div className="why-point">
                      <div className="why-icon" aria-hidden="true"><LockClosedIcon className="w-6 h-6" /></div>
                      <div>
                        <h3>You own everything outright</h3>
                        <p>Your domain, your website, your Google account, your data. We set it all up in your name. Cancel anytime and keep everything. No lock-in, no surprises.</p>
                      </div>
                    </div>
                    <div className="why-point">
                      <div className="why-icon" aria-hidden="true"><ChartBarIcon className="w-6 h-6" /></div>
                      <div>
                        <h3>Monthly proof your retainer is working</h3>
                        <p>Every month you get a ranking report showing exactly where your keywords sit, what&apos;s moved, and what we&apos;re doing next. You see exactly where your money goes.</p>
                      </div>
                    </div>
                    <div className="why-point">
                      <div className="why-icon" aria-hidden="true"><BoltIcon className="w-6 h-6" /></div>
                      <div>
                        <h3>Live in Typically 2 Weeks</h3>
                        <p>We don&apos;t take months to build a website. Once you&apos;re onboarded, your site is typically live and the SEO work begins within 10 business days.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="reveal reveal-delay-2">
                  <div className="why-visual">
                    <div style={{ fontSize: '0.75rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                      Typical ranking journey
                    </div>
                    <div className="timeline">
                      <div className="tl-item">
                        <div className="tl-dot-wrap"><div className="tl-dot done" /><div className="tl-line" /></div>
                        <div className="tl-info">
                          <div className="tl-day">Day 1</div>
                          <div className="tl-event">Free audit sent</div>
                          <div className="tl-sub">Ranking plan, competitor analysis, keyword targets</div>
                        </div>
                      </div>
                      <div className="tl-item">
                        <div className="tl-dot-wrap"><div className="tl-dot done" /><div className="tl-line" /></div>
                        <div className="tl-info">
                          <div className="tl-day">Day 10</div>
                          <div className="tl-event">Website live</div>
                          <div className="tl-sub">Professional site, optimised pages, GBP connected</div>
                        </div>
                      </div>
                      <div className="tl-item">
                        <div className="tl-dot-wrap"><div className="tl-dot done" /><div className="tl-line" /></div>
                        <div className="tl-info">
                          <div className="tl-day">Day 30</div>
                          <div className="tl-event">First rankings appear</div>
                          <div className="tl-sub">Long-tail keywords entering top 20, map pack building</div>
                        </div>
                      </div>
                      <div className="tl-item">
                        <div className="tl-dot-wrap"><div className="tl-dot done" /><div className="tl-line" /></div>
                        <div className="tl-info">
                          <div className="tl-day">Day 60</div>
                          <div className="tl-event">Core keywords climbing</div>
                          <div className="tl-sub">Traffic growing, first organic enquiries arriving</div>
                        </div>
                      </div>
                      <div className="tl-item">
                        <div className="tl-dot-wrap"><div className="tl-dot" /><div className="tl-line" style={{ opacity: 0.3 }} /></div>
                        <div className="tl-info">
                          <div className="tl-day" style={{ color: 'var(--success)' }}>Day 60–90+</div>
                          <div className="tl-event" style={{ color: 'var(--white)' }}>Strong local visibility</div>
                          <div className="tl-sub">Depends on area, competition, and GBP strength</div>
                        </div>
                      </div>
                      <div className="tl-item">
                        <div className="tl-dot-wrap"><div className="tl-dot" style={{ borderColor: 'rgba(34,197,94,0.4)' }} /></div>
                        <div className="tl-info">
                          <div className="tl-day" style={{ color: 'var(--success)' }}>Ongoing</div>
                          <div className="tl-event">Rankings defended &amp; expanded</div>
                          <div className="tl-sub">New areas added, competitors monitored, growth continues</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CITIES ── */}
        <section className="section section--dark" id="areas">
          <div className="container">
            <div className="eyebrow">Service Areas</div>
            <h2>We Cover <span>The Whole UK</span></h2>
            <p className="lead">
              We work with gas engineers from London to Glasgow. Our SEO strategies are city-specific —
              we know the competition and search patterns in each market. Swindon is our current proof-of-concept city — we're ranking it ourselves first, but we&apos;re active across all major UK cities.
            </p>
            <ScrollReveal>
              <div className="cities-grid reveal">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/gas-engineer-marketing/${city.slug}`}
                    className={`city-card${city.slug === 'london' ? ' london' : ''}`}
                  >
                    <div>
                      <div className="city-card-name">{city.name}</div>
                      <div className="city-card-region">{city.region}</div>
                    </div>
                    <span className="city-card-arrow" aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── PROOF ── */}
        <section className="section section--mid" id="proof">
          <div className="container">
            <div className="eyebrow">Proof Over Promises</div>
            <h2>We&apos;re Building <span>Our Own Rankings First</span></h2>
            <p className="lead">
              GasSafeBot is new. Rather than pretend we have a long list of case studies, we&apos;re doing
              something better — building this site to rank publicly for gas engineer marketing keywords, and
              documenting the process so you can see exactly how it works before you spend anything.
            </p>

            <ScrollReveal>
              <div className="proof-grid reveal">
                <a href="/sample-audit" className="proof-card">
                  <span className="proof-card-icon" aria-hidden="true"><ChartBarIcon className="w-8 h-8" /></span>
                  <h3>See a Demo Audit</h3>
                  <p>Review the kind of technical, local SEO, and conversion audit we produce for your business before you spend anything.</p>
                  <span className="arrow">View Demo Audit →</span>
                </a>
                <a href="/sample-ranking-plan" className="proof-card">
                  <span className="proof-card-icon" aria-hidden="true"><MapIcon className="w-8 h-8" /></span>
                  <h3>View a Sample Ranking Plan</h3>
                  <p>See how we map target towns, postcodes, pages, services, and Google Business Profile actions into a structured ranking plan.</p>
                  <span className="arrow">View Sample Plan →</span>
                </a>
                <a href="/sample-website" className="proof-card">
                  <span className="proof-card-icon" aria-hidden="true"><ComputerDesktopIcon className="w-8 h-8" /></span>
                  <h3>See a Sample Website</h3>
                  <p>Preview the style, structure, service pages, local landing pages, and enquiry flow we build for gas engineers.</p>
                  <span className="arrow">View Sample Site →</span>
                </a>
                <a href="/emma-demo" className="proof-card">
                  <span className="proof-card-icon" aria-hidden="true"><SpeakerWaveIcon className="w-8 h-8" /></span>
                  <h3>Listen to Emma Answer a Call</h3>
                  <p>Hear exactly how Emma handles inbound calls, qualifies urgency, and captures job details while you&apos;re on-site.</p>
                  <span className="arrow">Hear Emma →</span>
                </a>
                <a href="#packages" className="proof-card">
                  <span className="proof-card-icon" aria-hidden="true"><CurrencyPoundIcon className="w-8 h-8" /></span>
                  <h3>Compare Packages</h3>
                  <p>See exactly what changes between Pilot, Growth, and Dominator so you can choose the right level for your area and goals.</p>
                  <span className="arrow">Compare Packages →</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section section--mid" id="faq">
          <div className="container">
            <div style={{ maxWidth: '780px', margin: '0 auto' }}>
              <div className="eyebrow">FAQ</div>
              <h2>Questions We <span>Get Asked</span></h2>
              <ScrollReveal>
                <div className="reveal">
                  <FaqAccordion />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <div className="cta-band">
          <div className="container">
            <div className="eyebrow">Ready To Start?</div>
            <h2>Get Found. <span>Get Booked.</span> Stay There.</h2>
            <p>
              Fill in the free audit form and we&apos;ll tell you exactly what it would take to improve
              your visibility in your target areas — no cost, no obligation.
            </p>
            <div className="cta-actions">
              <a href="#contact" className="btn btn-fire btn-lg">Get My Free Gas Engineer SEO Audit →</a>
              <a href="#packages" className="btn btn-outline">See Full Pricing</a>
            </div>
            <div className="cta-note">No spam. No unsolicited calls. Just a personalised ranking plan within 1 business day.</div>
          </div>
        </div>

        {/* ── CONTACT ── */}
        <section className="section section--dark" id="contact">
          <div className="container">
            <div className="contact-wrap">
              <ScrollReveal>
                <div className="contact-info reveal">
                  <div className="eyebrow">Free Audit</div>
                  <h2>Let&apos;s See What<br /><span>Your Site Can Do</span></h2>
                  <p className="lead">
                    Fill in the form and we&apos;ll audit your current online presence, check your local
                    competition, and send you a clear ranking plan — completely free.
                  </p>
                  <div className="contact-detail">
                    <div className="cd-icon" aria-hidden="true"><ClockIcon className="w-6 h-6" /></div>
                    <div className="cd-info">
                      <h4>Response time</h4>
                      <p>Audit sent within 1 business day</p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="cd-icon" aria-hidden="true"><TrophyIcon className="w-6 h-6" /></div>
                    <div className="cd-info">
                      <h4>What you&apos;ll get</h4>
                      <p>Competitor analysis, keyword targets, realistic ranking assessment, recommended package</p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="cd-icon" aria-hidden="true"><LockClosedIcon className="w-6 h-6" /></div>
                    <div className="cd-info">
                      <h4>No obligation</h4>
                      <p>Free audit, no sales pressure, no unsolicited calls. Just useful, honest information.</p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="cd-icon" aria-hidden="true"><EnvelopeIcon className="w-6 h-6" /></div>
                    <div className="cd-info">
                      <h4>Direct contact</h4>
                      <p><a href="mailto:hello@gassafebot.co.uk" style={{ color: 'var(--fire)', textDecoration: 'none' }}>hello@gassafebot.co.uk</a></p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="reveal reveal-delay-1" id="audit">
                  <div className="form-card">
                    <AuditForm />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="nav-logo" style={{ fontSize: '1.8rem', display: 'block' }}>
                GasSafe<span className="dot">●</span>Bot
              </span>
              <p>Websites and local SEO built exclusively for Gas Safe registered engineers across the UK. Designed to win more enquiries in your target areas.</p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Ranking Websites</a></li>
                <li><a href="#services">Local SEO</a></li>
                <li><a href="#services">Google Business Profile</a></li>
                <li><a href="#services">Emma Receptionist</a></li>
                <li><a href="#services">Monthly Reporting</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Packages</h4>
              <ul>
                <li><a href="#packages">Pilot — from £497</a></li>
                <li><a href="#packages">Growth — from £997</a></li>
                <li><a href="#packages">Dominator — from £1,797</a></li>
                <li><a href="#packages">Emma Add-on</a></li>
                <li><a href="#contact">Free Audit</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#proof">Proof</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
                <li><a href="mailto:hello@gassafebot.co.uk">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-legal">
              © 2026 GasSafeBot.co.uk. All rights reserved.
            </div>
            <div className="footer-disclaimer">
              GasSafeBot is an independent marketing and software service for heating and gas businesses. We are not affiliated with, endorsed by, or operated by the Gas Safe Register. Gas Safe® is a registered trademark of the Gas Safe Register. Any ranking timelines referenced are illustrative planning estimates based on typical local SEO progressions and depend on competition level, website condition, service area, and Google Business Profile strength. Individual results vary.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
