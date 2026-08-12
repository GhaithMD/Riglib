import { buildWhatsAppUrl, contactInfo } from '../data/contact'
import { SocialIcon } from './SocialIcons'
import { ContactForm } from './ContactForm'
import { ScrollReveal } from './ScrollReveal'

export function Contact() {
  const { email, phone, phoneTel, location, hours, social } = contactInfo
  const quickWhatsApp = buildWhatsAppUrl('Bonjour RigLab ! Je souhaite avoir des informations.')

  return (
    <section id="contact" className="relative py-20 pb-28 sm:py-28 sm:pb-28">
      <div className="absolute inset-0 bg-section-gradient" aria-hidden="true" />

      <div className="section-container relative">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-title">Contactez-nous</h2>
            <p className="section-subtitle mx-auto">
              Le moyen le plus simple : remplissez le formulaire ci-dessous et envoyez-nous un
              message sur WhatsApp. Sinon, appelez-nous directement.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <ScrollReveal delay={1} className="lg:col-span-3">
            <div className="glow-border card-surface rounded-2xl p-6 sm:p-8">
              <h3 className="mb-6 font-display text-xl font-bold text-white">
                Demande de service
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2} className="lg:col-span-2">
            <div className="space-y-4">
              <a
                href={quickWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-4 text-base"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message rapide sur WhatsApp
              </a>

              <a href={`tel:${phoneTel}`} className="btn-primary w-full py-4 text-base">
                Appeler le {phone}
              </a>

              <div className="glow-border card-surface divide-y divide-riglab-border overflow-hidden rounded-2xl">
                <ContactRow
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  label="Horaires"
                >
                  <span className="text-riglab-silver">{hours}</span>
                </ContactRow>

                <ContactRow
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  label="Zone"
                >
                  <span className="text-riglab-silver">{location}</span>
                </ContactRow>

                <ContactRow
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  label="Email"
                >
                  <a
                    href={`mailto:${email}`}
                    className="text-riglab-blue-light transition-colors hover:text-white hover:underline"
                  >
                    {email}
                  </a>
                </ContactRow>

                <ContactRow icon={<SocialIcon platform="instagram" className="h-5 w-5" />} label="Instagram">
                  <a
                    href={social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-riglab-blue-light transition-colors hover:text-white hover:underline"
                  >
                    {social.instagram.label}
                  </a>
                </ContactRow>

                <ContactRow icon={<SocialIcon platform="facebook" className="h-5 w-5" />} label="Facebook">
                  <a
                    href={social.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-riglab-blue-light transition-colors hover:text-white hover:underline"
                  >
                    Facebook
                  </a>
                </ContactRow>

                <ContactRow icon={<SocialIcon platform="tiktok" className="h-5 w-5" />} label="TikTok">
                  <a
                    href={social.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-riglab-blue-light transition-colors hover:text-white hover:underline"
                  >
                    {social.tiktok.label}
                  </a>
                </ContactRow>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

interface ContactRowProps {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}

function ContactRow({ icon, label, children }: ContactRowProps) {
  return (
    <div className="flex items-center gap-4 px-5 py-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-riglab-border bg-riglab-surface text-riglab-blue-light">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-riglab-muted">{label}</p>
        <div className="mt-0.5 text-sm sm:text-base">{children}</div>
      </div>
    </div>
  )
}
