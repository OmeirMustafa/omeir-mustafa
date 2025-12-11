# CHANGELOG - OMEIR OS v3.0

## [v3.0.0] - Tactical Reactor Upgrade (Hardcore Animations Mode)

### 🚀 Major Features
- **Tactical-OS Core**: Implemented full-site cinematic HUD interface.
- **Hardcore Animations**: 
    - `globals.css`: GPU-accelerated keyframes (`scanline`, `holoPulse`, `reticleSpin`, `holoSweep`).
    - `motion.ts`: Standardized physics presets (`spring`, `snap`, `subtle`).
    - `HoloPanel`: Glassmorphic reactor panels with staggered bracket reveals.
- **Hero Section**: 
    - Full-screen parallax environment (2-5% depth).
    - Particle engine (Canvas).
    - Holographic text sweep animation.
- **Navigation**: Floating pill design with "ONLINE" live status indicator and motion-layout active states.
- **Smart Contact**: Encrypted comms modal with sound-design visual cues (glitch/scanline).

### ♻️ Refactoring & Cleanup
- **Unified Master Panel**: Replaced ad-hoc section styles with `HUDSectionWrapper` across `/`, `/services`, `/portfolio`, `/insights`, `/contact`.
- **Removed Legacy Components**:
    - `ArchitectureGrid` (Deprecated)
    - `ModulesGrid` (Deprecated)
    - `ServicesGrid` (Deprecated)
    - `ReactorCoreHUD` (Merged into `HUDSectionWrapper`)
- **Performance**:
    - Added `prefers-reduced-motion` global override.
    - Optimized particle count for mobile.

### 🛠️ Architecture
- **Tech Stack**: Next.js 15 (App Router), Tailwind CSS v4, Framer Motion.
- **Assets**: Standardized diagrams in `/public/diagrams/`.
