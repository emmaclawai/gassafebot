import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | GasSafeBot',
  description: 'Privacy policy for GasSafeBot.co.uk. Read how we collect, use, and protect your personal data.',
  alternates: { canonical: 'https://gassafebot.co.uk/privacy-policy/' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
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
                  <p style={{ marginBottom: '1.5rem' }}>
                    At GasSafeBot.co.uk, we take your privacy seriously. This Privacy Policy 
                    explains how we collect, use, and protect your personal information when 
                    you use our website and services.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    1. Who We Are
                  </h2>
                  <p>
                    GasSafeBot.co.uk is a marketing service provider for UK Gas Safe engineers. 
                    Our website and services are operated by GasSafeBot, and we are the data 
                    controller for any personal information you provide.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    2. What Data We Collect
                  </h2>
                  <p>We may collect the following information:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li><strong>Contact information:</strong> Name, email address, phone number</li>
                    <li><strong>Business information:</strong> Company name, trading address, postcode</li>
                    <li><strong>Service details:</strong> Information about your heating business and marketing needs</li>
                    <li><strong>Technical data:</strong> IP address, browser type, device information, cookies</li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    3. How We Collect Your Data
                  </h2>
                  <p>We collect data when you:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Submit our free audit form</li>
                    <li>Contact us via email or phone</li>
                    <li>Browse our website (via cookies and analytics)</li>
                    <li>Engage our services</li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    4. How We Use Your Data
                  </h2>
                  <p>We use your personal information to:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Provide and manage our marketing services</li>
                    <li>Communicate with you about your enquiries and projects</li>
                    <li>Send you service-related information and updates</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    5. Legal Basis for Processing
                  </h2>
                  <p>Under UK GDPR, we process your data on the following legal bases:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li><strong>Contract:</strong> Processing necessary to fulfil our service agreement</li>
                    <li><strong>Consent:</strong> Where you have given explicit permission (e.g., marketing emails)</li>
                    <li><strong>Legitimate interests:</strong> Running our business and improving our services</li>
                    <li><strong>Legal obligation:</strong> Compliance with tax, accounting, and other laws</li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    6. Data Sharing
                  </h2>
                  <p>
                    We do not sell your personal data. We may share your information with:
                  </p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Service providers (hosting, email, analytics)</li>
                    <li>Professional advisers (accountants, legal)</li>
                    <li>Regulatory authorities when required by law</li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    7. Data Retention
                  </h2>
                  <p>
                    We retain your personal data only for as long as necessary:
                  </p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Active clients: Duration of service plus 7 years (accounting records)</li>
                    <li>Enquiries: Up to 2 years unless you request deletion</li>
                    <li>Website analytics: 26 months</li>
                  </ul>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    8. Your Rights
                  </h2>
                  <p>Under UK data protection law, you have the right to:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data ("right to be forgotten")</li>
                    <li>Object to or restrict processing of your data</li>
                    <li>Request data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p style={{ marginTop: '1rem' }}>
                    To exercise any of these rights, contact us at{' '}
                    <a href="mailto:hello@gassafebot.co.uk" style={{ color: 'var(--fire)' }}>
                      hello@gassafebot.co.uk
                    </a>.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    9. Cookies
                  </h2>
                  <p>
                    Our website uses cookies to improve your browsing experience and analyse 
                    website traffic. For detailed information about the cookies we use, please 
                    see our Cookie Banner when you first visit the site.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    10. Data Security
                  </h2>
                  <p>
                    We implement appropriate technical and organisational measures to protect 
                    your personal data against unauthorised access, alteration, disclosure, or 
                    destruction. This includes encryption, secure hosting, and access controls.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    11. Third-Party Links
                  </h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible 
                    for the privacy practices of these external sites. We encourage you to read 
                    the privacy policies of any website you visit.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    12. Changes to This Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be 
                    posted on this page with an updated "Last updated" date. We encourage you 
                    to review this policy periodically.
                  </p>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    13. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this Privacy Policy or how we handle your 
                    data, please contact us:
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:hello@gassafebot.co.uk" style={{ color: 'var(--fire)' }}>
                      hello@gassafebot.co.uk
                    </a>
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    <strong>Website:</strong>{' '}
                    <a href="https://gassafebot.co.uk" style={{ color: 'var(--fire)' }}>
                      gassafebot.co.uk
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
