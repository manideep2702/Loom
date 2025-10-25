type Props = {
  quote: string
  name: string
  role?: string
}

export default function Testimonial({ quote, name, role }: Props) {
  return (
    <figure className="card p-5">
      <blockquote className="text-white">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-white/70">— {name}{role ? `, ${role}` : ''}</figcaption>
    </figure>
  )
}
