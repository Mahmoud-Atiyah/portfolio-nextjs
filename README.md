# Next.js Portfolio

Modern personal portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- shadcn/ui (Radix UI primitives)
- Framer Motion
- ESLint

## Getting Started

Prerequisites: Node.js 18+ and npm.

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - run the production build
- `npm run lint` - lint the codebase

## Project Structure

- `src/app` - App Router routes and layout
- `public` - static assets
- `next.config.ts` - Next.js config
- `tailwind.config.js` / `postcss.config.js` - styling setup

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import the repo into Vercel.
3. Use the default build settings (`npm run build`).

Set `NEXT_PUBLIC_SITE_URL` in your deployment environment to match your production domain so metadata, sitemap, and robots use the correct base URL.

### Self-hosting

```bash
npm run build
npm run start
```

## Publish to GitHub

1. Create a new empty repo on GitHub.
2. Add the remote:

```bash
git remote add origin https://github.com/<user>/<repo>.git
```

3. Push the current branch:

```bash
git push -u origin master
```

If your default branch is `main`, replace `master` with `main`.
