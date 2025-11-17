import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden">
      {/* Cinematic gradient + grain */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(130,0,255,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(0,200,255,0.2),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.15]" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />

      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* noir glaze so text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black pointer-events-none" />
      </div>

      {/* Floating hud elements */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-3xl">
          <p className="text-fuchsia-400/80 tracking-[0.35em] text-xs uppercase mb-4">Human • AI • Life • Organizer</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight bg-gradient-to-b from-zinc-100 via-fuchsia-100 to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_10px_40px_rgba(130,0,255,0.2)]">
            Orchestrate your life like a noir symphony
          </h1>
          <p className="mt-6 text-zinc-300/90 text-lg max-w-2xl">
            HALO predicts, plans, and harmonizes your schedule across dimensions. A cybernetic concierge with taste for neon rain and quiet efficiency.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#cta" className="px-5 py-3 rounded-md bg-fuchsia-600/90 hover:bg-fuchsia-500 text-white shadow-[0_10px_40px_rgba(130,0,255,0.35)] transition-all">
              Enter HALO
            </a>
            <a href="#features" className="px-5 py-3 rounded-md border border-white/15 text-zinc-200 hover:border-fuchsia-400/40 hover:text-fuchsia-200 transition-all backdrop-blur">
              Explore Features
            </a>
          </div>
        </motion.div>

        {/* parallax scanlines + hud */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="pointer-events-none">
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Predictive Routines',
              'Contextual Memory',
              'Ambient Automations',
            ].map((t, i) => (
              <motion.div key={t} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.1 * i }} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-indigo-400/5 to-transparent" />
                <div className="relative z-10">
                  <p className="text-sm text-zinc-300">{t}</p>
                </div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '100% 8px' }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* bottom vignette */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
