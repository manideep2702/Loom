import type { Metadata } from 'next'
import Image from 'next/image'
import Container from '../components/Container'
import CTA from '../components/CTA'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'About',
  description: 'Our mission, pedagogy, and teaching model. Based in Hyderabad; global cohorts online.',
  openGraph: { images: [{ url: '/images/og.svg' }] },
  twitter: { card: 'summary_large_image' }
})

export default function AboutPage() {
  return (
    <main className="py-12">
      <Container>
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <img src="/images/logo.svg" alt="Loom Technologies" className="h-4 w-4" />
            <span>About Loom Technologies</span>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">Transformation, not just certification</h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-white/80 md:text-lg">
            We train developers to think, build, and ship under real constraints. Story-driven lessons, real client
            projects, and high-pressure Chaos Sprints prepare you to be production-ready on day one.
          </p>
        </section>

        {/* Visual + Overview */}
        <section className="mt-12 grid items-start gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/images/og.svg"
              alt="Loom Technologies overview"
              width={1200}
              height={630}
              className="h-auto w-full"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-white/80">
              We bridge the gap between learning and doing. Our cohorts simulate real delivery environments, pairing
              technical depth with communication, estimation, and stakeholder management.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/80 md:max-w-md">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Founded</p>
                <p className="mt-1 font-medium text-white">2024</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Base</p>
                <p className="mt-1 font-medium text-white">Hyderabad, India</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Cohort Size</p>
                <p className="mt-1 font-medium text-white">6–8 learners</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Mode</p>
                <p className="mt-1 font-medium text-white">Live, online</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pedagogy */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Story-driven pedagogy</h2>
          <p className="mt-2 text-white/80">Real scenarios → measurable skills → repeatable delivery.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[{
              title: 'Narratives to Practices',
              body: 'Map business stories to engineering tasks, from scoping to delivery.'
            }, {
              title: 'Feedback Loops',
              body: 'Ship weekly, review code live, and iterate fast.'
            }, {
              title: 'Developer Diaries',
              body: 'Reflect on decisions, tradeoffs, and impact.'
            }].map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/80">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Model */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Teaching model</h2>
            <p className="mt-2 text-white/80">How we run cohorts day to day.</p>
          </div>
          <ul className="space-y-3 text-white/80">
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">Team instruction and live code reviews</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">Developer diaries and weekly demos</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">Guest speakers from industry</li>
          </ul>
        </section>

        {/* Location */}
        <section className="mt-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Where we are</h2>
              <p className="mt-2 text-white/80">Based in Hyderabad, India. Global cohorts online.</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80 md:mt-0">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs text-white/60">Timezone</p>
                <p className="mt-1 font-medium text-white">IST (UTC+5:30)</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs text-white/60">Reach us</p>
                <p className="mt-1 font-medium text-white">Email & Phone</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <CTA />
    </main>
  )
}
