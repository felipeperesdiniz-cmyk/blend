import type { NextConfig } from 'next'

// ─── HTTP Security Headers ────────────────────────────────────────────────────
//
// Applied to every route via the async headers() hook.
// These close the most common classes of web attack on a static Next.js site:
//   • Clickjacking          → X-Frame-Options + CSP frame-ancestors
//   • MIME sniffing         → X-Content-Type-Options
//   • Protocol downgrade    → HSTS + upgrade-insecure-requests
//   • XSS / script injection→ Content-Security-Policy
//   • Info leakage          → Referrer-Policy, X-Powered-By removed
//   • Unused browser APIs   → Permissions-Policy
//   • Cross-domain data     → X-Permitted-Cross-Domain-Policies
//
// Next.js dev mode wraps webpack modules with eval() for HMR / fast refresh —
// without 'unsafe-eval' the browser silently blocks all client-side script
// execution in dev (no errors, no hydration, no interactivity). Production
// builds use real script files and never call eval(), so this is scoped to
// development only and the production CSP stays maximally strict.
const isDev = process.env.NODE_ENV !== 'production'

const CSP = [
  "default-src 'self'",

  // Next.js requires 'unsafe-inline' for its injected __NEXT_DATA__ bootstrap
  // script and for the JSON-LD <script> tags used throughout the site.
  // 'unsafe-eval' is added only in dev — see comment above.
  // Google Tag Manager loads gtm.js (and gtag for GA4 / Google Ads) from
  // googletagmanager.com, and its Preview mode from tagmanager.google.com;
  // Google Ads conversion and remarketing tags load from googleadservices.com
  // and the doubleclick / google.com hosts; the Meta Pixel tag inside GTM
  // loads fbevents.js from connect.facebook.net.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} ${[
    'https://*.googletagmanager.com',
    'https://tagmanager.google.com',
    'https://www.googleadservices.com',
    'https://googleads.g.doubleclick.net',
    'https://www.google.com',
    'https://connect.facebook.net',
  ].join(' ')}`,

  // Framer-motion and JSX inline style props require 'unsafe-inline'.
  // Google Fonts stylesheet is loaded from fonts.googleapis.com; GTM's Preview
  // mode styles its debug panel from the two Tag Manager hosts.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.googletagmanager.com https://tagmanager.google.com",

  // Google Fonts actual font files are served from fonts.gstatic.com (GTM's
  // Preview panel uses them too, plus data: fonts).
  "font-src 'self' data: https://fonts.gstatic.com",

  // Images: local assets, base64 data URIs and blob URLs. Every photo on the
  // site is the salon's own; the third-party hosts are the tracking pixels
  // that GTM's tags (GA4, Google Ads, Meta) fire as image requests.
  [
    "img-src 'self' data: blob:",
    'https://*.googletagmanager.com',
    'https://ssl.gstatic.com',
    'https://www.gstatic.com',
    'https://*.google-analytics.com',
    'https://analytics.google.com',
    'https://*.analytics.google.com',
    'https://*.doubleclick.net',
    'https://www.googleadservices.com',
    'https://www.google.com',
    'https://www.facebook.com',
  ].join(' '),

  // The site itself makes no API calls; these are the analytics beacons that
  // GTM's tags send (GA4 collect, including its regional *.google-analytics.com
  // endpoints, Google Ads conversions and the Meta Pixel). A wildcard never
  // matches the bare domain, so analytics.google.com is listed on its own:
  // GA4 sends page_view there and it was blocked with only the wildcard.
  // *.doubleclick.net covers stats., googleads. and ad. (Google Ads' ccm
  // collect), all seen on the live site.
  [
    "connect-src 'self'",
    'https://www.google-analytics.com',
    'https://*.google-analytics.com',
    'https://analytics.google.com',
    'https://*.analytics.google.com',
    'https://*.googletagmanager.com',
    'https://*.doubleclick.net',
    'https://www.googleadservices.com',
    'https://www.google.com',
    'https://www.facebook.com',
  ].join(' '),

  // Google Maps embed on the Contact page, GTM's noscript fallback iframe,
  // GTM's Preview / Tag Assistant mode, and the iframe Google Ads
  // remarketing opens on td.doubleclick.net.
  "frame-src https://maps.google.com https://www.google.com https://www.googletagmanager.com https://td.doubleclick.net",

  // Block all plugin content (Flash, PDF viewers, etc.) — none used.
  "object-src 'none'",

  // Prevent attackers injecting a <base> tag to hijack relative URLs.
  "base-uri 'self'",

  // No forms submit to external URLs.
  "form-action 'self'",

  // Automatically upgrade any accidental HTTP sub-resource requests to HTTPS.
  "upgrade-insecure-requests",
].join('; ')

const SECURITY_HEADERS = [
  // ── Transport ────────────────────────────────────────────────────────────
  {
    // Force HTTPS for 2 years, include sub-domains, submit for preload list.
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },

  // ── Framing / Clickjacking ───────────────────────────────────────────────
  {
    // Prevent the site being embedded in iframes on other origins.
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },

  // ── MIME Sniffing ────────────────────────────────────────────────────────
  {
    // Tell browsers to honour the declared Content-Type and not sniff.
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },

  // ── XSS / Content Injection ─────────────────────────────────────────────
  {
    key: 'Content-Security-Policy',
    value: CSP,
  },
  {
    // Disable the legacy XSS Auditor — it can itself introduce XSS on old
    // browsers; modern browsers ignore it entirely, so 0 is correct.
    key: 'X-XSS-Protection',
    value: '0',
  },

  // ── Information Leakage ─────────────────────────────────────────────────
  {
    // Only send origin (no path/query) as Referer when crossing origins.
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    // Block Flash/Silverlight cross-domain policy files.
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none',
  },
  {
    // Opt out of Chrome's Privacy Sandbox interest-based tracking.
    key: 'Permissions-Policy',
    value: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'interest-cohort=()',
      'browsing-topics=()',
      'payment=()',
      'usb=()',
    ].join(', '),
  },

  // ── DNS Prefetch ─────────────────────────────────────────────────────────
  {
    // Allow DNS prefetch for performance (safe for a public marketing site).
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
]

// ─── Next.js Config ───────────────────────────────────────────────────────────
const nextConfig: NextConfig = {
  // Remove the "X-Powered-By: Next.js" response header — it tells attackers
  // which framework (and version) to target.
  poweredByHeader: false,

  // Attach security headers to every response the app serves.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: SECURITY_HEADERS,
      },
    ]
  },

  // ── Legacy URL Redirects ──────────────────────────────────────────────────
  // The redirect table lives in vercel.json, not here. Vercel applies its own
  // redirects at the edge before a request ever reaches the Next.js app, so
  // when both files defined rules the vercel.json ones silently won — and the
  // two had drifted apart: every /portfolio/* URL landed on /services while
  // this file believed it was sending them to the matching service page.
  // One table, at the layer that actually runs.

}

export default nextConfig
