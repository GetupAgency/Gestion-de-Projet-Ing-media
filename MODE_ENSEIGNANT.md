# Mode enseignant

Le mode enseignant donne accès aux corrections des cas pratiques (feuillets roses), au guide de correction de la mission (`/prof-guide`), aux oraux, au tableau de scores live et à l'import des scores.

## Fonctionnement (depuis la refonte)

1. L'enseignant clique sur **Enseignant** (bas gauche) et saisit le mot de passe, ou ouvre n'importe quelle page avec `?key=<mot de passe>`.
2. Le navigateur envoie le mot de passe à `POST /api/teacher/login`. **La vérification se fait côté serveur.**
3. Si le mot de passe est bon, le serveur pose deux cookies :
   - `teacher_token` : jeton signé (HMAC), `httpOnly`, 30 jours. C'est lui qui autorise l'accès aux corrections.
   - `teacher_ui` : simple drapeau lisible par le navigateur, pour afficher l'interface enseignant.
4. Les corrections sont servies par `GET /api/correction?module=…&section=…&case=…` uniquement si le jeton est valide. **Elles ne sont jamais présentes dans le bundle JavaScript envoyé aux étudiants** (`lib/content.ts` les retire avant l'envoi).
5. Le guide de correction (`/prof-guide`) est rendu côté serveur uniquement pour un enseignant authentifié.

Quitter le mode : bouton **Quitter** → `POST /api/teacher/logout` efface les cookies.

## Configuration (variables d'environnement : Dokploy, Vercel ou `.env.local`)

| Variable | Rôle |
|---|---|
| `TEACHER_PASSWORD` | Mot de passe enseignant. **Obligatoire** : sans lui, la connexion enseignant est refusée. |
| `TEACHER_SECRET` | Clé de signature des jetons (une chaîne aléatoire longue). Recommandé ; sinon dérivée du mot de passe. |

Il n'y a plus de mécanisme de secours : le mot de passe vit uniquement côté serveur, jamais dans une base ni dans le bundle.

Après avoir défini les variables, redéployez, puis **changez le mot de passe** si l'ancien a déjà circulé.

## Ce qui reste côté client

Les pages `/oraux`, `/dashboard-live` et `/scores-enseignant` vérifient le drapeau `teacher_ui` pour s'afficher. Les données (scores d'équipe, oraux) sont dans une base SQLite locale (`data/app.db`, ou `DATA_DIR`), servie par `/api/teams` et `/api/oraux`. La lecture est ouverte à tous, comme avant ; les écritures sensibles (correction d'un score, chrono et notes des oraux) exigent le cookie enseignant côté serveur. Ne stockez rien de confidentiel dans ces tables.
