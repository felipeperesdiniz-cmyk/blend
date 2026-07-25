'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CTASection from '@/components/sections/CTASection'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'
import { BUSINESS } from '@/data/constants'
import { GALLERY_ITEMS, gallerySrc, type GallerySize } from '@/data/gallery'

const ITEMS = GALLERY_ITEMS.map(i => ({ ...i, src: gallerySrc(i.file) }))

const ASPECT: Record<GallerySize, string> = { tall: '2/3', portrait: '3/4', square: '1/1' }

// NOTE: The interactive Before/After slider was removed because the only assets
// available for it were stock photos presented as "real results, real clients."
// The markup + `gal-ba__*` styles are still in globals.css — restore this section
// as soon as real before/after pairs of Blend clients are available.

export default function GalleryContent() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const { lang } = useLang()
  const tp = T[lang].pages.gallery
  const tg = T[lang].gallery

  const enLabels = T.en.gallery.labels
  const labelMap: Record<string, string> = {}
  enLabels.forEach((enLabel, i) => { labelMap[enLabel] = tg.labels[i] })

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevItem = useCallback(() => setLightbox(i => i === null ? null : (i - 1 + ITEMS.length) % ITEMS.length), [])
  const nextItem = useCallback(() => setLightbox(i => i === null ? null : (i + 1) % ITEMS.length), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return
      if (e.key === 'ArrowRight') nextItem()
      if (e.key === 'ArrowLeft')  prevItem()
      if (e.key === 'Escape')     closeLightbox()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, nextItem, prevItem, closeLightbox])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const currentItem = lightbox !== null ? ITEMS[lightbox] : null
  const ed = tg.editorial
  const tm = tg.testimonial

  return (
    <div className="page-enter">
      <header className="gal-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.p style={{ fontSize: '0.88rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.9rem' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {tp.eyebrow}
          </motion.p>
          <motion.h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem, 5.6vw, 5.8rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.028em', lineHeight: 1.01, maxWidth: '13ch' }} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
            {tp.h1a}<em style={{ fontStyle: 'italic' }}>{tp.h1b}</em>
          </motion.h1>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 'clamp(3rem, 5vw, 4.5rem)' }}>
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div key={lang} className="gal-masonry" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.32 }}>
              {ITEMS.map((item, idx) => (
                <div key={item.id} className="gal-masonry__item">
                  <motion.div className="gal-item" style={{ aspectRatio: ASPECT[item.size] }} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: Math.min(idx * 0.055, 0.4) }} onClick={() => setLightbox(idx)}>
                    <img src={item.src} alt={`${labelMap[item.enLabel] ?? item.enLabel} — Blend Hair Boutique, Plantation FL`} loading="lazy" decoding="async" style={item.focus ? { objectPosition: item.focus } : undefined} />
                    <div className="gal-item__expand" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.5 1H11V4.5M4.5 11H1V7.5M11 1L6.5 5.5M1 11L5.5 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          <p className="fade-in-up" style={{ textAlign: 'center', marginTop: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--text-3)', fontSize: '1rem' }}>
            Blend Hair Boutique · Plantation, Florida
          </p>
        </div>
      </section>

      <section className="gal-editorial fade-in-up">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="gal-editorial__eyebrow">{ed.eyebrow}</p>
          <h2 className="gal-editorial__h2">{ed.h2a}<em>{ed.h2b}</em></h2>
          <p className="gal-editorial__sub">{ed.sub}</p>
          <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline-light">{ed.cta}</a>
        </div>
      </section>

      <section className="fade-in-up" style={{ padding: 'clamp(5rem, 9vw, 8rem) var(--gutter)', background: 'var(--parchment)', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.88rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '2rem' }}>{tm.eyebrow}</p>
          <blockquote style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.15rem, 2.4vw, 1.65rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.58, letterSpacing: '-0.01em', marginBottom: '1.75rem' }}>
            &ldquo;{tm.quote}&rdquo;
          </blockquote>
          <p style={{ fontSize: '0.88rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-2)', fontWeight: 500 }}>{tm.author}</p>
        </div>
      </section>

      <CTASection />

      <AnimatePresence>
        {lightbox !== null && currentItem && (
          <motion.div className="gal-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }}>
            <motion.div className="gal-lightbox__bg" onClick={closeLightbox} />
            <motion.div className="gal-lightbox__inner" initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.97, opacity: 0 }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}>
              <div className="gal-lightbox__img-wrap">
                <img src={currentItem.src} alt={`${labelMap[currentItem.enLabel] ?? currentItem.enLabel} — Blend Hair Boutique`} className="gal-lightbox__img" />
              </div>
            </motion.div>
            <button className="gal-lightbox__close" onClick={closeLightbox} aria-label="Close gallery">✕</button>
            <button className="gal-lightbox__nav gal-lightbox__nav--prev" onClick={prevItem} aria-label="Previous image">←</button>
            <button className="gal-lightbox__nav gal-lightbox__nav--next" onClick={nextItem} aria-label="Next image">→</button>
            <span className="gal-lightbox__counter">{String(lightbox + 1).padStart(2, '0')} / {String(ITEMS.length).padStart(2, '0')}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
