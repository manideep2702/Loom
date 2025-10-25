"use client"
import { useEffect, useState } from 'react'

export type FAQItem = { id: string; q: string; a: string }

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash.replace('#', '')
    if (hash) setOpenId(hash)
  }, [])

  return (
    <div role="list" aria-label="Frequently Asked Questions" className="divide-y divide-white/10 rounded-2xl border border-white/10">
      {items.map((item) => (
        <div key={item.id} role="listitem" id={item.id} className="p-4">
          <button
            className="flex w-full items-center justify-between text-left text-base font-medium text-white"
            aria-expanded={openId === item.id}
            aria-controls={`${item.id}-panel`}
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
          >
            <span>{item.q}</span>
            <span aria-hidden="true">{openId === item.id ? '−' : '+'}</span>
          </button>
          <div id={`${item.id}-panel`} role="region" className={openId === item.id ? 'mt-2 text-sm text-white/80' : 'hidden'}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  )
}
