/* ============================================================
   CASE STUDY SHARED SCRIPT
   Injects nav + footer, runs parallax + scroll reveal.
   Include at the bottom of <body> on every case study page.
   ============================================================ */

(function () {

  /* --- NAV -------------------------------------------------- */
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="index.html" class="nav-logo">Dan Gruskin</a>
    <ul class="nav-links">
      <li><a href="index.html#work">Work</a></li>
      <li><a href="index.html#about">About</a></li>
      <li><a href="index.html#contact">Contact</a></li>
    </ul>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  /* --- FOOTER ----------------------------------------------- */
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>© 2026 Dan Gruskin</p>
    <p>San Diego, CA — Open to Remote</p>
  `;
  document.body.appendChild(footer);

  /* --- SCROLL PROGRESS -------------------------------------- */
  const progress = document.getElementById('scroll-progress');
  if (progress) {
    function updateProgress() {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      progress.style.width = (Math.min(scrolled, 1) * 100) + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* --- BACKGROUND PARALLAX ---------------------------------- */
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

  /* --- STAT COUNTERS ---------------------------------------- */
  function animateCounter(el) {
    const span = el.querySelector('span');
    const suffix = span ? span.outerHTML : '';
    const raw = el.textContent.replace(/,/g, '').replace(/[^0-9]/g, '');
    const target = parseInt(raw, 10);
    if (isNaN(target)) return;
    const useComma = target >= 1000;
    const duration = 1400;
    const startTime = performance.now();
    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
    function step(now) {
      const t = Math.min((now - startTime) / duration, 1);
      const value = Math.round(easeOutCubic(t) * target);
      el.innerHTML = (useComma ? value.toLocaleString() : value) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.innerHTML = (useComma ? target.toLocaleString() : target) + suffix;
    }
    requestAnimationFrame(step);
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.cs-stat-number').forEach(el => statObserver.observe(el));

  /* --- SCROLL REVEAL ---------------------------------------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translate(0, 0)';
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  // Standard up-reveal
  document.querySelectorAll(
    '.cs-image, .cs-problem, .cs-results, .cs-results-strip, .cs-inline-image, .cs-quote, .cs-conclusion, .cs-next-card, .feature-card'
  ).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    const delay = Math.min(i * 0.05, 0.25);
    el.style.transition = `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`;
    observer.observe(el);
  });

  // Process phases: slide in from left (connectors fade up)
  document.querySelectorAll('.cs-process-phase').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-24px)';
    const delay = Math.min(i * 0.07, 0.35);
    el.style.transition = `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s, background 0.25s ease`;
    observer.observe(el);
  });

  document.querySelectorAll('.cs-phase-connector').forEach((el, i) => {
    el.style.opacity = '0';
    const delay = Math.min(i * 0.07 + 0.04, 0.38);
    el.style.transition = `opacity 0.4s ease ${delay}s`;
    observer.observe(el);
  });

})();
