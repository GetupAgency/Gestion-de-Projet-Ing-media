# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Étudiants de l'UFR Ingémedia (Université de Toulon), niveau Licence/Master, 20-23 ans, en formation à la gestion de projet web/numérique. Situation principale (confirmée) : le cours est projeté en salle par l'enseignant pendant que les étudiants suivent sur leur laptop ; ils refont ensuite les quiz et lisent les modules seuls, sur laptop et parfois sur téléphone. Audience secondaire : l'enseignant (Adrien Cerdan), qui projette, anime les jeux par équipe, consulte les scores et accède aux corrections via un mode enseignant protégé par mot de passe.

## Product Purpose

Support de cours interactif : 11 modules (cadrage, cahier des charges, planning, budget, conception, développement, tests/recette, mise en production, suivi, gestion de crise, mission finale), quiz par section et quiz global, cas pratiques avec correction réservée à l'enseignant, mission cahier des charges, préparation des oraux, lexique, compétences, jeux par équipe avec scores synchronisés. Succès = les étudiants comprennent et retiennent le métier de chef de projet, s'entraînent activement, et arrivent préparés à l'oral et à la mission.

## Positioning

Pas un LMS générique : un cours d'agence web incarné, écrit par un praticien, avec des situations réalistes (client qui change d'avis, budget coupé, dev qui démissionne), des jeux d'équipe en salle et une progression visible. La valeur est dans le réalisme métier et l'interactivité en classe.

## Operating Context

- Projection en salle (grand écran, distance de lecture élevée, lumière ambiante variable) : la lisibilité à distance et le scan rapide priment.
- Laptop étudiant en parallèle du cours, puis révisions à la maison ; mobile occasionnel.
- Sessions de TD avec équipes, mini-jeux, tableau de scores live (Supabase).
- Contenu pédagogique rédigé en HTML dans des fichiers TypeScript (`data/*.ts`), rendu tel quel dans la page module.

## Capabilities and Constraints

- Next.js 14 App Router, React 18, TypeScript, Tailwind, lucide-react, Supabase (clé anon publique).
- Progression et scores quiz stockés en localStorage ; scores d'équipe synchronisés via Supabase.
- Mode enseignant : mot de passe vérifié contre Supabase, état en localStorage ; les corrections des cas pratiques sont masquées aux étudiants. Ce mécanisme et ce verrouillage doivent être préservés (confirmé).
- Le reste de la structure (pages, navigation, regroupements) peut être restructuré librement tant que les fonctions restent (confirmé).
- Langue : français uniquement.

## Brand Commitments

- Le logo Ingémedia (`public/logo-ingemedia.png`) doit rester présent dans l'en-tête (confirmé).
- Les couleurs actuelles (bleu #1F3463, cyan #009AD4) ne sont PAS contraignantes : la palette est libre (confirmé).
- Brief visuel de l'utilisateur, contraignant : « propre, carré, pas vu et revu ». Ton du cours : direct, praticien, avec humour léger (ex. message d'erreur du mode enseignant).
- Crédit auteur en pied de page : Adrien Cerdan (lien LinkedIn existant).

## Evidence on Hand

- ~10 500 mots de contenu théorique, 23 sections, cas pratiques et corrections, environ 330 questions de quiz (une centaine en contrôle de poste, le reste en banques du quiz global), projets de mission, guide des oraux : tout est réel et réutilisable.
- Aucun témoignage, aucune statistique d'usage, aucune image de cours : ne rien inventer de ce type.

## Product Principles

1. Le métier avant la théorie : chaque concept est ancré dans une situation d'agence réaliste.
2. Lisible de loin, manipulable de près : projection et laptop sont servis par la même page.
3. Apprendre en faisant : chaque section propose au moins une manipulation (quiz, tri, arbitrage, simulation).
4. Le sérieux sans l'ennui : les parties réglementaires (RGPD, RGAA, normes) sont condensées, jamais creusées.
5. La progression est visible et honnête : l'étudiant sait toujours où il en est.

## Accessibility & Inclusion

Pas d'exigence réglementaire établie pour l'app elle-même ; viser un contraste ≥ 4.5:1, navigation clavier et cibles tactiles ≥ 44px comme plancher.
