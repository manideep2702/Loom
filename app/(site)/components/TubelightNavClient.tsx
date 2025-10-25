"use client"
import { NavBar } from '@/components/ui/tubelight-navbar'
import { siteConfig } from '@/site.config'
import { Home, BookOpen, Info, BadgeCheck, Rocket, HelpCircle, Mail } from 'lucide-react'

const iconMap: Record<string, any> = {
  Home,
  Curriculum: BookOpen,
  About: Info,
  Admissions: BadgeCheck,
  'Demo Day': Rocket,
  FAQ: HelpCircle,
  Contact: Mail
}

export default function TubelightNavClient() {
  const items = siteConfig.navigation.map((n) => ({
    name: n.label,
    url: n.href,
    icon: iconMap[n.label] ?? Home
  }))
  return (
    <NavBar
      items={items}
      cta={{ label: siteConfig.ctas.apply.label, href: siteConfig.ctas.apply.href }}
      className="sm:left-[58%]"
    />
  )
}
