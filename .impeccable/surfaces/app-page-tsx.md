---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/module/[id]/page.tsx","app/quiz/page.tsx","app/layout.tsx"]
---

# Surface brief : app de cours (accueil, modules, quiz, ressources)

Scope : toute l'app (accueil `app/page.tsx`, page module, quiz, lexique, compétences, évaluation, mission, oraux, pages enseignant). Mode : Read (les pages module) ; Operate pour l'accueil et les pages enseignant.
Audience : étudiants Ingémedia 20-23 ans, cours projeté + laptop, révisions à la maison ; enseignant en mode protégé.
Job : lire une section, faire le quiz, faire le cas pratique, reprendre où l'on s'est arrêté ; l'enseignant voit les corrections.
Contraintes : logo Ingémedia obligatoire en en-tête ; couleurs libres ; mode enseignant et corrections verrouillées préservés ; structure libre ; brief pinné « propre, carré, pas vu et revu ».
Moment mémorable : le tampon VALIDÉ qui s'imprime sur la ligne du module quand on le termine.

## Direction contract

THESIS: Le cours est un dossier d'agence : chaque module est une ligne numérotée d'un devis, chaque section un poste, la progression un total qui se cumule. Il refuse la grille de cartes icône + titre + texte, les dégradés et les coins arrondis.
OWN-WORLD: Papier blanc froid, encre noire, encre de tampon bleue. Feuillet jaune = exercice, feuillet rose = correction enseignant. Réglure hairline, angles vifs, aucune ombre douce. Archivo (titres, libellés en capitales espacées) + JetBrains Mono (chiffres tabulaires, champs). États = tampons inclinés, lignes barrées, perforations, jamais une pastille.
STORY: L'étudiant ouvre son dossier, voit ce qui est validé et en cours, reprend où il s'est arrêté, remplit ses postes, repart avec son total.
FIRST VIEWPORT: Cartouche pleine largeur (logo à gauche ; bloc titre à droite avec Dossier n°, Client, Date, Réf.). Dessous, la table des 11 modules pleine largeur : n°, désignation, nombre de postes, tampon d'état ; ligne « Reprendre » sur le module en cours. Total avancement en gros chiffres mono aligné à droite en pied de table.
FORM: Le devis d'agence, candidat 3 de ma liste ordonnée, seed 32489af7, chemin code-led (pas de génération d'images disponible).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
