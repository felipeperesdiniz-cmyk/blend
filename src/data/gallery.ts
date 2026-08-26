// Real Blend Hair Boutique client work, shot in the Plantation, FL salon.
// Files live in /public/images/gallery — WebP, long edge 1600px.
//
// `enLabel` is the join key into T[lang].gallery.labels / shortDescs / descs,
// which are index-parallel with T.en.gallery.labels. Keep the order of this
// array in sync with those translation arrays.

export type GalleryCat = 'Color' | 'Blonde' | 'Brunette' | 'Smoothing' | 'Nails' | 'Bridal'
export type GallerySize = 'tall' | 'portrait' | 'square'

export interface GalleryItem {
  id: string
  file: string
  enLabel: string
  cat: GalleryCat
  size: GallerySize
  // Optional CSS object-position for the cropped tile (e.g. 'center 22%').
  // Use when a `cover` crop would otherwise cut off the subject's hair/face.
  focus?: string
}

export const gallerySrc = (file: string) => `/images/gallery/${file}.webp`

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g01', file: 'blonde-balayage-straight',  enLabel: 'Sun-Kissed Balayage',      cat: 'Blonde',    size: 'tall' },
  { id: 'g02', file: 'brunette-glam-waves',       enLabel: 'Brunette Glam Waves',      cat: 'Brunette',  size: 'portrait' },
  { id: 'g03', file: 'bronde-balayage-long-back', enLabel: 'Bronde Balayage',          cat: 'Color',     size: 'tall' },
  { id: 'g04', file: 'nails-red-blend-wall',      enLabel: 'Signature Red Manicure',   cat: 'Nails',     size: 'square' },
  { id: 'g05', file: 'blonde-highlights-long',    enLabel: 'Highlights & Dimension',   cat: 'Blonde',    size: 'tall' },
  { id: 'g06', file: 'bridal-updo',               enLabel: 'Bridal Elegance',          cat: 'Bridal',    size: 'portrait', focus: 'center 12%' },
  { id: 'g07', file: 'caramel-balayage-brunette', enLabel: 'Caramel Balayage',         cat: 'Color',     size: 'portrait' },
  { id: 'g08', file: 'honey-blonde-blowout',      enLabel: 'Honey Blonde Blowout',     cat: 'Smoothing', size: 'portrait' },
  { id: 'g09', file: 'glossy-straight-lob',       enLabel: 'Keratin Smooth Lob',       cat: 'Smoothing', size: 'portrait' },
  { id: 'g10', file: 'platinum-blonde-long',      enLabel: 'Platinum Blonde',          cat: 'Blonde',    size: 'tall' },
  { id: 'g11', file: 'rose-pink-color',           enLabel: 'Rose Pink Creative Color', cat: 'Color',     size: 'square' },
  { id: 'g12', file: 'rich-brunette-waves',       enLabel: 'Rich Brunette Color',      cat: 'Brunette',  size: 'portrait' },
  { id: 'g13', file: 'blonde-ombre-back',         enLabel: 'Ombré Blonde',             cat: 'Blonde',    size: 'tall' },
  { id: 'g14', file: 'copper-red-waves',          enLabel: 'Copper Red',               cat: 'Color',     size: 'portrait' },
  { id: 'g25', file: 'layered-brunette-cut',      enLabel: 'Layered Brunette Cut',     cat: 'Brunette',  size: 'portrait' },
  { id: 'g15', file: 'ash-silver-blend',          enLabel: 'Ash & Silver Blend',       cat: 'Color',     size: 'square' },
  { id: 'g26', file: 'copper-half-up-knot',       enLabel: 'Copper Half-Up Knot',      cat: 'Color',     size: 'tall' },
  { id: 'g16', file: 'bronde-balayage-profile',   enLabel: 'Lived-in Bronde',          cat: 'Color',     size: 'tall' },
  { id: 'g17', file: 'balayage-lob-back',         enLabel: 'Balayage Lob',             cat: 'Blonde',    size: 'square' },
  { id: 'g18', file: 'half-up-braid-waves',       enLabel: 'Braided Half-Up',          cat: 'Bridal',    size: 'tall' },
  { id: 'g27', file: 'brunette-layers-teen',      enLabel: 'Brunette Layers',          cat: 'Brunette',  size: 'portrait' },
  { id: 'g19', file: 'nails-nude-manicure',       enLabel: 'Nude Gel Manicure',        cat: 'Nails',     size: 'portrait' },
  { id: 'g20', file: 'blonde-lived-in-lob',       enLabel: 'Lived-in Blonde Lob',      cat: 'Blonde',    size: 'portrait' },
  { id: 'g28', file: 'braided-half-up',           enLabel: 'Copper Braided Half-Up',   cat: 'Bridal',    size: 'square' },
  { id: 'g21', file: 'brunette-long-waves',       enLabel: 'Espresso Waves',           cat: 'Brunette',  size: 'tall' },
  { id: 'g22', file: 'copper-bob-styled',         enLabel: 'Copper Bob',               cat: 'Color',     size: 'portrait' },
  { id: 'g29', file: 'mens-textured-cut',         enLabel: "Men's Textured Cut",       cat: 'Brunette',  size: 'square' },
  { id: 'g23', file: 'makeup-special-occasion',   enLabel: 'Occasion Hair & Makeup',   cat: 'Bridal',    size: 'square' },
  { id: 'g24', file: 'icy-blonde-curls',          enLabel: 'Icy Blonde Curls',         cat: 'Blonde',    size: 'portrait' },
]

// Homepage teaser — a diverse, filter-safe set. Every category shown in the
// home filter bar (Blonde, Brunette, Smoothing, Nails, Bridal) has at least two
// frames so no filter ever renders a near-empty grid. Order is interleaved so
// the "All" view reads as a varied editorial wall.
export const FEATURED_IDS = [
  'g01', // Blonde   — Sun-Kissed Balayage
  'g02', // Brunette — Brunette Glam Waves
  'g06', // Bridal   — Bridal Elegance
  'g09', // Smoothing— Keratin Smooth Lob
  'g04', // Nails    — Signature Red Manicure
  'g24', // Blonde   — Icy Blonde Curls
  'g21', // Brunette — Espresso Waves
  'g18', // Bridal   — Braided Half-Up
  'g08', // Smoothing— Honey Blonde Blowout
  'g19', // Nails    — Nude Gel Manicure
  'g29', // Brunette — Men's Textured Cut
  'g10', // Blonde   — Platinum Blonde
] as const

// Other photos in /public/images/gallery, referenced directly by the pages that
// use them rather than through this file:
//   bronde-balayage-back .... /balayage-plantation-fl
//   blonde-shag-bob ......... /haircuts-plantation-fl
//   blonde-highlights-smile . unused — spare (was homepage FirstVisitSection)
//   bronde-waves-smile ...... /about
//   stylist-blend-wall ...... /about (hero)
//   salon-wine-service ...... /gift-cards, /luxury-hair-salon-plantation-fl
//   gift-card-blend ......... /gift-cards
//   wine-blend-champagne .... unused — spare (was /gift-cards)
//   kerastase-chroma-absolu . homepage, ProductSection
//   blonde-lob-waves ........ unused — spare
