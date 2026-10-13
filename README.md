# Snekkerbore AS

Nettside bygget med Vite, React 19, React Router 7 og Tailwind v4 (CSS-first
`@theme`-tokens i `src/index.css`). Samme arkitektur som SASO Eiendom-siden,
men med en egen visuell stil: mørkt antrasitt-design med gul aksentfarge
fra logoen. Fargene ligger i `src/index.css` (`coal-*` = bakgrunner,
`chalk-*` = tekst, `safety-*` = gul).

## Komme i gang

```bash
npm install
npm run dev
```

## Innholdsarkitektur

Innhold som naturlig vokser over tid (pressesaker, podcastopptredener,
Instagram-lenker, betrodde merkevarer/leverandører) ligger i egne filer under
`src/data/` — oppdater disse i stedet for å røre komponentkoden:

- `src/data/trustedBrands.js` – samarbeidspartnere (logoer i `public/logos/`, vises i hvitt som standard)
- `src/data/presse.js` – presseomtale
- `src/data/podcasts.js` – podcast-/videoopptredener
- `src/data/socialReels.js` – Instagram Reels

Seksjoner som ikke har noe innhold ennå (tom liste) skjuler seg selv — ikke
slett komponentene, bare la datafilen stå tom til dere har innhold.

## Innhold som gjenstår

- [x] Riktig logo/favicon (gul sagblad-logo, se `src/assets/` og `public/`)
- [ ] Ekte bilder i Prosjekter (Hero, Om oss, Omtaler og Instagram-ruter har bilder i `public/bilder/`)
- [ ] Faktiske tjenester, priser og kontaktinfo (telefon/e-post er plassholdere)
- [ ] Koble skjemaene til riktig varsling (Netlify Forms er satt opp, men sjekk mottaker-e-post i Netlify-dashboardet)
- [x] Gulfargen (`--color-safety-500`) er hentet fra logoen (#fcbb32)

## Deploy

Satt opp for Netlify (`netlify.toml`): `npm run build` → `dist/`. Følg samme
fremgangsmåte som for SASO-siden — ny GitHub-repo, koblet til en ny
Netlify-konto/side.
