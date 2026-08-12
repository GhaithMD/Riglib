import { scrollToSection } from '../hooks/useScrollAnimation'
import { ScrollReveal } from './ScrollReveal'

export function CTA() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="section-container">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-riglab-blue/30 bg-gradient-to-br from-riglab-card to-riglab-dark px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 50%, rgba(0,136,255,0.15) 0%, transparent 60%)',
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Prêt à optimiser ton PC ?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-riglab-muted sm:text-lg">
                Contacte RigLab Maintenance pour discuter de tes besoins.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="btn-primary mt-8"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
