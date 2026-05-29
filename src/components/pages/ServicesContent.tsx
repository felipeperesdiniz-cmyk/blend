'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SERVICES } from '@/data/services'
import { BUSINESS } from '@/data/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="faq-trigger__q">{q}</span>
        <Plus className="faq-trigger__icon" size={20} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="faq-body__inner">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServicesContent() {
  const { lang } = useLang()
  const t = T[lang].pages.services
  const servicesData = T[lang].servicesData
  const faqData = T[lang].faqData

  return (
    <div className="page-enter">
      <header className="page-hero page-hero--dark">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.p
            style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          >
            {t.eyebrow}
          </motion.p>
          <motion.h1
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 0.95, maxWidth: '14ch' }}
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <em style={{ fontStyle: 'italic' }}>{t.h1}</em>
          </motion.h1>
          <motion.p
            style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '44ch', marginTop: '1.5rem', fontWeight: 300 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.sub}
          </motion.p>
        </div>
      </header>

      <div>
        {SERVICES.map((s, i) => {
          const sd = servicesData[i]
          return (
            <section key={s.id} id={s.id} className="service-detail">
              <div className="container">
                <div className="service-detail__inner">
                  <AnimatedSection delay={0.1}>
                    <div className="service-detail__img">
                      <img
                        src={s.image}
                        alt={`${sd.title} at Blend Hair Boutique, Plantation FL`}
                        loading={i < 2 ? 'eager' : 'lazy'}
                      />
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.25}>
                    <div className="service-detail__body">
                      <p className="service-detail__eyebrow">{sd.category}</p>
                      <h2 className="service-detail__h2">{sd.title}</h2>
                      <p className="service-detail__benefit">{sd.benefit}</p>
                      <p className="service-detail__body" style={{ marginBottom: '1rem' }}>{sd.description}</p>
                      <p className="service-detail__body">{sd.detail}</p>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                        <a
                          href={BUSINESS.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--primary"
                        >
                          {T[lang].cta.book}
                        </a>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-3)', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>
                          {sd.priceNote}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <section className="section section--beige" id="faq">
        <div className="container" style={{ maxWidth: '820px' }}>
          <SectionHeader
            eyebrow={t.faqEyebrow}
            h2={<>{t.faqH2a}<em>{t.faqH2b}</em></>}
            body=""
          />
          <div className="faq-list">
            {faqData.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
