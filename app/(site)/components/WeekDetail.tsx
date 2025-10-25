import { week1Details } from '../data/week1'

export default function WeekDetail() {
  return (
    <div className="card p-6">
      <h3 className="text-2xl font-semibold text-white">{week1Details.title}</h3>
      <ol className="mt-4 space-y-2">
        {week1Details.days.map((d) => (
          <li key={d.day} className="flex items-start gap-3 text-white/90">
            <span className="mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white/10 px-2 text-xs font-semibold text-white">
              D{d.day}
            </span>
            <span className="text-sm sm:text-base">{`Day ${d.day}: ${d.title}`}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

