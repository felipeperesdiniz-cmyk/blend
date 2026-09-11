'use client'
// Locale-aware next/link: keeps /pt and /es links inside their own tree.
import { LocaleLink as Link } from '@/components/ui/LocaleLink'
import { Instagram, Facebook } from 'lucide-react'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

// Positional against footer.quickLinks in every locale — keep the two in step.
// Reviews and FAQ were added here when they came out of the primary nav; the
// footer is where the full set belongs.
const quickHrefs = [
  '/services', '/gallery', '/team', '/reviews', '/blog',
  '/gift-cards', '/faq', '/about', '/contact',
]

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
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label={T[lang].a11y.onInstagram}>
                <Instagram size={15} />
              </a>
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label={T[lang].a11y.onFacebook}>
                <Facebook size={15} />
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
            {t.copyright}
          </p>
          <p className="footer__copy">{t.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
