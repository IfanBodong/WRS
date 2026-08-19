import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import SocialMedia from './components/SocialMedia'
import JoinDiscord from './components/JoinDiscord'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06111f] text-white">

      <Header />

      <main>
        <Hero />
        <About />
        <SocialMedia />
        <JoinDiscord />
      </main>

      <Footer />

    </div>
  )
}

export default App