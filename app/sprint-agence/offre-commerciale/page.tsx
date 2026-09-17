import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import OfferGate from '@/components/SprintAgence/OfferGate'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Offre commerciale modèle · Sprint Agence',
  description: 'Réponse type à projeter en débrief, après que les équipes aient produit la leur.',
}

export default function OfferPage() {
  return (
    <div className="sa-page">
      <header className="sa-step-header">
        <div className="sa-step-header-inner">
          <Link href="/sprint-agence" className="sa-back-link">
            <ArrowLeft className="w-4 h-4" />
            Sommaire de la journée
          </Link>

          <div className="sa-step-eyebrow">Annexe · Modèle de référence</div>
          <h1 className="sa-step-title">Offre commerciale modèle</h1>
          <p className="sa-step-pitch">
            Une réponse complète à la consultation de Gaspard, dimensionnée sur le Gantt produit le J1. Servir en débrief, pas en amont.
          </p>
        </div>
      </header>

      <main className="oc-main">
        <OfferGate />
      </main>

      <Footer />
    </div>
  )
}
