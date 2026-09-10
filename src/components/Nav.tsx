'use client'
import { Fragment, useState, useEffect } from 'react'
import { useLenis } from 'lenis/react'
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

  const lenis = useLenis()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    // body overflow alone no longer locks the page: Lenis drives scrolling off
    // wheel/touch events, so it would keep gliding the page behind the menu.
    if (menuOpen) lenis?.stop()
    else lenis?.start()
    return () => {
      document.body.style.overflow = ''
      lenis?.start()
    }
  }, [menuOpen, lenis])

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          {/* Six links, not nine. Past about half a dozen a navigation stops
              orienting people and starts deferring the decision to them, and
              nine of them at 11.5px was also what forced the whole bar to
              collapse to a hamburger below 1400px — i.e. on most laptops.
              Reviews, FAQ and Guides moved to the footer, which carries the
              full set; all three remain in the mobile menu. */}
          <ul className="nav__links nav__links--left">
            <li><Link href="/services"    className="nav__link">{t.services}</Link></li>
            <li><Link href="/gallery"     className="nav__link">{t.gallery}</Link></li>
            <li><Link href="/team"        className="nav__link">{t.team}</Link></li>
          </ul>

          <Link href="/" className="nav__logo" aria-label={T[lang].a11y.homeLink}>
            {/* Both marks are keyed to transparency. logo.png is kept as-is for
                OG/schema, where a white card is safer than an alpha channel, but
                it cannot be used here: its opaque white background sat as a hard
                white rectangle against the nav, which is rgba(255,255,255,0.97)
                over a blurred backdrop and so reads warmer than pure white. */}
            <img src="/blend-mark-ink.png" alt="Blend Hair Boutique" className="nav__logo-img nav__logo-img--dark" />
            <img src="/blend-mark-white.png" alt="" aria-hidden className="nav__logo-img nav__logo-img--light" />
          </Link>

          <div className="nav__actions">
            <ul className="nav__links nav__links--right">
              <li><Link href="/about"       className="nav__link">{t.about}</Link></li>
              <li><Link href="/gift-cards"  className="nav__link">{t.giftCards}</Link></li>
              <li><Link href="/contact"     className="nav__link">{t.location}</Link></li>
            </ul>

            <div className="lang-switcher">
              {LANGS.map((l, i) => (
                <Fragment key={l}>
                  {i > 0 && <span className="lang-switcher__dot" aria-hidden>·</span>}
                  <button
                    className={`lang-switcher__btn${lang === l ? ' active' : ''}`}
                    onClick={() => setLang(l)}
                    aria-label={T[lang].a11y.switchTo.replace('{lang}', l.toUpperCase())}
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
              aria-label={menuOpen ? T[lang].a11y.closeMenu : T[lang].a11y.openMenu}
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
