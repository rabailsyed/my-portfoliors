/* ══════════════════════════════════════
   Rabail Syed Portfolio — main.js
══════════════════════════════════════ */

/* ── Cursor glow ── */
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

/* ── Nav scroll behaviour ── */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  highlightNav();
}, { passive: true });

/* ── Active nav link ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');
function highlightNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.dataset.section === current);
  });
}

/* ── Mobile burger ── */
const burger    = document.getElementById('navBurger');
const navLinksEl = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinksEl.style.display = navLinksEl.style.display === 'flex' ? 'none' : 'flex';
  navLinksEl.style.flexDirection = 'column';
  navLinksEl.style.position = 'absolute';
  navLinksEl.style.top = '70px';
  navLinksEl.style.left = '0';
  navLinksEl.style.right = '0';
  navLinksEl.style.background = 'rgba(14,14,14,.97)';
  navLinksEl.style.padding = '1.5rem 2rem';
  navLinksEl.style.backdropFilter = 'blur(20px)';
  navLinksEl.style.gap = '1.5rem';
});

/* ── Particle canvas ── */
const canvas = document.getElementById('particlesCanvas');
const ctx    = canvas.getContext('2d');
let W, H, particles = [];

function resizeCanvas() {
  W = canvas.width  = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
}

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = (Math.random() - .5) * .4;
    this.vy = (Math.random() - .5) * .4;
    this.r  = Math.random() * 1.5 + .3;
    this.alpha = Math.random() * .5 + .1;
    this.color = ['#ff89ab','#8b95ff','#c47fff'][Math.floor(Math.random()*3)];
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

function initParticles() {
  resizeCanvas();
  particles = Array.from({ length: 120 }, () => new Particle());
}

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(139,149,255,${.12 * (1 - dist/100)})`;
        ctx.lineWidth = .5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  drawLines();
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  particles.forEach(p => p.reset());
});

initParticles();
animateParticles();

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal-up, .reveal-right, .line-reveal');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el    = entry.target;
    const delay = parseInt(el.dataset.delay || 0);
    setTimeout(() => el.classList.add('revealed'), delay);
    observer.unobserve(el);
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* ── Counter animation ── */
const counters = document.querySelectorAll('.stat-num');
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el  = entry.target;
    const end = parseInt(el.dataset.count);
    let current = 0;
    const step = end / 40;
    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      el.textContent = Math.ceil(current);
      if (current >= end) clearInterval(timer);
    }, 40);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => countObserver.observe(c));

/* ── Contact form ── */
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = document.getElementById('form-submit');
  btn.querySelector('span').textContent = 'Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #c47fff, #8b95ff)';
  setTimeout(() => {
    btn.querySelector('span').textContent = 'Send Message';
    btn.style.background = '';
    form.reset();
  }, 3000);
});

/* ── Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Hero headline typewriter effect ── */
window.addEventListener('load', () => {
  document.querySelectorAll('.line-reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('revealed'), 200 + i * 200);
  });
  document.querySelectorAll('.reveal-up[data-delay]').forEach(el => {
    const delay = parseInt(el.dataset.delay || 0);
    if (el.closest('.hero')) {
      setTimeout(() => el.classList.add('revealed'), delay);
    }
  });
  document.querySelectorAll('.reveal-right[data-delay]').forEach(el => {
    const delay = parseInt(el.dataset.delay || 0);
    if (el.closest('.hero')) {
      setTimeout(() => el.classList.add('revealed'), delay);
    }
  });
});
