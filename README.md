# levi-x00.github.io

Personal portfolio of Levi, Senior DevOps Engineer based in Jakarta, Indonesia.
Cloud, DevSecOps, and serverless by day; cybersecurity and agentic AI by curiosity.

Built with Next.js and the Argon design system, based on the
[developer-portfolio](https://github.com/1hanzla100/developer-portfolio) template (MIT).

## Edit content

Everything shown on the site lives in `portfolio.ts`: greetings, social links,
skills, proficiency bars, education, experience, projects, feedbacks, and SEO.
Empty arrays hide their section.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build for GitHub Pages

```bash
npm run build
npm run export
```

The static site lands in `out/`.
Publish that directory to GitHub Pages (for example with an Actions workflow
that uploads `out/` as the Pages artifact).
