'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Dossier' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/entrainement', label: 'Entraînement' },
  { href: '/mission', label: 'Mission' },
  { href: '/evaluation', label: 'Évaluation' },
  { href: '/lexique', label: 'Lexique' },
  { href: '/competences', label: 'Compétences' },
]

export default function AppNav() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => (href === '/' ? pathname === '/' || pathname.startsWith('/module') : pathname.startsWith(href))

  return (
    <header className="border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-page items-stretch justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-4 py-3 no-underline" aria-label="Accueil du dossier">
          <Image src="/logo-ingemedia.png" alt="UFR Ingémedia" width={240} height={72} className="h-9 w-auto" priority />
          <span className="hidden border-l border-ink pl-4 sm:block">
            <span className="label block">UFR Ingémedia · Université de Toulon</span>
            <span className="display-narrow mt-1 block text-[1.05rem]">Gestion de projet web</span>
          </span>
        </Link>

        <nav aria-label="Index du dossier" className="hidden items-stretch lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={`flex items-center border-l border-rule px-5 text-[0.72rem] font-bold uppercase tracking-[0.14em] no-underline transition-colors hover:bg-paper-2 ${
                isActive(l.href) ? 'bg-ink text-paper hover:bg-ink' : 'text-ink'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex items-center gap-2 border-l border-rule pl-4 text-[0.72rem] font-bold uppercase tracking-[0.14em] lg:hidden"
          aria-expanded={open}
          aria-controls="nav-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          Index
        </button>
      </div>

      {open && (
        <nav id="nav-mobile" aria-label="Index du dossier (mobile)" className="border-t border-ink lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={`flex items-center justify-between border-b border-rule px-4 py-3 text-[0.78rem] font-bold uppercase tracking-[0.14em] no-underline ${
                isActive(l.href) ? 'bg-ink text-paper' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
