import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | GasSafeBot',
  description:
    'Terms of service for GasSafeBot.co.uk. Read our service terms, payment conditions, and cancellation policy.',
  alternates: { canonical: 'https://gassafebot.co.uk/terms' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <section className="section section--mid" style={{ paddingTop: '120px' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <ScrollReveal>
              <div className="reveal">
                <div className="eyebrow">Legal</div>
                <h1>
                  Terms of <span>Service</span>
                </h1>
                <p className="lead">
                  Last updated: March 2026
                </p>

                <div style={{ marginTop: '2rem', lineHeight: 1.7 }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Please read these Terms of Service carefully before engaging GasSafeBot 
                    for any services. By submitting an enquiry, accepting a proposal, or 
                    making a payment, you agree to be bound by these terms.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    1. Definitions
                  </h2>
                  <p>
                    <strong>"GasSafeBot"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or{' '}
                    <strong>"our"</strong> refers to GasSafeBot.co.uk, a marketing and software 
                    service provider.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    <strong>"Client"</strong>, <strong>"you"</strong>, or <strong>"your"</strong>{' '}
                    refers to the person or business entity engaging our services.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    <strong>"Services"</strong> refers to website design, local SEO, Google 
                    Business Profile optimisation, AI receptionist setup, and related marketing 
                    services.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    <strong>"Deliverables"</strong> refers to websites, content, reports, and 
                    other materials produced as part of the Services.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    2. Services Provided
                  </h2>
                  <p>GasSafeBot provides the following services to UK-based gas engineers and heating businesses:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Website design and development</li>
                    <li>Local SEO (Search Engine Optimisation)</li>
                    <li>Google Business Profile setup and optimisation</li>
                    <li>Citation building and directory submissions</li>
                    <li>Content creation and blog writing</li>
                    <li>AI voice receptionist setup (Emma)</li>
                    <li>Monthly ranking reports and analysis</li>
                    <li>Competitor analysis and keyword research</li>
                  </ul>
                  <p style={{ marginTop: '1rem' }}>
                    The specific scope of services will be detailed in your individual proposal 
                    or agreement.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    3. Free Audit
                  </h2>
                  <p>
                    We offer a free, no-obligation audit service to eligible UK gas engineers. 
                    The free audit includes a review of your current online presence, competitor 
                    analysis, and a personalised ranking plan. Submitting a free audit request 
                    does not obligate you to purchase any services.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    4. Payment Terms
                  </h2>
                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    Setup Fees
                  </h3>
                  <p>
                    Setup fees are due before work commences. We will issue an invoice upon 
                    agreement of the proposal. Work begins once payment is received.
                  </p>

                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    Monthly Retainers
                  </h3>
                  <p>
                    Monthly retainers are billed in advance on the 1st of each month. The first 
                    month's retainer is pro-rated if the project starts mid-month.
                  </p>

                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    Payment Methods
                  </h3>
                  <p>
                    We accept payment via bank transfer (BACS) and major credit/debit cards. 
                    All prices are quoted in GBP (£) and exclude VAT unless otherwise stated.
                  </p>

                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    Late Payments
                  </h3>
                  <p>
                    Payments not received within 14 days of the due date may result in suspension 
                    of services. We reserve the right to charge interest on overdue amounts at 
                    8% above the Bank of England base rate, as permitted by the Late Payment 
                    of Commercial Debts (Interest) Act 1998.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    5. Cancellation and Termination
                  </h2>
                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    By Client
                  </h3>
                  <p>
                    You may cancel your monthly retainer with <strong>30 days' written notice</strong>. 
                    Notice should be sent to{' '}
                    <a href="mailto:hello@gassafebot.co.uk" style={{ color: 'var(--fire)' }}>
                      hello@gassafebot.co.uk
                    </a>. 
                    Services will continue until the end of the notice period.
                  </p>

                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    Setup Fee Refunds
                  </h3>
                  <p>
                    Setup fees are non-refundable once work has commenced. If you cancel before 
                    work begins, we will refund the setup fee minus any costs already incurred 
                    (e.g., domain registration, initial research).
                  </p>

                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    By GasSafeBot
                  </h3>
                  <p>
                    We reserve the right to terminate services immediately if you breach these 
                    terms, fail to pay outstanding invoices, or engage in abusive behaviour towards 
                    our staff. In such cases, no refunds will be provided.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    6. Ownership of Deliverables
                  </h2>
                  <p>
                    Upon full payment of setup fees and settlement of any outstanding invoices, 
                    the following ownership transfers to you:
                  </p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Website design and content (excluding proprietary code)</li>
                    <li>Domain name (registered in your name)</li>
                    <li>Google Business Profile (transferred to your Google account)</li>
                    <li>All content created specifically for your business</li>
                  </ul>
                  <p style={{ marginTop: '1rem' }}>
                    We retain ownership of our proprietary systems, frameworks, and code that 
                    may be used across multiple client projects. You are granted a perpetual, 
                    non-exclusive licence to use these elements as part of your website.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    7. Client Responsibilities
                  </h2>
                  <p>You agree to:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Provide accurate and complete information about your business</li>
                    <li>Provide timely feedback and approvals when requested</li>
                    <li>Supply necessary assets (logos, photos, trade credentials) promptly</li>
                    <li>Maintain your own Gas Safe registration and insurance</li>
                    <li>Grant us necessary access to existing digital assets (domains, hosting, Google accounts)</li>
                    <li>Ensure you have the legal right to use any content you provide to us</li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    8. Limitation of Liability
                  </h2>
                  <p>
                    GasSafeBot provides marketing services and does not guarantee specific 
                    business results, such as a particular number of leads, enquiries, or revenue. 
                    SEO results depend on many factors outside our control, including Google 
                    algorithm changes, competitor activity, and market conditions.
                  </p>
                  <p style={{ marginTop: '1rem' }}>
                    To the maximum extent permitted by law, our total liability to you for any 
                    claim arising from our services shall not exceed the total amount paid by 
                    you to us in the 12 months preceding the claim.
                  </p>
                  <p style={{ marginTop: '1rem' }}>
                    We are not liable for:
                  </p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Indirect, consequential, or special damages</li>
                    <li>Loss of profits, revenue, or business opportunities</li>
                    <li>Issues caused by third-party services (hosting, Google, etc.)</li>
                    <li>Errors in content based on information you provided</li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    9. Confidentiality
                  </h2>
                  <p>
                    We treat all information you share with us as confidential. We will not 
                    disclose your business information to third parties without your consent, 
                    except as necessary to provide our services (e.g., to hosting providers) 
                    or as required by law.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    10. Intellectual Property
                  </h2>
                  <p>
                    You warrant that you own or have the necessary rights to all materials you 
                    provide to us (logos, images, text, etc.). You grant us a licence to use 
                    these materials solely for the purpose of providing our services to you.
                  </p>
                  <p style={{ marginTop: '1rem' }}>
                    GasSafeBot retains all intellectual property rights in our proprietary 
                    systems, methodologies, and frameworks. You may not copy, modify, distribute, 
                    or reverse-engineer any of our proprietary tools or systems.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    11. Third-Party Services
                  </h2>
                  <p>
                    Our services may involve third-party services such as hosting providers, 
                    form processors, and Google services. These services are subject to their 
                    own terms and conditions. We are not responsible for the availability, 
                    performance, or policies of third-party services.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    12. Force Majeure
                  </h2>
                  <p>
                    Neither party shall be liable for failure to perform obligations due to 
                    circumstances beyond their reasonable control, including but not limited to 
                    acts of God, war, terrorism, riots, embargoes, acts of civil or military 
                    authorities, fire, floods, accidents, strikes, or shortages of transportation, 
                    facilities, fuel, energy, labour, or materials.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    13. Governing Law and Jurisdiction
                  </h2>
                  <p>
                    These Terms of Service are governed by and construed in accordance with the 
                    laws of <strong>England and Wales</strong>. Any disputes arising from these 
                    terms shall be subject to the exclusive jurisdiction of the courts of England 
                    and Wales.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    14. Changes to These Terms
                  </h2>
                  <p>
                    We may update these Terms of Service from time to time. Any changes will be 
                    posted on this page with an updated "Last updated" date. Continued use of 
                    our services after changes constitutes acceptance of the new terms.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    15. Contact Information
                  </h2>
                  <p>
                    For questions about these terms, please contact us:
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:hello@gassafebot.co.uk" style={{ color: 'var(--fire)' }}>
                      hello@gassafebot.co.uk
                    </a>
                  </p>

                  <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Link href="/" className="btn btn-outline">
                      ← Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-legal">
              © 2026 GasSafeBot.co.uk. All rights reserved.
            </div>
            <div className="footer-disclaimer">
              <Link href="/privacy-policy" style={{ color: 'var(--dim)', marginRight: '1rem' }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: 'var(--dim)' }}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
