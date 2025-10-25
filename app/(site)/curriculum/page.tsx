import type { Metadata } from 'next'
import Container from '../components/Container'
import Timeline from '../components/Timeline'
import Button from '../components/Button'
import CTA from '../components/CTA'
import WeekDetail from '../components/WeekDetail'
import SyllabusList from '../components/SyllabusList'
import { courseJsonLd } from '@/lib/schema'

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

        <h1 className="text-3xl font-bold">Curriculum</h1>
        <p className="mt-3 text-white/80">
          A focused 16-week journey: Python → Data Science → Machine Learning → Deep Learning → Generative AI.
          Built around live instruction, weekly code reviews, developer diaries, and guest speakers.
        </p>

        <section className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <WeekDetail />
            </div>
            <div className="md:col-span-1">
              <SyllabusList />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Week-by-Week Outline</h2>
          <div className="mt-4">
            <Timeline />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Capstone & Grading</h2>
          <ul className="mt-3 list-disc pl-5 text-white/80">
            <li>Real problem, real users; clear scope and MVP.</li>
            <li>Rubric: technical depth, reliability, product clarity, and delivery.</li>
            <li>Weekly demo checks; final pitch at Demo Day.</li>
          </ul>
          <div className="mt-4">
            <Button href="#" variant="secondary">Download Sample Syllabus (PDF)</Button>
          </div>
        </section>
      </Container>
      <CTA />
    </main>
  )
}
