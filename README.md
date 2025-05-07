# AFCON Morocco 2025 – Official Portal

Welcome to the official portal of the 2025 Africa Cup of Nations (AFCON) in Morocco. This web project aims to provide an immersive and comprehensive experience around Africa's biggest football event, with a modern, responsive, and feature-rich interface.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Preview](#project-preview)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Image Organization](#image-organization)
- [Authors](#authors)

---

## Overview

This portal centralizes all information related to AFCON 2025: news, teams, stadiums, schedule, results, statistics, and more.

---

## Features

- **Home**: Tournament presentation, countdown, highlights, featured teams, latest news.
- **Teams**: Interactive list of the 24 participating teams, with flags, squads, statistics, and history.
- **Stadiums**: Detailed profiles of the 6 host stadiums (photos, capacity, location, scheduled matches).
- **Schedule**: Dynamic match schedule, filterable by group, date, stadium, or team.
- **News**: News feed, detailed articles, images, social media sharing.
- **Statistics**: Interactive charts (Chart.js) for scores, rankings, and performances.
- **About**: Information about the organization, partners, and the site's mission.
- **Responsive**: Optimal experience on mobile, tablet, and desktop.
- **Accessibility**: Keyboard navigation, contrast, alternative text for images.
- **SEO**: Optimized meta tags, sitemap, semantic structure.
- **Performance**: Asynchronous resource loading, image optimization.

---

## Project Preview

![Site Preview](img/afcon-logo.png)

---

## Project Structure

```text
projet_web25/
│
├── index.html             # Home page
├── teams.html             # Teams page
├── stadiums.html          # Stadiums page
├── schedule.html          # Match schedule
├── news.html              # News
├── news-detail.html       # News detail
├── about.html             # About
│
├── css/
│   └── styles.css         # Custom styles
│
├── js/
│   ├── main.js            # General logic
│   ├── news.js            # News management
│   ├── news-detail.js     # News detail logic
│   └── share-links.js     # Social sharing
│
├── img/
│   ├── afcon-logo.png     # Tournament logo
│   ├── favicon.ico        # Favicon
│   ├── flags/             # Team flags
│   ├── news/              # News images
│   ├── teams/             # Team photos
│   └── partners/          # Partner logos
│
├── public/
│   └── vite.svg           # Static resources
│
├── .bolt/
│   └── config.json        # Vite configuration
│
├── package.json           # npm dependencies and scripts
├── package-lock.json      # Dependency lock file
├── .gitignore             # Version control exclusions
└── README.md              # Project documentation
```

---

## Technologies Used

- **HTML5 / CSS3**: Page structure and styling
- **JavaScript (ES6+)**: Dynamic logic, per-page modules
- **Vite**: Ultra-fast development server and build tool
- **Chart.js**: Data/statistics visualization
- **Bootstrap 5**: Responsive layout and UI components
- **Font Awesome**: Vector icons
- **AOS**: Scroll animations

---

## Image Organization

- **img/flags/**: 24 official flags (PNG, 120x80px), used in lists, tables, and team profiles.
- **img/teams/**: National team photos.
- **img/news/**: Illustrations for news articles.
- **img/partners/**: Official sponsor and partner logos.

All images are royalty-free or from the public domain.

---

## Authors

- Tafraouti Sanae
- Essebaiy Aya
- Elmessaoudi Fatima
- Chouhe Jihane
- Sadiki Abderrahim


