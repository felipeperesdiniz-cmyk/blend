'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function ProductSection() {
  const { lang } = useLang()
  const t = T[lang].products
  const features = t.features

  return (
    <section className="section product-section" id="products">
      <div className="container">
        <div className="product-section__inner">
          <AnimatedSection delay={0.1}>
            <div className="product-section__img">
              <img
                src="/images/gallery/kerastase-chroma-absolu.webp"
                alt="Kerastase Chroma Absolu products carried at Blend Hair Boutique, Plantation FL"
                loading="lazy" decoding="async"
              />
            </div>
          </AnimatedSection>

          <div>
            <SectionHeader
              eyebrow={t.eyebrow}
              h2={<>{t.h2a}<br /><em>{t.h2b}</em></>}
              body={t.body}
              light
            />

            <div style={{ marginTop: '2.5rem' }}>
              {features.map((f, i) => (
                <div
                  key={f.label}
                  className="product-feature fade-in-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="product-feature__dot" />
                  <p className="product-feature__text">
                    <strong>{f.label}</strong>{' '}{f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
