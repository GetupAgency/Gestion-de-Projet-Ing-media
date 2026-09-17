import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import BrainstormGate from '@/components/SprintAgence/BrainstormGate'
import TeacherOnly from '@/components/SprintAgence/TeacherOnly'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Brainstorming d\'ouverture · Sprint Agence',
  description:
    "Avant le brief, on lance les idées en vrac : quels mots-clés et compétences vous inspire ce projet ?",
}

export default function BrainstormingPage() {
  return (
    <div className="sa-page">
      <header className="sa-step-header">
        <div className="sa-step-header-inner">
          <Link href="/sprint-agence" className="sa-back-link">
            <ArrowLeft className="w-4 h-4" />
            Sommaire de la journée
          </Link>

          <div className="sa-step-eyebrow">Échauffement · Matin</div>
          <h1 className="sa-step-title">Brainstorming d'ouverture</h1>
          <p className="sa-step-pitch">
            Une fois le brief parcouru en équipe, on relâche la pression et on lance les idées en vrac. Tout ce que ce projet vous inspire : métiers, compétences, technos, contraintes, mots qui vous viennent. Je clique au fur et à mesure pour visualiser ce qui sort.
          </p>

          <div className="sa-step-intent">
            <span className="sa-step-intent-label">Pourquoi cet exercice</span>
            <p>
              Avant d'analyser, il faut associer. Cet échauffement révèle ce que la classe a déjà en tête, repère les angles morts, et installe le bon vocabulaire pour la journée. Pas de bonne ou mauvaise réponse : les mots imprévus sont parfois les plus intéressants.
            </p>
          </div>
        </div>
      </header>

      <main className="sa-brain-main">
        <BrainstormGate />

        <TeacherOnly>
          <div className="sa-brain-cta">
            <div>
              <Sparkles className="w-5 h-5 text-amber-700" />
              <div>
                <h3>Quand on a fait le tour</h3>
                <p>
                  On récapitule les thèmes les mieux couverts, on pointe ceux qu'on a un peu oubliés, et on enchaîne sur le Q&A avec Gaspard.
                </p>
              </div>
            </div>
            <Link href="/sprint-agence/q-and-a" className="sa-cta-primary">
              Passer au Q&A
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </TeacherOnly>
      </main>

      <Footer />
    </div>
  )
}
