import { TeacherBlock } from '@/data/sprintAgence'
import TeacherOnly from './TeacherOnly'
import { Sparkles, AlertOctagon, Target, UserSquare, MessagesSquare, Calculator } from 'lucide-react'

const variantIcon = {
  context: Sparkles,
  expected: Target,
  pitfall: AlertOctagon,
  character: UserSquare,
  qa: MessagesSquare,
  estimate: Calculator,
} as const

const variantLabel = {
  context: 'Posture',
  expected: 'Réponse attendue',
  pitfall: 'Vigilance',
  character: 'Personnage',
  qa: 'Q&A',
  estimate: 'Repère chiffré',
} as const

interface TeacherBlocksProps {
  blocks: TeacherBlock[]
}

export default function TeacherBlocks({ blocks }: TeacherBlocksProps) {
  if (!blocks || blocks.length === 0) return null

  return (
    <TeacherOnly preview={`${blocks.length} annexe${blocks.length > 1 ? 's' : ''} masquée${blocks.length > 1 ? 's' : ''} en mode étudiant`}>
      <div className="sa-teacher-stack">
        <div className="sa-teacher-grid">
          {blocks.map(block => {
            const Icon = variantIcon[block.variant]
            const label = variantLabel[block.variant]
            return (
              <article key={block.id} className={`sa-teacher-card sa-teacher-${block.variant}`}>
                <div className="sa-teacher-card-head">
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </div>
                <h3 className="sa-teacher-card-title">{block.title}</h3>
                <p className="sa-teacher-card-body">{block.body}</p>
                {block.bullets && block.bullets.length > 0 && (
                  <ul className="sa-teacher-bullets">
                    {block.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </TeacherOnly>
  )
}
