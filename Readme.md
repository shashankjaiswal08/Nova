# NOVA — One workspace for modern teams

A modern portfolio/landing site built with Next.js (App Router).

## Project

NexaFlow is a responsive landing page and portfolio site assembled from modular React components. It's intended to showcase product features, pricing, testimonials, and a product demo/dashboard section.

## Features

- Modular component structure for the landing page
- Hero, Features, Pricing, FAQ, Testimonials, and Footer sections
- Motion and animation helpers for smooth interactions
- Easy to update content driven from `data/landing.js`

## Tech Stack

- Next.js (App Router)
- React
- Tailwind/PostCSS (configured via `postcss.config.mjs`)
- Vanilla CSS in `app/globals.css`

## Folder Structure (key files)

- `app/` — Next.js App directory (routes & layout)
- `components/landing/` — Landing page UI components
- `data/landing.js` — Content used by the landing components
- `next.config.mjs`, `package.json` — project config and scripts

## Local Setup

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Start the production server (after build)

```bash
npm run start
```

Note: If your package scripts differ, check `package.json` for exact commands.

## Deployment

This project can be deployed to any platform supporting Next.js (Vercel, Netlify, Cloudflare Pages with adapters, etc.). For Vercel, simply connect the repository and select the root as the project directory — Vercel will detect Next.js automatically.

## Contributing

Contributions are welcome. Keep changes focused and open a PR with a clear description of intent.

## License

Add a license file or specify the license in `package.json` as needed.
