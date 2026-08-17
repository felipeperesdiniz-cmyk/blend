'use client'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'
import type { Lang } from '@/context/LangContext'
import MobileMenu from './MobileMenu'

const LANGS: Lang[] = ['en', 'pt', 'es']

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname = usePathname()
  const { lang, setLang } = useLang()
  const t = T[lang].nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <ul className="nav__links nav__links--left">
            <li><Link href="/services"    className="nav__link">{t.services}</Link></li>
            <li><Link href="/gallery"     className="nav__link">{t.gallery}</Link></li>
            <li><Link href="/team"        className="nav__link">{t.team}</Link></li>
            <li><Link href="/reviews"     className="nav__link">{t.reviews}</Link></li>
            <li><Link href="/blog"        className="nav__link">{t.resources}</Link></li>
          </ul>

          <Link href="/" className="nav__logo" aria-label="Blend Hair Boutique">
            {/* logo.png has an opaque white background, so it cannot sit over
                the homepage film. The keyed mark is swapped in by CSS while the
                nav is transparent. */}
            <img src="/logo.png" alt="Blend Hair Boutique" className="nav__logo-img nav__logo-img--dark" />
            <img src="/blend-mark-white.png" alt="" aria-hidden className="nav__logo-img nav__logo-img--light" />
          </Link>

          <div className="nav__actions">
            <ul className="nav__links nav__links--right">
              <li><Link href="/faq"         className="nav__link">{t.faq}</Link></li>
              <li><Link href="/gift-cards"  className="nav__link">{t.giftCards}</Link></li>
              <li><Link href="/about"       className="nav__link">{t.about}</Link></li>
              <li><Link href="/contact"     className="nav__link">{t.location}</Link></li>
            </ul>

            <div className="lang-switcher">
              {LANGS.map((l, i) => (
                <Fragment key={l}>
                  {i > 0 && <span className="lang-switcher__dot" aria-hidden>·</span>}
                  <button
                    className={`lang-switcher__btn${lang === l ? ' active' : ''}`}
                    onClick={() => setLang(l)}
                    aria-label={`Switch to ${l.toUpperCase()}`}
                  >
                    {l.toUpperCase()}
                  </button>
                </Fragment>
              ))}
            </div>

            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav__book"
            >
              {t.bookNow}
            </a>

            <button
              className={`nav__hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
