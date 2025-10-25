import Container from './Container'
import Button from './Button'

export default function CTA() {
  return (
    <section className="mt-16">
      <Container>
        <div className="card p-8 text-center">
          <h3 className="text-2xl font-semibold text-white">Show your work. Ship your value.</h3>
          <p className="mt-2 text-white/80">Meet hiring partners at Demo Day.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/admissions" variant="primary">Apply Now</Button>
            <Button href="/admissions#waitlist" variant="secondary">Join Waitlist</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
