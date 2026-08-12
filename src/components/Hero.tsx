import { buildWhatsAppUrl, contactInfo } from '../data/contact'
import { scrollToSection } from '../hooks/useScrollAnimation'
import { SocialLinks } from './SocialIcons'
import { ScrollReveal } from './ScrollReveal'

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl('Bonjour RigLab ! Je souhaite avoir des informations sur vos services.')

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
                Grand Tunis — À domicile ou sur rendez-vous
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
                Votre PC mérite{' '}
                <span className="bg-gradient-to-r from-riglab-blue-light to-riglab-blue bg-clip-text text-transparent">
                  d'être entre de bonnes mains.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-riglab-muted sm:text-lg">
                Nettoyage, réparation et optimisation de votre ordinateur — sans jargon technique.
                On vient chez vous dans le Grand Tunis, ou vous déposez votre PC chez nous.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contactez-nous sur WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection('services')}
                  className="btn-secondary"
                >
                  Voir nos services
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-riglab-muted">
                <a
                  href={`tel:${contactInfo.phoneTel}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-riglab-blue-light"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ou appelez le {contactInfo.phone}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="mt-8">
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
                  src="/assets/logo.svg"
                  alt="RigLab Maintenance — Logo officiel Gaming PC Maintenance"
                  className="mx-auto w-full max-w-sm animate-float drop-shadow-glow-lg"
                />
                <div className="mt-6 flex flex-wrap justify-center gap-3 text-center">
                  {['NETTOYAGE', 'RÉPARATION', 'OPTIMISATION'].map((tag) => (
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
