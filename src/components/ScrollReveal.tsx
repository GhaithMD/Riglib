import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation()
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
