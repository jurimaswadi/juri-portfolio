# Juri Maswadi’s portfolio

A personal portfolio for Juri Maswadi, an Information Technology student at King Abdulaziz University. Built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide icons.

## Run locally

Requires Node.js 20.9+ and pnpm (the exact package-manager version is recorded in `package.json`).

```sh
cd ~/juri-portfolio
pnpm install
pnpm dev
```

Open http://localhost:3000. For a production preview:

```sh
pnpm lint
pnpm build
pnpm start
```

## Structure

- `src/app`: page composition, layout, metadata, global design tokens, and favicon.
- `src/components`: reusable portfolio sections and isolated interactive components.
- `src/data/portfolio.ts`: typed experience, leadership, volunteering, skills, certifications, and contact content.
- `src/lib/utils.ts`: class-name composition.

Most content renders on the server. Only navigation and the interactive cube use client-side React. The cube is a six-face CSS 3D illustration, not a puzzle solver: drag it, use arrow keys or the rotation buttons, and press Home or the reset button to restore its starting orientation. Motion values update transforms without React rerenders. It does not use WebGL, textures, or a continuous animation loop.

## Design and accessibility

Warm light neutrals with charcoal text, Cormorant Garamond display type, Manrope body text, and Noto Sans Arabic for volunteering titles. Fonts are served by Next.js, with no runtime Google Fonts requests. The first build needs network access to fetch the font files.

The supplied six-color palette lives in CSS custom properties. Rose is the primary interactive accent; the other colors appear in small details, the original brick-flower illustration, and the cube. Cards use a consistent 24px radius, with pill-shaped chips and buttons. The chosen direction is an airy editorial portfolio: design variance 6/10, motion intensity 3/10, visual density 3/10.

Navigation has section tracking, a mobile disclosure menu, Escape handling, and a skip link. The flower assembles once; reduced-motion preferences disable decorative animation and smooth scrolling. The cube supports keyboard, pointer, touch, and explicit single-click controls. Arabic titles have `lang="ar"` and `dir="rtl"` independently of English metadata. No fake proficiency percentages, event links, achievements, or credential links are used.

## Content TODOs

- Add volunteering years when confirmed; only supplied day/month ranges are shown.
- Add verified volunteering and certification URLs if provided. Cards are intentionally informational until then.
- Add missing certification issue dates only when confirmed.
- Add a canonical URL and social preview image after a live site domain is selected. A GitHub source repository is not a hosted website.
- Update current roles and junior standing as they change. Dates are maintained explicitly, not inferred.

## GitHub

Repository: https://github.com/jurimaswadi/juri-portfolio

Commit identity is configured locally as Juri Maswadi `<jurimaswadi@gmail.com>`.

If authentication ever needs to be restored:

```sh
gh auth login -h github.com
git push -u origin main
```

No environment variables or backend services are required. Never commit credentials or `.env` files. Use any hosting provider supporting Next.js to publish the website; repository creation alone does not deploy it.
