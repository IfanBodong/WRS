import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import SocialMedia from './components/SocialMedia'
import FAQ from './components/FAQ'
import JoinDiscord from './components/JoinDiscord'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-black">

      <main>
        <Hero />
        <Features />
        <About />
        <SocialMedia />
        <FAQ />
        <JoinDiscord />
      </main>

      <Footer />

    </div>
  )
}

export default App
