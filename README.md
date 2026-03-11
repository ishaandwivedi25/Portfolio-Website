# Ishaan Dwivedi Portfolio (Next.js)

A calm, editorial-style personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on GitHub Pages (correct way)

If you see `README.md` at your Pages URL, your repository is currently publishing from a branch folder instead of from the GitHub Actions artifact.

### 1) Set Pages source correctly
In **GitHub → Settings → Pages**:
- **Source**: **GitHub Actions**

Do **not** use “Deploy from a branch” for this setup.

### 2) Push to `main`
This repository includes `.github/workflows/deploy.yml`, which:
- installs dependencies
- builds the Next.js static export
- uploads `out/` as the Pages artifact
- deploys it automatically

### 3) Confirm workflow success
In **GitHub → Actions**, make sure **Deploy Next.js site to GitHub Pages** completes successfully.

### 4) Open your live site
Your URL will be:

```text
https://<your-github-username>.github.io/<repository-name>/
```

> `next.config.mjs` already sets `basePath` and `assetPrefix` automatically in GitHub Actions.

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
