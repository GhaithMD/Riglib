import { contactInfo } from '../data/contact'
import { SocialIcon } from './SocialIcons'
import { ScrollReveal } from './ScrollReveal'

export function Contact() {
  const { email, phone, phoneTel, location, social } = contactInfo

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-section-gradient" aria-hidden="true" />

      <div className="section-container relative">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-title">Contactez-nous</h2>
            <p className="section-subtitle mx-auto">
              Une question ou besoin d'un service pour votre PC ? Contactez-nous.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="glow-border card-surface overflow-hidden rounded-2xl">
              <div className="border-b border-riglab-border bg-riglab-surface/50 px-6 py-5 text-center sm:px-8">
                <a href={`mailto:${email}`} className="btn-primary">
                  Contactez-nous
                </a>
              </div>

              <div className="divide-y divide-riglab-border">
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

                <ContactRow
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  label="Téléphone"
                >
                  <a
                    href={`tel:${phoneTel}`}
                    className="text-riglab-blue-light transition-colors hover:text-white hover:underline"
                  >
                    {phone}
                  </a>
                </ContactRow>

                <ContactRow
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  label="Localisation"
                >
                  <span className="text-riglab-silver">{location}</span>
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
                    {social.facebook.label}
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
          </div>
        </ScrollReveal>
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
    <div className="flex items-center gap-4 px-6 py-4 sm:px-8">
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
