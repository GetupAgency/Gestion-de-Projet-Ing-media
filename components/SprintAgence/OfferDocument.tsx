'use client'

import { Printer, ExternalLink } from 'lucide-react'
import { offerMeta, offerPhases, offerProfiles, paymentSchedule } from '@/data/offreCommerciale'

const fmtEUR = (n: number) =>
  n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })

const fmtNum = (n: number) => n.toLocaleString('fr-FR')

export default function OfferDocument() {
  const totalCost = offerProfiles.reduce((s, p) => s + p.tjm * p.jh, 0)
  const totalTTC = totalCost * (1 + offerMeta.totals.tva)

  return (
    <article className="oc-doc">
      <header className="oc-cover">
        <div className="oc-cover-top">
          <div className="oc-brand">
            <span className="oc-brand-mark">SB</span>
            <div>
              <div className="oc-brand-name">{offerMeta.agency.name}</div>
              <div className="oc-brand-tag">{offerMeta.agency.tagline}</div>
            </div>
          </div>
          <div className="oc-print-btn-wrap">
            <button className="oc-print-btn" onClick={() => window.print()} type="button">
              <Printer className="w-4 h-4" />
              Imprimer / PDF
            </button>
          </div>
        </div>

        <h1 className="oc-cover-title">
          Offre commerciale
          <span className="oc-cover-sub">RoadTrip Squad · réponse à la consultation de Gaspard Vasseur</span>
        </h1>

        <div className="oc-cover-meta">
          <div>
            <span className="oc-meta-label">Référence</span>
            <span className="oc-meta-value">{offerMeta.reference.quoteId}</span>
          </div>
          <div>
            <span className="oc-meta-label">Émise le</span>
            <span className="oc-meta-value">{offerMeta.reference.issued}</span>
          </div>
          <div>
            <span className="oc-meta-label">Validité</span>
            <span className="oc-meta-value">{offerMeta.reference.validity}</span>
          </div>
          <div>
            <span className="oc-meta-label">Démarrage</span>
            <span className="oc-meta-value">{offerMeta.durations.start}</span>
          </div>
          <div>
            <span className="oc-meta-label">Mise en production</span>
            <span className="oc-meta-value">{offerMeta.durations.productionLive}</span>
          </div>
        </div>

        <div className="oc-headline">
          <span>{fmtEUR(totalCost)} HT</span>
          <span className="oc-headline-sub">soit {fmtEUR(totalTTC)} TTC · {offerMeta.totals.jh} j-h cumulés sur {offerMeta.durations.weeks} semaines</span>
        </div>
      </header>

      {/* ---------- 1. Synthèse ---------- */}
      <section className="oc-section">
        <span className="oc-section-num">01</span>
        <h2>Synthèse de la proposition</h2>
        <p className="oc-lede">
          RoadTrip Squad est une application mobile et web qui regroupe en une seule expérience la planification collaborative, le split de dépenses, la carte hors-ligne et le journal de bord. Notre proposition couvre la conception, le design, le développement et le lancement de la V1, du kick-off au 15 octobre 2026.
        </p>
        <ul className="oc-bullets">
          <li><strong>Périmètre.</strong> 8 modules fonctionnels en V1, 6 modules ou raffinements reportés en V2 (mode hors-ligne avancé, IA, géoloc temps réel, partage public, multilingue, tests perfo poussés).</li>
          <li><strong>Calendrier.</strong> 19 semaines glissées sur la fenêtre 1er juin → 15 octobre 2026, soit 95 jours ouvrés.</li>
          <li><strong>Équipe.</strong> 8 profils complémentaires, 221 j-h cumulés, équivalent à 2,3 ETP pleins sur la durée.</li>
          <li><strong>Budget.</strong> {fmtEUR(totalCost)} HT, soit {fmtEUR(totalTTC)} TTC, sous le plafond de 130 K€ HT que vous avez communiqué.</li>
          <li><strong>Garde-fous.</strong> Hébergement Scaleway (UE, RGPD), MapLibre + OpenStreetMap (indépendance Google), audit de sécurité OWASP en clôture.</li>
        </ul>
      </section>

      {/* ---------- 2. Compréhension ---------- */}
      <section className="oc-section">
        <span className="oc-section-num">02</span>
        <h2>Compréhension du besoin</h2>
        <p>
          Vous portez un projet personnel issu d'un constat concret, ressassé sur quinze ans de road trips entre amis : la planification dérape, l'argent embrouille, la route fait perdre du temps, et les souvenirs restent prisonniers de chaque téléphone. RoadTrip Squad propose une expérience unique qui couvre ces quatre frictions.
        </p>
        <h3>Enjeux que nous avons identifiés</h3>
        <ul className="oc-bullets">
          <li><strong>Tenue absolue de la deadline du 15 octobre 2026</strong>, jour de votre événement à Annecy avec 200 invités. Aucune marge possible côté délai, donc descope V1 assumé en cours de projet si dérive.</li>
          <li><strong>Contrainte budgétaire</strong> entre 80 K€ et 130 K€ HT. Notre proposition à {fmtEUR(totalCost)} laisse une marge de sécurité de {fmtEUR(130000 - totalCost)} pour l'imprévu.</li>
          <li><strong>Conformité RGPD stricte</strong>, suite à votre antécédent CNIL. Hébergement UE obligatoire, registre de traitement, DPIA simplifiée, droits utilisateurs implémentés dès la V1.</li>
          <li><strong>Indépendance vis-à-vis de Google Maps</strong> sur la cartographie en production, pour viabilité financière long terme.</li>
          <li><strong>Parité iOS et Android</strong> dès le lancement, sans avantage marketing à l'une des deux plateformes.</li>
        </ul>
      </section>

      {/* ---------- 3. Notre proposition ---------- */}
      <section className="oc-section">
        <span className="oc-section-num">03</span>
        <h2>Notre proposition</h2>

        <h3>Périmètre V1 (livré le 15 octobre 2026)</h3>
        <div className="oc-scope-grid">
          {[
            ['Authentification & profil', 'Email/mot de passe + Apple/Google Sign-In, gestion compte.'],
            ['Squad & invitations', "Création de squad, invitations par lien partageable, gestion des membres."],
            ['Création & gestion de trip', 'Trip avec dates, destination, photo de couverture, archivage.'],
            ['Itinéraire & cartographie', 'MapLibre + tuiles OSM, étapes drag-drop, points d\'intérêt.'],
            ['Vote & décisions collectives', 'Proposition d\'étapes, vote pour/contre, trancher en admin.'],
            ['Split des dépenses', 'Saisie rapide, calcul des soldes, marquage des remboursements.'],
            ['Journal de bord (V1 simple)', 'Photo + texte court, timeline du trip, accès groupe uniquement.'],
            ['Notifications', '3 events critiques en push (invitation, validation étape, dépense).'],
          ].map(([title, desc], i) => (
            <div key={i} className="oc-scope-item">
              <span className="oc-scope-num">{String(i + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <h3>Reporté en V2 (post-lancement)</h3>
        <ul className="oc-bullets">
          <li>Mode hors-ligne avancé (saisie de dépenses offline, sync différée).</li>
          <li>IA de recommandation d'étapes en fonction du groupe et de la météo.</li>
          <li>Géoloc temps réel des autres voitures du groupe.</li>
          <li>Partage public d'un trip terminé.</li>
          <li>Anglais et autres langues européennes.</li>
          <li>Tests de charge poussés et observabilité avancée.</li>
        </ul>

        <h3>Choix techniques structurants</h3>
        <ul className="oc-bullets oc-bullets-tech">
          <li><strong>Mobile.</strong> React Native (économie sur ce budget, performance suffisante pour le périmètre V1, code partagé iOS / Android à 90%).</li>
          <li><strong>Backend.</strong> Node.js + Fastify, PostgreSQL avec extension PostGIS pour la dimension géographique.</li>
          <li><strong>Cartographie.</strong> MapLibre + tuiles OpenStreetMap auto-hébergées (indépendance Google, coût d'exploitation maîtrisé).</li>
          <li><strong>Authentification.</strong> Apple Sign-In, Google Sign-In, email/mot de passe avec JWT court + refresh.</li>
          <li><strong>Hébergement.</strong> Scaleway France (RGPD-friendly, conforme à votre exigence UE).</li>
          <li><strong>Stockage médias.</strong> Scaleway Object Storage (S3-compatible, prix prévisible).</li>
          <li><strong>Monitoring.</strong> Sentry (erreurs), PostHog (analytics produit, RGPD-compliant).</li>
          <li><strong>IA.</strong> Reportée en V2. Si activation : Mistral Large via API hébergée en France.</li>
        </ul>
      </section>

      {/* ---------- 4. Équipe ---------- */}
      <section className="oc-section">
        <span className="oc-section-num">04</span>
        <h2>Équipe dédiée</h2>
        <p>
          Huit profils complémentaires, dimensionnés pour tenir le délai sans surcoût. Les charges sont calculées sur la base d'un calendrier glissant : pas de profil à 100% sur toute la durée, sauf le dev mobile.
        </p>

        <div className="oc-table-wrap">
          <table className="oc-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Profil</th>
                <th>Rôle</th>
                <th className="num">TJM HT</th>
                <th className="num">Occ.</th>
                <th className="num">j-h</th>
                <th className="num">Coût HT</th>
              </tr>
            </thead>
            <tbody>
              {offerProfiles.map(p => (
                <tr key={p.code}>
                  <td className="mono">{p.code}</td>
                  <td><strong>{p.name}</strong></td>
                  <td className="muted">{p.role}</td>
                  <td className="num mono">{fmtNum(p.tjm)} €</td>
                  <td className="num mono">{p.occupation}%</td>
                  <td className="num mono">{p.jh}</td>
                  <td className="num mono"><strong>{fmtEUR(p.tjm * p.jh)}</strong></td>
                </tr>
              ))}
              <tr className="oc-table-total">
                <td colSpan={5} className="muted mono">Total équipe</td>
                <td className="num mono"><strong>{offerMeta.totals.jh} j-h</strong></td>
                <td className="num mono"><strong>{fmtEUR(totalCost)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---------- 5. Planning ---------- */}
      <section className="oc-section">
        <span className="oc-section-num">05</span>
        <h2>Planning et jalons</h2>
        <p>
          Le projet s'étend sur 19 semaines, du <strong>1er juin 2026</strong> au <strong>14 octobre 2026</strong>. Mise en production publique <strong>la veille de votre événement Annecy</strong> du 15 octobre, pour absorber le risque résiduel des reviews stores.
        </p>

        <ol className="oc-milestones">
          <li><span>M1</span><strong>Kick-off projet</strong><em>S1 · 1er juin</em></li>
          <li><span>M2</span><strong>Validation cadrage</strong><em>S3 · 19 juin</em></li>
          <li><span>M3</span><strong>Validation maquettes V1</strong><em>S7 · 17 juillet</em></li>
          <li><span>M4</span><strong>Fin développement back</strong><em>S17 · 25 septembre</em></li>
          <li><span>M5</span><strong>Fin développement mobile</strong><em>S18 · 2 octobre</em></li>
          <li><span>M6</span><strong>Fin recette interne</strong><em>S18 · 2 octobre</em></li>
          <li><span>M7</span><strong>Mise en production publique</strong><em>S19 · 14 octobre</em></li>
          <li><span>M8</span><strong>Événement Annecy · 200 invités</strong><em>S20 · 15 octobre</em></li>
        </ol>

        <p className="oc-note">
          Le détail des 45 tâches, dépendances, chemin critique et vue ressources sont disponibles dans le Gantt projet (annexe A1).
        </p>
      </section>

      {/* ---------- 6. Chiffrage par phase ---------- */}
      <section className="oc-section">
        <span className="oc-section-num">06</span>
        <h2>Chiffrage par phase</h2>
        <p>
          Vue alternative du chiffrage, ventilée par phase plutôt que par profil. Les deux totaux convergent : <strong>{fmtEUR(totalCost)} HT</strong>.
        </p>

        <div className="oc-table-wrap">
          <table className="oc-table">
            <thead>
              <tr>
                <th>Phase</th>
                <th>Périmètre</th>
                <th>Semaines</th>
                <th className="num">j-h</th>
                <th className="num">Coût HT</th>
                <th className="num">Part</th>
              </tr>
            </thead>
            <tbody>
              {offerPhases.map(ph => (
                <tr key={ph.id}>
                  <td><strong>{ph.id}</strong> · {ph.label}</td>
                  <td className="muted">{ph.scope}</td>
                  <td className="mono muted">{ph.weeks}</td>
                  <td className="num mono">{ph.jh}</td>
                  <td className="num mono"><strong>{fmtEUR(ph.cost)}</strong></td>
                  <td className="num mono muted">{Math.round((ph.cost / totalCost) * 100)}%</td>
                </tr>
              ))}
              <tr className="oc-table-total">
                <td colSpan={3} className="muted mono">Total</td>
                <td className="num mono"><strong>{offerPhases.reduce((s, p) => s + p.jh, 0)}</strong></td>
                <td className="num mono"><strong>{fmtEUR(offerPhases.reduce((s, p) => s + p.cost, 0))}</strong></td>
                <td className="num mono">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="oc-note">
          <strong>Inclus dans ce montant :</strong> tous les développements V1, design system complet, recette interne, bêta fermée 25 testeurs, soumission stores et 3 mois de garantie de bon fonctionnement après mise en production.
          <br /><br />
          <strong>Non inclus :</strong> hébergement Scaleway (estimé 80 €/mois en run, à votre charge), licences logicielles tierces (estimé 0 € car stack open source), frais de stores (99 $/an Apple, 25 $ une fois Google), tierce maintenance applicative au-delà des 3 mois de garantie (à contractualiser séparément).
        </p>
      </section>

      {/* ---------- 7. Modalités ---------- */}
      <section className="oc-section">
        <span className="oc-section-num">07</span>
        <h2>Modalités contractuelles</h2>

        <h3>Échéancier de paiement</h3>
        <div className="oc-table-wrap">
          <table className="oc-table">
            <thead>
              <tr>
                <th>Échéance</th>
                <th>Déclencheur</th>
                <th className="num">Part</th>
                <th className="num">Montant HT</th>
              </tr>
            </thead>
            <tbody>
              {paymentSchedule.map((p, i) => (
                <tr key={i}>
                  <td><strong>{p.label}</strong></td>
                  <td className="muted">{p.trigger}</td>
                  <td className="num mono">{p.share}%</td>
                  <td className="num mono"><strong>{fmtEUR(p.amount)}</strong></td>
                </tr>
              ))}
              <tr className="oc-table-total">
                <td colSpan={2} className="muted mono">Total</td>
                <td className="num mono">100%</td>
                <td className="num mono"><strong>{fmtEUR(paymentSchedule.reduce((s, p) => s + p.amount, 0))}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Propriété intellectuelle</h3>
        <p>
          Cession totale du code source, des maquettes et des assets à <strong>{offerMeta.client.name}</strong> à la mise en production (M7). {offerMeta.agency.name} conserve un droit de cite (mention en portfolio) après validation écrite du client. Aucune dépendance bloquante côté agence après livraison.
        </p>

        <h3>Garantie & maintenance</h3>
        <p>
          Garantie de bon fonctionnement de <strong>3 mois</strong> à compter de la mise en production, incluant la correction des anomalies bloquantes ou majeures à nos frais. Au-delà, contrat de tierce maintenance applicative à contractualiser séparément (forfait mensuel ou ticket à l'usage).
        </p>

        <h3>Conditions d'intervention</h3>
        <ul className="oc-bullets">
          <li>Equipe dédiée à temps partiel ou plein selon les phases, présence physique à Annecy au kick-off et à l'événement final.</li>
          <li>Rituels client : daily à votre demande, revue hebdomadaire, démo de fin de sprint toutes les deux semaines.</li>
          <li>Outils de pilotage : Linear pour le suivi, Slack pour le quotidien, Loom pour les démos asynchrones.</li>
          <li>Décisions client centralisées sur Gaspard Vasseur, validation maquettes par écrit (signature électronique).</li>
        </ul>

        <h3>Validité de l'offre</h3>
        <p>
          La présente offre est valable jusqu'au <strong>{offerMeta.reference.validity}</strong>. Au-delà, les TJM et la disponibilité de l'équipe peuvent évoluer.
        </p>
      </section>

      {/* ---------- 8. Annexes ---------- */}
      <section className="oc-section">
        <span className="oc-section-num">08</span>
        <h2>Annexes</h2>
        <ul className="oc-annexes">
          <li>
            <strong>A1 · Gantt projet détaillé.</strong> 7 lots, 45 tâches, 8 jalons, dépendances et chemin critique.{' '}
            <a href="/gantt-roadtripsquad.html" target="_blank" rel="noopener noreferrer" className="oc-link">
              Ouvrir le Gantt <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li><strong>A2 · Backlog V1 par module.</strong> Découpé en epics et user stories, à produire en J2.</li>
          <li><strong>A3 · Charte design system.</strong> Tokens, composants core, présentée en S5.</li>
          <li><strong>A4 · Plan de tests recette.</strong> 50 cas prioritaires, présenté en S15.</li>
          <li><strong>A5 · Conditions générales d'intervention.</strong> Document standard {offerMeta.agency.name}, joint au bon de commande.</li>
        </ul>

        <div className="oc-signature">
          <div>
            <span className="oc-meta-label">Pour {offerMeta.agency.name}</span>
            <span className="oc-meta-value">Direction commerciale</span>
            <div className="oc-sig-line" />
          </div>
          <div>
            <span className="oc-meta-label">Pour {offerMeta.client.name}</span>
            <span className="oc-meta-value">{offerMeta.client.contact}</span>
            <div className="oc-sig-line" />
          </div>
        </div>
      </section>

      <footer className="oc-footer">
        <p>{offerMeta.agency.name} · {offerMeta.agency.siret} · {offerMeta.agency.address} · {offerMeta.agency.contact}</p>
        <p className="muted">Document confidentiel, destiné à l'usage exclusif de {offerMeta.client.name}. Reproduction et diffusion à des tiers soumises à accord écrit préalable.</p>
      </footer>
    </article>
  )
}
