import { buildWhatsAppUrl } from '../data/contact'
import { ScrollReveal } from './ScrollReveal'

export function CTA() {
  const whatsappUrl = buildWhatsAppUrl('Bonjour RigLab ! Je souhaite réserver un service.')

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
                Votre PC a besoin d'aide ?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-riglab-muted sm:text-lg">
                Pas besoin de comprendre l'informatique — envoyez-nous un message sur WhatsApp
                et on s'occupe du reste. On intervient dans tout le Grand Tunis.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  Écrire sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
