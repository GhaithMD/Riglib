import { buildWhatsAppUrl, contactInfo, navLinks } from '../data/contact'
import { scrollToSection } from '../hooks/useScrollAnimation'
import { SocialLinks } from './SocialIcons'

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl('Bonjour RigLab !')

  return (
    <footer className="border-t border-riglab-border bg-riglab-dark pb-20 sm:pb-0">
      <div className="section-container py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('accueil')
              }}
              className="inline-flex items-center gap-3"
            >
              <img
                src="/assets/logo.svg"
                alt="RigLab Maintenance"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="font-display text-lg font-bold text-white">
                RigLab <span className="text-riglab-blue">Maintenance</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-riglab-muted">
              Maintenance PC, gaming et Windows — Grand Tunis uniquement.
              À domicile ou sur rendez-vous.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(href.replace('#', ''))
                    }}
                    className="text-sm text-riglab-muted transition-colors hover:text-riglab-blue-light"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-riglab-muted">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-green-400"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phoneTel}`}
                  className="transition-colors hover:text-riglab-blue-light"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-riglab-blue-light"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.location}</li>
              <li>{contactInfo.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-riglab-border pt-8 text-center">
          <p className="text-sm text-riglab-muted">
            © 2026 RigLab Maintenance. Tous droits réservés. Services disponibles dans le Grand Tunis.
          </p>
        </div>
      </div>
    </footer>
  )
}
