'use client'
import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z"/>
    </svg>
  )
}

const year = new Date().getFullYear()
const quickHrefs = ['/services', '/gallery', '/team', '/blog', '/gift-cards', '/about', '/contact']

export default function Footer() {
  const { lang } = useLang()
  const t = T[lang].footer

  const quickLinks = t.quickLinks.map((label, i) => ({
    label,
    href: quickHrefs[i] ?? '/',
    external: false,
  }))

  const serviceHrefs = [
    '/services/haircuts',
    '/services/color',
    '/services/balayage-highlights',
    '/services/smoothing',
    '/services/nails',
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Link href="/" className="footer__logo">BLEND</Link>
            <p className="footer__tagline">{t.tagline}</p>
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__book-btn"
            >
              {t.bookBtn}
            </a>
            <div className="footer__socials">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Blend Hair Boutique on Instagram">
                <Instagram size={15} />
              </a>
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Blend Hair Boutique on Facebook">
                <Facebook size={15} />
              </a>
              <a href={BUSINESS.tiktok} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Blend Hair Boutique on TikTok">
                <TikTokIcon size={15} />
              </a>
            </div>
          </div>

          <div>
            <p className="footer__col-title">{t.navigate}</p>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="footer__link">{l.label}</a>
                  ) : (
                    <Link href={l.href} className="footer__link">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__col-title">{t.servicesCol}</p>
            <ul className="footer__links">
              {t.serviceLinks.map((label, i) => (
                <li key={label}>
                  <Link href={serviceHrefs[i]} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__col-title">{t.findUs}</p>
            <p className="footer__contact-item">{BUSINESS.address}</p>
            <p className="footer__contact-item">
              <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
            </p>
            <p className="footer__contact-item">
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              {BUSINESS.hours.map((h) => (
                <p key={h.day} className="footer__contact-item">
                  <span className="footer__hours-day">{h.day}</span>
                  <br />
                  <span className="footer__hours-time">{h.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Blend Hair Boutique · {lang === 'en' ? 'All rights reserved' : lang === 'pt' ? 'Todos os direitos reservados' : 'Todos los derechos reservados'} · Plantation, Florida
          </p>
          <p className="footer__copy">{t.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
