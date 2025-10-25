import type { Metadata } from 'next'
import Container from '../components/Container'
import FAQ, { type FAQItem } from '../components/FAQ'
import CTA from '../components/CTA'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'FAQ',
  description: 'Answers to common questions about cohorts, live sessions, time commitments, placement, refunds, and tools.',
  openGraph: { images: [{ url: '/images/og.svg' }] },
  twitter: { card: 'summary_large_image' }
})

const items: FAQItem[] = [
  { id: 'cohorts', q: 'How big are cohorts?', a: 'Small: 6–8 learners for high engagement.' },
  { id: 'live', q: 'Are sessions live or recorded?', a: 'Live and interactive. Recordings available for review.' },
  { id: 'time', q: 'Time commitment per week?', a: 'Plan for 12–15 hours including projects.' },
  { id: 'placement', q: 'Do you offer placement?', a: 'We focus on portfolio, Demo Day, and partner intros.' },
  { id: 'refunds', q: 'What is the refund policy?', a: 'Simple: fair, transparent, and case-by-case (placeholder).' },
  { id: 'tools', q: 'What tools are used?', a: 'Python, SQL, Next.js, notebooks, and common ML libraries.' },
  { id: 'projects', q: 'Will I build real projects?', a: 'Yes. Real client briefs and portfolio-ready work.' },
  { id: 'chaos', q: 'What are Chaos Sprints?', a: 'Short simulations of incidents to practice ops under pressure.' },
  { id: 'reviews', q: 'Do you do code reviews?', a: 'Weekly reviews with detailed feedback and action items.' },
  { id: 'timezone', q: 'What time zone?', a: 'IST-friendly schedule. Global cohorts welcome.' }
]

export default function FAQPage() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold">FAQ</h1>
        <div className="mt-6">
          <FAQ items={items} />
        </div>
      </Container>
      <CTA />
    </main>
  )
}
