# Supervisor Review Mode Case Study Page — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build `supervisor-review-mode.html` — a case study page that matches the `index.html` aesthetic and presents the Supervisor Review Mode project in a way that hooks senior PD recruiters.

**Architecture:** Single static HTML file at the project root. Shares all CSS variables, fonts, and visual language from `index.html` (dark bg, Instrument Sans/Serif, grain overlay, gradient bg, fadeUp animations). No external dependencies beyond Google Fonts already used.

**Tech Stack:** HTML, CSS, vanilla JS — no build step, no frameworks.

---

### Task 1: Page Shell + Head

**Files:**
- Create: `supervisor-review-mode.html`

**Step 1: Create the file with head, shared CSS variables, fonts, and base styles**

Copy the entire `<head>` from `index.html` verbatim (meta, fonts, CSS variables, reset, body styles, grain overlay, bg-gradient, nav styles, footer styles, @keyframes fadeUp, @media breakpoints). Update `<title>` to `Supervisor Review Mode — Dan Gruskin`.

Add these additional CSS blocks inside `<style>` after the shared styles:

```css
/* CASE STUDY LAYOUT */
.cs-hero {
  min-height: 38vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 3rem 5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.cs-back {
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  color: var(--muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  transition: color 0.2s;
  opacity: 0;
  animation: fadeUp 0.5s ease 0.1s forwards;
}
.cs-back:hover { color: var(--fg); }

.cs-title {
  font-family: 'Instrument Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 4rem);
  font-weight: 600;
  line-height: 1.06;
  letter-spacing: -0.025em;
  margin-bottom: 1.25rem;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.2s forwards;
}
.cs-title em {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--accent);
}

.cs-summary {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--muted);
  max-width: 600px;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.3s forwards;
}

.cs-meta-bar {
  display: flex;
  gap: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  opacity: 0;
  animation: fadeUp 0.6s ease 0.4s forwards;
}
.cs-meta-item { display: flex; flex-direction: column; gap: 0.3rem; }
.cs-meta-label {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}
.cs-meta-value {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--fg);
}

/* CONTENT SECTIONS */
.cs-section {
  padding: 5rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
}
.cs-section + .cs-section {
  padding-top: 0;
}

.cs-section-label {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.cs-section-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* PROBLEM */
.cs-problem {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}
.cs-problem-statement {
  font-size: clamp(1.3rem, 2.2vw, 1.75rem);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.02em;
}
.cs-problem-statement em {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--accent);
}
.cs-problem-body {
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--muted);
}
.cs-problem-body p + p { margin-top: 1rem; }

/* RESULTS */
.cs-results {
  background: var(--faint);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 3.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.cs-stat {}
.cs-stat-number {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--fg);
  line-height: 1;
  margin-bottom: 0.5rem;
}
.cs-stat-number span {
  color: var(--accent);
}
.cs-stat-label {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.5;
}

/* PROCESS */
.cs-process-stack {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.cs-process-phase {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 3rem;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--border);
  align-items: start;
}
.cs-process-phase:first-child { border-top: 1px solid var(--border); }
.cs-phase-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent2);
  padding-top: 0.2rem;
}
.cs-phase-body {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--muted);
}
.cs-phase-body strong {
  color: var(--fg);
  font-weight: 500;
}

/* QUOTES */
.cs-quotes {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.cs-quote {
  border-left: 2px solid var(--accent);
  padding: 1.25rem 0 1.25rem 2rem;
}
.cs-quote-text {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.6;
  color: var(--fg);
  margin-bottom: 0.75rem;
}
.cs-quote-attr {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

/* CONCLUSION */
.cs-conclusion {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}
.cs-conclusion-heading {
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
.cs-conclusion-heading em {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--accent);
}
.cs-conclusion-body {
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--muted);
}
.cs-conclusion-body p + p { margin-top: 1rem; }

/* NEXT PROJECT */
.cs-next {
  padding: 4rem 3rem 8rem;
  max-width: 1200px;
  margin: 0 auto;
}
.cs-next-inner {
  border-top: 1px solid var(--border);
  padding-top: 3rem;
}
.cs-next-label {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.5rem;
}
.cs-next-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: var(--fg);
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  transition: border-color 0.2s, background 0.2s;
}
.cs-next-card:hover {
  border-color: rgba(232,228,220,0.25);
  background: var(--faint);
}
.cs-next-card-title {
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}
.cs-next-card-sub {
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 0.25rem;
}
.cs-next-arrow {
  font-size: 1.5rem;
  color: var(--muted);
  transition: transform 0.2s, color 0.2s;
}
.cs-next-card:hover .cs-next-arrow {
  transform: translateX(4px);
  color: var(--fg);
}

/* IMAGE PLACEHOLDER */
.cs-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  background: var(--faint);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
}
.cs-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
}

@media (max-width: 860px) {
  .cs-hero { padding: 0 1.5rem 4rem; }
  .cs-meta-bar { flex-wrap: wrap; gap: 1.5rem; }
  .cs-section { padding: 4rem 1.5rem; }
  .cs-problem { grid-template-columns: 1fr; gap: 2rem; }
  .cs-results { grid-template-columns: 1fr; padding: 2rem; gap: 1.5rem; }
  .cs-process-phase { grid-template-columns: 1fr; gap: 0.75rem; }
  .cs-conclusion { grid-template-columns: 1fr; gap: 2rem; }
  .cs-next { padding: 3rem 1.5rem 6rem; }
}
```

**Step 2: Add the HTML body**

```html
<body>
  <div class="bg-gradient"></div>

  <nav>
    <a href="index.html" class="nav-logo">Dan Gruskin</a>
    <ul class="nav-links">
      <li><a href="index.html#work">Work</a></li>
      <li><a href="index.html#about">About</a></li>
      <li><a href="index.html#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section class="cs-hero">
    <a href="index.html#work" class="cs-back">← Work</a>
    <h1 class="cs-title">Supervisor<br><em>Review Mode</em></h1>
    <p class="cs-summary">Replacing a fragmented offline process with a streamlined, cloud-based review environment — so supervisors could focus on the cases, not the paperwork.</p>
    <div class="cs-meta-bar">
      <div class="cs-meta-item">
        <span class="cs-meta-label">Role</span>
        <span class="cs-meta-value">Product Designer</span>
      </div>
      <div class="cs-meta-item">
        <span class="cs-meta-label">Team</span>
        <span class="cs-meta-value">Designer, PM, Engineering, Stakeholders</span>
      </div>
      <div class="cs-meta-item">
        <span class="cs-meta-label">Timeline</span>
        <span class="cs-meta-value">4 Months</span>
      </div>
      <div class="cs-meta-item">
        <span class="cs-meta-label">Domain</span>
        <span class="cs-meta-value">Civic Tech · Enterprise UX</span>
      </div>
    </div>
  </section>

  <!-- HERO IMAGE -->
  <div style="max-width:1200px;margin:0 auto;padding:0 3rem;">
    <div class="cs-image">
      <img src="img/thumbnails/supervisor-review-mode.avif" alt="Supervisor Review Mode interface" />
    </div>
  </div>

  <!-- PROBLEM -->
  <section class="cs-section">
    <div class="cs-section-label">The Problem</div>
    <div class="cs-problem">
      <div class="cs-problem-statement">
        Supervisors were managing asylum cases using<em> Adobe Acrobat and a folder on their desktop.</em>
      </div>
      <div class="cs-problem-body">
        <p>The review process required supervisors to download interview recordings, open forms in Acrobat, annotate and edit locally, then manually track every document across an offline filing system. Every review was a context-switch away from the app where their work actually lived.</p>
        <p>Beyond the inefficiency, the cognitive overhead was real. Missed steps, version confusion, and lost files were risks in a domain where accuracy genuinely matters — these are asylum and refugee cases, not expense reports.</p>
        <p>The opportunity was clear: bring the entire review workflow into the application and give supervisors the tools they needed without disrupting how officers worked around them.</p>
      </div>
    </div>
  </section>

  <!-- RESULTS -->
  <section class="cs-section" style="padding-top:0;">
    <div class="cs-section-label">Results</div>
    <div class="cs-results">
      <div class="cs-stat">
        <div class="cs-stat-number">1,200<span>+</span></div>
        <div class="cs-stat-label">Sessions in month two — well above projections for a new workflow tool</div>
      </div>
      <div class="cs-stat">
        <div class="cs-stat-number">22<span>%</span></div>
        <div class="cs-stat-label">Month-over-month usage growth, sustained across the first quarter</div>
      </div>
      <div class="cs-stat">
        <div class="cs-stat-number">83<span>%</span></div>
        <div class="cs-stat-label">Users completing the intended happy path on their first session</div>
      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section class="cs-section" style="padding-top:3rem;">
    <div class="cs-section-label">Process</div>
    <div class="cs-process-stack">
      <div class="cs-process-phase">
        <div class="cs-phase-label">Research &amp; Analysis</div>
        <div class="cs-phase-body">
          I interviewed 7 supervisors to map what was actually happening — not what the process was supposed to be. The gap was significant. Users had developed their own workarounds: personal naming conventions, duplicate backups, handwritten checklists. I translated these sessions into user flows that identified every tool being used, every handoff point, and every place the process broke down. Those flows became the foundation for everything that followed — and the primary artifact I used to build alignment with leadership.
        </div>
      </div>
      <div class="cs-process-phase">
        <div class="cs-phase-label">Workshops</div>
        <div class="cs-phase-body">
          I ran three targeted workshops rather than one big alignment meeting. <strong>With leadership:</strong> grounding the project in outcomes, not features — what does success look like six months post-launch? <strong>With engineering:</strong> mapping technical constraints early, so the design wouldn't run into walls late. <strong>With a cross-functional design group:</strong> rapid ideation on solutions, stress-testing assumptions before committing to a direction. The three-workshop structure compressed what often becomes months of misalignment into two weeks.
        </div>
      </div>
      <div class="cs-process-phase">
        <div class="cs-phase-label">Prototyping</div>
        <div class="cs-phase-body">
          I built a high-fidelity prototype early — not to look finished, but to make the decisions real enough to critique. The key design challenge was the mode itself: supervisors needed to enter a distinct review context without losing their place in the main application. I explored three patterns for this (overlay, new tab, contextual panel) before landing on a mode toggle that transformed the existing interface rather than replacing it. Leadership feedback tightened the scope; the prototype made those conversations specific.
        </div>
      </div>
      <div class="cs-process-phase">
        <div class="cs-phase-label">Usability Testing</div>
        <div class="cs-phase-body">
          Four users, one task: complete a review using the new system. We also A/B tested three specific features during these sessions — the placement of the review toolbar, the concur/not-concur decision flow, and the notification pattern for officers. The sessions surfaced two changes that weren't on our radar: supervisors wanted to see case context at a glance without switching views, and the toolbar was being missed on first load. Both were addressed before handoff.
        </div>
      </div>
      <div class="cs-process-phase">
        <div class="cs-phase-label">Design System &amp; Handoff</div>
        <div class="cs-phase-body">
          The final design was broken into documented components and contributed to our internal design system — not just dropped in, but named, annotated, and reviewed with the engineering team before development began. Handoff included state documentation for every interactive element and a component map that engineering could reference during implementation. This reduced back-and-forth significantly during the build phase.
        </div>
      </div>
      <div class="cs-process-phase">
        <div class="cs-phase-label">Launch</div>
        <div class="cs-phase-body">
          We've historically struggled with adoption on new features — users default to what they know. For this launch I worked with stakeholders to design the rollout itself: a phased approach with a pilot group, in-app guidance for first sessions, and a feedback channel that surfaced issues in real time. The 1,200+ sessions in month two weren't an accident — they were the result of treating launch as part of the design problem.
        </div>
      </div>
    </div>
  </section>

  <!-- USER QUOTES -->
  <section class="cs-section" style="padding-top:0;">
    <div class="cs-section-label">What Users Said</div>
    <div class="cs-quotes">
      <div class="cs-quote">
        <div class="cs-quote-text">"The changes you guys made definitely make it easier in viewing it, because sometimes it's really easy to miss things."</div>
        <div class="cs-quote-attr">Supervisor User</div>
      </div>
      <div class="cs-quote">
        <div class="cs-quote-text">"I've been using it and it's so much nicer than downloading and uploading and keeping track of everything!"</div>
        <div class="cs-quote-attr">Supervisor User</div>
      </div>
      <div class="cs-quote">
        <div class="cs-quote-text">"Overall it's an improvement, but it's still not perfect and I still have to do a lot of other review tasks in other places."</div>
        <div class="cs-quote-attr">Supervisor User — and the clearest signal of what to build next</div>
      </div>
    </div>
  </section>

  <!-- CONCLUSION -->
  <section class="cs-section" style="padding-top:0;">
    <div class="cs-section-label">Takeaways</div>
    <div class="cs-conclusion">
      <div class="cs-conclusion-heading">
        The best adoption metric is one you<em> earn before launch.</em>
      </div>
      <div class="cs-conclusion-body">
        <p>The adoption numbers were strong, but they weren't a surprise — they were the result of involving real supervisors at every stage, from the first research sessions through the rollout itself. When users have shaped a product, they show up for it.</p>
        <p>The critical quote — "still not perfect, still tasks elsewhere" — was the most useful thing to come out of the launch. It's now the starting point for the next phase of the feature. Good feedback doesn't mean everyone is happy. It means you understand exactly what's left to do.</p>
        <p>If I were to run this project again, I'd push harder for a larger usability testing cohort. Four users caught real issues, but there were edge cases in supervisor workflows that only surfaced post-launch. More pre-launch exposure to the full range of users would have closed that gap.</p>
      </div>
    </div>
  </section>

  <!-- NEXT PROJECT -->
  <div class="cs-next">
    <div class="cs-next-inner">
      <div class="cs-next-label">Next Project</div>
      <a href="case-finder.html" class="cs-next-card">
        <div>
          <div class="cs-next-card-title">Case Finder</div>
          <div class="cs-next-card-sub">Search &amp; Filter · Information Architecture · Civic Tech</div>
        </div>
        <div class="cs-next-arrow">→</div>
      </a>
    </div>
  </div>

  <footer>
    <p>© 2026 Dan Gruskin</p>
    <p>San Diego, CA — Open to Remote</p>
  </footer>

  <script>
    // Background parallax
    const bg = document.querySelector('.bg-gradient');
    let tx = 0, ty = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => {
      tx = (e.clientX / window.innerWidth  - 0.5) * 40;
      ty = (e.clientY / window.innerHeight - 0.5) * 40;
    });
    (function animateBg() {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      if (bg) bg.style.transform = `translate(${cx}px, ${cy}px) scale(1.1)`;
      requestAnimationFrame(animateBg);
    })();

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    document.querySelectorAll('.cs-problem, .cs-results, .cs-process-phase, .cs-quote, .cs-conclusion, .cs-next-card, .cs-image').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
      observer.observe(el);
    });
  </script>
</body>
```

**Step 3: Open in browser to verify**

```bash
open /Users/danielgruskin/Documents/dangruskin.com/supervisor-review-mode.html
```

Check: hero animates in, meta bar shows, image loads, all sections visible, next project card present.

**Step 4: Update index.html to link card 01 to the new page**

In `index.html`, find:
```html
<a href="#" class="case-card">
  ...supervisor-review-mode...
```
Change `href="#"` to `href="supervisor-review-mode.html"`.

**Step 5: Commit**

```bash
cd /Users/danielgruskin/Documents/dangruskin.com
git add supervisor-review-mode.html index.html docs/
git commit -m "Add Supervisor Review Mode case study page"
git push
```

---

*Note: Images for the case study body (process flows, prototype screenshots) can be added later by placing files in `img/` and replacing the `.cs-image` placeholder with `<img>` tags.*
