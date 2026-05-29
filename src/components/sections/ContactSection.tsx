'use client'
import { MapPin, Phone, Clock, MessageCircle, Mail } from 'lucide-react'
import { BUSINESS } from '@/data/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function ContactSection() {
  const { lang } = useLang()
  const t = T[lang].contact

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeader
          eyebrow={t.eyebrow}
          h2={<>{t.h2a}<em>{t.h2b}</em></>}
          body={t.body}
        />

        <div className="contact-grid">
          <div>
            <div className="contact-info__item">
              <div className="contact-info__icon"><MapPin size={16} /></div>
              <div>
                <p className="contact-info__label">{t.address}</p>
                <p className="contact-info__value">
                  <a
                    href={BUSINESS.mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get directions to ${BUSINESS.address}`}
                  >
                    {BUSINESS.address}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon"><Phone size={16} /></div>
              <div>
                <p className="contact-info__label">{t.phone}</p>
                <p className="contact-info__value">
                  <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
                </p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon"><MessageCircle size={16} /></div>
              <div>
                <p className="contact-info__label">{t.whatsapp}</p>
                <p className="contact-info__value">
                  <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">
                    {t.whatsappLink}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon"><Mail size={16} /></div>
              <div>
                <p className="contact-info__label">{t.email}</p>
                <p className="contact-info__value">
                  <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                </p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon"><Clock size={16} /></div>
              <div>
                <p className="contact-info__label">{t.hours}</p>
                <div className="contact-info__value">
                  {BUSINESS.hours.map((h) => (
                    <div key={h.day} style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', padding: '0.4rem 0', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--text-3)', fontSize: '0.82rem' }}>{h.day}</span>
                      <span style={{ fontWeight: 400 }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="contact-map">
              <iframe
                src={BUSINESS.mapsEmbedUrl}
                title={`Blend Hair Boutique location — ${BUSINESS.address}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
