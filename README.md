# tqhuyen.github.io · tqhuyen.vercel.app

Portfolio of Trần Quang Huyên: a single static page built with Next.js, published to GitHub Pages (https://tqhuyen.github.io) and to Vercel's free Hobby plan (https://tqhuyen.vercel.app).

## Edit the content

Everything the page says (experience, papers, projects, awards, skills) lives in
`src/content/profile.ts`. Change it there and the page and the stats follow.
The share image is a fixed file, `src/app/opengraph-image.png`; replace it if
the name or role changes. Styles are in `src/app/globals.css`; colours and fonts
follow the ui-ux-pro-max design system used for the GitHub README.

The page deliberately leaves out the phone number, date of birth, ID card,
transcripts and certificate scans.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # what Vercel runs
STATIC_EXPORT=1 SITE_URL=https://tqhuyen.github.io npm run build   # what GitHub Pages gets, in out/
```

## Deploy

Pushing to `master` on GitHub deploys to both hosts automatically:

- https://tqhuyen.vercel.app: Vercel project `tqhuyen`, connected to this repo.
  Pushes to other branches get a preview URL instead.
- https://tqhuyen.github.io: `.github/workflows/github-pages.yml` builds the
  static export and pushes it to the `Tqhuyen/Tqhuyen.github.io` repository,
  using the deploy key stored in this repo's `PAGES_DEPLOY_KEY` secret.

To deploy straight from this folder without pushing:

```bash
vercel deploy --prod
```
