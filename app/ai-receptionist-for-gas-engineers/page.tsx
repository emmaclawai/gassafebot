import Link from 'next/link'

export const metadata = {
  title: 'AI Receptionist for Gas Engineers | Never Miss a Call Again | GasSafeBot',
  description: 'Emma is an AI receptionist built for gas engineers. She answers every call 24/7, qualifies the job, captures details, and sends you an SMS. Never miss a booking.',
  alternates: { canonical: 'https://www.gassafebot.co.uk/ai-receptionist-for-gas-engineers/' },
  openGraph: {
    title: 'AI Receptionist for Gas Engineers — Meet Emma | GasSafeBot',
    description: 'Emma answers every inbound call for your gas engineering business. 24/7, never engaged, never off sick. Hear how she handles real calls.',
    url: 'https://www.gassafebot.co.uk/ai-receptionist-for-gas-engineers/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Receptionist for Gas Engineers',
  provider: { '@type': 'ProfessionalService', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  description: 'Emma is an AI voice receptionist that answers inbound calls for gas engineers 24/7. She qualifies callers, captures job details, and sends SMS summaries within 30 seconds.',
  areaServed: 'GB',
  serviceType: 'AI Receptionist Service',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'AI Receptionist for Gas Engineers', item: 'https://www.gassafebot.co.uk/ai-receptionist-for-gas-engineers/' },
  ],
}

export default function AIReceptionistForGasEngineers() {
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
          <span style={{ color: '#FF6B00' }}>AI Receptionist for Gas Engineers</span>
        </div>

        {/* Hero */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
          <p style={{ color: '#FF6B00', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Meet Emma — AI Voice Receptionist
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Every Call Answered.<br />
            <span style={{ color: '#FF6B00' }}>Every Job Captured. 24/7.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '680px' }}>
            Emma is an AI receptionist built specifically for gas engineers. While you're fitting a boiler, she's answering your calls, qualifying the job, and sending you the details by SMS — within 30 seconds of hanging up.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/emma-demo" style={{ background: '#FF6B00', color: '#fff', padding: '0.85rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700 }}>
              Hear Emma Answer a Call →
            </Link>
            <Link href="/#contact" style={{ border: '1px solid #30363d', color: '#e6edf3', padding: '0.85rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600 }}>
              Add Emma to My Business
            </Link>
          </div>
        </section>

        {/* The missed call problem */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem' }}>How Much Is a Missed Call Worth?</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              A boiler installation is worth £2,000–£4,000. An annual service contract is worth £80–£150/year per customer. A landlord CP12 contract can be worth £500–£2,000/year depending on the portfolio.
            </p>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
              When you miss a call, the customer doesn't wait. They call the next engineer in Google. You lose the job, and if they were looking for a long-term engineer — you lose every repeat job too.
            </p>
            <div style={{ background: '#0d1117', border: '1px solid #FF6B00', borderRadius: '8px', padding: '1.5rem' }}>
              <p style={{ color: '#FF6B00', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>The numbers:</p>
              <p style={{ color: '#e6edf3', lineHeight: 1.7, margin: 0 }}>
                If you miss 3 calls per week, and 1 in 3 would have converted, and the average job value is £300 — that's £300/week, £1,300/month, <strong>£15,600/year</strong> walking out the door unanswered.
              </p>
            </div>
          </div>
        </section>

        {/* What Emma does */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '2rem' }}>What Emma Does on Every Call</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { n: '01', title: 'Answers immediately — no hold music, no voicemail', body: 'Emma picks up within 2 rings. She introduces herself as your receptionist, takes the customer\'s name, and asks what they need. Callers don\'t know they\'re speaking to AI unless you tell them.' },
              { n: '02', title: 'Identifies caller type', body: 'Is this a homeowner, a tenant, or a landlord? The answer changes what you need to know about the job. Emma captures it before you call back.' },
              { n: '03', title: 'Flags urgency', body: 'Gas leak, no heating, no hot water, or routine service? Emma sorts them into priority bands so you know what to call back first. Gas leak calls trigger an immediate SMS to your mobile.' },
              { n: '04', title: 'Captures job details', body: 'Address, postcode, boiler make and model (where known), what the problem is, and when they\'re available. Everything you need before you return the call.' },
              { n: '05', title: 'SMS job summary within 30 seconds', body: 'The moment the call ends, you get a text with the full job summary. Name, number, postcode, issue, and urgency. You can triage your callback list from the tools without stopping work.' },
              { n: '06', title: 'Books within your hours and coverage area only', body: 'Tell Emma your working postcodes and hours. She won\'t promise jobs you can\'t reach or times you\'re not available. No awkward conversations with customers you have to let down.' },
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

        {/* Emma vs traditional options */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '2rem' }}>Emma vs. The Alternatives</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #30363d' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: '#8b949e', fontWeight: 600 }}>Option</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: '#8b949e', fontWeight: 600 }}>Cost</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: '#8b949e', fontWeight: 600 }}>24/7?</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: '#8b949e', fontWeight: 600 }}>Qualifies callers?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { opt: 'Voicemail', cost: 'Free', allday: '✓', qualifies: '✗ — customers hang up' },
                    { opt: 'Answering service', cost: '£200–500/mo', allday: 'Depends', qualifies: '✗ — just takes messages' },
                    { opt: 'Part-time receptionist', cost: '£800–1,200/mo', allday: '✗', qualifies: 'Sometimes' },
                    { opt: 'Emma (GasSafeBot)', cost: '£197/mo', allday: '✓ Always', qualifies: '✓ Full job details', highlight: true },
                  ].map(row => (
                    <tr key={row.opt} style={{ borderBottom: '1px solid #21262d', background: row.highlight ? '#1a2332' : 'transparent' }}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: row.highlight ? 700 : 400, color: row.highlight ? '#FF6B00' : '#e6edf3' }}>{row.opt}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#8b949e' }}>{row.cost}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#8b949e' }}>{row.allday}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#8b949e' }}>{row.qualifies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem' }}>Emma Pricing</h2>
          <p style={{ color: '#8b949e', marginBottom: '2rem' }}>Emma is an add-on to any GasSafeBot package.</p>
          <div style={{ background: '#161b22', border: '1px solid #FF6B00', borderRadius: '8px', padding: '2rem', maxWidth: '420px' }}>
            <p style={{ color: '#FF6B00', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Emma — AI Receptionist</p>
            <p style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem' }}>£297</p>
            <p style={{ color: '#8b949e', marginBottom: '1.5rem' }}>then £197/month</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.6rem' }}>
              {[
                'Answers every inbound call 24/7',
                'Identifies caller type (homeowner / tenant / landlord)',
                'Flags gas leak / no heating urgency',
                'SMS job summary within 30 seconds',
                'Works only in your hours & postcodes',
                'Transfers emergencies to your mobile',
                'Monthly call log report',
              ].map(f => (
                <li key={f} style={{ color: '#e6edf3', fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: '#FF6B00' }}>✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', padding: '3rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem' }}>Hear Emma Before You Decide</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
              Listen to call transcripts showing exactly how Emma handles a boiler emergency, a routine service request, and a landlord CP12 enquiry. See it before you buy it.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/emma-demo" style={{ background: '#FF6B00', color: '#fff', padding: '0.85rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700 }}>
                Hear Emma in Action →
              </Link>
              <Link href="/#contact" style={{ border: '1px solid #30363d', color: '#e6edf3', padding: '0.85rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600 }}>
                Add Emma to My Package
              </Link>
            </div>
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
