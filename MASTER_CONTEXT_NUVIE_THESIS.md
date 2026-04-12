# MASTER CONTEXT: NUVIE THESIS
**Project Maturity State:** Post-Revamp Stable / Founder-Facing Portfolio  
**Version:** 2.0 (Post-Revamp Final)  
**Last Verified Against Codebase:** 2026-04-12

---

## 1. Project Identity

### The Perspective
**Nuvie Thesis** is a **Founder-Facing Portfolio Thesis** designed to demonstrate a deep, strategic understanding of the modern protein brand ecosystem. It distalizes complex domains—flavor strategy, behavioral occasions, and execution logic—into a polished, high-fidelity digital study.

### The Objective
To pivot from "Consultant Deck" jargon to "Builder-Minded Usefulness." The site is a surgically focused proof-of-work that helps founders see their product reality through a sharp, analytical, and execution-first lens.

### What It Is NOT
- **Not "Protein OS":** The legacy "Operating System" naming has been fully purged.
- **Not a Dashboard:** It is a performance-editorial study, not a monitoring tool.
- **Not Generic:** It is specifically tailored to Nuvie's reality, not a general framework.

---

## 2. Product Vision: The 4-Page Architecture

In the 2026 revamp, the project was consolidated from a complex 12-route system into 4 high-leverage pages:

1. **Home (`/`)**: **The Why.** Establishes the intent, what was understood during the study, and why the profile (systems-building) is useful to a founder.
2. **Product Lab (`/products`)**: **The Portfolio.** A cinematic dive into the 6 core SKUs and future summer concepts. It balances trial-friction logic with ritual-anchoring utility.
3. **Occasions (`/occasions`)**: **The Behavior.** Mapping where Nuvie enters life (The 4 PM Slump, The Coffee Ritual) and how messaging fits those moments.
4. **How I Can Help (`/how-i-can-help`)**: **The Execution.** A practical usefulness memo. It identifies 4 focus areas (Product Fit, Repeat, Channels, Artifacts) and a concrete 30-day first-pass plan.

---

## 3. Technical Stack

| Layer | Technology | Details |
|:---|:---|:---|
| Framework | **Next.js (App Router)** | v15+ |
| Language | **TypeScript** | Strict-typed system |
| UI Library | **React** | Component-first architecture |
| Styling | **Tailwind CSS** | Design-token-driven |
| Motion | **Framer Motion** | Smooth, high-fidelity state transitions |
| Icons/SVG | **Lucide React** | (Selective usage) |

---

## 4. Design System: Performance-Editorial

The visual language shifted from "Dark Obsidian/Gold" to a **"Warm/Grounded"** palette.

### Color Tokens
- **Nuvie Cream (`#F5ECD7`)**: The foundational background. Warm, approachable, premium.
- **Espresso (`#2C1810`)**: The primary anchoring color. Used for headings, structural text, and selective grounding buttons.
- **Pistachio/Green (`#7CB18A`)**: The "Energy" color. Reserved for primary Actions (CTAs), highlights, and active states.
- **Graphite/Muted**: Used for subtle section overlays and background grouping.

### Visual Constraints
- **Floating Products**: Products should sit in atmospheric space with ambient glows, not in flat rectangular containers.
- **Grounded Contrast**: Accessibility and readability are priority. Green must be used intentionally for visibility.
- **Typography**:
    - **Headings**: `font-serif` (Cormorant Garamond) for an editorial feel.
    - **Body**: `font-sans` (Geist Sans) for modern, analytical clarity.

---

## 5. Route Map (4 Active Routes)

| Route | Name | Intent |
|:---|:---|:---|
| `/` | Home | Diagnostic Output & Usefulness Profile |
| `/products` | Product Lab | 6-SKU Showcase + Seasonal Concepts |
| `/occasions` | Occasions | Contextual Mapping & Habit Loop Logic |
| `/how-i-can-help` | Help / Outreach | Practical Diagnostic & First 30 Days |

---

## 6. Shared UI & Primitives

- **`SystemContinuation`**: Used at the bottom of pages to guide the user to the next logical step of the thesis. Supports both arrow-led and button-led (ctaLabel) modes.
- **`HomeHero`**: A fixed, static hero for the homepage focused on the "Performance-Editorial" identity.
- **`ChapterHero`**: A cinematic, multi-chapter scrollytelling component (used on Product Lab).
- **`ProductSurface`**: The primary "floating product" display component.
- **`CtaButton`**: Global button component supporting `primary`, `outline`, and `ghost` variants.

---

## 7. Data & Content Sources (`app/data/`)

Strategic data is fully decoupled from the components:
- `site-content.ts`: Core messaging and home sections.
- `products.ts`: Definitions for the 6 core SKUs.
- `occasions.ts`: Behavioral moment mapping and "winning" formats.
- `outreach.ts`: Data for the Help page (How I Think, Initiatives).
- `growth.ts`: Message framing fits and habit loop anchors.
- `summer-concepts.ts`: Seasonal SKU logic.

---

## 8. Development Constraints & Safety

- **No "OS" Language**: Never reintroduce "Protein OS" or clinical "Operating System" terminology.
- **Founder-Respectful Tone**: Copy must stay observant and humble. Avoid "I will transform your brand" language. Use "I look for..." or "I identify...".
- **Product Lab Cinematic**: Keep the `ChapterHero` transition high-fidelity. It is the core "wow" moment.
- **Restraint**: Do not over-design with complex effects. Keep it grounded in the Nuvie Cream/Espresso palette.

---

## 9. Resume Guide for Future Agents

1. **Read `app/data/outreach.ts`** first to understand the "useful builder" tone.
2. **Read `app/layout.tsx`** for the global Navbar/Footer wrapper.
3. **Sync Data to Logic**: If adding a new insight, add it to the corresponding `app/data/` file first.
4. **CSS variables**: Use the tokens in `globals.css` rather than hardcoded hex values.

---

**Master Context v2.0 — Post-Revamp Stable Final**  
*The project is now a single, high-fidelity thesis study.*
