export interface ServicePackage {
  id: number
  name: string
  friendlyName: string
  subtitle: string
  price: string
  duration: string
  description: string
  simpleDescription: string
  image: string
  imageAlt: string
  highlights: string[]
  accentColor: string
}

export const services: ServicePackage[] = [
  {
    id: 1,
    name: 'Basic Clean',
    friendlyName: 'Nettoyage simple',
    subtitle: "Pour un PC qui chauffe ou fait du bruit",
    price: '40 TND',
    duration: 'Environ 1 heure',
    description:
      'Un nettoyage complet pour éliminer la poussière, améliorer le refroidissement et garder votre PC en bonne santé.',
    simpleDescription:
      'On ouvre votre PC, on enlève la poussière et on vérifie que tout va bien. Idéal si votre ordinateur chauffe ou fait du bruit.',
    image: '/assets/package-1.svg',
    imageAlt: 'Nettoyage simple de PC — RigLab Maintenance, 40 TND',
    accentColor: '#0088ff',
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
    friendlyName: 'Nettoyage gaming complet',
    subtitle: 'Pour les PC gamers qui travaillent beaucoup',
    price: '60 TND',
    duration: 'Environ 1h30',
    description:
      'Un nettoyage en profondeur de tout le PC pour éliminer la poussière, améliorer le refroidissement et garantir la stabilité de votre configuration.',
    simpleDescription:
      'Un nettoyage en profondeur de votre PC gamer : ventilateurs, carte graphique, câbles… pour retrouver de bonnes performances.',
    image: '/assets/package-2.svg',
    imageAlt: 'Nettoyage gaming complet — RigLab Maintenance, 60 TND',
    accentColor: '#00a8ff',
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
    friendlyName: 'Entretien performance max',
    subtitle: 'Le service le plus complet',
    price: '100 TND',
    duration: 'Environ 2 à 3 heures',
    description:
      'Le package ultime pour les gamers et les passionnés : nettoyage intégral, remplacement de pâte thermique et optimisation pour des températures plus basses.',
    simpleDescription:
      'Tout le nettoyage + changement de pâte thermique sur le processeur et la carte graphique. Le meilleur choix pour un PC gamer exigeant.',
    image: '/assets/package-3.svg',
    imageAlt: 'Entretien performance maximum — RigLab Maintenance, 100 TND',
    accentColor: '#00d4ff',
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
    friendlyName: 'Installation Windows & Office',
    subtitle: 'PC neuf ou qui ne démarre plus bien',
    price: '30 TND',
    duration: 'Environ 1 à 2 heures',
    description:
      'Formatage, installation Windows, pilotes essentiels, Microsoft Office et configuration pour un système rapide, sécurisé et fiable.',
    simpleDescription:
      'On installe Windows proprement, les pilotes, Microsoft Office et on configure tout pour que votre PC soit prêt à l\'emploi.',
    image: '/assets/package-4.svg',
    imageAlt: 'Installation Windows et Office — RigLab Maintenance, 30 TND',
    accentColor: '#4da6ff',
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
    friendlyName: 'Optimisation gaming',
    subtitle: 'Plus de FPS sans changer de matériel',
    price: '30 TND',
    duration: 'Environ 1 heure',
    description:
      'Plus de performances sans changer de matériel. Optimisation complète de Windows, GPU et paramètres gaming pour réduire les FPS drops et le stuttering.',
    simpleDescription:
      'On règle Windows et votre carte graphique pour que vos jeux tournent plus vite et plus fluidement, sans acheter de nouveau matériel.',
    image: '/assets/package-5.svg',
    imageAlt: 'Optimisation gaming — RigLab Maintenance, 30 TND',
    accentColor: '#66b3ff',
    highlights: [
      'Optimisation Windows et GPU (NVIDIA / AMD)',
      'Configuration refresh rate et paramètres graphiques',
      'Réduction des programmes en arrière-plan',
      'Benchmark avant / après et test de stabilité',
    ],
  },
]
