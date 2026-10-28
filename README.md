# Blen Solomon — Portfolio

Personal portfolio for Blen Solomon — web developer, video editor & AI automation specialist.

Built with **React 19**, **Tailwind CSS 4**, **Vite**, and **Three.js** (`@react-three/fiber` + `drei`) for the floating 3D shapes. Fonts are self-hosted via Fontsource.

## Sections

- **Hero** — giant display type, portrait, floating 3D shapes (lazy-loaded)
- **About** — centered statement with floating 3D shapes
- **Services** — light section, numbered rows: web dev, video editing, AI automation
- **Projects** — sticky stacked project cards with live links
- **Contact** — mailto form + social links

## Commands

```bash
npm install     # install deps
npm run dev     # dev server
npm run build   # production build -> dist/
npm run lint    # oxlint
npm run preview # preview production build
```

## Customize

- Email + social links: `src/data.js`
- Projects & services: `src/data.js`
- Portrait: `public/portrait.jpg`
- Project thumbnails: `public/projects/`

## Deploy

Deploys to Vercel with zero config — Vite is auto-detected. Output dir: `dist`.
