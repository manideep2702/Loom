import { curriculum } from '../data/curriculum'

export default function SyllabusList() {
  return (
    <aside className="card p-6 max-h-[480px] overflow-auto">
      <h4 className="text-lg font-semibold text-white">Syllabus — Weeks 1–16</h4>
      <ul className="mt-4 space-y-3">
        {curriculum.map((w) => (
          <li key={w.week} className="text-sm text-white/80">
            <div className="font-semibold text-white">Week {w.week}: {w.title}</div>
            <div className="mt-1 text-xs text-white/70"><span className="text-white">Lab:</span> {w.lab}</div>
            <div className="text-xs text-white/60"><span className="text-white/80">Outcomes:</span> {w.outcomes.join(', ')}</div>
          </li>
        ))}
      </ul>
    </aside>
  )
}

