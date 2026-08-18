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

    // Reduced motion is handled in CSS, not here: the reveal degrades to a
    // plain cross-fade with no travel, which keeps the per-line effect the
    // section is built around without moving anything on screen. Bailing out
    // entirely (as this used to) meant the whole thing simply never ran for
    // anyone with the OS setting on.

    // Build the observer BEFORE hiding anything. Arming first and failing here
    // would strand the statement invisible with no way back, so the hide is only
    // applied once there is something guaranteed to undo it.
    let io: IntersectionObserver
    try {
      io = new IntersectionObserver(
        entries => {
          // Anything crossing in the same tick is staggered against its
          // neighbours. The lines sit close together, so on an ordinary scroll
          // they all arrive in one batch — without this they fade as a single
          // block and the per-line effect is lost. Scrolled slowly they arrive
          // one at a time and each gets a zero delay, so the pacing stays the
          // reader's.
          const arriving = entries.filter(entry => entry.isIntersecting)
          arriving.forEach((entry, i) => {
            const el = entry.target as HTMLElement
            el.style.transitionDelay = `${i * 140}ms`
            el.classList.add('is-revealed')
            io.unobserve(el) // one-way: it must not re-hide on scroll back
          })
        },
        // Pulled up from the bottom edge so a line commits only once it is
        // properly in frame rather than the instant it clips the boundary.
        { rootMargin: '0px 0px -25% 0px', threshold: 0.35 },
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
