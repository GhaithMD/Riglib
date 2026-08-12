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
                  src="/assets/logo.svg"
                  alt="RigLab Maintenance — À propos"
                  className="mx-auto w-full max-w-xs"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h2 className="section-title">À propos de RigLab Maintenance</h2>
            <p className="mt-6 text-base leading-relaxed text-riglab-muted sm:text-lg">
              RigLab Maintenance aide les particuliers du Grand Tunis à garder leur ordinateur en
              bonne santé. Que votre PC chauffe, rame, ou ait besoin d'une réinstallation Windows —
              on s'occupe de tout, en termes simples et sans stress.
            </p>
            <p className="mt-4 text-base leading-relaxed text-riglab-muted sm:text-lg">
              On peut venir chez vous ou vous pouvez déposer votre PC. Dans tous les cas, on vous
              explique ce qu'on fait et pourquoi.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: 'À domicile', desc: 'On vient chez vous' },
                { label: 'Sur rendez-vous', desc: 'Vous déposez votre PC' },
                { label: 'Grand Tunis', desc: 'Notre zone de service' },
              ].map(({ label, desc }) => (
                <div
                  key={label}
                  className="rounded-lg border border-riglab-border bg-riglab-surface/50 px-3 py-4 text-center"
                >
                  <p className="font-display text-sm font-semibold text-riglab-blue-light">{label}</p>
                  <p className="mt-1 text-xs text-riglab-muted">{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
