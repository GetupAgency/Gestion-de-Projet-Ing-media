'use client'

import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { RotateCcw, Download, ArrowRight } from 'lucide-react'
import { buildScenario, decimal, euros, frenchDate, projectBudget, roleNames, scheduleProject, workdayDate } from '@/lib/perduDeVue/calculations'
import type { CorrectionDossier, RoleId } from '@/lib/perduDeVue/types'

export default function PlanningBudget({ data, part = 'both' }: { data: CorrectionDossier; part?: 'both' | 'planning' | 'budget' }) {
  const [start, setStart] = useState('2026-10-05')
  const [weeks, setWeeks] = useState(8)
  const [durations, setDurations] = useState<Record<string, number>>({})
  const [shipping, setShipping] = useState(false)
  const [rates, setRates] = useState(data.rates)
  const [reserve, setReserve] = useState(data.reserve)
  const [images, setImages] = useState(data.expenses.find(row => row.id === 'images')!.quantity)
  const [searches, setSearches] = useState(data.expenses.find(row => row.id === 'search')!.quantity)
  const [selected, setSelected] = useState(data.tasks[0].id)

  const tasks = useMemo(() => buildScenario(data.tasks, data.option, durations, shipping), [data, durations, shipping])
  const schedule = useMemo(() => scheduleProject(tasks, weeks * 5), [tasks, weeks])
  const expenses = data.expenses.map(row => ({ ...row, quantity: row.id === 'images' ? images : row.id === 'search' ? searches : row.quantity }))
  if (shipping) expenses.push(data.optionExpense)
  const budget = projectBudget(tasks, rates, expenses, reserve)
  const baseBudget = projectBudget(data.tasks, data.rates, data.expenses, data.reserve)
  const chosen = schedule.tasks.find(task => task.id === selected) ?? schedule.tasks[0]
  const totalDays = Math.max(weeks * 5, schedule.ready)
  const span = Math.ceil(totalDays / 5) * 5
  const date = (offset: number) => frenchDate(workdayDate(start, offset))
  const changed = shipping || Object.keys(durations).length > 0 || weeks !== 8 || start !== '2026-10-05' || reserve !== data.reserve || images !== data.expenses.find(row => row.id === 'images')!.quantity || searches !== data.expenses.find(row => row.id === 'search')!.quantity || Object.keys(rates).some(key => rates[key as RoleId] !== data.rates[key as RoleId])

  function reset() {
    setStart('2026-10-05'); setWeeks(8); setDurations({}); setShipping(false)
    setRates(data.rates); setReserve(data.reserve); setImages(data.expenses.find(row => row.id === 'images')!.quantity); setSearches(data.expenses.find(row => row.id === 'search')!.quantity); setSelected(data.tasks[0].id)
  }

  function exportBudget() {
    const rows: (string | number)[][] = [['Perdu de vue — simulation pédagogique — montants HT'], ['Poste', 'Quantité', 'Prix unitaire', 'Total']]
    budget.profiles.forEach(row => rows.push([roleNames[row.id], row.days, row.rate, row.total]))
    budget.expenseRows.forEach(row => rows.push([row.title, row.quantity, row.price, row.total]))
    rows.push(['Sous-total', '', '', budget.subtotal], [`Réserve ${reserve} %`, '', '', budget.reserve], ['Total HT', '', '', budget.total], ['Plafond client', '', '', data.ceiling], ['Reste sous plafond', '', '', data.ceiling - budget.total])
    const csv = '\uFEFF' + rows.map(row => row.map(value => '"' + String(value).replaceAll('"', '""') + '"').join(';')).join('\r\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
    const link = document.createElement('a'); link.href = url; link.download = 'perdu-de-vue-budget.csv'; link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return <div className="pdvc-plan-budget">
    <div className="pdvc-simulator-head">
      <div><strong>{changed ? 'Scénario modifié' : 'Scénario de référence'}</strong><p>Le planning et le budget utilisent les mêmes tâches.</p></div>
      <button type="button" className="btn pdvc-no-print" onClick={reset}><RotateCcw size={16} aria-hidden="true" />Revenir à la référence</button>
    </div>
    <div className="pdvc-scenarios pdvc-no-print">
      <label className="pdvc-check"><input type="checkbox" checked={(durations.validation ?? 2) === 5} onChange={event => setDurations(current => ({ ...current, validation: event.target.checked ? 5 : 2 }))} />Le client valide en 5 jours au lieu de 2</label>
      <label className="pdvc-check"><input type="checkbox" checked={shipping} onChange={event => setShipping(event.target.checked)} />Il ajoute l’envoi et le paiement</label>
    </div>
    <div className="pdvc-status-line" aria-live="polite">
      <span>Version prête : <strong>J{schedule.ready}</strong></span>
      <span className={schedule.margin < 0 ? 'pdvc-danger' : ''}>{schedule.margin >= 0 ? 'Marge avant ouverture' : 'Retard sur l’ouverture'} : <strong>{Math.abs(schedule.margin)} j</strong></span>
      <span>Total : <strong>{euros(budget.total)} HT</strong></span>
      {budget.total > data.ceiling && <span className="pdvc-danger">Dépassement : <strong>{euros(budget.total - data.ceiling)}</strong></span>}
    </div>

    <section id="correction-planning" className="pdvc-tool-section" hidden={part === 'budget'} aria-labelledby="planning-title">
      <div className="pdvc-section-title"><span className="num">04</span><div><h2 id="planning-title">Le rétroplanning</h2><p>Une ouverture à huit semaines. Des validations, des tests et une vraie marge.</p></div></div>
      <div className="pdvc-planning-controls pdvc-no-print">
        <label>Début du projet<input type="date" value={start} min="2020-01-01" max="2099-12-31" onChange={event => { if (event.target.validity.valid && event.target.value) setStart(event.target.value) }} /></label>
        <label>Ouverture souhaitée<select value={weeks} onChange={event => setWeeks(Number(event.target.value))}><option value={6}>Après 6 semaines</option><option value={8}>Après 8 semaines</option><option value={10}>Après 10 semaines</option></select></label>
        <p>Du <strong>{date(0)}</strong> au <strong>{date(weeks * 5 - 1)}</strong>.<br />Lundi à vendredi. Jours fériés non calculés.</p>
      </div>
      <div className="pdvc-gantt-scroll" role="region" aria-label="Planning des tâches, défilement horizontal possible" tabIndex={0}>
        <div className="pdvc-gantt" style={{ minWidth: Math.max(760, span * 19 + 260) }}>
          <div className="pdvc-gantt-row pdvc-gantt-heading"><span>Tâche · jours ouvrés</span><div className="pdvc-week-line" style={{ gridTemplateColumns: `repeat(${span / 5}, 1fr)` }}>{Array.from({ length: span / 5 }, (_, index) => <span key={index}>S{index + 1}</span>)}</div></div>
          {schedule.tasks.map(task => <div key={task.id} className={`pdvc-gantt-row ${chosen.id === task.id ? 'is-selected' : ''}`}>
            <button type="button" className="pdvc-task-label" onClick={() => setSelected(task.id)} aria-pressed={chosen.id === task.id}>{task.title}</button>
            <div className="pdvc-track" style={{ backgroundSize: `${500 / span}% 100%` }}>
              <div className="pdvc-deadline" style={{ left: `${weeks * 5 / span * 100}%` }} aria-hidden="true" />
              <button type="button" className={`pdvc-task-bar ${task.driving ? 'is-driving' : ''} ${task.end > weeks * 5 ? 'is-late' : ''}`} style={{ left: `${task.start / span * 100}%`, width: `${task.duration / span * 100}%` }} onClick={() => setSelected(task.id)} aria-label={`${task.title}, du jour ${task.start + 1} au jour ${task.end}, ${task.duration} jours`} title={`${task.title} · ${date(task.start)}–${date(task.end - 1)}`}><span>{task.duration} j</span></button>
            </div>
          </div>)}
        </div>
      </div>
      <div className="pdvc-gantt-legend"><span><i className="is-driving" />Enchaînement qui fixe la durée</span><span><i />Travail en parallèle</span><span>Trait vertical : date d’ouverture</span></div>
      <div className="pdvc-task-detail">
        <div><h3>{chosen.title}</h3><p>{chosen.deliverable}</p><p><strong>{chosen.owner}</strong> · {date(chosen.start)}–{date(chosen.end - 1)} · après {chosen.after.length ? chosen.after.map(id => tasks.find(task => task.id === id)?.title).join(' et ') : 'le lancement du projet'}.</p></div>
        <label>Durée écoulée <span className="pdvc-duration"><input type="number" aria-label={`Durée de ${chosen.title}`} min={1} max={20} step={1} value={chosen.duration} onChange={event => { const value = Number(event.target.value); if (Number.isInteger(value) && value >= 1 && value <= 20) setDurations(current => ({ ...current, [chosen.id]: value })) }} /> jours</span></label>
        <p className="pdvc-task-charge">Charge prévue : {Object.entries(chosen.charges).map(([role, value]) => `${decimal(value)} j ${roleNames[role as RoleId].toLowerCase()}`).join(' + ')}.</p>
      </div>
      {Object.values(chosen.charges).some(days => days > chosen.duration) && <p className="pdvc-danger" role="status">Attention : la charge d’un métier dépasse la durée de cette tâche. Il faut allonger cette durée ou prévoir une personne supplémentaire avant de valider le planning.</p>}
      <p className="pdvc-note">Modifier une durée simule un retard ou une attente. Cela ne crée pas de travail facturé. Une nouvelle fonction, elle, ajoute des charges : l’option « envoi et paiement » modifie aussi le budget.</p>
      <details className="pdvc-details"><summary>Voir les charges et dépendances de chaque tâche</summary><div className="pdvc-table-scroll"><table className="pdvc-table"><thead><tr><th>Tâche</th><th>Jours</th><th>Dépend de</th>{(Object.keys(roleNames) as RoleId[]).map(role => <th key={role}>{roleNames[role]}</th>)}</tr></thead><tbody>{schedule.tasks.map(task => <tr key={task.id}><th scope="row">{task.title}</th><td className="num">J{task.start + 1}–J{task.end}</td><td>{task.after.map(id => tasks.find(item => item.id === id)?.title).join(', ') || '—'}</td>{(Object.keys(roleNames) as RoleId[]).map(role => <td className="num" key={role}>{task.charges[role] ? `${decimal(task.charges[role]!)} j` : '—'}</td>)}</tr>)}</tbody></table></div></details>
      <div className="pdvc-prose mt-6"><ReactMarkdown>{data.copy.planning}</ReactMarkdown></div>
    </section>

    <section id="correction-budget" className="pdvc-tool-section" hidden={part === 'planning'} aria-labelledby="budget-title">
      <div className="pdvc-section-title"><span className="num">05</span><div><h2 id="budget-title">L’enveloppe budgétaire</h2><p>Des jours de travail, des frais identifiés et une réserve expliquée. Montants HT.</p></div></div>
      <p className="pdvc-note">Tarifs et coûts d’IA fictifs pour l’exercice. Ce ne sont pas des prix de marché ni des devis fournisseurs. Le chef de projet doit les faire confirmer avant engagement.</p>
      <div className="pdvc-table-scroll"><table className="pdvc-table"><caption>Prestations — {decimal(budget.totalDays)} jours de travail cumulés</caption><thead><tr><th>Métier</th><th>Charge</th><th>Tarif / jour HT</th><th>Total HT</th></tr></thead><tbody>{budget.profiles.map(row => <tr key={row.id}><th scope="row">{roleNames[row.id]}</th><td className="num">{decimal(row.days)} j</td><td><input className="pdvc-price-input num" aria-label={`Tarif journalier : ${roleNames[row.id]}`} type="number" min={0} max={2500} step={10} value={rates[row.id]} onChange={event => { const value = Number(event.target.value); if (Number.isFinite(value) && value >= 0 && value <= 2500) setRates(current => ({ ...current, [row.id]: value })) }} /></td><td className="num">{euros(row.total)}</td></tr>)}</tbody><tfoot><tr><th colSpan={3}>Total prestations</th><td className="num">{euros(budget.labor)}</td></tr></tfoot></table></div>
      <div className="pdvc-table-scroll mt-8"><table className="pdvc-table"><caption>Frais externes — ouverture et trois premiers mois</caption><thead><tr><th>Poste et hypothèse</th><th>Quantité</th><th>Prix unitaire</th><th>Total HT</th></tr></thead><tbody>{budget.expenseRows.map(row => <tr key={row.id}><th scope="row">{row.title}<small>{row.note}</small></th><td>{['images', 'search'].includes(row.id) ? <input className="pdvc-price-input num" type="number" aria-label={`Volume : ${row.title}`} min={0} max={100000} step={100} value={row.quantity} onChange={event => { const value = Number(event.target.value); if (Number.isInteger(value) && value >= 0 && value <= 100000) (row.id === 'images' ? setImages : setSearches)(value) }} /> : <span className="num">{row.quantity}</span>}<small>{row.unit}</small></td><td className="num">{euros(row.price)}</td><td className="num">{euros(row.total)}</td></tr>)}</tbody><tfoot><tr><th colSpan={3}>Total frais externes</th><td className="num">{euros(budget.external)}</td></tr></tfoot></table></div>
      <div className="pdvc-budget-total">
        <dl>
          <div><dt>Prestations + frais</dt><dd className="num">{euros(budget.subtotal)}</dd></div>
          <div><dt><label htmlFor="pdvc-reserve">Réserve <input id="pdvc-reserve" type="number" min={0} max={40} step={1} value={reserve} onChange={event => { const value = Number(event.target.value); if (Number.isFinite(value) && value >= 0 && value <= 40) setReserve(value) }} /> %</label><small>Sur le sous-total, prestations et frais compris.</small></dt><dd className="num">{euros(budget.reserve)}</dd></div>
          <div className="pdvc-grand-total"><dt>Total proposé HT</dt><dd className="num">{euros(budget.total)}</dd></div>
          <div><dt>Plafond du client</dt><dd className="num">{euros(data.ceiling)}</dd></div>
          <div className={budget.total > data.ceiling ? 'pdvc-danger' : ''}><dt>{budget.total > data.ceiling ? 'Dépassement' : 'Reste sous le plafond'}</dt><dd className="num">{euros(Math.abs(data.ceiling - budget.total))}</dd></div>
        </dl>
        <div className="pdvc-prose"><ReactMarkdown>{data.copy.coverage}</ReactMarkdown><button type="button" className="btn pdvc-no-print" onClick={exportBudget}><Download size={16} aria-hidden="true" />Exporter ce budget</button></div>
      </div>
      <div className="pdvc-prose">
        <ReactMarkdown>{data.copy.aftercare}</ReactMarkdown>
        <ReactMarkdown>{data.copy.clientWork}</ReactMarkdown>
        <ReactMarkdown>{data.copy.shipping}</ReactMarkdown>
        <p>Avec les tarifs de référence, l’option ajoute <strong>{euros(projectBudget(buildScenario(data.tasks, data.option, {}, true), data.rates, [...data.expenses, data.optionExpense], data.reserve).total - baseBudget.total)} HT</strong>, réserve comprise. La bonne réponse peut être de la reporter, d’obtenir une enveloppe supplémentaire ou de retirer une fonction après accord. Réduire les contrôles de restitution pour tenir le prix n’est pas un arbitrage acceptable.</p>
      </div>
      <a href="#correction-entretien" hidden={part !== 'both'} className="pdvc-text-link pdvc-no-print">Revenir aux engagements pris avec le client <ArrowRight size={16} aria-hidden="true" /></a>
    </section>
  </div>
}
