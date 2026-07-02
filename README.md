# My Coaching Website

Source code for a life &amp; executive coaching website. Static HTML/CSS/JS, no build step.

Live at: https://ama-ann.github.io/my-coaching-website/

## Deployment

Hosted on GitHub Pages, serving directly from the `main` branch root. Pushing to `main`
auto-deploys — no build/CI step needed since it's plain HTML/CSS/JS.

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
minhhai.pham@gmail.com. Web3Forms access keys are meant to be public/client-side (like a site
key), so this is safe to commit. If the key ever needs to be rotated, generate a new one at
web3forms.com and swap the `value` of the `access_key` hidden input.
