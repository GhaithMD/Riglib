import { scrollToSection } from '../hooks/useScrollAnimation'
import { SocialLinks } from './SocialIcons'
import { ScrollReveal } from './ScrollReveal'

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(0,136,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,168,255,0.06) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-riglab-blue/30 bg-riglab-blue/10 px-4 py-1.5 text-sm text-riglab-blue-light">
                <span className="h-1.5 w-1.5 rounded-full bg-riglab-blue-light animate-pulse-glow" />
                Tunis, Tunisia
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
                Ton PC mérite{' '}
                <span className="bg-gradient-to-r from-riglab-blue-light to-riglab-blue bg-clip-text text-transparent">
                  mieux.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-riglab-muted sm:text-lg">
                Maintenance PC, installation Windows et optimisation gaming pour des performances
                plus fluides et un système mieux configuré.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => scrollToSection('services')}
                  className="btn-primary"
                >
                  Découvrir nos services
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary"
                >
                  Nous contacter
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="mt-10">
                <p className="mb-3 text-sm text-riglab-muted">Suivez-nous</p>
                <SocialLinks />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={2} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-full bg-riglab-blue/10 blur-3xl animate-pulse-glow"
                aria-hidden="true"
              />
              <div className="relative glow-border card-surface overflow-hidden rounded-2xl p-6 sm:p-8">
                <img
                  src="/assets/logo.png"
                  alt="RigLab Maintenance — Logo officiel Gaming PC Maintenance"
                  className="mx-auto w-full max-w-sm animate-float drop-shadow-glow-lg"
                />
                <div className="mt-6 flex flex-wrap justify-center gap-3 text-center">
                  {['CLEAN', 'COOL', 'PERFORM'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-riglab-border bg-riglab-surface px-3 py-1 font-display text-xs font-semibold tracking-widest text-riglab-blue-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-riglab-muted/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
