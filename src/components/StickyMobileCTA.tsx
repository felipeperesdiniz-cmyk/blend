'use client'
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function StickyMobileCTA() {
  const { lang } = useLang()
  const t = T[lang].mobileCta
  return (
    <div className="sticky-cta" role="toolbar" aria-label="Quick actions">
      <div className="sticky-cta__inner">
        <a href={BUSINESS.phoneHref} className="sticky-cta__btn" aria-label="Call us">
          <Phone className="sticky-cta__icon" size={18} />
          <span className="sticky-cta__label">{t.call}</span>
        </a>

        <a
          href={BUSINESS.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-cta__btn sticky-cta__btn--book"
          aria-label="Book appointment"
        >
          <CalendarCheck className="sticky-cta__icon" size={18} />
          <span className="sticky-cta__label">{t.book}</span>
        </a>

        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-cta__btn"
          aria-label="WhatsApp"
        >
          <MessageCircle className="sticky-cta__icon" size={18} />
          <span className="sticky-cta__label">{t.whatsapp}</span>
        </a>
      </div>
    </div>
  )
}
