import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonProps = {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  children: React.ReactNode
  ariaLabel?: string
}

export default function Button({ href, onClick, variant = 'primary', className, children, ariaLabel }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-white text-black hover:bg-white/90',
    secondary: 'border border-white/20 text-white/90 hover:border-white/40',
    ghost: 'text-white/80 hover:bg-white/10'
  }
  const classNames = cn(base, variants[variant], className)
  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classNames}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" aria-label={ariaLabel} onClick={onClick} className={classNames}>
      {children}
    </button>
  )
}
