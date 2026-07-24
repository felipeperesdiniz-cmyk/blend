'use client'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function FoundersFeature() {
  const { lang } = useLang()
  const f = T[lang].founders

  return (
    <div className="founders">
      <div className="founders__label"><span>{f.label}</span></div>
      <article className="founders-feature fade-in-up" id="juliana">
        <span id="fernanda" aria-hidden style={{ position: 'absolute' }} />
        <div className="founders-feature__img">
          <img
            src="/founders.webp"
            alt="Juliana and Fernanda, owners of Blend Hair Boutique in Plantation, Florida"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="founders-feature__body">
          <h3 className="founders-feature__name">{f.name}</h3>
          <p className="founders-feature__role">{f.role}</p>
          {f.bios.map((p, i) => (
            <p key={i} className="founders-feature__bio">{p}</p>
          ))}
        </div>
      </article>
    </div>
  )
}
