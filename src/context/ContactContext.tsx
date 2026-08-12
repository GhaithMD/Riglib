import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import type { ServiceModeId } from '../data/contact'

interface ContactContextValue {
  selectedPackageId: number | null
  selectPackage: (id: number) => void
  clearPackage: () => void
  scrollToContactWithPackage: (id: number) => void
}

const ContactContext = createContext<ContactContextValue | null>(null)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(null)

  const selectPackage = useCallback((id: number) => {
    setSelectedPackageId(id)
  }, [])

  const clearPackage = useCallback(() => {
    setSelectedPackageId(null)
  }, [])

  const scrollToContactWithPackage = useCallback((id: number) => {
    setSelectedPackageId(id)
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <ContactContext.Provider
      value={{ selectedPackageId, selectPackage, clearPackage, scrollToContactWithPackage }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export function useContactSelection() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContactSelection must be used within ContactProvider')
  }
  return context
}

export type { ServiceModeId }
