import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import ProofPanel from './components/ProofPanel'
import CrossEntity from './components/CrossEntity'
import DataSources from './components/DataSources'
import DetectionEngine from './components/DetectionEngine'
import Deliverable from './components/Deliverable'
import Fit from './components/Fit'
import Security from './components/Security'
import Faq from './components/Faq'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <HowItWorks />
      <ProofPanel />
      <CrossEntity />
      <DataSources />
      <DetectionEngine />
      <Deliverable />
      <Fit />
      <Security />
      <Faq />
      <CtaSection />
      <Footer />
    </>
  )
}
