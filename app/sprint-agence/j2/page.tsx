import Link from 'next/link'
import { ArrowLeft, ArrowRight, Layers, Target, Wrench, Sparkles } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Jour 2 · Du Gantt aux User Stories',
  description: 'Programme du J2 : transformer les modules en epics, décliner en user stories, estimer.',
}

export default function J2Page() {
  return (
    <div className="sa-page">
      <header className="sa-step-header">
        <div className="sa-step-header-inner">
          <Link href="/sprint-agence" className="sa-back-link">
            <ArrowLeft className="w-4 h-4" />
            Sommaire de la journée
          </Link>

          <div className="sa-step-eyebrow">Jour 2 · Du Gantt aux User Stories</div>
          <h1 className="sa-step-title">Construire le backlog V1</h1>
          <p className="sa-step-pitch">
            Le J1 a posé le squelette temporel. Aujourd'hui, on lui met la chair fonctionnelle. On part des modules de votre périmètre V1 pour en faire des epics, puis des user stories que l'équipe pourra estimer et planifier.
          </p>

          <div className="sa-step-intent">
            <span className="sa-step-intent-label">Intention pédagogique</span>
            <p>
              Apprendre à passer du "TEMPS" (Gantt) à la "VALEUR" (US). Comprendre comment INVEST cadre une bonne user story, et pourquoi les critères d'acceptation sont la frontière entre un dev qui livre et un dev qui interprète.
            </p>
          </div>
        </div>
      </header>

      <main className="sa-step-main">
        <div className="sa-step-stack">

          <section className="sa-section sa-section-narrative">
            <div className="sa-section-head">
              <div className="sa-section-icon"><Layers className="w-4 h-4" /></div>
              <span className="sa-section-label">Programme</span>
            </div>
            <h2 className="sa-section-title">Déroulé de la journée</h2>
            <p className="sa-section-body">
              Pas d'horaires stricts comme hier, mais un fil conducteur en deux temps : matin sur les epics et la théorie, après-midi sur les user stories et le poker planning.
            </p>

            <div className="sa-howto-grid" style={{ marginTop: '1.25rem' }}>
              <article className="sa-howto-card">
                <span className="sa-howto-num">1</span>
                <h3>Récap & théorie</h3>
                <p>Retour sur deux ou trois Gantts du J1, cours minute sur Epic / User Story / INVEST / format "En tant que / je veux / pour".</p>
              </article>
              <article className="sa-howto-card">
                <span className="sa-howto-num">2</span>
                <h3>Cartographier les epics</h3>
                <p>Chaque équipe extrait 6 à 8 epics depuis son périmètre V1. Un epic regroupe une fonctionnalité cohérente, livrable d'un coup.</p>
              </article>
              <article className="sa-howto-card">
                <span className="sa-howto-num">3</span>
                <h3>Décliner en US</h3>
                <p>Choisir 2 epics, écrire 6 à 8 user stories par epic, ajouter les critères d'acceptation Given/When/Then sur les 3 plus importantes.</p>
              </article>
              <article className="sa-howto-card">
                <span className="sa-howto-num">4</span>
                <h3>Poker planning</h3>
                <p>Estimer 8 à 10 user stories en story points (Fibonacci 1, 2, 3, 5, 8, 13). Le but n'est pas la précision, c'est le débat.</p>
              </article>
            </div>
          </section>

          <section className="sa-section sa-section-instructions">
            <div className="sa-section-head">
              <div className="sa-section-icon"><Target className="w-4 h-4" /></div>
              <span className="sa-section-label">Méthodologie</span>
            </div>
            <h2 className="sa-section-title">Trois cadres à connaître</h2>

            <h3 style={{ marginTop: '1rem', fontSize: '1rem', fontWeight: 700, color: 'var(--sa-blue)' }}>1. Format INVEST pour vos US</h3>
            <ul className="sa-bullets">
              <li><strong>Independent.</strong> Une US doit pouvoir être développée sans en bloquer trois autres.</li>
              <li><strong>Negotiable.</strong> Le détail s'affine avec le client, ce n'est pas un contrat figé.</li>
              <li><strong>Valuable.</strong> Une US apporte de la valeur à un utilisateur réel, pas juste à l'équipe technique.</li>
              <li><strong>Estimable.</strong> L'équipe doit pouvoir lui mettre une taille (story points).</li>
              <li><strong>Small.</strong> Tient dans un sprint de deux semaines.</li>
              <li><strong>Testable.</strong> On sait quand elle est terminée. C'est le rôle des critères d'acceptation.</li>
            </ul>

            <h3 style={{ marginTop: '1.25rem', fontSize: '1rem', fontWeight: 700, color: 'var(--sa-blue)' }}>2. Le format "En tant que… je veux… pour…"</h3>
            <p style={{ background: '#fffdf6', border: '1px solid #f4ead0', borderRadius: '0.875rem', padding: '1rem 1.25rem', fontSize: '0.9375rem', lineHeight: 1.6 }}>
              <strong>En tant qu'</strong>utilisateur connecté membre d'une squad,<br />
              <strong>Je veux</strong> générer un lien d'invitation que je peux partager via WhatsApp ou SMS,<br />
              <strong>Pour</strong> que mes amis rejoignent la squad sans avoir à créer un compte d'abord.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Trois lignes. Vingt mots. Si vous ne tenez pas dans ce format, votre US est probablement trop grosse, ou pas assez claire sur la valeur.
            </p>

            <h3 style={{ marginTop: '1.25rem', fontSize: '1rem', fontWeight: 700, color: 'var(--sa-blue)' }}>3. Critères d'acceptation Given / When / Then</h3>
            <ul className="sa-bullets">
              <li><strong>Given</strong> un contexte initial (l'utilisateur est connecté, il a une squad, etc.)</li>
              <li><strong>When</strong> il pose un acte (clique, soumet, navigue…)</li>
              <li><strong>Then</strong> ce qu'il doit observer en retour.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Trois à cinq critères par US clé. C'est ce que le QA va lire pour tester. C'est ce que le PO va valider en démo. Sans ça, votre US n'est pas Ready.
            </p>
          </section>

          <section className="sa-section sa-section-deliverable">
            <div className="sa-section-head">
              <div className="sa-section-icon"><Wrench className="w-4 h-4" /></div>
              <span className="sa-section-label">Outil pour aujourd'hui</span>
            </div>
            <h2 className="sa-section-title">Story Mapping interactif</h2>
            <p className="sa-section-body">
              Un mini-Trello intégré à l'app. Vous y posez vos jalons, vos epics, vos user stories, vous les affectez à un profil, vous les estimez. Drag-drop entre colonnes, sauvegarde automatique sur votre navigateur, export Markdown en fin de journée pour repartir avec votre backlog.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link href="/sprint-agence/story-mapping" className="sa-cta-primary">
                Ouvrir le Story Mapping
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="https://planningpoker.com" target="_blank" rel="noopener noreferrer" className="sa-cta-secondary">
                Lancer un poker planning
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>

            <p className="sa-section-body" style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--sa-stone)' }}>
              Le board est sauvegardé sur ce navigateur. Si plusieurs membres de l'équipe veulent contribuer, désignez une personne qui pilote le board, et faites tourner. L'export Markdown vous permet de partager le résultat avec le reste de la promo.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
