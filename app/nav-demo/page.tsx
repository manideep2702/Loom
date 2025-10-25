"use client"
import { NavBar } from '@/components/ui/tubelight-navbar'
import { Home, BookOpen, Info, BadgeCheck, Rocket, HelpCircle, Mail } from 'lucide-react'

export default function NavDemoPage() {
  const items = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Curriculum', url: '/curriculum', icon: BookOpen },
    { name: 'About', url: '/about', icon: Info },
    { name: 'Admissions', url: '/admissions', icon: BadgeCheck },
    { name: 'Demo Day', url: '/demo-day', icon: Rocket },
    { name: 'FAQ', url: '/faq', icon: HelpCircle },
    { name: 'Contact', url: '/contact', icon: Mail }
  ]
  return <NavBar items={items} />
}

