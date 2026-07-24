'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'

const features = [
  { label: 'Professional-Grade Color', body: 'We work with premium color lines — including Keune, Wella, and Truss — selected for vibrancy, lasting power, and hair health, the same products trusted by top salons across South Florida.' },
  { label: 'Smoothing Treatments', body: 'Our Brazilian keratin and botox smoothing treatments use FDA-approved Brazilian products, chosen for safety, longevity, and results that stand up to Florida\'s humidity.' },
  { label: 'Home-Care Guidance', body: 'Every client leaves with a personalized Kérastase home-care routine — a curated selection of professional-grade products to protect and extend their results between visits to our Plantation boutique.' },
]

export default function ProductSection() {
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
              eyebrow="Premium Care"
              h2={<>Professional Products,<br /><em>Real Results</em></>}
              body="At Blend Hair Boutique in Plantation, Florida, we work exclusively with professional-grade products and color lines — because your hair deserves nothing less."
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
                    <strong>{f.label}</strong> — {f.body}
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
