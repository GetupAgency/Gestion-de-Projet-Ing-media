'use client'

import { useState } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, Copy, Eye, FileText, Printer, RotateCcw } from 'lucide-react'
import type { CorrectionDossier } from '@/lib/perduDeVue/types'
import ServicePrototype from './ServicePrototype'
import PlanningBudget from './PlanningBudget'

const sections = [
  { id: 'entretien', label: 'Analyse & entretien', number: '01' },
  { id: 'intention', label: 'Note d’intention', number: '02' },
  { id: 'prototype', label: 'Prototype', number: '03' },
  { id: 'planning', label: 'Rétroplanning', number: '04' },
  { id: 'budget', label: 'Budget', number: '05' },
] as const

type Section = typeof sections[number]['id']

function Markdown({ children }: { children: string }) {
  return <div className="pdvc-prose"><ReactMarkdown components={{ h2: ({ children }) => <h3>{children}</h3>, h3: ({ children }) => <h4>{children}</h4> }}>{children}</ReactMarkdown></div>
}

export default function CorrectionClient({ data }: { data: CorrectionDossier }) {
  const [projection, setProjection] = useState(false)
  const [section, setSection] = useState<Section>('entretien')
  const [copyStatus, setCopyStatus] = useState('')
  const [prototypeVersion, setPrototypeVersion] = useState(0)
  const visible = (id: Section) => !projection || section === id
  function show(id: Section) {
    setSection(id)
    if (!projection) document.getElementById(`correction-${id}`)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }
  return <div className={`pdvc-page ${projection ? 'pdvc-projection' : ''}`}>
    <header className="pdvc-page-header">
      <div className="pdvc-header-top"><Link href="/mission"><ArrowLeft size={15} aria-hidden="true" />Mission étudiante</Link><span>Accès enseignant · Cas fictif</span></div>
      <h1>Perdu de vue<span>La réponse de référence.</span></h1>
      <p>Une proposition complète à discuter : ce que nous demandons au client, ce que nous retenons, ce que nous fabriquons et ce que cela coûte.</p>
      <div className="pdvc-toolbar pdvc-no-print">
        <div className="pdvc-view-switch" aria-label="Affichage de la correction"><button type="button" aria-pressed={!projection} onClick={() => setProjection(false)}><FileText size={16} aria-hidden="true" />Dossier complet</button><button type="button" aria-pressed={projection} onClick={() => setProjection(true)}><Eye size={16} aria-hidden="true" />Une partie à projeter</button></div>
        <button type="button" className="btn" onClick={() => window.print()}><Printer size={16} aria-hidden="true" />Imprimer cette vue</button>
      </div>
    </header>
    <nav className="pdvc-index pdvc-no-print" aria-label="Parties de la correction">{sections.map(item => <button type="button" key={item.id} aria-pressed={projection ? section === item.id : undefined} onClick={() => show(item.id)}><span className="num">{item.number}</span>{item.label}</button>)}</nav>
    {projection && <p className="pdvc-projection-note pdvc-no-print">Seule la partie choisie est affichée. Les notes de jeu et les prompts sont masqués. Cette projection ne publie rien sur les appareils étudiants.</p>}
    <main className="pdvc-main">
      <section id="correction-entretien" className="pdvc-section" hidden={!visible('entretien')} aria-labelledby="interview-title">
        <div className="pdvc-section-title"><span className="num">01</span><div><h2 id="interview-title">Analyse du brief & entretien</h2><p>Obtenir des réponses qui changent les décisions du projet.</p></div></div>
        {!projection && <details className="pdvc-details pdvc-private"><summary>Votre rôle de client — à garder pour vous</summary><div className="pdvc-client-role"><h3>{data.client.name}</h3><p>{data.client.role}</p><p>{data.client.posture}</p><blockquote>{data.client.opening}</blockquote><p>Ne récitez pas toutes les réponses. Donnez-les lorsqu’une équipe pose la question. Si elle promet tout, demandez ce que cela coûte et qui va le faire. Si elle recadre avec une raison claire, vous pouvez accepter.</p><p>Les informations volontairement absentes du brief sont les réponses d’entretien ci-dessous. Leur absence doit provoquer une discussion ; elle ne sert pas à piéger une équipe sur un fait impossible à deviner.</p></div></details>}
        <Markdown>{data.analysis}</Markdown>
        <div className="pdvc-table-scroll"><table className="pdvc-table"><caption>Trame d’entretien et réponses du commanditaire</caption><thead><tr><th>Question utile</th><th>Réponse du client</th><th>Conséquence pour le projet</th></tr></thead><tbody>{data.interview.map(row => <tr key={row.question}><th scope="row">{row.question}</th><td>{row.answer}</td><td>{row.decision}</td></tr>)}</tbody></table></div>
        <div className="mt-6"><Markdown>{data.copy.outcome}</Markdown></div>
      </section>

      <section id="correction-intention" className="pdvc-section" hidden={!visible('intention')} aria-labelledby="intention-title">
        <div className="pdvc-section-title"><span className="num">02</span><div><h2 id="intention-title">La note d’intention</h2><p>Le document que le client peut lire et valider.</p></div></div>
        <article className="pdvc-intention"><div className="pdvc-document-heading"><strong>Perdu de vue</strong><span>Proposition de première version · Bus & tram</span></div><Markdown>{data.intention}</Markdown></article>
        <div className="pdvc-table-scroll mt-8"><table className="pdvc-table"><caption>Le périmètre qui découle de la note</caption><thead><tr><th>Fonction</th><th>Décision</th><th>Pourquoi</th></tr></thead><tbody>{data.scope.map(row => <tr key={row.feature}><th scope="row">{row.feature}</th><td><span className="pdvc-choice">{row.choice}</span></td><td>{row.reason}</td></tr>)}</tbody></table></div>
      </section>

      <section id="correction-prototype" className="pdvc-section" hidden={!visible('prototype')} aria-labelledby="prototype-title">
        <div className="pdvc-section-title"><span className="num">03</span><div><h2 id="prototype-title">Le prototype du service</h2><p>Chercher un objet, demander sa restitution, puis examiner la demande côté agent.</p></div><button type="button" className="btn pdvc-no-print" onClick={() => setPrototypeVersion(value => value + 1)}><RotateCcw size={16} aria-hidden="true" />Réinitialiser la démo</button></div>
        {!projection && <details className="pdvc-details pdvc-private"><summary>Scénario de démonstration et limites</summary><div className="pdvc-details-body"><Markdown>{data.demoGuide}</Markdown></div></details>}
        <ServicePrototype key={prototypeVersion} initialObjects={data.objects} />
        <div className="pdvc-table-scroll mt-8"><table className="pdvc-table"><caption>Ce que nous devons vérifier</caption><thead><tr><th>Action</th><th>Résultat attendu</th></tr></thead><tbody>{data.tests.map(row => <tr key={row.action}><th scope="row">{row.action}</th><td>{row.expected}</td></tr>)}</tbody></table></div>
        <p className="pdvc-note">Le prototype montre le parcours. Il ne prouve ni la qualité d’un vrai rapprochement IA, ni la sécurité d’un service en production. Ces points nécessitent les travaux et les tests prévus au planning.</p>
      </section>

      <div hidden={projection && section !== 'planning' && section !== 'budget'}><PlanningBudget data={data} part={projection ? section === 'planning' ? 'planning' : 'budget' : 'both'} /></div>

      {!projection && <>
        <section className="pdvc-section pdvc-private" aria-labelledby="risks-title"><h2 id="risks-title">Les points à surveiller</h2><div className="pdvc-table-scroll"><table className="pdvc-table"><thead><tr><th>Risque</th><th>Action</th><th>Responsable</th></tr></thead><tbody>{data.risks.map(row => <tr key={row.risk}><th scope="row">{row.risk}</th><td>{row.action}</td><td>{row.owner}</td></tr>)}</tbody></table></div></section>
        <section className="pdvc-section pdvc-private" aria-labelledby="prompts-title"><h2 id="prompts-title">Guider leurs prompts, au bon moment</h2><p className="pdvc-lead">Donnez une structure quand l’équipe a posé ses choix. Les champs entre crochets sont à compléter avec son travail. Ces trames restent dans votre correction.</p><div className="pdvc-prompt-list">{data.prompts.map((prompt, index) => <details className="pdvc-details" key={prompt.title}><summary>{prompt.title}</summary><div className="pdvc-details-body"><p>{prompt.guidance}</p><pre className="pdvc-prompt">{prompt.text}</pre><button type="button" className="btn pdvc-no-print" onClick={async () => { try { await navigator.clipboard.writeText(prompt.text); setCopyStatus(`Trame « ${prompt.title} » copiée.`) } catch { setCopyStatus('Copie indisponible. Sélectionnez le texte de la trame pour le copier.') } }}><Copy size={15} aria-hidden="true" />Copier cette trame</button></div></details>)}</div><p className="pdvc-note" role="status">{copyStatus}</p></section>
        <section className="pdvc-section pdvc-private" aria-labelledby="rubric-title"><h2 id="rubric-title">Une grille de lecture sur 20</h2><p className="pdvc-lead">La correction est une proposition cohérente, pas une réponse à reproduire. Évaluez les décisions et leur cohérence ; acceptez un autre scénario correctement défendu.</p><dl className="pdvc-rubric">{data.rubric.map(row => <div key={row.title}><dt>{row.title}<strong className="num">{row.points} pts</strong></dt><dd>{row.detail}</dd></div>)}</dl><div className="pdvc-prose"><h3>Questions de clôture</h3><p>Quelle réponse du client a le plus changé votre projet ? Quelle promesse avez-vous choisi de retirer ? Où retrouve-t-on dans votre budget le travail nécessaire à votre prototype ? Que se passe-t-il si le client change d’avis après validation ?</p></div></section>
      </>}
    </main>
    <footer className="pdvc-page-footer"><Link href="/mission">Retour au dossier étudiant</Link><span>Correction enseignant · Perdu de vue</span></footer>
  </div>
}
