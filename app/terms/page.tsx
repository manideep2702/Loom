import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import Container from '../(site)/components/Container'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Terms',
  description: 'Terms and conditions for Loom Technologies.',
  openGraph: { images: [{ url: '/images/og.svg' }] },
  twitter: { card: 'summary_large_image' }
})

export default function TermsPage() {
  const file = path.join(process.cwd(), 'content/terms.md')
  const content = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : 'Terms coming soon.'
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold">Terms</h1>
        <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-800">{content}</pre>
      </Container>
    </main>
  )
}

