"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  cta?: { label: string; href: string }
}

export function NavBar({ items, className, cta }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? '')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-4 sm:top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none",
        className,
      )}
    >
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-1 py-1 shadow-lg backdrop-blur">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors whitespace-nowrap",
                "text-white/80 hover:text-white",
                isActive && "bg-white/10 text-white",
              )}
            >
              <span className="hidden md:inline whitespace-nowrap">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-white/10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-white">
                    <div className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-white/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-white/20 blur-md" />
                    <div className="absolute top-0 left-2 h-4 w-4 rounded-full bg-white/20 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
        {cta && (
          <Link
            href={cta.href}
            className="ml-1 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
            aria-label={cta.label}
          >
            {cta.label}
          </Link>
        )}
      </div>
    </div>
  )
}
