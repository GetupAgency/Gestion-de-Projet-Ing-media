'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

type Col = 'backlog' | 'sprint' | 'encours' | 'recette' | 'done'
const cols: { id: Col; label: string }[] = [
  { id: 'backlog', label: 'Backlog' }, { id: 'sprint', label: 'Sprint 3 (à faire)' }, { id: 'encours', label: 'En cours' }, { id: 'recette', label: 'À valider client' }, { id: 'done', label: 'Terminé' },
]
const cards: { id: string; text: string; expected: Col[]; why: string }[] = [
  { id: 'c1', text: 'Page d’accueil intégrée et validée par le client le 3/03', expected: ['done'], why: 'Validée par écrit : terminé.' },
  { id: 'c2', text: 'Tunnel de commande, Léo dessus depuis lundi', expected: ['encours'], why: 'Quelqu’un travaille dessus maintenant.' },
  { id: 'c3', text: 'Filtre par taille, développé, en attente du retour de Camille (client)', expected: ['recette'], why: 'Fait côté agence, pas encore validé : ni « en cours », ni « terminé ».' },
  { id: 'c4', text: 'Programme de fidélité (idée du client, non chiffrée)', expected: ['backlog'], why: 'Non chiffrée, non planifiée : le backlog, pas le sprint.' },
  { id: 'c5', text: 'Fiche produit responsive, planifiée pour ce sprint, personne n’a commencé', expected: ['sprint'], why: 'Engagée dans le sprint, pas démarrée.' },
  { id: 'c6', text: 'Export CSV des commandes, livré, client a dit « ok » à l’oral au téléphone', expected: ['recette'], why: 'Piège : un « ok » oral n’est pas une validation. On reste en attente d’un écrit.' },
  { id: 'c7', text: 'Mettre les avis clients Trustpilot', expected: ['backlog'], why: 'Demande sans estimation ni priorité : backlog.' },
  { id: 'c8', text: 'Bug : le code promo s’applique deux fois, Léo a corrigé ce matin, pas encore déployé en préprod', expected: ['encours'], why: 'Corrigé mais pas livré en préprod : le travail n’est pas fini tant que le client ne peut pas tester.' },
  { id: 'c9', text: 'Logo dans l’en-tête, livré, Camille a répondu par mail « validé, merci »', expected: ['done'], why: 'Validation écrite : terminé.' },
  { id: 'c10', text: 'Passer en HTTPS sur la prod, prévu au sprint 3', expected: ['sprint'], why: 'Planifié, pas commencé.' },
]

/** Niveau 2 · Un tableau Trello où tout est dans la mauvaise colonne, avant le daily. */
export default function TrelloDesordre() {
  const [place, setPlace] = useState<Record<string, Col>>({})
  const [done, setDone] = useState(false)
  const remaining = cards.filter((c) => !place[c.id]).length
  const score = cards.filter((c) => place[c.id] && c.expected.includes(place[c.id])).length

  return (
    <Lab kicker="Niveau 2 · Artefact : un tableau Trello" title="Remettre le Trello d’aplomb avant le daily" duration="4 min">
      <p className="mb-3 text-sm text-ink-2">Boutique en ligne d’une marque de sneakers reconditionnées. Le stagiaire a « rangé » le Trello hier soir. Replacez chaque carte dans la bonne colonne, à partir des faits.</p>
      <ol className="border-t-2 border-ink">
        {cards.map((c) => {
          const v = place[c.id]; const ok = done && v && c.expected.includes(v); const bad = done && v && !c.expected.includes(v)
          return (
            <li key={c.id} className={`flex flex-col gap-2 border-b border-rule py-3 md:flex-row md:items-center ${ok ? 'bg-stamp-soft' : bad ? 'bg-red-soft' : ''}`}>
              <span className="flex-1 text-[0.95rem]">{c.text}{done && <span className="mt-1 block text-sm text-ink-2">{c.why}</span>}</span>
              <div className="flex flex-wrap gap-1" role="radiogroup">
                {cols.map((col) => <button key={col.id} type="button" role="radio" aria-checked={v === col.id} className={`chip !min-h-[1.9rem] px-2 text-xs ${v === col.id ? 'is-on' : ''}`} aria-pressed={v === col.id} disabled={done} onClick={() => setPlace((s) => ({ ...s, [c.id]: col.id }))}>{col.label}</button>)}
              </div>
            </li>
          )
        })}
      </ol>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" disabled={remaining > 0 || done} onClick={() => setDone(true)}>{remaining ? `${remaining} carte${remaining > 1 ? 's' : ''} à placer` : 'Vérifier'}</button>
        <button type="button" className="btn" onClick={() => { setPlace({}); setDone(false) }}>Recommencer</button>
      </div>
      {done && <Verdict tone={score >= 9 ? 'stamp' : 'ink'}>{score}/10. Une colonne = un état vérifiable. « Terminé » veut dire validé par écrit ; « en cours » veut dire que quelqu’un y travaille aujourd’hui ; le reste attend. Un Trello faux est pire qu’absent : le client le lit.</Verdict>}
    </Lab>
  )
}
