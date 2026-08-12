import { contactInfo, grandTunisAreas, serviceModes } from '../data/contact'
import { ScrollReveal } from './ScrollReveal'

export function ServiceArea() {
  return (
    <section id="zone" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-section-gradient" aria-hidden="true" />

      <div className="section-container relative">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-title">Où intervenons-nous ?</h2>
            <p className="section-subtitle mx-auto">
              Nos services sont disponibles <strong className="text-riglab-blue-light">uniquement dans le Grand Tunis</strong>.
              Pas de souci si vous n'êtes pas à l'aise avec les ordinateurs — on s'adapte à vous.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ScrollReveal delay={1}>
            <div className="glow-border card-surface h-full p-6 sm:p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-riglab-blue/30 bg-riglab-blue/10 px-4 py-1.5 text-sm text-riglab-blue-light">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Zone couverte
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Grand Tunis</h3>
              <p className="mt-3 text-sm leading-relaxed text-riglab-muted sm:text-base">
                Nous intervenons dans toute la région du Grand Tunis. Si vous habitez dans l'une de ces
                zones, on peut venir chez vous ou convenir d'un rendez-vous.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {grandTunisAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-riglab-border bg-riglab-surface/60 px-3 py-1.5 text-xs text-riglab-silver sm:text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-amber-200/80">
                <strong className="text-amber-200">Hors Grand Tunis ?</strong> Nos services ne sont
                malheureusement pas disponibles en dehors de cette zone pour le moment.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white">Deux options simples</h3>
              <p className="text-sm text-riglab-muted sm:text-base">
                Choisissez ce qui vous arrange le mieux :
              </p>

              {serviceModes.map((mode) => (
                <div
                  key={mode.id}
                  className="glow-border card-surface flex gap-4 p-5 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-riglab-blue/30 bg-riglab-blue/10 text-riglab-blue-light">
                    {mode.icon === 'home' ? (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0H3m10 0h2l3 4h3a1 1 0 011 1v2a1 1 0 01-1 1h-1m-4 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white">{mode.label}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-riglab-muted">{mode.description}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-lg border border-riglab-border bg-riglab-surface/40 px-4 py-3 text-sm text-riglab-muted">
                <strong className="text-riglab-silver">Point de dépôt :</strong>{' '}
                {contactInfo.depotNote}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
