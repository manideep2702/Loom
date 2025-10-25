import { GraduationCap, Zap, Presentation, Users, Puzzle, Rocket } from 'lucide-react'

type Item = {
  title: string
  body: string
  icon: 'Users' | 'Bolt' | 'AcademicCap' | 'Presentation' | 'Puzzle' | 'Rocket'
}

const IconMap = {
  Users,
  Bolt: Zap,
  AcademicCap: GraduationCap,
  Presentation,
  Puzzle,
  Rocket
}

export default function FeatureList({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => {
        const Icon = IconMap[it.icon]
        return (
          <article key={it.title} tabIndex={0} className="card p-5 outline-none focus-visible:ring-2 focus-visible:ring-white">
            <div className="flex items-start gap-3">
              <span className="rounded-xl bg-white/10 p-2 text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-white">{it.title}</h3>
                <p className="mt-1 text-sm text-white/70">{it.body}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
