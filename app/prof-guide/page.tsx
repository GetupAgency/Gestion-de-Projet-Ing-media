import type { Metadata } from 'next'
import Link from 'next/link'
import { isTeacherRequest } from '@/lib/teacherAuth'
import ProfGuideClient from '@/components/ProfGuideClient'
import Cartouche from '@/components/Cartouche'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'Guide enseignant' }
export const dynamic = 'force-dynamic'

/** Le guide n'est rendu (et donc envoyé au navigateur) que pour un enseignant authentifié. */
export default async function ProfGuidePage() {
  const teacher = await isTeacherRequest()
  if (!teacher) {
    return (
      <div className="min-h-screen">
        <Cartouche
          back={{ href: '/', label: 'Retour au dossier' }}
          title="Page réservée à l’enseignant"
          lead="Les corrections détaillées de la mission sont servies uniquement en mode enseignant. Activez-le avec le bouton en bas à gauche."
          tone="pink"
        />
        <main className="mx-auto max-w-page px-4 py-10 sm:px-6 lg:px-8">
          <Link href="/" className="btn">Retour au dossier</Link>
        </main>
        <Footer />
      </div>
    )
  }
  return <ProfGuideClient />
}
