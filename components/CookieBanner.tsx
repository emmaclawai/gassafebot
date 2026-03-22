'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all')
    setShowBanner(false)
  }

  const handleEssentialOnly = () => {
    localStorage.setItem('cookie-consent', 'essential')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0d1117',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '1rem 1.5rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div>
          <p
            style={{
              color: '#ffffff',
              fontSize: '0.9rem',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            We use cookies to ensure you get the best experience on our website. 
            Essential cookies are always on. Read our{' '}
            <a
              href="/privacy-policy"
              style={{
                color: '#FF6B00',
                textDecoration: 'underline',
              }}
            >
              Privacy Policy
            </a>{' '}
            to learn more.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={handleAcceptAll}
            style={{
              backgroundColor: '#FF6B00',
              color: '#ffffff',
              border: 'none',
              padding: '0.6rem 1.25rem',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Accept All
          </button>
          <button
            onClick={handleEssentialOnly}
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '0.6rem 1.25rem',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  )
}
