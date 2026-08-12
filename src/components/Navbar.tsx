import { useEffect, useState } from 'react'
import { buildWhatsAppUrl, navLinks, contactInfo } from '../data/contact'
import { scrollToSection } from '../hooks/useScrollAnimation'
import { SocialLinks } from './SocialIcons'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const whatsappUrl = buildWhatsAppUrl('Bonjour RigLab !')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    scrollToSection(href.replace('#', ''))
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-riglab-border/60 bg-riglab-black/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between sm:h-20" aria-label="Navigation principale">
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#accueil')
          }}
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img
            src="/assets/logo.svg"
            alt="RigLab Maintenance — Gaming PC Maintenance"
            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
          />
          <span className="hidden font-display text-lg font-bold tracking-wide text-white sm:block">
            RigLab <span className="text-riglab-blue">Maintenance</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(href)
              }}
              className="text-sm font-medium text-riglab-muted transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialLinks />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
          >
            WhatsApp
          </a>
          <a href={`tel:${contactInfo.phoneTel}`} className="btn-primary text-sm">
            {contactInfo.phone}
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-riglab-border text-riglab-silver lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-riglab-border bg-riglab-black/95 backdrop-blur-md lg:hidden">
          <div className="section-container flex flex-col gap-1 py-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(href)
                }}
                className="rounded-lg px-4 py-3 text-base font-medium text-riglab-silver transition-colors hover:bg-riglab-surface hover:text-white"
              >
                {label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-riglab-border pt-4">
              <SocialLinks className="justify-center" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp
              </a>
              <a
                href={`tel:${contactInfo.phoneTel}`}
                className="btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Appeler le {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
