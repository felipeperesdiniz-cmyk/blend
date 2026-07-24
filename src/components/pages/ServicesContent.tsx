'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SERVICES } from '@/data/services'
import SectionHeader from '@/components/ui/SectionHeader'
import CTASection from '@/components/sections/CTASection'
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
          <p
            className="fade-in-up"
            style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}
          >
            {t.eyebrow}
          </p>
          <h1
            className="fade-in-up"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 0.95, maxWidth: '14ch', animationDelay: '0.15s' }}
          >
            <em style={{ fontStyle: 'italic' }}>{t.h1}</em>
          </h1>
          <p
            className="fade-in-up"
            style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '44ch', marginTop: '1.5rem', fontWeight: 300, animationDelay: '0.4s' }}
          >
            {t.sub}
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((s, i) => {
              const sd = servicesData[i]
              const featured = Boolean(sd.badge)
              return (
                <Link key={s.id} href={`/services/${s.id}`} className={`service-card${featured ? ' service-card--featured' : ''}`}>
                  <div className="service-card__img-wrap">
                    <img
                      src={s.image}
                      alt={`${sd.title} at Blend Hair Boutique, Plantation FL`}
                      loading={i < 3 ? 'eager' : 'lazy'}
                    />
                    {sd.badge && <span className="service-card__badge">{sd.badge}</span>}
                  </div>
                  <div className="service-card__body">
                    <div className="service-card__head">
                      <span className="service-card__index">{String(i + 1).padStart(2, '0')}</span>
                      <p className="service-card__category">{sd.category}</p>
                    </div>
                    <h2 className="service-card__title">{sd.title}</h2>
                    <p className="service-card__benefit">{sd.benefit}</p>
                    <span className="service-card__cta">{t.viewDetails}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

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
