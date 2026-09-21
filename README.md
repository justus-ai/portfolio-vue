# PortfolioVue

En personlig kursportfolio byggd med Vue 3 och Vue Router. Startsidan presenterar Justus, teknikområden och klickbara projektkort. Varje projekt har en egen detaljsida med beskrivning, teknik, kodexempel och resultatöversikt.

## Starta lokalt

```powershell
npm install
npm run dev
```

## Produktionsbygge

```powershell
npm run build
```

Projektet använder hash-baserad routing och `base` i `vite.config.js`, vilket gör det möjligt att publicera på GitHub Pages utan extra serverkonfiguration.
