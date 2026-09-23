import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { getAtelierIds, getPublicAtelier, getPublicAteliers } from '@/lib/content'
import Cartouche from '@/components/Cartouche'
import CasPratique from '@/components/CasPratique'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return getAtelierIds().map((id) => ({ id }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const a = getPublicAtelier(params.id)
  return { title: a ? `${a.title} · Atelier` : 'Atelier' }
}

/** Page d'un atelier en groupe : cartouche de référence, feuillet jaune (énoncé + brouillon), correction enseignant sur feuillet rose. */
export default function AtelierPage({ params }: { params: { id: string } }) {
  const atelier = getPublicAtelier(params.id)
  if (!atelier) notFound()
  const all = getPublicAteliers()
  const index = all.findIndex((a) => a.id === atelier.id)
  const next = all[index + 1]

  return (
    <div className="min-h-screen">
      <Cartouche
        back={{ href: '/entrainement', label: 'Retour au terrain d’entraînement' }}
        title={atelier.title}
        lead={atelier.pitch}
        meta={[
          { label: 'Atelier n°', value: `G${String(index + 1).padStart(2, '0')}` },
          { label: 'Secteur', value: atelier.sector },
          { label: 'Durée', value: `${atelier.duration} · ${atelier.format}` },
          { label: 'Réf.', value: `${atelier.skill} · artefact : ${atelier.artefact}` },
        ]}
        aside={
          <Link href={`/module/${atelier.module}`} className="btn">
            Cours associé
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        }
      />

      <main className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="max-w-measure">
          <CasPratique
            moduleId="atelier"
            sectionId={atelier.id}
            caseIndex={0}
            title={atelier.title}
            description={atelier.description}
            exercice={atelier.exercice}
            hasCorrection={atelier.hasCorrection}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t-2 border-ink pt-5">
            <Link href="/entrainement" className="btn">
              Tous les ateliers
            </Link>
            {next && (
              <Link href={`/entrainement/${next.id}`} className="btn btn--primary">
                Atelier suivant : {next.title}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
