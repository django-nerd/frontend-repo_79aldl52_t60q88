import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Vision', href: '#vision' },
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(130,0,255,0.25)]">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-600 shadow-inner shadow-fuchsia-500/40" />
              <span className="text-fuchsia-200 tracking-widest text-sm">H.A.L.O</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-fuchsia-300 transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#cta" className="text-sm px-4 py-2 rounded-md bg-fuchsia-600/80 hover:bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-600/30 transition-colors">
                Get Started
              </a>
            </nav>
            <button className="md:hidden text-zinc-200" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-5 py-4">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-fuchsia-300 transition-colors">
                    {l.label}
                  </a>
                ))}
                <a href="#cta" className="text-sm px-4 py-2 rounded-md bg-fuchsia-600/80 hover:bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-600/30 transition-colors w-fit">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
