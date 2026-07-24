import type { Metadata } from 'next'
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
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blend Hair Boutique — Luxury Hair Salon in Plantation, Florida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
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
        width: 200,
        height: 80,
      },
      image: `${SITE_URL}/og-image.jpg`,
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
        'https://www.tiktok.com/@blendhairboutique',
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
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smoothing Treatment — Keratin / Hair Botox', url: `${SITE_URL}/services/smoothing`, description: 'Frizz-eliminating keratin and hair botox smoothing treatments. Results last 3 to 5 months. Ideal for Florida humidity.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hair Care — In-Salon Treatments', url: `${SITE_URL}/services/hair-care`, description: 'In-salon Kérastase hair care treatments designed to repair, hydrate, and strengthen hair.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hair Extensions', url: `${SITE_URL}/services/extensions`, description: 'Premium hair extensions including tape-in, keratin, and clip-in methods. Consultation required.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nail Services', url: `${SITE_URL}/services/nails`, description: 'Manicures, pedicures, gel nails, and dip powder by professional nail technicians in Plantation, FL.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eyebrow Services', url: `${SITE_URL}/services/eyebrows`, description: 'Eyebrow design, tinting, and lamination services in Plantation, Florida.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Makeup', url: `${SITE_URL}/services/makeup`, description: 'Professional makeup application for events, photoshoots, and special occasions.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waxing & Threading', url: `${SITE_URL}/services/waxing`, description: 'Full and partial body waxing and threading services in Plantation, Florida.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facials', url: `${SITE_URL}/services/facials`, description: 'Customized facials, microneedling, peels, and skin treatments for all skin types at Blend Hair Boutique.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eyelash Services', url: `${SITE_URL}/services/eyelashes`, description: 'Eyelash tinting and lash lift services in Plantation, Florida.' } },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1230',
        bestRating: '5',
        worstRating: '1',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero-interior-mobile.webp"
          type="image/webp"
          media="(max-width: 640px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/hero-interior.webp"
          type="image/webp"
          media="(min-width: 641px)"
          fetchPriority="high"
        />
        <meta name="keywords" content="hair salon Plantation FL, balayage Plantation, Brazilian blowout Plantation, keratin treatment Florida, luxury hair salon South Florida, nail salon Plantation, bridal hair Plantation FL, hair color Plantation FL, blowout Plantation Florida" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body>
        <Providers>
          <AnnouncementBar />
          <Nav />
          {children}
          <Footer />
          <StickyMobileCTA />
        </Providers>
      </body>
    </html>
  )
}
