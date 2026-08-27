// ─── Business Constants ───────────────────────────────────────

export const BUSINESS = {
  name:        'Blend Hair Boutique',
  tagline:     'Luxury Hair & Beauty With a Brazilian Touch',
  city:        'Plantation, Florida',

  // Physical address — matches Google Business Profile exactly
  address:     '10035 Cleary Blvd, Plantation, FL 33324',
  addressStreet: '10035 Cleary Blvd',
  addressCity:   'Plantation',
  addressState:  'FL',
  addressZip:    '33324',

  // Calls only
  phone:       '(754) 206-3501',
  phoneHref:   'tel:+17542063501',

  // WhatsApp — separate number, text only
  whatsappNumber: '19545446792',
  whatsapp:    'https://wa.me/19545446792',

  email:       'info@blendhairboutique.com',

  // Social
  instagram:   'https://www.instagram.com/blendhairboutique',
  facebook:    'https://www.facebook.com/blendhairboutique',
  tiktok:      'https://www.tiktok.com/@blendhairboutique',

  // Booking / Gift cards
  bookingUrl:  'https://www.fresha.com/book-now/blend-hair-boutique-tsmvse5t/all-offer',
  // Fresha's own gift card checkout for this venue. It used to point at the
  // general booking URL, which dropped anyone trying to buy a gift into a
  // service picker with no gift card in sight.
  giftCardUrl: 'https://www.fresha.com/a/blend-hair-boutique-plantation-10035-cleary-blvd-xxr1ujbz/gift-cards?menu=true',

  // Google Maps — directions link + embed URL
  mapsDirections: 'https://maps.google.com/?q=10035+Cleary+Blvd,+Plantation,+FL+33324',
  mapsEmbedUrl:   'https://maps.google.com/maps?q=10035%20Cleary%20Blvd%2C%20Plantation%2C%20FL%2033324&output=embed&z=16',

  hours: [
    { day: 'Monday',           time: '9:00 AM – 6:00 PM' },
    { day: 'Tuesday',          time: '9:00 AM – 6:00 PM' },
    { day: 'Wednesday',        time: '9:00 AM – 6:00 PM' },
    { day: 'Thursday',         time: '9:00 AM – 7:00 PM' },
    { day: 'Friday',           time: '9:00 AM – 7:00 PM' },
    { day: 'Saturday',         time: '9:00 AM – 7:00 PM' },
    { day: 'Sunday',           time: 'Closed' },
  ],
} as const

// ─── Page titles ──────────────────────────────────────────────
// The root layout appends ' | Blend Hair Boutique' to every child segment, so
// page-level titles must not repeat it — doing so is what produced 29 tags
// reading "… | Blend Hair Boutique | Blend Hair Boutique", several over 100
// characters against the ~60 a search result displays.
//
// Static routes are written to fit. Dynamic ones cannot be: an article headline
// is content, and truncating it to make room for the brand is the wrong trade.
// So for those, hand the title through this helper — it keeps the brand when it
// fits and drops it when it doesn't, because the brand is the half a reader can
// infer from the result's domain and the headline is the half they can't.
const BRAND_SUFFIX = ' | Blend Hair Boutique'
export const TITLE_BUDGET = 60

export function pageTitle(title: string): string | { absolute: string } {
  return title.length + BRAND_SUFFIX.length <= TITLE_BUDGET
    ? title
    : { absolute: title }
}

// ─── Social proof ─────────────────────────────────────────────
// Single source of truth for the Google rating. Every locale, every landing
// page and the LocalBusiness schema derive their copy from these two values.
// They used to be retyped per string, which is how English reached 1,230 while
// Portuguese and Spanish were still quoting 1,218 — and how the trust bar came
// to advertise "5-Star Rated" over a 4.9 rating stated one scroll below it.
export const REVIEWS = {
  rating: '4.9',
  count:  1230,
} as const

// Grouped by hand rather than toLocaleString: Intl's output can differ between
// the Node render and the browser, and a mismatch here would be a hydration
// error on a string that appears in the trust bar of every page.
const group = (n: number, sep: string) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep)

// The figures are identical in all three locales; only the separator and the
// surrounding words change. en-US groups with a comma, pt-BR and es with a period.
export const REVIEW_LINE = {
  en: `${REVIEWS.rating} ★ · ${group(REVIEWS.count, ',')}+ Google Reviews`,
  pt: `${REVIEWS.rating} ★ · ${group(REVIEWS.count, '.')}+ Avaliações Google`,
  es: `${REVIEWS.rating} ★ · ${group(REVIEWS.count, '.')}+ Reseñas de Google`,
} as const

// Same line with the city appended — used as an eyebrow above section headings.
export const REVIEW_LINE_LOCATED = {
  en: `${REVIEW_LINE.en} · Plantation, FL`,
  pt: `${REVIEW_LINE.pt} · Plantation, FL`,
  es: `${REVIEW_LINE.es} · Plantation, FL`,
} as const

export const NAV_LINKS = [
  { label: 'Services',  href: '/services' },
  { label: 'Gallery',   href: '/gallery' },
  { label: 'Team',      href: '/team' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
] as const

// ─── Social share image ───────────────────────────────────────
// Next replaces, rather than merges, a parent openGraph object when a page
// declares its own — so a page that sets openGraph without images ships no
// og:image at all. Every page spreads this in rather than relying on the root
// layout. The file also lives at /og-image.jpg for the JSON-LD `image` field,
// which takes a URL and cannot read the app-router file convention.
export const OG_IMAGE = {
  url: 'https://www.blendhairboutique.com/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Juliana and Fernanda, owners of Blend Hair Boutique in Plantation, Florida',
} as const
