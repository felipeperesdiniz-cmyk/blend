export interface PriceItem {
  label: string
  price: string
  note?: string
}

export interface PriceGroup {
  heading?: string
  items: PriceItem[]
}

export interface Service {
  id: string
  category: string
  title: string
  benefit: string
  description: string
  detail: string
  priceNote: string
  priceGroups?: PriceGroup[]
  image: string
  badge?: string
}

export const SERVICES: Service[] = [
  {
    id: 'haircuts',
    category: 'Haircuts',
    title: 'Haircuts',
    benefit: 'A precision cut, wash included, for every hair type.',
    description: 'Precision haircuts with a relaxing shampoo wash included, performed by specialists trained for every hair type and texture. A professional blowdry is offered right after your cut.',
    detail: 'Every cut begins with a consultation, assessing your natural texture and growth patterns before a single snip, followed by a shampoo wash. A blowdry is offered immediately after your haircut. Length is categorized as Short (ear length), Medium (shoulder length), Long (past the shoulder), and Extra Length (below the bra line). We have specialists for every hair type — straight, wavy, curly, and coily.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Haircuts (wash included)',
        items: [
          { label: "Women's Haircut", price: '$90+' },
          { label: "Men's Haircut", price: '$45' },
          { label: "Junior Boy's Haircut (up to 14Y)", price: '$35' },
          { label: "Junior Girl's Haircut (up to 14Y)", price: '$50+' },
          { label: "Kids Boy's Haircut (up to 10Y)", price: '$25' },
          { label: "Kids Girl's Haircut (up to 10Y)", price: '$30+' },
        ],
      },
      {
        heading: 'Cut & Blow Dry — by Length',
        items: [
          { label: 'Short (Ear Length)', price: '$115' },
          { label: 'Medium (Shoulder Length)', price: '$125' },
          { label: 'Long (Past Shoulder)', price: '$135' },
          { label: 'Extra Length (Below Bra Line)', price: '$145' },
        ],
      },
    ],
    image: '/images/services/haircuts.webp',
  },
  {
    id: 'color',
    category: 'Hair Color',
    title: 'Color Services',
    benefit: 'Rich, custom color crafted with the best products in the industry.',
    description: 'We specialize in coloring and use only the best products in the industry — from a single-process root retouch to a complete all-over transformation, with ammonia-free formulas available on every service.',
    detail: 'Every color appointment starts with a consultation on your hair history, scalp sensitivity, and the result you want. Ammonia-free formulas are available across our root retouch and all-over color services for clients who prefer a gentler process without sacrificing vibrancy or coverage.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Roots Retouch',
        items: [
          { label: 'Roots Retouch (Single Color)', price: '$85' },
          { label: 'Roots Retouch (Ammonia-Free Color)', price: '$90' },
        ],
      },
      {
        heading: 'All-Over Color — by Length',
        items: [
          { label: 'Short (Ear Length)', price: '$115' },
          { label: 'Short (Ear Length) — Ammonia-Free', price: '$120' },
          { label: 'Medium (Shoulder Length)', price: '$135' },
          { label: 'Medium (Shoulder Length) — Ammonia-Free', price: '$140' },
          { label: 'Long (Past Shoulder)', price: '$155' },
          { label: 'Long (Past Shoulder) — Ammonia-Free', price: '$160' },
          { label: 'Extra Length (Below Bra Line)', price: '$175' },
          { label: 'Extra Length (Below Bra Line) — Ammonia-Free', price: '$180' },
        ],
      },
    ],
    image: '/images/services/color.webp',
  },
  {
    id: 'balayage-highlights',
    category: 'Balayage & Highlights',
    title: 'Balayage & Highlights',
    benefit: 'Hand-painted dimension and sun-kissed brightness.',
    description: 'From a soft, hand-painted balayage to precise foiled highlights and face-framing contour pieces, our colorists build dimension that grows out beautifully and suits your skin tone.',
    detail: 'Balayage and highlight services are fully customized in consultation — we\'ll talk through placement, maintenance, and tone before any foil or brush touches your hair. Color correction is quoted individually after an in-person consultation, since every case is different.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Balayage & Highlights',
        items: [
          { label: 'Balayage', price: '$280+' },
          { label: 'Partial Highlights/Lowlights', price: '$180+' },
          { label: 'Full Highlights/Lowlights', price: '$240+' },
          { label: 'Contour Highlights (Face Framing)', price: '$150+' },
          { label: 'Single Foil', price: '$15' },
          { label: 'Toner', price: '$60+' },
          { label: 'Color Correction', price: 'By Consultation' },
        ],
      },
    ],
    image: '/images/services/balayage-highlights.webp',
    badge: 'Most Requested',
  },
  {
    id: 'styling',
    category: 'Hair Styling',
    title: 'Hair Styling',
    benefit: 'Beachy waves, glossy blowouts, or an unforgettable finish.',
    description: 'Go for fun, beachy waves or a glossy, smooth style — let your imagination speak to you, and our stylists will create what you imagine. Our Brazilian-style blow dry is an unforgettable experience.',
    detail: 'From an everyday blowdry to a full up-do for a special occasion, our styling menu covers every length and every look. Curls, flat-iron finishing, and perms are also available for clients who want lasting texture between salon visits.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Hair Styling',
        items: [
          { label: 'Blow Dry — Short', price: '$40' },
          { label: 'Blow Dry — Medium', price: '$50' },
          { label: 'Blow Dry — Long', price: '$60' },
          { label: 'Blow Dry — Extra Long', price: '$70' },
          { label: 'Add Curls or Flat Iron', price: '$20' },
          { label: 'Curls Only', price: '$35+' },
          { label: 'Curl Styling', price: '$50' },
          { label: 'Up Do', price: '$100+' },
          { label: 'Perm', price: '$150+' },
        ],
      },
    ],
    image: '/images/services/styling.webp',
  },
  {
    id: 'smoothing',
    category: 'Smoothing Treatments',
    title: 'Smoothing Treatment — Keratin / Hair Botox',
    benefit: 'Frizz-free, smooth, and manageable hair for months.',
    description: 'Our Brazilian-inspired smoothing treatments eliminate frizz, reduce styling time, and leave your hair brilliantly smooth, soft, and healthy-looking.',
    detail: 'We offer a range of keratin and hair botox smoothing treatments calibrated to your hair type and length, from a gentle smoothing for sensitive hair to a full treatment for dramatically frizzy or coarse textures. Results typically last 3–5 months.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Smoothing Treatment — Keratin / Hair Botox',
        items: [
          { label: 'Short (Ear Length)', price: '$230+' },
          { label: 'Medium (Shoulder Length)', price: '$270+' },
          { label: 'Long (Below Shoulder Length)', price: '$300+' },
          { label: 'Extra Long (Below Bra Length)', price: '$330+' },
        ],
      },
    ],
    image: '/images/services/smoothing.webp',
    badge: 'Signature Service',
  },
  {
    id: 'hair-care',
    category: 'Hair Care',
    title: 'Hair Care — In-Salon Treatments',
    benefit: 'Restorative Kérastase treatments customized to your hair.',
    description: 'A full menu of in-salon hair care treatments, including the Kérastase range, designed to repair, hydrate, and strengthen hair between major services.',
    detail: 'These treatments pair beautifully with any color, cut, or styling appointment, and can also be booked on their own. Our team will recommend the right combination based on your hair\'s condition that day.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'In-Salon Treatments',
        items: [
          { label: 'Special Wash', price: '$10' },
          { label: 'Single Wash', price: '$18' },
          { label: 'Kérastase Mask', price: '$30' },
          { label: 'Kérastase Chroma Gloss', price: '$40' },
          { label: 'Kérastase Fusio Dose', price: '$50' },
          { label: 'Kérastase Fusio Dose Max', price: '$60' },
          { label: 'Kérastase Première Treatment', price: '$60' },
          { label: 'Kérastase Chroma Max', price: '$70' },
          { label: 'Kérastase Caviar', price: '$80' },
        ],
      },
    ],
    image: '/images/services/hair-care.webp',
  },
  {
    id: 'extensions',
    category: 'Extensions',
    title: 'Hair Extensions',
    benefit: 'Instant length, volume, and versatility.',
    description: 'Premium hair extensions applied for a seamless, natural look that blends beautifully with your own hair — tape-in, keratin, or clip-in.',
    detail: 'Our extension specialists assess your hair density and lifestyle to recommend the best method and guide you through ongoing maintenance. Pricing for tape extension services covers up to 2 packs; additional packs are charged $50 per pack.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Hair Extensions (tape services priced for up to 2 packs — additional packs $50 each)',
        items: [
          { label: 'Tape Extension Removal Only', price: '$80' },
          { label: 'Tape Extension Placement', price: '$250' },
          { label: 'Tape Extension Removal & Maintenance', price: '$180+' },
          { label: 'Tape Extension Removal & Replacement', price: '$350+' },
          { label: 'Keratin Extension Placement', price: '$450' },
          { label: 'Keratin Extension Removal', price: '$200' },
          { label: 'Clip Extension Placement', price: '$35' },
        ],
      },
    ],
    image: '/images/services/extensions.webp',
  },
  {
    id: 'nails',
    category: 'Nails',
    title: 'Nail Services',
    benefit: 'Beautiful, lasting nails to complete your look.',
    description: 'Manicures, pedicures, gel, and dip powder. Our nail technicians deliver polished, precise results with sanitized tools for every client.',
    detail: 'From a clean, classic manicure to a long-wearing gel finish, we use professional products and proper sanitation for every appointment.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Nail Services',
        items: [
          { label: 'Manicure — Regular', price: '$27' },
          { label: 'Manicure — Gel', price: '$32' },
          { label: 'Pedicure — Regular', price: '$35' },
          { label: 'Pedicure — Gel', price: '$40' },
          { label: 'Soak Off', price: '$7' },
          { label: 'Mani Dip Powder', price: '$55' },
          { label: 'Dip Soak Off', price: '$10' },
          { label: 'Polish Change', price: '$15' },
        ],
      },
    ],
    image: '/images/services/nails.webp',
  },
  {
    id: 'eyebrows',
    category: 'Brows',
    title: 'Eyebrow Services',
    benefit: 'Defined, beautifully shaped brows that frame your face.',
    description: 'Brow design, tinting, and lamination shaped to complement your natural face structure — never to override it.',
    detail: 'Brows are shaped using threading or tweezing, whichever suits your hair growth and skin best. Lamination gives brows a fuller, brushed-up finish that holds for weeks.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Eyebrow Services',
        items: [
          { label: 'Design (Threading or Tweezer)', price: '$40' },
          { label: 'Color', price: '$20' },
          { label: 'Design & Color Combo', price: '$55' },
          { label: 'Brow Lamination', price: '$90' },
        ],
      },
    ],
    image: '/images/services/eyebrows.webp',
  },
  {
    id: 'makeup',
    category: 'Makeup',
    title: 'Makeup',
    benefit: 'Flawless, photo-ready makeup for every occasion.',
    description: 'Professional makeup application for events, photoshoots, date nights, or simply treating yourself — tailored to your skin and the look you want.',
    detail: 'Our makeup artists work with premium products and a steady hand for a finish that photographs beautifully and lasts all day. Book alongside a blowout or up-do for the full glam experience.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Makeup',
        items: [
          { label: 'Makeup Application', price: '$120' },
        ],
      },
    ],
    image: '/images/services/makeup.webp',
  },
  {
    id: 'waxing',
    category: 'Waxing',
    title: 'Waxing & Threading',
    benefit: 'Smooth skin and defined features, done with care.',
    description: 'Full and partial body waxing and threading using premium wax suited to sensitive skin, from a quick brow clean-up to a full leg wax.',
    detail: 'Every wax service is performed with hygiene and comfort as the priority. Full Face waxing addresses peach fuzz and stray hairs but does not include eyebrow shaping — pair it with a Brow Design for a complete result.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Waxing & Threading',
        items: [
          { label: 'Eyebrows', price: '$20' },
          { label: 'Nose', price: '$10' },
          { label: 'Ear', price: '$10' },
          { label: 'Upper Lip', price: '$15' },
          { label: 'Full Face (does not include eyebrow design)', price: '$35' },
          { label: 'Underarms', price: '$20' },
          { label: 'Full Arms', price: '$40' },
          { label: 'Half Arms', price: '$30' },
          { label: 'Full Legs', price: '$60' },
          { label: 'Half Legs', price: '$45' },
          { label: 'Inner Thighs', price: '$12' },
          { label: 'Bikini', price: '$45' },
          { label: 'Brazilian', price: '$55' },
        ],
      },
    ],
    image: '/images/services/waxing.webp',
  },
  {
    id: 'facials',
    category: 'Skin & Spa',
    title: 'Facials',
    benefit: 'Radiant skin and a moment of pure restoration.',
    description: 'Customized facials, microneedling, peels, and add-on treatments designed to brighten, balance, and restore your skin\'s natural glow.',
    detail: 'Our estheticians personalize every facial to your skin type and concerns, from a deep cleanse to advanced treatments like microneedling and Rose de Mer peels. Several services can be layered as add-ons to enhance your results.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Facials & Skin Treatments',
        items: [
          {
            label: 'Facial Deep Cleansing',
            price: '$99',
            note: 'Removes blackheads and impurities, unclogs pores, and improves skin absorption. Assists with oxygenation, hydration, nutrition, and brightening, and can be applied to any skin tone. Includes LED light therapy and microdermabrasion.',
          },
          {
            label: 'Facial Deep Hydration & Dermalogica Kit Combo',
            price: '$149',
            note: 'Refresh and revitalize your skin with a deep hydration facial paired with a Dermalogica kit — designed to restore moisture and leave your complexion soft and nourished. Ideal for a gentle boost of hydration plus professional skincare essentials.',
          },
          {
            label: 'Microneedling with Vitamin C & Hyaluronic Acid',
            price: '$220',
            note: 'Encourages collagen production using small, sterilized needles. Helps smooth, firm, and tone skin, and improves the appearance of scars, acne, and wrinkles. Priced per area — face, neck, or chest.',
          },
          {
            label: 'Skin Tag Removal',
            price: '$90',
            note: 'Uses a plasma pen for fibroblast therapy, a non-surgical method that uses plasma energy to vaporize the skin tag — minimal downtime and potentially permanent results.',
          },
          {
            label: 'Microneedling',
            price: '$160',
            note: 'Encourages collagen production using small, sterilized needles. Helps smooth, firm, and tone skin, and improves the appearance of scars, acne, and wrinkles. Priced per area — face, neck, or chest.',
          },
          {
            label: 'Peeling Rosé de Mer',
            price: '$180',
            note: 'A natural, mechanical dead sea coral-based peel from Israel, on the market for over 30 years. Rich in vitamins A, E, and C and minerals, it helps fight acne, dark spots, and expression lines, with visible results from the first session. Priced per area — face, chest, or back.',
          },
          {
            label: 'Dermaplaning (Add-On)',
            price: '$30',
            note: 'Exfoliates the skin and removes peach fuzz, improving product penetration for brighter, baby-soft skin.',
          },
          {
            label: 'Microdermabrasion (Add-On)',
            price: '$30',
            note: 'Exfoliates the skin and removes deep impurities for brighter, softer, smoother skin.',
          },
          { label: 'LED Therapy (Add-On)', price: '$29' },
          { label: 'HydraFacial Pen (Add-On)', price: '$30' },
        ],
      },
    ],
    image: '/images/services/facials.webp',
  },
  {
    id: 'eyelashes',
    category: 'Lashes',
    title: 'Eyelash Services',
    benefit: 'Lifted, tinted lashes that open up the eyes.',
    description: 'Eyelash tinting and lifting services for natural-looking definition without daily mascara.',
    detail: 'A lash lift curls and sets your natural lashes for weeks at a time, while a tint adds depth and color — both quick services that make a noticeable difference.',
    priceNote: 'See pricing below',
    priceGroups: [
      {
        heading: 'Eyelash Services',
        items: [
          { label: 'Eyelash Tint', price: '$30' },
          { label: 'Eyelash Lift', price: '$110' },
        ],
      },
    ],
    image: '/images/services/eyelashes.webp',
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
    a: 'We are open Monday through Wednesday 9 AM–6 PM, Thursday through Saturday 9 AM–7 PM, and closed on Sunday. Walk-ins are welcome, but appointments are recommended to secure your preferred time and stylist.',
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
    a: 'Yes. Balayage and highlights is our most requested service. Our colorists specialize in custom balayage, highlights, blonding, and color correction — tailored to your hair texture, skin tone, and maintenance lifestyle. Blend Hair Boutique is one of Plantation\'s top-rated salons for color.',
  },
  {
    q: 'Do you do Brazilian blowouts and keratin treatments?',
    a: 'Yes. Our Keratin / Hair Botox smoothing treatment is a signature service at Blend — especially popular given Florida\'s humidity. Results typically last 3–5 months. We calibrate the formula to your hair type and length.',
  },
  {
    q: 'Do you offer hair extensions?',
    a: 'Yes. We offer tape-in, keratin, and clip-in hair extensions. A consultation is required to assess your hair type and determine the best application method. Tape services are priced for up to 2 packs, with additional packs charged separately.',
  },
  {
    q: 'Do you offer facials and skin treatments?',
    a: 'Yes. Our esthetics menu includes deep cleansing facials, microneedling, Rosé de Mer peels, skin tag removal, and add-ons like dermaplaning, microdermabrasion, and LED therapy — all customized to your skin.',
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
    a: 'Yes. We offer a full menu of in-salon Kérastase treatments — including Chroma Gloss, Fusio Dose, Première, Chroma Max, and Caviar — and are always happy to recommend home-care products that complement your in-salon treatment.',
  },
]
