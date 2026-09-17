// Offre commerciale modèle pour RoadTrip Squad
// Document de référence à projeter en débrief, en miroir des décisions du J1.

export interface OfferProfile {
  code: string
  name: string
  role: string
  tjm: number
  jh: number
  occupation: number // pourcentage moyen sur la durée projet
}

export interface OfferPhase {
  id: string
  label: string
  weeks: string
  jh: number
  cost: number
  scope: string
}

export interface PaymentMilestone {
  label: string
  share: number // pourcentage
  amount: number
  trigger: string
}

export const offerProfiles: OfferProfile[] = [
  { code: 'DP', name: 'Directeur de projet', role: 'Sponsor agence, sécurisation client', tjm: 800, jh: 6, occupation: 6 },
  { code: 'CP', name: 'Chef de projet', role: 'Pilote opérationnel, rituels, suivi', tjm: 580, jh: 21, occupation: 22 },
  { code: 'LT', name: 'Lead tech', role: 'Garant architecture, code review, tech debt', tjm: 680, jh: 31, occupation: 33 },
  { code: 'DM', name: 'Dev mobile senior', role: 'React Native, intégration API, tests', tjm: 580, jh: 54, occupation: 57 },
  { code: 'DB', name: 'Dev back confirmé', role: 'Node + PostgreSQL, API REST, sécurité', tjm: 480, jh: 37, occupation: 39 },
  { code: 'UX', name: 'UX/UI designer', role: 'Wireframes, design system, maquettes Figma', tjm: 520, jh: 47, occupation: 49 },
  { code: 'QA', name: 'Ingénieur QA', role: 'Plan de tests, recette, anomalies', tjm: 480, jh: 11, occupation: 12 },
  { code: 'OPS', name: 'DevOps', role: 'Infra, CI/CD, monitoring', tjm: 680, jh: 14, occupation: 15 },
]

export const offerPhases: OfferPhase[] = [
  { id: 'P1', label: 'Cadrage & conception', weeks: 'S1 → S3', jh: 31, cost: 17220, scope: 'Ateliers, spec V1, architecture, choix tech.' },
  { id: 'P2', label: 'Design system & UI', weeks: 'S2 → S7', jh: 34, cost: 17680, scope: 'Wireframes, DA, design system, maquettes V1, validation.' },
  { id: 'P3', label: 'Développement back', weeks: 'S4 → S17', jh: 47, cost: 26960, scope: 'Infra, modèle de données, API, sécurité, RGPD.' },
  { id: 'P4', label: 'Développement mobile', weeks: 'S5 → S18', jh: 56, cost: 33820, scope: 'Setup RN, modules fonctionnels, hors-ligne basique.' },
  { id: 'P5', label: 'Recette & QA', weeks: 'S13 → S18', jh: 24, cost: 12300, scope: 'Plan de tests, recette par module, perfo, RGPD.' },
  { id: 'P6', label: 'Bêta fermée', weeks: 'S15 → S18', jh: 17, cost: 9800, scope: 'Recrutement, distribution stores, collecte feedbacks, corrections.' },
  { id: 'P7', label: 'Mise en production & lancement', weeks: 'S19 → S20', jh: 12, cost: 8600, scope: 'Soumissions stores, communication, événement Annecy.' },
]

export const paymentSchedule: PaymentMilestone[] = [
  { label: 'À la signature', share: 30, amount: 37914, trigger: 'Bon de commande signé, kick-off planifié' },
  { label: 'Validation maquettes (M3)', share: 25, amount: 31595, trigger: 'Maquettes Figma validées, design system gelé' },
  { label: 'Fin développement mobile (M5)', share: 25, amount: 31595, trigger: 'Builds gold candidate iOS + Android' },
  { label: 'Mise en production publique (M7)', share: 20, amount: 25276, trigger: 'Apps publiées sur les stores' },
]

export const offerMeta = {
  agency: {
    name: 'Studio Boréal',
    tagline: 'Studio digital pour produits qui aiment la route.',
    siret: 'FR · 89732145600028',
    address: '14 quai Perrache, 69002 Lyon',
    contact: 'commerce@studio-boreal.fr · +33 4 78 00 00 00',
  },
  client: {
    name: 'Atelier Vasseur Voyages',
    contact: 'Gaspard Vasseur, fondateur',
    address: 'Annecy, France',
  },
  reference: {
    quoteId: 'SBO-2026-RTS-V1',
    issued: '15 juin 2026',
    validity: '15 juillet 2026 (30 jours)',
  },
  totals: {
    jh: 221,
    cost: 126380,
    tva: 0.2,
  },
  durations: {
    weeks: 19,
    workingDays: 95,
    start: '1er juin 2026',
    productionLive: '14 octobre 2026',
    publicLaunch: '15 octobre 2026 · événement Annecy',
  },
}
