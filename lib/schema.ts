import { siteConfig } from '@/site.config'

export function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: '/images/logo.svg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.locality,
      addressCountry: siteConfig.address.country
    },
    sameAs: [] as string[]
  }
}

export function courseJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Loom Technologies 16-Week AI/ML Bootcamp',
    description:
      '16-week immersive program covering Python, Data Science, Machine Learning, Deep Learning, Generative AI, and a production capstone with Demo Day.',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      sameAs: siteConfig.url
    }
  }
}

