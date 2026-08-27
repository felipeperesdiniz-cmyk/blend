'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'en' | 'pt' | 'es'

const LANGS: Lang[] = ['en', 'pt', 'es']
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
  const [lang, setLangState] = useState<Lang>('en')

  // Restore after mount rather than during render: the server has no idea what
  // the visitor picked last time, so reading storage any earlier means the
  // markup and the first paint disagree.
  useEffect(() => {
    let stored: string | null = null
    try {
      stored = window.localStorage.getItem(STORAGE_KEY)
    } catch {
      // Private browsing can throw on access. English is a fine answer.
    }
    if (isLang(stored)) {
      setLangState(stored)
      return
    }
    // No prior choice: follow the browser, since a Brazilian client arriving
    // from a Portuguese phone should not have to hunt for the switch.
    const preferred = navigator.languages?.find((l) => l.startsWith('pt') || l.startsWith('es'))
    if (preferred) setLangState(preferred.startsWith('pt') ? 'pt' : 'es')
  }, [])

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang]
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // Not being able to remember the choice is survivable; failing is not.
    }
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
