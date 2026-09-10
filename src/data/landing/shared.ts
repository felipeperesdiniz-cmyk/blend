import type { Lang } from '@/data/locales'
import type { LandingShared } from './types'
import { BUSINESS } from '@/data/constants'

/**
 * The chrome every landing page repeats — hero eyebrow, call button,
 * areas-served strip, FAQ label, closing paragraph.
 *
 * The English pages retyped all of this twenty times, which is how the same
 * sentence came to exist in twenty places that could each drift. One statement
 * per locale.
 */
export const LANDING_SHARED: Record<Lang, LandingShared> = {
  en: {
    heroEyebrow: 'Plantation, Florida · Broward County',
    callLabel: `Call ${BUSINESS.phone}`,
    areasEyebrow: 'Areas We Serve',
    areasH2a: 'Serving',
    areasH2b: 'South Florida',
    areasBody: `Located at ${BUSINESS.address}. We serve clients from Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.`,
    faqEyebrow: 'FAQ',
    ctaBody: `Book online 24/7 or call us at ${BUSINESS.phone}. Blend Hair Boutique, ${BUSINESS.address}.`,
    viewAllServices: 'View All Services',
  },

  pt: {
    heroEyebrow: 'Plantation, Flórida · Condado de Broward',
    callLabel: `Ligar ${BUSINESS.phone}`,
    areasEyebrow: 'Onde Atendemos',
    areasH2a: 'Atendendo o',
    areasH2b: 'Sul da Flórida',
    areasBody: `Estamos na ${BUSINESS.address}. Recebemos clientes de Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton e Miami.`,
    faqEyebrow: 'Perguntas Frequentes',
    ctaBody: `Agende online 24 horas por dia ou ligue para ${BUSINESS.phone}. Blend Hair Boutique, ${BUSINESS.address}.`,
    viewAllServices: 'Ver Todos os Serviços',
  },

  es: {
    heroEyebrow: 'Plantation, Florida · Condado de Broward',
    callLabel: `Llamar ${BUSINESS.phone}`,
    areasEyebrow: 'Dónde Atendemos',
    areasH2a: 'Atendiendo el',
    areasH2b: 'Sur de Florida',
    areasBody: `Estamos en ${BUSINESS.address}. Recibimos clientas de Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton y Miami.`,
    faqEyebrow: 'Preguntas Frecuentes',
    ctaBody: `Reserva en línea las 24 horas o llámanos al ${BUSINESS.phone}. Blend Hair Boutique, ${BUSINESS.address}.`,
    viewAllServices: 'Ver Todos los Servicios',
  },
}
