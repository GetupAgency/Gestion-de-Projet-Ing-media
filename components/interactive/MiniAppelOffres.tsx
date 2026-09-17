'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

const rc = `RÈGLEMENT DE CONSULTATION · Association « Les Restos du Campus »
Objet : création d’une application mobile de collecte et de distribution de paniers repas pour étudiants, avec géolocalisation des points de retrait.
Budget maximal : 18 000 € HT, maintenance 12 mois incluse.
Calendrier : questions jusqu’au 3 octobre ; remise des offres le 17 octobre à 12 h ; audition des trois meilleurs candidats le 24 octobre ; mise en ligne impérative avant le 1er février (début de la période d’examens).
Critères : valeur technique 50 % (dont accessibilité 10 %), prix 30 %, délai et méthodologie 20 %.
Dossier attendu : mémoire technique de 20 pages maximum, DPGF complété, planning, deux références datant de moins de trois ans, attestation d’assurance.
La sous-traitance est autorisée sous réserve d’être déclarée. Toute offre reçue après l’heure limite sera rejetée.`

const qs: { q: string; options: string[]; a: number; why: string }[] = [
  { q: 'Votre dossier est prêt le 17 octobre à 12 h 20. Que se passe-t-il ?', options: ['Il est accepté, 20 minutes ce n’est rien', 'Il est rejeté', 'Il est accepté avec une pénalité sur la note délai'], a: 1, why: '« Toute offre reçue après l’heure limite sera rejetée. » Pas de marge, pas de négociation.' },
  { q: 'Quel poste pèse le plus dans la note ?', options: ['Le prix', 'La valeur technique', 'Le délai'], a: 1, why: '50 % pour la valeur technique : un dossier techniquement faible ne se rattrape pas avec un prix bas.' },
  { q: 'Vous proposez 18 000 € HT de développement plus 2 400 € de maintenance. Conforme ?', options: ['Oui, la maintenance est à part', 'Non, le plafond inclut la maintenance', 'Oui si on baisse la TVA'], a: 1, why: '« 18 000 € HT, maintenance 12 mois incluse » : 20 400 € dépasse le plafond, l’offre est irrégulière.' },
  { q: 'Vous voulez faire réaliser l’app iOS par un freelance ami. Possible ?', options: ['Non, sous-traitance interdite', 'Oui, à condition de le déclarer dans l’offre', 'Oui, sans rien dire, c’est interne'], a: 1, why: 'Autorisée « sous réserve d’être déclarée ». Un sous-traitant caché est un motif d’exclusion.' },
  { q: 'Votre mémoire fait 26 pages, très complètes. Bien ?', options: ['Oui, plus c’est complet mieux c’est', 'Non, 20 pages maximum', 'Oui si les annexes ne comptent pas'], a: 1, why: 'Le RC fixe 20 pages maximum. Un jury peut ignorer les pages au-delà, ou le dossier entier.' },
  { q: 'Vous avez une superbe référence de 2021. Vous la mettez ?', options: ['Oui, elle est impressionnante', 'Non, moins de trois ans exigés : elle ne compte pas', 'Oui, en changeant la date'], a: 1, why: 'Une référence hors critère ne rapporte rien ; une date modifiée, c’est une fausse déclaration.' },
  { q: 'Votre planning prévoit une mise en ligne le 5 février. Acceptable ?', options: ['Oui, quatre jours de retard c’est raisonnable', 'Non, le 1er février est impératif', 'Oui si on prévient'], a: 1, why: '« Mise en ligne impérative avant le 1er février » : votre planning doit le prouver, avec de la marge.' },
]

/** Niveau 1 · Lire un règlement de consultation avant d'écrire une ligne. */
export default function MiniAppelOffres() {
  const [ans, setAns] = useState<Record<number, number>>({})
  const [done, setDone] = useState(false)
  const score = qs.filter((q, i) => ans[i] === q.a).length

  return (
    <Lab kicker="Niveau 1 · Artefact : un règlement de consultation" title="« Les Restos du Campus » lancent un appel d’offres" duration="4 min">
      <pre className="whitespace-pre-wrap border border-ink bg-paper-2 p-4 font-mono text-[0.78rem] leading-relaxed">{rc}</pre>
      <p className="mt-4 text-sm text-ink-2">Sept situations. À chaque fois, une seule réponse tient devant le règlement.</p>
      <ol className="mt-3 space-y-4">
        {qs.map((q, i) => (
          <li key={i}>
            <p className="text-[0.95rem] font-semibold">{i + 1}. {q.q}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {q.options.map((o, j) => (
                <button key={j} type="button" className={`chip text-xs ${done ? (j === q.a ? 'chip--stamp is-on' : ans[i] === j ? '!border-red-ink !bg-red-soft !text-red-ink' : '') : ans[i] === j ? 'is-on' : ''}`} aria-pressed={ans[i] === j} disabled={done} onClick={() => setAns((s) => ({ ...s, [i]: j }))}>{o}</button>
              ))}
            </div>
            {done && <p className="mt-1 text-sm text-ink-2">{q.why}</p>}
          </li>
        ))}
      </ol>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" disabled={Object.keys(ans).length < qs.length || done} onClick={() => setDone(true)}>Vérifier</button>
        <button type="button" className="btn" onClick={() => { setAns({}); setDone(false) }}>Recommencer</button>
      </div>
      {done && <Verdict tone={score >= 6 ? 'stamp' : 'ink'}>{score}/7. Un appel d’offres se perd d’abord sur la forme : heure limite, plafond, nombre de pages, pièces. Lisez le règlement avec un surligneur avant de rêver la solution.</Verdict>}
    </Lab>
  )
}
