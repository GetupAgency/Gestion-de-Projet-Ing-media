import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import WireframesGate from '@/components/SprintAgence/WireframesGate'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Wireframes V1 · Sprint Agence',
  description: 'Wireframes basse-fi de RoadTrip Squad : application mobile et back office.',
}

export default function WireframesPage() {
  return (
    <div className="sa-page">
      <header className="sa-step-header">
        <div className="sa-step-header-inner">
          <Link href="/sprint-agence" className="sa-back-link">
            <ArrowLeft className="w-4 h-4" />
            Sommaire de la journée
          </Link>

          <div className="sa-step-eyebrow">Annexe · Modèle de référence</div>
          <h1 className="sa-step-title">Wireframes V1 — app et back office</h1>
          <p className="sa-step-pitch">
            Une proposition de structure d'écrans, pas de design final. Sept écrans côté mobile, trois côté admin. À montrer en débrief, pas en amont.
          </p>
        </div>
      </header>

      <main className="wf-main">
        <WireframesGate />
      </main>

      <Footer />
    </div>
  )
}
