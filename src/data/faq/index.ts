import type { Lang } from '@/context/LangContext'
import type { FAQTranslation } from './types'
import { faqEn } from './en'
import { faqPt } from './pt'
import { faqEs } from './es'

export const FAQ_T: Record<Lang, FAQTranslation> = {
  en: faqEn,
  pt: faqPt,
  es: faqEs,
}

export * from './types'
