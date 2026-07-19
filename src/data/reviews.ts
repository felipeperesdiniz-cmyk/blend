export interface Review {
  id: string
  author: string
  service: string
  stylist: string
  quote: string
  stars: number
  source: 'Yelp' | 'Fresha' | 'Google'
}

// Verbatim 5★ client reviews collected from public review platforms
// (lightly trimmed for length; attributions match the original reviewers).
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Miliani C.',
    service: 'Hair Color & Style',
    stylist: 'Roger',
    quote: '2nd time at this salon. Roger has magic hands! The first time I came I fell in love, returned 4 months later and fell in love all over again! Roger is an artist and does exactly what you ask, if not better. 10/10',
    stars: 5,
    source: 'Fresha',
  },
  {
    id: '2',
    author: 'Geraldine U.',
    service: 'Balayage',
    stylist: 'Beatriz',
    quote: 'Got my hair done by the amazing Beatriz, and I\'m SO glad I went for this balayage look! The end result was so worth it. My husband was speechless! I don\'t let anyone else touch my hair — Beatriz is truly the best.',
    stars: 5,
    source: 'Yelp',
  },
  {
    id: '3',
    author: 'Tatiana F.',
    service: 'Color & Blowout',
    stylist: 'Nana',
    quote: 'My hair professional is Nana Reis — she is amazing! From start to finish she is professional, attentive, and truly passionate about her work. She executed the color and blowout flawlessly. The end result exceeded my expectations.',
    stars: 5,
    source: 'Yelp',
  },
  {
    id: '4',
    author: 'Sarah J.',
    service: 'Haircut & Blowout',
    stylist: 'Lea',
    quote: 'I got my hair cut before an event and Lea understood the assignment — giving me the fresh layered look I\'ve been looking for. Worth every dollar.',
    stars: 5,
    source: 'Yelp',
  },
  {
    id: '5',
    author: 'Megan G.',
    service: 'Haircut & Blow Dry',
    stylist: 'Debora',
    quote: 'It was my first time going to this salon and my experience couldn\'t have been better! Deborah did my cut and blow dry and I\'m very pleased with how it turned out! I will definitely be returning.',
    stars: 5,
    source: 'Yelp',
  },
  {
    id: '6',
    author: 'Erika P.',
    service: 'Nails & Waxing',
    stylist: 'Nilza',
    quote: 'This place is great, always clean, they are all very professional and the atmosphere is super nice. Nilza is my favorite — she does the perfect Brazilian wax, and the nails she does are impeccable! Highly recommend.',
    stars: 5,
    source: 'Yelp',
  },
  {
    id: '7',
    author: 'Carolina S.',
    service: 'Hair Care',
    stylist: 'Ketty',
    quote: 'I simply love being cared for by Ketty! Beyond being an extremely talented professional, she is attentive, careful, and makes you feel welcomed from beginning to end. I\'m going home feeling lighter, more confident, and empowered.',
    stars: 5,
    source: 'Fresha',
  },
  {
    id: '8',
    author: 'Liliana N.',
    service: 'Brows & Haircut',
    stylist: 'Adriana',
    quote: 'Awesome first experience at Blend! Both Adriana, for eyebrows, and Roger, for a haircut, took excellent care of my daughter. The end result was beautiful brows and a perfect fresh new haircut. Exceptional service!',
    stars: 5,
    source: 'Fresha',
  },
  {
    id: '9',
    author: 'Heather B.',
    service: 'Haircut',
    stylist: 'Juliana',
    quote: 'They did a wonderful job accommodating me — I was given coffee and water, had my hair washed and brushed, and Juliana cut my hair. She was fast and did exactly what I asked for. I\'m very happy with my experience and results.',
    stars: 5,
    source: 'Yelp',
  },
  {
    id: '10',
    author: 'Mayra D.',
    service: 'Color & Haircut',
    stylist: 'Beatriz',
    quote: 'Beatriz always does a great job and makes me feel so confident with my hair. Super professional, friendly, and talented. Highly recommend!',
    stars: 5,
    source: 'Fresha',
  },
]
