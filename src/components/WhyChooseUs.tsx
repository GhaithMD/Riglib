import { ScrollReveal } from './ScrollReveal'

const features = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Expertise technique',
    description:
      'Des services de maintenance et d\'optimisation réalisés avec soin, adaptés aux configurations gaming et bureautiques.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Optimisation orientée performance',
    description:
      'Nettoyage, refroidissement et réglages logiciels pensés pour améliorer la fluidité et la stabilité de votre PC.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Solutions accessibles',
    description:
      'Des packages clairs et abordables pour répondre à différents besoins, du nettoyage de base à l\'optimisation gaming.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Service personnalisé',
    description:
      'Chaque configuration est différente. Nous adaptons nos interventions à votre setup et à vos besoins.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-title">Pourquoi RigLab Maintenance ?</h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <div className="glow-border card-surface group h-full p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 inline-flex rounded-lg border border-riglab-blue/30 bg-riglab-blue/10 p-3 text-riglab-blue-light transition-colors group-hover:bg-riglab-blue/20">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-riglab-muted">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
