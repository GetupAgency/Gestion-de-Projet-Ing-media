import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-ingemedia-blue to-primary-900 mt-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white text-sm">
              Formation en Gestion de Projet Web
            </p>
            <p className="text-gray-300 text-xs mt-1">
              Tous droits réservés - {new Date().getFullYear()}
            </p>
          </div>

          <div className="text-center">
            <p className="text-white text-sm mb-2">
              Plateforme réalisée par{' '}
              <Link 
                href="https://fr.linkedin.com/in/adrien-cerdan"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-ingemedia-cyan transition-colors inline-flex items-center gap-1"
              >
                Adrien Cerdan
                <Linkedin className="w-4 h-4" />
              </Link>
            </p>
            <p className="text-gray-300 text-xs">
              Pour les étudiants Ingémedia
            </p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-600 text-center">
          <p className="text-gray-400 text-xs">
            Version 1.1.15 - Mise à jour le 01/12/2025 à 16:35
          </p>
        </div>
      </div>
    </footer>
  )
}

