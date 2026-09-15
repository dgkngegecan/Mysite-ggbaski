// Native links and <details> keep all content usable without JavaScript.
const menu = document.querySelector('.mobile-menu');
const menuSummary = menu?.querySelector('summary');

// Keep anchor headings and the expanded menu clear of a header enlarged by text scaling.
const header = document.querySelector('.site-header');
if (header && 'ResizeObserver' in window) {
  const headerObserver = new ResizeObserver(() => {
    document.documentElement.style.setProperty('--header-height', Math.ceil(header.getBoundingClientRect().height) + 'px');
  });
  headerObserver.observe(header);
}

function closeMenu({ restoreFocus = false } = {}) {
  if (!menu?.open) return;
  menu.open = false;
  if (restoreFocus) menuSummary.focus();
}

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
    const section = document.getElementById(link.hash.slice(1));
    if (section) {
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu({ restoreFocus: true });
});

document.addEventListener('click', (event) => {
  if (menu && !menu.contains(event.target)) {
    closeMenu({ restoreFocus: menu.contains(document.activeElement) });
  }
});

const desktopViewport = window.matchMedia('(min-width: 801px)');
desktopViewport.addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

const year = document.getElementById('copyright-year');
if (year) year.textContent = new Date().getFullYear();
