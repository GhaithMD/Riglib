import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'
import { ServiceArea } from './components/ServiceArea'
import { WhyChooseUs } from './components/WhyChooseUs'
import { About } from './components/About'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingContact } from './components/FloatingContact'
import { ParticleBackground } from './components/ParticleBackground'
import { ContactProvider } from './context/ContactContext'

function App() {
  return (
    <ContactProvider>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <ServiceArea />
        <WhyChooseUs />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </ContactProvider>
  )
}

export default App
