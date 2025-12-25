# Omeir Mustafa Portfolio - Luffy Redesign 🏴‍☠️

A conversion-first Digital & Product Architect site, redesigned with the "Luffy" aesthetic (Adventure, Optimism, Organic).

## 🎨 Design System ("The Grand Line")

### Palette
*   **Canvas**: `#F8F8F7` (Paper-like base)
*   **Adobe Slate**: `#334155` (Primary Text)
*   **Adventure Blue**: `#1E88E5` (Primary Accent - Trust & Horizons)
*   **Optimism Yellow**: `#F2C94C` (Secondary Accent - Energy & CTAs)
*   **Spirit Red**: `#EF4444` (Micro-accent - Passion)

### Typography
*   **Headings**: `Outfit` (Bold, Rounded) - evokes friendliness and impact.
*   **Body**: `Inter` (Clean, Legible) - maintains professional conversion focus.

### Motion Principles
*   **Spring Easing**: `cubic-bezier(0.22, 1, 0.36, 1)`
*   **Float**: Gentle vertical oscillation for hero elements.
*   **Hover**: Micro-lift with shadow expansion (Project Cards).

---

## 🛠️ Build & QA Commands

### Prerequisites
*   Node.js 18+
*   npm

### Commands

**Install Dependencies**
```bash
npm ci
```

**Development Server**
```bash
npm run dev
```

**Production Build**
```bash
npm run build
```

**Lint Code**
```bash
npm run lint
```

**Full CI/QA Check (Windows/PowerShell)**
```powershell
./scripts/ci-qa.ps1
```
*Runs Depcheck, Linting, and Build Verification.*

---

## 🧪 Testing & Verification

### CI/QA Script (`scripts/ci-qa.ps1`)
This script reinforces the "Definition of Done". It performs:
1.  **Dependencies**: Checks for unused packages using `depcheck`.
2.  **Linting**: Runs `eslint` to ensure code quality and no errors.
3.  **Build**: excutes `next build` to verify production readiness.

**Pass Criteria:**
*   Exit Code 0 on all steps.
*   No ESLint errors.
*   Successful Typescript compilation.

---

## 📂 Project Structure

```
├── public/              # Static assets (images, icons)
├── scripts/             # CI/QA automation scripts
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   │   ├── case-studies # Case Study specific modules
│   │   ├── sections/    # Full-page sections (Hero, Projects, Contact)
│   │   └── ui/          # Reusable UI atoms (Buttons, Inputs, Cards)
│   ├── lib/             # Utilities and helpers
│   └── styles/          # Global styles (Tailwind)
```

---

## 🚀 Deployment

**Vercel** is the recommended deployment platform.

1.  Push the `feat/luffy-redesign` branch to GitHub.
2.  Import the project in Vercel.
3.  The `next.config.ts` and `package.json` are pre-configured for Vercel.

**Rollback:**
If a deployment fails or critical bug is found:
1.  Revert the merge commit in Git.
2.  Redeploy the previous stable commit on Vercel via the dashboard.

---

## © License & Copyright
This project is a personal portfolio. "One Piece" and "Luffy" references are conceptual/aesthetic inspiration only and do not use licensed assets.
