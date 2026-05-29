'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function TrustBar() {
  const { lang } = useLang()
  const items = T[lang].trustBar

  return (
    <motion.div
      className="trust-bar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, delay: 0.3 }}
    >
      <div className="trust-bar__inner">
        {items.map((text, i) => (
          <div key={i} style={{ display: 'contents' }}>
            {i > 0 && <span className="trust-bar__dot" aria-hidden />}
            <span className={`trust-bar__item ${i === 0 || i === 2 ? 'trust-bar__item--gold' : ''}`}>
              {text}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
