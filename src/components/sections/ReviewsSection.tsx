'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function ReviewsSection() {
  const { lang } = useLang()
  const t = T[lang].reviews
  const reviewsData = T[lang].reviewsData

  const [featured, ...secondary] = reviewsData

  return (
    <section className="section section--parchment" id="reviews">
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <SectionHeader
            eyebrow={t.eyebrow}
            h2={<>{t.h2a}<em>{t.h2b}</em></>}
            center
          />
        </div>

        {/* Featured review — editorial pullquote */}
        <motion.div
          className="review-featured"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="review-featured__stars" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={11} fill="currentColor" />
            ))}
          </div>
          <blockquote className="review-featured__quote">
            "{featured.quote}"
          </blockquote>
          <div className="review-featured__author">
            <span className="review-featured__name">{featured.author}</span>
            <span className="review-featured__divider" aria-hidden>·</span>
            <span className="review-featured__service">{featured.service}</span>
          </div>
        </motion.div>

        {/* Secondary reviews */}
        <div className="reviews-secondary">
          {secondary.map((r, i) => (
            <motion.article
              key={i}
              className="review-secondary__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
            >
              <div className="review-secondary__stars" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={9} fill="currentColor" />
                ))}
              </div>
              <blockquote className="review-secondary__quote">"{r.quote}"</blockquote>
              <div className="review-secondary__footer">
                <div className="review-secondary__avatar">{r.author.charAt(0)}</div>
                <div>
                  <cite className="review-secondary__name">{r.author}</cite>
                  <span className="review-secondary__service">{r.service}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Google rating strip */}
        <motion.div
          className="reviews-rating-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="reviews-rating-strip__stars">★★★★★</span>
          <span className="reviews-rating-strip__text">
            <strong>4.9</strong> &nbsp;·&nbsp; 1,218 {t.googleRating}
          </span>
        </motion.div>

      </div>
    </section>
  )
}
