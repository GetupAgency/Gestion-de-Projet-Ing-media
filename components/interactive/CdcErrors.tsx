'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

interface Para {
  id: string
  title: string
  text: string
  error?: { name: string; why: string; fix: string }
}

const paras: Para[] = [
  { id: 'contexte', title: '1. Contexte', text: 'La Boulangerie Martin, fondée en 1987 à Toulon, dispose de deux boutiques et d’une clientèle fidèle. Elle souhaite un site pour développer la commande en ligne et le retrait en boutique (click & collect).' },
  { id: 'objectifs', title: '2. Objectifs', text: 'Augmenter les ventes et moderniser l’image de la boulangerie.', error: { name: 'Objectif non mesurable', why: 'Comment saura-t-on à la recette que l’objectif est atteint ? « Augmenter » de 1 % ou de 50 % ?', fix: '« Atteindre 30 commandes en ligne par semaine dans les 3 mois suivant le lancement, et 20 % du chiffre d’affaires du samedi en click & collect à 6 mois. »' } },
  { id: 'cibles', title: '3. Cibles', text: 'Tout le monde : particuliers, entreprises, touristes, habitants du quartier.', error: { name: 'Cible absente', why: 'Un site pour tout le monde est un site pour personne : aucune décision de conception ne peut s’appuyer sur « tout le monde ».', fix: '« Cible principale : actifs 25-45 ans du centre-ville qui commandent le matin depuis leur téléphone pour retirer entre 12 h et 13 h. Cible secondaire : entreprises voisines pour les plateaux du vendredi. »' } },
  { id: 'fonctionnalites', title: '4. Fonctionnalités', text: 'Catalogue des produits avec photos, commande en ligne avec créneau de retrait, paiement CB, notification par SMS quand la commande est prête, espace client avec historique.' },
  { id: 'design', title: '5. Design', text: 'Le design doit être moderne, joli et donner envie.', error: { name: 'Exigence subjective', why: '« Moderne et joli » se refuse à la recette sur un ressenti. C’est la première cause de maquettes refusées trois fois.', fix: '« Charte graphique existante (logo, brun #4A2C1A, crème) à respecter ; 3 sites de référence fournis par le client ; validation des wireframes puis d’une maquette par gabarit. »' } },
  { id: 'contraintes', title: '6. Contraintes', text: 'Le site doit fonctionner sur mobile (70 % du trafic attendu), être hébergé en France, et permettre à la boulangère de mettre à jour les produits sans compétence technique.' },
  { id: 'planning', title: '7. Planning', text: 'Livraison en mai.', error: { name: 'Délai sans jalon', why: 'Le 1er ou le 31 mai ? Et entre aujourd’hui et mai, quand le client valide-t-il quoi ? Sans jalons, le retard n’est visible qu’à la fin.', fix: '« Mise en ligne le 15 mai (avant la fête des mères). Jalons : CDC validé 15 février, maquettes validées 10 mars, recette du 28 avril au 7 mai, PV signé le 12 mai. Délai de validation client : 5 jours ouvrés par jalon. »' } },
  { id: 'budget', title: '8. Budget', text: 'Budget : 9 000 €.', error: { name: 'Budget sans périmètre', why: 'HT ou TTC ? Hébergement, nom de domaine, photos, maintenance inclus ? À 20 % de TVA, l’écart est de 1 800 €.', fix: '« Budget : 9 000 € HT pour la conception et le développement. Hors périmètre : photos produits (fournies par le client), hébergement (36 €/mois, contrat séparé), maintenance (devis annuel). »' } },
  { id: 'livrables', title: '9. Livrables', text: 'Cahier des charges validé, wireframes, maquettes, site en production, formation de 2 h à l’administration, documentation utilisateur.' },
  { id: 'recette', title: '10. Critères d’acceptation', text: 'Le passage d’une commande complète (choix, créneau, paiement, SMS) fonctionne sur iPhone et Android en moins de 2 minutes ; le back-office permet d’ajouter un produit en moins de 3 minutes sans aide.' },
  { id: 'hors', title: '11. Hors périmètre', text: 'Livraison à domicile, application mobile native, programme de fidélité : envisagés en phase 2.' },
  { id: 'validation', title: '12. Validation', text: 'Le présent cahier des charges est validé par les deux parties. Toute demande hors périmètre fera l’objet d’un chiffrage complémentaire.' },
]

const totalErrors = paras.filter((p) => p.error).length

/** Chasse aux 5 erreurs : lire un CDC, cliquer les paragraphes fautifs. */
export default function CdcErrors() {
  const [flagged, setFlagged] = useState<string[]>([])
  const [done, setDone] = useState(false)
  const found = flagged.filter((id) => paras.find((p) => p.id === id)?.error)
  const wrong = flagged.filter((id) => !paras.find((p) => p.id === id)?.error)

  const toggle = (id: string) => {
    if (done) return
    setFlagged((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]))
  }

  return (
    <Lab kicker="Chasse aux erreurs" title="Le cahier des charges de la Boulangerie Martin" duration="4 min">
      <p className="mb-4 text-sm text-ink-2">
        Ce CDC d’une page contient {totalErrors} erreurs classiques. Cliquez sur les paragraphes fautifs ({flagged.length} signalé{flagged.length > 1 ? 's' : ''}), puis vérifiez.
      </p>
      <ol className="border-t-2 border-ink">
        {paras.map((p) => {
          const isFlag = flagged.includes(p.id)
          const state = done ? (p.error ? (isFlag ? 'found' : 'missed') : isFlag ? 'wrong' : 'ok') : isFlag ? 'flag' : 'none'
          return (
            <li key={p.id} className="border-b border-rule">
              <button
                type="button"
                onClick={() => toggle(p.id)}
                aria-pressed={isFlag}
                disabled={done}
                className={`w-full px-3 py-3 text-left transition-colors ${state === 'flag' ? 'bg-copy-yellow' : state === 'found' ? 'bg-stamp-soft' : state === 'missed' ? 'bg-red-soft' : state === 'wrong' ? 'bg-paper-2 line-through' : 'hover:bg-paper-2'}`}
              >
                <span className="label block text-ink">{p.title}</span>
                <span className="mt-1 block text-[0.95rem]">{p.text}</span>
                {done && p.error && (
                  <span className="mt-2 block border-t border-dashed border-ink pt-2 text-sm no-underline">
                    <span className={`label ${isFlag ? 'text-stamp' : 'text-red-ink'}`}>{isFlag ? 'Trouvée' : 'Ratée'} · {p.error.name}</span>
                    <span className="mt-1 block">{p.error.why}</span>
                    <span className="mt-1 block text-ink-2">
                      <span className="font-semibold text-ink">Réécriture : </span>
                      {p.error.fix}
                    </span>
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ol>
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className="btn btn--primary" disabled={done || flagged.length === 0} onClick={() => setDone(true)}>
          Vérifier
        </button>
        <button type="button" className="btn" onClick={() => { setFlagged([]); setDone(false) }}>
          Recommencer
        </button>
      </div>
      {done && (
        <Verdict tone={found.length === totalErrors && wrong.length === 0 ? 'stamp' : 'ink'}>
          {found.length}/{totalErrors} erreurs trouvées{wrong.length ? `, ${wrong.length} fausse${wrong.length > 1 ? 's' : ''} alerte${wrong.length > 1 ? 's' : ''}` : ''}. Les paragraphes corrects sont ceux qu’on peut tester à la recette : ils contiennent des nombres, des noms, des dates.
        </Verdict>
      )}
    </Lab>
  )
}
