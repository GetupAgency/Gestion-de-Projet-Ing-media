// Template RoadTrip Squad : corrigé complet pour la séance J2.
// Calé sur le Gantt et l'offre commerciale (mêmes jalons, mêmes profils,
// même découpage fonctionnel). À charger en mode enseignant pour projeter
// en débrief, après la production des étudiants.

import type { BoardState, Epic, Jalon, Story } from './storyMapping'

const j: Jalon[] = [
  { id: 'tpl-j1', label: 'M1', title: 'Kick-off projet',          date: 'S1 · 1er juin' },
  { id: 'tpl-j2', label: 'M2', title: 'Validation cadrage',       date: 'S3 · 19 juin' },
  { id: 'tpl-j3', label: 'M3', title: 'Validation maquettes V1',  date: 'S7 · 17 juillet' },
  { id: 'tpl-j4', label: 'M4', title: 'Fin développement back',   date: 'S17 · 25 septembre' },
  { id: 'tpl-j5', label: 'M5', title: 'Fin développement mobile', date: 'S18 · 2 octobre' },
  { id: 'tpl-j6', label: 'M6', title: 'Fin recette interne',      date: 'S18 · 2 octobre' },
  { id: 'tpl-j7', label: 'M7', title: 'Mise en production',       date: 'S19 · 14 octobre' },
  { id: 'tpl-j8', label: 'M8', title: 'Événement Annecy',         date: 'S20 · 15 octobre' },
]

const e: Epic[] = [
  { id: 'tpl-e1',  jalonId: 'tpl-j2', position: 0,  color: '#1F3463', title: 'Cadrage produit',          description: 'Aligner vision, scope V1 et architecture technique avant de démarrer le dev.' },
  { id: 'tpl-e2',  jalonId: 'tpl-j3', position: 0,  color: '#be185d', title: 'Design system & maquettes', description: 'Direction artistique, design system Figma, maquettes haute-fi de tous les écrans V1.' },
  { id: 'tpl-e3',  jalonId: 'tpl-j5', position: 0,  color: '#7c3aed', title: 'Authentification & profil', description: 'Création de compte, login Apple/Google, gestion du profil utilisateur.' },
  { id: 'tpl-e4',  jalonId: 'tpl-j5', position: 1,  color: '#0e7490', title: 'Squad & invitations',      description: 'Création de groupes d\'amis, invitations par lien partageable, gestion des membres.' },
  { id: 'tpl-e5',  jalonId: 'tpl-j5', position: 2,  color: '#047857', title: 'Création & gestion de trip', description: 'Trip avec dates, destination, photo de couverture, archivage.' },
  { id: 'tpl-e6',  jalonId: 'tpl-j5', position: 3,  color: '#b45309', title: 'Itinéraire & cartographie', description: 'MapLibre + tuiles OSM, étapes drag-drop, points d\'intérêt, mode hors-ligne basique.' },
  { id: 'tpl-e7',  jalonId: 'tpl-j5', position: 4,  color: '#4338ca', title: 'Vote & décisions',         description: 'Proposer une étape, voter pour ou contre, trancher en admin.' },
  { id: 'tpl-e8',  jalonId: 'tpl-j5', position: 5,  color: '#dc2626', title: 'Split des dépenses',       description: 'Saisie d\'une dépense, calcul des soldes, marquage des remboursements.' },
  { id: 'tpl-e9',  jalonId: 'tpl-j5', position: 6,  color: '#0369a1', title: 'Journal de bord',          description: 'Photo + texte court, timeline du trip, accès groupe uniquement.' },
  { id: 'tpl-e10', jalonId: 'tpl-j5', position: 7,  color: '#7c3aed', title: 'Notifications',            description: '3 events critiques en push : invitation, validation étape, dépense.' },
  { id: 'tpl-e11', jalonId: 'tpl-j6', position: 0,  color: '#be185d', title: 'Recette & sécurité',       description: 'Plan de tests, exécution par module, audit RGPD et OWASP.' },
  { id: 'tpl-e12', jalonId: 'tpl-j7', position: 0,  color: '#1F3463', title: 'Lancement public',         description: 'Fiches stores, soumission App Store + Play Store, mise en production publique.' },
]

// Helper pour créer une US sans répéter la structure 50 fois.
//
// IMPORTANT : on ne se base PAS sur stories[length-1] pour déduire si on
// change d'epic, parce que `stories.push(s(), s(), s())` évalue tous les
// arguments avant de pousser → toutes les positions se mettraient à 0 et
// les US s'écraseraient visuellement.
// On suit l'epic courant via une variable de module (lastEpicId).
let position = 0
let storyCounter = 1
let lastEpicId: string | null = null

const s = (
  epicId: string,
  title: string,
  description: string,
  profileCode: string,
  storyPoints: 1 | 2 | 3 | 5 | 8 | 13,
): Story => {
  if (lastEpicId !== epicId) {
    position = 0
    lastEpicId = epicId
  }
  const id = `tpl-s${storyCounter++}`
  const story: Story = {
    id,
    epicId,
    title,
    description,
    profileCode,
    storyPoints,
    statusId: 'todo',
    position: position++,
  }
  return story
}

const stories: Story[] = []

// resetPos n'est plus nécessaire (auto-détection via lastEpicId), mais on
// garde la fonction pour préserver les appels existants ci-dessous, et au
// cas où on voudrait forcer un reset.
const resetPos = () => { position = 0; lastEpicId = null }

// ---------- E1 · Cadrage produit ----------
resetPos()
stories.push(
  s('tpl-e1', 'Atelier vision produit', "En tant que PO, je veux un atelier d'alignement avec l'agence et le client, pour que tout le monde parte avec la même cible et les mêmes priorités.", 'CP', 3),
  s('tpl-e1', 'Personas et benchmark', "En tant que PO, je veux les personas et le benchmark des concurrents (Polarsteps, Wanderlog), pour justifier les choix de fonctionnalités.", 'UX', 3),
  s('tpl-e1', 'Spécifications fonctionnelles V1', "En tant que CP, je veux le périmètre V1 documenté en spec fonctionnelle, pour cadrer le scope avec le client avant le dev.", 'CP', 5),
  s('tpl-e1', 'Architecture technique', "En tant que LT, je veux l'architecture technique validée (stack, hébergement, sécurité), pour démarrer le dev sur des bases stables.", 'LT', 5),
)

// ---------- E2 · Design system & maquettes ----------
resetPos()
stories.push(
  s('tpl-e2', 'Direction artistique', "En tant que designer, je veux une DA validée par le client, pour avoir un cap clair avant de produire.", 'UX', 3),
  s('tpl-e2', 'Design system Figma', "En tant que designer, je veux un design system avec tokens et composants core, pour gagner en cohérence et en vitesse.", 'UX', 8),
  s('tpl-e2', 'Maquettes haute-fi V1', "En tant qu'utilisateur, je veux des maquettes haute-fidélité de tous les écrans clés, pour valider l'expérience avant le dev.", 'UX', 8),
  s('tpl-e2', 'Prototype navigable', "En tant que CP, je veux un prototype navigable Figma, pour que le client teste avant de signer le démarrage du dev.", 'UX', 3),
)

// ---------- E3 · Authentification & profil ----------
resetPos()
stories.push(
  s('tpl-e3', 'Inscription email + mot de passe', "En tant qu'utilisateur, je veux me créer un compte avec mon email et un mot de passe, pour démarrer rapidement sans dépendre d'un fournisseur tiers.", 'DM', 5),
  s('tpl-e3', 'Login Apple Sign-In', "En tant qu'utilisateur iOS, je veux me connecter avec Apple Sign-In, pour ne pas avoir à créer un nouveau mot de passe.", 'DM', 5),
  s('tpl-e3', 'Login Google Sign-In', "En tant qu'utilisateur Android, je veux me connecter avec Google Sign-In, pour aller plus vite à l'onboarding.", 'DM', 3),
  s('tpl-e3', 'Édition du profil', "En tant qu'utilisateur, je veux modifier mon profil (photo, prénom, ville), pour personnaliser mon compte.", 'DM', 3),
  s('tpl-e3', 'Déconnexion', "En tant qu'utilisateur, je veux pouvoir me déconnecter, pour fermer ma session sur un appareil partagé.", 'DM', 1),
)

// ---------- E4 · Squad & invitations ----------
resetPos()
stories.push(
  s('tpl-e4', 'Création d\'une squad', "En tant qu'utilisateur, je veux créer une squad pour rassembler mes amis voyageurs.", 'DM', 3),
  s('tpl-e4', 'Invitation par lien partageable', "En tant qu'utilisateur, je veux générer un lien d'invitation à partager via WhatsApp ou SMS, pour que mes amis rejoignent la squad sans créer un compte d'abord.", 'DB', 5),
  s('tpl-e4', 'Liste des membres', "En tant qu'utilisateur, je veux voir la liste des membres de ma squad, pour savoir qui est dedans.", 'DM', 2),
  s('tpl-e4', 'Retrait d\'un membre', "En tant qu'admin de la squad, je veux retirer un membre, pour gérer la composition si quelqu'un n'est plus du voyage.", 'DM', 3),
  s('tpl-e4', 'Quitter une squad', "En tant qu'utilisateur, je veux quitter une squad, pour ne plus en être membre.", 'DM', 2),
)

// ---------- E5 · Création & gestion de trip ----------
resetPos()
stories.push(
  s('tpl-e5', 'Création d\'un trip', "En tant qu'utilisateur, je veux créer un trip avec un nom, des dates et une destination cible, pour démarrer la planification.", 'DM', 5),
  s('tpl-e5', 'Liste des trips de la squad', "En tant qu'utilisateur, je veux voir tous les trips de ma squad (en cours et passés), pour naviguer dans l'historique.", 'DM', 2),
  s('tpl-e5', 'Photo de couverture', "En tant qu'utilisateur, je veux ajouter une photo de couverture à un trip, pour le rendre identifiable d'un coup d'œil.", 'DM', 3),
  s('tpl-e5', 'Archivage d\'un trip', "En tant qu'utilisateur, je veux archiver un trip terminé, pour qu'il sorte de la liste principale tout en restant consultable.", 'DM', 2),
)

// ---------- E6 · Itinéraire & cartographie ----------
resetPos()
stories.push(
  s('tpl-e6', 'Carte avec étapes', "En tant qu'utilisateur, je veux voir l'itinéraire de mon trip sur une carte (MapLibre + OSM), pour visualiser le parcours.", 'LT', 8),
  s('tpl-e6', 'Ajout d\'une étape sur la carte', "En tant qu'utilisateur, je veux ajouter une étape en tapant sur la carte, pour proposer rapidement un point d'intérêt.", 'DM', 5),
  s('tpl-e6', 'Réorganisation drag-drop', "En tant qu'utilisateur, je veux réordonner les étapes en drag-drop, pour ajuster l'itinéraire sans tout refaire.", 'DM', 5),
  s('tpl-e6', 'Recherche d\'un POI', "En tant qu'utilisateur, je veux rechercher un point d'intérêt par nom (ville, restaurant, monument), pour trouver rapidement.", 'DM', 5),
  s('tpl-e6', 'Mode hors-ligne basique', "En tant qu'utilisateur, je veux consulter l'itinéraire sans réseau (zone téléchargée à l'avance), pour ne pas être aveugle en montagne.", 'DM', 8),
  s('tpl-e6', 'Distances entre étapes', "En tant qu'utilisateur, je veux voir les distances et durées de trajet entre étapes, pour planifier mes journées.", 'DM', 3),
)

// ---------- E7 · Vote & décisions ----------
resetPos()
stories.push(
  s('tpl-e7', 'Proposer une étape', "En tant que membre de la squad, je veux proposer une étape à voter, pour faire entendre ma voix sans être chef.", 'DM', 3),
  s('tpl-e7', 'Voter pour ou contre', "En tant que membre, je veux voter pour ou contre une étape proposée, pour participer à la décision collective.", 'DB', 3),
  s('tpl-e7', 'Clôture du vote', "En tant qu'admin, je veux clôturer un vote et figer une étape (validée ou rejetée), pour avancer la planification.", 'DB', 3),
)

// ---------- E8 · Split des dépenses ----------
resetPos()
stories.push(
  s('tpl-e8', 'Saisie d\'une dépense', "En tant qu'utilisateur, je veux saisir une dépense (montant, qui paye, qui bénéficie), pour qu'elle soit prise en compte dans le solde.", 'DM', 5),
  s('tpl-e8', 'Solde global avec le groupe', "En tant qu'utilisateur, je veux voir mon solde net avec le groupe (qui me doit, à qui je dois), pour anticiper les remboursements.", 'DB', 5),
  s('tpl-e8', 'Historique des dépenses', "En tant qu'utilisateur, je veux voir l'historique chronologique des dépenses du trip, pour vérifier les saisies.", 'DM', 3),
  s('tpl-e8', 'Marquage d\'un remboursement', "En tant qu'utilisateur, je veux marquer un remboursement comme effectué (Lydia, Revolut, cash), pour que le solde se mette à jour.", 'DM', 3),
)

// ---------- E9 · Journal de bord ----------
resetPos()
stories.push(
  s('tpl-e9', 'Poster une photo + texte', "En tant qu'utilisateur, je veux poster une photo accompagnée d'un texte court dans le journal du trip, pour partager un moment.", 'DM', 5),
  s('tpl-e9', 'Timeline du journal', "En tant qu'utilisateur, je veux voir le journal du trip en timeline chronologique, pour revivre le voyage en lisant.", 'DM', 3),
  s('tpl-e9', 'Suppression d\'un post', "En tant qu'utilisateur, je veux supprimer un post si je l'ai créé, pour rectifier en cas d'erreur.", 'DB', 2),
)

// ---------- E10 · Notifications ----------
resetPos()
stories.push(
  s('tpl-e10', 'Push à l\'invitation dans une squad', "En tant qu'utilisateur, je veux recevoir une notification push quand je suis invité dans une squad, pour ne pas la rater.", 'DM', 5),
  s('tpl-e10', 'Push à la validation d\'une étape', "En tant que membre, je veux recevoir une push quand une étape est validée, pour suivre l'avancée du trip.", 'DM', 3),
  s('tpl-e10', 'Push à une dépense me concernant', "En tant qu'utilisateur, je veux recevoir une push quand une dépense me concerne, pour ne rien laisser passer.", 'DM', 3),
)

// ---------- E11 · Recette & sécurité ----------
resetPos()
stories.push(
  s('tpl-e11', 'Plan de tests fonctionnels', "En tant que QA, je veux un plan de tests couvrant les 50 cas prioritaires, pour structurer la recette interne.", 'QA', 3),
  s('tpl-e11', 'Exécution des tests par module', "En tant que QA, je veux exécuter les tests par module et tracer les anomalies, pour livrer une app stable.", 'QA', 8),
  s('tpl-e11', 'Audit RGPD et OWASP', "En tant que LT, je veux un audit RGPD (DPIA, registre) et une revue OWASP top 10, pour livrer en conformité avec les contraintes de Gaspard.", 'LT', 5),
)

// ---------- E12 · Lancement public ----------
resetPos()
stories.push(
  s('tpl-e12', 'Fiches stores FR / IT / ES', "En tant que CP, je veux les fiches stores prêtes (captures, descriptions FR/IT/ES, mots-clés), pour soumettre à l'App Store et Play Store.", 'CP', 3),
  s('tpl-e12', 'Soumission App Store + Play Store', "En tant que dev mobile, je veux soumettre l'app à l'App Store et au Play Store, pour passer les reviews avant l'événement.", 'DM', 3),
  s('tpl-e12', 'Mise en production publique', "En tant que LT, je veux la mise en production publique avec monitoring activé (Sentry + PostHog), pour détecter les incidents dès l'ouverture.", 'OPS', 3),
)

export function buildRoadTripSquadTemplate(teamName?: string): BoardState {
  return {
    teamName: teamName && teamName.trim() ? teamName : 'Studio Boréal',
    jalons: j,
    epics: e,
    stories,
  }
}

export const TEMPLATE_NAME = 'RoadTrip Squad — corrigé complet'
export const TEMPLATE_SUMMARY = `${j.length} jalons · ${e.length} epics · ${stories.length} user stories`
