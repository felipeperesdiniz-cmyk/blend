'use client'
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
        <div className="review-featured fade-in-up">
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
        </div>

        {/* Secondary reviews */}
        <div className="reviews-secondary">
          {secondary.map((r, i) => (
            <article
              key={i}
              className="review-secondary__card fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
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
            </article>
          ))}
        </div>

        {/* Google rating strip */}
        <div className="reviews-rating-strip fade-in-up">
          <span className="reviews-rating-strip__stars">★★★★★</span>
          <span className="reviews-rating-strip__text">
            <strong>4.9</strong> &nbsp;·&nbsp; 1,230+ {t.googleRating}
          </span>
        </div>

      </div>
    </section>
  )
}
