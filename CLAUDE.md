# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Portfolio website for "L'Artisan du Bois" (Luc Gobet), a craftsman specializing in custom woodwork. The site showcases projects (kitchens, furniture, shutters, terraces) and provides a contact page. Content is in French.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # TypeScript check + Vite build → dist/
npm run lint       # ESLint
npm run preview    # Build + run via Wrangler locally (simulates Cloudflare)
npm run deploy     # Build + deploy to Cloudflare Workers
```

CI deploys automatically to GitHub Pages on push to `main` (see `.github/workflows/deploy.yml`). Manual deploys to Cloudflare Workers use `npm run deploy` (requires `wrangler` auth).

## Architecture

**Stack:** React 19 + TypeScript, MUI v7, React Router v6, Vite 7, deployed as Cloudflare Workers SPA (static assets).

**Entry point:** `src/main.tsx` wraps the app in `BrowserRouter` + MUI `ThemeProvider`. The theme (`src/theme.ts`) defines the brand palette (primary orange `#d47311`, off-white background `#f8f7f6`, dark text `#181411`) and typography (Manrope font).

**Routing** is flat in `src/App.tsx`:
- `/` → `Home` (Hero + IntroSection + AboutSection + ProjectsSection)
- `/projects` → `Projects` → `ProjectsList`
- `/projets/:id` → `ProjectDetail` (dynamic project gallery)
- `/photo` → `Photo`
- `/contact` → `Contact`

**Project data** lives entirely in `src/data/projects.ts` as a `projectsData` array. Images are resolved at build time via `new URL('../assets/...', import.meta.url).href`. To add a new project: add images to `src/assets/<folder>/`, then append an entry to `projectsData`.

**Assets:** `src/assets/` holds all project images organized by project subfolder. `public/` holds the site logo (`Logo-site-luc.png`). `src/assets/Logo-site-luc-titre.png` is the logo with title text used in the Header.

**No backend, no tests, no state management library.** All data is static.
