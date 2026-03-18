# AI Advisory — Landing Page

KI-Beratungs-Landingpage für KMUs & Mittelstand mit eingebettetem Multi-Step Quiz.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Sprache:** Deutsch

## Lokal starten

### Voraussetzungen
- Node.js 18 oder neuer → https://nodejs.org

### Schritte

1. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```
   Seite öffnet sich unter: http://localhost:3000

3. **Build prüfen:**
   ```bash
   npm run build
   ```

## Auf Vercel deployen

1. Konto erstellen auf https://vercel.com
2. Repository auf GitHub pushen
3. Auf Vercel: „New Project" → GitHub-Repo auswählen → „Deploy"
4. Fertig — keine weiteren Einstellungen nötig.

## Anpassungen

| Was | Wo |
|---|---|
| Firmenname | `components/Nav.tsx`, `components/Footer.tsx`, `app/layout.tsx` |
| Farben | `tailwind.config.ts` → `colors.accent` |
| Quiz-Fragen | `components/Quiz.tsx` → Konstanten am Dateianfang |
| Calendly-Links | `components/Quiz.tsx` → `href="#"` in Step 4 ersetzen |
| Texte | Direkt in den jeweiligen Komponenten |
