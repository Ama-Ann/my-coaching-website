# My Coaching Website

Source code for a life &amp; executive coaching website. Static HTML/CSS/JS, no build step.

Live at: https://hai-pham-coaching.netlify.app

## Deployment

Hosted on Netlify, serving directly from the `main` branch root (publish directory `.`,
no build command). Pushing to `main` auto-deploys once continuous deployment is linked
in the Netlify dashboard (Site settings → Build & deploy → Link repository).

GitHub Pages was tried first but is now disabled — it had repeated platform-side
deployment failures unrelated to this repo's content. Netlify was chosen as a more
reliable, commonly-used alternative with the same git-push-to-deploy workflow.

**Security note:** deploy from git (`main` branch), not from local disk (`netlify deploy
--dir=.` run from the project folder). The project folder contains gitignored files
(resume, personal photos, raw LinkedIn exports) that are excluded from the git repo but
would be uploaded if deployed directly from disk. Deploying from the linked GitHub repo
only ever sees what's actually committed, which is the safe boundary.

## Pages

- `index.html` — Home
- `about.html` — About
- `services.html` — Services (life coaching + business/executive coaching)
- `blog.html` — Blogs
- `contact.html` — Contact form, submits via Web3Forms (see below)

## Getting Started

Open `index.html` directly in a browser, or serve the folder locally, e.g.:

```
npx serve .
```

## Contact form

The contact form (`contact.html`, `js/main.js`) submits to [Web3Forms](https://web3forms.com/)
using the access key embedded in `contact.html`, which emails submissions straight to
hai.pham@erickson.vn. Web3Forms access keys are meant to be public/client-side (like a site
key), so this is safe to commit. If the key ever needs to be rotated, generate a new one at
web3forms.com and swap the `value` of the `access_key` hidden input.
