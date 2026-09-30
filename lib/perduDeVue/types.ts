export type RoleId = 'cp' | 'design' | 'dev' | 'ia' | 'qa'
export type Rates = Record<RoleId, number>
export type Charges = Partial<Record<RoleId, number>>
export type PhaseId = 'kickoff' | 'prototype' | 'maquettes' | 'developpement' | 'tests-v1' | 'preprod' | 'publication' | 'suivi'
export interface ProjectPhase {
  id: PhaseId
  title: string
  color: 'cadrage' | 'conception' | 'realisation' | 'verification' | 'service'
  question: string
  milestone: { title: string; after: string[]; criteria: string; validator: string }
}
export interface ProjectTask {
  id: string
  phase: PhaseId
  title: string
  owner: string
  duration: number
  after: string[]
  charges: Charges
  deliverable: string
}
export interface ScheduledTask extends ProjectTask {
  start: number
  end: number
  latestStart: number
  slack: number
  driving: boolean
}
export interface Expense {
  id: string
  title: string
  quantity: number
  unit: string
  price: number
  note: string
}
export interface DemoObject {
  id: string
  category: 'audio' | 'bag' | 'keys' | 'sensitive'
  title: string
  place: string
  date: string
  foundOn: string
  transport: 'bus' | 'tram' | 'central'
  publicDescription: string
  privateDescription: string
  storage: string
}
export interface PromptGuide { title: string; guidance: string; text: string }
export interface CorrectionDossier {
  client: { name: string; role: string; posture: string; opening: string }
  interview: { question: string; answer: string; decision: string }[]
  analysis: string
  intention: string
  scope: { feature: string; choice: string; reason: string }[]
  tasks: ProjectTask[]
  phases: ProjectPhase[]
  copy: Record<'outcome' | 'planning' | 'coverage' | 'aftercare' | 'clientWork' | 'shipping', string>
  optionExpense: Expense
  option: ProjectTask
  rates: Rates
  expenses: Expense[]
  ceiling: number
  reserve: number
  objects: DemoObject[]
  screenFlows: { title: string; description: string; source: string }[]
  demoGuide: string
  tests: { action: string; expected: string }[]
  risks: { risk: string; action: string; owner: string }[]
  prompts: PromptGuide[]
  rubric: { title: string; points: number; detail: string }[]
}
