// Reveal is CSS-driven (.fade-in-up runs on mount with animation-fill-mode: both),
// so this full-viewport statement never renders as a blank white band while JS
// hydrates. The decorative rules grow via .philosophy__line--grow.
export default function PhilosophySection() {
  return (
    <section className="philosophy" aria-label="Our Philosophy">
      <div className="philosophy__inner">

        <div className="philosophy__line philosophy__line--grow" aria-hidden />

        <p className="philosophy__eyebrow fade-in-up" style={{ animationDelay: '0.15s' }}>
          The Blend Philosophy
        </p>

        <blockquote className="philosophy__quote fade-in-up" style={{ animationDelay: '0.25s' }}>
          Beauty is a ritual.
          <br />
          Artistry is our craft.
          <br />
          <em>Warmth is our nature.</em>
        </blockquote>

        <p className="philosophy__meta fade-in-up" style={{ animationDelay: '0.5s' }}>
          Blend Hair Boutique · Plantation, Florida · Est. 2012
        </p>

        <div
          className="philosophy__line philosophy__line--grow"
          style={{ animationDelay: '0.4s' }}
          aria-hidden
        />

      </div>
    </section>
  )
}
