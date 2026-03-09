# Refined Brutalism Redesign — Design Doc
Date: 2026-03-06

## Goal
Explore a bolder, more expressive design direction for dangruskin.com while preserving all content. Inspired by robin-noguier.com (dark/editorial) and mattahrens.design (bold/kinetic). Lives on a separate git branch.

## Design Direction: "Refined Brutalism"
Warm cream base retained but bold saturated colors used throughout at full force. Hard geometric brutalist elements (thick borders, oversized stroke numbers) cut through refined editorial typography. Spring-physics custom cursor. Clip-path scroll reveals. Asymmetric editorial grid.

## Color System
- Terracotta `#D4550A` — borders, project numbers, CTAs, swap text
- Electric Sage `#2D8C4E` — section labels, hover fills, about section bg
- Ink `#1A1814` — body text (unchanged)
- Warm Cream `#F5F0E8` — base background (unchanged)
- Marigold `#E8A820` — cursor, highlights, active states
- Deep Plum `#5C2D6E` — contact section bg, Card 4/6 accent

Each case study card is assigned one accent color used for its number, hover border, and overlay.

## Typography
- Fonts: Instrument Sans + Lora (unchanged)
- Hero headline: `clamp(3.5rem, 7vw, 7rem)` — aggressive scale up
- Project numbers: `clamp(8rem, 15vw, 16rem)`, stroke-only (no fill), per-card accent color
- Section labels: thick filled color pill/badge, each section a different accent
- Hero key words sit inside solid color-block fills (terracotta, sage, marigold cycling)

## Layout

### Hero
- Line-mask clip-path reveal on load (each line wipes up, not fades)
- Headline color-blocked words with word-swap cycling through accent colors
- Thick marigold ruled horizontal line separating headline from sub-copy
- Sub-copy and meta remain below the rule

### Case Study Grid — Asymmetric Alternating
- Row 1: large card ~65% + narrow card ~35% (Cards 1 & 2)
- Row 2: two equal cards with oversized stroke number spanning behind (Cards 3 & 4)
- Row 3: mirrors Row 1 flipped (Cards 5 & 6)
- Card accent color assignments: 1=terracotta, 2=sage, 3=marigold, 4=plum, 5=sage, 6=terracotta
- Hover: accent color border strokes in, number brightens to solid, thumbnail scales 1.04

### Section Backgrounds
- Work: cream (default)
- About: full-bleed terracotta background, reversed white type
- Contact: full-bleed deep plum background, reversed white type
- Footer: ink background, reversed

### About Section
- Same content, reversed out of terracotta
- Experience list rows slide in from left with 40ms stagger

### Contact Section
- Same content, reversed out of plum
- Link rows invert on hover (white bg, plum text)

## Interactions

### Custom Cursor
- Base: 12px dot, marigold fill, always visible
- Follower orb: 32px circle, semi-transparent, spring physics (lerp factor ~0.12)
- On project card hover: expands to 80px, shows "Open" in small caps
- On text link hover: shrinks to 8px, inverts to accent color
- Color shifts by section: terracotta over work, sage over about, marigold over contact
- Ghost trail: 3 decaying dots follow with increasing delay (40ms, 80ms, 120ms)

### Scroll Reveals
- Hero lines: clip-path `inset(100% 0 0 0)` → `inset(0% 0 0 0)`, staggered 80ms per line
- Section labels: underline draws in left-to-right via scaleX transform
- Cards: clip-path wipe up, staggered 60ms
- About rows: translateX(-20px) → 0, staggered 40ms
- All triggered by IntersectionObserver at 0.1 threshold

### Card Parallax
- Each card tilts subtly on mouse move: max ±4deg rotate, ±6px translate
- Directional shadow shifts opposite to tilt direction
- Smooth with requestAnimationFrame lerp

## Implementation Notes
- Single `index.html` file (no build toolchain)
- Keep all existing HTML content and links unchanged
- Replace CSS and JS wholesale
- Custom cursor replaces default via `cursor: none` on body
- All animations use CSS custom properties + JS for dynamic values
- Respect `prefers-reduced-motion`: disable cursor trail, use simple fades
- Branch: `bold-redesign`
