(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const links = navbar.querySelectorAll('.nav-link');
  const path  = window.location.pathname;
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (
      (path.endsWith('index.html') || path === '/' || path.endsWith('/portfolio/'))
      && (href === 'index.html' || href === '../index.html' || href === '../../index.html' || href === '#')
    ) {
      link.classList.add('active');
    } else if (href && path.includes(href.replace('../', '').replace('../../', ''))) {
      link.classList.add('active');
    }
  });

  const hamburger  = navbar.querySelector('.hamburger');
  const mobileMenu = navbar.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('.nav-link').forEach(l =>
      l.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      })
    );
  }
})();
