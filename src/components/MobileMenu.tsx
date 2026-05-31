'use client'
import { Fragment } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'
import type { Lang } from '@/context/LangContext'

interface Props {
  open: boolean
  onClose: () => void
}

const LANGS: Lang[] = ['en', 'pt', 'es']

const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
}

const item = (i: number) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.08 + i * 0.06 } },
})

export default function MobileMenu({ open, onClose }: Props) {
  const { lang, setLang } = useLang()
  const t = T[lang].nav

  const links = [
    { label: t.services,    href: '/services' },
    { label: t.gallery,     href: '/gallery' },
    { label: t.team,        href: '/team' },
    { label: t.reviews,     href: '/reviews' },
    { label: 'Resources',   href: '/blog' },
    { label: t.faq,         href: '/faq' },
    { label: 'Gift Cards',  href: '/gift-cards' },
    { label: t.about,       href: '/about' },
    { label: t.location,    href: '/contact' },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          variants={overlay}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <nav className="mobile-menu__links">
            {links.map((l, i) => (
              <motion.div key={l.href} variants={item(i)} initial="hidden" animate="visible">
                <Link href={l.href} className="mobile-menu__link" onClick={onClose}>
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.a
            href={BUSINESS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu__book"
            variants={item(links.length)}
            initial="hidden"
            animate="visible"
          >
            {T[lang].mobileMenu.bookBtn}
          </motion.a>

          <motion.div
            className="mobile-lang-switcher lang-switcher"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4 } }}
          >
            {LANGS.map((l, i) => (
              <Fragment key={l}>
                {i > 0 && <span className="lang-switcher__dot" aria-hidden>·</span>}
                <button
                  className={`lang-switcher__btn${lang === l ? ' active' : ''}`}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              </Fragment>
            ))}
          </motion.div>

          <motion.div
            className="mobile-menu__footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.45, duration: 0.4 } }}
          >
            <a href={BUSINESS.phoneHref} className="mobile-menu__contact-link">
              {T[lang].mobileCta.call}
            </a>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="mobile-menu__contact-link">
              WhatsApp
            </a>
            <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="mobile-menu__contact-link">
              Instagram
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
