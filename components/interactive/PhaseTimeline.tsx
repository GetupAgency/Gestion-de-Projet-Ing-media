'use client'

import { useState } from 'react'
import Link from 'next/link'
import Lab from './Lab'

const phases = [
  { id: 'lancement', name: 'Lancement', weeks: 3, objectif: 'Comprendre le besoin, cadrer le périmètre, signer.', livrables: ['Cahier des charges', 'Cartographie de l’existant', 'Personas'], reunions: ['Kick-off', 'Ateliers de cadrage'], risque: 'Un brief flou signé trop vite.', module: 'lancement' },
  { id: 'planification', name: 'Planification', weeks: 2, objectif: 'Découper, estimer, chiffrer, prévoir les risques.', livrables: ['Planning (Gantt)', 'Budget détaillé', 'Registre des risques'], reunions: ['Revue de planning'], risque: 'Oublier les délais de validation client.', module: 'planification' },
  { id: 'conception', name: 'Conception', weeks: 4, objectif: 'Décider ce que le site fait et à quoi il ressemble.', livrables: ['Spécifications', 'Wireframes', 'Maquettes'], reunions: ['Validation wireframes', 'Validation maquettes'], risque: 'Des spécifications non testables.', module: 'conception' },
  { id: 'developpement', name: 'Développement', weeks: 9, objectif: 'Construire, sprint après sprint, avec des démos.', livrables: ['Code', 'Environnement de préproduction', 'Documentation'], reunions: ['Daily', 'Démo de fin de sprint'], risque: 'Le scope creep pendant que personne ne regarde.', module: 'developpement' },
  { id: 'test', name: 'Tests et recette', weeks: 3, objectif: 'Prouver que ça marche, faire signer le PV.', livrables: ['Plan de tests', 'Cahier de recette', 'PV de recette signé'], reunions: ['Réunion de recette'], risque: 'Une validation par WhatsApp.', module: 'test' },
  { id: 'lancement-prod', name: 'Mise en production', weeks: 1, objectif: 'Basculer sans casser, surveiller.', livrables: ['Checklist de déploiement', 'Plan de rollback', 'Site en ligne'], reunions: ['Go / No-go'], risque: 'Déployer un vendredi soir.', module: 'lancement-prod' },
  { id: 'suivi', name: 'Suivi et bilan', weeks: 2, objectif: 'Mesurer, corriger, capitaliser.', livrables: ['Bilan de projet', 'Contrat de maintenance', 'Rétrospective'], reunions: ['Réunion de bilan'], risque: 'Ne jamais faire le bilan.', module: 'suivi' },
]

const total = phases.reduce((n, p) => n + p.weeks, 0)

/** Frise des 7 phases : cliquer une phase, voir son poids réel dans un projet de 24 semaines. */
export default function PhaseTimeline() {
  const [active, setActive] = useState(3)
  const p = phases[active]
  const start = phases.slice(0, active).reduce((n, x) => n + x.weeks, 0)

  return (
    <Lab kicker="Frise interactive" title="Les 7 phases d’un projet web, à l’échelle" duration="2 min">
      <p className="mb-4 text-sm text-ink-2">
        Projet type de {total} semaines. La largeur de chaque case est son poids réel : le développement pèse la moitié du projet, la mise en production une semaine.
      </p>
      <div className="flex w-full border border-ink" role="tablist" aria-label="Phases">
        {phases.map((ph, i) => (
          <button
            key={ph.id}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            style={{ flexBasis: `${(ph.weeks / total) * 100}%` }}
            className={`group relative min-w-0 border-r border-ink px-1 py-3 text-left last:border-r-0 ${i === active ? 'bg-ink text-paper' : 'hover:bg-paper-2'}`}
            title={ph.name}
          >
            <span className={`num block text-[0.6rem] ${i === active ? 'text-paper/70' : 'text-ink-3'}`}>{i + 1}</span>
            <span className="block truncate text-[0.72rem] font-bold uppercase tracking-wide">{ph.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[0.65rem] text-ink-3">
        <span className="num">S1</span>
        <span className="num">S{total}</span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="label">
            Phase {active + 1} · semaines {start + 1} à {start + p.weeks}
          </p>
          <h4 className="display-narrow mt-1 text-2xl">{p.name}</h4>
          <p className="mt-2 text-[0.97rem]">{p.objectif}</p>
          <p className="mt-3 border border-red-ink px-3 py-2 text-sm">
            <span className="label mr-2 text-red-ink">Risque n°1</span>
            {p.risque}
          </p>
        </div>
        <dl className="text-sm">
          <dt className="label">Livrables</dt>
          <dd className="mb-3 mt-1">{p.livrables.join(' · ')}</dd>
          <dt className="label">Réunions clés</dt>
          <dd className="mb-3 mt-1">{p.reunions.join(' · ')}</dd>
          <dt className="label">Module</dt>
          <dd className="mt-1">
            <Link href={`/module/${p.module}`} className="font-semibold">
              Ouvrir le module →
            </Link>
          </dd>
        </dl>
      </div>
    </Lab>
  )
}
