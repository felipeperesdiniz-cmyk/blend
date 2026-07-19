'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CTASection from '@/components/sections/CTASection'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'
import { BUSINESS } from '@/data/constants'

const EN_CATS = ['All', 'Color', 'Blonde', 'Brunette', 'Smoothing', 'Nails', 'Bridal'] as const
type Cat = typeof EN_CATS[number]
type Size = 'tall' | 'portrait' | 'square'

interface Item {
  id: string; src: string; enLabel: string; cat: Cat; size: Size
}

const ITEMS: Item[] = [
  { id: '1',  cat: 'Blonde',    size: 'tall',     src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80', enLabel: 'Sun-Kissed Balayage' },
  { id: '2',  cat: 'Smoothing', size: 'portrait', src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80', enLabel: 'Smooth Blowout' },
  { id: '3',  cat: 'Brunette',  size: 'square',   src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80', enLabel: 'Rich Brunette Color' },
  { id: '4',  cat: 'Nails',     size: 'portrait', src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80', enLabel: 'Nail Art' },
  { id: '5',  cat: 'Blonde',    size: 'tall',     src: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80', enLabel: 'Highlights & Dimension' },
  { id: '6',  cat: 'Bridal',    size: 'square',   src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80', enLabel: 'Bridal Elegance' },
  { id: '7',  cat: 'Color',     size: 'portrait', src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=900&q=80', enLabel: 'Lived-in Color' },
  { id: '8',  cat: 'Smoothing', size: 'tall',     src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80', enLabel: 'Blowout & Style' },
  { id: '9',  cat: 'Smoothing', size: 'portrait', src: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&w=900&q=80', enLabel: 'Keratin Treatment' },
  { id: '10', cat: 'Blonde',    size: 'square',   src: 'https://images.unsplash.com/photo-1634896941598-b6b500a502a7?auto=format&fit=crop&w=900&q=80', enLabel: 'Extensions & Volume' },
  { id: '11', cat: 'Color',     size: 'tall',     src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80', enLabel: 'Glow Facial' },
  { id: '12', cat: 'Brunette',  size: 'portrait', src: 'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?auto=format&fit=crop&w=900&q=80', enLabel: 'Color Transformation' },
]

const ASPECT: Record<Size, string> = { tall: '2/3', portrait: '3/4', square: '1/1' }

const BA_SRCS = [
  { before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80', after: 'https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=700&q=80' },
  { before: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&w=700&q=80', after: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80' },
  { before: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80', after: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80' },
]

function BeforeAfter({ before, after, label, beforeLabel, afterLabel }: { before: string; after: string; label: string; beforeLabel: string; afterLabel: string }) {
  const [pos, setPos] = useState(38)
  return (
    <div className="gal-ba__item">
      <img src={after} alt={`${label} after — Blend Hair Boutique`} className="gal-ba__after" loading="lazy" />
      <div className="gal-ba__before-wrap" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={`${label} before — Blend Hair Boutique`} className="gal-ba__before" loading="lazy" />
      </div>
      <div className="gal-ba__handle" style={{ left: `${pos}%` }}>
        <div className="gal-ba__handle-btn">
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden="true">
            <path d="M1 5H12M1 5L4 2M1 5L4 8M12 5L9 2M12 5L9 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <input type="range" min={0} max={100} value={pos} onChange={e => setPos(+e.target.value)} className="gal-ba__range" aria-label={`Compare before and after: ${label}`} />
      <span className="gal-ba__label-before">{beforeLabel}</span>
      <span className="gal-ba__label-after">{afterLabel}</span>
      <span className="gal-ba__title">{label}</span>
    </div>
  )
}

export default function GalleryContent() {
  const [active, setActive] = useState<Cat>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const { lang } = useLang()
  const tp = T[lang].pages.gallery
  const tg = T[lang].gallery

  const enCats = T.en.gallery.categories
  const catLabel: Record<string, string> = {}
  enCats.forEach((enCat, i) => { catLabel[enCat] = tg.categories[i] })

  const enLabels = T.en.gallery.labels
  const labelMap: Record<string, string> = {}
  const shortDescMap: Record<string, string> = {}
  const descMap: Record<string, string> = {}
  enLabels.forEach((enLabel, i) => {
    labelMap[enLabel] = tg.labels[i]
    shortDescMap[enLabel] = tg.shortDescs[i]
    descMap[enLabel] = tg.descs[i]
  })

  const filtered = active === 'All' ? ITEMS : ITEMS.filter(i => i.cat === active)
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevItem = useCallback(() => setLightbox(i => i === null ? null : (i - 1 + filtered.length) % filtered.length), [filtered.length])
  const nextItem = useCallback(() => setLightbox(i => i === null ? null : (i + 1) % filtered.length), [filtered.length])

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

  const currentItem = lightbox !== null ? filtered[lightbox] : null
  const statsNums = ['1,230+', '4.9 ★', '13+', '100%']
  const ba = tg.baSection
  const ed = tg.editorial
  const tm = tg.testimonial

  return (
    <div className="page-enter">
      <header className="gal-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.p style={{ fontSize: '0.82rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.9rem' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {tp.eyebrow}
          </motion.p>
          <motion.h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.2vw, 4.8rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.028em', lineHeight: 1.01, maxWidth: '12ch' }} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
            {tp.h1a}<em style={{ fontStyle: 'italic' }}>{tp.h1b}</em>
          </motion.h1>
        </div>
      </header>

      <nav className="gal-tabs" aria-label="Filter gallery by service category">
        <div className="gal-tabs__inner">
          {EN_CATS.map(c => (
            <button key={c} className={`gal-tab${active === c ? ' active' : ''}`} onClick={() => setActive(c)}>
              {catLabel[c] ?? c}
            </button>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {active === 'All' && (
          <motion.div className="gal-stats" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }}>
            {tg.statsLabels.map((label, i) => (
              <div key={i} className="gal-stat"><span className="gal-stat__num">{statsNums[i]}</span><span className="gal-stat__label">{label}</span></div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <section className="section" style={{ paddingTop: 'clamp(3rem, 5vw, 4.5rem)' }}>
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div key={`${active}-${lang}`} className="gal-masonry" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.32 }}>
              {filtered.map((item, idx) => (
                <div key={item.id} className="gal-masonry__item">
                  <motion.div className="gal-item" style={{ aspectRatio: ASPECT[item.size] }} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: Math.min(idx * 0.055, 0.4) }} onClick={() => setLightbox(idx)}>
                    <img src={item.src} alt={`${labelMap[item.enLabel] ?? item.enLabel} — Blend Hair Boutique, Plantation FL`} loading="lazy" />
                    <div className="gal-item__overlay">
                      <span className="gal-item__cat">{catLabel[item.cat] ?? item.cat}</span>
                      <span className="gal-item__label">{labelMap[item.enLabel] ?? item.enLabel}</span>
                      <span className="gal-item__short-desc">{shortDescMap[item.enLabel] ?? item.enLabel}</span>
                    </div>
                    <div className="gal-item__expand" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.5 1H11V4.5M4.5 11H1V7.5M11 1L6.5 5.5M1 11L5.5 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          <motion.p style={{ textAlign: 'center', marginTop: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--text-3)', fontSize: '0.95rem' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Blend Hair Boutique · Plantation, Florida
          </motion.p>
        </div>
      </section>

      <motion.section className="gal-editorial" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.9 }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="gal-editorial__eyebrow">{ed.eyebrow}</p>
          <h2 className="gal-editorial__h2">{ed.h2a}<em>{ed.h2b}</em></h2>
          <p className="gal-editorial__sub">{ed.sub}</p>
          <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline-light">{ed.cta}</a>
        </div>
      </motion.section>

      <section className="gal-ba">
        <motion.div className="gal-ba__header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
          <p style={{ fontSize: '0.82rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.9rem' }}>{ba.eyebrow}</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.9rem, 3.8vw, 3.2rem)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.05, color: 'var(--text)', marginBottom: '1rem' }}>
            {ba.h2a}<em style={{ fontStyle: 'italic', color: 'var(--gold-dk)' }}>{ba.h2b}</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', maxWidth: '40ch', margin: '0 auto', lineHeight: 1.82, fontWeight: 300 }}>{ba.sub}</p>
        </motion.div>
        <div className="gal-ba__grid">
          {BA_SRCS.map((pair, i) => (
            <BeforeAfter key={i} before={pair.before} after={pair.after} label={tg.baPairs[i]} beforeLabel={ba.before} afterLabel={ba.after} />
          ))}
        </div>
      </section>

      <motion.section style={{ padding: 'clamp(5rem, 9vw, 8rem) var(--gutter)', background: 'var(--parchment)', textAlign: 'center' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.82rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '2rem' }}>{tm.eyebrow}</p>
          <blockquote style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.15rem, 2.4vw, 1.65rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.58, letterSpacing: '-0.01em', marginBottom: '1.75rem' }}>
            &ldquo;{tm.quote}&rdquo;
          </blockquote>
          <p style={{ fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-2)', fontWeight: 500 }}>{tm.author}</p>
        </div>
      </motion.section>

      <CTASection />

      <AnimatePresence>
        {lightbox !== null && currentItem && (
          <motion.div className="gal-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }}>
            <motion.div className="gal-lightbox__bg" onClick={closeLightbox} />
            <motion.div className="gal-lightbox__inner" initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.97, opacity: 0 }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}>
              <div className="gal-lightbox__img-wrap">
                <img src={currentItem.src.replace('w=900', 'w=1400')} alt={`${labelMap[currentItem.enLabel] ?? currentItem.enLabel} — Blend Hair Boutique`} className="gal-lightbox__img" />
              </div>
              <div className="gal-lightbox__meta">
                <p className="gal-lightbox__cat">{catLabel[currentItem.cat] ?? currentItem.cat}</p>
                <p className="gal-lightbox__title">{labelMap[currentItem.enLabel] ?? currentItem.enLabel}</p>
                <p className="gal-lightbox__desc">{descMap[currentItem.enLabel] ?? currentItem.enLabel}</p>
              </div>
            </motion.div>
            <button className="gal-lightbox__close" onClick={closeLightbox} aria-label="Close gallery">✕</button>
            <button className="gal-lightbox__nav gal-lightbox__nav--prev" onClick={prevItem} aria-label="Previous image">←</button>
            <button className="gal-lightbox__nav gal-lightbox__nav--next" onClick={nextItem} aria-label="Next image">→</button>
            <span className="gal-lightbox__counter">{String(lightbox + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
