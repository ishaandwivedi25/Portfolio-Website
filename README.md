# Ishaan Dwivedi Portfolio (Next.js)

A calm, editorial-style personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Run directly on GitHub (GitHub Pages)

This repo is configured to deploy automatically with GitHub Actions.

### 1) Push to `main`
The workflow at `.github/workflows/deploy.yml` runs on every push to `main` and exports the site to static files.

### 2) Enable Pages in repo settings
In **GitHub → Settings → Pages**:
- **Source**: **GitHub Actions**

### 3) Wait for deployment
After the workflow succeeds, your site will be available at:

```text
https://<your-github-username>.github.io/<repository-name>/
```

> `next.config.mjs` already sets the correct `basePath` and `assetPrefix` during GitHub Actions builds.

## Edit content

Primary content is centralized in:

- `data/site.ts`

Update experience, projects, leadership, certifications, updates, and contact details there.

## Replace profile image

The homepage uses a placeholder block in `app/page.tsx`.

1. Add your image to `public/` (for example, `public/profile.jpg`).
2. Replace the placeholder `<div>` with `next/image`.
3. Keep the same container size classes for layout consistency.

## Add projects

1. Open `data/site.ts`.
2. Add a new object in the `projects` array with `title`, `context`, `challenge`, `approach`, `contribution`, `methods`, and `outcome`.
3. The homepage and `/projects` page update automatically.

## Build for production

```bash
npm run build
npm run start
```
