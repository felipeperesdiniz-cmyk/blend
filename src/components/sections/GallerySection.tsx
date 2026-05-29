'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

const EN_CATS = ['All', 'Blonde', 'Brunette', 'Smoothing', 'Nails'] as const
type Category = typeof EN_CATS[number]

interface GalleryItem { id: string; src: string; enLabel: string; category: Category }

const GALLERY: GalleryItem[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85', enLabel: 'Sun-Kissed Balayage',     category: 'Blonde' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=85',    enLabel: 'Smooth Blowout',          category: 'Smoothing' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85', enLabel: 'Rich Brunette Color',     category: 'Brunette' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=85', enLabel: 'Nail Art',                category: 'Nails' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85', enLabel: 'Highlights & Dimension',  category: 'Blonde' },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=85', enLabel: 'Bridal Elegance',         category: 'Brunette' },
]

export default function GallerySection() {
  const [activeCat, setActiveCat] = useState<Category>('All')
  const { lang } = useLang()
  const t = T[lang].gallery
  const allCats = T.en.gallery.categories

  const catLabel: Record<string, string> = {}
  allCats.forEach((enCat, i) => { catLabel[enCat] = t.categories[i] })

  const enLabels = T.en.gallery.labels
  const labelMap: Record<string, string> = {}
  enLabels.forEach((enLabel, i) => { labelMap[enLabel] = t.labels[i] })

  const filtered = activeCat === 'All' ? GALLERY : GALLERY.filter((g) => g.category === activeCat)

  return (
    <section className="section section--parchment" id="gallery">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
          <SectionHeader
            eyebrow={t.eyebrow}
            h2={<>{t.h2a}<em>{t.h2b}</em></>}
          />
          <Link href="/gallery" className="btn btn--outline" style={{ flexShrink: 0 }}>
            {t.viewAll}
          </Link>
        </div>

        <div className="gallery-filters">
          {EN_CATS.map((c) => (
            <button
              key={c}
              className={`gallery-filter ${activeCat === c ? 'active' : ''}`}
              onClick={() => setActiveCat(c)}
            >
              {catLabel[c] ?? c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCat}-${lang}`}
            className="gallery-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={item.src}
                  alt={`${labelMap[item.enLabel] ?? item.enLabel} — Blend Hair Boutique`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="gallery-item__overlay">
                  <span className="gallery-item__label">{labelMap[item.enLabel] ?? item.enLabel}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
