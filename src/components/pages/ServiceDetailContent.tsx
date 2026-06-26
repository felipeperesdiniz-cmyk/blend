'use client'
import Link from 'next/link'
import { SERVICES, type PriceItem } from '@/data/services'
import { BUSINESS } from '@/data/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'
import ServiceFAQ from '@/components/ServiceFAQ'

export default function ServiceDetailContent({ id }: { id: string }) {
  const { lang } = useLang()
  const t = T[lang].pages.services
  const servicesData = T[lang].servicesData

  const index = SERVICES.findIndex((s) => s.id === id)
  const s = SERVICES[index]
  const sd = servicesData[index]

  return (
    <div className="page-enter">
      <header className="page-hero page-hero--dark">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link
            href="/services"
            style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginBottom: '1.25rem', display: 'inline-block' }}
          >
            {t.backToServices}
          </Link>
          <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
            {sd.category}
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.6rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 0.95, maxWidth: '20ch' }}>
            <em style={{ fontStyle: 'italic' }}>{sd.title}</em>
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '44ch', marginTop: '1.5rem', fontWeight: 300 }}>
            {sd.benefit}
          </p>
        </div>
      </header>

      <section className="service-detail">
        <div className="container">
          <div className="service-detail__inner">
            <AnimatedSection delay={0.1}>
              <div className="service-detail__img">
                <img src={s.image} alt={`${sd.title} at Blend Hair Boutique, Plantation FL`} loading="eager" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="service-detail__body">
                <p className="service-detail__body" style={{ marginBottom: '1rem' }}>{sd.description}</p>
                <p className="service-detail__body">{sd.detail}</p>

                {sd.priceGroups && sd.priceGroups.length > 0 && (
                  <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    {sd.priceGroups.map((group, gi) => (
                      <div key={gi}>
                        {group.heading && (
                          <p style={{ fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.75rem' }}>
                            {group.heading}
                          </p>
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {(group.items as PriceItem[]).map((item) => (
                            <div
                              key={item.label}
                              style={{ borderBottom: '1px solid var(--line)', paddingBottom: '0.5rem' }}
                            >
                              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                                <span style={{ fontSize: '0.95rem', color: 'var(--text-2)', fontWeight: 300 }}>{item.label}</span>
                                <span style={{ fontSize: '0.95rem', fontWeight: 500, whiteSpace: 'nowrap' }}>{item.price}</span>
                              </div>
                              {item.note && (
                                <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', fontWeight: 300, lineHeight: 1.6, marginTop: '0.4rem' }}>
                                  {item.note}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                  <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                    {T[lang].cta.book}
                  </a>
                  {!sd.priceGroups && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-3)', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>
                      {sd.priceNote}
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {sd.faq && sd.faq.length > 0 && (
        <section className="section section--beige" id="faq">
          <div className="container" style={{ maxWidth: '820px' }}>
            <SectionHeader
              eyebrow={t.faqEyebrow}
              h2={<>{t.faqH2a}<em>{t.faqH2b}</em></>}
              body=""
            />
            <ServiceFAQ faqs={sd.faq} />
          </div>
        </section>
      )}
    </div>
  )
}
