# Refined Brutalism Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild dangruskin.com index.html with bold colors, spring-physics custom cursor, asymmetric editorial card grid, clip-path scroll reveals, and brutalist oversized stroke project numbers — while preserving all HTML content.

**Architecture:** Single `index.html` file. CSS is rewritten wholesale inside the `<style>` block. JS is rewritten wholesale inside the `<script>` block. All HTML structure (nav, hero, case cards, about, contact, footer) is preserved but grid wrappers and section classes are updated to support the new layout. No build toolchain — open in browser directly.

**Tech Stack:** Vanilla HTML/CSS/JS. Google Fonts (Instrument Sans + Lora, already loaded). dotlottie-player (already loaded). requestAnimationFrame for cursor/parallax. IntersectionObserver for scroll reveals.

---

### Task 1: Create branch and set up color system + CSS reset

**Files:**
- Modify: `index.html` (the `<style>` block — full replacement)

**Step 1: Open index.html and locate the `<style>` block (lines 11–493)**

Read the file to confirm current CSS boundaries before replacing.

**Step 2: Replace the entire `:root` and reset block with the new color system**

Replace everything inside `<style>` with this foundation (more CSS added in subsequent tasks):

```css
:root {
  --cream: #F5F0E8;
  --ink: #1A1814;
  --terracotta: #D4550A;
  --sage: #2D8C4E;
  --marigold: #E8A820;
  --plum: #5C2D6E;
  --border: rgba(26,24,20,0.12);

  /* Per-card accent colors (CSS custom props set via JS) */
  --card-accent: var(--terracotta);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background: var(--cream);
  color: var(--ink);
  font-family: 'Instrument Sans', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  overflow-x: hidden;
  cursor: none; /* hide default cursor */
}

/* Grain overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.15;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  background-size: 180px 180px;
  mix-blend-mode: multiply;
}

nav, section, footer, .cursor-dot, .cursor-orb { position: relative; z-index: 2; }
```

**Step 3: Verify in browser**
Open `index.html` in browser. Page should show cream bg with no default cursor. Content will be unstyled — that's expected.

**Step 4: Commit**
```bash
cd /Users/danielgruskin/Documents/dangruskin.com
git add index.html
git commit -m "feat: initialize refined brutalism color system and CSS reset"
```

---

### Task 2: Custom cursor (dot + spring orb + ghost trail)

**Files:**
- Modify: `index.html` — add cursor HTML before `</body>`, add cursor CSS to `<style>`, add cursor JS to `<script>`

**Step 1: Add cursor HTML elements just after `<body>` opens**

Insert after `<body>`:
```html
<!-- Custom cursor -->
<div class="cursor-dot" id="cursorDot"></div>
<div class="cursor-orb" id="cursorOrb"><span class="cursor-label" id="cursorLabel"></span></div>
<div class="cursor-trail" id="trail1"></div>
<div class="cursor-trail" id="trail2"></div>
<div class="cursor-trail" id="trail3"></div>
```

**Step 2: Add cursor CSS**
```css
/* CURSOR */
.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--marigold);
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.15s, height 0.15s, background 0.3s;
}

.cursor-orb {
  position: fixed;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--marigold);
  background: rgba(232, 168, 32, 0.12);
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.25s cubic-bezier(0.34,1.56,0.64,1),
              height 0.25s cubic-bezier(0.34,1.56,0.64,1),
              border-color 0.3s,
              background 0.3s;
}

.cursor-label {
  font-size: 0.55rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink);
  opacity: 0;
  transition: opacity 0.2s;
  white-space: nowrap;
}

.cursor-orb.expanded {
  width: 80px;
  height: 80px;
}
.cursor-orb.expanded .cursor-label { opacity: 1; }

.cursor-orb.shrunk {
  width: 16px;
  height: 16px;
}

.cursor-trail {
  position: fixed;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--marigold);
  pointer-events: none;
  z-index: 9997;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.1s;
}
```

**Step 3: Add cursor JS (add to `<script>` block)**
```javascript
// --- CUSTOM CURSOR ---
const dot = document.getElementById('cursorDot');
const orb = document.getElementById('cursorOrb');
const label = document.getElementById('cursorLabel');
const trails = [
  document.getElementById('trail1'),
  document.getElementById('trail2'),
  document.getElementById('trail3'),
];

let mouseX = 0, mouseY = 0;
let orbX = 0, orbY = 0;
const trailPositions = trails.map(() => ({ x: 0, y: 0 }));
const trailDelays = [40, 80, 120];
const trailHistory = [];

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
  trailHistory.push({ x: mouseX, y: mouseY, t: Date.now() });
  if (trailHistory.length > 20) trailHistory.shift();
});

// Spring orb follow
(function animateOrb() {
  orbX += (mouseX - orbX) * 0.12;
  orbY += (mouseY - orbY) * 0.12;
  orb.style.left = orbX + 'px';
  orb.style.top = orbY + 'px';

  // Trail ghosts
  trails.forEach((trail, i) => {
    const delay = trailDelays[i];
    const past = trailHistory.findLast(p => Date.now() - p.t >= delay);
    if (past) {
      trail.style.left = past.x + 'px';
      trail.style.top = past.y + 'px';
      trail.style.opacity = (0.35 - i * 0.1).toString();
    }
  });

  requestAnimationFrame(animateOrb);
})();

// Cursor color by section
const sectionColors = {
  work: 'var(--terracotta)',
  about: 'var(--sage)',
  contact: 'var(--plum)',
};
function updateCursorColor(color) {
  orb.style.borderColor = color;
  orb.style.background = color.replace(')', ', 0.1)').replace('var(', 'color-mix(in srgb, ').replace('--terracotta)', '#D4550A 15%, transparent)');
  dot.style.background = color;
  trails.forEach(t => t.style.background = color);
}

// Project card hover
document.querySelectorAll('.case-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    orb.classList.add('expanded');
    label.textContent = 'Open';
  });
  card.addEventListener('mouseleave', () => {
    orb.classList.remove('expanded');
    label.textContent = '';
  });
});

// Link hover (shrink)
document.querySelectorAll('a:not(.case-card), button').forEach(el => {
  el.addEventListener('mouseenter', () => orb.classList.add('shrunk'));
  el.addEventListener('mouseleave', () => orb.classList.remove('shrunk'));
});

// Section detection
const sectionEls = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const color = sectionColors[entry.target.id] || 'var(--marigold)';
      updateCursorColor(color);
    }
  });
}, { threshold: 0.3 });
sectionEls.forEach(s => sectionObserver.observe(s));
```

**Step 4: Verify in browser**
Move mouse over page — should see small marigold dot, spring orb following behind, 3 ghost trail dots decaying. Hover a card: orb expands with "Open" label.

**Step 5: Commit**
```bash
git add index.html
git commit -m "feat: add spring-physics custom cursor with ghost trail and section color shifts"
```

---

### Task 3: Nav styles

**Files:**
- Modify: `index.html` `<style>` block

**Step 1: Add nav CSS**
```css
/* NAV */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  border-bottom: 2px solid var(--ink);
  position: sticky;
  top: 0;
  background: var(--cream);
  z-index: 100;
}

.nav-logo {
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.02em;
  color: var(--ink);
  text-decoration: none;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  color: var(--ink);
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  padding-bottom: 2px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  width: 0; height: 2px;
  background: var(--terracotta);
  transition: width 0.25s ease;
}

.nav-links a:hover::after { width: 100%; }

/* Remove lottie from nav for redesign */
.lottie-nav, .nav-logo-wrap { display: contents; }
```

**Step 2: Verify nav looks clean in browser — sticky, bold border, uppercase links**

**Step 3: Commit**
```bash
git add index.html
git commit -m "feat: bold nav with sticky position and terracotta underline hover"
```

---

### Task 4: Hero section — layout, type scale, color blocks, ruled line

**Files:**
- Modify: `index.html` `<style>` block + update hero HTML

**Step 1: Add hero CSS**
```css
/* HERO */
.hero {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 6rem 3rem 6rem;
  max-width: 100%;
  border-bottom: 2px solid var(--ink);
  position: relative;
  overflow: hidden;
}

.hero-eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sage);
  font-weight: 700;
  margin-bottom: 2rem;
  clip-path: inset(100% 0 0 0);
  transition: clip-path 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s;
}

.hero-headline {
  font-family: 'Instrument Sans', sans-serif;
  font-size: clamp(3.5rem, 7vw, 7rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  max-width: 1100px;
}

/* Each line animates in via clip-path */
.hero-line {
  display: block;
  overflow: hidden;
}
.hero-line-inner {
  display: block;
  clip-path: inset(100% 0 0 0);
  transition: clip-path 0.7s cubic-bezier(0.16,1,0.3,1);
}

.hero-line-inner.revealed {
  clip-path: inset(0% 0 0 0);
}

/* Color-block word highlights */
.hero-headline .highlight {
  display: inline-block;
  background: var(--terracotta);
  color: #fff;
  padding: 0 0.2em;
  border-radius: 2px;
}

.swap-text {
  display: inline-block;
  background: var(--terracotta);
  color: #fff;
  padding: 0.02em 0.25em;
  border-radius: 2px;
  transition: background 0.4s ease;
}

.swap-wrapper { display: inline; }

/* Ruled divider */
.hero-rule {
  width: 100%;
  height: 3px;
  background: var(--marigold);
  margin: 3rem 0 2.5rem;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s;
}
.hero-rule.revealed { transform: scaleX(1); }

.hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  clip-path: inset(100% 0 0 0);
  transition: clip-path 0.6s cubic-bezier(0.16,1,0.3,1) 1s;
}
.hero-bottom.revealed { clip-path: inset(0% 0 0 0); }

.hero-sub {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--ink);
  max-width: 420px;
  opacity: 0.75;
}

.hero-meta {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.hero-meta span { font-size: 0.75rem; color: rgba(26,24,20,0.55); letter-spacing: 0.04em; }
.hero-meta strong { font-weight: 600; color: var(--ink); font-size: 0.85rem; }

/* Hide old lottie */
.lottie-hero, .lottie-contact { display: none; }
```

**Step 2: Update hero HTML to wrap each headline line in `.hero-line > .hero-line-inner`**

Replace the hero `<section>` inner HTML (keep the section tag itself):
```html
<section class="hero">
  <div class="hero-eyebrow" id="heroEyebrow">Senior Product Designer — San Diego, CA</div>
  <h1 class="hero-headline">
    <span class="hero-line"><span class="hero-line-inner">I design for</span></span>
    <span class="hero-line"><span class="hero-line-inner"><span class="swap-wrapper"><span class="swap-text" id="swapText">high-stakes moments</span></span></span></span>
    <span class="hero-line"><span class="hero-line-inner">and the people who</span></span>
    <span class="hero-line"><span class="hero-line-inner"><em style="font-family:'Lora',serif;font-style:italic;font-weight:400;">can't work without them.</em></span></span>
  </h1>
  <div class="hero-rule" id="heroRule"></div>
  <div class="hero-bottom" id="heroBottom">
    <p class="hero-sub">
      15+ years across civic tech, clean energy SaaS, and consumer brands. I design with research, ship with craft, and thrive where the problem space is genuinely hard.
    </p>
    <div class="hero-meta">
      <span>Currently</span>
      <strong>Senior Product Designer, Civic Tech</strong>
      <span style="margin-top:0.5rem">Open to</span>
      <strong>Startups — Remote</strong>
    </div>
  </div>
</section>
```

**Step 3: Add hero reveal JS (inside `<script>` block)**
```javascript
// --- HERO REVEAL ---
window.addEventListener('load', () => {
  const lines = document.querySelectorAll('.hero-line-inner');
  lines.forEach((line, i) => {
    setTimeout(() => line.classList.add('revealed'), 100 + i * 100);
  });
  setTimeout(() => document.getElementById('heroEyebrow')?.style.setProperty('clip-path', 'inset(0% 0 0 0)'), 80);
  setTimeout(() => document.getElementById('heroRule')?.classList.add('revealed'), 700);
  setTimeout(() => document.getElementById('heroBottom')?.classList.add('revealed'), 900);
});

// Word swap — cycles accent colors
const swapEl = document.getElementById('swapText');
const phrases = ['high-stakes moments', 'messy systems', 'complex workflows'];
const swapColors = ['#D4550A', '#2D8C4E', '#E8A820'];
let swapIdx = 0;
if (swapEl) {
  setInterval(() => {
    swapEl.style.opacity = '0';
    swapEl.style.transform = 'translateY(-8px)';
    setTimeout(() => {
      swapIdx = (swapIdx + 1) % phrases.length;
      swapEl.textContent = phrases[swapIdx];
      swapEl.style.background = swapColors[swapIdx];
      swapEl.style.opacity = '1';
      swapEl.style.transform = 'translateY(0)';
    }, 300);
  }, 2800);
  swapEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease, background 0.4s ease';
}
```

**Step 4: Verify hero in browser — large type, line-mask reveal on load, marigold rule draws in, word swap cycles colors**

**Step 5: Commit**
```bash
git add index.html
git commit -m "feat: hero with clip-path line reveals, marigold rule, and color-cycling word swap"
```

---

### Task 5: Work section — asymmetric grid + oversized stroke numbers + card parallax

**Files:**
- Modify: `index.html` — update case grid HTML structure, add CSS, add JS

**Step 1: Update work section HTML**

Replace the `.case-grid` div and its contents with the asymmetric structure:
```html
<section class="work" id="work">
  <div class="section-label" data-label="Selected Work">Selected Work</div>
  <div class="case-grid">

    <!-- Row 1: 65% + 35% -->
    <div class="case-row case-row--wide-left">
      <a href="supervisor-review-mode.html" class="case-card" data-accent="#D4550A" data-num="01">
        <div class="case-num-bg">01</div>
        <div class="case-thumb">
          <img src="img/thumbnails/supervisor-review-mode.jpg" alt="Supervisor Review Mode" />
        </div>
        <div class="case-meta">
          <div class="case-title">Supervisor Review Mode</div>
          <div class="case-tags-row">
            <span class="tag">Workflow Design</span>
            <span class="tag">Enterprise UX</span>
          </div>
        </div>
      </a>
      <a href="case-finder.html" class="case-card" data-accent="#2D8C4E" data-num="02">
        <div class="case-num-bg">02</div>
        <div class="case-thumb">
          <img src="img/thumbnails/case-finder.avif" alt="Case Finder" />
        </div>
        <div class="case-meta">
          <div class="case-title">Case Finder</div>
          <div class="case-tags-row">
            <span class="tag">Search & Filter</span>
            <span class="tag">Information Architecture</span>
          </div>
        </div>
      </a>
    </div>

    <!-- Row 2: equal halves -->
    <div class="case-row case-row--equal">
      <a href="empower.html" class="case-card" data-accent="#E8A820" data-num="03">
        <div class="case-num-bg">03</div>
        <div class="case-thumb">
          <img src="img/thumbnails/empower-thumbnails.jpg" alt="GridX Empower Re-imagined" />
        </div>
        <div class="case-meta">
          <div class="case-title">GridX Empower Re-imagined</div>
          <div class="case-tags-row">
            <span class="tag">SaaS</span>
            <span class="tag">Product Strategy</span>
          </div>
        </div>
      </a>
      <a href="gridx-touchscreen.html" class="case-card" data-accent="#5C2D6E" data-num="04">
        <div class="case-num-bg">04</div>
        <div class="case-thumb">
          <img src="img/thumbnails/gridx-touchscreen-thumbnails.jpg" alt="GridX Interactive Touchscreen Demo" />
        </div>
        <div class="case-meta">
          <div class="case-title">GridX Interactive Touchscreen Demo</div>
          <div class="case-tags-row">
            <span class="tag">Interactive</span>
            <span class="tag">Sales Enablement</span>
          </div>
        </div>
      </a>
    </div>

    <!-- Row 3: 35% + 65% (flipped) -->
    <div class="case-row case-row--wide-right">
      <a href="taylor-series-pages.html" class="case-card" data-accent="#2D8C4E" data-num="05">
        <div class="case-num-bg">05</div>
        <div class="case-thumb">
          <img src="img/thumbnails/series-page-thumbnail.jpg" alt="Taylor Guitars Series Pages" />
        </div>
        <div class="case-meta">
          <div class="case-title">Taylor Guitars Series Pages</div>
          <div class="case-tags-row">
            <span class="tag">E-commerce</span>
            <span class="tag">Content Design</span>
          </div>
        </div>
      </a>
      <a href="taylor-sustainability-hub.html" class="case-card" data-accent="#D4550A" data-num="06">
        <div class="case-num-bg">06</div>
        <div class="case-thumb">
          <img src="img/thumbnails/sustainability-hub-thumbnail.jpg" alt="Taylor Sustainability Hub" />
        </div>
        <div class="case-meta">
          <div class="case-title">Taylor Sustainability Hub</div>
          <div class="case-tags-row">
            <span class="tag">Editorial Design</span>
            <span class="tag">Brand</span>
          </div>
        </div>
      </a>
    </div>

  </div>
</section>
```

**Step 2: Add work section CSS**
```css
/* WORK SECTION */
.work {
  padding: 6rem 3rem;
  max-width: 100%;
}

/* Section label as bold color pill */
.section-label {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  margin-bottom: 4rem;
  position: relative;
}
.section-label::before {
  content: attr(data-label);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  background: var(--terracotta);
  color: #fff;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  z-index: -1;
  border-radius: 2px;
}
.section-label.revealed::before { transform: scaleX(1); }
.section-label { border: 2px solid var(--terracotta); border-radius: 2px; color: var(--terracotta); }

/* Asymmetric rows */
.case-grid { display: flex; flex-direction: column; gap: 1.5rem; }

.case-row {
  display: grid;
  gap: 1.5rem;
}
.case-row--wide-left  { grid-template-columns: 65fr 35fr; }
.case-row--equal      { grid-template-columns: 1fr 1fr; }
.case-row--wide-right { grid-template-columns: 35fr 65fr; }

/* Cards */
.case-card {
  text-decoration: none;
  color: var(--ink);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: visible;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  padding: 0;
}

/* Oversized stroke number behind card */
.case-num-bg {
  position: absolute;
  top: -0.3em;
  left: -0.15em;
  font-size: clamp(8rem, 14vw, 16rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 2px var(--card-accent, #D4550A);
  opacity: 0.15;
  pointer-events: none;
  transition: opacity 0.3s ease, -webkit-text-stroke-color 0.3s ease;
  z-index: 0;
  user-select: none;
}

.case-card:hover .case-num-bg { opacity: 0.7; }

.case-thumb {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  position: relative;
  z-index: 1;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
}
.case-card:hover .case-thumb { border-color: var(--card-accent, #D4550A); }

.case-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
  transform-origin: center;
}
.case-card:hover .case-thumb img { transform: scale(1.04); }

.case-meta {
  padding: 1rem 0 0;
  position: relative;
  z-index: 1;
}

.case-title {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin-bottom: 0.4rem;
  transition: color 0.2s;
}
.case-card:hover .case-title { color: var(--card-accent, #D4550A); }

.case-tags-row { display: flex; gap: 0.6rem; }
.tag { font-size: 0.7rem; color: rgba(26,24,20,0.55); }
.tag + .tag::before { content: '·'; margin-right: 0.6rem; }
```

**Step 3: Add work section JS — accent color per card, scroll reveal, card parallax tilt**
```javascript
// --- CASE CARDS: accent color + parallax tilt ---
document.querySelectorAll('.case-card').forEach(card => {
  const accent = card.dataset.accent || '#D4550A';
  card.style.setProperty('--card-accent', accent);

  // Tilt on mousemove
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `perspective(800px) rotateY(${dx * 4}deg) rotateX(${-dy * 3}deg) translateZ(4px)`;
    card.style.boxShadow = `${-dx * 8}px ${dy * 8}px 24px rgba(0,0,0,0.12)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

// Scroll reveal for cards
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.clipPath = 'inset(0% 0 0% 0)';
      entry.target.style.opacity = '1';
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.case-card').forEach((card, i) => {
  card.style.clipPath = 'inset(12% 0 0 0)';
  card.style.opacity = '0';
  card.style.transition = `clip-path 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s, opacity 0.4s ease ${i * 0.06}s, transform 0.3s ease, box-shadow 0.3s ease`;
  cardObserver.observe(card);
});

// Section label reveal
const labelObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      labelObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.section-label').forEach(el => labelObserver.observe(el));
```

**Step 4: Verify in browser — asymmetric 3-row layout, oversized ghost numbers, tilt on card hover, color border appears, card titles color-shift to accent**

**Step 5: Commit**
```bash
git add index.html
git commit -m "feat: asymmetric case grid with stroke numbers, per-card accent colors, and parallax tilt"
```

---

### Task 6: About section — terracotta background, staggered row reveals

**Files:**
- Modify: `index.html` CSS + HTML (about section)

**Step 1: Add about CSS**
```css
/* ABOUT */
.about {
  padding: 8rem 3rem;
  background: var(--terracotta);
  color: #fff;
}

.about-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
}

.about .section-label {
  border-color: #fff;
  color: #fff;
}
.about .section-label::before { background: #fff; color: var(--terracotta); }

.about-heading {
  font-size: clamp(1.8rem, 3vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  color: #fff;
}
.about-heading em {
  font-family: 'Lora', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--marigold);
}

.about-body {
  font-size: 0.95rem;
  line-height: 1.85;
  color: rgba(255,255,255,0.8);
}
.about-body p + p { margin-top: 1rem; }

.about-list { list-style: none; display: flex; flex-direction: column; }
.about-list li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.1rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.25);
  font-size: 0.9rem;
  gap: 1rem;
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.5s cubic-bezier(0.16,1,0.3,1);
}
.about-list li:first-child { border-top: 1px solid rgba(255,255,255,0.25); }
.about-list li.revealed { clip-path: inset(0 0% 0 0); }
.about-list .role { font-weight: 600; flex-shrink: 0; color: #fff; }
.about-list .co { color: rgba(255,255,255,0.65); font-size: 0.85rem; flex: 1; text-align: center; }
.about-list .yr { color: rgba(255,255,255,0.55); font-size: 0.8rem; letter-spacing: 0.04em; flex-shrink: 0; }
```

**Step 2: Update about HTML — add `.about-inner` wrapper and update section-label `data-label`**

Wrap the existing `.about-left` and `.about-right` in `.about-inner`:
```html
<section class="about" id="about">
  <div class="about-inner">
    <div class="about-left">
      <div class="section-label" data-label="About">About</div>
      <h2 class="about-heading">
        Just a guy who<br>learned Photoshop<br>and turned it into<br><em>a career.</em>
      </h2>
      <div class="about-body">
        <p>I started in web dev and print, moved through creative direction, and landed in product design because that's where design actually changes how people work.</p>
        <p>Today I build tools for asylum and refugee case management — the kind of work where good design isn't a nice-to-have. Previously GridX and Taylor Guitars. Always looking for the next hard problem.</p>
      </div>
    </div>
    <div class="about-right">
      <div class="section-label" data-label="Experience">Experience</div>
      <ul class="about-list" id="aboutList">
        <li><span class="role">Senior Product Designer</span><span class="co">Civic Tech</span><span class="yr">2022 — Now</span></li>
        <li><span class="role">Product Designer</span><span class="co">GridX</span><span class="yr">2019 — 2022</span></li>
        <li><span class="role">Creative Director</span><span class="co">Taylor Guitars</span><span class="yr">2014 — 2019</span></li>
        <li><span class="role">Designer / Developer</span><span class="co">Various</span><span class="yr">2008 — 2014</span></li>
      </ul>
    </div>
  </div>
</section>
```

**Step 3: Add about list reveal JS**
```javascript
// About list stagger reveal
const aboutListObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('li');
      items.forEach((item, i) => {
        setTimeout(() => item.classList.add('revealed'), i * 60);
      });
      aboutListObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
const aboutList = document.getElementById('aboutList');
if (aboutList) aboutListObserver.observe(aboutList);
```

**Step 4: Verify — terracotta full-bleed section, white reversed type, marigold italic, list rows slide in from right**

**Step 5: Commit**
```bash
git add index.html
git commit -m "feat: about section with terracotta background and staggered list reveals"
```

---

### Task 7: Contact section — plum background, bold heading

**Files:**
- Modify: `index.html` CSS + HTML (contact section)

**Step 1: Add contact CSS**
```css
/* CONTACT */
.contact {
  padding: 8rem 3rem;
  background: var(--plum);
  color: #fff;
}

.contact-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
  padding-top: 0;
  border-top: none;
  position: relative;
}

.contact .section-label {
  border-color: rgba(255,255,255,0.5);
  color: rgba(255,255,255,0.8);
  margin-bottom: 2rem;
}
.contact .section-label::before { background: rgba(255,255,255,0.2); color: #fff; }

.contact-heading {
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #fff;
}
.contact-heading em {
  font-family: 'Lora', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--marigold);
  display: block;
}

.contact-right {
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-body {
  font-size: 0.95rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.75);
}

.contact-links { display: flex; flex-direction: column; }
.contact-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  text-decoration: none;
  color: #fff;
  transition: background 0.2s, color 0.2s, padding 0.2s;
}
.contact-link:first-child { border-top: 1px solid rgba(255,255,255,0.2); }
.contact-link:hover {
  background: rgba(255,255,255,0.1);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.contact-link-label { font-size: 0.85rem; font-weight: 600; }
.contact-link-value { font-size: 0.8rem; color: rgba(255,255,255,0.6); }
```

**Step 2: Update contact HTML — add section-label, remove lottie, remove contact-inner border-top**

```html
<section class="contact" id="contact">
  <div class="contact-inner">
    <div>
      <div class="section-label" data-label="Contact">Contact</div>
      <h2 class="contact-heading">
        Let's work
        <em>together.</em>
      </h2>
    </div>
    <div class="contact-right">
      <p class="contact-body">
        I'm actively looking for my next role at a fast-moving startup. If you're building something that matters and need a designer who can lead, research, and ship — let's talk.
      </p>
      <div class="contact-links">
        <a href="mailto:dan@dangruskin.com" class="contact-link">
          <span class="contact-link-label">Email</span>
          <span class="contact-link-value">dan@dangruskin.com</span>
        </a>
        <a href="https://linkedin.com/in/dangruskin" target="_blank" class="contact-link">
          <span class="contact-link-label">LinkedIn</span>
          <span class="contact-link-value">linkedin.com/in/dangruskin</span>
        </a>
        <a href="https://dangruskin.com" target="_blank" class="contact-link">
          <span class="contact-link-label">Current Site</span>
          <span class="contact-link-value">dangruskin.com</span>
        </a>
      </div>
    </div>
  </div>
</section>
```

**Step 3: Verify — deep plum full-bleed section, white reversed type, marigold italic on "together.", link rows indent on hover**

**Step 4: Commit**
```bash
git add index.html
git commit -m "feat: contact section with plum background and hover-indent link rows"
```

---

### Task 8: Footer + reduced motion + final polish

**Files:**
- Modify: `index.html` CSS

**Step 1: Add footer CSS**
```css
/* FOOTER */
footer {
  padding: 1.5rem 3rem;
  border-top: 2px solid var(--ink);
  background: var(--ink);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  position: relative;
  z-index: 2;
}
footer p { font-size: 0.75rem; color: rgba(255,255,255,0.5); }
```

**Step 2: Add reduced motion override**
```css
@media (prefers-reduced-motion: reduce) {
  .cursor-dot, .cursor-orb, .cursor-trail { display: none; }
  body { cursor: auto; }
  .hero-line-inner, .hero-eyebrow, .hero-rule, .hero-bottom,
  .case-card, .about-list li, .section-label::before {
    clip-path: none !important;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

**Step 3: Add mobile responsive CSS**
```css
@media (max-width: 860px) {
  nav { padding: 1.25rem 1.5rem; }
  .hero { padding: 3rem 1.5rem 4rem; min-height: 50vh; }
  .hero-bottom { flex-direction: column; align-items: flex-start; gap: 2rem; }
  .hero-meta { text-align: left; }
  .work { padding: 4rem 1.5rem; }
  .case-row { grid-template-columns: 1fr !important; }
  .about { padding: 5rem 1.5rem; }
  .about-inner { grid-template-columns: 1fr; gap: 3rem; }
  .contact { padding: 5rem 1.5rem; }
  .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
  footer { padding: 1.5rem; flex-direction: column; gap: 0.5rem; text-align: center; }
  .cursor-dot, .cursor-orb, .cursor-trail { display: none; }
  body { cursor: auto; }
}
```

**Step 4: Remove old unused CSS**

Remove any remaining references to: `.bg-gradient`, `.thumb-overlay`, `.thumb-tag`, `.case-num`, `.lottie-hero`, `.lottie-contact`, `.lottie-nav`, old `.case-card:hover { transform: translateY(-3px) }`.

**Step 5: Remove old JS**

Remove the old `animateBg` parallax function and old IntersectionObserver scroll reveals (replaced in task 5). Keep only the new JS added in tasks 2, 4, 5, 6.

**Step 6: Final browser pass**
- Check all 6 cards in asymmetric layout
- Verify cursor spring on desktop
- Check color sections (cream → terracotta → plum → ink footer)
- Verify word swap cycles
- Open responsive at 375px width

**Step 7: Commit**
```bash
git add index.html
git commit -m "feat: footer, mobile responsive, reduced motion, final cleanup"
```

---

### Task 9: Push branch to GitHub

**Step 1:**
```bash
cd /Users/danielgruskin/Documents/dangruskin.com
git push -u origin bold-redesign
```

**Step 2: Confirm with user before merging to main.**
