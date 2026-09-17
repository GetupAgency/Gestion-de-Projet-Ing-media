'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Cartouche from '@/components/Cartouche'
import Footer from '@/components/Footer'
import Stamp from '@/components/Stamp'
import { labCatalog, type LabEntry } from '@/components/interactive/registry'

const levelLabel: Record<number, string> = { 1: 'Niveau 1 · Lire et trier', 2: 'Niveau 2 · Décider avec des chiffres', 3: 'Niveau 3 · Tenir en situation' }

/** Terrain d'entraînement : tous les ateliers, par niveau, à faire jouer en classe ou seul. */
export default function EntrainementClient() {
  const [current, setCurrent] = useState<string>(labCatalog[0].id)
  const [done, setDone] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('labsDone')
      if (saved) setDone(JSON.parse(saved))
      const last = localStorage.getItem('labsCurrent')
      if (last && labCatalog.some((l) => l.id === last)) setCurrent(last)
    } catch {
      /* stockage indisponible */
    }
  }, [])

  const markDone = (id: string) => {
    setDone((d) => {
      const nd = d.includes(id) ? d : [...d, id]
      try {
        localStorage.setItem('labsDone', JSON.stringify(nd))
      } catch {
        /* ignore */
      }
      return nd
    })
  }

  const select = (id: string) => {
    setCurrent(id)
    try {
      localStorage.setItem('labsCurrent', id)
    } catch {
      /* ignore */
    }
  }

  const lab = useMemo(() => labCatalog.find((l) => l.id === current) ?? labCatalog[0], [current])
  const byLevel = [1, 2, 3].map((lv) => ({ lv, items: labCatalog.filter((l) => l.level === lv) }))
  const Current = lab.Component

  return (
    <div className="min-h-screen">
      <Cartouche
        back={{ href: '/', label: 'Retour au dossier' }}
        title="Terrain d’entraînement"
        lead="Des exercices courts construits sur de vrais artefacts : un mail, un compte rendu, un export Analytics, un fil Slack, un devis, un Trello, un serveur Discord. Trois niveaux, cinq minutes chacun, un verdict à chaque fois."
        meta={[
          { label: 'Réf.', value: `Annexe A6 · ${labCatalog.length} ateliers` },
          { label: 'Niveaux', value: '1 lire · 2 décider · 3 tenir' },
          { label: 'Durée', value: '2 à 5 min par atelier' },
          { label: 'Avancement', value: mounted ? `${done.length} / ${labCatalog.length} joués` : '—' },
        ]}
      />

      <div className="mx-auto grid max-w-page grid-cols-1 gap-x-10 px-4 py-8 sm:px-6 lg:grid-cols-[19rem_minmax(0,1fr)] lg:px-8 lg:py-12">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          {byLevel.map(({ lv, items }) => (
            <div key={lv} className="mb-6">
              <p className="label mb-2">{levelLabel[lv]}</p>
              <ol className="border-t-2 border-ink">
                {items.map((l) => {
                  const active = l.id === lab.id
                  return (
                    <li key={l.id} className="border-b border-rule">
                      <button
                        type="button"
                        onClick={() => select(l.id)}
                        aria-current={active ? 'true' : undefined}
                        className={`flex w-full items-start gap-2 px-2 py-2.5 text-left transition-colors hover:bg-paper-2 ${active ? 'bg-ink text-paper hover:bg-ink' : ''}`}
                      >
                        <span className="flex-1 text-[0.9rem] font-semibold leading-snug">{l.title}</span>
                        {done.includes(l.id) && <span className={`num text-xs ${active ? 'text-paper/80' : 'text-stamp'}`}>✓</span>}
                      </button>
                    </li>
                  )
                })}
              </ol>
            </div>
          ))}
        </aside>

        <main className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Stamp tone="ink" tilt={-3}>{`Niveau ${lab.level}`}</Stamp>
            <span className="label">Artefact : {lab.artefact}</span>
            <Link href={`/module/${lab.module}`} className="label ml-auto text-ink hover:text-stamp">
              Cours associé →
            </Link>
          </div>
          <div className="max-w-measure" key={lab.id}>
            <Current />
          </div>
          <div className="mt-6 flex max-w-measure flex-wrap items-center gap-3 border-t-2 border-ink pt-5">
            <button type="button" className="btn" onClick={() => markDone(lab.id)}>
              Marquer comme joué
            </button>
            {(() => {
              const i = labCatalog.findIndex((l) => l.id === lab.id)
              const next: LabEntry | undefined = labCatalog[i + 1]
              return next ? (
                <button type="button" className="btn btn--primary" onClick={() => { markDone(lab.id); select(next.id) }}>
                  Atelier suivant : {next.title}
                </button>
              ) : null
            })()}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
