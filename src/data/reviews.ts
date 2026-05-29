export interface Review {
  id: string
  author: string
  service: string
  quote: string
  stars: number
}

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Mariana T.',
    service: 'Balayage',
    quote: 'I\'ve been to many salons in South Florida and Blend is simply on another level. My balayage looked effortlessly natural and the color lasted beautifully. I finally found my salon.',
    stars: 5,
  },
  {
    id: '2',
    author: 'Sophia R.',
    service: 'Brazilian Blowout',
    quote: 'The Brazilian blowout here is the best I\'ve ever had. My hair has never been this smooth, even in Florida humidity. The whole experience felt like a luxury boutique.',
    stars: 5,
  },
  {
    id: '3',
    author: 'Jennifer L.',
    service: 'Haircut & Style',
    quote: 'They really listen. I walked in nervous about a big change and walked out feeling like the best version of myself. The consultation alone was worth the visit.',
    stars: 5,
  },
  {
    id: '4',
    author: 'Camila A.',
    service: 'Bridal Package',
    quote: 'Blend did my entire bridal party for my wedding. From the trial to the big day, every single person looked incredible. Couldn\'t have asked for a more seamless experience.',
    stars: 5,
  },
  {
    id: '5',
    author: 'Daniela M.',
    service: 'Nails & Color',
    quote: 'I come every month for color and nails. The team here always makes me feel like a VIP, and the results are consistently gorgeous. This is my happy place.',
    stars: 5,
  },
  {
    id: '6',
    author: 'Ashley K.',
    service: 'Keratin Treatment',
    quote: 'Worth every penny. My hair is finally manageable for the first time in years. The stylist explained everything before starting — I felt completely in good hands.',
    stars: 5,
  },
]
