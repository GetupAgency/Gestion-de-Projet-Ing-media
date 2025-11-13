'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Search, BookOpen, Star } from 'lucide-react'
import lexiqueData from '@/data/lexique.json'
import Footer from '@/components/Footer'

export default function LexiquePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [showOnlyImportant, setShowOnlyImportant] = useState(false)

  const filteredSections = lexiqueData.sections.map(section => ({
    ...section,
    terms: section.terms.filter(term => {
      const matchesSearch = 
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesImportance = !showOnlyImportant || term.importance === 3
      
      const matchesSection = !selectedSection || section.id === selectedSection
      
      return matchesSearch && matchesImportance && matchesSection
    })
  })).filter(section => section.terms.length > 0)

  const totalTerms = lexiqueData.sections.reduce((acc, section) => acc + section.terms.length, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-gradient-to-r from-ingemedia-blue to-primary-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-white hover:text-ingemedia-cyan mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Lexique</h1>
              <p className="text-ingemedia-cyan mt-1">
                {totalTerms} termes essentiels de la gestion de projet web
              </p>
            </div>
            <BookOpen className="w-12 h-12 text-ingemedia-cyan" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtres et recherche */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un terme..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showOnlyImportant}
                  onChange={(e) => setShowOnlyImportant(e.target.checked)}
                  className="mr-2 w-4 h-4"
                />
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-sm text-gray-700">Termes essentiels uniquement</span>
              </label>
            </div>
          </div>

          {/* Filtres par section */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSection(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !selectedSection
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Toutes les sections
            </button>
            {lexiqueData.sections.map(section => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedSection === section.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Résultats */}
        {filteredSections.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">Aucun terme trouvé pour votre recherche</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredSections.map(section => (
              <div key={section.id} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-200">
                  {section.label}
                </h2>
                
                <div className="grid gap-4">
                  {section.terms.map((term, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-indigo-900">
                          {term.term}
                        </h3>
                        <div className="flex gap-1">
                          {[...Array(term.importance)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{term.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Légende */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">Niveau d'importance</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-gray-600">Utile à connaître</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-gray-600">Important</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-gray-600">Essentiel</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

