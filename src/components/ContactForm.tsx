import { useEffect, useState } from 'react'
import {
  buildWhatsAppUrl,
  contactInfo,
  grandTunisAreas,
  serviceModes,
  type ServiceModeId,
} from '../data/contact'
import { services } from '../data/services'
import { useContactSelection } from '../context/ContactContext'

export function ContactForm() {
  const { selectedPackageId } = useContactSelection()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [packageId, setPackageId] = useState<number | ''>(selectedPackageId ?? '')
  const [serviceMode, setServiceMode] = useState<ServiceModeId | ''>('')
  const [area, setArea] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (selectedPackageId) {
      setPackageId(selectedPackageId)
    }
  }, [selectedPackageId])

  const selectedService = services.find((s) => s.id === packageId)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Merci d\'indiquer votre nom.')
      return
    }
    if (!phone.trim()) {
      setError('Merci d\'indiquer votre numéro de téléphone.')
      return
    }
    if (!packageId) {
      setError('Merci de choisir un service.')
      return
    }
    if (!serviceMode) {
      setError('Merci de choisir comment nous confier votre PC.')
      return
    }
    if (!area) {
      setError('Merci d\'indiquer votre ville ou quartier.')
      return
    }

    const modeLabel = serviceModes.find((m) => m.id === serviceMode)?.label ?? serviceMode
    const serviceLabel = selectedService
      ? `${selectedService.friendlyName} (${selectedService.price})`
      : 'Non précisé'

    const lines = [
      'Bonjour RigLab !',
      '',
      `Je m'appelle : ${name.trim()}`,
      `Mon téléphone : ${phone.trim()}`,
      `Service souhaité : ${serviceLabel}`,
      `Mode : ${modeLabel}`,
      `Ma zone : ${area}`,
    ]

    if (message.trim()) {
      lines.push('', `Message : ${message.trim()}`)
    }

    lines.push('', 'Merci !')

    window.open(buildWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div
          role="alert"
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Votre nom" htmlFor="contact-name" required>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex : Ahmed"
            className="form-input"
            autoComplete="name"
          />
        </FormField>

        <FormField label="Votre numéro de téléphone" htmlFor="contact-phone" required>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ex : 55 123 456"
            className="form-input"
            autoComplete="tel"
          />
        </FormField>
      </div>

      <FormField label="Quel service vous intéresse ?" htmlFor="contact-package" required>
        <select
          id="contact-package"
          value={packageId}
          onChange={(e) => setPackageId(e.target.value ? Number(e.target.value) : '')}
          className="form-input"
        >
          <option value="">— Choisissez un service —</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.friendlyName} — {service.price}
            </option>
          ))}
        </select>
        {selectedService && (
          <p className="mt-2 text-sm text-riglab-muted">{selectedService.simpleDescription}</p>
        )}
      </FormField>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-riglab-silver">
          Comment souhaitez-vous nous confier votre PC ? <span className="text-riglab-blue">*</span>
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {serviceModes.map((mode) => (
            <label
              key={mode.id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${
                serviceMode === mode.id
                  ? 'border-riglab-blue bg-riglab-blue/10'
                  : 'border-riglab-border bg-riglab-surface/40 hover:border-riglab-blue/40'
              }`}
            >
              <input
                type="radio"
                name="serviceMode"
                value={mode.id}
                checked={serviceMode === mode.id}
                onChange={() => setServiceMode(mode.id)}
                className="mt-1 accent-riglab-blue"
              />
              <div>
                <span className="block text-sm font-semibold text-white">{mode.label}</span>
                <span className="mt-0.5 block text-xs text-riglab-muted">{mode.shortLabel}</span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      <FormField label="Votre ville ou quartier (Grand Tunis)" htmlFor="contact-area" required>
        <select
          id="contact-area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="form-input"
        >
          <option value="">— Choisissez votre zone —</option>
          {grandTunisAreas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Un message ? (facultatif)" htmlFor="contact-message">
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Décrivez votre problème en quelques mots, si vous le souhaitez…"
          rows={3}
          className="form-input resize-none"
        />
      </FormField>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button type="submit" className="btn-whatsapp flex-1">
          <WhatsAppIcon className="h-5 w-5" />
          Envoyer sur WhatsApp
        </button>
        <a href={`tel:${contactInfo.phoneTel}`} className="btn-secondary flex-1 text-center">
          <PhoneIcon className="mr-2 inline h-5 w-5" />
          Appeler directement
        </a>
      </div>

      <p className="text-center text-xs text-riglab-muted">
        En cliquant sur « Envoyer sur WhatsApp », vous serez redirigé vers WhatsApp avec votre
        message déjà préparé. Il ne reste qu'à appuyer sur Envoyer.
      </p>
    </form>
  )
}

interface FormFieldProps {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}

function FormField({ label, htmlFor, required, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-riglab-silver">
        {label}
        {required && <span className="text-riglab-blue"> *</span>}
      </label>
      {children}
    </div>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}
