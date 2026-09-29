import test from 'node:test'
import assert from 'node:assert/strict'
import { perduDeVueCorrection as data } from '../../lib/perduDeVue/server.ts'
import { buildScenario, projectBudget, scheduleProject, workdayDate } from '../../lib/perduDeVue/calculations.ts'

const scenario = (durations = {}, shipping = false) => buildScenario(data.tasks, data.option, durations, shipping)
const budget = (tasks = data.tasks, expenses = data.expenses) => projectBudget(tasks, data.rates, expenses, data.reserve)

test('La référence relie 37 jours de charge à 32 jours de calendrier et au devis', () => {
  const schedule = scheduleProject(scenario(), 40)
  const total = budget()
  assert.equal(schedule.ready, 32)
  assert.equal(schedule.margin, 8)
  assert.equal(total.totalDays, 37)
  assert.equal(total.labor, 21150)
  assert.equal(total.external, 428)
  assert.equal(total.reserve, 3236.7)
  assert.equal(total.total, 24814.7)
  for (const task of schedule.tasks) for (const dependency of task.after) {
    assert.ok(task.start >= schedule.tasks.find(t => t.id === dependency).end)
  }
})

test('Une attente client décale les dépendances sans ajouter de prestation', () => {
  const tasks = scenario({ validation: 5 })
  assert.equal(scheduleProject(tasks, 40).ready, 35)
  assert.equal(budget(tasks).total, budget().total)
})

test('L’envoi ajoute du travail, des frais et consomme la marge', () => {
  const tasks = scenario({}, true)
  assert.equal(scheduleProject(tasks, 40).ready, 39)
  assert.equal(budget(tasks, [...data.expenses, data.optionExpense]).total, 29730.95)
  assert.equal(scheduleProject(scenario({ validation: 5 }, true), 40).margin, -2)
  assert.equal(scheduleProject(scenario(), 30).margin, -2)
})

test('Les scénarios ne modifient pas les données de référence', () => {
  const before = JSON.stringify(data)
  const tasks = scenario({ validation: 5 }, true)
  tasks[0].after.push('autre')
  tasks[1].charges.cp = 99
  assert.equal(JSON.stringify(data), before)
})

test('Les jours ouvrés sautent les week-ends et refusent les dates invalides', () => {
  assert.equal(workdayDate('2026-10-05', 0), '2026-10-05')
  assert.equal(workdayDate('2026-10-05', 5), '2026-10-12')
  assert.equal(workdayDate('2026-10-03', 0), '2026-10-05')
  assert.equal(workdayDate('2026-10-05', 31), '2026-11-17')
  assert.throws(() => workdayDate('2026-02-30', 0))
  assert.throws(() => workdayDate('2026-10-05', -1))
})

test('Les graphes et budgets incohérents sont refusés', () => {
  const tasks = scenario()
  assert.throws(() => scheduleProject([...tasks, tasks[0]], 40), /dupliqués/)
  assert.throws(() => scheduleProject([{ ...tasks[0], after: ['absente'] }], 40), /manquante/)
  assert.throws(() => scheduleProject([{ ...tasks[0], after: [tasks[0].id] }], 40), /circulaire/)
  assert.throws(() => scheduleProject([{ ...tasks[0], duration: 0 }], 40), /Durée/)
  assert.throws(() => projectBudget(tasks, { ...data.rates, dev: NaN }, [], 15), /Tarif/)
  assert.throws(() => projectBudget(tasks, data.rates, [], -1), /Réserve/)
  assert.throws(() => projectBudget(tasks, data.rates, [{ ...data.expenses[0], price: -1 }], 15), /Frais/)
})
