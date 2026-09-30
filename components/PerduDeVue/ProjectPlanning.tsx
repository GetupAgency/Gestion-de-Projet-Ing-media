'use client'

import { Fragment, useState, type ReactNode } from 'react'
import { ChevronDown, ChevronRight, Copy } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { decimal, frenchDate, roleNames, workdayDate } from '@/lib/perduDeVue/calculations'
import type { CorrectionDossier, ProjectTask, RoleId, ScheduledTask } from '@/lib/perduDeVue/types'
import './planning.css'

type Props = {
  data: CorrectionDossier
  tasks: ProjectTask[]
  schedule: { tasks: ScheduledTask[]; ready: number; margin: number; finish: number; publication: number }
  start: string
  weeks: number
  setStart: (value: string) => void
  setWeeks: (value: number) => void
  setDuration: (id: string, value: number) => void
  controls: ReactNode
}

const colors = [
  ['cadrage', 'Cadrage'], ['conception', 'Conception'], ['realisation', 'Réalisation'],
  ['verification', 'Vérification'], ['service', 'Ouverture et suivi'],
] as const

export default function ProjectPlanning({ data, tasks, schedule, start, weeks, setStart, setWeeks, setDuration, controls }: Props) {
  const [view, setView] = useState<'atelier' | 'gantt'>('atelier')
  const [revealed, setRevealed] = useState(0)
  const [notes, setNotes] = useState('')
  const [copyMessage, setCopyMessage] = useState('')
  const [collapsed, setCollapsed] = useState<string[]>([])
  const [selected, setSelected] = useState<string>('milestone:kickoff')
  const date = (offset: number) => frenchDate(workdayDate(start, offset))
  const deadline = weeks * 5
  const span = Math.ceil((Math.max(deadline + 5, schedule.finish) + 2) / 5) * 5
  const getTask = (id: string) => schedule.tasks.find(task => task.id === id)!
  const milestoneDay = (ids: string[]) => Math.max(...ids.map(id => getTask(id).end))
  const phase = data.phases.find(item => `milestone:${item.id}` === selected) ?? (!schedule.tasks.some(task => task.id === selected) ? data.phases[0] : undefined)
  const chosen = schedule.tasks.find(task => task.id === selected)
  const publication = getTask('publication')
  const prepared = Math.max(...publication.after.map(id => getTask(id).end))
  const toggle = (id: string) => setCollapsed(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id])
  const trackStyle = { backgroundSize: `${500 / span}% 100%` }
  const deadlineLine = <span className="pdvg-deadline" style={{ left: `${deadline / span * 100}%` }} aria-hidden="true" />

  return <>
    <div className="pdvc-section-title"><span className="num">04</span><div><h2 id="planning-title">Des étapes au Gantt</h2><p>D’abord organiser le travail ensemble. Puis placer les tâches et les validations dans le temps.</p></div></div>
    <div className="pdvc-view-switch pdvg-view-switch pdvc-no-print" aria-label="Support de rétroplanning">
      <button type="button" aria-pressed={view === 'atelier'} onClick={() => setView('atelier')}>Brainstorm avec la classe</button>
      <button type="button" aria-pressed={view === 'gantt'} onClick={() => setView('gantt')}>Afficher le Gantt de référence</button>
    </div>
    {view === 'atelier' ? <div className="pdvg-workshop">
      <div className="pdvg-opening"><h3>Qu’est-ce qui doit être prêt pour ouvrir ce service ?</h3><p>Proposez les grandes étapes du projet. Pour chacune, nommez le travail à faire et ce qui permettra de dire : « on peut passer à la suite ».</p></div>
      <ol className="pdvg-questions">
        <li><strong>Quelles grandes tâches ?</strong><span>Regroupez ce qui produit un même résultat. Quelques blocs suffisent.</span></li>
        <li><strong>Qu’est-ce qu’on valide ?</strong><span>Quel livrable, quel critère concret et quelle personne pour donner l’accord ?</span></li>
        <li><strong>Dans quel ordre ?</strong><span>Qu’est-ce qui doit attendre ? Qu’est-ce qui peut avancer en parallèle ?</span></li>
      </ol>
      <label className="pdvg-notes" htmlFor="pdvg-class-notes">Les idées de la classe <span>Notes libres, conservées seulement tant que cette page reste ouverte.</span><textarea id="pdvg-class-notes" rows={5} value={notes} onChange={event => setNotes(event.target.value)} placeholder="Étape → grandes tâches → résultat à valider → qui valide\nLes dépendances et les questions encore ouvertes…" /></label>
      <div className="pdvg-workshop-actions pdvc-no-print"><button type="button" className="btn" disabled={!notes.trim()} onClick={async () => { try { await navigator.clipboard.writeText(notes); setCopyMessage('Notes copiées.') } catch { setCopyMessage('Sélectionnez les notes pour les copier.') } }}><Copy size={16} aria-hidden="true" />Copier les notes</button><span role="status">{copyMessage}</span></div>
      <div className="pdvg-reveal-heading"><div><h3>Des repères à révéler au fil de l’échange</h3><p>Une proposition de découpage, à comparer avec les idées du groupe.</p></div><div className="pdvg-reveal-controls pdvc-no-print"><button type="button" className="btn" disabled={revealed === data.phases.length} onClick={() => setRevealed(count => count + 1)}>{revealed === 0 ? 'Révéler une première étape' : 'Révéler l’étape suivante'}</button>{revealed > 0 && <button type="button" className="btn" onClick={() => setRevealed(0)}>Masquer les repères</button>}</div></div>
      {revealed === 0 && <p className="pdvg-empty">Les étapes, les tâches et leurs dates sont masquées pour commencer avec vos propositions.</p>}
      <div className="pdvg-phase-list">{data.phases.slice(0, revealed).map((item, index) => <details key={item.id} className={`pdvg-workshop-phase pdvg-color-${item.color}`}><summary><span className="pdvg-phase-number num">{String(index + 1).padStart(2, '0')}</span><span><strong>{item.title}</strong><small>{item.question}</small></span><ChevronDown size={18} aria-hidden="true" /></summary><div className="pdvg-workshop-answer"><div>{item.participants && <p><strong>Personnes impliquées :</strong> {item.participants.join(', ')}.</p>}<h4>Grandes tâches</h4><ul>{data.tasks.filter(task => task.phase === item.id).map(task => <li key={task.id}>{task.title}</li>)}</ul></div><div><h4>Jalon · {item.milestone.title}</h4><p>{item.milestone.criteria}</p><p><strong>Qui valide :</strong> {item.milestone.validator}.</p></div></div></details>)}</div>
      <div className="pdvg-next"><h3>Ensuite, les équipes construisent leur Gantt</h3><p>Chaque équipe reprend ses étapes, estime les durées et les charges, place les dépendances et garde une marge avant publication. Le suivi après ouverture figure sur le même planning.</p><p><strong>À distinguer :</strong> une étape regroupe du travail ; une grande tâche produit un résultat ; un jalon marque une validation à une date donnée.</p><button type="button" className="btn btn-primary pdvc-no-print" onClick={() => setView('gantt')}>Afficher le Gantt de référence</button></div>
    </div> : <div className="pdvg-reference">
      {controls}
      <div className="pdvc-planning-controls pdvc-no-print">
        <label>Début du projet<input type="date" value={start} min="2020-01-01" max="2099-12-31" onChange={event => { if (event.target.validity.valid && event.target.value) setStart(event.target.value) }} /></label>
        <label>Publication visée<select value={weeks} onChange={event => setWeeks(Number(event.target.value))}><option value={6}>Fin de semaine 6</option><option value={8}>Fin de semaine 8</option><option value={10}>Fin de semaine 10</option></select></label>
        <p>Début : <strong>{date(0)}</strong> · Publication visée : <strong>{date(deadline - 1)}</strong>.<br />Jours ouvrés, lundi à vendredi. Jours fériés non déduits.</p>
      </div>
      <div className="pdvg-chart-heading"><div><h3>Un projet, huit étapes, un seul Gantt</h3><p>Les barres sont des tâches. Les losanges sont les jalons à valider.</p></div><button type="button" className="btn pdvc-no-print" onClick={() => setCollapsed(collapsed.length === data.phases.length ? [] : data.phases.map(item => item.id))}>{collapsed.length === data.phases.length ? 'Déplier les tâches' : 'Replier les tâches'}</button></div>
      <div className="pdvg-legend" aria-label="Légende du Gantt"><div>{colors.map(([color, title]) => <span key={color}><i className={`pdvg-swatch pdvg-color-${color}`} />{title}</span>)}</div><div><span><i className="pdvg-key-diamond" />Jalon de validation</span><span><i className="pdvg-key-margin" />Marge disponible</span><span><i className="pdvg-key-deadline" />Date de publication visée</span></div></div>
      <div className="pdvg-scroll" role="region" aria-label="Gantt unique des huit étapes, défilement horizontal possible" tabIndex={0}>
        <div className="pdvg-chart" style={{ minWidth: Math.max(940, span * 15 + 320) }}>
          <div className="pdvg-row pdvg-head"><div>Étapes · tâches · jalons</div><div className="pdvg-weeks" style={{ gridTemplateColumns: `repeat(${span / 5}, 1fr)` }}>{Array.from({ length: span / 5 }, (_, index) => <div key={index}><strong>S{index + 1}</strong><span>{date(index * 5)}</span></div>)}</div></div>
          {data.phases.map((item, index) => {
            const phaseTasks = schedule.tasks.filter(task => task.phase === item.id)
            const day = milestoneDay(item.milestone.after)
            const closed = collapsed.includes(item.id)
            return <Fragment key={item.id}>
              <div className={`pdvg-row pdvg-phase pdvg-color-${item.color}`}><button type="button" aria-expanded={!closed} onClick={() => toggle(item.id)}>{closed ? <ChevronRight size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}<span className="num">{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong></button><div className="pdvg-track" style={trackStyle}>{deadlineLine}<span className="pdvg-phase-span" style={{ left: `${Math.min(...phaseTasks.map(task => task.start)) / span * 100}%`, width: `${(Math.max(...phaseTasks.map(task => task.end)) - Math.min(...phaseTasks.map(task => task.start))) / span * 100}%` }} aria-hidden="true" /></div></div>
              {!closed && phaseTasks.map(task => <div key={task.id} className={`pdvg-row pdvg-task pdvg-color-${item.color} ${selected === task.id ? 'is-selected' : ''}`}><button type="button" className="pdvg-label" aria-pressed={selected === task.id} onClick={() => setSelected(task.id)}><span>{task.title}</span><small className="num">J{task.start + 1}–J{task.end}</small></button><div className="pdvg-track" style={trackStyle}>{deadlineLine}{task.id === 'publication' && publication.start > prepared && <span className="pdvg-margin" style={{ left: `${prepared / span * 100}%`, width: `${(publication.start - prepared) / span * 100}%` }} title={`${publication.start - prepared} jours de marge avant publication`}>{publication.start - prepared} j de marge</span>}<button type="button" className="pdvg-bar" style={{ left: `${task.start / span * 100}%`, width: `${task.duration / span * 100}%` }} onClick={() => setSelected(task.id)} aria-label={`${task.title}, J${task.start + 1} à J${task.end}, ${task.duration} jours. Voir le détail.`} title={`${task.title} · ${date(task.start)}–${date(task.end - 1)}`}><span>{task.duration} j</span></button></div></div>)}
              <div className={`pdvg-row pdvg-milestone-row pdvg-color-${item.color} ${selected === `milestone:${item.id}` ? 'is-selected' : ''}`}><button type="button" className="pdvg-label" aria-pressed={selected === `milestone:${item.id}`} onClick={() => setSelected(`milestone:${item.id}`)}><span><b className="num">M{index + 1}</b> {item.milestone.title}</span><small>{date(day - 1)} · J{day}</small></button><div className="pdvg-track" style={trackStyle}>{deadlineLine}<button type="button" className="pdvg-milestone" style={{ left: `${day / span * 100}%` }} aria-label={`Jalon M${index + 1} : ${item.milestone.title}, J${day}. Voir les critères de validation.`} onClick={() => setSelected(`milestone:${item.id}`)}><span aria-hidden="true" /><b>M{index + 1}</b></button></div></div>
            </Fragment>
          })}
        </div>
      </div>
      <p className="pdvc-note">Cliquez sur une tâche ou un jalon pour voir son détail. Les tâches peuvent se chevaucher si leurs dépendances et les disponibilités de l’équipe le permettent.</p>
      <div className="pdvg-selection" aria-live="polite">
        {phase ? <><span className="pdvg-detail-kind">Jalon · {phase.title}</span><h3>{phase.milestone.title}</h3><p>{phase.milestone.criteria}</p><dl>{phase.participants && <div><dt>Personnes impliquées</dt><dd>{phase.participants.join(', ')}</dd></div>}<div><dt>Qui valide</dt><dd>{phase.milestone.validator}</dd></div><div><dt>Date prévue</dt><dd>{date(milestoneDay(phase.milestone.after) - 1)} · J{milestoneDay(phase.milestone.after)}</dd></div><div><dt>Après</dt><dd>{phase.milestone.after.map(id => getTask(id).title).join(' et ')}</dd></div></dl><p className="pdvc-note">Un jalon ne dure pas plusieurs jours. Le temps de préparation et d’attente de la validation se trouve dans les tâches qui le précèdent.</p></> : chosen ? <><span className="pdvg-detail-kind">Grande tâche · {data.phases.find(item => item.id === chosen.phase)?.title}</span><div className="pdvg-task-heading"><div><h3>{chosen.title}</h3><p>{chosen.deliverable}</p></div><label>Durée <span className="pdvc-duration"><input type="number" aria-label={`Durée de ${chosen.title}`} min={1} max={20} step={1} value={chosen.duration} onChange={event => { const value = Number(event.target.value); if (Number.isInteger(value) && value >= 1 && value <= 20) setDuration(chosen.id, value) }} /> jours ouvrés</span></label></div><dl><div><dt>Responsable</dt><dd>{chosen.owner}</dd></div><div><dt>Dates</dt><dd>{date(chosen.start)}–{date(chosen.end - 1)} · J{chosen.start + 1}–J{chosen.end}</dd></div><div><dt>Dépend de</dt><dd>{chosen.after.map(id => getTask(id).title).join(' et ') || 'Démarrage du projet'}</dd></div><div><dt>Charge facturée</dt><dd>{Object.entries(chosen.charges).map(([role, value]) => `${decimal(value)} j · ${roleNames[role as RoleId]}`).join(' + ')}</dd></div></dl>{Object.values(chosen.charges).some(days => days > chosen.duration) && <p className="pdvc-danger">La charge d’un métier dépasse la durée prévue. Allongez la durée ou prévoyez une personne supplémentaire.</p>}</> : null}
      </div>
      <p className="pdvc-note">Modifier une durée simule une attente ou un retard, sans ajouter de jours facturés. L’option « envoi et paiement » ajoute du travail et modifie aussi le budget. Le suivi commence après la publication réelle, même si celle-ci est décalée.</p>
      <details className="pdvc-details"><summary>Table des charges et dépendances</summary><div className="pdvc-table-scroll"><table className="pdvc-table"><thead><tr><th>Étape / tâche</th><th>Dates</th><th>Dépend de</th>{(Object.keys(roleNames) as RoleId[]).map(role => <th key={role}>{roleNames[role]}</th>)}</tr></thead><tbody>{schedule.tasks.map(task => <tr key={task.id}><th scope="row">{task.title}<small>{data.phases.find(item => item.id === task.phase)?.title}</small></th><td className="num">J{task.start + 1}–J{task.end}</td><td>{task.after.map(id => tasks.find(item => item.id === id)?.title).join(', ') || '—'}</td>{(Object.keys(roleNames) as RoleId[]).map(role => <td className="num" key={role}>{task.charges[role] ? `${decimal(task.charges[role]!)} j` : '—'}</td>)}</tr>)}</tbody></table></div></details>
      <div className="pdvc-prose mt-6"><ReactMarkdown>{data.copy.planning}</ReactMarkdown></div>
    </div>}
  </>
}
