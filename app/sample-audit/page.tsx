import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sample Gas Engineer SEO Audit | GasSafeBot',
  description: 'See exactly what a GasSafeBot SEO audit looks like before you commit. Real audit structure, real findings, real ranking recommendations for a gas engineer.',
}

const auditSections = [
  {
    score: 23, max: 100, grade: 'F', gradeColor: '#ef4444',
    title: 'Current Google Visibility',
    findings: [
      { type: 'fail', text: 'Not ranking in top 50 for "gas engineer [town]"' },
      { type: 'fail', text: 'Google Business Profile not claimed or incomplete' },
      { type: 'fail', text: 'No map pack presence for any local search terms' },
      { type: 'fail', text: 'Zero organic traffic from gas engineer searches' },
      { type: 'warn', text: 'Checkatrade profile exists but no website link' },
    ],
  },
  {
    score: 31, max: 100, grade: 'D', gradeColor: '#f97316',
    title: 'Website Technical Health',
    findings: [
      { type: 'fail', text: 'Page load time 6.2s on mobile — Google threshold is 2.5s' },
      { type: 'fail', text: 'No SSL certificate (showing as "Not Secure" in browsers)' },
      { type: 'fail', text: 'Not mobile-responsive — layout breaks on phones' },
      { type: 'fail', text: 'No schema markup — Google cannot understand your business type' },
      { type: 'warn', text: 'Meta descriptions missing on 4 of 5 pages' },
      { type: 'pass', text: 'Domain registered and resolving correctly' },
    ],
  },
  {
    score: 12, max: 100, grade: 'F', gradeColor: '#ef4444',
    title: 'On-Page SEO',
    findings: [
      { type: 'fail', text: 'Homepage title: "Welcome to John\'s Heating" — no keywords' },
      { type: 'fail', text: 'H1 tag missing on homepage' },
      { type: 'fail', text: 'No location mentioned anywhere in page copy' },
      { type: 'fail', text: 'No area landing pages — one generic page for all areas' },
      { type: 'fail', text: 'Images have no alt text — invisible to Google' },
      { type: 'warn', text: 'Contact page exists but no address or postcode listed' },
    ],
  },
  {
    score: 8, max: 100, grade: 'F', gradeColor: '#ef4444',
    title: 'Local SEO & Citations',
    findings: [
      { type: 'fail', text: 'Google Business Profile unclaimed — competitor in map pack instead' },
      { type: 'fail', text: 'No Yell.com listing' },
      { type: 'fail', text: 'No TrustATrader listing' },
      { type: 'fail', text: 'Business name, address, phone inconsistent across directories' },
      { type: 'fail', text: 'Zero backlinks pointing to website' },
      { type: 'warn', text: 'Listed on Checkatrade but website URL not included' },
    ],
  },
  {
    score: 45, max: 100, grade: 'D', gradeColor: '#f97316',
    title: 'Conversion Optimisation',
    findings: [
      { type: 'warn', text: 'Phone number present but not click-to-call on mobile' },
      { type: 'fail', text: 'No contact form — customers must copy email address manually' },
      { type: 'fail', text: 'No call to action above the fold' },
      { type: 'pass', text: 'Gas Safe registration number displayed' },
      { type: 'pass', text: 'Services list present' },
      { type: 'warn', text: 'No reviews or trust signals visible' },
    ],
  },
]

const competitors = [
  { name: 'SW Heating Solutions', rank: 1, reviews: 47, gbp: '✅', website: 'Strong', score: 78 },
  { name: 'Swindon Boiler Co', rank: 2, reviews: 23, gbp: '✅', website: 'Good', score: 65 },
  { name: 'JR Heat Ltd', rank: 3, reviews: 78, gbp: '✅', website: 'Weak copy', score: 61 },
  { name: 'Your Business', rank: '50+', reviews: 6, gbp: '❌', website: 'Needs work', score: 23 },
]

const keywords = [
  { term: 'gas engineer Swindon', volume: '480/mo', difficulty: 'Medium', yourRank: '50+', opportunity: 'High' },
  { term: 'boiler service Swindon', volume: '320/mo', difficulty: 'Low', yourRank: '50+', opportunity: 'High' },
  { term: 'Gas Safe engineer SN1', volume: '90/mo', difficulty: 'Very Low', yourRank: 'Not ranked', opportunity: 'Very High' },
  { term: 'emergency gas engineer Swindon', volume: '210/mo', difficulty: 'Low', yourRank: '50+', opportunity: 'High' },
  { term: 'landlord gas certificate Swindon', volume: '140/mo', difficulty: 'Very Low', yourRank: 'Not ranked', opportunity: 'Very High' },
  { term: 'boiler installation SN2', volume: '70/mo', difficulty: 'Very Low', yourRank: 'Not ranked', opportunity: 'Very High' },
]

export default function SampleAuditPage() {
  const overallScore = Math.round(auditSections.reduce((sum, s) => sum + s.score, 0) / auditSections.length)
  return (
    <main>
      <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', fontSize: '0.85rem', opacity: 0.5 }}>
        <div className="container">
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> › <span>Sample Audit</span>
        </div>
      </nav>

      <section style={{ padding: '4rem 0 3rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,107,0,0.12)', color: 'var(--fire)', border: '1px solid rgba(255,107,0,0.3)', padding: '0.4rem 1.2rem', borderRadius: '2rem', fontSize: '0.82rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>📊 Sample Audit Report</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}>This Is What Your Free Audit Looks Like</h1>
          <p style={{ maxWidth: 620, margin: '0 auto 2rem', opacity: 0.7, lineHeight: 1.7, fontSize: '1.05rem' }}>Below is a real audit structure — the kind we produce for every gas engineer who requests one. Business name changed. Everything else is real data from a Swindon engineer we analysed.</p>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1rem 2rem', display: 'inline-block' }}>
            <span style={{ opacity: 0.5, fontSize: '0.85rem' }}>Audited business: </span><strong>John Smith Heating Services · Swindon SN1</strong>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0', background: 'rgba(239,68,68,0.04)', borderBottom: '1px solid rgba(239,68,68,0.12)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ opacity: 0.5, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>Overall SEO Health Score</p>
          <div style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1, color: '#ef4444' }}>{overallScore}<span style={{ fontSize: '2rem', opacity: 0.4 }}>/100</span></div>
          <div style={{ marginTop: '1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, padding: '0.8rem 1.5rem', display: 'inline-block', color: '#ef4444', fontWeight: 600, fontSize: '0.9rem' }}>⚠️ Significant improvements needed to compete in local search</div>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Detailed Findings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {auditSections.map((section) => (
              <div key={section.title} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ padding: '1.2rem 1.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1rem', margin: 0 }}>{section.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', opacity: 0.5 }}>{section.score}/{section.max}</span>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: section.gradeColor + '20', border: `2px solid ${section.gradeColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 900, color: section.gradeColor }}>{section.grade}</div>
                  </div>
                </div>
                <div style={{ padding: '1.2rem 1.8rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {section.findings.map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.7rem', fontSize: '0.9rem' }}>
                      <span style={{ flexShrink: 0 }}>{f.type === 'fail' ? '❌' : f.type === 'warn' ? '⚠️' : '✅'}</span>
                      <span style={{ opacity: 0.8 }}>{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.8rem' }}>Competitor Analysis — Swindon</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '2rem', fontSize: '0.95rem' }}>These are the engineers currently taking the work that should be going to you.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: 560 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {['Business', 'Rank', 'Reviews', 'GBP', 'Website', 'Score'].map(h => (
                    <th key={h} style={{ padding: '0.7rem 1rem', textAlign: 'left', opacity: 0.45, fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr key={c.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: c.name === 'Your Business' ? 'rgba(239,68,68,0.05)' : 'transparent' }}>
                    <td style={{ padding: '0.9rem 1rem', fontWeight: c.name === 'Your Business' ? 700 : 400, color: c.name === 'Your Business' ? '#ef4444' : 'inherit' }}>{c.name}</td>
                    <td style={{ padding: '0.9rem 1rem' }}>#{c.rank}</td>
                    <td style={{ padding: '0.9rem 1rem' }}>{c.reviews}</td>
                    <td style={{ padding: '0.9rem 1rem' }}>{c.gbp}</td>
                    <td style={{ padding: '0.9rem 1rem', opacity: 0.7 }}>{c.website}</td>
                    <td style={{ padding: '0.9rem 1rem' }}>
                      <span style={{ background: c.score > 60 ? 'rgba(34,197,94,0.15)' : c.score > 40 ? 'rgba(249,115,22,0.15)' : 'rgba(239,68,68,0.15)', color: c.score > 60 ? '#22c55e' : c.score > 40 ? '#f97316' : '#ef4444', padding: '0.2rem 0.5rem', borderRadius: 4, fontWeight: 700, fontSize: '0.82rem' }}>{c.score}/100</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.8rem' }}>Keyword Opportunities</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '2rem', fontSize: '0.95rem' }}>Searches your customers are making right now — that you&apos;re invisible for.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {['Keyword', 'Monthly Searches', 'Competition', 'Your Rank', 'Opportunity'].map(h => (
                    <th key={h} style={{ padding: '0.7rem 1rem', textAlign: 'left', opacity: 0.45, fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {keywords.map((kw) => (
                  <tr key={kw.term} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.9rem 1rem', fontWeight: 500 }}>🔍 {kw.term}</td>
                    <td style={{ padding: '0.9rem 1rem', opacity: 0.7 }}>{kw.volume}</td>
                    <td style={{ padding: '0.9rem 1rem' }}>
                      <span style={{ background: kw.difficulty === 'Very Low' ? 'rgba(34,197,94,0.15)' : kw.difficulty === 'Low' ? 'rgba(34,197,94,0.1)' : 'rgba(249,115,22,0.15)', color: kw.difficulty === 'Very Low' ? '#22c55e' : kw.difficulty === 'Low' ? '#4ade80' : '#f97316', padding: '0.2rem 0.5rem', borderRadius: 4, fontSize: '0.8rem', fontWeight: 600 }}>{kw.difficulty}</span>
                    </td>
                    <td style={{ padding: '0.9rem 1rem', opacity: 0.5 }}>{kw.yourRank}</td>
                    <td style={{ padding: '0.9rem 1rem', color: kw.opportunity.includes('Very') ? '#22c55e' : '#f97316', fontWeight: 600, fontSize: '0.88rem' }}>⬆ {kw.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'rgba(255,107,0,0.04)', borderTop: '1px solid rgba(255,107,0,0.12)' }}>
        <div className="container" style={{ maxWidth: 740, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Recommendations</h2>
          {[
            { n: '1', title: 'Claim and complete Google Business Profile immediately', body: 'The single highest-impact action. A complete GBP with photos and services can get you into the map pack within 2–4 weeks.' },
            { n: '2', title: 'Rebuild the website with proper SEO structure', body: 'Current site cannot rank. A new site targeting Swindon postcode searches (SN1, SN2, SN3) will start gaining rankings within 6–10 weeks.' },
            { n: '3', title: 'Target postcode-level keywords first', body: 'Terms like "gas engineer SN1" and "boiler service SN3" have very low competition and can rank quickly. These are your fast wins.' },
            { n: '4', title: 'Build 20+ directory citations', body: 'Yell, TrustATrader, and 18 other directories need consistent NAP data to build local authority.' },
            { n: '5', title: 'Add Emma to capture calls you\'re currently missing', body: 'Based on estimated traffic, this business is losing approximately 3–5 enquiries per week to unanswered calls.' },
          ].map((r) => (
            <div key={r.n} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '1.2rem 1.5rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,107,0,0.2)', border: '1px solid rgba(255,107,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', color: 'var(--fire)', flexShrink: 0 }}>{r.n}</div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.95rem' }}>{r.title}</strong>
                <span style={{ opacity: 0.6, fontSize: '0.88rem', lineHeight: 1.6 }}>{r.body}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Want This Done For Your Business?</h2>
          <p style={{ maxWidth: 500, margin: '0 auto 2.5rem', opacity: 0.7, lineHeight: 1.7 }}>Fill in the form and we&apos;ll produce your real audit — your actual rankings, your real competitors, your specific opportunities — within 1 business day.</p>
          <Link href="/#audit" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.05rem' }}>Get My Free Audit →</Link>
          <p style={{ marginTop: '1.2rem', fontSize: '0.85rem', opacity: 0.4 }}>No cost. No obligation. No sales call unless you ask for one.</p>
        </div>
      </section>
    </main>
  )
}
