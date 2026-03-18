import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emma AI Receptionist Demo | Never Miss a Gas Engineer Call | GasSafeBot',
  description: 'Hear Emma answer a real gas engineer call. AI receptionist that captures caller details, qualifies urgency, and books jobs 24/7 while you\'re on the tools.',
}

const emmaFeatures = [
  { icon: '🕐', title: 'Answers in under 3 rings', body: 'Every call, every time. No voicemail. No missed jobs.' },
  { icon: '🏠', title: 'Identifies caller type instantly', body: 'Tenant, homeowner, or landlord — Emma asks and logs it every time.' },
  { icon: '🚨', title: 'Flags emergencies immediately', body: 'Gas leak, no heating, no hot water — Emma spots urgency and escalates to your mobile.' },
  { icon: '📲', title: 'SMS job summary in 30 seconds', body: 'Name, number, address, job type, urgency level — all in a text to your phone.' },
  { icon: '📅', title: 'Books within your actual hours', body: 'Emma knows your working hours and postcodes. She only books jobs you can actually do.' },
  { icon: '🧠', title: 'Remembers repeat callers', body: 'Mrs Jones calls back — Emma recognises her and treats her like a regular.' },
  { icon: '📋', title: 'Logs every missed call', body: 'Even if someone hangs up before Emma answers, that opportunity is captured.' },
  { icon: '🔄', title: 'Transfers VIPs and emergencies', body: 'Gas leaks and your best customers can be put straight through to your mobile.' },
]

const callScenarios = [
  {
    type: 'Emergency',
    typeColor: '#ef4444',
    caller: 'Homeowner in SN3',
    scenario: 'No heating — called at 6:45pm',
    transcript: [
      { speaker: 'Emma', text: 'Good evening, John Smith Heating. I\'m Emma, John\'s assistant. How can I help?' },
      { speaker: 'Caller', text: 'Hi, our boiler has just stopped and it\'s freezing. We\'ve got two young kids.' },
      { speaker: 'Emma', text: 'I\'m sorry to hear that — I\'ll get this to John straight away. Can I take your name and address?' },
      { speaker: 'Caller', text: 'It\'s Sarah, 14 Covingham Drive, SN3 5HJ.' },
      { speaker: 'Emma', text: 'Got that Sarah. Is there any smell of gas, or just no heating?' },
      { speaker: 'Caller', text: 'No gas smell, just no heating and no hot water.' },
      { speaker: 'Emma', text: 'Understood. Sending John an urgent alert now — he\'ll call you back within 20 minutes.' },
    ],
    outcome: '📲 SMS sent to engineer in 8 seconds. Engineer called back in 14 minutes. Job booked.',
  },
  {
    type: 'Landlord',
    typeColor: '#f97316',
    caller: 'Landlord with rental property',
    scenario: 'Annual CP12 certificate needed',
    transcript: [
      { speaker: 'Emma', text: 'Good morning, John Smith Heating. I\'m Emma. How can I help?' },
      { speaker: 'Caller', text: 'I need a gas safety certificate for a rental property in Swindon.' },
      { speaker: 'Emma', text: 'Of course — John covers the whole Swindon area. Annual renewal or new tenancy?' },
      { speaker: 'Caller', text: 'Annual. It\'s due end of the month.' },
      { speaker: 'Emma', text: 'No problem. Can I take the property address and your contact number?' },
      { speaker: 'Caller', text: '23 Rodbourne Road, SN2 2AH. I\'m Mike, 07700 900123.' },
      { speaker: 'Emma', text: 'John has availability Tuesday or Wednesday morning — which works better for your tenant?' },
    ],
    outcome: '📅 Job booked Tuesday 9am. CP12 appointment logged. Confirmation sent to landlord.',
  },
]

export default function EmmaDemoPage() {
  return (
    <main>
      <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', fontSize: '0.85rem', opacity: 0.5 }}>
        <div className="container">
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> › <span>Emma Demo</span>
        </div>
      </nav>

      <section style={{ padding: '4rem 0 3rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,107,0,0.12)', color: 'var(--fire)', border: '1px solid rgba(255,107,0,0.3)', padding: '0.4rem 1.2rem', borderRadius: '2rem', fontSize: '0.82rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>🎧 Emma AI Receptionist</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
            While You&apos;re Fitting a Boiler,<br /><span style={{ color: 'var(--fire)' }}>Emma Is Booking Your Next Job</span>
          </h1>
          <p style={{ maxWidth: 620, margin: '0 auto 2rem', opacity: 0.7, lineHeight: 1.7, fontSize: '1.05rem' }}>Emma answers every call 24/7, identifies the caller type, flags urgency, captures job details, and sends you an SMS — all before you&apos;ve finished the job you&apos;re on.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#audit" className="btn-primary">Add Emma to My Business →</Link>
            <a href="#how-it-works" className="btn-ghost">See How It Works</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0', background: 'rgba(255,107,0,0.04)', borderBottom: '1px solid rgba(255,107,0,0.12)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ opacity: 0.5, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>The maths every gas engineer should see</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', maxWidth: 760, margin: '0 auto' }}>
            {[
              { value: '5', label: 'Missed calls per week on average' },
              { value: '£250', label: 'Average job value' },
              { value: '£1,250', label: 'Lost revenue per week' },
              { value: '£65k', label: 'Lost revenue per year to voicemail' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--fire)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.55, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', opacity: 0.4, fontSize: '0.82rem' }}>Emma costs £197/month. The first missed job she captures pays for 6 months.</p>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }} id="how-it-works">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.8rem' }}>Emma in Action</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '2.5rem', fontSize: '0.95rem' }}>How Emma handles the two most common gas engineer enquiry types.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {callScenarios.map((scenario) => (
              <div key={scenario.type} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ background: scenario.typeColor + '22', color: scenario.typeColor, padding: '0.2rem 0.6rem', borderRadius: 4, fontSize: '0.78rem', fontWeight: 700 }}>{scenario.type}</span>
                    <div style={{ fontSize: '0.83rem', opacity: 0.55, marginTop: '0.3rem' }}>{scenario.caller}</div>
                  </div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.4, textAlign: 'right', maxWidth: 120 }}>{scenario.scenario}</div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {scenario.transcript.map((line, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, flexShrink: 0, marginTop: '0.2rem', color: line.speaker === 'Emma' ? 'var(--fire)' : 'rgba(255,255,255,0.4)', minWidth: 48 }}>{line.speaker}:</span>
                      <span style={{ fontSize: '0.87rem', lineHeight: 1.55, opacity: line.speaker === 'Emma' ? 0.88 : 0.6 }}>&ldquo;{line.text}&rdquo;</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '1rem 1.5rem', background: 'rgba(34,197,94,0.06)', borderTop: '1px solid rgba(34,197,94,0.15)', fontSize: '0.85rem', color: '#4ade80', lineHeight: 1.5 }}>
                  {scenario.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.8rem' }}>Everything Emma Does</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '2.5rem', fontSize: '0.95rem' }}>Every feature below is included in the £197/month add-on.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {emmaFeatures.map((f) => (
              <div key={f.title} style={{ display: 'flex', gap: '1rem', padding: '1.2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem', marginBottom: '0.3rem' }}>{f.title}</strong>
                  <span style={{ fontSize: '0.85rem', opacity: 0.6, lineHeight: 1.5 }}>{f.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 580, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Emma Pricing</h2>
          <div style={{ background: 'rgba(255,107,0,0.05)', border: '1px solid rgba(255,107,0,0.3)', borderRadius: 14, padding: '2.5rem' }}>
            <div style={{ color: 'var(--fire)', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.82rem', letterSpacing: '0.06em' }}>Emma Add-on — Works With Any Package</div>
            <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>£297 <span style={{ fontSize: '1rem', fontWeight: 400, opacity: 0.4 }}>setup</span></div>
            <div style={{ opacity: 0.45, marginBottom: '2rem' }}>then £197/month</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
              {[
                'Answers every call 24/7',
                'Identifies caller type and urgency',
                'SMS job summary within 30 seconds',
                'Books within your hours and postcodes',
                'Transfers emergencies to your mobile',
                'Logs all missed call opportunities',
                'Works standalone — no website needed',
              ].map(f => (
                <li key={f} style={{ display: 'flex', gap: '0.7rem' }}><span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span>{f}</li>
              ))}
            </ul>
            <Link href="/#audit" className="btn-primary" style={{ display: 'block', textAlign: 'center', padding: '1rem' }}>Add Emma to My Business →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Stop Losing Jobs to Voicemail</h2>
          <p style={{ maxWidth: 480, margin: '0 auto 2.5rem', opacity: 0.7, lineHeight: 1.7 }}>Fill in the free audit form and tell us you want Emma. We&apos;ll have her answering your calls within a week.</p>
          <Link href="/#audit" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.05rem' }}>Get Emma Answering My Calls →</Link>
          <p style={{ marginTop: '1.2rem', fontSize: '0.85rem', opacity: 0.4 }}>No contract. Cancel anytime.</p>
        </div>
      </section>
    </main>
  )
}
