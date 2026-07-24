'use client'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'
import {
  FAQ_T,
  FAQ_ANCHORS,
  FAQ_LINKS,
  FAQ_SECTION_KEYS,
  FAQ_SERVICE_LINKS,
} from '@/data/faq'

const EYEBROW_STYLE = { fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' as const }
const HEADING_STYLE = { fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.75rem', textAlign: 'center' as const }
const LINK_STYLE = { fontSize: '0.88rem', color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 500 }

export default function FAQContent() {
  const { lang } = useLang()
  const t = FAQ_T[lang]

  return (
    <div className="page-enter">
      <header className="page-hero page-hero--beige">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
            {t.hero.eyebrow}
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem, 4vw, 4.4rem)', fontWeight: 300, color: 'var(--ink)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
            {t.hero.heading} <em>{t.hero.em}</em>
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: '50ch', marginTop: '1.5rem', fontWeight: 300 }}>
            {t.hero.intro}
          </p>

          {/* Jump nav */}
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {FAQ_SECTION_KEYS.map((key) => (
              <a
                key={key}
                href={`#${FAQ_ANCHORS[key]}`}
                style={{ fontSize: '0.85rem', padding: '0.35rem 0.9rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'var(--sans)', fontWeight: 500 }}
              >
                {t.sections[key].eyebrow}
              </a>
            ))}
          </div>
        </div>
      </header>

      {FAQ_SECTION_KEYS.map((key, i) => {
        const section = t.sections[key]
        const href = FAQ_LINKS[key]
        const isExternal = href.startsWith('http')

        return (
          <section key={key} className={i % 2 === 0 ? 'section' : 'section section--beige'} id={FAQ_ANCHORS[key]}>
            <div className="container" style={{ maxWidth: '820px' }}>
              <p style={EYEBROW_STYLE}>{section.eyebrow}</p>
              <h2 style={HEADING_STYLE}>
                {section.heading} <em>{section.em}</em>
              </h2>
              <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
                {isExternal ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
                    {section.linkLabel} →
                  </a>
                ) : (
                  <Link href={href} style={LINK_STYLE}>
                    {section.linkLabel} →
                  </Link>
                )}
              </p>
              <ServiceFAQ faqs={section.faqs} />
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>{t.cta.eyebrow}</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            {t.cta.heading} <em>{t.cta.em}</em>
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
            {t.cta.body}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">{t.cta.book}</a>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--outline">{t.cta.whatsapp}</a>
          </div>
        </div>
      </section>

      {/* Quick links to service pages */}
      <section className="section section--beige">
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>{t.explore.eyebrow}</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '2.5rem', textAlign: 'center' }}>
            {t.explore.heading} <em>{t.explore.em}</em>
          </h2>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {FAQ_SERVICE_LINKS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.05em', transition: 'border-color 0.2s, color 0.2s', textDecoration: 'none' }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
