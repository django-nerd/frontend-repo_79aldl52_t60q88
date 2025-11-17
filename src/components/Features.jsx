import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, Calendar, Rocket, Zap } from 'lucide-react'

export default function Features() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -150])

  const items = [
    { icon: Brain, title: 'Cognitive Threads', desc: 'HALO weaves your habits into adaptive routines that anticipate you.' },
    { icon: Calendar, title: 'Temporal Orbits', desc: 'A calendar that bends, balancing energy, focus, and intent.' },
    { icon: Zap, title: 'Ambient Triggers', desc: 'If-this-then-vibe automations that react to your world.' },
    { icon: Rocket, title: 'Rapid Onboarding', desc: 'Start with scenes: Workday, Deep Focus, Travel, Recovery.' },
  ]

  return (
    <section id="features" className="relative py-32">
      <motion.div style={{ y }} className="absolute inset-0 -z-0 opacity-20" aria-hidden>
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-fuchsia-500 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-indigo-500 blur-[100px]" />
      </motion.div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-fuchsia-300/80 tracking-[0.25em] text-xs uppercase">Capabilities</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-zinc-100">Designed for neon nights and quiet mornings</h2>
          <p className="mt-4 text-zinc-400">Built like a film noir detective: observant, minimal, and always two steps ahead.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur">
              <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
              <Icon className="h-6 w-6 text-fuchsia-300" />
              <h3 className="mt-4 text-lg text-zinc-100 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
