import { services } from '../data/services'
import { ServiceCard } from './ServiceCard'
import { ScrollReveal } from './ScrollReveal'

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-section-gradient" aria-hidden="true" />

      <div className="section-container relative">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle mx-auto">
              Des solutions simples et accessibles pour entretenir, configurer et optimiser votre PC.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
