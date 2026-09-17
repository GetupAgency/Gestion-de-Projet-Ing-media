import { Coffee, Users2, MessagesSquare, Sun, Moon, Utensils } from 'lucide-react'
import { ScheduleSlot } from '@/data/sprintAgence'

interface ScheduleProps {
  slots: ScheduleSlot[]
}

const formatBadge: Record<ScheduleSlot['format'], { label: string; className: string }> = {
  plénière: { label: 'Plénière', className: 'sa-badge-pleniere' },
  équipes: { label: 'Équipes', className: 'sa-badge-equipes' },
  pause: { label: 'Pause', className: 'sa-badge-pause' },
}

const formatIcon: Record<ScheduleSlot['format'], typeof Coffee> = {
  plénière: MessagesSquare,
  équipes: Users2,
  pause: Coffee,
}

interface PeriodSection {
  id: ScheduleSlot['period']
  title: string
  caption: string
  icon: typeof Sun
}

const periods: PeriodSection[] = [
  {
    id: 'matin',
    title: 'Matin',
    caption: 'Découverte du brief, brainstorming, Q&A et premiers ateliers de cadrage.',
    icon: Sun,
  },
  {
    id: 'pause-déjeuner',
    title: 'Pause déjeuner',
    caption: 'On reprend des forces avant la suite.',
    icon: Utensils,
  },
  {
    id: 'après-midi',
    title: 'Après-midi',
    caption: 'Construction du Gantt et rendu en plénière. Si on n\'a pas terminé, on continue tranquillement le lendemain.',
    icon: Moon,
  },
]

export default function Schedule({ slots }: ScheduleProps) {
  return (
    <div className="sa-schedule-grouped">
      {periods.map(period => {
        const items = slots.filter(s => s.period === period.id)
        if (items.length === 0) return null
        const PeriodIcon = period.icon
        return (
          <section key={period.id} className={`sa-schedule-period sa-schedule-period-${period.id}`}>
            <header className="sa-schedule-period-head">
              <div className="sa-schedule-period-icon">
                <PeriodIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="sa-schedule-period-title">{period.title}</h3>
                <p className="sa-schedule-period-caption">{period.caption}</p>
              </div>
            </header>

            <ol className="sa-schedule-list">
              {items.map((slot, idx) => {
                const Icon = formatIcon[slot.format]
                const badge = formatBadge[slot.format]
                return (
                  <li key={`${period.id}-${idx}`} className="sa-schedule-row">
                    <div className="sa-schedule-index">{idx + 1}</div>
                    <div className="sa-schedule-body">
                      <div className="sa-schedule-head">
                        <Icon className="w-4 h-4 text-stone-500" />
                        <span className="sa-schedule-label">{slot.label}</span>
                        <span className={`sa-badge ${badge.className}`}>{badge.label}</span>
                      </div>
                      {slot.detail && <p className="sa-schedule-detail">{slot.detail}</p>}
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>
        )
      })}
    </div>
  )
}
