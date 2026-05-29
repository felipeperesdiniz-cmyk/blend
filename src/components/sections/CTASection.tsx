'use client'
import { motion } from 'framer-motion'
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
        <motion.p
          className="cta-section__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {resolvedEyebrow}
        </motion.p>

        <motion.h2
          className="cta-section__h2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {resolvedHeading}
        </motion.h2>

        <motion.p
          className="cta-section__sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          {resolvedSub}
        </motion.p>

        <motion.div
          className="cta-section__btns"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}
