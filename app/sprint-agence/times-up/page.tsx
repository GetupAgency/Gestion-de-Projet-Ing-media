import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import TimesUpGate from '@/components/SprintAgence/TimesUpGate'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Time's Up du PM · Sprint Agence",
  description: "Pause détente en équipes. Trois manches sur le même paquet : libre, trois mots, mime.",
}

export default function TimesUpPage() {
  return (
    <div className="sa-page">
      <header className="sa-step-header">
        <div className="sa-step-header-inner">
          <Link href="/sprint-agence" className="sa-back-link">
            <ArrowLeft className="w-4 h-4" />
            Sommaire de la journée
          </Link>

          <div className="sa-step-eyebrow">Pause détente</div>
          <h1 className="sa-step-title">Time's Up du PM</h1>
          <p className="sa-step-pitch">
            Trois manches, le même paquet de cartes : on les fait deviner librement, puis avec trois mots seulement, puis en mime. Le rire monte à chaque manche, le score suit.
          </p>
        </div>
      </header>

      <main className="sa-times-up-main">
        <TimesUpGate />
      </main>

      <Footer />
    </div>
  )
}
