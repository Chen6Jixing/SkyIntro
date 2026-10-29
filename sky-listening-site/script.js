// Keep the board review panel accessible while preserving native details/summary behavior.
document.querySelectorAll('.section-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.section-nav a').forEach((item) => item.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'location');
  });
});
