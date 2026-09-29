import type { Metadata } from 'next'
import Link from 'next/link'
import { isTeacherRequest } from '@/lib/teacherAuth'
import { perduDeVueCorrection } from '@/lib/perduDeVue/server'
import CorrectionClient from '@/components/PerduDeVue/CorrectionClient'
import TeacherAccess from '@/components/PerduDeVue/TeacherAccess'
import Cartouche from '@/components/Cartouche'
import Footer from '@/components/Footer'
import './correction.css'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const metadata: Metadata = { title: 'Perdu de vue · Correction enseignant', robots: { index: false, follow: false } }

export default async function CorrectionPage() {
  // Ne jamais remplacer cette autorisation par le cookie d’affichage teacher_ui.
  if (!(await isTeacherRequest())) return <div>
    <Cartouche title="Le dossier enseignant" lead="Connectez-vous avec le mot de passe enseignant habituel pour consulter la correction complète de Perdu de vue." tone="pink" back={{ href: '/mission', label: 'Retour à la mission' }} />
    <main className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-8"><TeacherAccess /><Link href="/mission" className="inline-block mt-8 underline">Lire le brief étudiant</Link></main>
    <Footer />
  </div>
  return <CorrectionClient data={perduDeVueCorrection} />
}
