import Link from 'next/link'

export const metadata = {
  title: 'Gas Safety Statistics UK 2025 | Incidents, Fatalities & Engineer Data | GasSafeBot',
  description: 'Comprehensive UK gas safety statistics for 2025. Boiler-related incidents, CO poisoning data, Gas Safe Register figures, and what they mean for homeowners and landlords.',
  alternates: { canonical: 'https://www.gassafebot.co.uk/gas-safety-statistics-uk/' },
  openGraph: {
    title: 'UK Gas Safety Statistics 2025 | GasSafeBot',
    description: 'Key UK gas safety statistics: incidents, fatalities, unregistered engineer prosecutions, and landlord compliance data.',
    url: 'https://www.gassafebot.co.uk/gas-safety-statistics-uk/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'UK Gas Safety Statistics 2025',
  description: 'Comprehensive UK gas safety statistics including incident data, CO poisoning figures, Gas Safe Register registration numbers, and landlord compliance rates.',
  author: { '@type': 'Organization', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
  publisher: { '@type': 'Organization', name: 'GasSafeBot', url: 'https://www.gassafebot.co.uk' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gassafebot.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Gas Safety Statistics UK', item: 'https://www.gassafebot.co.uk/gas-safety-statistics-uk/' },
  ],
}

const stats = [
  { number: '23,000+', label: 'Registered gas businesses on Gas Safe Register', source: 'Gas Safe Register' },
  { number: '120,000+', label: 'Individual Gas Safe registered engineers in the UK', source: 'Gas Safe Register' },
  { number: '1 in 6', label: 'Gas appliances inspected by Gas Safe found unsafe', source: 'Gas Safe Register Annual Report' },
  { number: '4,000+', label: 'People go to hospital annually with CO poisoning', source: 'NHS / Carbon Monoxide Awareness' },
  { number: '50', label: 'People die from accidental CO poisoning each year in the UK', source: 'Office for National Statistics' },
  { number: '40%', label: 'Rented properties lack a current Gas Safety Record (CP12)', source: 'Gas Safe Register survey data' },
]

export default function GasSafetyStatisticsUK() {
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
          <span style={{ color: '#FF6B00' }}>Gas Safety Statistics UK</span>
        </div>

        {/* Hero */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
          <p style={{ color: '#FF6B00', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Gas Safety in the UK — 2025 Data
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
            UK Gas Safety Statistics 2025:<br />
            <span style={{ color: '#FF6B00' }}>Incidents, Fatalities & Engineer Data</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#8b949e', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Gas is the UK's most widely used domestic energy source, heating around 85% of homes. When gas systems are maintained by qualified engineers, they are extremely safe. When they aren't, the consequences can be severe.
          </p>
          <p style={{ color: '#8b949e', fontSize: '0.85rem' }}>Last updated: 2025 · Sources: Gas Safe Register, Health and Safety Executive, Office for National Statistics, Carbon Monoxide Awareness</p>
        </section>

        {/* Key stats */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Key UK Gas Safety Statistics</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {stats.map(stat => (
                <div key={stat.number} style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', padding: '1.5rem' }}>
                  <p style={{ color: '#FF6B00', fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1 }}>{stat.number}</p>
                  <p style={{ color: '#e6edf3', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.4 }}>{stat.label}</p>
                  <p style={{ color: '#8b949e', fontSize: '0.75rem', margin: 0 }}>Source: {stat.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sections */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Gas Safe Register: UK Registration Data</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1rem' }}>
            The Gas Safe Register replaced CORGI as the official gas registration body in April 2009. All engineers legally working on gas appliances in GB, Northern Ireland, Isle of Man, and Guernsey must be registered.
          </p>
          <ul style={{ color: '#8b949e', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>Over 120,000 individual gas engineers are registered across the UK</li>
            <li>Over 23,000 gas businesses hold Gas Safe registration</li>
            <li>Gas Safe inspectors carry out thousands of checks annually on both registered and unregistered work</li>
            <li>Engineers who fail competency assessments have their cards suspended until they requalify</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Carbon Monoxide Poisoning Statistics</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1rem' }}>
            Carbon monoxide (CO) is produced when gas burns incompletely, most often due to faulty or poorly maintained appliances. It has no colour or smell, making it impossible to detect without a detector.
          </p>
          <ul style={{ color: '#8b949e', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Around 50 people die from accidental CO poisoning in the UK each year (ONS)</li>
            <li>Over 4,000 people attend A&amp;E annually with CO-related symptoms</li>
            <li>Many more cases are undiagnosed — CO symptoms (headaches, nausea, confusion) are often mistaken for flu</li>
            <li>The majority of CO poisoning incidents involve gas boilers, gas cookers, or gas fires</li>
            <li>Properties without CO alarms are significantly more likely to see undetected exposure</li>
          </ul>
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '1rem 1.25rem', marginBottom: '2rem' }}>
            <p style={{ color: '#e6edf3', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              <strong>Recommendation:</strong> Fit a BS EN 50291-1 approved CO alarm in every room with a gas appliance. Get your boiler serviced annually by a Gas Safe registered engineer. If your CO alarm sounds, leave immediately and call 0800 111 999 (National Gas Emergencies).
            </p>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Landlord Gas Safety Compliance</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1rem' }}>
            Under the Gas Safety (Installation and Use) Regulations 1994, landlords are legally required to have all gas appliances in rented properties checked annually by a Gas Safe registered engineer and to provide tenants with a copy of the Gas Safety Record (CP12).
          </p>
          <ul style={{ color: '#8b949e', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Gas Safe estimates around 40% of rented properties may lack a current valid CP12</li>
            <li>Landlords who fail to comply can face prosecution, unlimited fines, and imprisonment</li>
            <li>Letting agents can also be prosecuted if they manage properties without ensuring compliance</li>
            <li>A CP12 must be issued within 28 days of the inspection and renewed every 12 months</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Unregistered Gas Work: The Risks</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1rem' }}>
            Gas Safe inspectors investigate illegal gas work carried out by unregistered individuals — often found through insurance claims, property surveys, or complaints.
          </p>
          <ul style={{ color: '#8b949e', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>Using an unregistered engineer is illegal under the Gas Safety (Installation and Use) Regulations</li>
            <li>Home insurance may be voided if a claim arises from work carried out by an unregistered engineer</li>
            <li>Unregistered gas work is one of the leading causes of dangerous gas appliances found by inspectors</li>
            <li>1 in 6 gas appliances checked during inspections is found to be in an unsafe condition</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Gas Safety Week: Annual Awareness Campaign</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
            Gas Safety Week is an annual UK awareness campaign organised by the Gas Safe Register, typically held in September. It encourages homeowners and landlords to get appliances checked, raise awareness of CO risks, and verify that engineers are registered. Gas engineer enquiries typically spike significantly during and after Gas Safety Week.
          </p>
        </section>

        {/* CTA for engineers */}
        <section style={{ background: '#161b22', borderTop: '1px solid #21262d', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Gas Engineer? Make Sure Customers Can Find You</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Homeowners and landlords searching for a registered gas engineer in your area represent high-intent, high-value enquiries. If your business doesn't appear on page 1 of Google, that work goes to someone else.
            </p>
            <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
              We build websites and local SEO systems for Gas Safe registered engineers. Our free audit shows exactly what you're missing and what it would take to rank in your area.
            </p>
            <Link href="/#contact" style={{ background: '#FF6B00', color: '#fff', padding: '0.85rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>
              Get a Free Gas Engineer Marketing Audit →
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
