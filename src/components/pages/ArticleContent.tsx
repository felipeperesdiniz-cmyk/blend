'use client'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import { ARTICLES, type Article } from '@/data/articles'
import ServiceFAQ from '@/components/ServiceFAQ'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

interface Props {
  article: Article
  schema: object
}

export default function ArticleContent({ article, schema }: Props) {
  const { lang } = useLang()
  const t = T[lang].pages.blogArticle
  const tBlog = T[lang].pages.blog

  const date = new Date(article.publishedAt).toLocaleDateString(
    lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-US' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  const related = ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3)
  const others = related.length < 3
    ? [...related, ...ARTICLES.filter((a) => a.slug !== article.slug && a.category !== article.category).slice(0, 3 - related.length)]
    : related

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '860px' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <Link href="/blog" style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 400, textDecoration: 'none' }}>
                {t.breadcrumb}
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>›</span>
              <span style={{ fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
                {tBlog.categories[article.category as keyof typeof tBlog.categories] ?? article.category}
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4.5vw, 4rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.5rem' }}>
              {article.title}
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.3vw, 1.05rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '54ch', fontWeight: 300, marginBottom: '1.5rem' }}>
              {article.excerpt}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', fontFamily: 'var(--sans)' }}>
              {t.byLine} {date}
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
              <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>
                {t.atBlend}
              </p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
                {t.relatedServices}
              </h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {article.relatedServices.map((s) => (
                  <Link key={s.href} href={s.href} className="btn btn--outline" style={{ fontSize: '0.9rem' }}>
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
              <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>{t.faqLabel}</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
                {t.commonQuestions}
              </h2>
              <ServiceFAQ faqs={article.faqs} />
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className="section">
            <div className="container" style={{ maxWidth: '780px' }}>
              <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>
                {t.beautyResourceCenter}
              </p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
                {t.moreFromExperts.includes("Blend's") ? (
                  <>More from <em>Blend&apos;s Experts</em></>
                ) : (
                  <em>{t.moreFromExperts}</em>
                )}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {others.map((a) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit', borderTop: '1px solid var(--line)', paddingTop: '1.25rem', display: 'block' }}>
                    <p style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '0.4rem', fontFamily: 'var(--sans)' }}>
                      {tBlog.categories[a.category as keyof typeof tBlog.categories] ?? a.category}
                    </p>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 400, color: 'var(--text-1)', marginBottom: '0.4rem' }}>{a.title}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', fontWeight: 300, lineHeight: 1.6 }}>{a.excerpt}</p>
                  </Link>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/blog" className="btn btn--outline" style={{ fontSize: '0.9rem' }}>{t.allArticles}</Link>
              </div>
            </div>
          </section>
        )}

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '780px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>
              {t.reviewsLine}
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              {t.ctaH2Line1}<br /><em>{t.ctaH2Line2}</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              {t.ctaSub}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">{t.bookOnline}</a>
              <Link href="/blog" className="btn btn--outline">{t.moreResources}</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
