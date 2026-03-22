import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | GasSafeBot',
  description: 'Privacy policy for GasSafeBot.co.uk',
}

export default function PrivacyPolicy() {
  return (
    <html>
      <body style={{ background: '#0d1117', color: '#fff', padding: '2rem', fontFamily: 'system-ui' }}>
        <h1>Privacy Policy</h1>
        <p>Last updated: March 2026</p>
        <h2>1. Who We Are</h2>
        <p>GasSafeBot.co.uk is a marketing service for gas engineers.</p>
        
        <h2>2. What Data We Collect</h2>
        <p>We collect: name, email, phone, and postcode when you submit our contact form.</p>
        
        <h2>3. Contact</h2>
        <p>Email: hello@gassafebot.co.uk</p>
        
        <a href="/" style={{ color: '#FF6B00' }}>← Back to Home</a>
      </body>
    </html>
  )
}
