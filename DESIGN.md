---
name: Gestion de projet web · Ingémedia
description: Le cours est un dossier d'agence — papier blanc froid, encre noire, tampon bleu, feuillets jaune et rose.
colors:
  paper: "#f9fafc"
  paper-2: "#eff1f4"
  ink: "#16161a"
  ink-2: "#45454d"
  ink-3: "#6d6d77"
  rule: "rgba(22, 22, 26, 0.18)"
  rule-soft: "rgba(22, 22, 26, 0.09)"
  stamp: "#2b41e5"
  stamp-soft: "rgba(43, 65, 229, 0.08)"
  red: "#c8321e"
  red-soft: "rgba(200, 50, 30, 0.07)"
  yellow: "#f6e38f"
  yellow-ink: "#5d4a00"
  pink: "#f2c4cf"
  pink-ink: "#6a1e33"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.4vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 88"
  display-narrow:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 75"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 1.4rem + 1.6vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 84"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 88"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  doc:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
  num:
    fontFamily: "JetBrains Mono, SF Mono, Menlo, monospace"
    fontFeature: "'tnum' 1"
  stamp:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.16em"
    fontVariation: "'wdth' 80"
rounded:
  none: "0"
  stamp: "2px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.75rem"
  xl: "2.5rem"
  2xl: "4rem"
components:
  button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.55rem 1.1rem"
    height: "2.75rem"
  button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.55rem 1.1rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.white}"
  button-stamp:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.stamp}"
    rounded: "{rounded.none}"
    padding: "0.55rem 1.1rem"
  button-stamp-hover:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.white}"
  button-sm:
    padding: "0.4rem 0.8rem"
    height: "2.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  button-ghost-hover:
    backgroundColor: "{colors.paper-2}"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.num}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.75rem"
    height: "2.75rem"
  chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.7rem"
    height: "2.25rem"
  chip-on:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  stamp:
    textColor: "{colors.stamp}"
    typography: "{typography.stamp}"
    rounded: "{rounded.stamp}"
    padding: "0.28em 0.55em 0.22em"
  stamp-lg:
    typography: "{typography.stamp}"
    padding: "0.34em 0.7em 0.28em"
    size: "1.1rem"
  stamp-xl:
    typography: "{typography.stamp}"
    padding: "0.3em 0.6em 0.24em"
    size: "1.9rem"
  stamp-red:
    textColor: "{colors.red}"
  stamp-ink:
    textColor: "{colors.ink}"
  sheet-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem 1.75rem 1.75rem 3rem"
  sheet-pink:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem 1.75rem 1.75rem 3rem"
  sheet-tab:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "0.45rem 0.8rem 0.4rem"
  nav-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0 1.25rem"
  nav-link-hover:
    backgroundColor: "{colors.paper-2}"
  nav-link-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  ledger-head:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
    padding: "0.55rem 0.75rem"
  ledger-cell:
    padding: "0.9rem 0.75rem"
  quiz-option:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1rem"
    height: "3.5rem"
  quiz-option-selected:
    backgroundColor: "{colors.stamp-soft}"
  quiz-option-correct:
    backgroundColor: "{colors.stamp-soft}"
  quiz-option-incorrect:
    backgroundColor: "{colors.red-soft}"
  lab:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "1.25rem"
  lab-head:
    backgroundColor: "{colors.paper-2}"
    padding: "0.9rem 1.25rem"
---

# Design System: Gestion de projet web · Ingémedia

## Overview

**Creative North Star: "Le dossier d'agence"**

Le cours n'est pas un LMS : c'est un dossier de devis qu'on ouvre. Chaque module est une ligne numérotée d'une table réglée, chaque section un « poste », la progression un total en gros chiffres mono aligné à droite en pied de table. Le matériau est un papier blanc froid (bleuté, jamais crème), l'encre est noire, et un seul accent existe : l'encre de tampon bleue, qui n'apparaît que pour dire un état (validé, en cours, juste, sélectionné, focus). Les feuillets de couleur sont des copies carbone au sens propre : jaune pour l'exercice, rose pour la correction réservée à l'enseignant.

La densité est celle d'un document administratif bien tenu : réglure hairline entre les lignes, traits d'encre de 2 px pour ouvrir une table ou clore un cartouche, angles vifs partout, zéro ombre douce. Les titres sont en Archivo condensé (axe de chasse `wdth`), les libellés en capitales espacées, tous les chiffres en JetBrains Mono tabulaire. La page se lit de loin (projection en salle) et se manipule de près (laptop) sans changer de composants.

Le système refuse trois choses que l'implémentation ne contient nulle part dans les surfaces refaites : la grille de cartes icône + titre + texte, les dégradés, et les coins arrondis. L'état n'est jamais une pastille de couleur : c'est un tampon incliné, une ligne barrée, une perforation, ou un tiret mono quand il n'y a rien à dire.

**Key Characteristics:**
- Papier blanc froid (#f9fafc) et encre noire (#16161a) ; un seul accent, le bleu tampon (#2b41e5), réservé aux états.
- Feuillet jaune = exercice, feuillet rose = correction enseignant ; les deux sont perforés à gauche.
- Hiérarchie par la réglure : 2 px d'encre pour la structure, 1 px pour les sous-structures, hairline à 18 % pour les lignes.
- Archivo variable (chasse 75 à 88) pour les titres et libellés ; JetBrains Mono tabulaire pour tout chiffre et tout champ.
- Angles vifs (rayon 0) ; la seule exception est le tampon (2 px, bavure d'encre) ; aucune ombre portée.
- Le moment signature : le tampon VALIDÉ qui s'imprime (`stamp-press`, 0,5 s) sur la ligne du module clôturé.

## Colors

Une palette de papeterie : trois gris de papier, trois gris d'encre, deux transparences de réglure, un bleu de tampon, un rouge de correction, et deux feuillets carbone (jaune, rose) chacun avec son encre foncée.

### Primary
- **Encre de tampon** (`stamp`, #2b41e5) : la seule couleur vive du système. Tampons « Validé » et « En cours », coche de poste terminé, `:focus-visible` (contour 2 px), caret des champs, hover du bouton primaire, bordure et fond (`stamp-soft`) de l'option de quiz sélectionnée ou correcte, remplissage de la règle de progression des scores (`ruler--stamp`), montants budgétaires et chiffres clés dans le contenu pédagogique.
- **Encre légère** (`stamp-soft`, rgba(43,65,229,.08)) : fond des options sélectionnées ou justes et des cellules de dépôt ciblées. Jamais un fond de section.

### Secondary
- **Rouge de correction** (`red`, #c8321e) : uniquement pour dire « faux » ou « attention ». Tampon « Faux » / « Insuffisant », option de quiz incorrecte (bordure + texte barré), encadré « Attention » du contenu, verdicts négatifs des ateliers, bouton `btn--red` (défini, non consommé pour l'instant). `red-soft` (rgba(200,50,30,.07)) est le fond de l'option incorrecte.

### Tertiary
- **Copie jaune** (`yellow`, #f6e38f) et son encre (`yellow-ink`, #5d4a00) : le feuillet d'exercice (`sheet--yellow`), la ligne « en cours » de la table des modules (jaune à 40 %), le surlignage `.highlight` du contenu, la sélection de texte (`::selection`), le trou à remplir des questions à trous, la série de bonnes réponses (`quiz-streak`), la variante `chip--yellow`.
- **Copie rose** (`pink`, #f2c4cf) et son encre (`pink-ink`, #6a1e33) : le feuillet de correction enseignant (`sheet--pink`), le cartouche des pages enseignant (`tone="pink"`), le commutateur « Mode enseignant » actif en bas à gauche. Le rose signifie toujours « réservé à l'enseignant ».

### Neutral
- **Papier** (`paper`, #f9fafc) : fond de page, du header, du cartouche par défaut, des boutons au repos, du footer. Un blanc froid légèrement bleuté ; jamais crème.
- **Papier 2** (`paper-2`, #eff1f4) : bandeau de tête des cadres (contrôle de poste, quiz global, atelier), hover des lignes et liens de navigation, fond des blocs de code, fond de l'encadré « Histoire vraie » et du contexte de scénario, boîte d'explication après correction.
- **Blanc** (`white`, #ffffff) : le fond des surfaces « posées » sur le papier : champs, options de quiz, chips, cadres d'atelier et de contrôle, encadrés du contenu, postes. Dans un feuillet coloré, ces surfaces passent à blanc 55 % pour laisser voir la copie carbone.
- **Encre** (`ink`, #16161a) : texte courant, bordures structurantes (1 px et 2 px), fond du lien de navigation actif, du bouton primaire, de l'onglet des feuillets, du poste actif dans le sommaire.
- **Encre 2** (`ink-2`, #45454d) : chapeaux, descriptions de ligne, texte secondaire des cadres.
- **Encre 3** (`ink-3`, #6d6d77) : libellés en capitales, numéros de ligne, en-têtes de colonne, tiret « à faire », placeholders, bouton désactivé (bordure pointillée).
- **Réglure** (`rule`, encre à 18 %) : bordures de lignes de table, séparateurs de liste, bordures des postes et blocs de code. **Réglure douce** (`rule-soft`, encre à 9 %) : bordure du code inline.
- Définis dans `:root` et Tailwind mais non consommés par les composants refaits : `paper-3` (#e4e7eb), `yellow-deep` (#e5cd55), `pink-deep` (#dc94a6). Ils restent disponibles comme troisième niveau de papier et bord foncé des feuillets ; ne pas en inventer d'autres.

### Named Rules
**La règle de l'encre de tampon.** Le bleu (#2b41e5) dit un état ou une validation, jamais un décor : tampons, focus, sélection, correct, progression, hover du primaire. Un fond de section, un titre ou une icône décorative en bleu est une faute.

**La règle des copies carbone.** Jaune = exercice de l'étudiant, rose = correction et outillage enseignant. Aucune autre surface ne prend ces fonds. Le rouge n'est ni un feuillet ni un accent : il dit « faux » ou « attention ».

**La règle du blanc posé.** Une surface manipulable (champ, option, chip, cadre) est en blanc pur sur le papier froid ; c'est ce contraste de 1 à 2 % qui la détache, pas une ombre.

## Typography

**Display Font:** Archivo variable, axe `wdth` chargé (avec Helvetica Neue, Arial, sans-serif)
**Body Font:** Archivo (même famille, chasse normale)
**Label/Mono Font:** JetBrains Mono (avec SF Mono, Menlo, monospace), chiffres tabulaires

**Character:** Une seule famille de titrage dont on serre la chasse selon le rôle (75 pour un titre de section, 84 pour un titre de contenu, 88 pour le titre de page), à côté d'une mono utilitaire qui prend tout ce qui se compte, se référence ou se saisit. Le contraste n'est pas grasse/légère mais large/étroit et proportionnel/mono.

### Hierarchy
- **Display** (`.display`, 700, `clamp(2rem, 1.4rem + 2.4vw, 3.4rem)`, 1.02, -0.02em, wdth 88) : le titre de page dans le cartouche ; `text-wrap: balance`.
- **Display narrow** (`.display-narrow`, 700, 1.5rem en section / 1.25rem en annexe / 1.05rem dans le header, 1, -0.01em, wdth 75) : titres de section de page (« Désignation des modules », « Annexes du dossier »), titres de cadres (« Contrôle du poste », « Composez votre quiz »), titre de feuillet.
- **Headline** (`.doc h1`, 700, `clamp(1.9rem, 1.4rem + 1.6vw, 2.6rem)`, 1.05, wdth 84) : le titre du poste dans le contenu pédagogique, fermé par un trait d'encre 2 px.
- **Title** (`.doc h2`, 700, 1.45rem, 1.15, wdth 88) : sous-titres de contenu, précédés d'un tiret d'encre 2 px de 2rem de large. `.doc h3` : 700, 1.1rem ; titres d'encadré et de poste : 700, 1.08 à 1.12rem, wdth 86.
- **Body** (400, 17px, 1.6) sur le corps de page ; **Doc** (400, 1.0625rem, 1.65) pour le contenu injecté, borné à une mesure de 46rem. Chapeau du cartouche : 1.05rem, `leading-relaxed`, encre 2. Texte secondaire : 0.875rem (`text-sm`).
- **Label** (`.label`, 700, 0.6875rem, 0.14em, capitales, encre 3, interligne 1) : `dt` du cartouche, en-têtes de colonne, en-têtes de groupe de champs, onglets de feuillet, étiquettes d'encadré, notes en marge d'un titre de section (« Ordre conseillé de lecture », posé à droite sur la même ligne de base). Les liens de navigation utilisent la même voix à 0.72rem.
- **Num** (`.num`, JetBrains Mono, `tnum`) : numéros de ligne (`01`), compteurs (`3 / 5 postes`), pourcentages, références (`GPW-2026-01`), dates, horodatages, valeurs de `dd`, index de question (`Q01`), lettres d'option (A, B, C), champs de saisie. Le total d'avancement est un `.num` en 3rem gras ; le score de quiz global un `.num.display` en 3.75rem.
- **Stamp** (`.stamp`, 800, 0.72 / 1.1 / 1.9rem, 0.16em, capitales, wdth 80) : le texte des tampons uniquement.

### Named Rules
**La règle des chiffres mono.** Tout ce qui se compte, se date ou se référence est en JetBrains Mono tabulaire (`.num`). Un chiffre en Archivo dans une table ou un cartouche est une faute.

**La règle du libellé de champ.** Un `.label` nomme un champ, une colonne ou un groupe (avec sa valeur dessous ou à côté), ou s'aligne à droite d'un titre de section sur la même ligne de base. Il ne se pose jamais seul au-dessus d'un titre comme chapeau ; l'identifiant d'une page vit dans le champ « Réf. » du cartouche.

**La règle de la chasse.** La hiérarchie des titres se joue sur l'axe `wdth` d'Archivo (75 → 88) et la taille, pas sur une seconde famille ni sur des graisses légères. Une seule graisse de titrage : 700 (800 pour les tampons).

## Layout

Le conteneur de page est borné à 80rem (`max-w-page`) avec des gouttières de 1rem / 1.5rem / 2rem (mobile / ≥640px / ≥1024px). Tout le contenu de lecture (contenu pédagogique, feuillets, contrôle de poste, ateliers) est borné à une mesure de 46rem (`max-w-measure`).

**Le cartouche** ouvre chaque page, pleine largeur, fermé par un trait d'encre 2 px : à gauche le bloc titre (retour éventuel, titre display, chapeau, action), à droite une liste de définitions (`dl`) d'au moins 22rem posée derrière un trait vertical 1 px ; sous 1024px la `dl` passe sous le titre en grille de deux colonnes séparées par des réglures. Le header au-dessus (logo Ingémedia à 2.25rem de haut, barre verticale, libellé + titre étroit) est fermé par le même trait 2 px ; les liens de navigation sont des cellules à bordure gauche hairline, la cellule active en encre pleine ; sous 1024px la navigation devient un bouton « Index » qui déplie une liste empilée.

**La page d'accueil** empile trois blocs séparés par 4rem : la table des modules (`.ledger`, 6 colonnes n° / désignation / postes / quiz / état / accès, total en `tfoot` derrière un trait 2 px avec pourcentage 3rem et règle de progression), le relevé de notes (grille 2 colonnes de règles bleues), et les annexes (grille 1 / 2 / 3 colonnes de cellules réglées, sans carte : bordures droites et basses hairline, hover papier 2).

**La page module** est une grille `17rem + 1fr` avec 2.5rem d'écart à partir de 1024px : sommaire des postes collant (`sticky`, `top: 1.5rem`) à gauche, contenu à droite ; en dessous, le sommaire passe au-dessus du contenu. Les blocs du contenu (ateliers, contenu, cas pratique, contrôle, navigation de poste) s'espacent de 2.5rem à 3rem ; la navigation de poste est fermée en haut par un trait 2 px.

**Sous 768px, la table des modules s'empile** (`.ledger--stack`) : l'en-tête disparaît, chaque ligne devient une fiche en grille `2.25rem | 1fr | auto` (n° / désignation + description / tampon), les colonnes secondaires (`.c-hide`) sont masquées, l'action (`.c-action`) passe sous la désignation ; le pied garde son total à droite derrière son trait 2 px.

**Rythme d'espacement observé :** cellules de table 0.9rem × 0.75rem ; en-têtes de cadre 0.9rem × 1.25rem ; corps de cadre 1.25rem ; feuillets 1.75rem avec 3rem à gauche pour la bande de perforation ; marges entre blocs 2.5rem ; entre sections de page 4rem. Les groupes de champs sont séparés par des réglures (`divide-y`), pas par de l'espace blanc.

### Named Rules
**La règle de la réglure.** La hiérarchie se dit par l'épaisseur du trait, pas par l'espace ou la couleur : 2 px d'encre pour ouvrir ou fermer un ensemble (table, cartouche, pied, navigation de poste), 1 px d'encre sous un en-tête ou autour d'une surface posée, hairline à 18 % entre les lignes. Une bordure de 3 px ou une couleur de bordure autre qu'encre / réglure / tampon / rouge / encre du feuillet est hors système.

**La règle de la mesure.** Rien qui se lit ne dépasse 46rem de large ; les tables et les cartouches, eux, prennent toute la largeur de page.

## Elevation & Depth

Le système est plat. Aucune ombre portée n'existe dans les surfaces refaites ; la profondeur vient de trois moyens seulement : le contraste papier froid / blanc pur pour détacher une surface manipulable, le poids des traits d'encre, et le fond encre plein pour l'élément actif (lien de navigation, poste courant, chip pressé, bouton primaire). Les feuillets colorés se posent sur le papier par leur fond et leur bordure d'encre foncée, pas par un relief.

Deux effets tiennent lieu de « matière » : le tampon est en `mix-blend-mode: multiply`, passé dans un filtre SVG partagé `#ink-edge` (turbulence + déplacement 1.8) et masqué par un bruit fractal, pour un bord d'encre irrégulier ; et la bande de perforation (`.perforated`) est un dégradé radial d'œillets de 1.5rem de pas derrière un pointillé.

### Shadow Vocabulary
- **Double bordure interne** (`box-shadow: inset 0 0 0 1px var(--stamp)` ou `var(--red)` ; `inset 0 0 0 2px` sur les boutons Vrai / Faux) : le seul `box-shadow` du système. Il épaissit la bordure d'une option sélectionnée, correcte ou incorrecte sans changer sa boîte. Ce n'est pas une ombre.

### Named Rules
**La règle zéro ombre.** Aucun `box-shadow` externe, aucun flou, aucun dégradé de fond. Ce qui doit se détacher passe en blanc pur, en encre pleine, ou derrière un trait plus épais.

## Shapes

Angles vifs partout : le rayon est 0 sur les boutons, champs, chips, options, cadres, feuillets, cellules, curseur de slider, cases à cocher (1.1rem, bordure 1.5 px, coche = carré bleu de 0.62rem qui s'imprime). L'unique exception est le tampon, à 2 px, parce qu'un bord d'encre bavée n'est jamais parfaitement droit. Le contenu pédagogique historique portait des utilitaires arrondis : `.doc` les neutralise (`border-radius: 0` sur tout `[class*='rounded']`).

Les formes récurrentes sont celles de la papeterie : la table réglée ; le cartouche à deux blocs séparés par un trait vertical ; le feuillet à onglet (une étiquette en capitales collée dans le coin haut-gauche, en encre pleine ou en encre du feuillet) et à bande perforée ; le tampon incliné (de -8° à +4°, l'inclinaison variant légèrement d'une ligne à l'autre) ; la puce de liste qui est un tiret horizontal de 0.55rem (ou un carré vide de 0.5rem pour les livrables), et le numéro de liste ordonnée en mono à deux chiffres (`01`, `02`) ; l'encadré à étiquette (« Histoire vraie », « Astuce », « Attention », « Concept clé », « Exemple » en pointillé, « Contexte ») ; la règle de progression graduée tous les 10 % (`.ruler`, 10 px de haut, bordure d'encre, remplissage encre ou bleu) ; le bouton désactivé en bordure pointillée grise.

### Named Rules
**La règle de l'angle vif.** `border-radius: 0` sur toute surface, sauf 2 px sur `.stamp`. Une pastille ronde ou une pilule est hors système ; l'état se dit par un tampon, un texte barré, une bordure, un fond encre ou un tiret mono.

## Components

### Buttons
Caractère : une case de formulaire qu'on coche d'un coup d'encre.
- **Shape :** rectangle net (rayon 0), bordure 1 px d'encre, hauteur minimale 2.75rem (2.25rem en `btn--sm`), libellé 0.8125rem gras en capitales espacées 0.1em (0.72rem en petit), icône lucide de 1rem (0.875rem en petit) à gauche ou à droite.
- **Défaut (`.btn`) :** papier, texte encre ; hover : encre pleine, texte papier (140 ms, `ease-out`). C'est le bouton « Poste précédent », « Revoir », « Ouvrir », « Recommencer », le commutateur enseignant.
- **Primaire (`.btn--primary`) :** encre pleine, texte papier ; hover : bleu tampon, texte blanc. Un seul par vue : « Reprendre », « Poste suivant », « Clôturer le module », « Voir la correction », « Commencer ».
- **Tampon (`.btn--stamp`) :** bordure et texte bleus, hover bleu plein : réservé à l'action « Reprendre 3.2 » sur la ligne en cours de la table.
- **Rouge (`.btn--red`) :** défini symétriquement, non consommé pour l'instant.
- **Ghost (`.btn--ghost`) :** bordure transparente, hover papier 2.
- **Désactivé :** bordure pointillée encre 3, texte encre 3, curseur interdit.
- **Focus :** contour bleu 2 px décalé de 2 px (`:focus-visible` global).

### Chips
- **Style :** rectangle blanc à bordure d'encre 1 px, 2.25rem de haut, 0.85rem semi-gras, padding 0.35rem × 0.7rem ; hover papier 2.
- **State :** pressé (`aria-pressed="true"` ou `.is-on`) = encre pleine, texte papier ; variante `chip--stamp` pressée = bleu plein ; `chip--yellow` = fond jaune ; désactivé = opacité 50 %. Utilisés comme filtres du quiz global (thèmes, difficultés, formats), comme éléments à placer dans les ateliers (barrés une fois placés), et comme choix de texte à trous (`.quiz-fill-blank-chip`, en mono, pressé = encre pleine).
- **Badges de question** (`.quiz-difficulty-*`, `.quiz-category-badge`) : même famille, 0.6375rem en capitales, avec pour la difficulté un carré de 0.45rem rempli à 33 / 66 / 100 %.

### Cards / Containers
Le système n'a pas de carte. Il a trois conteneurs :
- **Le cadre** (contrôle de poste, quiz global, résultats, `.lab`) : blanc pur, bordure d'encre 1 px, rayon 0, sans ombre ; un bandeau de tête en papier 2 fermé par 1 px d'encre (titre `display-narrow`, sous-titre ou compteur mono) ; un corps à 1.25rem ; les sections internes séparées par des réglures ; un pied fermé en haut par un trait 2 px (contrôle) ou une réglure (`.lab__foot`).
- **Le feuillet** (`.sheet`) : bordure 1 px, padding 1.75rem avec 3rem à gauche pour la bande perforée, marge verticale 2.5rem, onglet d'étiquette collé dans le coin (`.sheet__tab`, encre / papier ; en jaune : encre jaune / jaune ; en rose : encre rose / rose). `sheet--yellow` = cas pratique, avec un `textarea.field` à 70 % de blanc pour le brouillon ; `sheet--pink` = correction enseignant, chargée à la demande et affichée en `animate-in`. Dedans, les surfaces blanches du contenu passent à blanc 55 %.
- **Le poste** (`.project-type`, `.value-type`, `.deliverable-phase` du contenu) : blanc, bordure hairline, trait d'encre 1 px en haut, padding 1.25rem × 1.4rem. Les encadrés du contenu (`.story-box`, `.tip-box`, `.warning-box`, `.key-concept`, `.example-box`) sont des variantes à étiquette collée : bordure 1 px encre (2 px pour le concept clé, rouge pour l'attention, pointillée pour l'exemple).
- **Les chiffres clés** (`.stat-cards`) : une seule bordure d'encre autour d'une grille sans gouttière, cellules séparées par des réglures, valeur mono 1.75rem en bleu.

### Inputs / Fields
- **Style (`.field`) :** blanc, bordure hairline sur trois côtés et encre pleine en bas (une ligne de formulaire carbone), rayon 0, JetBrains Mono 0.95rem, 2.75rem de haut, placeholder encre 3 ; `textarea` à 7rem minimum, redimensionnable verticalement.
- **Focus :** les quatre bordures passent au bleu tampon (140 ms), pas de contour supplémentaire ; caret bleu.
- **Case à cocher (`.check`) :** carré 1.1rem à bordure 1.5 px d'encre, coche = carré bleu de 0.62rem qui s'imprime en 120 ms.
- **Curseur (`.slider`) :** piste de 2 px d'encre, poignée carrée de 1.1rem papier à bordure 2 px d'encre, valeur affichée à côté en mono 1.5rem gras.
- **Cellule de dépôt (`.drop`) :** 5.5rem minimum, bordure pointillée encre 3 ; cible active = bordure pleine bleue et fond `stamp-soft`.

### Navigation
- **Header :** fermé par 2 px d'encre ; logo Ingémedia (2.25rem de haut, obligatoire), séparateur vertical 1 px, libellé « UFR Ingémedia · Université de Toulon » en `.label` et « Gestion de projet web » en `display-narrow` 1.05rem. Liens : cellules pleine hauteur à bordure gauche hairline, 0.72rem gras en capitales espacées 0.14em, padding horizontal 1.25rem ; hover papier 2 ; actif (`aria-current="page"`) encre pleine, texte papier.
- **Mobile (< 1024px) :** le bloc texte du logo disparaît sous 640px ; la navigation devient un bouton « Index » (icône menu / croix) qui déplie une liste empilée fermée en haut par 1 px d'encre, chaque lien 0.78rem sur une réglure, l'actif en encre pleine.
- **Sommaire de module :** liste ordonnée ouverte par 2 px d'encre, chaque poste sur une réglure, numéro mono `10.3` en encre 3, titre 0.95rem semi-gras, coche bleue quand terminé ; le poste courant (`aria-current="step"`) est en encre pleine, texte papier. Collant à 1.5rem du haut à partir de 1024px, suivi d'une règle de progression et d'un compteur mono.
- **Retour :** un `.label` avec flèche gauche, en encre, hover bleu, au-dessus du titre du cartouche.
- **Commutateur enseignant :** fixé en bas à gauche (1rem), `btn btn--sm` sur fond papier ; une fois actif, une barre rose (fond `pink`, bordure et texte `pink-ink`) « Mode enseignant · Quitter ».

### Cartouche
Le bloc d'identité de chaque page, réglé comme l'en-tête d'un devis. À gauche : lien de retour, titre display, chapeau (1.05rem, encre 2, mesure 46rem), action primaire éventuelle. À droite : une `dl` de champs (`dt` en `.label`, `dd` en mono 0.95rem semi-gras) séparés par des réglures, derrière un trait vertical 1 px ; la valeur d'un champ peut être un tampon (« État »). Le fond suit le ton : papier (par défaut), rose (pages enseignant), jaune (disponible, non utilisé). Le champ « Réf. » porte l'identifiant de la page (`Module 10 / 11`, `Annexe A1 · 330 questions au catalogue`) : c'est là, et pas au-dessus du titre, que vit la référence.

### Tampon (Stamp)
Le composant signature. Un `span` à bordure 2 px `currentColor` (3 px en `lg`, 4 px en `xl`), rayon 2 px, texte Archivo wdth 80 en capitales 800 espacées 0.16em (0.72 / 1.1 / 1.9rem), incliné par `--tilt` (de -8° à +4°, la valeur varie d'une ligne à l'autre pour ne pas tomber juste), en `multiply`, passé dans le filtre `#ink-edge` et masqué par un bruit. Tons : `done` et `progress` en bleu, `red` en rouge, `ink` en encre, `pink` en encre rose. Tailles : `sm` dans les questions (« Juste », « Faux »), `lg` dans la table des modules et le cartouche (« Validé », « En cours »), `xl` dans le relevé de résultats (« Validé », « À revoir », « Insuffisant »). L'état « à faire » n'a pas de tampon : un tiret mono en encre 3. La prop `press` déclenche `stamp-press` (0,5 s, `ease-out`, de 1.9× à 0.94× puis 1×) : c'est l'impression du tampon quand un module vient d'être clôturé ou une correction révélée.

### Table réglée (Ledger)
`table.ledger` : ouverte par 2 px d'encre ; `th` en `.label` sur 1 px d'encre ; `td` 0.9rem × 0.75rem sur une réglure, la dernière ligne sur 1 px d'encre ; `tfoot` ouvert par 2 px d'encre. Les colonnes chiffrées sont mono et alignées à droite ; la ligne « en cours » a un fond jaune à 40 %. `ledger--stack` la transforme en fiches empilées sous 768px (voir Layout).

### Options de quiz
`.quiz-option` : blanc, bordure d'encre 1 px, 3.5rem minimum, empilées avec chevauchement de bordure (-1 px) ; index en carré mono de 2rem à gauche (A, B, C…). Sélectionnée ou correcte : fond `stamp-soft`, bordure bleue doublée en interne, index bleu plein ; incorrecte : fond `red-soft`, bordure rouge, index rouge, texte barré 2 px rouge. Vrai / Faux : deux boutons de 4.5rem en Archivo wdth 84 1.4rem capitales. Explication après correction : boîte en pointillé sur papier 2 avec le libellé « Explication ». Score : `.num` 1.875rem gras, pourcentage teinté (bleu ≥ 80, encre 2 ≥ 50, rouge en dessous).

### Atelier (Lab)
`section.lab` : cadre blanc à bordure 1 px ; bandeau papier 2 avec titre wdth 84 1.15rem et une ligne de 0.75rem en encre 3 (catégorie · durée mono) ; corps 1.25rem ; pied sur réglure. Le `Verdict` est un paragraphe ouvert par un trait 2 px (encre, bleu ou rouge selon le ton), jamais une boîte colorée.

### Motion
Une seule courbe (`--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`) et des durées courtes : 140 ms pour un bouton ou un champ, 120 ms pour une option, une chip, une case ; 0,25 s pour l'apparition d'un bloc (`animate-in`) ; 0,5 s pour l'impression d'un tampon ; 0,9 s pour le `+2` mono bleu qui monte au-dessus d'une bonne réponse (`quiz-score-popup`). `prefers-reduced-motion` réduit toutes les durées à 0.

## Do's and Don'ts

### Do:
- **Do** ouvrir chaque page par un `Cartouche` (titre display à gauche, `dl` de champs mono à droite, trait 2 px en bas) et mettre l'identifiant de la page dans le champ « Réf. ».
- **Do** dire un état par un `Stamp` incliné (`done` / `progress` en bleu, `red` pour faux, `ink` pour « à revoir »), en `lg` dans une table ou un cartouche, et un tiret mono `—` en encre 3 pour « rien encore ».
- **Do** mettre tout chiffre, date, référence, compteur et champ de saisie en `.num` (JetBrains Mono tabulaire).
- **Do** structurer par la réglure : 2 px d'encre pour ouvrir/fermer, 1 px sous un en-tête, hairline (18 %) entre les lignes ; séparer les groupes par `divide-y`, pas par de l'espace.
- **Do** poser les surfaces manipulables en blanc pur (#fff) sur le papier froid, avec une bordure d'encre 1 px et un rayon 0.
- **Do** réserver le jaune au cas pratique (`sheet--yellow perforated`) et le rose à ce qui est enseignant (`sheet--pink`, cartouche `tone="pink"`, barre du mode enseignant).
- **Do** borner ce qui se lit à 46rem (`max-w-measure`) et laisser tables et cartouches prendre les 80rem de page.
- **Do** utiliser un seul `.btn--primary` par vue, en encre pleine ; le hover bleu est sa seule couleur.
- **Do** garder le logo Ingémedia à 2.25rem de haut dans le header, suivi de sa barre verticale.

### Don't:
- **Don't** arrondir : aucun `rounded-*` hors des 2 px du tampon ; pas de pastille, pas de pilule, pas d'avatar rond.
- **Don't** ombrer ni dégrader : pas de `shadow-*`, pas de `bg-gradient-*`, pas de flou ; seul `inset 0 0 0 1px` existe, comme double bordure d'état.
- **Don't** poser une grille de cartes icône + titre + texte ; les annexes sont des cellules réglées, les modules des lignes de table.
- **Don't** utiliser le bleu tampon en fond de section, en titre ou en icône décorative : il ne dit que l'état, la sélection, le focus et la progression.
- **Don't** poser un `.label` seul au-dessus d'un titre comme chapeau ; il nomme un champ ou une colonne, ou s'aligne à droite d'un titre sur sa ligne de base.
- **Don't** introduire une seconde famille de titrage ni une graisse légère : la hiérarchie se fait par la chasse d'Archivo (75 à 88) et la taille.
- **Don't** utiliser une couleur de bordure hors encre / réglure / bleu / rouge / encre des feuillets, ni une épaisseur autre que hairline, 1 px ou 2 px (3 et 4 px n'existent que sur les tampons `lg` / `xl`).
- **Don't** afficher le rose ou une correction à un étudiant : le feuillet rose n'existe que servi par l'API à un enseignant authentifié.

<!-- Périmètre du système relevé : accueil, page module, quiz global, lexique, évaluation, compétences, prof-guide (cartouche rose). Les pages /mission, /oraux, /scores-enseignant, /dashboard-live et les composants GamePanel, Leaderboard, TeamSetup, MiniGames n'ont reçu qu'un restyle au niveau des tokens (couleurs et polices) et gardent leurs anciennes mises en page (cartes arrondies, ombres, dégradés dans MiniGames). Ce qu'ils montrent ne fait pas système : à réaligner sur les règles ci-dessus, pas à documenter. -->
