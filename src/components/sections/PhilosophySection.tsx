'use client'
import { useEffect, useRef } from 'react'

// Each line reveals as it is scrolled to, rather than the whole block animating
// once on mount.
//
// Driven by scroll position rather than IntersectionObserver. IO does not fire
// while a document is hidden, so a page opened in a background tab, restored
// from bfcache, or prerendered would arm the hide and then never undo it —
// leaving the statement permanently invisible. A scroll/rAF check has no such
// dependency, and anything already on screen when the effect runs is revealed
// immediately, so nothing can end up hidden without a scroll available to
// bring it back.
//
// The hiding itself is applied by JS (`data-reveal-armed`) rather than sitting
// in the stylesheet, so a no-JS client — or the frame before hydration — still
// renders the statement in full.
export default function PhilosophySection() {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = innerRef.current
    if (!root) return

    const pending = new Set(Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]')))
    if (!pending.size) return

    // Reduced motion is handled in CSS: the reveal degrades to a plain
    // cross-fade with no travel. Skipping the mechanism entirely here meant it
    // simply never ran for anyone with the OS setting on.
    root.setAttribute('data-reveal-armed', '')

    let frame = 0

    const check = () => {
      frame = 0
      // Commit a line once it is properly in frame rather than the instant it
      // clips the bottom edge.
      const line = window.innerHeight * 0.78
      let batch = 0
      for (const el of Array.from(pending)) {
        const rect = el.getBoundingClientRect()
        if (rect.top < line && rect.bottom > 0) {
          // Anything crossing in the same pass is staggered against its
          // neighbours: the lines sit close together, so on an ordinary scroll
          // they all arrive at once and would otherwise fade as a single block.
          // Arriving one at a time they each take a zero delay, so a slow
          // scroll keeps its own pacing.
          el.style.transitionDelay = `${batch++ * 140}ms`
          el.classList.add('is-revealed')
          pending.delete(el)
        }
      }
      if (!pending.size) stop()
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }

    const stop = () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      document.removeEventListener('visibilitychange', check)
      if (frame) cancelAnimationFrame(frame)
      frame = 0
    }

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    // Covers the background-tab case. Deliberately calls check directly rather
    // than going through schedule: requestAnimationFrame is also paused while a
    // document is hidden, so routing this through it would defer the very work
    // that needs to happen the moment the page becomes visible.
    document.addEventListener('visibilitychange', check)

    check() // anything already on screen reveals right away

    return () => {
      stop()
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
