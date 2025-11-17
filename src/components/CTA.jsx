import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-indigo-600/20 to-cyan-500/10 p-10 backdrop-blur">
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 30%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12), transparent 30%)'}} />
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-4xl font-semibold text-white">
            Bring HALO to your orbit
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-zinc-200 max-w-2xl">
            Early access unlocks the control room: scenes, automations, and a companion that learns your rhythm.
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#" className="px-5 py-3 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-[0_10px_40px_rgba(130,0,255,0.35)] transition-all">Request Invite</a>
            <span className="text-sm text-zinc-400">No spam. Just signal.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
