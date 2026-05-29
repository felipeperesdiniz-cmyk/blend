import Link from 'next/link'
import { BUSINESS } from '@/data/constants'

export default function NotFound() {
  return (
    <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem var(--gutter)' }}>
      <div>
        <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
          Page Not Found
        </p>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          <em>This page doesn&apos;t exist</em>
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: '40ch', margin: '0 auto 2.5rem' }}>
          The page you&apos;re looking for has moved or doesn&apos;t exist.
          Visit our homepage or book directly online.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn--primary">Back to Home</Link>
          <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            Book Online
          </a>
        </div>
      </div>
    </main>
  )
}
