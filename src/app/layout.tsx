import type { Metadata } from 'next'
import Script from 'next/script'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'

// Self-hosted via next/font — no render-blocking request to Google's CDN,
// automatic preloading, and only the weights the site actually uses.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})
import AnnouncementBar from '@/components/AnnouncementBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import { OG_IMAGE } from '@/data/constants'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Blend Hair Boutique | Luxury Hair Salon in Plantation, FL',
    template: '%s | Blend Hair Boutique',
  },
  description:
    'Blend Hair Boutique is a luxury hair salon in Plantation, Florida offering balayage, Brazilian blowout, keratin treatments, haircuts, nail services, facials, and bridal beauty. Book online 24/7.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Blend Hair Boutique',
    locale: 'en_US',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE.url],
  },
  // Carried over from the Alboom site. That site verified the Search Console
  // property with this meta tag and nothing else — there is no
  // google-site-verification TXT record on the domain — so the tag disappearing
  // at cutover would have failed Google's next re-check and cost the client the
  // property along with every year of history in it. Do not remove without
  // confirming a second verification method (DNS TXT) is in place first.
  verification: {
    google: 'WShX2_mpdxlavpC3AT9Zo-0bRt5tcrH8zGkjpjaVLU0',
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Plantation, Florida',
    'geo.position': '26.1182;-80.2101',
    ICBM: '26.1182, -80.2101',
  },
}

const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Blend Hair Boutique',
      description:
        'Luxury hair salon and beauty boutique in Plantation, Florida. Specializing in balayage, Brazilian blowout, keratin treatments, haircuts, nail services, facials, waxing, hair extensions, and bridal beauty.',
      inLanguage: ['en-US', 'pt-BR', 'es'],
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': ['HairSalon', 'LocalBusiness', 'BeautySalon'],
      '@id': `${SITE_URL}/#business`,
      name: 'Blend Hair Boutique',
      alternateName: 'Blend Hair Boutique Plantation FL',
      description:
        'Blend Hair Boutique is a luxury hair salon and full-service beauty boutique located in Plantation, Florida. The salon specializes in balayage, Brazilian blowout, keratin smoothing treatments, precision haircuts, nail services, facials, waxing, hair extensions, and bridal beauty packages. The team is multilingual, serving clients in English, Portuguese, and Spanish, reflecting a Brazilian-inspired approach to beauty.',
      url: `${SITE_URL}/`,
      telephone: '+17542063501',
      email: 'info@blendhairboutique.com',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 1200,
      },
      // A photograph, deliberately not /og-image.jpg. That file is now the
      // wordmark, and it is already declared above as `logo`. Schema.org's
      // `image` on a LocalBusiness is meant to be a picture of the place —
      // Google shows it in local results, and a logo in both slots wastes one.
      image: `${SITE_URL}/hero-interior.jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '10035 Cleary Blvd',
        addressLocality: 'Plantation',
        addressRegion: 'FL',
        postalCode: '33324',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Plantation, FL' },
        { '@type': 'City', name: 'Fort Lauderdale, FL' },
        { '@type': 'City', name: 'Davie, FL' },
        { '@type': 'City', name: 'Weston, FL' },
        { '@type': 'City', name: 'Sunrise, FL' },
        { '@type': 'City', name: 'Pembroke Pines, FL' },
        { '@type': 'City', name: 'Miramar, FL' },
        { '@type': 'City', name: 'Cooper City, FL' },
        { '@type': 'City', name: 'Boca Raton, FL' },
        { '@type': 'City', name: 'Miami, FL' },
        { '@type': 'AdministrativeArea', name: 'Broward County, FL' },
        { '@type': 'AdministrativeArea', name: 'South Florida' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      priceRange: '$$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Debit Card, Zelle',
      knowsLanguage: ['en', 'pt', 'es'],
      hasMap: 'https://maps.google.com/?q=10035+Cleary+Blvd,+Plantation,+FL+33324',
      sameAs: [
        'https://www.instagram.com/blendhairboutique',
        'https://www.facebook.com/blendhairboutique',
        'https://www.fresha.com/book-now/blend-hair-boutique-tsmvse5t/all-offer',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Hair & Beauty Services at Blend Hair Boutique',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Haircuts', url: `${SITE_URL}/services/haircuts`, description: 'Precision haircuts with shampoo wash included, plus an optional professional blowdry, for women, men, and kids in Plantation, Florida.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Color Services', url: `${SITE_URL}/services/color`, description: 'Custom hair color including root retouch and all-over color, with ammonia-free formulas available, at Blend Hair Boutique in Plantation, FL.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Balayage & Highlights', url: `${SITE_URL}/services/balayage-highlights`, description: 'Hand-painted balayage, foil highlights, face-framing contour highlights, toner, and color correction tailored to each client\'s hair texture and skin tone.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hair Styling', url: `${SITE_URL}/services/styling`, description: 'Blowdry styling, curls, flat-iron finishing, up-dos, and perms in Plantation, Florida.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smoothing Treatment: Keratin / Hair Botox', url: `${SITE_URL}/services/smoothing`, description: 'Frizz-eliminating keratin and hair botox smoothing treatments. Results last 3 to 5 months. Ideal for Florida humidity.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hair Care: In-Salon Treatments', url: `${SITE_URL}/services/hair-care`, description: 'In-salon Kérastase hair care treatments designed to repair, hydrate, and strengthen hair.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hair Extensions', url: `${SITE_URL}/services/extensions`, description: 'Premium hair extensions including tape-in, keratin, and clip-in methods. Consultation required.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nail Services', url: `${SITE_URL}/services/nails`, description: 'Manicures, pedicures, gel nails, and dip powder by professional nail technicians in Plantation, FL.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eyebrow Services', url: `${SITE_URL}/services/eyebrows`, description: 'Eyebrow design, tinting, and lamination services in Plantation, Florida.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Makeup', url: `${SITE_URL}/services/makeup`, description: 'Professional makeup application for events, photoshoots, and special occasions.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waxing & Threading', url: `${SITE_URL}/services/waxing`, description: 'Full and partial body waxing and threading services in Plantation, Florida.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facials', url: `${SITE_URL}/services/facials`, description: 'Customized facials, microneedling, peels, and skin treatments for all skin types at Blend Hair Boutique.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eyelash Services', url: `${SITE_URL}/services/eyelashes`, description: 'Eyelash tinting and lash lift services in Plantation, Florida.' } },
        ],
      },
      // No aggregateRating here, deliberately.
      //
      // The 4.9 / 1,230 figure is real, but it is the Google Business Profile
      // rating, and the quoted reviews on /reviews come from Google, Yelp and
      // Fresha. Google's review-snippet policy disallows a business marking up
      // ratings about itself that it did not collect first-party — that is the
      // "self-serving review" case, and on a LocalBusiness it is the usual
      // trigger for a structured-data manual action. Losing the whole site's
      // rich results to win a star that Google already shows from the GBP in
      // the local pack is a bad trade.
      //
      // The rating still appears as visible text throughout the site, which is
      // allowed and is what the trust bar is for. Only the markup claim is gone.
      // To earn this back legitimately, collect reviews on the site itself and
      // mark those up as Review objects alongside the aggregate.
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* The hero-interior stills were preloaded at high priority here back
            when the homepage hero was an image. The film hero replaced them and
            nothing renders them any more, so these were fetching unused bytes on
            every page — and doing it in the same window the hero video needs the
            bandwidth. The video carries its own poster. */}
        <meta name="keywords" content="hair salon Plantation FL, balayage Plantation, Brazilian blowout Plantation, keratin treatment Florida, luxury hair salon South Florida, nail salon Plantation, bridal hair Plantation FL, hair color Plantation FL, blowout Plantation Florida" />
        {/* Sets <html lang> from the URL before the body paints.

            Only the root layout renders <html>, and it gets no route params, so
            it cannot know the locale — the obvious fix, reading headers() from
            middleware, makes every route on the site dynamically rendered, which
            is a poor trade for one attribute on a marketing site that is
            otherwise fully static.

            This runs synchronously in <head>, so the attribute is correct before
            anything is painted and long before hydration; LangProvider keeps it
            in sync from then on. Crawlers that do not execute JavaScript still
            see lang="en" here, which is why hreflang and the locale URL prefix —
            both static, both in the markup — carry the real signal, and why
            app/pt/layout.tsx and app/es/layout.tsx declare the language on the
            content itself where a non-JS reader will actually see it. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var s=location.pathname.split('/')[1];" +
              "if(s==='pt'||s==='es')document.documentElement.lang=s==='pt'?'pt-BR':'es';",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />

        {/* Google Tag Manager — container GTM-P3LCHJ44, supplied by the
            client's marketing agency. GA4, Google Ads and Meta are all
            configured inside GTM, so nothing else belongs in this file:
            the agency adds and edits tags from the GTM console without a
            deploy. afterInteractive keeps it off the critical path but fires
            it early enough not to lose conversions. The container can inject
            arbitrary JavaScript into every page, so whoever holds GTM access
            effectively holds publish rights on this site. */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P3LCHJ44');`}
        </Script>
      </head>
      <body>
        {/* GTM's no-JavaScript fallback. First element in <body> by Google's
            spec; it is how the container still fires for visitors and crawlers
            that do not run scripts. */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3LCHJ44"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Providers>
          {/* First focusable element on every page: without it a keyboard or
              screen-reader visitor tabbed the whole navigation again on each
              route, and #main-content existed with nothing pointing at it. */}
          <a href="#main-content" className="skip-link">Skip to content</a>
          <AnnouncementBar />
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </Providers>
      </body>
    </html>
  )
}
