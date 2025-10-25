import type { Metadata } from 'next'
import Container from '../components/Container'
import CTA from '../components/CTA'
import Contact2Client from '../components/Contact2Client'
import { siteConfig } from '@/site.config'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Contact',
  description: 'Reach out to Loom Technologies admissions in Hyderabad, India.',
  openGraph: { images: [{ url: '/images/og.svg' }] },
  twitter: { card: 'summary_large_image' }
})

export default function ContactPage() {
  return (
    <main className="py-12">
      <Container>
        <section>
          <Contact2Client
            title="Contact Us"
            description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
            phone={'+91-8367014569'}
            email={'manideepx@gmail.com'}
            web={{ label: new URL(siteConfig.url).host, url: siteConfig.url }}
          />
        </section>
      </Container>
      <CTA />
    </main>
  )
}
