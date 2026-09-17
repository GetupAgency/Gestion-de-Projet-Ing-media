import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import pkg from '../package.json'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t-2 border-ink bg-paper">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-y-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="label">Dossier</p>
          <p className="mt-2 text-sm">Formation en gestion de projet web</p>
          <p className="mt-1 text-sm text-ink-3">UFR Ingémedia · Université de Toulon</p>
        </div>
        <div>
          <p className="label">Réalisation</p>
          <p className="mt-2 text-sm">
            <Link
              href="https://fr.linkedin.com/in/adrien-cerdan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold hover:text-stamp"
            >
              Adrien Cerdan
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
          <p className="mt-1 text-sm text-ink-3">Pour les étudiant·es Ingémedia</p>
        </div>
        <div className="md:text-right">
          <p className="label">Version</p>
          <p className="num mt-2 text-sm">v{pkg.version}</p>
          <p className="mt-1 text-sm text-ink-3">Tous droits réservés · {year}</p>
        </div>
      </div>
    </footer>
  )
}
