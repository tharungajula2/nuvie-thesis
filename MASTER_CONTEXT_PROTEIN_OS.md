# MASTER CONTEXT: PROTEIN OS
**Project Maturity State:** System-Complete / Founder-Ready
**Version:** 1.0 (Stabilized Architecture)

---

## 1. Project Identity
### The Thesis
**Protein OS** is not a website; it is a **Clinical Strategy Operating System** designed for high-performance protein brand founders and operators. It distills the chaotic biological, dietary, and market complexity of the Indian protein ecosystem into a guided, high-fidelity strategic journey.

### The Problem
Traditional brand presentations are static PDFs or shallow SaaS dashboards. They fail to communicate the *logic* of how a portfolio wins. Protein OS solves this by making the strategy navigable, cinematic, and data-driven.

---

## 2. High-Level Product Vision
### Cinematic Strategy Luxury
The app follows a **"Cinematic Strategy Luxury"** philosophy. 
- **Identity:** It is a private founder/operator artifact.
- **Tone:** Clinical, restrained, intentional, and expensive.
- **Not for:** It is NOT a generic ecommerce site, a nutrition tracker, or a shallow SaaS dashboard.
- **The Obsidian World:** The UI uses a deep black ("Obsidian") background with warm ivory text and muted gold highlights to create a focused, high-end environment.

---

## 3. Project History & Build Journey
1.  **Phase 0: Foundation**: Initial setup of a Next.js 15+ environment with Tailwind CSS and an "Obsidian" theme.
2.  **Phase 1: Cinematic Logic**: Implementation of the `CinematicHero` scrollytelling GSAP engine to replace static landing pages.
3.  **Phase 2: Data Architecture**: Establishing the `NavItem`, `Product`, and `Occasion` interfaces to drive UI from centralized logic.
4.  **Phase 3: Module Expansion**: Building out the 7 flagship OS modules (Strategy, Economics, Channels, etc.) as distinct strategic layers.
5.  **Phase 4: Navigation Flattening**: Moving from complex "Labs" dropdowns to a **Canonical 10-Step Linear Journey**.
6.  **Phase 5: Asset Integration**: Replacing placeholders with high-fidelity transparent PNG products and matching the UI ambience (theme colors) to the assets.
7.  **Phase 6: Final Stabilization**: Precision navbar repairs, removing internal card-holders for "floating" assets, and implementing global build stability.

---

## 4. App Architecture Overview
- **Core Framework**: Next.js 15+ (App Router).
- **Styling**: Tailwind CSS + CSS Variables (`globals.css`).
- **Animation**: GSAP (GreenSock) for high-precision scrollytelling and transitions.
- **Data-Driven**: All major surfaces (Products, Occasions, Modules) are mapped from the `app/data/` directory.
- **Continuity Pattern**: All flagship pages terminate with a `SystemContinuation` block to enforce the linear 10-step sequence.

---

## 5. Full Route Map
| Route | Name | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | The "Director's Thesis" scrollytelling entry point. |
| `/products` | **Portfolio Hub** | The 6-SKU core architecture (Floating Floating Stage). |
| `/occasions` | **Strategic Map** | The behavioral engine mapping product to ritual. |
| `/strategy` | **01 Strategy** | The foundational thesis of "The Wedge". |
| `/economics` | **02 Economics** | Format economics and packaging burdens. |
| `/channels` | **03 Channels** | Dominant behavior per retail/D2C node. |
| `/growth` | **04 Growth** | High-trust messaging framing. |
| `/labs/packaging` | **05 Packaging** | Perception, trust, and clarity logic. |
| `/labs/flavor` | **06 Flavor** | Sensory strategy (Excitement vs. Retention). |
| `/labs/expansion` | **07 Expansion** | Concept mapping for future concept stretches. |

---

## 6. Ordered User Journey (10-Step Sequence)
The OS is intended to be demoed in this exact order to build the "Founder Thesis":
1.  **Home** (The "Why")
2.  **Products** (The "What")
3.  **Occasions** (The "When")
4.  **01 Strategy** (The Entry Wedge)
5.  **02 Economics** (The Viability)
6.  **03 Channels** (The Discovery)
7.  **04 Growth** (The Habits)
8.  **05 Packaging** (The Trust)
9.  **06 Flavor** (The Retention)
10. **07 Expansion** (The Horizon)

---

## 7. Flagship Page Documentation
### Homepage (`/`)
- **Intent**: Hook the user with the "Winning Formula" cinematic sequence.
- **Pattern**: Scrollytelling GSAP timeline with 4 Narrative Beats.
- **Takeaway**: Everything in this OS is intentional and sequenced.

### Products Hub (`/products`)
- **Intent**: Showcase the 6 core SKUs in a borderless, "floating" world.
- **Visuals**: No card-holders; products sit directly on atmospheric glows.
- **Strategic Layer**: Maps the "Portfolio Role" and "Repeat Logic" for every SKU.

---

## 8. Product Portfolio Documentation
The core ecosystem consists of 6 strategic SKUs:
1.  **Choco Loco** (Indulgence Anchor / Bridge Product)
2.  **Kesar Pista** (Heritage Logic / Traditional Trust)
3.  **Classic Vanilla** (The Clean Baseline / Stackable Logic)
4.  **Nitro Coffee** (Morning Ritual / Habit Coupler)
5.  **Hazelnut Bar** (On-the-go / Discovery Wedge)
6.  **Greek Yogurt** (Night-time / Repair Logic)

*Found in: `app/data/products.ts`*

---

## 9. Occasions System
The "Strategic Map" (`app/data/occasions.ts`) identifies the moments that drive adoption:
- **Breakfast Rescue**: Shifting from zero-protein to high-protein.
- **Post-Workout Recovery**: The functional anchor.
- **Sweet Craving Swap**: The pleasure-plus-protein wedge.
- **Travel Fuel**: High-convenience discovery.

---

## 10. OS Module Documentation
- **02 Economics**: Focuses on the "Shipping Burden" and "Packaging Intensity" of different formats (Powder vs RTD vs Bar).
- **03 Channels**: Defines discovery modes for Quick Commerce vs D2C vs Retail.
- **06 Flavor Lab**: Strategizes flavors as "Acquisition metrics" (Choco) vs "Retention metrics" (Vanilla).

---

## 11. Design System
- **Background**: `#090909` (Obsidian Black).
- **Typography Title**: `font-serif` (Cormorant Garamond).
- **Typography Body**: `font-sans` (Geist Sans).
- **Accent**: `#C5A059` (Muted Gold).
- **Glossmorphism**: Use `backdrop-blur-2xl` and `bg-background/80` for elevated surfaces.
- **Floating Assets**: Products must never have rectangular card borders; they float in atmospheric space.

---

## 12. Navigation & Continuity
- **Navbar**: Foundational links (Home, Products, Occasions) are top-level. Strategic Steps (01-07) are grouped in a "Strategy OS" dropdown.
- **Active State**: Simple Gold Text highlight (No dots, no underlines).
- **Continuation**: `SystemContinuation.tsx` must be used at the bottom of every step to guide the linear walk.

---

## 13. File & Folder Map
- `/app/data/`: **The Strategic Brain.** Contains all TS files for products, occasions, and strategy modules.
- `/app/components/hero/`: Cinematic scrollytelling components.
- `/app/components/ui/`: Reusable strategy surfaces (`ProductSurface`, `SystemContinuation`, `GlassCard`).
- `/app/types/`: TypeScript interfaces for the entire system.
- `/public/images/products/`: The canonical location for high-fidelity transparent PNG assets.

---

## 14. Data Model Overview (The Schema)
- **Product**: governs logic, colors, images, and strategic role.
- **Occasion**: governs ritual logic and product-fit mapping.
- **Module**: governs the content for the 7 OS intelligence layers.
- **NavItem**: governs the 10-step linear sequence.

---

## 15. Assets Mapping
Every product expects a transparent PNG at: `/images/products/[slug].png`.
- `choco-loco.png`
- `kesar-pista.png`
- `classic-vanilla.png`
- ...etc.

---

## 16. Solved Problems
- **Poster Frame**: The homepage now has a "Pre-scroll" frame so the hero doesn't look blank on initial load.
- **Linear Flow**: Corrected the route architecture to enforce the Step 01-07 sequence.
- **Image Integration**: Universal adoption of transparent assets with matching ambient color glows.
- **Build Stability**: Resolved all property mapping and import errors for `npm run build`.

---

## 17. Known Issues & Open Questions
- **GSAP Logic**: Changing the height of the homepage or adding sections requires a `ScrollTrigger.refresh()`.
- **404 Handling**: Ensure `not-found.tsx` remains consistent with the cinematic aesthetic.
- **Mobile Scrollytelling**: GSAP scrub speed might need tuning for low-end mobile devices.

---

## 18. Hard Constraints
1.  **Strictly Linear**: Do not re-introduce nested Labs dropdowns.
2.  **Asset Logic**: Product PNGs MUST be transparent.
3.  **Design Philosophy**: Maintain the Obsidian/Gold contrast. Do not add white backgrounds or flat SaaS colors.
4.  **Zero-Error Build**: Never leave the project in a state that fails `npm run build`.

---

## 19. Recommended Next Steps
1.  **Expansion Lab Content**: Deepen the data for `/labs/expansion` once concept adjacencies are defined.
2.  **Performance Polish**: Optimize the larger 4K PNG assets for web performance.
3.  **Deployment**: Execute `git push` often to maintain the stability of the master branch.

---

## 20. Resume Guide for Future Agents
- **READ THIS FIRST**: Always read `app/data/navigation.ts` to understand the linear flow.
- **NAVIGATE SAFELY**: Use the `SystemContinuation` component for all new page additions.
- **STYLE RULES**: Use the custom Tailwind tokens defined in `globals.css` (`gold`, `graphite`, `background`).
- **DO NOT DASHBOARDIZE**: Keep the serif/serif-italic-balanced layout. If it looks like a SaaS dashboard, you have failed the architecture.

---
**Created by Antigravity // Google Deepmind Agentic Coding Team**
