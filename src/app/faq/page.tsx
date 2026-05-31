import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/faq`

export const metadata: Metadata = {
  title: 'FAQ | Blend Hair Boutique — Plantation, FL Hair Salon Questions Answered',
  description:
    'Answers to 85+ questions about Blend Hair Boutique in Plantation, FL — balayage, keratin, extensions, highlights, haircuts, pricing, booking, and South Florida hair care. 4.9★ salon.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'FAQ | Blend Hair Boutique Plantation, FL — 85+ Questions Answered',
    description: 'All your questions about Blend Hair Boutique answered — balayage, keratin, extensions, highlights, haircuts, salon policies, and South Florida hair care tips.',
    url: CANONICAL,
  },
}

const allFaqs = {
  balayage: [
    {
      q: 'How long does balayage last?',
      a: 'Most balayage clients at Blend Hair Boutique go 12–16 weeks between full appointments. Because balayage is a freehand technique with no harsh root line, it grows out naturally — there is no abrupt regrowth demarcation the way foil highlights produce. Some clients with softer, low-contrast results stretch to 5–6 months. A toning gloss appointment every 8–10 weeks refreshes the tone without requiring a full rebalayage session.',
    },
    {
      q: 'Does balayage damage hair?',
      a: 'All lightening services involve some degree of chemical processing, but balayage done correctly minimizes damage. At Blend, we incorporate bond-building treatments (Olaplex or K18) into every lightening service. We also assess your hair\'s current condition before applying any formula — if your hair is too compromised for the lift you want, we\'ll tell you and create a multi-session plan. The goal is always healthy hair first, beautiful color second.',
    },
    {
      q: 'Is balayage better than highlights?',
      a: 'Neither technique is universally better — they have different strengths. Balayage delivers a softer, more natural grow-out and requires less frequent touch-ups (12–16 weeks vs. 6–10 weeks for foil highlights). Highlights offer more uniform brightness and more precise placement. Many clients at Blend benefit from a combination: foil highlights for face-framing brightness and balayage through the lengths. Your colorist will recommend the right approach during your consultation.',
    },
    {
      q: 'How often should I touch up balayage?',
      a: 'Full balayage touch-ups are typically needed every 12–16 weeks. Between those appointments, a toning gloss service at 8–10 weeks keeps your color looking fresh. If your balayage is a softer, low-contrast result, you may comfortably go 5–6 months. Your Blend colorist will set a personalized maintenance schedule at your appointment based on your goals and lifestyle.',
    },
    {
      q: 'Can balayage cover gray hair?',
      a: 'Yes — balayage can be very effective for blending gray hair, though the approach depends on how much gray coverage you want. If you want to blend grays without fully covering them, a balayage technique that lightens sections around the natural gray creates a seamless, dimensional result. For full gray coverage, an all-over color with balayage accents is often the best strategy. Your colorist at Blend will evaluate your specific gray pattern and suggest the most flattering approach.',
    },
    {
      q: 'Is balayage suitable for dark hair?',
      a: 'Yes — balayage on dark hair produces some of the most stunning results. Dark hair creates beautiful natural contrast with lighter balayage tones. However, significant lift on dark hair typically requires multiple sessions spread weeks apart to protect hair integrity. In one appointment on dark hair, we can typically achieve warm caramel, honey, or copper results. Going lighter (platinum, ash blonde) from very dark hair requires a multi-session plan.',
    },
    {
      q: 'How much maintenance does balayage require?',
      a: 'Balayage is considered a low-maintenance color technique because of its soft grow-out. At home, maintain it with a sulfate-free shampoo, a weekly deep conditioning mask, and UV-protective products before sun exposure — especially important in South Florida. In-salon maintenance involves a toning gloss every 8–10 weeks and a full refresh every 12–16 weeks. This is significantly fewer visits than traditional foil highlights require.',
    },
    {
      q: 'How long does a balayage appointment take at Blend?',
      a: 'Balayage appointments at Blend Hair Boutique typically take 2.5 to 4 hours, depending on your hair length, density, and the complexity of the result. Your first balayage appointment (if starting from a different color or significant hair history) may take slightly longer to allow for a thorough consultation. Complex work — like going very light from dark hair — may require 4+ hours and potentially a follow-up appointment.',
    },
    {
      q: 'Can balayage make hair look thicker?',
      a: 'Yes — one of the underappreciated benefits of balayage is that dimensional color creates the visual illusion of fullness and texture. The variation between lighter and darker tones throughout the hair adds depth and makes each strand appear more distinct. For fine or thin hair, a well-executed balayage with multiple tones can make hair appear significantly fuller. Your colorist at Blend can place the color specifically to maximize this effect.',
    },
    {
      q: 'What is lived-in balayage?',
      a: 'Lived-in balayage (sometimes called "lived-in color") describes a balayage result with a very gradual, seamless transition from natural roots to lighter ends — with minimal contrast. The grow-out looks intentional from day one and continues to look natural for months without any harsh demarcation. It\'s the most low-maintenance balayage result and is ideal for clients who want beautiful color without frequent salon visits.',
    },
  ],
  highlights: [
    {
      q: 'What are highlights?',
      a: 'Highlights are a hair coloring technique where sections of hair are lightened to create dimension, brightness, and contrast. At Blend, we use foil highlights — a precise technique where sections are separated with foils, the lightener is applied, and the foil keeps each section isolated during processing. This allows for controlled, consistent lift and very defined placement. Highlights can range from subtle (a few face-framing pieces) to full (lightening throughout the entire hair).',
    },
    {
      q: 'Are highlights high maintenance?',
      a: 'Traditional foil highlights require more maintenance than balayage because the precise placement creates a more defined grow-out line. Most highlight clients return every 6–10 weeks for a touch-up. However, the maintenance level depends on how much contrast you create — softer, lower-contrast highlights can be stretched to 10–14 weeks. Talk to your Blend colorist about placement strategies that balance the look you want with the maintenance schedule you\'re comfortable with.',
    },
    {
      q: 'How often should highlights be refreshed?',
      a: 'Full foil highlights typically need refreshing every 6–10 weeks, depending on the level of contrast and how close to the root the lightener was applied. Partial highlights (face-frame only) can often stretch to 10–14 weeks. At Blend, many clients alternate between full highlight appointments and partial or toning-only appointments to manage cost and timing while keeping their color fresh.',
    },
    {
      q: 'Do highlights damage hair?',
      a: 'Any lightening service creates some stress on the hair, but professionally applied highlights on healthy hair are manageable with proper care. At Blend, we assess your hair\'s condition before every color service and adjust the formula accordingly. We add Olaplex or K18 bond builders to all lightening services to repair bonds during the process. Home maintenance — sulfate-free shampoo, weekly deep conditioning, minimal heat styling — significantly reduces wear on highlighted hair.',
    },
    {
      q: 'Can highlights be added to dark hair?',
      a: 'Yes — highlights on dark hair can be beautiful, but dark hair requires more lift, which means the process takes longer and may require multiple sessions to achieve very light results. In one appointment, we can typically achieve honey, caramel, or warm copper tones through the hair. Platinum or ash blonde highlights on very dark hair require a multi-step process. Your Blend colorist will set realistic expectations at the consultation and create a safe, personalized plan.',
    },
  ],
  hairColor: [
    {
      q: 'How often should hair color be touched up?',
      a: 'It depends on the service. All-over color and root touch-ups typically show noticeable regrowth at 4–6 weeks, making that the standard touch-up window. Balayage clients can go 12–16 weeks. Highlights fall between 6–10 weeks. Glosses and toning services (which fade gradually) are often done every 6–8 weeks as a refresh between full color appointments. Your Blend colorist will give you a personalized maintenance schedule at your appointment.',
    },
    {
      q: 'What hair color service lasts the longest?',
      a: 'Balayage has the longest maintenance cycle of any color service because its soft grow-out looks intentional rather than grown-out. Clients can often go 4–6 months between full appointments, with optional toning glosses in between. All-over dark color also has a long cycle in terms of integrity — darker shades show fading more slowly than lighter ones. Light blonde and platinum colors require the most frequent maintenance.',
    },
    {
      q: 'Can I color damaged hair?',
      a: 'It depends on the extent of the damage. Mildly damaged hair can often be colored safely with the right formula and bond-building treatments. Severely damaged hair — characterized by extreme dryness, breakage, gumminess when wet, or severe split ends throughout the length — may need a conditioning and restoration phase before any color is applied. At Blend, we assess your hair honestly before every service. If we believe color is not safe for your hair\'s current condition, we\'ll tell you — and create a plan to get your hair to a healthy state first.',
    },
    {
      q: 'What is color correction?',
      a: 'Color correction is the process of fixing hair color that didn\'t achieve the desired result — whether it\'s too brassy, too dark, uneven, or damaged from box color. It\'s one of the most technically complex services in a professional salon. Color correction almost always requires multiple sessions and a consultation before booking, as the number of steps depends entirely on your hair\'s starting point and your goal. At Blend, color correction is one of our specialties — we\'ve successfully corrected box dye, over-lightened hair, brassiness, and uneven results for hundreds of clients.',
    },
    {
      q: 'How do I maintain color-treated hair at home?',
      a: 'The three most important steps are: (1) Use a sulfate-free, color-safe shampoo — sulfates strip pigment aggressively. (2) Deep condition weekly — color-treated hair loses moisture faster than natural hair. (3) Apply UV protection before sun exposure — UV rays break down color pigment and cause brassiness. In South Florida\'s climate, UV protection is a year-round necessity. Your Blend colorist will recommend specific products suited to your hair type and color service at your appointment.',
    },
  ],
  keratin: [
    {
      q: 'How long does a keratin treatment last?',
      a: 'Most keratin treatments at Blend Hair Boutique last 3–5 months. The longevity depends on your hair type, how frequently you wash your hair, and the products you use. Using a sodium-chloride-free and sulfate-free shampoo significantly extends the treatment. Clients who wash daily will see results fade sooner than those who wash 2–3 times per week. A Brazilian Blowout typically lasts 10–12 weeks.',
    },
    {
      q: 'Is keratin treatment safe?',
      a: 'Professionally applied keratin treatments at Blend use formulas that comply with safety standards. We discuss the specific formula appropriate for your hair type during the consultation and can accommodate clients with sensitivities to specific ingredients. If you have concerns about formaldehyde — traditional keratin treatments can contain it in small amounts — ask your Blend stylist about formaldehyde-free formulations, which we offer.',
    },
    {
      q: 'Can I color my hair before or after a keratin treatment?',
      a: 'We generally recommend coloring before a keratin treatment. The treatment will seal and protect your color, extending its vibrancy and evenness. If you color after a keratin treatment, wait at least 2 weeks. For balayage clients: balayage before keratin creates a beautiful combination — smooth, frizz-free hair with luminous color. Always tell your Blend stylist your full hair history before any service.',
    },
    {
      q: 'What is the difference between a Brazilian Blowout and a keratin treatment?',
      a: 'Both are professional smoothing treatments, but they work differently. A Brazilian Blowout (a specific brand formula) allows same-day washing, is safe on freshly colored hair, and preserves your natural wave pattern while managing frizz — results last 10–12 weeks. A traditional keratin treatment requires a 72-hour wait before washing, may reduce curl more significantly, and delivers stronger, longer-lasting frizz resistance (3–5 months). Your Blend stylist will recommend the right option for your hair and lifestyle during the consultation.',
    },
    {
      q: 'How often should a keratin treatment be repeated?',
      a: 'Keratin treatments are typically repeated every 3–5 months as the previous treatment naturally wears off. Many South Florida clients choose to repeat the treatment just before South Florida\'s most humid months (May–September) for maximum frizz control. Unlike some chemical services, keratin treatments can be repeated safely without cumulative damage when applied correctly. In fact, regular keratin maintenance can improve hair health over time by reinforcing the protein structure.',
    },
  ],
  extensions: [
    {
      q: 'What hair extension methods does Blend Hair Boutique offer?',
      a: 'Blend Hair Boutique offers tape-in extensions, sew-in (weft) extensions, and clip-in extensions. Tape-in extensions are our most popular method — they\'re lightweight, lay flat against the head, and look completely natural. Sew-in weft extensions are ideal for clients who want significant volume and length. Clip-in extensions are a non-permanent option for special occasions. We use 100% Remy human hair and will recommend the best method for your hair type, lifestyle, and goals during your consultation.',
    },
    {
      q: 'How long do hair extensions last?',
      a: 'Tape-in extensions last 6–8 weeks before needing to be repositioned (the same hair can often be reused 2–3 times with proper care). Sew-in weft extensions typically last 6–12 weeks between maintenance appointments. With proper care, the hair itself can last 3–6 months of consistent wear. Longevity depends heavily on your aftercare routine — how you brush, wash, and sleep with your extensions significantly impacts their lifespan.',
    },
    {
      q: 'Will extensions damage my natural hair?',
      a: 'Professionally applied and properly maintained extensions should not damage your natural hair. Damage occurs when extensions are: applied too close to the root without room for natural hair growth, left in too long without repositioning, or improperly removed at home. At Blend, our extension specialists follow safe application protocols and provide detailed maintenance instructions. We also perform a hair assessment before installation to ensure your natural hair is strong enough to support extensions.',
    },
    {
      q: 'Can I swim with hair extensions?',
      a: 'Yes, with precautions. Before swimming, wet your hair with fresh water and apply a leave-in conditioner or protective oil to the lengths — saturated hair absorbs less pool water. For tape-in extensions, avoid submerging repeatedly in chlorinated or salt water as it can loosen the bonds. Always rinse hair thoroughly after swimming and follow with a deep conditioning treatment. Wearing a swim cap when possible is ideal for extension longevity.',
    },
    {
      q: 'How often is extension maintenance required?',
      a: 'Tape-in extensions require repositioning every 6–8 weeks as your natural hair grows. Sew-in weft extensions are generally tightened or redone every 6–10 weeks. Do not attempt to reposition or remove extensions yourself — improper removal can cause breakage and damage your natural hair. Book your maintenance appointment at Blend before you think you need it, and your extensions will stay looking natural and beautiful.',
    },
  ],
  haircuts: [
    {
      q: 'How often should I get a haircut?',
      a: 'As a general guideline: short styles benefit from a trim every 4–6 weeks to maintain their shape. Medium-length styles need attention every 8–12 weeks. Long hair can go 10–14 weeks between cuts, though a light trim every 10–12 weeks prevents split ends from traveling up the shaft — which ultimately costs more length over time. If you\'re growing your hair out, a "dusting" (removing only the damaged ends without losing length) every 10–12 weeks is the best approach.',
    },
    {
      q: 'What haircut suits my face shape?',
      a: 'Face shape is one factor in choosing the right haircut, but it\'s not the only one — hair texture, growth patterns, and lifestyle matter equally. As a general guide: oval faces suit almost any cut; round faces benefit from length and layers that add height; square faces look great with soft, flowing layers and side-swept styles; heart-shaped faces balance a wide forehead with volume at the chin. Your Blend stylist will assess your face, hair texture, and how you actually style your hair before making a recommendation.',
    },
    {
      q: 'Can I bring inspiration photos to my haircut appointment?',
      a: 'Absolutely — and we encourage it. Bring photos of cuts you love and, if you can, photos of cuts you\'ve hated. Your stylist will use them as a reference point while accounting for the realities of your specific hair texture and growth patterns. The same cut can look quite different on different hair types. Your stylist will tell you honestly what\'s achievable with your hair and what might need adjusting.',
    },
    {
      q: 'How long does a haircut appointment take at Blend?',
      a: 'A haircut appointment at Blend typically takes 45 minutes to 1.5 hours depending on your hair length and whether a blowout is included. Short precision cuts can be completed in under an hour. Cuts on thick, long hair with a full blowout may take 90 minutes. If you\'re combining a haircut with a color service, plan for 3–4+ hours total. Your booking confirmation will reflect the time needed.',
    },
  ],
  salonPolicies: [
    {
      q: 'How do I book an appointment at Blend Hair Boutique?',
      a: 'You can book online 24/7 through our Fresha booking system, accessible via our website. You can also call us at (754) 206-3501 or message us on WhatsApp at (954) 544-6792. We recommend booking in advance for color services and special occasions — our most requested stylists book 2–4 weeks ahead. For blowout and styling appointments, same-week availability is more common.',
    },
    {
      q: 'What are Blend Hair Boutique\'s hours?',
      a: 'We are open Monday 10:00 AM to 5:00 PM, Tuesday through Saturday 10:00 AM to 7:00 PM. We are closed on Sundays. Holiday hours may vary — call (754) 206-3501 or check our booking system to confirm availability on specific dates.',
    },
    {
      q: 'Do you offer consultations before booking a service?',
      a: 'Yes. We offer consultations before booking any complex service — color correction, hair extensions, balayage transformations, and bridal packages. For these services, a standalone consultation allows your stylist to assess your hair in person, give you an honest timeline and pricing, and plan the right approach before any product is applied. Contact us to schedule a consultation appointment.',
    },
    {
      q: 'Do you accept walk-ins?',
      a: 'Walk-ins are welcome based on availability. For quick services like blowouts or bang trims, walk-in availability is more likely during weekday morning hours. For color, keratin, extensions, and longer appointments, we strongly recommend booking in advance — same-week availability for these services is limited, especially on weekends.',
    },
    {
      q: 'What is your cancellation policy?',
      a: 'We ask that you cancel or reschedule at least 24 hours in advance. For longer services — balayage, color correction, keratin treatments, bridal packages, and extensions — 48 hours notice is appreciated. Late cancellations (under 24 hours) or no-shows may be subject to a fee. If you need to reschedule, please contact us as early as possible and we will do our best to accommodate you.',
    },
    {
      q: 'What if I arrive late to my appointment?',
      a: 'If you arrive 10–15 minutes late, we will do our best to accommodate you, though your service may need to be adjusted or shortened to avoid impacting the next client. If you arrive more than 15 minutes late, your appointment may need to be rescheduled. For color appointments especially — which have precise timing requirements — arriving on time makes a real difference to the quality of the result. If you know you\'re running late, please call ahead so we can prepare accordingly.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'Blend Hair Boutique accepts cash, all major credit cards, and debit cards. We do not accept personal checks. Gratuity for your stylist or technician is greatly appreciated and can be added to your card payment or given in cash.',
    },
    {
      q: 'Do you offer gift cards?',
      a: 'Yes — Blend Hair Boutique gift cards are available for purchase online through our website. They make a perfect gift for birthdays, anniversaries, Mother\'s Day, bridal showers, and holidays. Gift cards can be used toward any service or product. Visit our Gift Cards page to purchase.',
    },
    {
      q: 'Is there parking available at Blend Hair Boutique?',
      a: 'Yes — free parking is available in the shopping center at 10035 Cleary Blvd, Plantation, FL 33324. We are located in western Broward County, easily accessible from Plantation, Davie, Weston, Fort Lauderdale, and Sunrise.',
    },
    {
      q: 'Do you offer services in Portuguese or Spanish?',
      a: 'Yes. Our team is multilingual and serves clients fluently in English, Portuguese, and Spanish. Blend Hair Boutique was founded by Brazilian beauty professionals, and our multilingual team reflects our commitment to making every client feel fully understood and at home — regardless of language background.',
    },
  ],
  southFlorida: [
    {
      q: 'How does South Florida humidity affect hair?',
      a: 'South Florida\'s humidity — which averages 70–90% year-round — causes the hair cuticle to absorb moisture from the air and expand unevenly, resulting in frizz, puffiness, and loss of style. Color-treated and chemically processed hair is more porous and reacts more dramatically to humidity. The most effective solutions are: keratin or smoothing treatments (which physically seal the cuticle), anti-humectant styling products (which block moisture absorption), and silk pillowcases (which reduce friction overnight).',
    },
    {
      q: 'How can I prevent frizz in Florida humidity?',
      a: 'The most effective professional treatment for Florida frizz is a keratin treatment or Brazilian Blowout — both seal the cuticle and dramatically reduce the hair\'s ability to absorb humidity. For daily management: blow dry hair completely (partially dry hair frizzes dramatically in humidity), use a frizz-sealing serum on dry hair before going outside, and avoid glycerin-containing products in very high humidity (glycerin attracts moisture and can backfire in Florida\'s climate). Silk or satin pillowcases also reduce overnight friction that lifts the cuticle.',
    },
    {
      q: 'What hair products work best in Florida\'s climate?',
      a: 'In South Florida\'s year-round heat and humidity, look for: sulfate-free shampoos (gentler on color and the cuticle), anti-humectant styling creams and serums (contain silicones that form a barrier against humidity), UV-protective leave-in sprays (essential for color-treated hair and blonde maintenance), and glycerin-free products for very humid days. Kérastase\'s discipline and elixir ranges are specifically designed for frizz-prone hair in humid climates — available at Blend.',
    },
    {
      q: 'How often should blondes tone their hair in South Florida?',
      a: 'South Florida\'s year-round UV exposure, pool water, and salt air accelerate brassiness in blonde and highlighted hair. Most Blend colorists recommend a toning gloss every 6–8 weeks during summer months and every 8–10 weeks during cooler months. A purple or blue toning shampoo used once a week at home between appointments also helps maintain cool, bright blonde tones. The goal is to stay ahead of brassiness rather than correct it after it becomes visible.',
    },
    {
      q: 'How do I protect colored hair from pool and ocean water in Florida?',
      a: 'Before swimming: wet your hair with fresh water (saturated hair absorbs less pool water), apply a leave-in conditioner or coconut oil as a barrier, and wear a swim cap if possible. After swimming: rinse immediately with fresh water, apply a clarifying shampoo to remove chlorine or salt deposits, and follow with a deep conditioning mask. Chlorine is particularly harsh on lightened and color-treated hair because it oxidizes the pigment — the damage is cumulative if you swim regularly without protective measures.',
    },
    {
      q: 'Why does blonde hair turn green after swimming in Florida?',
      a: 'Green tones in blonde hair after swimming are caused by copper — specifically, copper oxidized by pool chlorine bonds to the hair protein. This is most visible in blonde or highlighted hair. It\'s not the chlorine itself that causes the green color — it\'s copper in the water. Prevention: rinse with fresh water before and after swimming, apply a leave-in conditioner as a barrier, and use a clarifying or chelating shampoo immediately after pool exposure. For existing green tones, a professional clarifying treatment at Blend can remove copper deposits.',
    },
    {
      q: 'Is keratin treatment worth it for South Florida residents?',
      a: 'For most clients in Plantation and Broward County — yes. South Florida\'s year-round humidity and heat make keratin treatments one of the most popular services at Blend. The treatment eliminates frizz for 3–5 months, cuts blowout time by 50–70%, and is especially valuable during hurricane season and summer months. Clients who have struggled with frizzy or unmanageable hair in Florida\'s climate almost universally report that keratin treatment is transformative.',
    },
    {
      q: 'How do I care for hair extensions in Florida heat?',
      a: 'In Florida\'s heat, extensions require consistent hydration. Use a sulfate-free, extension-safe shampoo and condition only the mid-lengths and ends (never the bonds or tape tabs). Deep condition weekly — heat accelerates moisture loss from extensions. Before outdoor activities, apply a UV-protective spray to both the extension hair and your natural hair. Rinse hair immediately after swimming and deep condition after any salt or chlorine exposure. Avoid excessive heat styling in summer, as the combination of Florida heat and styling heat degrades the extension hair faster.',
    },
  ],
  firstVisit: [
    {
      q: 'What should I expect on my first visit to Blend Hair Boutique?',
      a: 'Your first visit begins with a consultation — even for existing services, your stylist wants to understand your hair history, current condition, and goals before any work begins. We\'ll ask about previous color, chemical services, and your daily hair routine. Expect a welcoming, professional environment that takes your time seriously. We\'ll provide a realistic assessment of what\'s achievable in your first appointment and what might require additional sessions. Leave comfortable asking questions — we communicate fully before touching your hair.',
    },
    {
      q: 'What should I wear to my salon appointment?',
      a: 'For color appointments, wear a button-up or zip-up top that can easily come off over your head without risking color smudging — avoid white or light-colored shirts. A salon cape will protect your clothing during the service, but arriving in something comfortable and replaceable is smart for color appointments. For haircut appointments, any comfortable clothing works.',
    },
    {
      q: 'Should I come in with clean hair?',
      a: 'For color appointments: wash your hair 1–2 days before the appointment. Avoid heavy styling products (dry shampoo, hairspray, serums) on appointment day — these can interfere with color application. Some natural scalp oil is actually protective during lightening services. For haircut appointments: come in with clean, dry hair so your stylist can fully assess your natural texture and growth pattern.',
    },
    {
      q: 'How far in advance should I book at Blend?',
      a: 'Our most requested stylists — particularly for color services — book 2–4 weeks in advance. Weekend appointments fill especially quickly. For bridal services, booking 6–9 months ahead is recommended. For blowouts and shorter services, same-week appointments are more available. To guarantee your preferred stylist and time, booking at least 2 weeks ahead is advisable.',
    },
    {
      q: 'Can I request a specific stylist?',
      a: 'Absolutely. You can request a specific stylist when booking online through Fresha, or mention your preference when calling at (754) 206-3501. If your preferred stylist is unavailable for your desired time, we can notify you of cancellations or suggest the next available slot.',
    },
  ],
  services: [
    {
      q: 'What services does Blend Hair Boutique offer?',
      a: 'Blend Hair Boutique is a full-service luxury beauty salon. Hair services include: balayage, highlights, all-over color, color correction, haircuts, blowout styling, Brazilian blowout, keratin treatment, hair extensions, and blonding. Beauty services include: facials, waxing, eyebrow shaping, manicures, pedicures, gel nails, nail art, makeup application, microblading, ombre brows, and lip blushing.',
    },
    {
      q: 'Do you offer bridal hair and beauty packages?',
      a: 'Yes — bridal services are among our most requested offerings. We offer bridal hair styling, bridal makeup, trial run appointments, and full-day packages for the bride and bridal party. We accommodate groups for weddings, quinceañeras, and milestone events. Bridal bookings should be made as far in advance as possible — we recommend 6–9 months for popular dates. Contact us directly to discuss your date and vision.',
    },
    {
      q: 'What professional products do you use?',
      a: 'Blend is an authorized Kérastase salon and uses professional-grade color and treatment lines chosen for performance and hair health. We do not use box-color formulas or drugstore products on our clients. Our product selection is reviewed regularly to ensure we offer the most effective options. We also carry Kérastase retail products in-salon — your stylist can recommend the right take-home products after your appointment.',
    },
    {
      q: 'Can I get multiple services in one appointment?',
      a: 'Yes — many Blend clients combine services in a single visit. Popular combinations include: balayage + haircut, color + blowout, keratin + trim, and manicure + facial. When booking, select all the services you want and the system will allocate the appropriate time. For complex combinations — like color correction plus extensions — contact us to schedule and allow enough time.',
    },
    {
      q: 'Where is Blend Hair Boutique located?',
      a: 'Blend Hair Boutique is located at 10035 Cleary Blvd, Plantation, FL 33324. We are in western Broward County, easily accessible from Plantation, Davie, Weston, Fort Lauderdale, Sunrise, and Cooper City. Free parking is available in the shopping center. We are open Monday 10 AM–5 PM, Tuesday through Saturday 10 AM–7 PM.',
    },
  ],
}

const allFaqsFlat = [
  ...allFaqs.balayage,
  ...allFaqs.highlights,
  ...allFaqs.hairColor,
  ...allFaqs.keratin,
  ...allFaqs.extensions,
  ...allFaqs.haircuts,
  ...allFaqs.salonPolicies,
  ...allFaqs.southFlorida,
  ...allFaqs.firstVisit,
  ...allFaqs.services,
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'FAQ | Blend Hair Boutique Plantation, FL',
      description: '85+ questions answered about balayage, keratin, extensions, highlights, haircuts, salon policies, and South Florida hair care at Blend Hair Boutique.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: CANONICAL },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faqpage`,
      mainEntity: allFaqsFlat.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

const CATEGORY_SECTIONS = [
  {
    key: 'balayage' as const,
    eyebrow: 'Balayage',
    heading: 'Balayage',
    em: 'Questions',
    bg: '',
    link: { label: 'Balayage in Plantation, FL', href: '/balayage-plantation-fl' },
  },
  {
    key: 'highlights' as const,
    eyebrow: 'Highlights',
    heading: 'Highlights',
    em: 'Questions',
    bg: 'section--beige',
    link: { label: 'Highlights in Plantation, FL', href: '/highlights-plantation-fl' },
  },
  {
    key: 'hairColor' as const,
    eyebrow: 'Hair Color',
    heading: 'Hair Color',
    em: 'Questions',
    bg: '',
    link: { label: 'Hair Color in Plantation, FL', href: '/hair-color-plantation' },
  },
  {
    key: 'keratin' as const,
    eyebrow: 'Keratin & Smoothing',
    heading: 'Keratin & Smoothing',
    em: 'Questions',
    bg: 'section--beige',
    link: { label: 'Keratin Treatment in Plantation, FL', href: '/keratin-treatment-plantation' },
  },
  {
    key: 'extensions' as const,
    eyebrow: 'Hair Extensions',
    heading: 'Hair Extensions',
    em: 'Questions',
    bg: '',
    link: { label: 'Hair Extensions in Plantation, FL', href: '/hair-extensions-plantation' },
  },
  {
    key: 'haircuts' as const,
    eyebrow: 'Haircuts',
    heading: 'Haircuts & Styling',
    em: 'Questions',
    bg: 'section--beige',
    link: { label: 'Haircuts in Plantation, FL', href: '/haircuts-plantation-fl' },
  },
  {
    key: 'salonPolicies' as const,
    eyebrow: 'Appointments & Policies',
    heading: 'Booking & Salon',
    em: 'Policies',
    bg: '',
    link: { label: 'Contact Us', href: '/contact' },
  },
  {
    key: 'southFlorida' as const,
    eyebrow: 'South Florida Hair Care',
    heading: 'South Florida',
    em: 'Hair Care',
    bg: 'section--beige',
    link: { label: 'Keratin Treatment', href: '/keratin-treatment-plantation' },
  },
  {
    key: 'firstVisit' as const,
    eyebrow: 'First Visit',
    heading: 'Your First',
    em: 'Visit',
    bg: '',
    link: { label: 'Book an Appointment', href: BUSINESS.bookingUrl },
  },
  {
    key: 'services' as const,
    eyebrow: 'Our Services',
    heading: 'About Blend',
    em: 'Hair Boutique',
    bg: 'section--beige',
    link: { label: 'All Services', href: '/services' },
  },
]

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--beige">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Blend Hair Boutique · Plantation, FL
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--ink)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
              Frequently Asked <em>Questions</em>
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: '50ch', marginTop: '1.5rem', fontWeight: 300 }}>
              85+ questions answered by our team of stylists and beauty specialists — covering balayage, keratin, extensions, highlights, haircuts, salon policies, and South Florida hair care.
            </p>

            {/* Jump nav */}
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { label: 'Balayage', href: '#balayage' },
                { label: 'Highlights', href: '#highlights' },
                { label: 'Hair Color', href: '#hair-color' },
                { label: 'Keratin', href: '#keratin' },
                { label: 'Extensions', href: '#extensions' },
                { label: 'Haircuts', href: '#haircuts' },
                { label: 'Booking', href: '#booking' },
                { label: 'South Florida', href: '#south-florida' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{ fontSize: '0.78rem', padding: '0.35rem 0.9rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'var(--sans)', fontWeight: 500 }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* Balayage */}
        <section className="section" id="balayage">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Balayage</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.75rem', textAlign: 'center' }}>
              Balayage <em>Questions</em>
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <Link href="/balayage-plantation-fl" style={{ fontSize: '0.82rem', color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 500 }}>
                Balayage in Plantation, FL →
              </Link>
            </p>
            <ServiceFAQ faqs={allFaqs.balayage} />
          </div>
        </section>

        {/* Highlights */}
        <section className="section section--beige" id="highlights">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Highlights</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.75rem', textAlign: 'center' }}>
              Highlights <em>Questions</em>
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <Link href="/highlights-plantation-fl" style={{ fontSize: '0.82rem', color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 500 }}>
                Highlights in Plantation, FL →
              </Link>
            </p>
            <ServiceFAQ faqs={allFaqs.highlights} />
          </div>
        </section>

        {/* Hair Color */}
        <section className="section" id="hair-color">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Hair Color</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.75rem', textAlign: 'center' }}>
              Hair Color <em>Questions</em>
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <Link href="/hair-color-plantation" style={{ fontSize: '0.82rem', color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 500 }}>
                Hair Color in Plantation, FL →
              </Link>
            </p>
            <ServiceFAQ faqs={allFaqs.hairColor} />
          </div>
        </section>

        {/* Keratin */}
        <section className="section section--beige" id="keratin">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Keratin & Smoothing</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.75rem', textAlign: 'center' }}>
              Keratin <em>Questions</em>
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <Link href="/keratin-treatment-plantation" style={{ fontSize: '0.82rem', color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 500 }}>
                Keratin Treatment in Plantation, FL →
              </Link>
            </p>
            <ServiceFAQ faqs={allFaqs.keratin} />
          </div>
        </section>

        {/* Extensions */}
        <section className="section" id="extensions">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Hair Extensions</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.75rem', textAlign: 'center' }}>
              Extensions <em>Questions</em>
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <Link href="/hair-extensions-plantation" style={{ fontSize: '0.82rem', color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 500 }}>
                Hair Extensions in Plantation, FL →
              </Link>
            </p>
            <ServiceFAQ faqs={allFaqs.extensions} />
          </div>
        </section>

        {/* Haircuts */}
        <section className="section section--beige" id="haircuts">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Haircuts</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.75rem', textAlign: 'center' }}>
              Haircut <em>Questions</em>
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <Link href="/haircuts-plantation-fl" style={{ fontSize: '0.82rem', color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 500 }}>
                Haircuts in Plantation, FL →
              </Link>
            </p>
            <ServiceFAQ faqs={allFaqs.haircuts} />
          </div>
        </section>

        {/* Booking & Policies */}
        <section className="section" id="booking">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Appointments & Policies</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Booking & Salon <em>Policies</em>
            </h2>
            <ServiceFAQ faqs={allFaqs.salonPolicies} />
          </div>
        </section>

        {/* South Florida */}
        <section className="section section--beige" id="south-florida">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>South Florida Hair Care</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.75rem', textAlign: 'center' }}>
              Florida Climate <em>Questions</em>
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <Link href="/keratin-treatment-plantation" style={{ fontSize: '0.82rem', color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 500 }}>
                Keratin & Frizz Treatments →
              </Link>
            </p>
            <ServiceFAQ faqs={allFaqs.southFlorida} />
          </div>
        </section>

        {/* First Visit */}
        <section className="section" id="first-visit">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>First Visit</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Your First <em>Visit</em>
            </h2>
            <ServiceFAQ faqs={allFaqs.firstVisit} />
          </div>
        </section>

        {/* About Services */}
        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>The Salon</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              About Blend <em>Hair Boutique</em>
            </h2>
            <ServiceFAQ faqs={allFaqs.services} />
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>Still Have Questions?</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              We're happy to <em>help.</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Call us at (754) 206-3501, message us on WhatsApp, or book an appointment and we'll answer your questions in person at 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book an Appointment</a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--outline">Message on WhatsApp</a>
            </div>
          </div>
        </section>

        {/* Quick links to service pages */}
        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Explore Services</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '2.5rem', textAlign: 'center' }}>
              Learn more about each <em>service</em>
            </h2>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { label: 'Balayage', href: '/balayage-plantation-fl' },
                { label: 'Hair Color', href: '/hair-color-plantation' },
                { label: 'Highlights', href: '/highlights-plantation-fl' },
                { label: 'Color Correction', href: '/color-correction-plantation-fl' },
                { label: 'Haircuts', href: '/haircuts-plantation-fl' },
                { label: 'Keratin Treatment', href: '/keratin-treatment-plantation' },
                { label: 'Brazilian Blowout', href: '/blowout-plantation-fl' },
                { label: 'Blonding Specialist', href: '/blonding-specialist-plantation' },
                { label: 'Hair Extensions', href: '/hair-extensions-plantation' },
                { label: 'Bridal Hair', href: '/bridal-hair-south-florida' },
                { label: 'Nails', href: '/nails-plantation-fl' },
                { label: 'Waxing', href: '/waxing-plantation-fl' },
                { label: 'Facials', href: '/facials-plantation-fl' },
                { label: 'Makeup', href: '/makeup-plantation-fl' },
                { label: 'Micropigmentation', href: '/micropigmentation-plantation-fl' },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.05em', transition: 'border-color 0.2s, color 0.2s', textDecoration: 'none' }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
