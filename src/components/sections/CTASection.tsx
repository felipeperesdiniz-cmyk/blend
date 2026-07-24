'use client'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

interface Props {
  eyebrow?: string
  heading?: string
  sub?: string
  bookLabel?: string
  secondLabel?: string
  secondHref?: string
}

export default function CTASection({
  eyebrow,
  heading,
  sub,
  bookLabel,
  secondLabel,
  secondHref = '/contact',
}: Props) {
  const { lang } = useLang()
  const t = T[lang].cta

  const resolvedEyebrow   = eyebrow     ?? t.eyebrow
  const resolvedHeading   = heading     ?? t.h2
  const resolvedSub       = sub         ?? t.sub
  const resolvedBookLabel = bookLabel   ?? t.book
  const resolvedSecondary = secondLabel ?? t.secondary

  return (
    <section className="cta-section">
      <div className="cta-section__bg" aria-hidden />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="cta-section__eyebrow fade-in-up">
          {resolvedEyebrow}
        </p>

        <h2 className="cta-section__h2 fade-in-up" style={{ animationDelay: '0.08s' }}>
          {resolvedHeading}
        </h2>

        <p className="cta-section__sub fade-in-up" style={{ animationDelay: '0.16s' }}>
          {resolvedSub}
        </p>

        <div className="cta-section__btns fade-in-up" style={{ animationDelay: '0.24s' }}>
          <a
            href={BUSINESS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--cta-gold"
          >
            {resolvedBookLabel}
          </a>
          <Link href={secondHref} className="btn btn--outline-light">
            {resolvedSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
