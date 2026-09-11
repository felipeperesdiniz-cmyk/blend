'use client'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { useLang } from '@/context/LangContext'
import { pathForLang } from '@/data/locales'

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string }

/**
 * next/link, with the current URL's locale prefix kept.
 *
 * Every internal href in the shared components is written in its English form
 * (/team, /services/balayage-highlights). Rendered on /pt or /es, this maps it
 * to the translated URL — but only where one exists: pathForLang returns null
 * for the blog, the stylist pages and anything else published in English only,
 * and those fall back to the English href rather than linking into a 404.
 *
 * Why this exists: until it did, the pt and es trees contained no links to
 * themselves at all. A visitor arriving on /pt/team from Google left the
 * Portuguese site the moment they clicked anything, and a crawler found the
 * translated pages only through hreflang and the sitemap — so none of the
 * site's internal linking reached them.
 *
 * Keyed to the URL's locale (routeLang), not the merged language: a remembered
 * preference must not rewrite hrefs on the English tree, or the two trees start
 * cross-linking and neither reads as self-contained.
 */
export function LocaleLink({ href, ...rest }: Props) {
  const { routeLang } = useLang()

  let target = href
  if (routeLang && href.startsWith('/')) {
    // Split the hash/query off first, so '/#contact' localises to '/pt#contact'
    // instead of failing to match a route and silently staying English.
    const cut = href.search(/[?#]/)
    const base = cut === -1 ? href : href.slice(0, cut) || '/'
    const tail = cut === -1 ? '' : href.slice(cut)
    const localized = pathForLang(base, routeLang)
    if (localized) target = `${localized}${tail}`
  }

  return <Link href={target} {...rest} />
}

export default LocaleLink
