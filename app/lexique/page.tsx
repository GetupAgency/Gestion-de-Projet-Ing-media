'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import lexiqueData from '@/data/lexique.json'
import Cartouche from '@/components/Cartouche'
import Footer from '@/components/Footer'

const importanceLabel: Record<number, string> = { 1: 'Utile', 2: 'Important', 3: 'Essentiel' }

export default function LexiquePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [showOnlyImportant, setShowOnlyImportant] = useState(false)

  const q = searchTerm.trim().toLowerCase()
  const filteredSections = lexiqueData.sections
    .map((section) => ({
      ...section,
      terms: section.terms.filter((term) => {
        const matchesSearch = !q || term.term.toLowerCase().includes(q) || term.definition.toLowerCase().includes(q)
        const matchesImportance = !showOnlyImportant || term.importance === 3
        const matchesSection = !selectedSection || section.id === selectedSection
        return matchesSearch && matchesImportance && matchesSection
      }),
    }))
    .filter((section) => section.terms.length > 0)

  const totalTerms = lexiqueData.sections.reduce((acc, s) => acc + s.terms.length, 0)
  const shown = filteredSections.reduce((acc, s) => acc + s.terms.length, 0)

  return (
    <div className="min-h-screen">
      <Cartouche
        back={{ href: '/', label: 'Retour au dossier' }}
        title="Lexique"
        lead="Les mots du métier, classés par domaine. Trois niveaux d’importance : les termes essentiels sont ceux que l’on vous demandera à l’oral."
        meta={[
          { label: 'Réf.', value: `Annexe A4 · ${totalTerms} termes` },
          { label: 'Domaines', value: `${lexiqueData.sections.length}` },
          { label: 'Affichés', value: `${shown}` },
          { label: 'Usage', value: 'Recherche plein texte' },
        ]}
        aside={
          <Link href="/times-up" className="btn btn--primary">
            Jouer au Time’s Up
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        }
      />

      <main className="mx-auto max-w-page px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-[17rem_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <label htmlFor="search" className="label">Rechercher</label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" aria-hidden="true" />
              <input id="search" type="search" placeholder="terme ou définition…" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="field" style={{ paddingLeft: '2.25rem' }} />
            </div>

            <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm">
              <input type="checkbox" className="check" checked={showOnlyImportant} onChange={(e) => setShowOnlyImportant(e.target.checked)} />
              Termes essentiels uniquement
            </label>

            <p className="label mt-6 mb-2">Domaines</p>
            <ul className="border-t-2 border-ink">
              <li className="border-b border-rule">
                <button type="button" onClick={() => setSelectedSection(null)} aria-pressed={!selectedSection} className={`w-full px-2 py-2.5 text-left text-sm font-semibold hover:bg-paper-2 ${!selectedSection ? 'bg-ink text-paper hover:bg-ink' : ''}`}>
                  Tous les domaines
                </button>
              </li>
              {lexiqueData.sections.map((section) => (
                <li key={section.id} className="border-b border-rule">
                  <button type="button" onClick={() => setSelectedSection(section.id)} aria-pressed={selectedSection === section.id} className={`flex w-full items-center justify-between px-2 py-2.5 text-left text-sm font-semibold hover:bg-paper-2 ${selectedSection === section.id ? 'bg-ink text-paper hover:bg-ink' : ''}`}>
                    {section.label}
                    <span className={`num text-xs ${selectedSection === section.id ? 'text-paper/70' : 'text-ink-3'}`}>{section.terms.length}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 hidden text-xs text-ink-2 lg:block">
              <p className="label mb-2">Importance</p>
              <p><span className="num mr-2">■□□</span>Utile à connaître</p>
              <p><span className="num mr-2">■■□</span>Important</p>
              <p><span className="num mr-2">■■■</span>Essentiel</p>
            </div>
          </aside>

          <div className="min-w-0">
            {filteredSections.length === 0 ? (
              <div className="border border-dashed border-ink px-6 py-16 text-center">
                <p className="text-lg">Aucun terme ne correspond.</p>
                <p className="mt-1 text-sm text-ink-2">Essayez un mot plus court, ou retirez le filtre « essentiels ».</p>
              </div>
            ) : (
              filteredSections.map((section) => (
                <section key={section.id} className="mb-12" aria-labelledby={`sec-${section.id}`}>
                  <div className="mb-3 flex items-baseline justify-between">
                    <h2 id={`sec-${section.id}`} className="display-narrow text-2xl">{section.label}</h2>
                    <span className="num text-xs text-ink-3">{section.terms.length} terme{section.terms.length > 1 ? 's' : ''}</span>
                  </div>
                  <dl className="border-t-2 border-ink">
                    {section.terms.map((term, index) => (
                      <div key={index} className="grid grid-cols-1 gap-x-6 border-b border-rule py-3 md:grid-cols-[14rem_minmax(0,1fr)_5rem]">
                        <dt className="font-semibold">{term.term}</dt>
                        <dd className="text-[0.97rem] text-ink-2">{term.definition}</dd>
                        <dd className="mt-1 md:mt-0 md:text-right">
                          <span className="num text-xs" title={importanceLabel[term.importance]} aria-label={importanceLabel[term.importance]}>
                            {'■'.repeat(term.importance)}{'□'.repeat(3 - term.importance)}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
