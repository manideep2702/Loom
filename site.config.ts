export const siteConfig = {
  name: 'Loom Technologies',
  tagline: 'Transformation, not just certification.',
  description:
    'An innovative online education platform training future-ready developers in AI/ML and web development through immersive, project-based bootcamps.',
  url: 'https://loomtech.example',
  ogImage: '/images/og.svg',
  twitter: '@loomtech',
  email: 'admissions@loomtech.example',
  phone: '+91-00000-00000',
  address: {
    locality: 'Hyderabad',
    country: 'IN'
  },
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/curriculum', label: 'Curriculum' },
    { href: '/about', label: 'About' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/demo-day', label: 'Demo Day' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' }
  ],
  ctas: {
    apply: { label: 'Apply Now', href: '/admissions' },
    waitlist: { label: 'Join Waitlist', href: '/admissions#waitlist' }
  }
}

export type NavItem = (typeof siteConfig.navigation)[number]
