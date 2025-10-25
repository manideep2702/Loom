"use client"
import { MagicCard } from '@/components/ui/magic-card'
import Button from './Button'

export default function UpcomingCohorts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <MagicCard className="p-6">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">November 2025</h3>
              <span className="text-sm text-white/70">Waitlist</span>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/80">
              <div>
                <dt className="text-white/60">Size</dt>
                <dd>6–8</dd>
              </div>
              <div>
                <dt className="text-white/60">Start</dt>
                <dd>Nov 5, 2025</dd>
              </div>
              <div>
                <dt className="text-white/60">Time Zone</dt>
                <dd>Asia/Kolkata</dd>
              </div>
            </dl>
          </div>
          <div className="mt-6">
            <Button href="/admissions#waitlist" variant="secondary">Join Waitlist</Button>
          </div>
        </div>
      </MagicCard>

      <MagicCard className="p-6">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">January 2026</h3>
              <span className="text-sm text-white/70">Waitlist</span>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/80">
              <div>
                <dt className="text-white/60">Size</dt>
                <dd>6–8</dd>
              </div>
              <div>
                <dt className="text-white/60">Start</dt>
                <dd>Jan 20, 2026</dd>
              </div>
              <div>
                <dt className="text-white/60">Time Zone</dt>
                <dd>Asia/Kolkata</dd>
              </div>
            </dl>
          </div>
          <div className="mt-6">
            <Button href="/admissions" variant="primary">Apply Now</Button>
          </div>
        </div>
      </MagicCard>
    </div>
  )
}

