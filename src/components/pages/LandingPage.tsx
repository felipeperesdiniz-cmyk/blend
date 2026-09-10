'use client'
import Link from 'next/link'
import { BUSINESS, REVIEW_LINE } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import ServiceFAQ from '@/components/ServiceFAQ'
import { AREAS_SERVED, type LandingCopy, type LandingShared } from '@/data/landing/types'

/**
 * Renders one SEO landing page from its copy.
 *
 * The English originals hand-built this same sequence twenty times. Everything
 * here is the canonical order those pages converged on: hero, prose with an
 * image, an optional card grid, the areas-served strip, the FAQ, and a closing
 * CTA. Pages without a card grid omit it.
 */
export default function LandingPage({
  copy, shared, image,
}: { copy: LandingCopy; shared: LandingShared; image: string }) {
  const { lang } = useLang()

  return (
    <div className="page-enter">
      <header className="page-hero page-hero--dark">
        <div className="container hero-layer">
          <p className="eyebrow eyebrow--on-dark">{shared.heroEyebrow}</p>
          <h1 className="landing__h1">
            {copy.h1a}<br /><em>{copy.h1b}</em>
          </h1>
          <p className="landing__lede">{copy.heroIntro}</p>
          <div className="btn-row--start">
            <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
              {copy.bookLabel}
            </a>
            <a href={BUSINESS.phoneHref} className="btn btn--outline-light">
              {shared.callLabel}
            </a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container container--narrow">
          <div className="landing__split">
            <div>
              <p className="eyebrow">{copy.proseEyebrow}</p>
              <h2 className="section-h2">
                {copy.proseH2a}<br /><em>{copy.proseH2b}</em>
              </h2>
              {copy.prose.map((p, i) => (
                <p key={i} className="landing__prose">{p}</p>
              ))}
            </div>
            <div className="landing__figure">
              <img className="img-cover" src={image} alt={copy.imageAlt} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {copy.cards?.length ? (
        <section className="section section--beige">
          <div className="container container--narrow">
            <p className="eyebrow eyebrow--center">{copy.cardsEyebrow}</p>
            <h2 className="section-h2 section-h2--center">
              {copy.cardsH2a} <em>{copy.cardsH2b}</em>
            </h2>
            <div className="landing__cards">
              {copy.cards.map((c) => (
                <div key={c.title} className="landing__card">
                  <h3 className="landing__card-title">{c.title}</h3>
                  <p className="landing__card-body">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container container--narrow">
          <p className="eyebrow eyebrow--center">{shared.areasEyebrow}</p>
          <h2 className="section-h2 section-h2--center">
            {shared.areasH2a} <em>{shared.areasH2b}</em>
          </h2>
          <p className="landing__areas-body">{shared.areasBody}</p>
          <div className="landing__chips">
            {AREAS_SERVED.map((city) => (
              <span key={city} className="landing__chip">{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--beige" id="faq">
        <div className="container container--prose">
          <p className="eyebrow eyebrow--center">{shared.faqEyebrow}</p>
          <h2 className="section-h2 section-h2--center">
            {copy.faqH2a} <em>{copy.faqH2b}</em>
          </h2>
          <ServiceFAQ faqs={copy.faqs} />
        </div>
      </section>

      <section className="section">
        <div className="container container--prose-center">
          <p className="eyebrow eyebrow--center">{REVIEW_LINE[lang]}</p>
          <h2 className="section-h2 section-h2--center">
            {copy.ctaH2a}<br /><em>{copy.ctaH2b}</em>
          </h2>
          <p className="landing__cta-body">{shared.ctaBody}</p>
          <div className="btn-row">
            <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              {copy.bookLabel}
            </a>
            <Link href="/services" className="btn btn--outline">{shared.viewAllServices}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
