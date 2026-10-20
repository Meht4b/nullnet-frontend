const toast = document.querySelector('.toast');
let toastTimer;

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section, .download-inner, .footer').forEach((section) => revealObserver.observe(section));
}

document.querySelectorAll('.info-button').forEach((button) => {
  button.addEventListener('click', () => {
    const wasOpen = button.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.info-button').forEach((item) => item.setAttribute('aria-expanded', 'false'));
    button.setAttribute('aria-expanded', String(!wasOpen));
    button.style.color = wasOpen ? '' : 'var(--green)';
    button.style.borderColor = wasOpen ? '' : '#738d62';
  });
});
