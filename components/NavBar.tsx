'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav>
        <Link href="/" className="nav-logo">
          GasSafe<span className="dot">●</span>Bot
        </Link>

        <ul className="nav-links">
          <li><a href="/#services">Services</a></li>
          <li><a href="/#packages">Pricing</a></li>
          <li><a href="/#how-it-works">How It Works</a></li>
          <li><a href="/#faq">FAQ</a></li>
        </ul>

        <a href="/#contact" className="nav-cta">Free Audit →</a>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <a href="/#services" onClick={() => setMobileOpen(false)}>Services</a>
        <a href="/#packages" onClick={() => setMobileOpen(false)}>Pricing</a>
        <a href="/#how-it-works" onClick={() => setMobileOpen(false)}>How It Works</a>
        <a href="/#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
        <a href="/#contact" onClick={() => setMobileOpen(false)}>Free Audit →</a>
      </div>
    </>
  )
}
