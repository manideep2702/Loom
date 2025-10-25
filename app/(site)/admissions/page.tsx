import type { Metadata } from 'next'
import Container from '../components/Container'
import PricingCard from '../components/PricingCard'
import Button from '../components/Button'
import CTA from '../components/CTA'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Admissions',
  description: 'Who this is for, prerequisites, application steps, cohort size, schedule, pricing, scholarships.',
  openGraph: { images: [{ url: '/images/og.svg' }] },
  twitter: { card: 'summary_large_image' }
})

export default function AdmissionsPage() {
  return (
    <main className="py-12">
      <Container>
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span>Admissions</span>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">Join a small, focused cohort</h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-white/80 md:text-lg">
            16 weeks. Live, interactive, and portfolio-first. Learn through real client projects and Chaos Sprints.
          </p>
        </section>

        {/* Content */}
        <section className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Left: Eligibility */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Who is this for</h2>
              <ul className="mt-3 list-disc pl-5 text-white/80">
                <li>Aspiring developers ready to ship</li>
                <li>Analysts moving into AI/ML</li>
                <li>Builders who learn best by doing</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Prerequisites</h3>
              <ul className="mt-3 list-disc pl-5 text-white/80">
                <li>Basic programming comfort</li>
                <li>Weekly time: 12–15 hours</li>
                <li>Reliable internet and laptop</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Application steps</h3>
              <ol className="mt-3 list-decimal pl-5 text-white/80">
                <li>Apply with a short form</li>
                <li>Technical screen (asynchronous)</li>
                <li>Interview</li>
                <li>Offer & onboarding</li>
              </ol>
            </div>
          </div>

          {/* Right: Pricing + Scholarships */}
          <div className="space-y-6">
            <PricingCard />
            <div id="waitlist" className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Scholarships</h3>
              <p className="mt-2 text-sm text-white/80">
                Limited scholarships available. Contact admissions to check eligibility and timelines.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Cohort Size</p>
                <p className="mt-1 font-medium text-white">6–8 learners</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Schedule</p>
                <p className="mt-1 font-medium text-white">Evenings & Weekends</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button href="#" variant="primary">Apply Now</Button>
          <Button href="#waitlist" variant="secondary">Join Waitlist</Button>
        </div>
      </Container>
      <CTA />
    </main>
  )
}
