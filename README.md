# Abhiraksha landing page

Marketing/landing site for Abhiraksha, built with Next.js (App Router). Separate from
`anti-fraud-monitoring/frontend`, which is the internal product itself.

## Develop

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

- `app/page.js` — assembles the page from `app/components/*`
- `app/components/*` — one component per section (Hero, Stats, HowItWorks, ProofPanel,
  CrossEntity, DataSources, DetectionEngine, Deliverable, Fit, Security, Faq, CtaSection, Footer)
- `app/components/ScanForm.jsx` — the only client component; everything else renders on
  the server
- `app/globals.css` — design tokens and styles, ported from the original single-file concept
- Fonts: DM Sans (body) via `next/font/google`, Geist and Geist Mono (headings/mono) via the
  `geist` package
