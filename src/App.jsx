import Nav from './components/Nav'
import Hero from './components/Hero'
import MetricsSection from './components/MetricsSection'
import LawMap from './components/LawMap'
import PhasesSection from './components/PhasesSection'
import PlatformsSection from './components/PlatformsSection'
import MaturitySection from './components/MaturitySection'

function Footer() {
  return (
    <footer>
      <div className="footer-name">Christopher Kenreigh</div>
      <p>Principal Product Designer · UX Strategy & Design Ops</p>
      <p style={{ marginTop: 8, fontSize: 11, opacity: 0.4 }}>© 2025 · Built with Vite + React</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <MetricsSection />
      <LawMap />
      <PhasesSection />
      <PlatformsSection />
      <MaturitySection />
      <Footer />
    </>
  )
}
