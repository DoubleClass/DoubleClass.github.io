(() => {
  'use strict';

  document.documentElement.classList.add('has-js');

  const isLegacyHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
  const room = new URLSearchParams(window.location.search).get('room');

  if (isLegacyHome && room && /^[a-z0-9]{4}-[a-z0-9]{4}$/i.test(room.trim())) {
    const destination = new URL('/games/cold-war-standoff/play/', window.location.origin);
    destination.search = window.location.search;
    destination.hash = window.location.hash;
    window.location.replace(destination.href);
    return;
  }

  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = menuToggle ? document.getElementById(menuToggle.getAttribute('aria-controls')) : null;

  if (!menuToggle || !menu) return;

  const setMenuState = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menu.dataset.open = String(isOpen);
  };

  menuToggle.addEventListener('click', () => {
    setMenuState(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('[data-menu-link]').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      menuToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof Node && !menu.contains(target) && !menuToggle.contains(target)) {
      setMenuState(false);
    }
  });
})();
