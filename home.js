// === PARTICLES ===
const container = document.getElementById('particles');
const colors = ['#00f0ff', '#ff2e88', '#ffe44d'];
for (let i = 0; i < 50; i++) {
  const p = document.createElement('div');
  p.className = 'pixel-particle';
  const size = Math.random() * 4 + 2;
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    width: ${size}px;
    height: ${size}px;
    background: ${colors[Math.floor(Math.random() * colors.length)]};
    animation-duration: ${Math.random() * 18 + 10}s;
    animation-delay: ${Math.random() * 12}s;
    box-shadow: 0 0 ${size * 2}px currentColor;
  `;
  container.appendChild(p);
}

// === SCROLL REVEAL ===
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// === FLOOR BAR ANIMATION ===
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.floor-fill').forEach(bar => {
        bar.classList.add('animated');
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.level-item').forEach(el => barObserver.observe(el));

// === ACTIVE NAV HIGHLIGHT ===
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(a => {
    const href = a.getAttribute('href');
    a.style.color = href === '#' + current ? 'var(--cyan)' : '';
  });
}, { passive: true });
