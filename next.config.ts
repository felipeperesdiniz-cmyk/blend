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
const CSP = [
  "default-src 'self'",

  // Next.js requires 'unsafe-inline' for its injected __NEXT_DATA__ bootstrap
  // script and for the JSON-LD <script> tags used throughout the site.
  "script-src 'self' 'unsafe-inline'",

  // Framer-motion and JSX inline style props require 'unsafe-inline'.
  // Google Fonts stylesheet is loaded from fonts.googleapis.com.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

  // Google Fonts actual font files are served from fonts.gstatic.com.
  "font-src 'self' https://fonts.gstatic.com",

  // Images: local assets, base64 data URIs, blob URLs (Next.js image
  // optimization), and Unsplash CDN used throughout the gallery.
  "img-src 'self' data: blob: https://images.unsplash.com",

  // No external fetch/XHR from the client — static site with no API calls.
  "connect-src 'self'",

  // Google Maps embed on the Contact page is the only iframe on the site.
  "frame-src https://maps.google.com https://www.google.com",

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

  // Only allow Next.js Image optimisation to pull from Unsplash.
  // Any other remote hostname will be rejected at the CDN level.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // Attach security headers to every response the app serves.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: SECURITY_HEADERS,
      },
    ]
  },

  // ── Legacy URL Redirects (301 Permanent) ──────────────────────────────────
  // Maps every URL from the old Fresha-hosted site to the new site.
  // All redirects resolve in a single hop — no chains, no loops.
  async redirects() {
    return [
      // Home variants
      { source: '/home', destination: '/', permanent: true },

      // Contact / forms
      { source: '/client-form', destination: '/contact', permanent: true },
      { source: '/thank-you', destination: '/', permanent: true },

      // Gallery
      { source: '/galleries', destination: '/gallery', permanent: true },
      { source: '/gallery/:path+', destination: '/gallery', permanent: true },

      // Portfolio → service pages
      { source: '/portfolio/hair-color', destination: '/hair-color-plantation', permanent: true },
      { source: '/portfolio/hair-color/:path+', destination: '/hair-color-plantation', permanent: true },

      { source: '/portfolio/hair-cut', destination: '/haircuts-plantation-fl', permanent: true },
      { source: '/portfolio/hair-cut/:path+', destination: '/haircuts-plantation-fl', permanent: true },

      { source: '/portfolio/hair-stylist', destination: '/blowout-plantation-fl', permanent: true },
      { source: '/portfolio/hair-stylist/:path+', destination: '/blowout-plantation-fl', permanent: true },

      { source: '/portfolio/smoothing-treatment', destination: '/keratin-treatment-plantation', permanent: true },
      { source: '/portfolio/smoothing-treatment/:path+', destination: '/keratin-treatment-plantation', permanent: true },

      { source: '/portfolio/eyebrows', destination: '/micropigmentation-plantation-fl', permanent: true },
      { source: '/portfolio/eyebrows/:path+', destination: '/micropigmentation-plantation-fl', permanent: true },

      { source: '/portfolio/lips', destination: '/micropigmentation-plantation-fl', permanent: true },
      { source: '/portfolio/lips/:path+', destination: '/micropigmentation-plantation-fl', permanent: true },

      { source: '/portfolio/make-up', destination: '/makeup-plantation-fl', permanent: true },
      { source: '/portfolio/make-up/:path+', destination: '/makeup-plantation-fl', permanent: true },

      { source: '/portfolio/nails', destination: '/nails-plantation-fl', permanent: true },
      { source: '/portfolio/nails/:path+', destination: '/nails-plantation-fl', permanent: true },

      { source: '/portfolio/waxing', destination: '/waxing-plantation-fl', permanent: true },
      { source: '/portfolio/waxing/:path+', destination: '/waxing-plantation-fl', permanent: true },

      // "tratament" = updo/styling on the old site
      { source: '/portfolio/tratament', destination: '/blowout-plantation-fl', permanent: true },
      { source: '/portfolio/tratament/:path+', destination: '/blowout-plantation-fl', permanent: true },

      // Price list → services hub
      { source: '/price-list', destination: '/services', permanent: true },

      // Testimonials → reviews
      { source: '/testimonials', destination: '/reviews', permanent: true },
    ]
  },
}

export default nextConfig
