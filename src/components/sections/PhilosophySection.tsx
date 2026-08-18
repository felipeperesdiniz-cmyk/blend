'use client'
import { useCallback, useEffect, useRef } from 'react'
import { useLenis } from 'lenis/react'

// Where a line starts and finishes its reveal, as a fraction of viewport height.
// Because every line is mapped against its own position, the stagger falls out
// of the layout itself — no per-element delay to keep in sync with the spacing.
const ENTER = 0.92
const SETTLE = 0.55
const TRAVEL = 30 // px the line rises through

export default function PhilosophySection() {
  const innerRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<HTMLElement[]>([])
  const reducedRef = useRef(false)

  // Scroll-linked rather than a one-shot trigger: the line is tied to scroll
  // position, so it scrubs both ways and tracks the reader instead of firing
  // once and being over. Nothing here hides anything until it has measured, so
  // a failure before the first pass leaves the copy plainly visible rather than
  // stranded invisible — which is what the previous observer-based version did.
  const update = useCallback(() => {
    const vh = window.innerHeight
    const enter = vh * ENTER
    const settle = vh * SETTLE
    for (const el of linesRef.current) {
      const { top } = el.getBoundingClientRect()
      const raw = (enter - top) / (enter - settle)
      const p = raw < 0 ? 0 : raw > 1 ? 1 : raw
      const eased = 1 - Math.pow(1 - p, 3)
      el.style.opacity = String(eased)
      // Reduced motion keeps the cross-fade but drops the travel.
      el.style.transform = reducedRef.current
        ? ''
        : `translate3d(0, ${((1 - eased) * TRAVEL).toFixed(2)}px, 0)`
    }
  }, [])

  useEffect(() => {
    const root = innerRef.current
    if (!root) return

    linesRef.current = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!linesRef.current.length) return

    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    update()

    // Lenis drives the frames during its eased glide, where native scroll
    // events are sparser than the animation. The window listener stays as the
    // floor: it covers keyboard paging, anchor jumps, and the case where Lenis
    // is not smoothing at all.
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    const lines = linesRef.current
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      for (const el of lines) {
        el.style.opacity = ''
        el.style.transform = ''
      }
    }
  }, [update])

  useLenis(update)

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
