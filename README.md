# Jai Krishna Reddy — Portfolio

A futuristic, HUD/systems-inspired portfolio built with React, Tailwind CSS, and Framer Motion.

## Design concept
- **Palette:** near-black charcoal (`#0B0F14`) base, phosphor-mint (`#4FF2C4`) and soft violet (`#7C8CFF`) accents — evoking a diagnostic/scanner interface.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/data).
- **Signature motif:** a scanline sweep and corner-bracket "targeting" frames on hover, referencing the chest X-ray segmentation project — the whole page reads like a system being scanned and rendered in real time.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Edit content
All resume content (experience, projects, skills, contact info) lives in the `PROFILE`, `EXPERIENCE`, `PROJECTS`, `SKILLS`, and `CERTS` objects at the top of `src/App.jsx` — update those to keep the site current.
