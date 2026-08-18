'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'
import { GALLERY_ITEMS, FEATURED_IDS, gallerySrc } from '@/data/gallery'

const GALLERY = FEATURED_IDS
  .map(id => GALLERY_ITEMS.find(i => i.id === id)!)
  .map(i => ({ id: i.id, src: gallerySrc(i.file), enLabel: i.enLabel, focus: i.focus }))

export default function GallerySection() {
  const { lang } = useLang()
  const t = T[lang].gallery

  const enLabels = T.en.gallery.labels
  const labelMap: Record<string, string> = {}
  enLabels.forEach((enLabel, i) => { labelMap[enLabel] = t.labels[i] })

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

        <motion.div
          className="gallery-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          {GALLERY.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={item.src}
                alt={`${labelMap[item.enLabel] ?? item.enLabel} at Blend Hair Boutique`}
                loading="lazy" decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.focus ?? 'center' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
