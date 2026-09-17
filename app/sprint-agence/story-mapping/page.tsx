import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import StoryMappingBoard from '@/components/SprintAgence/StoryMappingBoard'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Story Mapping · Jour 2',
  description: 'Construisez votre backlog : jalons, epics, user stories, affectations.',
}

export default function StoryMappingPage() {
  return (
    <div className="sa-page">
      <header className="sa-step-header">
        <div className="sa-step-header-inner">
          <Link href="/sprint-agence/j2" className="sa-back-link">
            <ArrowLeft className="w-4 h-4" />
            Programme du Jour 2
          </Link>

          <div className="sa-step-eyebrow">Atelier · Jour 2</div>
          <h1 className="sa-step-title">Story Mapping de votre V1</h1>
          <p className="sa-step-pitch">
            Posez vos jalons, déclinez vos epics, écrivez vos user stories. Affectez chacune à un profil de l'équipe et estimez en story points. Le board est sauvegardé automatiquement sur votre navigateur.
          </p>
        </div>
      </header>

      <main className="sm-main">
        <StoryMappingBoard />
      </main>

      <Footer />
    </div>
  )
}
