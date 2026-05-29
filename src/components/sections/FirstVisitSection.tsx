'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function FirstVisitSection() {
  const { lang } = useLang()
  const t = T[lang].experience

  return (
    <section className="experience" id="experience">
      <div className="experience__inner">
        <motion.div
          className="experience__image"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85"
            alt="The Blend Hair Boutique experience — premium salon in Plantation, FL"
            loading="lazy"
          />
        </motion.div>

        <div className="experience__content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <SectionHeader
              eyebrow={t.eyebrow}
              h2={<>{t.h2a}<br /><em>{t.h2b}</em></>}
              body={t.body}
            />
          </motion.div>

          <motion.ul
            className="experience__list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.06 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link href="/team" className="btn btn--primary">
              {t.cta1}
            </Link>
            <Link href="/about" className="btn btn--outline">
              {t.cta2}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
