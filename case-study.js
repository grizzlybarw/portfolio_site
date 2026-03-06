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

  /* --- SCROLL REVEAL ---------------------------------------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll(
    '.cs-image, .cs-problem, .cs-results, .cs-process-phase, .cs-inline-image, .cs-quote, .cs-conclusion, .cs-next-card'
  ).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });

})();
