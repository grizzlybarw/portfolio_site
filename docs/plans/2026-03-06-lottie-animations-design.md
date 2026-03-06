# Lottie Animations Design

**Date:** 2026-03-06
**Scope:** Add decorative Lottie animations to dangruskin.com for ambient motion and color pop

## Goal

Add 3 small Lottie animations to make the page feel less static — purely decorative, not contextual. Motion should complement the existing restrained aesthetic without competing with typography or content.

## Approach: Ambient + Interaction

### 1. Hero — Looping Ambient Accent
- **Position:** Upper-right quadrant of the `.hero` section, behind text
- **Size:** ~120–160px
- **Style:** Abstract/geometric (orbiting dots, flowing lines, gentle shapes)
- **Behavior:** Autoplay, infinite loop
- **Opacity:** ~30–40% — reads as texture, not focal point
- **z-index:** Above `.bg-gradient` (z-index: 0), below content (z-index: 2)
- **Source:** LottieFiles free library (abstract/geometric category)

### 2. Nav Logo — Hover Micro-interaction
- **Trigger:** Mouseenter on `.nav-logo`
- **Behavior:** Plays once on hover, resets on mouseleave (ready to replay)
- **Style:** Subtle sparkle burst or shimmer
- **Position:** Absolute, overlaid on/beside "Dan Gruskin" text
- **Source:** LottieFiles free library (sparkle/confetti category, small)

### 3. Contact Section — Looping Ambient Accent
- **Position:** Near `.contact-heading` ("Let's work together")
- **Style:** Abstract loop, different shape from hero accent
- **Behavior:** Autoplay, infinite loop, low opacity
- **Purpose:** Visual anchor at bottom of page

## Technical Implementation

- **Library:** `lottie-web` via unpkg CDN (`@lottie-files/lottie-player` or `lottie-web`)
- **Animation source:** LottieFiles-hosted JSON URLs (free tier)
- **Loading:** Single `<script>` tag in `<head>` or before `</body>`
- **API usage:**
  - Hero + Contact: `lottie.loadAnimation({ autoplay: true, loop: true })`
  - Nav hover: `play()` on mouseenter; `stop()` + `goToAndStop(0, true)` on mouseleave
- **Colors:** Source animations with warm/neutral tones, or reduce prominence via CSS opacity
- **Performance:** Animations are lightweight JSON; no impact on page load

## Constraints
- All animations sit at z-index: 1 (between bg-gradient and main content)
- Must not overlap or obscure text
- Pointer-events: none on all animation containers
- Should degrade gracefully if lottie-web fails to load
