'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

// The locale primitives live in a non-client module so server files (sitemap,
// page metadata) can use them without dragging this one into the server graph.
// Re-exported here because every existing import of `Lang` points at this file.
import { LANGS, langFromPath, pathForLang } from '@/data/locales'
export type { Lang } from '@/data/locales'
export { LOCALIZED_ROUTES, langFromPath, routeWithoutLang, pathForLang } from '@/data/locales'

import type { Lang } from '@/data/locales'

const STORAGE_KEY = 'blend-lang'

// The <html lang> attribute has to track the choice too: it is what a screen
// reader reads the page with, and leaving it on 'en' made a Portuguese page
// announce in an English voice.
const HTML_LANG: Record<Lang, string> = { en: 'en', pt: 'pt-BR', es: 'es' }

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangCtx>({ lang: 'en', setLang: () => {} })

const isLang = (v: unknown): v is Lang => typeof v === 'string' && (LANGS as string[]).includes(v)

export function LangProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [preferred, setPreferred] = useState<Lang>('en')

  // A locale in the URL is a statement of fact and outranks anything remembered
  // or sniffed. It is also what makes the translated pages render in the right
  // language *on the server* — every content component reads this context and
  // takes no props, so deriving the language from the path is what puts real
  // Portuguese and Spanish in the initial HTML rather than swapping it in after
  // hydration, which is the whole point of having the URLs at all.
  const routeLang = langFromPath(pathname)
  const lang: Lang = routeLang ?? preferred

  // Restore after mount rather than during render: the server has no idea what
  // the visitor picked last time, so reading storage any earlier means the
  // markup and the first paint disagree.
  useEffect(() => {
    // On a locale URL the path already decided; do not fight it.
    if (langFromPath(window.location.pathname)) return

    let stored: string | null = null
    try {
      stored = window.localStorage.getItem(STORAGE_KEY)
    } catch {
      // Private browsing can throw on access. English is a fine answer.
    }
    if (isLang(stored)) {
      setPreferred(stored)
      return
    }
    // No prior choice: follow the browser, since a Brazilian client arriving
    // from a Portuguese phone should not have to hunt for the switch.
    const nav = navigator.languages?.find((l) => l.startsWith('pt') || l.startsWith('es'))
    if (nav) setPreferred(nav.startsWith('pt') ? 'pt' : 'es')
  }, [pathname])

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang]
  }, [lang])

  const setLang = (l: Lang) => {
    setPreferred(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // Not being able to remember the choice is survivable; failing is not.
    }

    // If this route has a page in the chosen language, go to it, so the URL and
    // the content never disagree and the choice is linkable and indexable.
    // Where it does not — the landing pages, the blog — stay put and let the
    // switch work client-side as it always has.
    const target = pathForLang(pathname ?? '/', l)
    if (target && target !== pathname) router.push(target)
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
