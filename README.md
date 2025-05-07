# AFCON Morocco 2025 – Portail Officiel

Bienvenue sur le portail officiel de la Coupe d'Afrique des Nations 2025 (AFCON) au Maroc. Ce projet web vise à offrir une expérience immersive et complète autour du plus grand événement footballistique africain, avec une interface moderne, responsive et riche en fonctionnalités.

---

## Sommaire

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Aperçu du projet](#aperçu-du-projet)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Organisation des images](#organisation-des-images)

---

## Présentation

Ce portail centralise toutes les informations relatives à la CAN 2025 : actualités, équipes, stades, calendrier, résultats, statistiques, et bien plus.

---

## Fonctionnalités

- **Accueil** : Présentation du tournoi, compte à rebours, points forts, équipes vedettes, dernières actualités.
- **Équipes** : Liste interactive des 24 équipes participantes, avec drapeaux, effectifs, statistiques et historique.
- **Stades** : Fiches détaillées des 6 stades hôtes (photos, capacité, localisation, matchs programmés).
- **Calendrier** : Planning dynamique des matchs, filtrage par groupe, date, stade ou équipe.
- **Actualités** : Fil d'actualité, articles détaillés, images, partage sur réseaux sociaux.
- **Statistiques** : Graphiques interactifs (Chart.js) sur les scores, classements, performances.
- **À propos** : Informations sur l'organisation, les partenaires, la mission du site.
- **Responsive** : Expérience optimale sur mobile, tablette et desktop.
- **Accessibilité** : Navigation clavier, contraste, textes alternatifs pour les images.
- **SEO** : Balises meta optimisées, sitemap, structure sémantique.
- **Performance** : Chargement asynchrone des ressources, optimisation des images.

---

## Aperçu du projet

![Aperçu du site](img/afcon-logo.png)

---

## Structure du projet

```text
projet_web25/
│
├── index.html             # Page d'accueil
├── teams.html             # Page des équipes
├── stadiums.html          # Page des stades
├── schedule.html          # Calendrier des matchs
├── news.html              # Actualités
├── news-detail.html       # Détail d'une actualité
├── about.html             # À propos
│
├── css/
│   └── styles.css         # Styles personnalisés
│
├── js/
│   ├── main.js            # Logique générale
│   ├── news.js            # Gestion des actualités
│   ├── news-detail.js     # Détail d'une actualité
│   └── share-links.js     # Partage réseaux sociaux
│
├── img/
│   ├── afcon-logo.png     # Logo du tournoi
│   ├── favicon.ico        # Favicon
│   ├── flags/             # Drapeaux des équipes
│   ├── news/              # Images pour les actualités
│   ├── teams/             # Photos des équipes
│   └── partners/          # Logos des partenaires
│
├── public/
│   └── vite.svg           # Ressources statiques
│
├── .bolt/
│   └── config.json        # Configuration Vite
│
├── package.json           # Dépendances et scripts npm
├── package-lock.json      # Verrouillage des dépendances
├── .gitignore             # Fichiers exclus du versionnement
└── README.md              # Documentation du projet
```

---

## Technologies utilisées

- **HTML5 / CSS3** : Structure et style des pages
- **JavaScript (ES6+)** : Logique dynamique, modules par page
- **Vite** : Serveur de développement et build ultra-rapide
- **Chart.js** : Visualisation de données/statistiques
- **Bootstrap 5** : Mise en page responsive et composants UI
- **Font Awesome** : Icônes vectorielles
- **AOS** : Animations au scroll

---

## Organisation des images

- **img/flags/** : 24 drapeaux officiels (PNG, 120x80px), utilisés dans les listes, tableaux, fiches équipes.
- **img/teams/** : Photos des équipes nationales.
- **img/news/** : Illustrations pour les articles d'actualité.
- **img/partners/** : Logos des sponsors et partenaires officiels.

Toutes les images sont libres de droits ou issues du domaine public.

---

## Auteurs

- Tafraouti Sanae
- Essebaiy Aya
- Elmessaoudi Fatima
- Chouhe Jihane
- Sadiki Abderrahim


