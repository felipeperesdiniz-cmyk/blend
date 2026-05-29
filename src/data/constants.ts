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
  giftCardUrl: 'https://www.fresha.com/book-now/blend-hair-boutique-tsmvse5t/all-offer',

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

export const NAV_LINKS = [
  { label: 'Services',  href: '/services' },
  { label: 'Gallery',   href: '/gallery' },
  { label: 'Team',      href: '/team' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
] as const
