import Link from 'next/link'

interface Props {
  icon: string
  title: string
  description: string
}

export default function ComingSoonPage({ icon, title, description }: Props) {
  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(13,17,23,0.97)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Link href="/" className="nav-logo">GasSafe<span className="dot">●</span>Bot</Link>
      </nav>
      <main id="main-content" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--ink)', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '540px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{icon}</div>
          <div style={{ display: 'inline-block', background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: '4px', padding: '0.25rem 0.8rem', fontSize: '0.72rem', fontWeight: 700, color: 'var(--fire2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
            Coming Soon
          </div>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.1 }}>
            {title}
          </h1>
          <p style={{ color: 'var(--dim)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            {description}
          </p>
          <p style={{ color: 'var(--dim)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            In the meantime, request your free personalised audit below.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#contact" className="btn btn-fire">Get My Free Audit →</a>
            <Link href="/" className="btn btn-outline">← Back to Home</Link>
          </div>
        </div>
      </main>
    </>
  )
}
