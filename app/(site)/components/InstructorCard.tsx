type Props = {
  name: string
  title: string
  bio: string
}

export default function InstructorCard({ name, title, bio }: Props) {
  return (
    <article className="card p-5">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-white/20" aria-hidden="true" />
        <div>
          <h3 className="font-semibold text-white">{name}</h3>
          <p className="text-sm text-white/70">{title}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-white/80">{bio}</p>
    </article>
  )
}
