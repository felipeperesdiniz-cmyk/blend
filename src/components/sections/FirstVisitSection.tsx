'use client'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function FirstVisitSection() {
  const { lang } = useLang()
  const t = T[lang].experience

  return (
    <section className="experience" id="experience">
      <div className="experience__inner">
        <div className="experience__image fade-in-up">
          <img
            src="/images/gallery/blonde-highlights-smile.webp"
            alt="A client after her appointment at Blend Hair Boutique in Plantation, FL"
            loading="lazy" decoding="async"
          />
        </div>

        <div className="experience__content">
          <div className="fade-in-up" style={{ animationDelay: '0.08s' }}>
            <SectionHeader
              eyebrow={t.eyebrow}
              h2={<>{t.h2a}<br /><em>{t.h2b}</em></>}
              body={t.body}
            />
          </div>

          <ul className="experience__list fade-in-up" style={{ animationDelay: '0.16s' }}>
            {t.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div
            className="fade-in-up"
            style={{ animationDelay: '0.24s', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link href="/team" className="btn btn--primary">
              {t.cta1}
            </Link>
            <Link href="/about" className="btn btn--outline">
              {t.cta2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
