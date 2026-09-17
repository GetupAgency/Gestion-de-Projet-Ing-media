import type { ComponentType } from 'react'
import PhaseTimeline from './PhaseTimeline'
import PhaseOrder from './PhaseOrder'
import QcdTriangle from './QcdTriangle'
import DevisExpress from './DevisExpress'
import MoscowSimulator from './MoscowSimulator'
import RiskMatrix from './RiskMatrix'
import TestPyramid from './TestPyramid'
import BrooksCalculator from './BrooksCalculator'
import PertCalculator from './PertCalculator'
import ClientMail from './ClientMail'
import CdcErrors from './CdcErrors'
import ScopeCreep from './ScopeCreep'
import RecetteTriage from './RecetteTriage'
import KickoffQuestions from './KickoffQuestions'
import StackChooser from './StackChooser'
import LaunchDay from './LaunchDay'
import BilanLessons from './BilanLessons'
import Eisenhower from './Eisenhower'
import MailPresident from './MailPresident'
import CompteRendu from './CompteRendu'
import DatasetAnalytics from './DatasetAnalytics'
import SlackDeborde from './SlackDeborde'
import DevisMystere from './DevisMystere'
import TrelloDesordre from './TrelloDesordre'
import PostMortemDiscord from './PostMortemDiscord'
import MiniAppelOffres from './MiniAppelOffres'

/**
 * Ateliers interactifs par section. Le HTML des sections ne peut pas embarquer
 * de React : la page module lit ce registre et rend les composants après le contenu.
 */
interface Placement {
  before?: ComponentType[]
  after?: ComponentType[]
}

const registry: Record<string, Placement> = {
  'definition-projet': { after: [PhaseOrder, PhaseTimeline] },
  cdc: { after: [MailPresident, CdcErrors] },
  cartographie: { after: [DatasetAnalytics] },
  cibles: { after: [KickoffQuestions] },
  planning: { after: [QcdTriangle, PertCalculator, ScopeCreep] },
  outils: { after: [CompteRendu, TrelloDesordre, Eisenhower] },
  budget: { after: [DevisExpress, DevisMystere] },
  technologies: { after: [StackChooser] },
  cms: { after: [StackChooser] },
  'tests-equipe': { after: [TestPyramid] },
  recette: { after: [RecetteTriage] },
  deploiement: { after: [LaunchDay] },
  bilan: { after: [BilanLessons, PostMortemDiscord] },
  'vision-ensemble': { before: [PhaseTimeline] },
  'crisis-intro': { after: [RiskMatrix] },
  'crisis-budget': { after: [MoscowSimulator] },
  'crisis-planning': { after: [BrooksCalculator] },
  'crisis-communication': { after: [ClientMail, SlackDeborde] },
  'intro-mission': { after: [MiniAppelOffres] },
}

export function getInteractives(sectionId: string): { before: ComponentType[]; after: ComponentType[] } {
  const p = registry[sectionId] ?? {}
  return { before: p.before ?? [], after: p.after ?? [] }
}

/** Catalogue des ateliers pour le terrain d'entraînement, par niveau. */
export interface LabEntry {
  id: string
  title: string
  level: 1 | 2 | 3
  artefact: string
  section: string
  module: string
  Component: ComponentType
}

export const labCatalog: LabEntry[] = [
  { id: 'mini-ao', title: 'Lire un règlement de consultation', level: 1, artefact: 'Règlement de consultation', section: 'intro-mission', module: 'mission-individuelle', Component: MiniAppelOffres },
  { id: 'mail-president', title: 'Le mail du président du BDE', level: 1, artefact: 'E-mail', section: 'cdc', module: 'lancement', Component: MailPresident },
  { id: 'phase-order', title: 'Les 7 phases dans le bon ordre', level: 1, artefact: 'Cartes', section: 'definition-projet', module: 'intro', Component: PhaseOrder },
  { id: 'kickoff', title: '« Un Uber pour les chiens » : les bonnes questions', level: 1, artefact: 'Brief oral', section: 'cibles', module: 'lancement', Component: KickoffQuestions },
  { id: 'stack', title: 'Quelle stack pour ce brief ?', level: 1, artefact: 'Briefs', section: 'technologies', module: 'developpement', Component: StackChooser },
  { id: 'cdc-errors', title: 'Les 5 erreurs du cahier des charges', level: 2, artefact: 'Cahier des charges', section: 'cdc', module: 'lancement', Component: CdcErrors },
  { id: 'analytics', title: 'Le club de boxe et son export Analytics', level: 2, artefact: 'Dataset GA4', section: 'cartographie', module: 'lancement', Component: DatasetAnalytics },
  { id: 'compte-rendu', title: 'Le compte rendu sans qui ni quand', level: 2, artefact: 'Compte rendu', section: 'outils', module: 'planification', Component: CompteRendu },
  { id: 'trello', title: 'Remettre le Trello d’aplomb', level: 2, artefact: 'Tableau Trello', section: 'outils', module: 'planification', Component: TrelloDesordre },
  { id: 'devis-mystere', title: 'Le devis à 19 600 € de l’app playlist', level: 2, artefact: 'Devis', section: 'budget', module: 'planification', Component: DevisMystere },
  { id: 'devis', title: 'Devis express, comparé à un senior', level: 2, artefact: 'Curseurs', section: 'budget', module: 'planification', Component: DevisExpress },
  { id: 'qcd', title: 'Le triangle qualité · coût · délai', level: 2, artefact: 'Curseurs', section: 'planning', module: 'planification', Component: QcdTriangle },
  { id: 'pert', title: 'PERT : trois chiffres valent mieux qu’un', level: 2, artefact: 'Estimations', section: 'planning', module: 'planification', Component: PertCalculator },
  { id: 'eisenhower', title: 'Lundi 9 h : huit choses à faire', level: 2, artefact: 'Post-its', section: 'outils', module: 'planification', Component: Eisenhower },
  { id: 'recette', title: 'Dix retours de recette, un go / no-go', level: 2, artefact: 'Tickets', section: 'recette', module: 'test', Component: RecetteTriage },
  { id: 'pyramide', title: 'Combien de tests, à quel étage ?', level: 2, artefact: 'Curseurs', section: 'tests-equipe', module: 'test', Component: TestPyramid },
  { id: 'risques', title: 'Matrice probabilité × impact', level: 2, artefact: 'Cartes de risques', section: 'crisis-intro', module: 'gestion-crise', Component: RiskMatrix },
  { id: 'bilan', title: 'Bonne ou mauvaise leçon ?', level: 2, artefact: 'Bilan', section: 'bilan', module: 'suivi', Component: BilanLessons },
  { id: 'scope', title: 'Dire non au scope creep', level: 3, artefact: 'Appel client', section: 'planning', module: 'planification', Component: ScopeCreep },
  { id: 'slack', title: 'Lundi 9 h, le canal #projet déborde', level: 3, artefact: 'Fil Slack', section: 'crisis-communication', module: 'gestion-crise', Component: SlackDeborde },
  { id: 'mail-client', title: 'Le mail du client furieux', level: 3, artefact: 'E-mails', section: 'crisis-communication', module: 'gestion-crise', Component: ClientMail },
  { id: 'moscow', title: 'Budget coupé : que gardez-vous ?', level: 3, artefact: 'Backlog', section: 'crisis-budget', module: 'gestion-crise', Component: MoscowSimulator },
  { id: 'brooks', title: 'La loi de Brooks', level: 3, artefact: 'Équipe', section: 'crisis-planning', module: 'gestion-crise', Component: BrooksCalculator },
  { id: 'jour-j', title: 'Jour J : le site crash à 9 h 40', level: 3, artefact: 'Incident', section: 'deploiement', module: 'lancement-prod', Component: LaunchDay },
  { id: 'post-mortem', title: 'Post-mortem d’un projet de groupe', level: 3, artefact: 'Serveur Discord', section: 'bilan', module: 'suivi', Component: PostMortemDiscord },
  { id: 'frise', title: 'Les 7 phases, à l’échelle', level: 1, artefact: 'Frise', section: 'vision-ensemble', module: 'conclusion', Component: PhaseTimeline },
]
