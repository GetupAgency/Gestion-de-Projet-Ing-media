'use client'

import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { RotateCcw, Download, ArrowRight } from 'lucide-react'
import { buildScenario, decimal, euros, projectBudget, roleNames, scheduleProject } from '@/lib/perduDeVue/calculations'
import type { CorrectionDossier, RoleId } from '@/lib/perduDeVue/types'
import ProjectPlanning from './ProjectPlanning'

export default function PlanningBudget({ data, part = 'both' }: { data: CorrectionDossier; part?: 'both' | 'planning' | 'budget' }) {
  const [start, setStart] = useState('2026-10-05')
  const [weeks, setWeeks] = useState(8)
  const [durations, setDurations] = useState<Record<string, number>>({})
  const [shipping, setShipping] = useState(false)
  const [rates, setRates] = useState(data.rates)
  const [reserve, setReserve] = useState(data.reserve)
  const [images, setImages] = useState(data.expenses.find(row => row.id === 'images')!.quantity)
  const [searches, setSearches] = useState(data.expenses.find(row => row.id === 'search')!.quantity)

  const tasks = useMemo(() => buildScenario(data.tasks, data.option, durations, shipping), [data, durations, shipping])
  const schedule = useMemo(() => scheduleProject(tasks, weeks * 5, 'publication'), [tasks, weeks])
  const expenses = data.expenses.map(row => ({ ...row, quantity: row.id === 'images' ? images : row.id === 'search' ? searches : row.quantity }))
  if (shipping) expenses.push(data.optionExpense)
  const budget = projectBudget(tasks, rates, expenses, reserve)
  const baseBudget = projectBudget(data.tasks, data.rates, data.expenses, data.reserve)
  const changed = shipping || Object.keys(durations).length > 0 || weeks !== 8 || start !== '2026-10-05' || reserve !== data.reserve || images !== data.expenses.find(row => row.id === 'images')!.quantity || searches !== data.expenses.find(row => row.id === 'search')!.quantity || Object.keys(rates).some(key => rates[key as RoleId] !== data.rates[key as RoleId])

  function reset() {
    setStart('2026-10-05'); setWeeks(8); setDurations({}); setShipping(false)
    setRates(data.rates); setReserve(data.reserve); setImages(data.expenses.find(row => row.id === 'images')!.quantity); setSearches(data.expenses.find(row => row.id === 'search')!.quantity)
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

  const controls = <>
    <div className="pdvc-simulator-head">
      <div><strong>{changed ? 'Scénario modifié' : 'Scénario de référence'}</strong><p>Le planning et le budget utilisent les mêmes tâches.</p></div>
      <button type="button" className="btn pdvc-no-print" onClick={reset}><RotateCcw size={16} aria-hidden="true" />Revenir à la référence</button>
    </div>
    <div className="pdvc-scenarios pdvc-no-print">
      <label className="pdvc-check"><input type="checkbox" checked={(durations.validation ?? 2) === 5} onChange={event => setDurations(current => ({ ...current, validation: event.target.checked ? 5 : 2 }))} />Le client valide en 5 jours au lieu de 2</label>
      <label className="pdvc-check"><input type="checkbox" checked={shipping} onChange={event => setShipping(event.target.checked)} />Il ajoute l’envoi et le paiement</label>
    </div>
    <div className="pdvc-status-line" aria-live="polite">
      <span>Publication au plus tôt : <strong>J{schedule.ready}</strong></span>
      <span className={schedule.margin < 0 ? 'pdvc-danger' : ''}>{schedule.margin >= 0 ? 'Marge avant publication' : 'Retard de publication'} : <strong>{Math.abs(schedule.margin)} j</strong></span>
      <span>Publication prévue : <strong>J{schedule.publication}</strong> · fin du suivi : <strong>J{schedule.finish}</strong></span>
      <span>Total : <strong>{euros(budget.total)} HT</strong></span>
      {budget.total > data.ceiling && <span className="pdvc-danger">Dépassement : <strong>{euros(budget.total - data.ceiling)}</strong></span>}
    </div>

  </>

  return <div className="pdvc-plan-budget">
    {part === 'budget' && controls}
    <section id="correction-planning" className="pdvc-tool-section" hidden={part === 'budget'} aria-labelledby="planning-title">
      <ProjectPlanning data={data} tasks={tasks} schedule={schedule} start={start} weeks={weeks} setStart={setStart} setWeeks={setWeeks} setDuration={(id, value) => setDurations(current => ({ ...current, [id]: value }))} controls={controls} />
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
