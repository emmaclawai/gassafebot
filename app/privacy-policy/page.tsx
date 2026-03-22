import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | GasSafeBot',
  description:
    'Privacy policy for GasSafeBot.co.uk. Learn how we collect, use, and protect your personal data.',
  alternates: { canonical: 'https://gassafebot.co.uk/privacy-policy/' },
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
                <p className="lead">Last updated: March 2026</p>

                <div style={{ marginTop: '2rem', lineHeight: 1.7 }}>
                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    1. Who We Are
                  </h2>
                  <p>
                    GasSafeBot.co.uk is a trading name of GasSafeBot, a marketing and software
                    service provider for heating and gas businesses in the UK. For any privacy-related
                    queries, please contact us at{' '}
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

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    3. Why We Collect Your Data
                  </h2>
                  <p>We collect and process your personal data for:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>To respond to your audit request or enquiry</li>
                    <li>To provide you with a personalised ranking plan</li>
                    <li>To communicate with you about our services</li>
                    <li>To fulfil our contractual obligations if you become a client</li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    4. How Long We Keep Your Data
                  </h2>
                  <p>
                    We retain your personal data for <strong>12 months</strong> from the date of your
                    last interaction with us. After 12 months of inactivity, your data will be securely
                    deleted unless you become a client.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    5. Third Party Processors
                  </h2>
                  <p>We use the following third-party services:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>
                      <strong>Formspree</strong> — We use Formspree to handle form submissions.
                    </li>
                    <li>
                      <strong>Vercel</strong> — Our website is hosted on Vercel.
                    </li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    6. Cookies Policy
                  </h2>
                  <p>Our website uses cookies:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>
                      <strong>Essential:</strong> cookie-consent (stores your preference, 1 year)
                    </li>
                    <li>
                      <strong>Analytics:</strong> None currently used
                    </li>
                    <li>
                      <strong>Advertising:</strong> None used
                    </li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    7. Your Rights Under GDPR
                  </h2>
                  <p>You have the right to:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Access your personal data</li>
                    <li>Rectify inaccurate or incomplete data</li>
                    <li>Request erasure (right to be forgotten)</li>
                    <li>Restrict processing</li>
                    <li>Data portability</li>
                    <li>Object to processing</li>
                  </ul>
                  <p style={{ marginTop: '1rem' }}>
                    To exercise these rights, email{' '}
                    <a href="mailto:hello@gassafebot.co.uk" style={{ color: 'var(--fire)' }}>
                      hello@gassafebot.co.uk
                    </a>
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    8. Data Security
                  </h2>
                  <p>
                    We take appropriate technical and organisational measures to protect your personal
                    data against unauthorised access, alteration, disclosure, or destruction.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    9. ICO Registration
                  </h2>
                  <p>
                    We are registered with the Information Commissioner's Office (ICO) as a data
                    controller.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    10. Contact Us
                  </h2>
                  <p>
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
            <div className="footer-legal">© 2026 GasSafeBot.co.uk. All rights reserved.</div>
            <div className="footer-disclaimer">
              <Link href="/privacy-policy" style={{ color: 'var(--dim)', marginRight: '1rem' }}>
                Privacy Policy
              </Link>
              <Link href="/terms" style={{ color: 'var(--dim)' }}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
