import { ScrollReveal } from './ScrollReveal'

export function About() {
  return (
    <section id="apropos" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-section-gradient" aria-hidden="true" />

      <div className="section-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="relative flex justify-center">
              <div
                className="absolute -inset-6 rounded-2xl bg-riglab-blue/5 blur-2xl"
                aria-hidden="true"
              />
              <div className="glow-border card-surface relative overflow-hidden rounded-2xl p-8 sm:p-10">
                <img
                  src="/assets/logo.png"
                  alt="RigLab Maintenance — À propos"
                  className="mx-auto w-full max-w-xs"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h2 className="section-title">À propos de RigLab Maintenance</h2>
            <p className="mt-6 text-base leading-relaxed text-riglab-muted sm:text-lg">
              RigLab Maintenance accompagne les utilisateurs PC et les gamers avec des services de
              maintenance, de configuration Windows et d'optimisation des performances. Notre
              objectif est simple : vous aider à profiter d'un PC propre, stable et adapté à vos
              besoins.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {['Maintenance', 'Gaming', 'Windows'].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-riglab-border bg-riglab-surface/50 px-3 py-4 text-center"
                >
                  <p className="font-display text-sm font-semibold text-riglab-blue-light">{label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
