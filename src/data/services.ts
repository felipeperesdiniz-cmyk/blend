export interface Service {
  id: string
  category: string
  title: string
  benefit: string
  description: string
  detail: string
  priceNote: string
  image: string
  badge?: string
}

export const SERVICES: Service[] = [
  {
    id: 'color-balayage',
    category: 'Hair Color',
    title: 'Color & Balayage',
    benefit: 'Dimension, depth, and luminosity designed for your lifestyle.',
    description: 'From sun-kissed balayage to rich all-over color, our colorists craft custom formulas tailored to your hair texture, skin tone, and maintenance preferences.',
    detail: 'Our color services begin with a thorough consultation to understand your vision and hair history. We use professional-grade color lines that protect hair integrity while delivering vibrant, lasting results.',
    priceNote: 'Starting price available upon booking',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80',
    badge: 'Most Requested',
  },
  {
    id: 'cuts-styling',
    category: 'Cut & Style',
    title: 'Haircuts & Styling',
    benefit: 'A cut that works for your hair, your life, your confidence.',
    description: 'Precision cuts, lived-in layers, and blowout styling that flatter your face shape and require minimal daily effort.',
    detail: 'Every cut begins with a dry consultation, assessing your natural texture and growth patterns before a single snip. We finish with a style that shows you exactly how to recreate the look at home.',
    priceNote: 'Starting price available upon booking',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'smoothing-keratin',
    category: 'Smoothing Treatments',
    title: 'Brazilian Blowout & Keratin',
    benefit: 'Frizz-free, smooth, and manageable hair for months.',
    description: 'Our Brazilian-inspired smoothing treatments eliminate frizz, reduce styling time, and leave your hair brilliantly smooth, soft, and healthy-looking.',
    detail: 'We offer a range of keratin and smoothing treatments calibrated to your hair type — from a gentle smoothing for sensitive hair to a full Brazilian blowout for dramatically frizzy or coarse textures. Results last 3–5 months.',
    priceNote: 'Starting price available upon booking',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    badge: 'Signature Service',
  },
  {
    id: 'nails',
    category: 'Nails',
    title: 'Nail Services',
    benefit: 'Beautiful, lasting nails to complete your look.',
    description: 'Manicures, pedicures, gel, and nail art. Our nail technicians deliver polished, precise results whether you prefer timeless classics or statement designs.',
    detail: 'From a clean, natural manicure to intricate nail art, we use professional products and sanitized tools for every client. Gel services include extended-wear topcoats for lasting shine.',
    priceNote: 'Starting price available upon booking',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'facials-spa',
    category: 'Skin & Spa',
    title: 'Facials & Spa',
    benefit: 'Radiant skin and a moment of pure restoration.',
    description: 'Customized facials, hydrating treatments, and spa rituals designed to brighten, balance, and restore your skin\'s natural glow.',
    detail: 'Our skin treatments are personalized to your skin type and concerns. Whether you\'re targeting dullness, dehydration, or simply need a moment of self-care, our estheticians create a tailored experience.',
    priceNote: 'Starting price available upon booking',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'waxing',
    category: 'Waxing & Brows',
    title: 'Waxing & Brow Shaping',
    benefit: 'Defined brows and smooth skin that frame your features.',
    description: 'Full and partial body waxing, eyebrow shaping, and brow tinting performed with precision and care.',
    detail: 'We use premium waxes suited to sensitive skin. All brow services are shaped to complement your natural face structure, not override it — the goal is always your best version, naturally.',
    priceNote: 'Starting price available upon booking',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'extensions',
    category: 'Extensions',
    title: 'Hair Extensions',
    benefit: 'Instant length, volume, and versatility.',
    description: 'Premium hair extensions applied for a seamless, natural look that blends beautifully with your own hair.',
    detail: 'Our extension specialists work with high-quality, ethically sourced hair. We recommend the best application method for your hair type and lifestyle — tape-in, sew-in, or clip-in — and guide you through ongoing care.',
    priceNote: 'Consultation required — pricing varies by length and method',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bridal-events',
    category: 'Bridal & Events',
    title: 'Bridal & Event Beauty',
    benefit: 'Unforgettable beauty for your most important moments.',
    description: 'Bridal packages, event styling, and beauty preparation for the days that matter most — hair, nails, and skin, all in one boutique.',
    detail: 'From your engagement to your wedding day, we offer coordinated beauty packages that include trials, day-of styling, and on-location services. We also cater to bridal parties with group packages designed for your timeline.',
    priceNote: 'Custom packages — book a bridal consultation',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    badge: 'Book Early',
  },
]

export const FAQ: { q: string; a: string }[] = [
  {
    q: 'How do I book an appointment at Blend Hair Boutique?',
    a: 'You can book directly online through our Fresha booking system — available 24/7. Select your service, preferred stylist, and time. For bridal packages or consultations, contact us by phone at (754) 206-3501 or WhatsApp at (954) 544-6792.',
  },
  {
    q: 'Where is Blend Hair Boutique located?',
    a: 'Blend Hair Boutique is located at 10035 Cleary Blvd, Plantation, FL 33324, in Broward County, South Florida. We are conveniently accessible from Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, and Pembroke Pines.',
  },
  {
    q: 'What are your hours?',
    a: 'We are open Monday 10 AM–5 PM, Tuesday through Saturday 10 AM–7 PM, and closed on Sunday. Walk-ins are welcome, but appointments are recommended to secure your preferred time and stylist.',
  },
  {
    q: 'What should I expect at my first visit?',
    a: 'Every new client begins with a thorough consultation. We ask about your hair history, current routine, lifestyle, and goals before recommending any service. This ensures we always deliver results tailored to you — never a generic outcome.',
  },
  {
    q: 'How long does a balayage appointment take?',
    a: 'Balayage appointments typically range from 2.5 to 4 hours depending on your hair length, density, and the result you\'re aiming for. We\'ll give you a realistic time estimate during booking or consultation.',
  },
  {
    q: 'Do you specialize in balayage and blonding?',
    a: 'Yes. Color and balayage is our most requested service. Our colorists specialize in custom balayage, highlights, blonding, and color correction — tailored to your hair texture, skin tone, and maintenance lifestyle. Blend Hair Boutique is one of Plantation\'s top-rated salons for color.',
  },
  {
    q: 'Do you do Brazilian blowouts and keratin treatments?',
    a: 'Yes. Brazilian blowout and keratin smoothing treatments are a signature service at Blend — especially popular given Florida\'s humidity. Results typically last 3–5 months. We calibrate the formula to your hair type, from gentle smoothing to a full Brazilian blowout.',
  },
  {
    q: 'Do you offer hair extensions?',
    a: 'Yes. We offer premium hair extensions including tape-in, sew-in, and clip-in methods. A consultation is required to assess your hair type and determine the best application method. Extension pricing varies by length and method.',
  },
  {
    q: 'Do you offer bridal hair packages?',
    a: 'Yes. Blend offers full bridal beauty packages including hair, nails, and skin services. We provide bridal trials, day-of styling, and group packages for bridal parties throughout South Florida. We recommend booking bridal consultations well in advance.',
  },
  {
    q: 'What languages does the Blend team speak?',
    a: 'The Blend Hair Boutique team is multilingual — we serve clients in English, Portuguese, and Spanish. Our Brazilian-trained specialists bring both technical expertise and genuine warmth to every appointment.',
  },
  {
    q: 'Do you offer gift cards?',
    a: 'Yes — we offer gift cards in any amount, perfect for the people in your life who deserve a little luxury. They can be purchased online through our booking platform or in the boutique.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We ask for at least 24 hours\' notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee. We appreciate your understanding — it helps us serve all clients well.',
  },
  {
    q: 'Do you use Kérastase or professional hair care products?',
    a: 'We work with professional-grade color and care lines selected for performance and hair health — including products from premium professional ranges. We\'re always happy to recommend home-care products that complement your in-salon treatment.',
  },
]
