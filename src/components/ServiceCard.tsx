import type { ServicePackage } from '../data/services'
import { useContactSelection } from '../context/ContactContext'

interface ServiceCardProps {
  service: ServicePackage
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { scrollToContactWithPackage } = useContactSelection()

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-riglab-border bg-riglab-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-riglab-blue/40 hover:shadow-glow-lg">
      <div className="relative aspect-[5/3] overflow-hidden bg-riglab-dark">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute right-3 top-3 rounded-lg border border-riglab-blue/40 bg-riglab-black/80 px-3 py-1.5 backdrop-blur-sm">
          <span className="font-display text-lg font-bold text-white">{service.price}</span>
        </div>
        <div className="absolute bottom-3 left-3 rounded-md bg-riglab-black/70 px-2.5 py-1 text-xs text-riglab-muted backdrop-blur-sm">
          {service.duration}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
          {service.friendlyName}
        </h3>
        <p className="mt-1 text-sm text-riglab-blue-light/80">{service.subtitle}</p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-riglab-silver/90">
          {service.simpleDescription}
        </p>

        <details className="mt-4 group/details">
          <summary className="cursor-pointer text-sm font-medium text-riglab-blue-light transition-colors hover:text-white">
            Voir tout ce qui est inclus
          </summary>
          <ul className="mt-3 space-y-2 border-t border-riglab-border pt-3">
            {service.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-riglab-muted">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-riglab-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </details>

        <button
          type="button"
          onClick={() => scrollToContactWithPackage(service.id)}
          className="btn-primary mt-6 w-full"
        >
          Choisir ce service
        </button>
      </div>
    </article>
  )
}
