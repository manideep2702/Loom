import type { Metadata } from 'next'
import Container from '../components/Container'
import Button from '../components/Button'
import CTA from '../components/CTA'
import { Calendar, Clock, MonitorPlay, MessageSquare, Handshake, Users } from 'lucide-react'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Demo Day',
  description: 'Reverse recruitment: hiring partners see capstones first. Partner with Loom.',
  openGraph: { images: [{ url: '/images/og.svg' }] },
  twitter: { card: 'summary_large_image' }
})

export default function DemoDayPage() {
  return (
    <main className="py-12">
      <Container>
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span>Demo Day</span>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">Reverse recruitment, real work</h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-white/80 md:text-lg">
            Hiring partners meet deployable developers and review production-grade capstones first. Evaluate shipped work,
            not resumes.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="mailto:partners@loomtech.example" variant="primary">Become a Hiring Partner</Button>
            <Button href="/curriculum" variant="secondary">See Curriculum</Button>
          </div>
        </section>

        {/* Details Grid */}
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {/* How it works */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <InfoCard icon={MonitorPlay} title="Capstone Demos" desc="Teams present production-grade projects with live walkthroughs." />
              <InfoCard icon={MessageSquare} title="Q&A" desc="Deep dives with instructors, reviewers, and peers." />
              <InfoCard icon={Handshake} title="Intros" desc="Partner introductions and follow-ups after sessions." />
            </div>
          </div>

          {/* Schedule */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Schedule</h3>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Quarterly, last Saturday</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10:00–13:00 IST (virtual)</p>
              <p className="flex items-center gap-2"><Users className="h-4 w-4" /> Cohorts: 6–8 learners per team</p>
            </div>
          </div>
        </section>

        {/* Tracks */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Capstone tracks</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-white/80">
            {['Full‑stack Web Apps','AI/ML Prototypes','Data Pipelines','GenAI + RAG','DevOps Tooling','Internal Dashboards'].map((t) => (
              <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4">{t}</div>
            ))}
          </div>
        </section>

        {/* Partner CTA */}
        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Partner with Loom</h3>
            <p className="mt-2 text-white/80 text-sm">Get first look at capable developers trained for production.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button href="mailto:partners@loomtech.example" variant="primary">Request Invite</Button>
          </div>
        </section>
      </Container>
      <CTA />
    </main>
  )
}

function InfoCard({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-white/80">{desc}</p>
    </div>
  )
}
