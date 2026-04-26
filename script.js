/**
 * GEGEBASKI — Client-side interactions
 *
 * Features:
 *   - Sticky navbar with glassmorphic effect on scroll
 *   - Mobile hamburger menu toggle
 *   - Smooth-scroll for anchor links
 *   - Scroll-reveal animations via IntersectionObserver
 *   - FAQ accordion (single-open)
 *   - Active nav link highlighting based on scroll position
 *
 * No external dependencies. All selectors reference IDs/classes defined in index.html.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar scroll effect ---- */
  const navbar = document.getElementById('navbar');

  const updateNavbar = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();


  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Auto-close mobile nav when a link is tapped
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });


  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ---- Scroll-reveal (IntersectionObserver) ---- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ---- FAQ accordion ---- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all, then toggle the clicked one
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });


  /* ---- Active nav highlighting on scroll ---- */
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const highlightActiveNav = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + id
            ? 'var(--text-primary)'
            : '';
        });
      }
    });
  };

  window.addEventListener('scroll', highlightActiveNav, { passive: true });
});
