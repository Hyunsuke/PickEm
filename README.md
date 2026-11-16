# PickEm

> Plateforme de tournois et de pronostics en direct : organisez vos tournois, importez ceux de la communauté depuis start.gg, et faites pronostiquer le public en temps réel.

[![CI](https://github.com/Hyunsuke/PickEm/actions/workflows/ci.yml/badge.svg)](https://github.com/Hyunsuke/PickEm/actions/workflows/ci.yml)

**Démo en ligne** : _à venir_ · **Documentation** : [`/docs`](docs/) _(à venir)_

---

## Sommaire

- [Présentation](#présentation)
- [Captures](#captures)
- [Stack technique](#stack-technique)
- [Structure du dépôt](#structure-du-dépôt)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Lancement](#lancement)
- [Tests](#tests)
- [Variables d'environnement](#variables-denvironnement)
- [Documentation](#documentation)
- [Contribuer](#contribuer)
- [Usage de l'IA](#usage-de-lia)
- [Licence](#licence)

---

## Présentation

PickEm réunit deux choses :

- **l'organisation de tournois** : jeux vidéo, jeux de plateau, babyfoot, échecs… en élimination simple ou double, poules, ronde suisse ou FFA, avec inscriptions solo ou en équipe, check-in, planning et gestion des litiges ;
- **les pronostics du public** : vainqueurs, scores exacts, arbre complet et questions « Pick'em » (personnage le plus joué, meilleur joueur, oui/non…), résolus automatiquement.

Chaque résultat de match, saisi sur la plateforme ou récupéré depuis [start.gg](https://www.start.gg), fait avancer l'arbre, résout les pronostics et met à jour les classements en temps réel.

| Profil | Rôle |
|---|---|
| Administrateur | Crée les jeux, les tournois, les imports start.gg, les pronostics et Pick'em ; valide les scores et tranche les litiges. |
| Joueur | S'inscrit en solo ou en équipe, fait son check-in, déclare ses scores. |
| Spectateur | Pronostique, répond aux Pick'em, suit les tournois en direct, rejoint des groupes d'amis. |

> Aucun jeu d'argent : les pronostics rapportent uniquement des points, des badges et des titres.

## Captures

_À venir._

## Stack technique

| Composant | Technologie | Statut |
|---|---|---|
| Web | [SvelteKit](https://svelte.dev/docs/kit) + TypeScript | Initialisé |
| API | [Express](https://expressjs.com) + TypeScript | À venir |
| Base de données & temps réel | [Cloud Firestore](https://firebase.google.com/docs/firestore) | À venir |
| Authentification | [Firebase Authentication](https://firebase.google.com/docs/auth) | À venir |
| Mobile | _à définir_ | À venir |

Les choix de stack sont justifiés dans les ADR (`docs/adr/`, à venir).

## Structure du dépôt

```text
PickEm/
├── backend/      # API Express (+ Firebase Admin SDK)
├── frontend/     # Application web SvelteKit
├── docs/         # Documentation utilisateur, technique, connecteurs (à venir)
└── README.md
```

## Prérequis

| Outil | Version | Utilité |
|---|---|---|
| [Node.js](https://nodejs.org) | 24 ou plus (voir `.nvmrc`) | Web et API |
| npm | fourni avec Node | Gestion des dépendances |

Un accès au projet Firebase de l'équipe est nécessaire (demander les identifiants à un membre du groupe).

## Installation

```bash
git clone https://github.com/Hyunsuke/PickEm.git
cd PickEm

# Web
cd frontend && npm install && cd ..

# API (une fois le backend initialisé)
cd backend && npm install && cd ..
```

> Objectif : une installation en une seule commande avec données de démonstration et simulateur. _À venir._

## Lancement

Dans deux terminaux :

```bash
# 1. API Express — http://localhost:3000
cd backend && npm run dev

# 2. Web — http://localhost:5173
cd frontend && npm run dev
```

## Tests

_À venir._ Les tests se lanceront en une seule commande et passeront sans connexion (appels start.gg et Firebase simulés).

```bash
# Vérification des types du frontend (disponible dès maintenant)
cd frontend && npm run check
```

## Variables d'environnement

Copier `.env.example` en `.env` dans chaque dossier concerné. Aucun secret (jeton start.gg, clé de compte de service Firebase…) ne doit être commité.

| Variable | Où | Description |
|---|---|---|
| `PORT` | backend | Port de l'API (défaut `3000`) |
| `FIREBASE_PROJECT_ID` | backend | Identifiant du projet Firebase |
| `FIREBASE_CLIENT_EMAIL` | backend | E-mail du compte de service (Firebase Admin SDK) |
| `FIREBASE_PRIVATE_KEY` | backend | Clé privée du compte de service (Firebase Admin SDK) |
| `PUBLIC_FIREBASE_*` | frontend | Configuration web Firebase (apiKey, authDomain, projectId…) |
| `STARTGG_API_TOKEN` | backend | Jeton de l'API publique start.gg |

## Documentation

_À venir dans [`/docs`](docs/)._

- Documentation utilisateur (administrateur, joueur, spectateur)
- Documentation technique (architecture, ADR, modèle de données, API, temps réel, mobile, exploitation)
- Guide du développeur de connecteurs
- Déclaration d'accessibilité

## Contribuer

Voir [`CONTRIBUTING.md`](CONTRIBUTING.md) _(à venir)_. En bref :

1. Choisir ou créer une issue dans le GitHub Project.
2. Créer une branche `<type>/<n°issue>-<description>` depuis `main`.
3. Committer au format [Conventional Commits](https://www.conventionalcommits.org/fr/).
4. Ouvrir une pull request liée à l'issue (`Closes #<n°>`), relue avant le merge.

## Usage de l'IA

| Outil | Usage |
|---|---|
| Claude Code (Anthropic) | Rédaction du skill de projet (`.claude/skills/`), du README ; aide à la configuration du dépôt. |

Tout contenu généré est relu, testé et passe par une pull request comme le reste du code. Chaque membre du groupe doit pouvoir expliquer n'importe quelle partie du projet.

## Licence

_À définir_ (fichier [`LICENSE`](LICENSE) à venir).
