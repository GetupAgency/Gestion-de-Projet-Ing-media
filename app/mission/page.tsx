import type { Metadata } from 'next'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { ArrowDown, ArrowUp } from 'lucide-react'
import Cartouche from '@/components/Cartouche'
import Footer from '@/components/Footer'
import MissionPrint from '@/components/MissionPrint'
import TeacherLink from '@/components/PerduDeVue/TeacherLink'
import './mission.css'

export const metadata: Metadata = {
  title: 'Perdu de vue · La mission',
  description: 'Une journée en agence : entretien client, note d’intention, prototype, rétroplanning et budget pour les objets trouvés de la Métropole.',
}

// Les documents sont rendus au build : une seule source éditoriale pour la fiche et la page.
export const dynamic = 'force-static'

export default async function MissionPage() {
  const [briefSource, studentSource] = await Promise.all([
    readFile(path.join(process.cwd(), 'docs/mission-perdu-de-vue/01-expression-de-besoin.md'), 'utf8'),
    readFile(path.join(process.cwd(), 'docs/mission-perdu-de-vue/02-mission-etudiants-v1.md'), 'utf8'),
  ])
  const brief = briefSource.slice(briefSource.indexOf('### Objet de la consultation'))
  const studentMission = studentSource.slice(studentSource.indexOf('Vous êtes une agence'))

  return (
    <div className="pdv-page min-h-screen" id="mission-top">
      <Cartouche
        title="Perdu de vue"
        lead="Le bureau des objets trouvés passe au numérique. Vous êtes l’agence qui doit transformer cette demande en un service utile, réalisable et chiffré."
        tone="yellow"
        back={{ href: '/', label: 'Retour au dossier' }}
        meta={[
          { label: 'Formation', value: 'Master 1 · Gestion de projet' },
          { label: 'Format', value: 'Une journée · 7 h' },
          { label: 'Équipes', value: '3 à 4 personnes conseillées' },
          { label: 'La démarche', value: 'Entretien · Intention · Prototype · Planning · Budget' },
        ]}
        aside={
          <nav className="pdv-navigation" aria-label="Dans cette mission">
            <a href="#brief-client">Lire la demande <ArrowDown size={15} aria-hidden="true" /></a>
            <a href="#mission-etudiants">Votre mission <ArrowDown size={15} aria-hidden="true" /></a>
            <MissionPrint />
            <TeacherLink />
          </nav>
        }
      />

      <main className="pdv-main">
        <section className="pdv-section" id="brief-client" aria-labelledby="brief-title">
          <div className="pdv-section-heading">
            <h2 className="display-narrow" id="brief-title">L’expression du besoin</h2>
            <p>La commande de la Métropole. À lire comme le premier document reçu par votre agence.</p>
          </div>
          <article className="pdv-document" aria-label="Expression de besoin de la Métropole">
            <div className="pdv-client-signature">
              <p>Métropole</p>
              <p>Direction des services aux habitants</p>
              <small>Service numérique des objets trouvés · Cas pédagogique fictif</small>
            </div>
            <ReactMarkdown>{brief}</ReactMarkdown>
          </article>
        </section>

        <section className="pdv-section" id="mission-etudiants" aria-labelledby="mission-title">
          <div className="pdv-section-heading">
            <h2 className="display-narrow" id="mission-title">À vous de proposer.</h2>
            <p>Un fil conducteur pour la journée. Vous avancez à votre rythme et confrontez vos choix au client.</p>
            <a href="#brief-client">Revenir à la commande <ArrowUp size={14} className="ml-2" aria-hidden="true" /></a>
          </div>
          <div className="pdv-document">
            <ReactMarkdown components={{
              h2: ({ children }) => <h3>{children}</h3>,
              h3: ({ children }) => <h4>{children}</h4>,
            }}>{studentMission}</ReactMarkdown>
            <div className="pdv-hand-in">
              <p>Un choix de périmètre mérite une vérification ? Les modules de cours restent à votre disposition.</p>
              <Link href="/" className="btn">Revenir au cours</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
