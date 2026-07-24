'use client'
import { motion } from 'framer-motion'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

const fadeUp = (delay: number) => ({
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay } },
})

const fadeIn = (delay: number) => ({
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.0, ease: 'easeOut', delay } },
})

export default function HeroSection() {
  const { lang } = useLang()
  const t = T[lang].hero

  return (
    <section className="hero" aria-label="Hero">
      {/* Cinematic background with slow Ken Burns */}
      <div className="hero__bg">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/hero-interior-mobile.webp"
            type="image/webp"
          />
          <source srcSet="/hero-interior.webp" type="image/webp" />
          <img
            src="/hero-interior.jpg"
            alt="Blend Hair Boutique — luxury salon interior in Plantation, Florida"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            width={1586}
            height={992}
          />
        </picture>
      </div>

      {/* Atmospheric overlay — heavier left and bottom */}
      <div className="hero__overlay" aria-hidden />

      {/* Main content — bottom-anchored */}
      <div className="hero__content">
        <div className="hero__main">

          <motion.div
            className="hero__eyebrow"
            variants={fadeIn(0.2)}
            initial="hidden"
            animate="visible"
          >
            {t.eyebrow}
          </motion.div>

          <motion.h1
            className="hero__h1"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
          >
            <span className="hero__h1-float">
              {t.h1[0]}<br />
              {t.h1[1]}{' '}
              <em>{t.h1[2]}</em>
            </span>
          </motion.h1>

          <motion.p
            className="hero__sub"
            variants={fadeIn(0.5)}
            initial="hidden"
            animate="visible"
          >
            {t.sub}
          </motion.p>

          {/* Inline trust signal */}
          <motion.div
            className="hero__trust"
            variants={fadeIn(0.6)}
            initial="hidden"
            animate="visible"
          >
            <span className="hero__trust-stars">★ ★ ★ ★ ★</span>
            <span className="hero__trust-label">{t.badge}</span>
          </motion.div>

          <motion.div
            className="hero__ctas"
            variants={fadeIn(0.7)}
            initial="hidden"
            animate="visible"
          >
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn--hero-primary"
            >
              {t.cta1}
            </a>
            <a href={BUSINESS.phoneHref} className="btn--hero-ghost">
              {t.cta2}
            </a>
          </motion.div>
        </div>

        {/* Vertical editorial aside */}
        <div className="hero__aside" aria-hidden>
          <span className="hero__rating-text">{t.badgeSub}</span>
          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  )
}
