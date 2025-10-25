import type { Metadata } from 'next'
import Container from '../components/Container'
import Timeline from '../components/Timeline'
import Button from '../components/Button'
import CTA from '../components/CTA'
import SyllabusList from '../components/SyllabusList'
import { courseJsonLd } from '@/lib/schema'
import { BookOpen, Clock, Users, FileText } from 'lucide-react'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Curriculum',
  description: 'Week-by-week 16-week program: Python, DS, ML, DL, GenAI, Capstone.',
  openGraph: { images: [{ url: '/images/og.svg' }] },
  twitter: { card: 'summary_large_image' }
})

export default function CurriculumPage() {
  return (
    <main className="py-12">
      <Container>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd()) }}
        />

        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span>Curriculum</span>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">16‑week job‑ready program</h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-white/80 md:text-lg">
            Python → Data Science → Machine Learning → Deep Learning → Generative AI. Live instruction, code reviews,
            developer diaries, and guest speakers — all leading to a production capstone and Demo Day.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/admissions" variant="primary">Apply Now</Button>
            <Button href="#sample-syllabus" variant="secondary">Download Sample Syllabus</Button>
          </div>
        </section>

        {/* Program Snapshot */}
        <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={BookOpen} title="Format" desc="Live & interactive with weekly demos" />
          <InfoCard icon={Clock} title="Schedule" desc="16 weeks, evenings + weekends" />
          <InfoCard icon={Users} title="Cohorts" desc="Small groups of 6–8 learners" />
        </section>

        <section className="mt-12">
          <div className="grid gap-6">
            <SyllabusList />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Week-by-Week Outline</h2>
          <div className="mt-4">
            <Timeline />
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Capstone & Grading</h2>
          </div>
          <ul className="mt-3 list-disc pl-5 text-white/80">
            <li>Real problem, real users; clear scope and MVP.</li>
            <li>Rubric: technical depth, reliability, product clarity, and delivery.</li>
            <li>Weekly demo checks; final pitch at Demo Day.</li>
          </ul>
          <div id="sample-syllabus" className="mt-4">
            <Button href="#" variant="secondary">Download Sample Syllabus (PDF)</Button>
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
