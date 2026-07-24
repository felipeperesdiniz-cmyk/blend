'use client'
import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle, Mail, Instagram } from 'lucide-react'
import { BUSINESS } from '@/data/constants'
import CTASection from '@/components/sections/CTASection'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function ContactContent() {
  const [sent, setSent] = useState(false)
  const { lang } = useLang()
  const t = T[lang].pages.contact
  const tc = T[lang].contact
  const fields = t.fields

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name    = data.get('name')    as string
    const email   = data.get('email')   as string
    const service = data.get('service') as string
    const message = data.get('message') as string

    const text = encodeURIComponent(
      `Hi Blend! My name is ${name} (${email}).\nService of interest: ${service}\n\n${message}`
    )
    window.open(`${BUSINESS.whatsapp}?text=${text}`, '_blank')
    setSent(true)
    form.reset()
  }

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
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 0.95, maxWidth: '14ch' }}
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {t.h1a}<em style={{ fontStyle: 'italic' }}>{t.h1b}</em>
          </motion.h1>
        </div>
      </header>

      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, marginBottom: '0.5rem' }}>
                  {t.visitTitle}
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 300 }}>
                  {t.visitBody}
                </p>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon"><MapPin size={16} /></div>
                <div>
                  <p className="contact-info__label">{tc.address}</p>
                  <p className="contact-info__value">
                    <a href={BUSINESS.mapsDirections} target="_blank" rel="noopener noreferrer" aria-label={`Get directions to ${BUSINESS.address}`}>
                      {BUSINESS.address}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon"><Phone size={16} /></div>
                <div>
                  <p className="contact-info__label">{tc.phone}</p>
                  <p className="contact-info__value"><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon"><MessageCircle size={16} /></div>
                <div>
                  <p className="contact-info__label">{tc.whatsapp}</p>
                  <p className="contact-info__value">
                    <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">{tc.whatsappLink}</a>
                  </p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon"><Mail size={16} /></div>
                <div>
                  <p className="contact-info__label">{tc.email}</p>
                  <p className="contact-info__value"><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon"><Instagram size={16} /></div>
                <div>
                  <p className="contact-info__label">{tc.instagram}</p>
                  <p className="contact-info__value">
                    <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer">@blendhairboutique</a>
                  </p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon"><Clock size={16} /></div>
                <div>
                  <p className="contact-info__label">{tc.hours}</p>
                  <div className="contact-info__value">
                    {BUSINESS.hours.map((h) => (
                      <div key={h.day} style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', padding: '0.6rem 0', fontSize: '1rem' }}>
                        <span style={{ color: 'var(--text-2)', fontSize: '0.94rem' }}>{h.day}</span>
                        <span style={{ fontWeight: 400 }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="contact-map" style={{ marginBottom: '2rem' }}>
                <iframe
                  src={BUSINESS.mapsEmbedUrl}
                  title={`Blend Hair Boutique — ${BUSINESS.address}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div style={{ background: 'var(--white)', padding: 'clamp(1.5rem, 4vw, 2.5rem)', border: '1px solid var(--line)' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.4rem' }}>
                  {t.formTitle}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', marginBottom: '1.75rem', fontWeight: 300 }}>
                  {t.formBody}
                </p>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-soft)' }}
                  >
                    <p style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                      {t.formSentTitle}
                    </p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', fontWeight: 300 }}>
                      {t.formSentBody}
                    </p>
                    <button onClick={() => setSent(false)} className="btn btn--outline" style={{ marginTop: '1.5rem', fontSize: '0.82rem' }}>
                      {fields.submit}
                    </button>
                  </motion.div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label htmlFor="contact-name">{fields.name}</label>
                        <input id="contact-name" name="name" type="text" placeholder={fields.namePlaceholder} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-email">{fields.email}</label>
                        <input id="contact-email" name="email" type="email" placeholder={fields.emailPlaceholder} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-service">{fields.service}</label>
                      <select id="contact-service" name="service">
                        <option value=""></option>
                        {fields.serviceOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">{fields.message}</label>
                      <textarea id="contact-message" name="message" placeholder={fields.messagePlaceholder} rows={4} />
                    </div>
                    <button type="submit" className="btn btn--primary w-full" style={{ justifyContent: 'center' }}>
                      {fields.submit}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection eyebrow={t.ctaEyebrow} heading={t.ctaH2} sub={t.ctaSub} />
    </div>
  )
}
