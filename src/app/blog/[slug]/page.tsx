import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import { ARTICLES } from '@/data/articles'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) return {}
  const canonical = `${SITE_URL}/blog/${slug}`
  return {
    title: `${article.title} | Blend Hair Boutique`,
    description: article.excerpt,
    alternates: { canonical },
    openGraph: {
      title: `${article.title} | Blend Hair Boutique`,
      description: article.excerpt,
      url: canonical,
      type: 'article',
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  const canonical = `${SITE_URL}/blog/${slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonical}#article`,
        headline: article.title,
        description: article.excerpt,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        image: `${SITE_URL}/og-image.jpg`,
        author: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#business`,
          name: 'Blend Hair Boutique',
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#business`,
          name: 'Blend Hair Boutique',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.png`,
          },
        },
        mainEntityOfPage: { '@id': `${canonical}#webpage` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: `${article.title} | Blend Hair Boutique`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonical}#faq`,
        mainEntity: article.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Beauty Resource Center', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
        ],
      },
    ],
  }

  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '860px' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <Link href="/blog" style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 400, textDecoration: 'none' }}>
                Beauty Resource Center
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
                {article.category}
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4.5vw, 4rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.5rem' }}>
              {article.title}
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.3vw, 1.05rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '54ch', fontWeight: 300, marginBottom: '1.5rem' }}>
              {article.excerpt}
            </p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', fontFamily: 'var(--sans)' }}>
              By Blend Hair Boutique · Plantation, FL · {date}
            </p>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '780px' }}>
            <article>
              {article.sections.map((section, i) => (
                <div key={i} style={{ marginBottom: section.heading ? '2.5rem' : '1.5rem' }}>
                  {section.heading && (
                    <h2 style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      marginBottom: '1rem',
                      marginTop: i > 0 ? '2.5rem' : 0,
                      color: 'var(--text-1)',
                    }}>
                      {section.heading}
                    </h2>
                  )}
                  <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-2)', fontWeight: 300 }}>
                    {section.body}
                  </p>
                </div>
              ))}
            </article>
          </div>
        </section>

        {article.relatedServices.length > 0 && (
          <section className="section section--beige">
            <div className="container" style={{ maxWidth: '780px' }}>
              <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
                At Blend Hair Boutique
              </p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
                Related Services
              </h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {article.relatedServices.map((s) => (
                  <Link key={s.href} href={s.href} className="btn btn--outline" style={{ fontSize: '0.85rem' }}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {article.faqs.length > 0 && (
          <section className="section" id="faq">
            <div className="container" style={{ maxWidth: '780px' }}>
              <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>FAQ</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
                Common Questions
              </h2>
              <ServiceFAQ faqs={article.faqs} />
            </div>
          </section>
        )}

        {(() => {
          const related = ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3)
          const others = related.length < 3
            ? [...related, ...ARTICLES.filter((a) => a.slug !== article.slug && a.category !== article.category).slice(0, 3 - related.length)]
            : related
          return others.length > 0 ? (
            <section className="section">
              <div className="container" style={{ maxWidth: '780px' }}>
                <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
                  Beauty Resource Center
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
                  More from <em>Blend's Experts</em>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {others.map((a) => (
                    <Link key={a.slug} href={`/blog/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit', borderTop: '1px solid var(--line)', paddingTop: '1.25rem', display: 'block' }}>
                      <p style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.4rem', fontFamily: 'var(--sans)' }}>{a.category}</p>
                      <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 400, color: 'var(--text-1)', marginBottom: '0.4rem' }}>{a.title}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', fontWeight: 300, lineHeight: 1.6 }}>{a.excerpt}</p>
                    </Link>
                  ))}
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <Link href="/blog" className="btn btn--outline" style={{ fontSize: '0.85rem' }}>All Articles →</Link>
                </div>
              </div>
            </section>
          ) : null
        })()}

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '780px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              4.9 ★ · 1,218 Google Reviews · Plantation, FL
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Ready to book at<br /><em>Blend Hair Boutique?</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              10035 Cleary Blvd, Plantation, FL 33324 · Book online 24/7 or call (754) 206-3501.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Online</a>
              <Link href="/blog" className="btn btn--outline">More Resources</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
