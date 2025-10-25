export function track(event: string, props?: Record<string, unknown>) {
  if (process.env.NODE_ENV !== 'production') return
  // Placeholder for analytics provider (e.g., Vercel Analytics or PostHog)
  // console.log('track', event, props)
}

