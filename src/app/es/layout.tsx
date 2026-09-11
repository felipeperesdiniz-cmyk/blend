import type { ReactNode } from 'react'

/**
 * Declares the Spanish content's language in the static HTML.
 *
 * Only the root layout renders <html>, and it gets no route params, so its
 * lang attribute is hardcoded to "en" and corrected by an inline script before
 * paint (see app/layout.tsx). That leaves anything which does not execute
 * JavaScript — Bing, most other crawlers, some assistive tooling — reading
 * the translated copy as though it were English.
 *
 * lang is a global attribute, so scoping it to a wrapper here is valid and
 * costs nothing: the nearest ancestor wins, and every page under /es
 * inherits it straight out of the prerendered markup. Doing it in a layout
 * rather than in each page covers the dynamic landing and service routes too.
 *
 * The full fix is a root layout per locale via route groups, which is the only
 * way to put the right value on <html> itself. It moves every route folder on
 * the site and needs three separate not-found boundaries — disproportionate
 * for one attribute, given the wrapper carries the same signal to the same
 * readers.
 *
 * The div is unstyled and nothing in globals.css selects on main's children,
 * so it changes no layout.
 */
export default function EsLayout({ children }: { children: ReactNode }) {
  return <div lang="es">{children}</div>
}
