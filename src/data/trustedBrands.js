// Samarbeidspartnere (leverandører, byggefirma, verktøymerker). Seksjonen
// skjuler seg selv så lenge listen er tom.
//
// Slik legger du til en partner:
//   1. Legg logofilen i /public/logos/ (helst PNG eller SVG med gjennomsiktig
//      bakgrunn).
//   2. Legg til en linje under.
//
// Felter:
//   name        – firmanavn (brukes som alt-tekst)
//   src         – sti til logoen
//   href        – (valgfritt) lenke til partnerens nettside
//   keepColors  – (valgfritt) true = vis logoens egne farger. Standard er at
//                 logoen vises i hvitt så den passer det mørke designet.
export const trustedBrands = [
  // { name: 'DEWALT', src: '/logos/dewalt.png', href: 'https://www.dewalt.no' },
  // { name: 'Byggmakker', src: '/logos/byggmakker.svg', keepColors: true },
]
