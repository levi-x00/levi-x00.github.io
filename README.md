# levi-x00.github.io

Levi's portfolio — a brutalist, terminal-styled static site built with Next.js
(App Router) and Tailwind CSS. Design based on
[1hanzla100/1hanzla100.github.io](https://github.com/1hanzla100/1hanzla100.github.io).

## Develop

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

`next.config.ts` sets `output: "export"`, so the build writes a fully static
site to `out/`. Serve it locally with `python3 -m http.server -d out`.

## Test

```bash
npm test
```

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the static
export and publishes it via GitHub Pages (repository Settings → Pages →
Source: **GitHub Actions**).

## Content

All portfolio content lives in `data/*.ts` (hero, skills, proficiency,
education, experience, projects, testimonials, social links). SEO metadata is
in `app/layout.tsx`. Sections with empty data arrays are hidden automatically.
The contact card fetches the GitHub profile at build time and falls back to
static data if the API is unavailable.