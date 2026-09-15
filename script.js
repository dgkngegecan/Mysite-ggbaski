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

// Brief wheel easing on desktop; touch, keyboard and nested scrollers stay native.
// No transformed page wrapper: sticky navigation, find and anchor links keep working.
(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(any-pointer: fine)');
  let frame = 0;
  let position = window.scrollY;
  let target = position;
  let applied = position;
  let previousTime = 0;

  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
    root.classList.remove('wheel-scrolling');
  }

  function tick(time) {
    // Yield if the browser, a focus change or another control moved the page.
    if (Math.abs(window.scrollY - applied) > 2) {
      stop();
      return;
    }
    target = Math.max(0, Math.min(target, root.scrollHeight - window.innerHeight));
    const elapsed = Math.min(time - previousTime, 64);
    previousTime = time;
    position += (target - position) * (1 - Math.exp(-elapsed / 100));
    const finished = Math.abs(target - position) < 0.5;
    window.scrollTo({ top: finished ? target : position, behavior: 'instant' });
    applied = window.scrollY;
    if (finished) stop();
    else frame = requestAnimationFrame(tick);
  }

  function hasNativeScroller(element) {
    for (let node = element; node && node !== document.body; node = node.parentElement) {
      if (node.matches('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return true;
      if (node.scrollHeight > node.clientHeight + 1 && /auto|scroll|overlay/.test(getComputedStyle(node).overflowY)) return true;
    }
    return false;
  }

  window.addEventListener('wheel', (event) => {
    if (reducedMotion.matches || !finePointer.matches || event.defaultPrevented ||
        !event.cancelable || event.ctrlKey || event.metaKey || event.shiftKey ||
        Math.abs(event.deltaX) >= Math.abs(event.deltaY) ||
        hasNativeScroller(event.target instanceof Element ? event.target : null)) {
      stop();
      return;
    }

    // Normalize wheel events expressed in pixels, text lines or pages.
    const unit = event.deltaMode === 1 ? parseFloat(getComputedStyle(root).fontSize) * 1.5 :
      event.deltaMode === 2 ? window.innerHeight : 1;
    const delta = event.deltaY * unit;
    const current = window.scrollY;
    const max = Math.max(0, root.scrollHeight - window.innerHeight);
    if ((current <= 0 && delta < 0) || (current >= max && delta > 0)) {
      stop();
      return;
    }

    event.preventDefault();
    if (!frame) {
      position = applied = target = current;
      previousTime = performance.now();
      root.classList.add('wheel-scrolling');
      window.scrollTo({ top: current, behavior: 'instant' });
    }
    // A change of direction responds immediately, without fighting queued motion.
    if (Math.sign(delta) !== Math.sign(target - current)) target = current;
    target = Math.max(0, Math.min(max, target + delta));
    if (!frame) frame = requestAnimationFrame(tick);
  }, { passive: false });

  // Direct input always takes over, including scrollbar dragging and browser find.
  for (const type of ['pointerdown', 'touchstart', 'keydown', 'click', 'focusin', 'resize', 'hashchange', 'popstate', 'pagehide']) {
    window.addEventListener(type, stop, { passive: true });
  }
  reducedMotion.addEventListener('change', stop);
  finePointer.addEventListener('change', stop);
  document.addEventListener('visibilitychange', stop);
})();
