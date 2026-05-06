import { ListChecks, BookText, ScrollText, AlertTriangle, Wallet, Package } from 'lucide-react'
import { SprintStep } from '@/data/sprintAgence'

type Section = SprintStep['studentSections'][number]

const sectionIcon = {
  narrative: BookText,
  instructions: ListChecks,
  briefBlock: ScrollText,
  tjmGrid: Wallet,
  pitfalls: AlertTriangle,
  deliverable: Package,
} as const

const sectionVariant = {
  narrative: 'sa-section-narrative',
  instructions: 'sa-section-instructions',
  briefBlock: 'sa-section-brief',
  tjmGrid: 'sa-section-grid',
  pitfalls: 'sa-section-pitfalls',
  deliverable: 'sa-section-deliverable',
} as const

const sectionLabel = {
  narrative: 'Contexte',
  instructions: 'Consigne',
  briefBlock: 'Brief',
  tjmGrid: 'Repère marché',
  pitfalls: 'À surveiller',
  deliverable: 'Livrable',
} as const

interface StudentSectionProps {
  section: Section
}

export default function StudentSection({ section }: StudentSectionProps) {
  const Icon = sectionIcon[section.kind]
  const variant = sectionVariant[section.kind]
  const label = sectionLabel[section.kind]

  // Le contenu HTML provient exclusivement de data/sprintAgence.ts (statique, pas d'entrée utilisateur).
  // Même pattern que app/module/[id]/page.tsx pour les sections de cours.
  const briefHtml = section.kind === 'briefBlock' && section.body ? { __html: section.body } : null

  return (
    <section className={`sa-section ${variant}`}>
      <div className="sa-section-head">
        <div className="sa-section-icon">
          <Icon className="w-4 h-4" />
        </div>
        <span className="sa-section-label">{label}</span>
      </div>

      {section.title && <h2 className="sa-section-title">{section.title}</h2>}

      {briefHtml ? (
        <div className="sa-brief" dangerouslySetInnerHTML={briefHtml} />
      ) : section.body ? (
        <p className="sa-section-body">{section.body}</p>
      ) : null}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="sa-bullets">
          {section.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="sa-table-wrap">
          <table className="sa-table">
            <thead>
              <tr>
                {section.table.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
