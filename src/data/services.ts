export interface ServicePackage {
  id: number
  name: string
  subtitle: string
  price: string
  description: string
  image: string
  imageAlt: string
  highlights: string[]
}

export const services: ServicePackage[] = [
  {
    id: 1,
    name: 'Basic Clean',
    subtitle: "L'entretien essentiel pour votre PC",
    price: '40 TND',
    description:
      'Un nettoyage complet pour éliminer la poussière, améliorer le refroidissement et garder votre PC en bonne santé.',
    image: '/assets/package-1.png',
    imageAlt:
      'RigLab Maintenance Package 1 — Basic Clean, entretien essentiel PC à 40 TND',
    highlights: [
      'Nettoyage extérieur du boîtier',
      'Dépoussiérage complet de l\'intérieur',
      'Nettoyage des ventilateurs et filtres',
      'Contrôle des températures (avant/après)',
    ],
  },
  {
    id: 2,
    name: 'Deep Gaming Maintenance',
    subtitle: 'Un entretien complet pour des performances optimales',
    price: '70 TND',
    description:
      'Un nettoyage en profondeur de tout le PC pour éliminer la poussière, améliorer le refroidissement et garantir la stabilité de votre configuration.',
    image: '/assets/package-2.png',
    imageAlt:
      'RigLab Maintenance Package 2 — Deep Gaming Maintenance à 70 TND',
    highlights: [
      'Nettoyage approfondi des ventilateurs (boîtier, CPU, GPU)',
      'Nettoyage complet de la carte graphique',
      'Gestion et réorganisation des câbles',
      'Test complet du système (stabilité & fonctionnement)',
    ],
  },
  {
    id: 3,
    name: 'Performance Maintenance',
    subtitle: 'Le service complet pour des performances maximales',
    price: '120 TND',
    description:
      'Le package ultime pour les gamers et les passionnés : nettoyage intégral, remplacement de pâte thermique et optimisation pour des températures plus basses.',
    image: '/assets/package-3.png',
    imageAlt:
      'RigLab Maintenance Package 3 — Performance Maintenance à 120 TND',
    highlights: [
      'Remplacement pâte thermique CPU & GPU',
      'Vérification / remplacement thermal pads',
      'Tests de performance & stabilité',
      'Optimisation logicielle Windows et pilotes',
    ],
  },
  {
    id: 4,
    name: 'Windows & Office Setup',
    subtitle: 'Un système propre, fonctionnel et prêt pour le travail ou les études',
    price: '30 TND',
    description:
      'Formatage, installation Windows, pilotes essentiels, Microsoft Office et configuration pour un système rapide, sécurisé et fiable.',
    image: '/assets/package-4.png',
    imageAlt:
      'RigLab Maintenance Package 4 — Windows & Office Setup à 30 TND',
    highlights: [
      'Formatage et installation propre de Windows',
      'Installation des pilotes et mises à jour',
      'Installation Microsoft Office',
      'Optimisation de base et test final du système',
    ],
  },
  {
    id: 5,
    name: 'Gaming Performance Optimization',
    subtitle: 'Maximum FPS • Fluidité • Réactivité',
    price: '30 TND',
    description:
      'Plus de performances sans changer de matériel. Optimisation complète de Windows, GPU et paramètres gaming pour réduire les FPS drops et le stuttering.',
    image: '/assets/package-5.png',
    imageAlt:
      'RigLab Maintenance Package 5 — Gaming Performance Optimization à 30 TND',
    highlights: [
      'Optimisation Windows et GPU (NVIDIA / AMD)',
      'Configuration refresh rate et paramètres graphiques',
      'Réduction des programmes en arrière-plan',
      'Benchmark avant / après et test de stabilité',
    ],
  },
]
