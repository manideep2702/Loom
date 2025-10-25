import { Contact2 } from '@/components/ui/contact-2'

export default function Contact2DemoPage() {
  return (
    <Contact2
      title="Contact Us"
      description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
      phone="+91-8367014569"
      email="manideepx@gmail.com"
      web={{ label: 'loomtech.example', url: 'https://loomtech.example' }}
    />
  )
}

