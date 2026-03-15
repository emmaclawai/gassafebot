import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/'],
    },
    sitemap: 'https://gassafebot.co.uk/sitemap.xml',
    host: 'https://gassafebot.co.uk',
  }
}
