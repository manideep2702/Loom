import type { Metadata } from 'next'
import { siteConfig } from '@/site.config'
import Container from './components/Container'
import { Web3HeroAnimated } from '@/components/ui/animated-web3-landing-page'
import FeatureList from './components/FeatureList'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { Users, Zap, GraduationCap, Briefcase, Bug, Rocket } from 'lucide-react'
import { curriculum } from './data/curriculum'
// import Timeline from './components/Timeline'
import { Timeline as MotionTimeline } from '@/components/ui/timeline'
import CohortCard from './components/CohortCard'
import CTA from './components/CTA'
import { cohorts } from './data/cohorts'
import dynamic from 'next/dynamic'
const Gallery4 = dynamic(() => import('@/components/ui/gallery4').then(m => m.Gallery4), { ssr: false })
const UpcomingCohorts = dynamic(() => import('./components/UpcomingCohorts'), { ssr: false })

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Transform Your Skills. Build Your Future.',
  description: siteConfig.description,
  openGraph: { images: [{ url: siteConfig.ogImage }] },
  twitter: { card: 'summary_large_image' }
})

const differentiators = [
  { title: 'Small cohorts (6–8)', body: 'High engagement and personalized support.', icon: 'Users' as const },
  { title: 'Live, interactive', body: 'Never pre-recorded; ask and build in real-time.', icon: 'Bolt' as const },
  { title: 'Story-driven pedagogy', body: 'Real business scenarios that map to skills.', icon: 'AcademicCap' as const },
  { title: 'Real client projects', body: 'Create a portfolio that gets you hired.', icon: 'Presentation' as const },
  { title: 'Chaos Sprints', body: 'Simulated production crises under pressure.', icon: 'Puzzle' as const },
  { title: 'Industry-aligned', body: 'Reverse-recruitment Demo Day with partners.', icon: 'Rocket' as const }
]

export default function HomePage() {
  return (
    <main>
      <Web3HeroAnimated />

      <section className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Why Loom</h2>
            <p className="mt-3 text-lg sm:text-xl text-white/80">Transformation, not just certification.</p>
          </div>
          <div className="mt-6">
            <BentoGrid className="lg:grid-rows-2">
              <BentoCard
                Icon={Users}
                name="Small cohorts (6–8)"
                description="High engagement and personalized support."
                href="/admissions"
                cta="Learn more"
                background={<img alt="background" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-20" />}
                className="lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2"
              />
              <BentoCard
                Icon={Zap}
                name="Live, interactive"
                description="Never pre-recorded; ask and build in real-time."
                href="/about"
                cta="See format"
                background={<img alt="background" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop" className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20" />}
                className="lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-2"
              />
              <BentoCard
                Icon={GraduationCap}
                name="Story-driven pedagogy"
                description="Real business scenarios that map to skills."
                href="/about"
                cta="How we teach"
                background={<img alt="background" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop" className="absolute -right-16 -top-20 h-48 w-48 rounded-full opacity-20" />}
                className="lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-3"
              />
              <BentoCard
                Icon={Briefcase}
                name="Real client projects"
                description="Create a portfolio that gets you hired."
                href="/curriculum"
                cta="View work"
                background={<img alt="background" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20" />}
                className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
              />
              <BentoCard
                Icon={Bug}
                name="Chaos Sprints"
                description="Simulated production crises under pressure."
                href="#chaos-sprints"
                cta="See sprints"
                background={<img alt="background" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" className="absolute -right-16 -top-20 h-48 w-48 rounded-full opacity-20" />}
                className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3"
              />
              <BentoCard
                Icon={Rocket}
                name="Industry-aligned"
                description="Reverse-recruitment Demo Day with partners."
                href="/demo-day"
                cta="Partner info"
                background={<img alt="background" src="https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop" className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20" />}
                className="lg:col-start-1 lg:col-end-4 lg:row-start-3 lg:row-end-4 hidden lg:flex"
              />
            </BentoGrid>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="mt-6">
            <MotionTimeline
              heading="Program Snapshot"
              subheading="16 weeks: Python → DS → ML → DL → GenAI → Capstone"
              data={curriculum.map((w) => ({
                title: `Week ${w.week}: ${w.title}`,
                content: (
                  <div>
                    <div className="text-white/80 text-sm md:text-base">
                      <div className="mb-2"><span className="font-medium text-white">Lab:</span> {w.lab}</div>
                      <div className="mb-4"><span className="font-medium text-white">Outcomes:</span> {w.outcomes.join(', ')}</div>
                    </div>
                  </div>
                )
              }))}
            />
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Gallery4
            title="Real Projects"
            description="Build a portfolio that gets you hired."
            items={[
              {
                id: 'project-1',
                title: 'Model UI — Customer Churn Predictor',
                description: 'Ship a responsive Next.js interface for a churn classification model with confidence charts and what-if controls.',
                href: '/curriculum',
                image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop'
              },
              {
                id: 'project-2',
                title: 'RAG QA — Domain Knowledge Base',
                description: 'Implement a retrieval-augmented QA system with vector search, prompt tracing, and evaluation dashboards.',
                href: '/curriculum',
                image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'
              },
              {
                id: 'project-3',
                title: 'ETL → Data App — Mini Pipeline',
                description: 'Build a CSV→SQLite ETL with Airflow-lite and expose insights in a minimalist data app.',
                href: '/curriculum',
                image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop'
              },
              {
                id: 'project-4',
                title: 'Chaos Sprint — Incident Response',
                description: 'Runbooks, dashboards, and postmortem for a simulated production outage. Practice under pressure.',
                href: '/curriculum',
                image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop'
              }
            ]}
          />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="card p-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">Chaos Sprints</h3>
              <p className="text-white/80">Short, high-pressure simulations of production incidents.</p>
            </div>
            <a className="text-sm font-semibold text-white underline" href="#chaos-sprints">See How It Works</a>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Upcoming Cohorts</h2>
            <p className="mt-2 text-white/80">Pick a start date that fits your schedule.</p>
          </div>
          <div className="mt-8">
            <UpcomingCohorts />
          </div>
        </Container>
      </section>


      <CTA />
    </main>
  )
}
