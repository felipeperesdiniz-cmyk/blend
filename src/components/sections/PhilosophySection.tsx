'use client'
import { useEffect, useRef } from 'react'

// Each line reveals as it is scrolled to, rather than the whole block animating
// once on mount. The hiding is applied by JS (`data-reveal-armed`) rather than
// sitting in the stylesheet, so a no-JS client — or the frame before hydration —
// renders the statement in full instead of a blank band on the dark ground.
export default function PhilosophySection() {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = innerRef.current
    if (!root) return

    const lines = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!lines.length) return

    // Nothing to arm under reduced motion — the copy just stays visible.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Build the observer BEFORE hiding anything. Arming first and failing here
    // would strand the statement invisible with no way back, so the hide is only
    // applied once there is something guaranteed to undo it.
    let io: IntersectionObserver
    try {
      io = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-revealed')
            io.unobserve(entry.target) // one-way: it must not re-hide on scroll back
          }
        },
        // Pulled up from the bottom edge so a line commits only once it is properly
        // in frame. That is what staggers them: the reader's scroll sets the pace,
        // not a fixed delay.
        { rootMargin: '0px 0px -22% 0px', threshold: 0.2 },
      )
    } catch {
      return
    }

    root.setAttribute('data-reveal-armed', '')
    lines.forEach(line => io.observe(line))

    return () => {
      io.disconnect()
      root.removeAttribute('data-reveal-armed')
    }
  }, [])

  return (
    <section className="philosophy" id="philosophy" aria-label="Our Philosophy">
      <div className="philosophy__inner" ref={innerRef}>

        <div className="philosophy__line philosophy__line--grow" aria-hidden />

        <p className="philosophy__eyebrow" data-reveal>
          The Blend Philosophy
        </p>

        <blockquote className="philosophy__quote">
          <span className="philosophy__quote-line" data-reveal>Beauty is a ritual.</span>
          <span className="philosophy__quote-line" data-reveal>Artistry is our craft.</span>
          <span className="philosophy__quote-line" data-reveal><em>Warmth is our nature.</em></span>
        </blockquote>

        <p className="philosophy__meta" data-reveal>
          Blend Hair Boutique · Plantation, Florida · Est. 2018
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
