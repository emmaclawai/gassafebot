import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | GasSafeBot',
  description:
    'Privacy policy for GasSafeBot.co.uk. Learn how we collect, use, and protect your personal data.',
  alternates: { canonical: 'https://gassafebot.co.uk/privacy-policy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
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
                  Privacy <span>Policy</span>
                </h1>
                <p className="lead">
                  Last updated: March 2026
                </p>

                <div style={{ marginTop: '2rem', lineHeight: 1.7 }}>
                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    1. Who We Are
                  </h2>
                  <p>
                    GasSafeBot.co.uk is a trading name of GasSafeBot, a marketing and software 
                    service provider for heating and gas businesses in the UK. Our registered 
                    address is available upon request. For any privacy-related queries, please 
                    contact us at{' '}
                    <a href="mailto:hello@gassafebot.co.uk" style={{ color: 'var(--fire)' }}>
                      hello@gassafebot.co.uk
                    </a>.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    2. What Data We Collect
                  </h2>
                  <p>When you submit our contact or audit request form, we collect:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Business postcode/service area</li>
                    <li>Business name (if provided)</li>
                    <li>Your message or audit requirements</li>
                  </ul>
                  <p style={{ marginTop: '1rem' }}>
                    We do not collect sensitive personal data (such as racial or ethnic origin, 
                    political opinions, religious beliefs, trade union membership, genetic or 
                    biometric data, health data, or data concerning sex life or orientation).
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    3. Why We Collect Your Data
                  </h2>
                  <p>We collect and process your personal data for the following purposes:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>To respond to your audit request or enquiry</li>
                    <li>To provide you with a personalised ranking plan</li>
                    <li>To communicate with you about our services</li>
                    <li>To fulfil our contractual obligations if you become a client</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                  <p style={{ marginTop: '1rem' }}>
                    The legal basis for processing your data is your consent (when you submit 
                    the form) and our legitimate interests in responding to business enquiries.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    4. How Long We Keep Your Data
                  </h2>
                  <p>
                    We retain your personal data for <strong>12 months</strong> from the date of 
                    your last interaction with us. This allows us to follow up on enquiries and 
                    maintain accurate records. After 12 months of inactivity, your data will be 
                    securely deleted unless you become a client, in which case we retain data 
                    for the duration of our business relationship plus 6 years for tax and legal 
                    compliance purposes.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    5. Third Party Processors
                  </h2>
                  <p>
                    We use the following third-party services to process your data:
                  </p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>
                      <strong>Formspree</strong> — We use Formspree to handle form submissions. 
                      Your form data is processed through their secure servers. View their{' '}
                      <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fire)' }}>
                        Privacy Policy
                      </a>.
                    </li>
                    <li>
                      <strong>Vercel</strong> — Our website is hosted on Vercel. They may process 
                      server logs containing IP addresses. View their{' '}
                      <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fire)' }}>
                        Privacy Policy
                      </a>.
                    </li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    6. Cookies Policy
                  </h2>
                  <p>
                    Our website uses cookies to improve your browsing experience. Here's what 
                    we use:
                  </p>
                  
                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    Essential Cookies
                  </h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable 
                    core functionality such as cookie consent preferences. The website cannot 
                    function properly without these cookies.
                  </p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>
                      <code>cookie-consent</code> — Stores your cookie preference choice 
                      (essential only or all cookies). Duration: 1 year.
                    </li>
                  </ul>

                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    Analytics Cookies
                  </h3>
                  <p>
                    We <strong>do not currently use</strong> analytics cookies (such as Google 
                    Analytics). If we add analytics in the future, we will update this policy 
                    and request your consent before enabling them.
                  </p>

                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    Advertising Cookies
                  </h3>
                  <p>
                    We <strong>do not use</strong> third-party advertising cookies. We do not 
                    track you across the web for advertising purposes.
                  </p>

                  <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--ember)' }}>
                    Managing Cookies
                  </h3>
                  <p>
                    You can manage your cookie preferences using the banner that appears when 
                    you first visit our site. You can also clear cookies through your browser 
                    settings at any time.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    7. Your Rights Under GDPR
                  </h2>
                  <p>Under UK GDPR, you have the following rights:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>
                      <strong>Right to Access</strong> — You can request a copy of the personal 
                      data we hold about you.
                    </li>
                    <li>
                      <strong>Right to Rectification</strong> — You can ask us to correct 
                      inaccurate or incomplete data.
                    </li>
                    <li>
                      <strong>Right to Erasure</strong> — You can request that we delete your 
                      personal data (the "right to be forgotten").
                    </li>
                    <li>
                      <strong>Right to Restrict Processing</strong> — You can ask us to limit 
                      how we use your data.
                    </li>
                    <li>
                      <strong>Right to Data Portability</strong> — You can request your data in 
                      a machine-readable format.
                    </li>
                    <li>
                      <strong>Right to Object</strong> — You can object to our processing of 
                      your data based on legitimate interests.
                    </li>
                  </ul>
                  <p style={{ marginTop: '1rem' }}>
                    To exercise any of these rights, please email us at{' '}
                    <a href="mailto:hello@gassafebot.co.uk" style={{ color: 'var(--fire)' }}>
                      hello@gassafebot.co.uk
                    </a>. We will respond within 30 days.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    8. Data Security
                  </h2>
                  <p>
                    We take appropriate technical and organisational measures to protect your 
                    personal data against unauthorised access, alteration, disclosure, or 
                    destruction. This includes using secure servers, encryption in transit 
                    (HTTPS), and limiting access to authorised personnel only.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    9. Data Breaches
                  </h2>
                  <p>
                    In the unlikely event of a data breach that affects your personal data, we 
                    will notify you and the Information Commissioner's Office (ICO) within 72 
                    hours of becoming aware of the breach, as required by GDPR.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    10. ICO Registration
                  </h2>
                  <p>
                    We are registered with the Information Commissioner's Office (ICO) as a 
                    data controller. Our registration number is available upon request.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    11. Changes to This Policy
                  </h2>
                  <p>
                    We may update this privacy policy from time to time. Any changes will be 
                    posted on this page with an updated "Last updated" date. We encourage you 
                    to review this policy periodically.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    12. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this privacy policy or how we handle your 
                    data, please contact us:
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

