# AI/ML Engineer Roadmap — Website

A static website with the one best AI/ML engineer plan (November 2026 → August 2027),
built for a learner who has finished Python + OOP and NumPy, is learning Pandas through
the CampusX DSMP mentorship program, and can watch at most 1 hour of lectures per day.

No build step. No server. No environment variables. Just static files.

## Files

- `index.html` — the full roadmap (English)
- `styles.css` — styling
- `app.js` — month progress checkboxes, saved in the visitor's browser (localStorage)

## Deploy on Vercel (2 ways)

### Option A — Vercel CLI (fastest, no GitHub needed)

```bash
npm i -g vercel
cd ai-ml-roadmap-website
vercel
```

Answer the prompts (accept the defaults), and Vercel gives you a live URL.
Run `vercel --prod` afterwards to promote it to the production URL.

### Option B — GitHub import

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and choose **Import Git Repository**.
3. Pick the repo, leave **Framework Preset** as **Other**,
   leave the build command and output directory empty (defaults),
   and click **Deploy**.

## Notes

- Progress checkboxes save in the visitor's own browser only; they do not
  sync across devices and are not shared with anyone.
- External playlist links were verified in October 2026. Two sources are named
  without a direct link (CampusX PyTorch playlist, StatQuest) because their exact
  playlist URLs could not be verified — search the channel name on YouTube.
