"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function ContactFormClient() {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = React.useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError(null)
    try {
      const form = e.currentTarget
      const data = {
        name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
        email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
        phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
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
    <form className="w-full space-y-4" onSubmit={onSubmit} aria-label="Contact form">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} className="resize-y" placeholder="Tell us how we can help" />
      </div>
      <Button className="w-full" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : 'Submit'}
      </Button>
      {status === 'success' && <p className="text-sm text-green-400">Thanks! We’ll get back to you soon.</p>}
      {status === 'error' && <p className="text-sm text-red-400">{error ?? 'Something went wrong. Please try again.'}</p>}
    </form>
  )
}
