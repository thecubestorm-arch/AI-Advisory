'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Leistungen', href: '#wie-es-funktioniert' },
  { label: 'Assessment', href: '#assessment' },
  { label: 'Kontakt', href: '#footer' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-page border-b border-divider">
      <div className="flex items-center justify-between px-6 lg:px-20 h-16">
        <Link href="/" className="text-white font-bold text-[15px] tracking-tight">
          AI Advisory
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-muted text-xs transition-colors duration-150 hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-divider bg-page px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-muted text-sm hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
