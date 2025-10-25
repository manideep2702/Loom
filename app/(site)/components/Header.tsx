"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/site.config'
import Container from './Container'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'sticky top-0 z-50 w-full transition-colors ' +
        (scrolled ? 'bg-black/70 backdrop-blur border-b border-white/10' : 'bg-transparent')
      }
    >
      <Container className="flex h-16 items-center gap-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" aria-label="Loom Technologies home">
            <img src="/images/logo.svg" alt="Loom Technologies" className="h-8 w-8" />
            <span className="font-semibold text-white">Loom Technologies</span>
          </Link>
        </div>
      </Container>
    </header>
  )
}
