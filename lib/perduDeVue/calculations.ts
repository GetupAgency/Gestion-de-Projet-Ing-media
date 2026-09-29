import type { Expense, ProjectTask, Rates, RoleId, ScheduledTask } from './types'

export const roleNames: Record<RoleId, string> = {
  cp: 'Gestion de projet', design: 'Conception des écrans', dev: 'Développement', ia: 'Préparation et réglage de l’IA', qa: 'Tests',
}

export const euros = (amount: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 }).format(amount)
export const decimal = (amount: number) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 }).format(amount)
const money = (amount: number) => Math.round((amount + Number.EPSILON) * 100) / 100

export function scheduleProject(tasks: ProjectTask[], deadline: number): { tasks: ScheduledTask[]; ready: number; margin: number } {
  if (!Number.isFinite(deadline) || deadline <= 0) throw new Error('Date cible invalide')
  const byId = new Map(tasks.map(task => [task.id, task]))
  if (byId.size !== tasks.length) throw new Error('Identifiants de tâches dupliqués')
  const planned = new Map<string, ScheduledTask>()
  const visiting = new Set<string>()
  const ordered: ScheduledTask[] = []
  function visit(id: string): ScheduledTask {
    if (visiting.has(id)) throw new Error('Dépendance circulaire')
    const existing = planned.get(id)
    if (existing) return existing
    const task = byId.get(id)
    if (!task) throw new Error(`Tâche manquante : ${id}`)
    if (!Number.isFinite(task.duration) || task.duration <= 0) throw new Error('Durée invalide')
    visiting.add(id)
    const start = Math.max(0, ...task.after.map(parent => visit(parent).end))
    const result = { ...task, start, end: start + task.duration, latestStart: 0, slack: 0, driving: false }
    visiting.delete(id)
    planned.set(id, result)
    ordered.push(result)
    return result
  }
  tasks.forEach(task => visit(task.id))
  for (const task of [...ordered].reverse()) {
    const successors = ordered.filter(next => next.after.includes(task.id))
    const latestEnd = successors.length ? Math.min(...successors.map(next => next.latestStart)) : deadline
    task.latestStart = latestEnd - task.duration
    task.slack = task.latestStart - task.start
  }
  const ready = Math.max(0, ...ordered.map(task => task.end))
  const margin = deadline - ready
  ordered.forEach(task => { task.driving = task.slack === margin })
  return { tasks: tasks.map(task => planned.get(task.id)!), ready, margin }
}

export function projectBudget(tasks: ProjectTask[], rates: Rates, expenses: Expense[], reservePercent: number) {
  if (!Number.isFinite(reservePercent) || reservePercent < 0) throw new Error('Réserve invalide')
  const days = { cp: 0, design: 0, dev: 0, ia: 0, qa: 0 }
  for (const task of tasks) for (const [key, value] of Object.entries(task.charges)) {
    if (!Number.isFinite(value) || value < 0 || !Object.hasOwn(days, key)) throw new Error('Charge invalide')
    days[key as RoleId] += value
  }
  const profiles = (Object.keys(days) as RoleId[]).map(id => {
    if (!Number.isFinite(rates[id]) || rates[id] < 0) throw new Error('Tarif invalide')
    return { id, days: days[id], rate: rates[id], total: money(days[id] * rates[id]) }
  })
  const labor = money(profiles.reduce((sum, row) => sum + row.total, 0))
  const expenseRows = expenses.map(row => {
    if (![row.quantity, row.price].every(value => Number.isFinite(value) && value >= 0)) throw new Error('Frais invalides')
    return { ...row, total: money(row.quantity * row.price) }
  })
  const external = money(expenseRows.reduce((sum, row) => sum + row.total, 0))
  const subtotal = money(labor + external)
  const reserve = money(subtotal * reservePercent / 100)
  return { profiles, expenseRows, totalDays: Object.values(days).reduce((a, b) => a + b, 0), labor, external, subtotal, reserve, total: money(subtotal + reserve) }
}

export function buildScenario(base: ProjectTask[], option: ProjectTask, durations: Record<string, number>, shipping: boolean) {
  const tasks = base.map(task => ({ ...task, after: [...task.after], charges: { ...task.charges }, duration: durations[task.id] ?? task.duration }))
  if (shipping) {
    const index = tasks.findIndex(task => task.id === 'integration')
    tasks.splice(index, 0, { ...option, duration: durations[option.id] ?? option.duration, after: [...option.after], charges: { ...option.charges } })
    tasks[index + 1].after = [option.id]
  }
  return tasks
}

/** Offset 0 = premier jour ouvré, dates UTC pour éviter les décalages horaires. */
export function workdayDate(start: string, offset: number): string {
  const date = new Date(`${start}T12:00:00Z`)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(start) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== start || !Number.isInteger(offset) || offset < 0) throw new Error('Date ou décalage invalide')
  while ([0, 6].includes(date.getUTCDay())) date.setUTCDate(date.getUTCDate() + 1)
  let remaining = offset
  while (remaining > 0) {
    date.setUTCDate(date.getUTCDate() + 1)
    if (![0, 6].includes(date.getUTCDay())) remaining--
  }
  return date.toISOString().slice(0, 10)
}

export function frenchDate(iso: string) {
  return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', timeZone: 'UTC' }).format(new Date(`${iso}T12:00:00Z`))
}
