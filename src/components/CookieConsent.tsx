'use client'
import { useEffect, useState } from 'react'
import { LocaleLink as Link } from '@/components/ui/LocaleLink'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

const STORAGE_KEY = 'cookie-consent'

type ConsentStatus = 'granted' | 'denied'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Pushes the same shape the inline bootstrap script in layout.tsx sets as the
// default, so a later choice here overrides it through Consent Mode's normal
// 'update' command rather than fighting it with a second, different API.
function updateConsent(status: ConsentStatus) {
  window.gtag?.('consent', 'update', {
    ad_storage: status,
    ad_user_data: status,
    ad_personalization: status,
    analytics_storage: status,
  })
}

export default function CookieConsent() {
  const { lang } = useLang()
  const t = T[lang].cookieConsent
  const [visible, setVisible] = useState(false)

  // Reads localStorage in an effect, not during render, so the server-rendered
  // markup and the first client render match — a banner that read this
  // synchronously would hydrate as "hidden" for a returning visitor whose
  // choice lives only in the browser, mismatching the server's "no choice yet"
  // render and tripping a hydration error.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (status: ConsentStatus) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ status, ts: Date.now() }))
    } catch {
      // Private browsing / storage blocked — the choice still applies to this
      // page view via Consent Mode, it just won't be remembered next visit.
    }
    updateConsent(status)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className="cookie-consent__text">
        {t.message}{' '}
        <Link href="/privacy-policy" className="cookie-consent__link">{t.privacyLink}</Link>
      </p>
      <div className="cookie-consent__actions">
        <button type="button" className="cookie-consent__btn cookie-consent__btn--reject" onClick={() => choose('denied')}>
          {t.rejectAll}
        </button>
        <button type="button" className="cookie-consent__btn cookie-consent__btn--allow" onClick={() => choose('granted')}>
          {t.allow}
        </button>
      </div>
    </div>
  )
}
