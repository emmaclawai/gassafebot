import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gassafebot.co.uk'),
  title: {
    default: 'GasSafeBot | Websites & Local SEO for Gas Safe Engineers | UK',
    template: '%s | GasSafeBot',
  },
  description:
    'Websites, local SEO, and AI receptionist systems built for UK Gas Safe engineers. Designed to help heating businesses win more enquiries in their service areas.',
  keywords: [
    'gas engineer website',
    'gas safe engineer marketing',
    'local SEO for gas engineers',
    'heating business website',
    'boiler repair marketing',
    'gas engineer SEO',
    'AI receptionist for trades',
  ],
  authors: [{ name: 'GasSafeBot' }],
  creator: 'GasSafeBot',
  publisher: 'GasSafeBot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://gassafebot.co.uk',
    siteName: 'GasSafeBot',
    title: 'GasSafeBot | Websites & Local SEO for Gas Safe Engineers',
    description:
      'Websites, local SEO, and AI receptionist systems built for UK Gas Safe engineers.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'GasSafeBot - Websites and Local SEO for Gas Safe Engineers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GasSafeBot | Websites & Local SEO for Gas Safe Engineers',
    description:
      'Websites, local SEO, and AI receptionist systems built for UK Gas Safe engineers.',
    images: ['/og-default.png'],
  },
  verification: {
    google: 'CWroRzx2pZAFt2QnGXNRuXai7oCR7sbRw_kLhz7uCkA',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'GasSafeBot',
  url: 'https://www.gassafebot.co.uk',
  description: 'Websites, local SEO and AI receptionist for Gas Safe registered engineers across the UK',
  email: 'hello@gassafebot.co.uk',
  areaServed: 'GB',
  serviceType: 'Marketing Agency',
  priceRange: '££',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://www.gassafebot.co.uk/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
