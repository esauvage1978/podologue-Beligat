# Site vitrine — cabinet de podologie (Astro)

Projet [Astro](https://astro.build/) pour un site vitrine. Le contenu (textes, infos praticien, horaires) sera ajouté ensuite.

## Commandes

- `npm run dev` — serveur de développement
- `npm run build` — build statique dans `dist/`
- `npm run preview` — prévisualisation du build

## SEO : sitemap et robots

- **`site`** dans `astro.config.mjs` : remplace `https://www.example.com` par l’URL publique définitive du site. Elle sert aux URLs absolues du **sitemap** et aux métadonnées.
- Après `npm run build`, tu trouveras `sitemap-index.xml` (et les sitemaps associés) dans `dist/`.
- **`/robots.txt`** est généré dynamiquement et référence le sitemap sur le domaine configuré.

## Structure des pages

| Chemin                     | Rôle                          |
|----------------------------|-------------------------------|
| `/`                        | Accueil                       |
| `/qui-suis-je/`            | Qui sommes-nous (praticiens)  |
| `/mes-services/`           | Actes & tarifs indicatifs     |
| `/plan-acces/`             | Carte, accès PMR, contact     |
| `/mentions-legales/`, etc. | Pages légales                 |
