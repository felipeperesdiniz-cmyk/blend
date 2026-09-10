'use client'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function GiftCardsContent() {
  const { lang } = useLang()
  const t = T[lang].pages.giftCards

  return (
    <div className="page-enter">
      <header className="page-hero page-hero--dark">
        <div className="container hero-layer">
          <p className="eyebrow eyebrow--on-dark">
            {t.heroEyebrow}
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
            {t.heroH1a}<br /><em>{t.heroH1b}</em> {t.heroH1c}
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '50ch', marginTop: '1.5rem', fontWeight: 300 }}>
            {t.heroSub}
          </p>
          <div className="btn-row--start">
            <a href={BUSINESS.giftCardUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
              {t.buyGiftCard}
            </a>
            <a href={BUSINESS.phoneHref} className="btn btn--outline-light">
              {t.callToInquire}
            </a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="gift-experience">
            <div>
              <p className="eyebrow">
                {t.experienceEyebrow}
              </p>
              <h2 className="section-h2">
                {t.experienceH2a}<br /><em>{t.experienceH2b}</em>
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                {t.experienceP1}
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                {t.experienceP2}
              </p>
            </div>
            <div className="gift-experience__imgs">
              <img className="img-cover"
                src="/images/gallery/salon-wine-service.webp"
                alt={T[lang].alt.wineService}
                loading="lazy"
              />
              <img className="img-cover"
                src="/images/gallery/gift-card-blend.webp"
                alt={T[lang].alt.giftCard}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow eyebrow--center">
            {t.chooseEyebrow}
          </p>
          <h2 className="section-h2 section-h2--center">
            {t.chooseH2a}<br /><em>{t.chooseH2b}</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
            {t.services.map((s) => (
              <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit', borderTop: '1px solid var(--line)', paddingTop: '1.5rem', display: 'block' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p className="eyebrow eyebrow--center">
            {t.howEyebrow}
          </p>
          <h2 className="section-h2 section-h2--center">
            {t.howH2a}<br /><em>{t.howH2b}</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
            {t.steps.map((s) => (
              <div key={s.step} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
                <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '0.5rem' }}>{s.step}</p>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p className="eyebrow">
            {t.ctaEyebrow}
          </p>
          <h2 className="section-h2">
            {t.ctaH2a}<br /><em>{t.ctaH2b}</em>
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
            {t.ctaP}
          </p>
          <div className="btn-row">
            <a href={BUSINESS.giftCardUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">{t.buyOnline}</a>
            <Link href="/services" className="btn btn--outline">{t.exploreServices}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
