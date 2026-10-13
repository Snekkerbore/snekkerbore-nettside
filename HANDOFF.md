# Status og kontekst – Snekkerbore AS

Dette dokumentet oppsummerer beslutninger og gjenstående steg fra
planleggingssamtalen, slik at en ny Claude Code-økt (eller en ny utvikler)
kan plukke opp arbeidet uten å ha sett den samtalen.

## Bakgrunn

Nettsiden er bygget etter samme mal/arkitektur som SASO Eiendom
(`saso-app/www.saso.no`), på forespørsel fra Sander, for kameraten Alexander
Børes snekkerfirma. Den skal **fungere på samme måte og ha mange av de
samme funksjonene**, men **se helt annerledes ut** – SASOs varme/jordnære
stil passer ikke en snekkerbedrift.

## Merkevarebeslutninger (tatt i planleggingssamtalen)

- **Firmanavn:** Snekkerbore AS
- **Visuell stil:** Industrielt/håndverk-preget, inspirert av **Snickers
  Workwear og DEWALT** – gul/sort fargepalett, skarpe kanter (ikke
  avrundede slik SASO har), Archivo (display/overskrifter) + Inter (brødtekst)
  i stedet for SASOs Unbounded/Fraunces/Instrument Sans.
- Fargetokens ligger i `src/index.css` (`--color-safety-*` for gult,
  `--color-ink-*` for sort/mørk grå, `--color-steel-*` for lyse bakgrunner).
  Bytt disse når dere har en eksakt merkevareprofil (f.eks. nøyaktig
  DEWALT-gul).

## Hva er bygget

Full fungerende side med samme seksjonsstruktur som SASO, tilpasset en
snekkerbedrift – se `src/pages/Home.jsx` for rekkefølgen. Innholdsarkitektur
(data-filer for ting som vokser over tid) er forklart i `README.md`.

Alt innhold (tekst, "prosjekter", tjenesteliste osv.) er **plassholdere**.
Se sjekklisten i `README.md` for hva som gjenstår av ekte innhold.

`npm run build` er verifisert til å fungere feilfritt.

## Gjenstående steg (blokkert ved siste samtale)

1. **GitHub-tilgang** – Repo opprettet: `snekkerbore/snekkerbore-nettside`
   (privat, tom, eid av Alexanders egen GitHub-konto `snekkerbore` – IKKE
   SASO-app-organisasjonen). Claude sin GitHub-tilkobling har **ikke** fått
   tilgang til denne repoen ennå. Må fikses via
   [claude.ai/connect-github](https://claude.ai/connect-github) – Alexander
   må installere/gi Claude-appen tilgang til repoen. Når det er gjort:
   push dette prosjektet dit (`git remote add origin ...` + `git push`).
2. **Netlify** – ikke satt opp ennå. Samme fremgangsmåte som SASO: ny
   Netlify-konto/side koblet til GitHub-repoen over, eid av Alexander (ikke
   Sanders eksisterende Netlify-team).
3. Når begge er på plass: koble et domene (snekkerbore.no el.l.) på samme
   måte som ble gjort for saso.no (A/CNAME-oppdatering hos
   domeneregistrar, uten å flytte DNS/nameservers, for å unngå å rote med
   evt. e-postoppsett – se hvordan det ble løst for saso.no hvis det
   dukker opp spørsmål om dette).

## Eierskap

Beslutning tatt i samtalen: Alexander skal eie GitHub-repo og
Netlify-konto siden det er hans firma. Sander kan legges til som
samarbeidspartner/collaborator på repoen for å fortsette å bidra med kode.
