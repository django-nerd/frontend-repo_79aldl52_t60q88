import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* subtle scanline overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '100% 6px' }} />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} H.A.L.O — Human AI Life Organizer</p>
          <div className="text-zinc-400 text-xs">Built for neon rain</div>
        </div>
      </footer>
    </div>
  )
}

export default App
