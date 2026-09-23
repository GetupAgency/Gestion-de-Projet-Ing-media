'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Cartouche from '@/components/Cartouche'
import Footer from '@/components/Footer'
import Stamp from '@/components/Stamp'
import { soloCatalog, type LabEntry } from '@/components/interactive/registry'
import type { PublicAtelier } from '@/lib/content'

const levelLabel: Record<number, string> = { 1: 'Niveau 1 · Lire et trier', 2: 'Niveau 2 · Décider avec des chiffres', 3: 'Niveau 3 · Tenir en situation' }

/**
 * Terrain d'entraînement : en tête, les ateliers en groupe (30 min à 1 h, un livrable, une correction enseignant) ;
 * en bas, une sélection courte d'exercices en solo (2 à 5 min, verdict immédiat).
 */
export default function EntrainementClient({ ateliers }: { ateliers: PublicAtelier[] }) {
  const [current, setCurrent] = useState<string>(soloCatalog[0].id)
  const [done, setDone] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('labsDone')
      if (saved) setDone(JSON.parse(saved))
      const last = localStorage.getItem('labsCurrent')
      if (last && soloCatalog.some((l) => l.id === last)) setCurrent(last)
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

  const lab = useMemo(() => soloCatalog.find((l) => l.id === current) ?? soloCatalog[0], [current])
  const byLevel = [1, 2, 3].map((lv) => ({ lv, items: soloCatalog.filter((l) => l.level === lv) })).filter((g) => g.items.length > 0)
  const Current = lab.Component
  const soloDone = soloCatalog.filter((l) => done.includes(l.id)).length

  return (
    <div className="min-h-screen">
      <Cartouche
        back={{ href: '/', label: 'Retour au dossier' }}
        title="Terrain d’entraînement"
        lead="Des ateliers en groupe construits sur de vrais artefacts : un mail de dirigeant, une page Notion, un devis, un backlog, un calendrier. Trente minutes à une heure, un livrable par groupe, une correction commentée en cours. Et en bas de page, des exercices courts à faire seul."
        meta={[
          { label: 'Réf.', value: `Annexe A6 · ${ateliers.length} ateliers en groupe · ${soloCatalog.length} exercices en solo` },
          { label: 'Format', value: 'Groupes de 3-4 · 30 min à 1 h' },
          { label: 'Secteurs', value: 'Streetwear, matcha, rap, covoiturage, sneakers, créateurs, e-sport' },
          { label: 'Solo joués', value: mounted ? `${soloDone} / ${soloCatalog.length}` : '—' },
        ]}
      />

      <main className="mx-auto max-w-page px-4 py-10 sm:px-6 lg:px-8">
        <section aria-labelledby="ateliers">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="ateliers" className="display-narrow text-2xl">Ateliers en groupe</h2>
            <p className="label">Dans l’ordre du cours, du brief au planning</p>
          </div>
          <table className="ledger ledger--stack">
            <thead>
              <tr>
                <th className="w-12">N°</th>
                <th>Atelier</th>
                <th className="w-44 c-hide">Secteur</th>
                <th className="w-40 c-hide">Durée · format</th>
                <th className="w-40 text-right">Accès</th>
              </tr>
            </thead>
            <tbody>
              {ateliers.map((a, i) => (
                <tr key={a.id}>
                  <td className="num text-sm font-semibold text-ink-3">G{String(i + 1).padStart(2, '0')}</td>
                  <td>
                    <Link href={`/entrainement/${a.id}`} className="font-semibold no-underline hover:underline">
                      {a.title}
                    </Link>
                    <p className="mt-0.5 text-sm text-ink-2">{a.pitch}</p>
                    <p className="mt-1 text-xs text-ink-3">{a.skill}</p>
                  </td>
                  <td className="text-sm c-hide">{a.sector}</td>
                  <td className="text-sm c-hide">
                    <span className="num">{a.duration}</span>
                    <br />
                    <span className="text-ink-2">{a.format}</span>
                  </td>
                  <td className="text-right c-action">
                    <Link href={`/entrainement/${a.id}`} className="btn btn--sm whitespace-nowrap">
                      Ouvrir
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-20" aria-labelledby="solo">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="solo" className="display-narrow text-2xl">En solo</h2>
            <p className="label">Deux à cinq minutes, un verdict immédiat</p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-[19rem_minmax(0,1fr)]">
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

            <div className="min-w-0">
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
                  const i = soloCatalog.findIndex((l) => l.id === lab.id)
                  const next: LabEntry | undefined = soloCatalog[i + 1]
                  return next ? (
                    <button type="button" className="btn btn--primary" onClick={() => { markDone(lab.id); select(next.id) }}>
                      Exercice suivant : {next.title}
                    </button>
                  ) : null
                })()}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
