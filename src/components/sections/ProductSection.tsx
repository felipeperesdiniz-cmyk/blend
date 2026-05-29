'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'

const features = [
  { label: 'Professional-Grade Color', body: 'We use professional color lines selected for vibrancy, lasting power, and hair health — the same products trusted by top salons across South Florida.' },
  { label: 'Smoothing Treatments', body: 'Our Brazilian blowout and keratin formulas are carefully chosen for safety, longevity, and results that stand up to Florida\'s humidity.' },
  { label: 'Home-Care Guidance', body: 'Every client leaves with a personalized routine to protect and maintain their results between visits to our Plantation boutique.' },
  { label: 'Luxury Products Available', body: 'We carry a curated selection of professional-grade products so you can extend the life of your services at home.' },
]

export default function ProductSection() {
  return (
    <section className="section product-section" id="products">
      <div className="container">
        <div className="product-section__inner">
          <AnimatedSection delay={0.1}>
            <div className="product-section__img">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                alt="Professional hair care products used at Blend Hair Boutique in Plantation, Florida"
                loading="lazy"
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
                <motion.div
                  key={f.label}
                  className="product-feature"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.1 }}
                >
                  <div className="product-feature__dot" />
                  <p className="product-feature__text">
                    <strong>{f.label}</strong> — {f.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
