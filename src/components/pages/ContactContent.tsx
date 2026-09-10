'use client'
import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle, Mail, Instagram } from 'lucide-react'
import { BUSINESS } from '@/data/constants'
import CTASection from '@/components/sections/CTASection'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function ContactContent() {
  // 'failed' is not a cosmetic state: if the message never reached the server
  // it has gone nowhere, and saying "thank you" would be a lie the salon pays
  // for in missed inquiries.
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  const [draft, setDraft] = useState('')
  const { lang } = useLang()
  const t = T[lang].pages.contact
  const tc = T[lang].contact
  const fields = t.fields

  const compose = (data: FormData) =>
    `Hi Blend! My name is ${data.get('name')} (${data.get('email')}).\n` +
    `Service of interest: ${data.get('service')}\n\n${data.get('message')}`

  // Submits to /api/contact, which emails the salon.
  //
  // This used to call window.open() on a WhatsApp deep link and keep nothing.
  // Someone who chose to type into a form rather than tap the WhatsApp button
  // had signalled they did not want to message, and was sent to WhatsApp
  // regardless — and the name and email they had just entered were discarded.
  // WhatsApp is still offered, but as an alternative the visitor picks, not as
  // a redirect they did not ask for.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setDraft(compose(data))
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') ?? ''),
          email: String(data.get('email') ?? ''),
          service: String(data.get('service') ?? ''),
          message: String(data.get('message') ?? ''),
          company: String(data.get('company') ?? ''), // honeypot
        }),
      })
      if (!res.ok) {
        // Covers a 503 from an unconfigured deploy as well as a real failure.
        // Either way nothing was delivered, so the visitor is told so and the
        // draft is kept for the WhatsApp and email fallbacks below.
        setStatus('failed')
        return
      }
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('failed')
    }
  }

  // A link click is a user gesture, so this works even where a scripted
  // window.open would be blocked.
  const whatsappHref = `${BUSINESS.whatsapp}?text=${encodeURIComponent(draft)}`

  const mailtoHref =
    `mailto:${BUSINESS.email}` +
    `?subject=${encodeURIComponent('Inquiry from the website')}` +
    `&body=${encodeURIComponent(draft)}`

  return (
    <div className="page-enter">
      <header className="page-hero page-hero--dark page-hero--fade-soft">
        <div className="container hero-layer">
          <motion.p className="eyebrow eyebrow--on-dark"
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
                    <a href={BUSINESS.mapsDirections} target="_blank" rel="noopener noreferrer" aria-label={T[lang].a11y.getDirections.replace('{address}', BUSINESS.address)}>
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
                  title={`Blend Hair Boutique at ${BUSINESS.address}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div style={{ background: 'var(--white)', padding: 'clamp(1.5rem, 4vw, 2.5rem)', border: '1px solid var(--line)' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.4rem' }}>
                  {t.formTitle}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-2)', marginBottom: '1.75rem', fontWeight: 300 }}>
                  {t.formBody}
                </p>

                {status === 'sent' || status === 'failed' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-soft)' }}
                    role="status"
                  >
                    <p style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                      {status === 'failed' ? t.formBlockedTitle : t.formSentTitle}
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--text-2)', fontWeight: 300 }}>
                      {status === 'failed' ? t.formBlockedBody : t.formSentBody}
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                      {status === 'failed' ? (
                        <>
                          <a href={mailtoHref} className="btn btn--cta-gold" style={{ fontSize: '0.88rem' }}>
                            {t.formEmailInstead}
                          </a>
                          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ fontSize: '0.88rem' }}>
                            {t.formTryAgain}
                          </a>
                          <a href={BUSINESS.phoneHref} className="btn btn--outline" style={{ fontSize: '0.88rem' }}>
                            {BUSINESS.phone}
                          </a>
                        </>
                      ) : (
                        <button onClick={() => setStatus('idle')} className="btn btn--outline" style={{ fontSize: '0.88rem' }}>
                          {t.formWriteAnother}
                        </button>
                      )}
                    </div>
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
                    {/* `w-full` was a Tailwind-ism that was never defined in this
                        stylesheet, so the submit button has quietly not been
                        full-width. .btn is inline-flex; this is the actual fix. */}
                    {/* Honeypot. Off-screen rather than display:none — some
                        bots skip hidden fields — and taken out of the tab
                        order and the accessibility tree so no real visitor
                        ever meets it. Anything in it is discarded server-side. */}
                    <div aria-hidden style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                      <label htmlFor="contact-company">Company</label>
                      <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                    </div>

                    <button
                      type="submit"
                      className="btn btn--primary"
                      style={{ justifyContent: 'center', width: '100%' }}
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? t.formSending : fields.submit}
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
