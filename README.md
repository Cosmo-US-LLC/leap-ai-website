# Leap AI Website

Starter scaffold for building marketing and product pages with React, Vite, Tailwind CSS 4, and shadcn-style UI primitives.

## Stack
- React 19 + Vite 7
- Tailwind CSS 4 with `@tailwindcss/vite`
- shadcn-style primitives (Button, Accordion) using Radix UI, `class-variance-authority`, `tailwind-merge`, and `clsx`

## Getting started
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Build output lives in `dist/` for static hosting (Vercel/Netlify/Cloudflare Pages/etc).

## Project structure
- `src/main.tsx` – entry point
- `src/App.tsx` – root component
- `src/index.css` – Tailwind 4 setup and theme tokens
- `src/assets/` – images, icons, fonts
- `src/components/` – UI primitives and layouts
- `src/pages/` – route-level pages (example `Home`)
- `src/lib/` – utilities (e.g., `cn`)

## Theming
Adjust tokens in `src/index.css` under `@theme` to match your brand (colors, fonts, radius).

## Next steps
- Add more shadcn/ui components (dialog, tabs, etc.).
- Wire real routes with `react-router-dom` if needed.
- Drop in your brand assets under `src/assets/`.
