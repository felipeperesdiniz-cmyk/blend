'use client'
import { useEffect } from 'react'

/**
 * Stamps outbound booking links with UTM parameters at click time.
 *
 * Every booking control on the site is an external hand-off to Fresha, and
 * there are 63 of them across 39 files. Untagged, they all arrive at Fresha
 * looking identical, so there is no way to tell whether a booking came from
 * the hero, the sticky action bar, a stylist's page, or one of the sixteen
 * service landing pages — which in turn means no way to tell which of those
 * pages is worth keeping.
 *
 * Doing this centrally rather than at each call site is deliberate: it needs
 * no edit to any of the 63 links, it cannot drift out of sync with them, and
 * any booking link added later is covered automatically.
 *
 * Failure mode is benign by construction. If anything here throws, the anchor
 * keeps its original href and the visitor still reaches Fresha — they just
 * arrive untagged.
 */

const BOOKING_HOST = 'fresha.com'

// Where on the page the click came from. Read off the anchor's own class list
// so no call site has to be touched; the class names are already meaningful.
function surfaceOf(a: HTMLAnchorElement): string {
  const cls = a.className || ''
  if (typeof cls !== 'string') return 'link'
  if (cls.includes('hero__book')) return 'hero'
  if (cls.includes('sticky-cta')) return 'sticky-bar'
  if (cls.includes('nav__book')) return 'nav'
  if (cls.includes('mobile-menu__book')) return 'mobile-menu'
  if (cls.includes('footer__book')) return 'footer'
  if (cls.includes('svc-list__book')) return 'service-list'
  if (cls.includes('team-card__book')) return 'team-card'
  if (cls.includes('cta-section')) return 'cta-section'
  return 'link'
}

export default function BookingAttribution() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      try {
        const target = e.target as Element | null
        const a = target?.closest?.('a[href]') as HTMLAnchorElement | null
        if (!a) return

        const url = new URL(a.href, window.location.href)
        // Exact host or a subdomain of it — a bare endsWith would also match
        // something like "notfresha.com".
        const host = url.hostname.toLowerCase()
        if (host !== BOOKING_HOST && !host.endsWith(`.${BOOKING_HOST}`)) return

        // Idempotent: a second click on the same anchor must not stack params,
        // and must not overwrite a campaign the URL already carries.
        if (url.searchParams.has('utm_source')) return

        url.searchParams.set('utm_source', 'blendhairboutique.com')
        url.searchParams.set('utm_medium', 'website')
        url.searchParams.set(
          'utm_campaign',
          url.pathname.includes('gift-card') ? 'gift-card' : 'booking',
        )
        // The page the visitor booked from, and the control they used.
        url.searchParams.set('utm_content', window.location.pathname || '/')
        url.searchParams.set('utm_term', surfaceOf(a))

        a.href = url.toString()

        // Costs nothing today and works the day GTM or GA4 is added.
        const w = window as unknown as { dataLayer?: unknown[] }
        if (Array.isArray(w.dataLayer)) {
          w.dataLayer.push({
            event: 'booking_click',
            booking_surface: surfaceOf(a),
            booking_page: window.location.pathname,
          })
        }
      } catch {
        // Leave the anchor exactly as it was.
      }
    }

    // Capture phase, so the href is rewritten before the navigation is
    // dispatched and before any other handler can stop propagation.
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
