import Link from 'next/link'
import { ArrowLeft, ArrowRight, Compass, Clock, Users2, FileText, Sparkles, Timer, FileSignature, Frame, Layers } from 'lucide-react'
import { sprintAgenceMeta, sprintSchedule, sprintSteps } from '@/data/sprintAgence'
import Schedule from '@/components/SprintAgence/Schedule'
import TeacherOnly from '@/components/SprintAgence/TeacherOnly'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sprint Agence · RoadTrip Squad',
  description:
    "Une journée pour vivre la chaîne brief, cadrage, équipe, périmètre, planning. Format mini-agences, livrables concrets.",
}

export default function SprintAgenceLanding() {
  const firstStep = sprintSteps[0]

  return (
    <div className="sa-page">
      <header className="sa-landing-header">
        <div className="sa-landing-header-inner">
          <Link href="/" className="sa-back-link">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <div className="sa-landing-eyebrow">{sprintAgenceMeta.subtitle}</div>
          <h1 className="sa-landing-title">{sprintAgenceMeta.title}</h1>
          <p className="sa-landing-lede">{sprintAgenceMeta.intro}</p>

          <div className="sa-landing-meta">
            <div className="sa-meta-card">
              <span className="sa-meta-label">Client</span>
              <span className="sa-meta-value">
                {sprintAgenceMeta.client} <span className="sa-meta-sub">avec {sprintAgenceMeta.clientLead}</span>
              </span>
            </div>
            <div className="sa-meta-card">
              <span className="sa-meta-label">Format</span>
              <span className="sa-meta-value">{sprintAgenceMeta.setup}</span>
            </div>
            <div className="sa-meta-card">
              <span className="sa-meta-label">Livrables</span>
              <span className="sa-meta-value">{sprintAgenceMeta.delivery}</span>
            </div>
          </div>

          <div className="sa-landing-cta-row">
            <Link href={`/sprint-agence/${firstStep.slug}`} className="sa-cta-primary">
              Lire le brief client
              <ArrowRight className="w-4 h-4" />
            </Link>
            <TeacherOnly>
              <Link href="/sprint-agence/brainstorming" className="sa-cta-secondary">
                Lancer le brainstorming
              </Link>
            </TeacherOnly>
          </div>
        </div>
      </header>

      <main className="sa-landing-main">
        <section className="sa-landing-section">
          <div className="sa-landing-section-head">
            <Compass className="w-5 h-5 text-stone-500" />
            <h2>La promesse de la journée</h2>
          </div>
          <p className="sa-prose-lede">{sprintAgenceMeta.promise}</p>
        </section>

        <section id="programme" className="sa-landing-section">
          <div className="sa-landing-section-head">
            <Clock className="w-5 h-5 text-stone-500" />
            <h2>Programme</h2>
          </div>
          <p className="sa-prose-lede">
            Sept moments rythment la journée. Le brief le matin, deux ateliers de cadrage, une longue plage de production l'après-midi, un temps de rendu en plénière.
          </p>
          <Schedule slots={sprintSchedule} />
        </section>

        <section className="sa-landing-section">
          <div className="sa-landing-section-head">
            <Users2 className="w-5 h-5 text-stone-500" />
            <h2>Les six étapes du parcours</h2>
          </div>
          <p className="sa-prose-lede">
            Chaque étape est une page autonome. Vous pouvez les parcourir dans l'ordre ou y revenir librement pendant la journée.
          </p>

          <TeacherOnly>
            <div className="sa-warmup-stack">
              <Link href="/sprint-agence/brainstorming" className="sa-warmup-card">
                <div className="sa-warmup-icon">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="sa-warmup-body">
                  <span className="sa-warmup-eyebrow">Échauffement · Matin · Mode enseignant</span>
                  <h3 className="sa-warmup-title">Brainstorming d'ouverture</h3>
                  <p className="sa-warmup-pitch">
                    Une fois le brief lu en équipe : "Ça vous inspire quels mots-clés et compétences, ce projet ?". Tableau interactif à projeter au tableau, classés par thème.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-700 self-center" />
              </Link>

              <Link href="/sprint-agence/times-up" className="sa-warmup-card sa-warmup-card-game">
                <div className="sa-warmup-icon">
                  <Timer className="w-5 h-5" />
                </div>
                <div className="sa-warmup-body">
                  <span className="sa-warmup-eyebrow">Pause détente · Mode enseignant</span>
                  <h3 className="sa-warmup-title">Time's Up du PM</h3>
                  <p className="sa-warmup-pitch">
                    Quand la classe est cuite, on bascule en jeu. Trois manches sur le même paquet de cartes : libre, trois mots, mime. Deux équipes s'affrontent, le rire fait le reste.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-700 self-center" />
              </Link>

              <Link href="/sprint-agence/offre-commerciale" className="sa-warmup-card sa-warmup-card-doc">
                <div className="sa-warmup-icon">
                  <FileSignature className="w-5 h-5" />
                </div>
                <div className="sa-warmup-body">
                  <span className="sa-warmup-eyebrow">Annexe · Modèle de référence</span>
                  <h3 className="sa-warmup-title">Offre commerciale modèle</h3>
                  <p className="sa-warmup-pitch">
                    Une réponse type carrée à projeter en débrief : chiffrage croisé profil / phase, échéancier lié aux jalons, conditions contractuelles. Cohérente avec le Gantt produit.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-700 self-center" />
              </Link>

              <Link href="/sprint-agence/wireframes" className="sa-warmup-card sa-warmup-card-doc">
                <div className="sa-warmup-icon">
                  <Frame className="w-5 h-5" />
                </div>
                <div className="sa-warmup-body">
                  <span className="sa-warmup-eyebrow">Annexe · Modèle de référence</span>
                  <h3 className="sa-warmup-title">Wireframes V1</h3>
                  <p className="sa-warmup-pitch">
                    Sept écrans mobile (onboarding, squads, trip, carte, dépenses, journal) plus trois côté back office (dashboard, utilisateurs, modération). Niveau low-fi, structure et parcours.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-700 self-center" />
              </Link>
            </div>
          </TeacherOnly>

          <div className="sa-step-grid">
            {sprintSteps.map(step => (
              <Link key={step.id} href={`/sprint-agence/${step.slug}`} className="sa-step-card">
                <div className="sa-step-card-eyebrow">{step.eyebrow}</div>
                <h3 className="sa-step-card-title">{step.title}</h3>
                <p className="sa-step-card-pitch">{step.pitch}</p>
                <div className="sa-step-card-foot">
                  <span>{step.schedule}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="sa-landing-section">
          <div className="sa-landing-section-head">
            <Layers className="w-5 h-5 text-stone-500" />
            <h2>Suite : Jour 2</h2>
          </div>
          <p className="sa-prose-lede">
            Une fois la journée du brief terminée, on enchaîne sur la construction du backlog : transformer les modules en epics, écrire les user stories, estimer en story points. Outil intégré pour vos équipes.
          </p>

          <Link href="/sprint-agence/j2" className="sa-j2-card">
            <div className="sa-j2-icon">
              <Layers className="w-5 h-5" />
            </div>
            <div className="sa-j2-body">
              <span className="sa-j2-eyebrow">Jour 2 · Du Gantt aux User Stories</span>
              <h3 className="sa-j2-title">Construire le backlog V1</h3>
              <p className="sa-j2-pitch">
                Programme de la journée, méthodo INVEST + Given/When/Then, et un Story Mapping interactif où vos équipes posent leurs jalons, epics et user stories en drag-drop.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 self-center" style={{ color: '#1F3463' }} />
          </Link>
        </section>

        <section className="sa-landing-section">
          <div className="sa-landing-section-head">
            <FileText className="w-5 h-5 text-stone-500" />
            <h2>Comment travailler</h2>
          </div>
          <div className="sa-howto-grid">
            <article className="sa-howto-card">
              <span className="sa-howto-num">1</span>
              <h3>Lisez avant de proposer</h3>
              <p>Le réflexe le plus difficile : ne pas se précipiter sur la solution. La première heure est uniquement faite de lecture, de notes, de questions.</p>
            </article>
            <article className="sa-howto-card">
              <span className="sa-howto-num">2</span>
              <h3>Travaillez ensemble, vraiment</h3>
              <p>Pas de répartition figée. Sur cette journée, vous décidez à plusieurs. C'est dans la discussion que les bonnes idées sortent, pas dans la division des tâches.</p>
            </article>
            <article className="sa-howto-card">
              <span className="sa-howto-num">3</span>
              <h3>Cherchez, ne devinez pas</h3>
              <p>Vous avez le droit d'utiliser le web, les docs, des assistants IA. Vérifiez. Croisez. Argumentez. Un choix non défendu est un choix fragile.</p>
            </article>
            <article className="sa-howto-card">
              <span className="sa-howto-num">4</span>
              <h3>Acceptez de faire des choix</h3>
              <p>Tout n'entrera pas dans la V1. Tout n'entrera pas dans le budget. Faire un choix, c'est défendre ce qu'on prend et expliquer ce qu'on laisse.</p>
            </article>
          </div>
        </section>

        <section className="sa-landing-section sa-cta-block">
          <div>
            <h2>On y va ?</h2>
            <p>Première étape : la lecture du brief client. Prenez le temps qu'il vous faut.</p>
          </div>
          <Link href={`/sprint-agence/${firstStep.slug}`} className="sa-cta-primary">
            Ouvrir le brief
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
