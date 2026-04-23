(function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill[data-pct]');
  if (!fills.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.pct + '%';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(el => io.observe(el));
})();
