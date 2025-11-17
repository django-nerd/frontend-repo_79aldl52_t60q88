import { motion, useScroll, useTransform } from 'framer-motion'

export default function Showcase() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 6])
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      <motion.div style={{ rotate, y }} className="pointer-events-none absolute -right-10 top-10 opacity-30">
        <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-600 via-indigo-500 to-cyan-400 blur-[120px]" />
      </motion.div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300/80">Film Noir Flow</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-zinc-100">Scenes not apps</h2>
            <p className="mt-4 text-zinc-400">Switch modes with a single gesture. HALO dims distractions, tunes ambience, and choreographs tasks like a neon-lit stage manager.</p>
            <div className="mt-6 flex gap-3">
              <span className="text-xs text-zinc-400">• Parallax scroll • Micro-interactions • Soft neon glow</span>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <div className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'22px 22px'}} />
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600998837340-4887228e311f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjeWJlciUyMGNpdHl8ZW58MHwwfHx8MTc2MzM4NTk2NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="cyber city" className="w-full h-80 object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
