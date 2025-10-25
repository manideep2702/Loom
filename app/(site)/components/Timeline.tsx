import { curriculum as weeks } from '@/app/(site)/data/curriculum'

export default function Timeline() {
  return (
    <ol className="relative border-s border-white/15">
      {weeks.map((w) => (
        <li key={w.week} className="ms-6 py-3">
          <span className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full bg-white" aria-hidden="true" />
          <div className="flex items-baseline justify-between">
            <h4 className="font-semibold text-white">Week {w.week}: {w.title}</h4>
            <span className="hidden text-xs text-white/60 sm:block">Lab: {w.lab}</span>
          </div>
          <div className="mt-2 hidden text-sm text-white/70 sm:block">
            Outcomes: {w.outcomes.join(', ')}
          </div>
          <details className="sm:hidden mt-2">
            <summary className="cursor-pointer text-sm text-white/80">Details</summary>
            <div className="mt-2 text-sm text-white/70">
              Outcomes: {w.outcomes.join(', ')}<br/>
              Lab: {w.lab}
            </div>
          </details>
        </li>
      ))}
    </ol>
  )
}
