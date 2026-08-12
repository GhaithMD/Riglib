export const contactInfo = {
  email: 'riglab.maintenance@gmail.com',
  phone: '55 089 174',
  phoneTel: '+21655089174',
  whatsapp: '21655089174',
  location: 'Grand Tunis, Tunisie',
  serviceArea: 'Grand Tunis uniquement',
  depotNote: 'Adresse de dépôt à confirmer — nous vous la communiquerons par téléphone ou WhatsApp.',
  hours: 'Lundi – Samedi : 9h – 20h',
  social: {
    instagram: {
      url: 'https://www.instagram.com/riglab.maintenance/',
      label: '@riglab.maintenance',
    },
    facebook: {
      url: 'https://www.facebook.com/people/Riglab-Gaming-PC-Maintenance/61593268648047/',
      label: 'Riglab Gaming PC Maintenance',
    },
    tiktok: {
      url: 'https://www.tiktok.com/@riglab.maintenance',
      label: '@riglab.maintenance',
    },
  },
} as const

export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Zone', href: '#zone' },
  { label: 'Contact', href: '#contact' },
] as const

export const serviceModes = [
  {
    id: 'domicile' as const,
    label: 'À domicile',
    shortLabel: 'Je viens chez vous',
    description: 'Un technicien se déplace à votre adresse dans le Grand Tunis.',
    icon: 'home',
  },
  {
    id: 'depot' as const,
    label: 'Je dépose mon PC',
    shortLabel: 'Vous amenez votre PC',
    description: 'Vous apportez votre ordinateur chez nous (adresse communiquée après contact).',
    icon: 'dropoff',
  },
] as const

export type ServiceModeId = (typeof serviceModes)[number]['id']

export const grandTunisAreas = [
  'Tunis',
  'Ariana',
  'Ben Arous',
  'Manouba',
  'La Marsa',
  'Carthage',
  'Le Bardo',
  'La Goulette',
  'Mégrine',
  'Radès',
  'Ezzahra',
  'Aouina',
  'El Menzah',
  'Ennasr',
  'Autre (Grand Tunis)',
] as const

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`
}
