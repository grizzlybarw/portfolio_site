# Lottie Animations Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add three Lottie animations to dangruskin.com — a looping ambient accent in the hero, a looping ambient accent in the contact section, and a hover micro-interaction on the nav logo.

**Architecture:** All changes live in `index.html`. Load `lottie-web` from unpkg CDN. Source animation JSON from LottieFiles CDN. Hero and contact animations autoplay + loop at low opacity positioned absolutely. Nav animation plays once on mouseenter, resets on mouseleave.

**Tech Stack:** Plain HTML/CSS/JS (no build step), lottie-web library via unpkg, LottieFiles-hosted animation JSON

---

### Task 1: Source animations from LottieFiles

**Files:**
- No file changes — research step only

**Step 1: Browse LottieFiles for three animations**

Go to https://lottiefiles.com/featured and search for free animations. Find three:

1. **Hero accent** — search "abstract particles" or "geometric loop" or "blob". Want: soft, looping, warm tones (oranges, tans, greens). ~2–4 seconds loop. Should look good at low opacity.
2. **Contact accent** — same search pool, pick a different shape/motion from the hero one. Can be more linear/flowing.
3. **Nav sparkle** — search "sparkle", "stars burst", or "shimmer". Want: plays once, small, delightful.

**Step 2: Get CDN URLs for each**

For each animation on LottieFiles, click it → "Free Download" → copy the "Lottie JSON" link (e.g., `https://assets5.lottiefiles.com/packages/lf20_xxxxx.json`). Alternatively download JSON files and place them in `/img/` folder and reference locally.

**Step 3: Note down the three URLs/paths**

You'll need them in Task 2–4. Example format:
- Hero: `https://assets5.lottiefiles.com/packages/lf20_hero.json`
- Contact: `https://assets5.lottiefiles.com/packages/lf20_contact.json`
- Nav: `https://assets5.lottiefiles.com/packages/lf20_sparkle.json`

---

### Task 2: Add lottie-web library and hero animation

**Files:**
- Modify: `/Users/danielgruskin/Documents/dangruskin.com/index.html`

**Step 1: Add lottie-web script tag**

In `index.html`, add this inside `<head>` just before the closing `</head>` tag (line ~446):

```html
<script src="https://unpkg.com/lottie-web@5.12.2/build/player/lottie.min.js"></script>
```

**Step 2: Add hero animation CSS**

Inside the `<style>` block, add after the `.hero` rule (around line ~100):

```css
.lottie-hero {
  position: absolute;
  top: -2rem;
  right: 2rem;
  width: 160px;
  height: 160px;
  pointer-events: none;
  opacity: 0.35;
  z-index: 1;
}
```

**Step 3: Make .hero position: relative**

The `.hero` rule needs `position: relative` so the absolute child is scoped to it. Find the `.hero` CSS rule (~line 92) and add:

```css
.hero {
  min-height: 42vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 3rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative; /* add this */
}
```

**Step 4: Add hero animation container to HTML**

Inside `<section class="hero">` (line ~461), add the container as the first child:

```html
<section class="hero">
  <div class="lottie-hero" id="lottie-hero"></div>
  <!-- existing content below -->
```

**Step 5: Initialize hero animation in JS**

In the `<script>` block (before the closing `</script>`), add:

```javascript
// Lottie — Hero ambient
lottie.loadAnimation({
  container: document.getElementById('lottie-hero'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'HERO_ANIMATION_URL_HERE'  // replace with URL from Task 1
});
```

**Step 6: Verify visually**

Open `index.html` in a browser. You should see a soft animated shape in the upper-right of the hero area, behind the text, at low opacity. If it's too prominent, lower opacity in CSS. If too small, increase width/height.

**Step 7: Commit**

```bash
cd /Users/danielgruskin/Documents/dangruskin.com
git add index.html
git commit -m "feat: add lottie-web and hero ambient animation"
```

---

### Task 3: Add contact section ambient animation

**Files:**
- Modify: `/Users/danielgruskin/Documents/dangruskin.com/index.html`

**Step 1: Add contact animation CSS**

In the `<style>` block, add after the `.contact-heading` rule (around line ~374):

```css
.lottie-contact {
  position: absolute;
  top: 3rem;
  right: 0;
  width: 140px;
  height: 140px;
  pointer-events: none;
  opacity: 0.3;
  z-index: 1;
}
```

**Step 2: Make .contact-inner position: relative**

Find `.contact-inner` in CSS (~line 365) and add `position: relative`:

```css
.contact-inner {
  border-top: 1px solid var(--border);
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
  position: relative; /* add this */
}
```

**Step 3: Add contact animation container to HTML**

Inside `<div class="contact-inner">` (~line 615), add the container as first child:

```html
<div class="contact-inner">
  <div class="lottie-contact" id="lottie-contact"></div>
  <!-- existing content below -->
```

**Step 4: Initialize contact animation in JS**

In the `<script>` block, add after the hero animation init:

```javascript
// Lottie — Contact ambient
lottie.loadAnimation({
  container: document.getElementById('lottie-contact'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'CONTACT_ANIMATION_URL_HERE'  // replace with URL from Task 1
});
```

**Step 5: Verify visually**

Scroll to the contact section. A soft animation should appear near the "Let's work together" heading, behind the content, at low opacity. Adjust position/opacity in CSS if needed.

**Step 6: Commit**

```bash
cd /Users/danielgruskin/Documents/dangruskin.com
git add index.html
git commit -m "feat: add contact section ambient lottie animation"
```

---

### Task 4: Add nav logo hover micro-interaction

**Files:**
- Modify: `/Users/danielgruskin/Documents/dangruskin.com/index.html`

**Step 1: Add nav animation CSS**

In the `<style>` block, add after the `.nav-logo` rule (~line 70):

```css
.nav-logo-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.lottie-nav {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  pointer-events: none;
  opacity: 0;
  z-index: 3;
  transition: opacity 0.15s ease;
}

.nav-logo-wrap:hover .lottie-nav {
  opacity: 1;
}
```

**Step 2: Wrap the nav logo anchor**

Find the nav logo in HTML (~line 453):

```html
<a href="#" class="nav-logo">Dan Gruskin</a>
```

Wrap it:

```html
<div class="nav-logo-wrap">
  <a href="#" class="nav-logo">Dan Gruskin</a>
  <div class="lottie-nav" id="lottie-nav"></div>
</div>
```

**Step 3: Initialize nav animation in JS**

In the `<script>` block, add after the contact animation init:

```javascript
// Lottie — Nav logo hover
const navAnim = lottie.loadAnimation({
  container: document.getElementById('lottie-nav'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'NAV_ANIMATION_URL_HERE'  // replace with URL from Task 1
});

const navLogo = document.querySelector('.nav-logo-wrap');
if (navLogo) {
  navLogo.addEventListener('mouseenter', () => {
    navAnim.goToAndPlay(0, true);
  });
  navLogo.addEventListener('mouseleave', () => {
    navAnim.stop();
  });
}
```

**Step 4: Verify visually**

Hover the "Dan Gruskin" nav logo. A sparkle/shimmer animation should play once over it. Moving the mouse away stops it. Re-hovering replays from the start.

**Step 5: Commit**

```bash
cd /Users/danielgruskin/Documents/dangruskin.com
git add index.html
git commit -m "feat: add nav logo hover lottie micro-interaction"
```

---

### Task 5: Final polish and push

**Files:**
- Modify: `/Users/danielgruskin/Documents/dangruskin.com/index.html` (if adjustments needed)

**Step 1: Full page review**

Open `index.html` in browser and check:
- [ ] Hero animation: visible, not distracting, doesn't overlap text on any screen size
- [ ] Contact animation: visible, feels balanced with the section layout
- [ ] Nav hover: plays cleanly, resets properly, doesn't interfere with the link click
- [ ] Mobile (~375px wide): animations don't cause overflow or layout issues

**Step 2: Mobile adjustments if needed**

If animations overflow or look odd on mobile, add to the `@media (max-width: 860px)` block:

```css
@media (max-width: 860px) {
  /* existing rules... */
  .lottie-hero { width: 100px; height: 100px; opacity: 0.25; }
  .lottie-contact { display: none; }
}
```

**Step 3: Push to GitHub**

```bash
cd /Users/danielgruskin/Documents/dangruskin.com
git push
```
