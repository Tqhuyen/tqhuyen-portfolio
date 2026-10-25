# tqhuyen.vercel.app

Portfolio of Trần Quang Huyên: a single static page built with Next.js and hosted on Vercel's free Hobby plan.

## Edit the content

Everything the page says (experience, papers, projects, awards, skills) lives in
`src/content/profile.ts`. Change it there and the page, the stats and the
share image follow. Styles are in `src/app/globals.css`; colours and fonts
follow the ui-ux-pro-max design system used for the GitHub README.

The page deliberately leaves out the phone number, date of birth, ID card,
transcripts and certificate scans.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # what Vercel runs
```

## Deploy

Pushing to `master` on GitHub deploys to https://tqhuyen.vercel.app automatically
(Vercel project `tqhuyen`, connected to this repo). Pushes to other branches get
a preview URL instead.

To deploy straight from this folder without pushing:

```bash
vercel deploy --prod
```
