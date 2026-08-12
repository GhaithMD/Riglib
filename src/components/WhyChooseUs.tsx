import { ScrollReveal } from './ScrollReveal'

const features = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'On vous explique tout',
    description:
      'Pas de jargon technique. On vous dit clairement ce qu\'on fait et pourquoi, pour que vous compreniez.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'À domicile ou sur rendez-vous',
    description:
      'On se déplace chez vous dans le Grand Tunis, ou vous amenez votre PC. Vous choisissez ce qui vous arrange.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Prix clairs et fixes',
    description:
      'Chaque service a son prix affiché. Pas de surprise — vous savez exactement combien ça coûte avant de nous contacter.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Votre PC en sécurité',
    description:
      'On traite chaque ordinateur avec soin. Vos données et votre matériel sont entre de bonnes mains.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-title">Pourquoi nous faire confiance ?</h2>
            <p className="section-subtitle mx-auto">
              On sait que l'informatique peut sembler compliquée. C'est pour ça qu'on fait simple.
            </p>
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
