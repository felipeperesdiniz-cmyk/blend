'use client'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function AnnouncementBar() {
  const { lang } = useLang()
  return (
    <div className="announcement-bar">
      {T[lang].announcement}
    </div>
  )
}
