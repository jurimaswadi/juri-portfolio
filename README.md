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

Most content renders on the server. Navigation, the brick robot, and the cube are isolated client components. The robot assembles once when at least half visible, with front-facing proportions that stay upright.

The cube uses 26 CSS 3D cubies with 54 stickers. Its initial arrangement is produced by six valid quarter-turns from a solved cube. When 60% visible, it reverses those turns in roughly 3–4 seconds and stays solved until the page is remounted. There are no visitor controls, WebGL dependencies, color swaps, or continuous animation loops. Reduced motion shows the assembled robot and resolves the cube immediately on entry. The pure cube model is in `src/lib/cube.ts`; run `pnpm test` for its invariants.

## Design and accessibility

Warm light neutrals with charcoal text, Cormorant Garamond display type, Manrope body text with all volunteering content presented in English. Fonts are served by Next.js, with no runtime Google Fonts requests. The first build needs network access to fetch the font files.

The supplied six-color palette lives in CSS custom properties. Rose is the primary interactive accent; the other colors appear in small details, the original brick-robot illustration, and the cube. Cards use a consistent 24px radius, with pill-shaped chips and buttons. The chosen direction is an airy editorial portfolio: design variance 6/10, motion intensity 3/10, visual density 3/10.

Navigation has section tracking, a mobile disclosure menu, Escape handling, and a skip link. Reduced-motion preferences disable decorative animation and smooth scrolling. The robot and cube have concise visual descriptions and no focusable controls. Leadership presents the chronological IEEE progression first, followed by five organization cards. Three abstract conference-pass holders decorate the background without covering content. No fake proficiency percentages, event links, achievements, or credential links are used.

## Content TODOs

- Add missing volunteering years when confirmed. Sukoon is dated December 2022 and records five volunteer hours; its unspecified location is omitted.
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
