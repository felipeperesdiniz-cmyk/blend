'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { SERVICES } from '@/data/services'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function ServicesSection() {
  const { lang } = useLang()
  const t = T[lang].services
  const servicesData = T[lang].servicesData

  const featuredService = SERVICES[0]
  const featuredData = servicesData[0]
  const listServices = SERVICES.slice(1, 6)
  const listData = servicesData.slice(1, 6)

  return (
    <section className="section" id="services">
      <div className="container">

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <SectionHeader
            eyebrow={t.eyebrow}
            h2={<>{t.h2a}<br /><em>{t.h2b}</em></>}
            body={t.body}
            className="mb-sm"
          />
          <Link href="/services" className="btn btn--outline" style={{ flexShrink: 0 }}>
            {t.viewAll}
          </Link>
        </div>

        <motion.a
          href={BUSINESS.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="svc-featured"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="svc-featured__img">
            <img
              src={featuredService.image}
              alt={`${featuredData.title} at Blend Hair Boutique`}
              loading="lazy"
            />
          </div>
          <div className="svc-featured__body">
            <p className="svc-featured__badge">
              {featuredData.badge ?? featuredService.category}
            </p>
            <h3 className="svc-featured__h3">{featuredData.title}</h3>
            <p className="svc-featured__benefit">{featuredData.benefit}</p>
            <p className="svc-featured__desc">{featuredData.description}</p>
            <span className="svc-featured__cta">{t.bookNow}</span>
          </div>
        </motion.a>

        <div className="svc-list">
          {listServices.map((s, i) => (
            <motion.div
              key={s.id}
              className="svc-list__row"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
            >
              <Link href={`/services#${s.id}`} className="svc-list__left" aria-label={`View ${listData[i].title} at Blend Hair Boutique`}>
                <span className="svc-list__name">{listData[i].title}</span>
                <span className="svc-list__cat">{s.category}</span>
              </Link>
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="svc-list__book"
                aria-label={`Book ${listData[i].title} at Blend Hair Boutique`}
              >{t.bookNow}</a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
