'use client'

import { useRouter } from 'next/navigation'
import Cartouche from '@/components/Cartouche'
import Footer from '@/components/Footer'
import EnhancedQuiz from '@/components/EnhancedQuiz'
import type { QuizQuestion } from '@/data/modules'

export default function QuizClient({ questions }: { questions: QuizQuestion[] }) {
  const router = useRouter()
  const types = new Set(questions.map((q) => q.type || 'mcq')).size
  return (
    <div className="min-h-screen">
      <Cartouche
        back={{ href: '/', label: 'Retour au dossier' }}
        title="Quiz global"
        lead="Toutes les questions du cours dans un seul tirage. Filtrez par thème, difficulté et format ; chaque passage est mélangé."
        meta={[
          { label: 'Réf.', value: `Annexe A1 · ${questions.length} questions au catalogue` },
          { label: 'Formats', value: `${types} (QCM, Vrai/Faux, trous, scénarios)` },
          { label: 'Barème', value: 'Facile 1 · Moyen 2 · Difficile 3' },
          { label: 'Suivi', value: 'Relevé conservé sur cet appareil' },
        ]}
      />
      <main className="mx-auto max-w-measure px-4 py-10 sm:px-6 lg:px-8">
        <EnhancedQuiz questions={questions} onComplete={() => router.push('/')} />
      </main>
      <Footer />
    </div>
  )
}
