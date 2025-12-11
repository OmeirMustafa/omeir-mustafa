# OMEIR OS v3.0 — TACTICAL REACTOR UPGRADE

## System Status
**Version**: 3.0.0 (Hardcore Animations Mode)
**Architecture**: Next.js 15, React 18, Tailwind v4
**Status**: ALL SYSTEMS GREEN

## Quick Start

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Access the tactical interface at `http://localhost:3000`.

### Production Build
```bash
npm run build
npm start
```

## Features
- **Tactical HUD Interface**: Global `HUDSectionWrapper` with scanlines and cyan grid.
- **GPU-Accelerated Animations**: Optimized pure-CSS and Framer Motion keyframes.
- **Smart Contact**: Encrypted channel modal with Gmail/Mailto integration.
- **RAG Pipeline**: SVG visualization in public assets.

## Deployment
This project is optimized for **Vercel**.
1. Push to GitHub.
2. Import project in Vercel.
3. Framework Preset: `Next.js`.
4. Deploy.

## File Structure
- `src/components/ui`: Core HUD atoms (`HoloPanel`, `ReticleCursor`, `HUDNavigation`).
- `src/components/sections`: Page-specific compositions.
- `src/config/motion.ts`: Physics-based animation presets.
- `public/diagrams`: Blueprint SVGs.

---
*ENGINEERED FOR PRECISION.*
