# Rushdi Nura — Portfolio

A React + Vite portfolio styled around **The Engineering Fieldbook**: a warm editorial layout, real application screenshots, a numbered project explorer, and restrained motion.

## Requirements

- Node.js 18 or later
- npm

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, copy the environment template with:

```powershell
Copy-Item .env.example .env
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## EmailJS configuration

The contact form requires these Vite environment variables:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Fill them in `.env` using the values from your EmailJS account. The provided `.env.example` intentionally contains empty placeholders. If these values are missing, the form displays a configuration message and directs visitors to the direct email link instead of pretending a message was sent.

## Quality checks

```bash
npm run lint
npm run build
npm run preview
```

The project keeps Tailwind CSS 3 and the existing Vite setup. No backend is needed for the static portfolio.

## CV download

The CV download uses the verified two-page A4 PDF at `src/assets/RUSHDI-NURA-CV.pdf` and names the downloaded file `Rushdi-Nura-CV.pdf`. Keep this source PDF updated when your professional details change.

## Updating the portfolio

- Project content and repository/demo links live in `src/data/projects.js`.
- Each project's `image` value must match an image filename stem in `src/assets/projects/`.
- `src/utils/images.js` maps the active screenshots to display assets. Cropped `*-preview.png` assets remove browser chrome, taskbars, or letterboxing where present; the original screenshots are retained. The Jimmitti preview uses a cleaned capture with a partially visible bottom label removed. Update the explicit map when adding a project so unused screenshots are not bundled.
- Skill categories live in `src/data/skills.js`.
- Certificate images live in `src/assets/certificates/` and are listed by `src/utils/images.js`.
- The verified CV currently used for the download is `src/assets/RUSHDI-NURA-CV.pdf`.
