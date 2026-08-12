import { ScrollReveal } from './ScrollReveal'

const steps = [
  {
    number: '1',
    title: 'Choisissez un service',
    description:
      'Parcourez nos offres ci-dessous. Chaque service a son prix, sa description et ce qu\'il comprend — pas besoin d\'être expert en informatique.',
  },
  {
    number: '2',
    title: 'Contactez-nous facilement',
    description:
      'Un simple clic sur WhatsApp ou un appel téléphonique suffit. Dites-nous ce dont vous avez besoin et où vous habitez dans le Grand Tunis.',
  },
  {
    number: '3',
    title: 'On s\'occupe de tout',
    description:
      'On vient chez vous ou vous déposez votre PC chez nous. On fait le travail et on vous explique tout simplement.',
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-title">Comment ça marche ?</h2>
            <p className="section-subtitle mx-auto">
              C'est simple — en 3 étapes, votre PC est entre de bonnes mains.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={(index % 3) as 0 | 1 | 2}>
              <div className="relative h-full rounded-xl border border-riglab-border bg-riglab-card/40 p-6 text-center sm:p-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-riglab-blue bg-riglab-blue/10 font-display text-2xl font-bold text-riglab-blue-light">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-riglab-muted sm:text-base">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
