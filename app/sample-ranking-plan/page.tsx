import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sample Gas Engineer Ranking Plan | GasSafeBot',
  description: 'See exactly what a GasSafeBot ranking plan looks like — real keywords, real postcode targets, real timelines before you spend anything.',
}

const phases = [
  {
    phase: 'Phase 1', time: 'Days 1–10', title: 'Foundation',
    tasks: [
      { done: true, task: 'Google Business Profile claimed and fully completed' },
      { done: true, task: '5-page website built and live at johnsmithheating.co.uk' },
      { done: true, task: 'Schema markup added (LocalBusiness, Service types)' },
      { done: true, task: 'All page titles and meta descriptions written for target keywords' },
      { done: true, task: 'Google Search Console connected and sitemap submitted' },
      { done: true, task: 'Emma AI receptionist configured and tested' },
    ],
  },
  {
    phase: 'Phase 2', time: 'Days 10–30', title: 'Citation Building',
    tasks: [
      { done: true, task: 'Yell.com listing created with consistent NAP' },
      { done: true, task: 'TrustATrader listing live' },
      { done: true, task: 'Bing Places profile completed' },
      { done: true, task: 'Apple Maps listing created' },
      { done: true, task: '15 additional UK directories submitted' },
      { done: false, task: 'Gas Safe Register website listing requested' },
    ],
  },
  {
    phase: 'Phase 3', time: 'Days 30–60', title: 'Content & Rankings',
    tasks: [
      { done: false, task: 'Area page: Gas engineer SN1 (Old Town)' },
      { done: false, task: 'Area page: Boiler service SN2 (Rodbourne, Pinehurst)' },
      { done: false, task: 'Area page: Gas engineer SN3 (Stratton, Liden, Walcot)' },
      { done: false, task: 'Area page: Landlord CP12 Swindon — dedicated page' },
      { done: false, task: 'Area page: Emergency gas engineer Swindon' },
      { done: false, task: 'GBP posts: 2 per week (services, tips, reviews)' },
    ],
  },
  {
    phase: 'Phase 4', time: 'Days 60–90', title: 'Ranking & Growth',
    tasks: [
      { done: false, task: 'Review generation campaign — target 20 new Google reviews' },
      { done: false, task: 'Competitor gap analysis — new keyword opportunities identified' },
      { done: false, task: 'Area page: Haydon Wick SN25' },
      { done: false, task: 'Area page: Wroughton SN4' },
      { done: false, task: 'Monthly ranking report delivered' },
      { done: false, task: 'Strategy review — expand to Wiltshire villages?' },
    ],
  },
]

const targetKeywords = [
  { keyword: 'gas engineer Swindon', target: 'Top 5', timeframe: '60–90 days', pages: ['Homepage', '/swindon'] },
  { keyword: 'boiler service Swindon', target: 'Top 5', timeframe: '60–90 days', pages: ['Homepage', '/swindon'] },
  { keyword: 'gas engineer SN1', target: 'Top 3', timeframe: '30–45 days', pages: ['/swindon/sn1'] },
  { keyword: 'gas engineer SN2', target: 'Top 3', timeframe: '30–45 days', pages: ['/swindon/sn2'] },
  { keyword: 'gas engineer SN3', target: 'Top 3', timeframe: '30–45 days', pages: ['/swindon/sn3'] },
  { keyword: 'emergency gas engineer Swindon', target: 'Top 5', timeframe: '45–60 days', pages: ['/emergency'] },
  { keyword: 'landlord gas certificate Swindon', target: 'Top 3', timeframe: '30–45 days', pages: ['/landlord-cp12'] },
  { keyword: 'boiler installation Swindon', target: 'Top 5', timeframe: '60–90 days', pages: ['/boiler-installation'] },
  { keyword: 'Gas Safe engineer Old Town Swindon', target: 'Top 3', timeframe: '30–45 days', pages: ['/swindon/sn1'] },
  { keyword: 'annual boiler service SN5', target: 'Top 3', timeframe: '30–45 days', pages: ['/swindon/sn5'] },
]

export default function SampleRankingPlanPage() {
  return (
    <main>
      <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', fontSize: '0.85rem', opacity: 0.5 }}>
        <div className="container">
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> › <span>Sample Ranking Plan</span>
        </div>
      </nav>

      <section style={{ padding: '4rem 0 3rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,107,0,0.12)', color: 'var(--fire)', border: '1px solid rgba(255,107,0,0.3)', padding: '0.4rem 1.2rem', borderRadius: '2rem', fontSize: '0.82rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>🗺️ Sample Ranking Plan</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}>The Exact Roadmap We Build for You</h1>
          <p style={{ maxWidth: 620, margin: '0 auto 2rem', opacity: 0.7, lineHeight: 1.7, fontSize: '1.05rem' }}>Every client gets a bespoke ranking plan before we start. Here&apos;s an example for a Swindon gas engineer — showing exactly what gets built, when, and what keywords we&apos;re targeting.</p>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1rem 2rem', display: 'inline-block' }}>
            <span style={{ opacity: 0.5, fontSize: '0.85rem' }}>Plan for: </span><strong>John Smith Heating · Swindon SN1 · Growth Package</strong>
          </div>
        </div>
      </section>

      {/* Target keywords table */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.8rem' }}>Target Keywords & Timelines</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '2rem', fontSize: '0.95rem' }}>Every keyword has a dedicated page built to rank for it. Nothing is left to chance.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {['Keyword Target', 'Goal', 'Expected Timeline', 'Pages Targeting It'].map(h => (
                    <th key={h} style={{ padding: '0.7rem 1rem', textAlign: 'left', opacity: 0.45, fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {targetKeywords.map((kw) => (
                  <tr key={kw.keyword} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.9rem 1rem', fontWeight: 500 }}>🔍 {kw.keyword}</td>
                    <td style={{ padding: '0.9rem 1rem' }}>
                      <span style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '0.2rem 0.5rem', borderRadius: 4, fontWeight: 600, fontSize: '0.82rem' }}>{kw.target}</span>
                    </td>
                    <td style={{ padding: '0.9rem 1rem', opacity: 0.65, fontSize: '0.88rem' }}>{kw.timeframe}</td>
                    <td style={{ padding: '0.9rem 1rem', opacity: 0.6, fontSize: '0.85rem' }}>{kw.pages.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.4, textAlign: 'center' }}>* Timelines are planning estimates based on competition level. New domains typically see first rankings within 30–45 days for low-competition postcode terms.</p>
        </div>
      </section>

      {/* Phase plan */}
      <section style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.8rem' }}>90-Day Action Plan</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '3rem', fontSize: '0.95rem' }}>Every task. Every phase. You see exactly what we&apos;re doing and when.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {phases.map((p, pi) => (
              <div key={p.phase} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', background: pi === 0 ? 'rgba(255,107,0,0.08)' : 'transparent' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--fire)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.phase}</span>
                    <span style={{ fontSize: '0.78rem', opacity: 0.5, background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: 4 }}>{p.time}</span>
                  </div>
                  <div style={{ fontWeight: 700, marginTop: '0.3rem' }}>{p.title}</div>
                </div>
                <div style={{ padding: '1.2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {p.tasks.map((t, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.7rem', fontSize: '0.88rem', alignItems: 'flex-start' }}>
                      <span style={{ flexShrink: 0, color: t.done ? '#22c55e' : 'rgba(255,255,255,0.25)', fontSize: '0.9rem' }}>{t.done ? '✓' : '○'}</span>
                      <span style={{ opacity: t.done ? 0.85 : 0.5, lineHeight: 1.5 }}>{t.task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly report preview */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 740, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '0.8rem' }}>What You Get Every Month</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '2.5rem', fontSize: '0.95rem' }}>Every client gets a monthly report showing exactly where their money is going.</p>
          {[
            { icon: '📊', title: 'Keyword ranking report', body: 'Every keyword we\'re targeting, where it ranks this month vs last month, and the trend direction.' },
            { icon: '📍', title: 'Google Business Profile stats', body: 'Views, clicks, calls, and direction requests from your GBP profile. You see exactly how many people your profile is reaching.' },
            { icon: '🔗', title: 'Citations built this month', body: 'Every new directory listing added, with links. Running total of your citation count.' },
            { icon: '📞', title: 'Emma call report', body: 'How many calls Emma answered, how many jobs were booked, and how many you would have missed.' },
            { icon: '📋', title: 'Next month\'s plan', body: 'What we\'re doing next month, what keywords we\'re targeting, and what content we\'re creating.' },
          ].map((item) => (
            <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1.2rem 1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, marginBottom: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.95rem' }}>{item.title}</strong>
                <span style={{ opacity: 0.6, fontSize: '0.88rem', lineHeight: 1.6 }}>{item.body}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Ready for Your Own Ranking Plan?</h2>
          <p style={{ maxWidth: 500, margin: '0 auto 2.5rem', opacity: 0.7, lineHeight: 1.7 }}>Fill in the audit form and we&apos;ll build your personalised ranking plan — your specific keywords, your town, your competitors — within 1 business day.</p>
          <Link href="/#audit" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.05rem' }}>Get My Free Ranking Plan →</Link>
          <p style={{ marginTop: '1.2rem', fontSize: '0.85rem', opacity: 0.4 }}>No cost. No obligation. No sales call unless you ask for one.</p>
        </div>
      </section>
    </main>
  )
}
