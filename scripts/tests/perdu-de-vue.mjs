import test from 'node:test'
import assert from 'node:assert/strict'
import { perduDeVueCorrection as data } from '../../lib/perduDeVue/server.ts'
import { buildScenario, projectBudget, scheduleProject, workdayDate } from '../../lib/perduDeVue/calculations.ts'

const scenario = (durations = {}, shipping = false) => buildScenario(data.tasks, data.option, durations, shipping)
const budget = (tasks = data.tasks, expenses = data.expenses) => projectBudget(tasks, data.rates, expenses, data.reserve)

test('La référence relie les huit étapes, la publication, le suivi et le devis', () => {
  const schedule = scheduleProject(scenario(), 40, 'publication')
  const total = budget()
  assert.equal(schedule.ready, 33)
  assert.equal(schedule.publication, 40)
  assert.equal(schedule.finish, 46)
  assert.equal(schedule.margin, 7)
  assert.equal(total.totalDays, 38.5)
  assert.equal(total.labor, 21987.5)
  assert.equal(total.external, 428)
  assert.equal(total.reserve, 3362.33)
  assert.equal(total.total, 25777.83)
  for (const task of schedule.tasks) for (const dependency of task.after) {
    assert.ok(task.start >= schedule.tasks.find(t => t.id === dependency).end)
  }
})

test('Une attente client décale les dépendances sans ajouter de prestation', () => {
  const tasks = scenario({ validation: 5 })
  assert.equal(scheduleProject(tasks, 40, 'publication').ready, 36)
  assert.equal(budget(tasks).total, budget().total)
})

test('L’envoi ajoute du travail, des frais et consomme la marge', () => {
  const tasks = scenario({}, true)
  assert.equal(scheduleProject(tasks, 40, 'publication').ready, 40)
  assert.equal(budget(tasks, [...data.expenses, data.optionExpense]).total, 30694.08)
  assert.equal(scheduleProject(scenario({ validation: 5 }, true), 40, 'publication').margin, -3)
  assert.equal(scheduleProject(scenario(), 30, 'publication').margin, -3)
})

test('Les jalons couvrent toutes les étapes et arrivent après leurs grandes tâches', () => {
  const schedule = scheduleProject(scenario(), 40, 'publication')
  assert.deepEqual(data.phases.map(phase => phase.id), ['kickoff', 'prototype', 'maquettes', 'developpement', 'tests-v1', 'preprod', 'publication', 'suivi'])
  for (const phase of data.phases) {
    const tasks = schedule.tasks.filter(task => task.phase === phase.id)
    assert.ok(tasks.length > 0)
    const milestone = Math.max(...phase.milestone.after.map(id => schedule.tasks.find(task => task.id === id).end))
    assert.ok(tasks.every(task => task.end <= milestone))
    assert.ok(phase.milestone.criteria && phase.milestone.validator)
  }
  assert.ok(data.tasks.every(task => data.phases.some(phase => phase.id === task.phase)))
})

test('La date cible garde la marge avant publication et le suivi suit la date réelle', () => {
  const normal = scheduleProject(scenario(), 40, 'publication')
  const delayed = scheduleProject(scenario({ validation: 5 }, true), 40, 'publication')
  assert.equal(normal.tasks.find(task => task.id === 'publication').start, 39)
  assert.equal(normal.tasks.find(task => task.id === 'suivi').start, 40)
  assert.equal(delayed.publication, 43)
  assert.equal(delayed.finish, 49)
  assert.equal(delayed.tasks.find(task => task.id === 'suivi').start, 43)
  const short = scheduleProject(scenario(), 30, 'publication')
  assert.equal(short.publication, 33)
  const later = scheduleProject(scenario(), 50, 'publication')
  assert.equal(later.margin, 17)
  assert.equal(later.finish, 56)
  assert.throws(() => scheduleProject(scenario(), 40, 'absente'), /publication manquante/)
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

// Les contrôles métier de la démonstration sont indépendants de son habillage.
const { changeClaim, findDemoObjects, isSensitiveSearch, objectUnavailable } = await import('../../lib/perduDeVue/prototype.ts')
const search = { description: 'Mes écouteurs blancs', category: 'all', place: 'all', from: '', to: '' }
const claim = (id = 'D-001', objectId = data.objects[0].id) => ({ id, objectId, description: search.description, proof: 'Une étoile bleue', email: 'test@example.test', status: 'pending', message: '', history: [] })

test('Les filtres de type, de lieu et de date se combinent sans publier les objets sensibles', () => {
  assert.equal(findDemoObjects(data.objects, [], search, false).length, 2)
  assert.equal(findDemoObjects(data.objects, [], { ...search, place: 'tram' }, false).length, 1)
  assert.equal(findDemoObjects(data.objects, [], { ...search, from: '2026-10-07' }, false).length, 1)
  assert.equal(findDemoObjects(data.objects, [], { ...search, to: '2026-10-05' }, false).length, 0)
  assert.equal(findDemoObjects(data.objects, [], { ...search, description: 'Un chapeau vert' }, false).length, 0)
  const manual = findDemoObjects(data.objects, [], { ...search, description: '' }, true)
  assert.equal(manual.length, 3)
  assert.ok(manual.every(object => object.category !== 'sensitive'))
  assert.equal(isSensitiveSearch({ ...search, description: 'Mon passeport' }), true)
  assert.equal(findDemoObjects(data.objects, [], { ...search, category: 'sensitive' }, true).length, 0)
})

test('Une précision complète les indices, garde l’historique et revient à l’examen', () => {
  const initial = [claim()]
  assert.throws(() => changeClaim(initial, data.objects, 'D-001', 'information', ''))
  const requested = changeClaim(initial, data.objects, 'D-001', 'information', 'Quel dessin se trouve dans le couvercle ?')
  const answered = changeClaim(requested, data.objects, 'D-001', 'pending', 'Une étoile bleue dans le couvercle.')
  assert.equal(answered[0].status, 'pending')
  assert.match(answered[0].proof, /Précision : Une étoile bleue/)
  assert.equal(answered[0].history.length, 2)
  assert.equal(initial[0].history.length, 0)
  assert.throws(() => changeClaim(initial, data.objects, 'D-001', 'pending', 'Précision hors étape'))
})

test('Autorisation et remise exigent deux contrôles ; un objet ne peut être attribué deux fois', () => {
  const initial = [claim(), claim('D-002')]
  assert.throws(() => changeClaim(initial, data.objects, 'D-001', 'approved', '', false))
  assert.throws(() => changeClaim(initial, data.objects, 'D-001', 'returned', '', true))
  const approved = changeClaim(initial, data.objects, 'D-001', 'approved', '', true)
  assert.equal(objectUnavailable(approved, data.objects[0].id), true)
  assert.equal(findDemoObjects(data.objects, approved, search, false).length, 1)
  assert.throws(() => changeClaim(approved, data.objects, 'D-002', 'approved', '', true))
  assert.throws(() => changeClaim(approved, data.objects, 'D-001', 'returned', '', false))
  const returned = changeClaim(approved, data.objects, 'D-001', 'returned', '', true)
  assert.equal(returned[0].status, 'returned')
  assert.throws(() => changeClaim(returned, data.objects, 'D-001', 'returned', '', true))
  assert.throws(() => changeClaim([claim('D-003', null)], data.objects, 'D-003', 'approved', '', true))
  assert.throws(() => changeClaim([claim('D-004', data.objects.find(object => object.category === 'sensitive').id)], data.objects, 'D-004', 'approved', '', true))
})

test('Un refus expliqué clôt la demande en laissant l’objet disponible', () => {
  const refused = changeClaim([claim()], data.objects, 'D-001', 'rejected', 'Les indices ne correspondent pas à cette fiche.')
  assert.equal(refused[0].status, 'rejected')
  assert.equal(objectUnavailable(refused, data.objects[0].id), false)
  assert.throws(() => changeClaim(refused, data.objects, 'D-001', 'approved', '', true))
})
