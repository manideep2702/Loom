import Button from './Button'
import { formatDate } from '@/lib/utils'

export type Cohort = {
  id: string
  name: string
  size: string
  startDate: string
  timezone: string
  status: 'Open' | 'Waitlist'
}

export default function CohortCard({ cohort }: { cohort: Cohort }) {
  const isOpen = cohort.status === 'Open'
  return (
    <article className="card p-5" aria-labelledby={`${cohort.id}-title`}>
      <div className="flex items-baseline justify-between">
        <h3 id={`${cohort.id}-title`} className="text-lg font-semibold text-white">{cohort.name}</h3>
        <span className="text-white/70">{cohort.status}</span>
      </div>
      <dl className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/70">
        <div>
          <dt className="text-white/60">Size</dt>
          <dd>{cohort.size}</dd>
        </div>
        <div>
          <dt className="text-white/60">Start</dt>
          <dd>{formatDate(cohort.startDate)}</dd>
        </div>
        <div>
          <dt className="text-white/60">Time Zone</dt>
          <dd>{cohort.timezone}</dd>
        </div>
      </dl>
      <div className="mt-4 flex gap-2">
        <Button href="/admissions" variant={isOpen ? 'primary' : 'secondary'}>
          {isOpen ? 'Apply Now' : 'Join Waitlist'}
        </Button>
      </div>
    </article>
  )
}
