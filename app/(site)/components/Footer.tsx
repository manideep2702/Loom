import Link from 'next/link'
import Container from './Container'
import { siteConfig } from '@/site.config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-white/10">
      <Container className="grid gap-8 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <img src="/images/LOGO.jpeg" alt="Loom Technologies" className="h-6 w-6 rounded" />
            <span className="font-semibold text-white">{siteConfig.name}</span>
          </div>
          <p className="text-sm text-white/70">{siteConfig.tagline}</p>
        </div>
        <nav className="grid grid-cols-2 gap-4" aria-label="Footer">
          <div className="space-y-2">
            {siteConfig.navigation.slice(0, 4).map((item) => (
              <div key={item.href}>
                <Link className="text-sm text-white/80 hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {siteConfig.navigation.slice(4).map((item) => (
              <div key={item.href}>
                <Link className="text-sm text-white/80 hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </div>
            ))}
            <Link href="/terms" className="text-sm text-white/80 hover:text-white">Terms</Link>
            <Link href="/privacy" className="text-sm text-white/80 hover:text-white">Privacy</Link>
          </div>
        </nav>
        <div className="space-y-2">
          <p className="text-sm text-white/80">Hyderabad, India</p>
          <p className="text-sm text-white/80">
            <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
          </p>
          <p className="text-sm text-white/80">
            <a href={`tel:${siteConfig.phone}`} className="hover:underline">{siteConfig.phone}</a>
          </p>
          <p className="text-xs text-white/60">© {year} {siteConfig.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
