// Fade-in intro elements
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => { el.style.opacity = 1; }, i * 500);
  });

  // Pause/resume 3D carousel rotation when hovering a section
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const sections = carousel.querySelectorAll('section');
    sections.forEach((sec) => {
      sec.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
      });
      sec.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
      });
    });
  }
});

// Dark mode toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
