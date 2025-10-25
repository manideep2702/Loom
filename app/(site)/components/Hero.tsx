import Container from './Container'
import Button from './Button'

export default function Hero() {
  return (
    <section className="hero-gradient border-b border-gray-100">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Transform Your Skills. Build Your Future.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Become a job-ready developer through story-driven, real-world tech bootcamps.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/admissions" variant="primary" ariaLabel="Apply Now">
              Apply Now
            </Button>
            <Button href="/admissions#waitlist" variant="secondary" ariaLabel="Join Waitlist">
              Join Waitlist
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

