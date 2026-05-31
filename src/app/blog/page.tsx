import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import { ARTICLES } from '@/data/articles'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/blog`

export const metadata: Metadata = {
  title: 'Beauty Resource Center | Hair & Beauty Guide | Blend Hair Boutique',
  description:
    'Expert hair and beauty education from the colorists at Blend Hair Boutique in Plantation, FL. Balayage guides, color tips, keratin advice, extension care, and more.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Beauty Resource Center | Blend Hair Boutique',
    description:
      'Expert hair and beauty guides from Blend Hair Boutique in Plantation, Florida. Learn about balayage, color correction, keratin treatments, extensions, and more.',
    url: CANONICAL,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Beauty Resource Center — Blend Hair Boutique',
      description: 'Hair and beauty education from the professionals at Blend Hair Boutique in Plantation, Florida.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Beauty Resource Center', item: CANONICAL },
      ],
    },
  ],
}

const CATEGORY_ORDER = [
  'Balayage & Color',
  'Hair Treatments',
  'Hair Health',
  'Extensions & Styling',
  'Bridal & Events',
  'Salon Tips',
]

function getCategoryColor(category: string) {
  const map: Record<string, string> = {
    'Balayage & Color': 'var(--gold)',
    'Hair Treatments': '#a8c5b5',
    'Hair Health': '#c5b5a8',
    'Extensions & Styling': '#b5a8c5',
    'Bridal & Events': '#c5a8b5',
    'Salon Tips': '#a8b5c5',
  }
  return map[category] || 'var(--gold)'
}

export default function BlogPage() {
  const byCategory = CATEGORY_ORDER.reduce<Record<string, typeof ARTICLES>>((acc, cat) => {
    acc[cat] = ARTICLES.filter((a) => a.category === cat)
    return acc
  }, {})

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Beauty Resource Center · Blend Hair Boutique
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '18ch' }}>
              Your Hair & Beauty<br /><em>Authority Library</em>
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '52ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Expert guidance on balayage, color, smoothing treatments, extensions, hair health, and more — from the certified professionals at Blend Hair Boutique in Plantation, Florida.
            </p>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
              {ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: '1px solid var(--line)',
                    paddingTop: '1.75rem',
                    paddingBottom: '1.75rem',
                  }}
                >
                  <span style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: getCategoryColor(article.category),
                    fontWeight: 500,
                    marginBottom: '0.75rem',
                    fontFamily: 'var(--sans)',
                  }}>
                    {article.category}
                  </span>
                  <h2 style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.35,
                    marginBottom: '0.75rem',
                    color: 'var(--text-1)',
                  }}>
                    {article.title}
                  </h2>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--text-2)',
                    fontWeight: 300,
                    flexGrow: 1,
                    marginBottom: '1rem',
                  }}>
                    {article.excerpt}
                  </p>
                  <span style={{
                    fontSize: '0.78rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 500,
                  }}>
                    Read Article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Browse by Category
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {CATEGORY_ORDER.map((cat) => (
                <span key={cat} style={{ fontSize: '0.8rem', padding: '0.4rem 1.2rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.05em', fontFamily: 'var(--sans)' }}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Ready to Book?
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Knowledge is step one.<br /><em>Experience is the destination.</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book your appointment at Blend Hair Boutique in Plantation, FL — 10035 Cleary Blvd. Our team is ready to bring your hair goals to life.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Online Now</a>
              <Link href="/services" className="btn btn--outline">View All Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
