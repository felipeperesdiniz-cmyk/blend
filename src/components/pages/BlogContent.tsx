'use client'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import { ARTICLES } from '@/data/articles'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

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
    'Balayage & Color': 'var(--gold-dk)',
    'Hair Treatments': '#687a70',
    'Hair Health': '#7e736b',
    'Extensions & Styling': '#7c7387',
    'Bridal & Events': '#837079',
    'Salon Tips': '#6e7782',
  }
  return map[category] || 'var(--gold-dk)'
}

export default function BlogContent() {
  const { lang } = useLang()
  const t = T[lang].pages.blog

  return (
    <div className="page-enter">
      <header className="page-hero page-hero--dark">
        <div className="container hero-layer">
          <p className="eyebrow eyebrow--on-dark">
            {t.eyebrow}
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem, 4vw, 4.4rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '18ch' }}>
            {t.h1Line1}<br /><em>{t.h1Line2}</em>
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '52ch', marginTop: '1.5rem', fontWeight: 300 }}>
            {t.sub}
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
                  {t.categories[article.category as keyof typeof t.categories] ?? article.category}
                </span>
                <h2 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.35,
                  marginBottom: '0.75rem',
                  color: 'var(--text)',
                }}>
                  {article.title}
                </h2>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-2)',
                  fontWeight: 300,
                  flexGrow: 1,
                  marginBottom: '1rem',
                }}>
                  {article.excerpt}
                </p>
                <span style={{
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-dk)',
                  fontWeight: 500,
                }}>
                  {t.readArticle}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p className="eyebrow eyebrow--center">
            {t.browseByCategory}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {CATEGORY_ORDER.map((cat) => (
              <span key={cat} style={{ fontSize: '0.88rem', padding: '0.4rem 1.2rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.05em', fontFamily: 'var(--sans)' }}>
                {t.categories[cat as keyof typeof t.categories] ?? cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p className="eyebrow">
            {t.readyToBook}
          </p>
          <h2 className="section-h2">
            {t.ctaH2Line1}<br /><em>{t.ctaH2Line2}</em>
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
            {t.ctaSub}
          </p>
          <div className="btn-row">
            <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">{t.bookOnline}</a>
            <Link href="/services" className="btn btn--outline">{t.viewAllServices}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
