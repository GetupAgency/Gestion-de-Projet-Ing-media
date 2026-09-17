'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'
import Stamp from '@/components/Stamp'

type Cat = 'bloquant' | 'majeur' | 'mineur' | 'hors'
const cats: { id: Cat; label: string }[] = [
  { id: 'bloquant', label: 'Bloquant' },
  { id: 'majeur', label: 'Majeur' },
  { id: 'mineur', label: 'Mineur' },
  { id: 'hors', label: 'Hors périmètre' },
]

const tickets: { id: string; text: string; expected: Cat[]; why: string }[] = [
  { id: 't1', text: 'Le paiement échoue sur Safari iPhone.', expected: ['bloquant'], why: 'Pas de paiement sur le navigateur de la moitié des mobiles : on ne livre pas.' },
  { id: 't2', text: 'Les CGV ne sont pas en ligne.', expected: ['bloquant', 'majeur'], why: 'Vendre sans CGV est illégal : bloquant pour un e-commerce, majeur au pire.' },
  { id: 't3', text: 'Le bouton « Commander » n’est pas exactement dans la couleur de la charte.', expected: ['mineur'], why: 'Visible, pas bloquant : à corriger, sans retarder la mise en ligne.' },
  { id: 't4', text: 'Faute d’orthographe dans le pied de page.', expected: ['mineur'], why: 'Cinq minutes de correction, aucune raison de bloquer.' },
  { id: 't5', text: '« Il faudrait ajouter une liste d’envies. »', expected: ['hors'], why: 'Pas dans le CDC : avenant ou lot 2, pas une anomalie.' },
  { id: 't6', text: 'Erreur 404 sur une fiche produit sur 200.', expected: ['majeur', 'mineur'], why: 'Un produit invendable, c’est majeur ; si c’est un produit secondaire, mineur se défend.' },
  { id: 't7', text: 'L’e-mail de confirmation de commande n’arrive pas.', expected: ['bloquant', 'majeur'], why: 'Le client ne sait pas si sa commande est passée : il rappelle, il annule, il conteste le paiement.' },
  { id: 't8', text: 'Une photo de la page d’accueil est floue.', expected: ['mineur'], why: 'Gênant, corrigé en remplaçant un fichier.' },
  { id: 't9', text: '« Finalement je préférerais le menu à gauche. »', expected: ['hors'], why: 'Les maquettes avec le menu en haut ont été validées : c’est une demande de changement, pas un défaut.' },
  { id: 't10', text: 'Les pages produits mettent 6 secondes à charger.', expected: ['majeur'], why: 'Le CDC fixe 3 s : c’est une non-conformité qui fait perdre des ventes, à corriger avant le lancement.' },
]

/** Trier les anomalies de recette : dix retours client, quatre colonnes, un go / no-go. */
export default function RecetteTriage() {
  const [assign, setAssign] = useState<Record<string, Cat>>({})
  const [checked, setChecked] = useState(false)
  const remaining = tickets.filter((t) => !assign[t.id])
  const score = tickets.filter((t) => assign[t.id] && t.expected.includes(assign[t.id])).length
  const blocking = tickets.filter((t) => assign[t.id] === 'bloquant').length
  const shouldBlock = tickets.some((t) => t.expected[0] === 'bloquant')

  return (
    <Lab kicker="Tri" title="Dix retours de recette, quatre colonnes, un go / no-go" duration="3 min">
      <p className="mb-4 text-sm text-ink-2">Cliquez sur une catégorie pour chaque ticket. Bloquant = on ne livre pas. Hors périmètre = ce n’est pas une anomalie, c’est une demande.</p>
      <ol className="border-t-2 border-ink">
        {tickets.map((t, i) => {
          const a = assign[t.id]
          const ok = checked && a && t.expected.includes(a)
          const bad = checked && a && !t.expected.includes(a)
          return (
            <li key={t.id} className={`flex flex-col gap-2 border-b border-rule py-3 sm:flex-row sm:items-center ${bad ? 'bg-red-soft' : ok ? 'bg-stamp-soft' : ''}`}>
              <span className="num w-8 shrink-0 text-xs text-ink-3">{String(i + 1).padStart(2, '0')}</span>
              <span className="flex-1 text-[0.95rem]">
                {t.text}
                {checked && <span className="mt-1 block text-sm text-ink-2">{t.why}</span>}
              </span>
              <div className="flex flex-wrap gap-1" role="radiogroup" aria-label={`Catégorie du ticket ${i + 1}`}>
                {cats.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    role="radio"
                    aria-checked={a === c.id}
                    className={`chip !min-h-[1.9rem] px-2 text-xs ${a === c.id ? (c.id === 'bloquant' ? 'chip--stamp' : '') : ''}`}
                    aria-pressed={a === c.id}
                    disabled={checked}
                    onClick={() => setAssign((s) => ({ ...s, [t.id]: c.id }))}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </li>
          )
        })}
      </ol>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button type="button" className="btn btn--primary" disabled={remaining.length > 0 || checked} onClick={() => setChecked(true)}>
          {remaining.length > 0 ? `${remaining.length} ticket${remaining.length > 1 ? 's' : ''} à classer` : 'Décider : go / no-go'}
        </button>
        <button type="button" className="btn" onClick={() => { setAssign({}); setChecked(false) }}>Recommencer</button>
        {checked && (
          <span className="ml-auto">
            {blocking > 0 ? <Stamp tone="red" size="lg" tilt={-6} press>No-go</Stamp> : <Stamp tone="done" size="lg" tilt={-6} press>Go</Stamp>}
          </span>
        )}
      </div>
      {checked && (
        <Verdict tone={score >= 8 ? 'stamp' : 'ink'}>
          {score}/10 classements défendables. {blocking > 0 && shouldBlock ? 'Vous ne livrez pas, et vous avez raison : un paiement cassé sur iPhone n’attend pas la V1.1.' : blocking === 0 && shouldBlock ? 'Vous avez dit « go » avec un paiement qui échoue sur Safari : le lendemain du lancement, le client appelle, et ce sera votre problème, pas le sien.' : 'Cohérent.'}
        </Verdict>
      )}
    </Lab>
  )
}
