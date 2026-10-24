# Rushdi Nura — Portfolio

React 18 + Vite single-page portfolio. Sections: Hero, Work (5 case studies + 7 indexed projects), Stack, Background (experience, education, certificates), Contact.

## Run

```bash
npm install
cp .env.example .env   # optional, see "Contact form"
npm run dev
npm run lint
npm run build && npm run preview
```

Node 18+.

## Where content lives

| What | File |
| --- | --- |
| Projects, case-study text, links | `src/data/projects.js` |
| Skill groups | `src/data/skills.js` |
| Certificates and scans | `src/data/credentials.js` |
| Screenshots (WebP, ≤1366 px) | `src/assets/img/projects/`, mapped in `src/utils/images.js` |
| CV download | `src/assets/RUSHDI-NURA-CV.pdf` |
| Page title, meta, canonical URL, JSON-LD | `index.html` |
| Sitemap / robots | `public/sitemap.xml`, `public/robots.txt` |
| Security and cache headers (Vercel) | `vercel.json` |

Case-study claims in `projects.js` are taken from each repository's README. If a README changes (for example, tests are now run, or a feature ships), update the matching `decisions` / `open` lines.

## Contact form

Without configuration the form validates, then opens the visitor's email app with the message prefilled and says plainly that nothing has been sent. To send in-page, set these in `.env` (and in the Vercel project settings):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

The EmailJS public key is designed to be public; restrict it by allowed domain in the EmailJS dashboard. The template should use the variables `name`, `email`, `subject`, `message`. A hidden honeypot field filters basic bots. The EmailJS library is loaded only when a message is sent.

## Production URL

`https://portfolio-react-phi-self.vercel.app/` appears in `index.html` (canonical, Open Graph, JSON-LD), `public/sitemap.xml` and `public/robots.txt`. If you move to a custom domain, update those four places and the CV.

## Deploying (Vercel)

Framework preset Vite, build `npm run build`, output `dist`. `vercel.json` adds security headers and long-lived caching for hashed assets.

## Notes

- `archive/unused-assets/` holds the original PNG/JPG screenshots and certificate scans that are no longer used by the site. Delete it or keep it out of the repository.
- Fonts (Newsreader, IBM Plex Sans, IBM Plex Mono) load from Google Fonts with `display=swap`.
