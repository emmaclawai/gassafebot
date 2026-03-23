import Link from 'next/link'

export const metadata = {
  title: 'CORGI Registered Gas Engineer — What It Means Now | GasSafeBot',
  description: 'CORGI was replaced by Gas Safe Register in 2009. But 58% of UK homeowners still search for "CORGI registered gas engineer". Here\'s what to look for instead.',
  alternates: { canonical: 'https://www.gassafebot.co.uk/corgi-registered-gas-engineer-alternative/' },
  openGraph: {
    title: 'CORGI Registered Gas Engineer — What It Means in 2024 | GasSafeBot',
    description: 'CORGI no longer registers gas engineers in the UK. Gas Safe Register replaced it in 2009. Here\'s how to find a qualified, legally registered engineer.',
    url: 'https://www.gassafebot.co.uk/corgi-registered-gas-engineer-alternative/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is CORGI still the registration body for gas engineers in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. CORGI (Council for Registered Gas Installers) was replaced by the Gas Safe Register on 1 April 2009. All legally registered gas engineers in the UK must now be on the Gas Safe Register. CORGI no longer operates as a gas safety registration body in Great Britain.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I check if a gas engineer is Gas Safe registered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit gasregister.co.uk and use the "Check a gas engineer" tool. Enter the engineer\'s licence card number or business name. Every registered engineer carries a Gas Safe ID card showing their name, photo, licence number, and the appliances they\'re qualified to work on.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Gas Safe registered mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gas Safe registered means the engineer has passed the required Gas Safe assessments and is legally approved to work on gas appliances in UK homes and properties. It is a legal requirement — not a voluntary accreditation. All gas work on boilers, cookers, and gas fires must be carried out by a Gas Safe registered engineer.',
      },
    },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'CORGI Registered Gas Engineer', item: 'https://www.gassafebot.co.uk/corgi-registered-gas-engineer-alternative/' },
  ],
}

export default function CorgiRegisteredGasEngineer() {
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
          <span style={{ color: '#FF6B00' }}>CORGI Registered Gas Engineer</span>
        </div>

        {/* Hero */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
          <p style={{ color: '#FF6B00', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Gas Engineer Qualifications — UK Guide
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
            CORGI Registered Gas Engineer:<br />
            <span style={{ color: '#FF6B00' }}>What It Means Now (2025)</span>
          </h1>
          <div style={{ background: '#161b22', border: '1px solid #FF6B00', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Quick answer:</p>
            <p style={{ color: '#8b949e', lineHeight: 1.6, margin: 0 }}>
              CORGI stopped registering gas engineers in Great Britain on <strong style={{ color: '#e6edf3' }}>1 April 2009</strong>. It was replaced by the <strong style={{ color: '#e6edf3' }}>Gas Safe Register</strong>. Any engineer working on gas in UK homes today must be Gas Safe registered — not CORGI. If someone says they're "CORGI registered" for gas work, their card is over 15 years out of date.
            </p>
          </div>
        </section>

        {/* Main explanation */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem 3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>What Was CORGI?</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            CORGI — the Council for Registered Gas Installers — was the national watchdog for gas safety in the UK from 1991 to 2009. All gas engineers were required by law to be CORGI registered. The scheme covered boiler installation and servicing, gas fire fitting, central heating work, and all domestic and commercial gas appliances.
          </p>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
            In 2008, the Health and Safety Executive reviewed the scheme and decided to open the registration market to competition. CORGI lost its monopoly and the Gas Safe Register was launched as its replacement in April 2009.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Gas Safe Register: The Replacement Since 2009</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            The Gas Safe Register is now the official gas registration body for Great Britain, Northern Ireland, Isle of Man, and Guernsey. It is a legal requirement — not an optional accreditation. Under the Gas Safety (Installation and Use) Regulations 1998, any person who carries out gas work must be on the Gas Safe Register.
          </p>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
            Every Gas Safe registered engineer carries a photo ID card showing their name, registration number, and the specific gas appliances they are qualified to work on. You can check any engineer's registration at <strong style={{ color: '#e6edf3' }}>gasregister.co.uk</strong>.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Why Do People Still Search for "CORGI Registered"?</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
            CORGI ran for 18 years and became deeply embedded in the public consciousness as the mark of a qualified gas engineer. Older homeowners, landlords who have been managing properties for decades, and anyone who hasn't needed a gas engineer since before 2009 often still reach for the CORGI term. Research shows around 58% of UK homeowners still associate "CORGI" with qualified gas engineers, despite the registration scheme ending 15 years ago.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>How to Find a Qualified Gas Engineer Today</h2>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { step: '1', title: 'Check the Gas Safe Register', body: 'Visit gasregister.co.uk and use the "Check a gas engineer" tool. This is the definitive way to verify an engineer\'s qualification before letting them work on your gas appliances.' },
              { step: '2', title: 'Ask to see the ID card', body: 'Every Gas Safe engineer carries a photo ID card. The back lists the appliance categories they\'re licensed for. For boiler work, check they\'re qualified for the boiler type in your home.' },
              { step: '3', title: 'Check Google reviews', body: 'A good local engineer will have a Google Business Profile with reviews. Look for consistent mention of Gas Safe certificate, cleanliness, and turning up on time.' },
              { step: '4', title: 'Get a receipt and Gas Safe certificate', body: 'For any gas installation or major service, you should receive a Gas Safe certificate. Landlords are legally required to hold a current Gas Safety Record (CP12) for all rented properties.' },
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '1.25rem', background: '#161b22', border: '1px solid #21262d', borderRadius: '8px', padding: '1.25rem' }}>
                <span style={{ background: '#FF6B00', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>{item.step}</span>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ color: '#8b949e', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { q: 'Is CORGI still the registration body for gas engineers in the UK?', a: 'No. CORGI was replaced by the Gas Safe Register on 1 April 2009. All legally working gas engineers must now be Gas Safe registered.' },
              { q: 'Can I still trust an engineer who was CORGI registered?', a: 'CORGI registration lapsed in 2009. A qualified engineer will have Gas Safe registration. There\'s no way to verify a current CORGI card for gas work — the scheme no longer exists in Great Britain.' },
              { q: 'Do landlords need a CORGI or Gas Safe certificate for their properties?', a: 'Landlords need a Gas Safety Record (CP12) issued by a Gas Safe registered engineer. CORGI certificates are no longer valid. The CP12 must be renewed annually for all gas appliances in rented properties.' },
              { q: 'What\'s the penalty for using an unregistered gas engineer?', a: 'Using an unregistered engineer is illegal. The householder or landlord can face prosecution. The engineer can face an unlimited fine or imprisonment. Insurance may be invalidated. Always check the Gas Safe Register.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '8px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>{faq.q}</h3>
                <p style={{ color: '#8b949e', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* For engineers - CTA */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Are You a Gas Safe Registered Engineer?</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Many customers still searching for "CORGI registered" are looking for a reliable, qualified local engineer. If your website isn't capturing that traffic — and converting it — you're leaving work on the table.
            </p>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
              We build websites for Gas Safe engineers that rank on Google and turn visitors into enquiries. Our free audit shows you exactly how many searches your area generates and how to capture them.
            </p>
            <Link href="/#contact" style={{ background: '#FF6B00', color: '#fff', padding: '0.85rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>
              Get a Free Gas Engineer Website Audit →
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
