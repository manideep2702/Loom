"use client"
import React from 'react'
import { Contact2 } from '@/components/ui/contact-2'

export default function Contact2Client(props: React.ComponentProps<typeof Contact2>) {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = React.useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError(null)
    try {
      const form = e.currentTarget
      const data = Object.fromEntries(new FormData(form).entries())
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${data.firstname ?? ''} ${data.lastname ?? ''}`.trim(),
          email: data.email,
          subject: data.subject,
          message: data.message
        })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Unknown error')
    }
  }

  return (
    <div>
      <Contact2 {...props} onSubmit={onSubmit} />
      <div className="mx-auto mt-2 max-w-screen-md px-4 text-sm">
        {status === 'submitting' && <p className="text-white/80">Submitting…</p>}
        {status === 'success' && <p className="text-green-400">Thanks! We’ll get back to you soon.</p>}
        {status === 'error' && <p className="text-red-400">{error ?? 'Something went wrong. Please try again.'}</p>}
      </div>
    </div>
  )
}

