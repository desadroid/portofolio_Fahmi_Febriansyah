/**
 * script.js — Clean, Modern Backend Portfolio Interactivity
 * - Default Bright / Light Theme
 * - Capabilities Category Filter
 * - Clipboard Copy with Toast Feedback
 * - Navbar Scroll & Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // === 1. DEFAULT BRIGHT / LIGHT THEME ===
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = (currentTheme === 'dark') ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
    });
  }

  // === 2. CAPABILITIES FILTER ===
  const filterBtns = document.querySelectorAll('.filter-btn');
  const capabilityCards = document.querySelectorAll('.capability-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      capabilityCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // === 3. EMAIL COPY & TOAST NOTIFICATION ===
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  const defaultEmail = 'fahmijha12@gmail.com';
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;
    toastMsg.textContent = message;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function handleCopyEmail(e) {
    e.preventDefault();
    const email = e.currentTarget.getAttribute('data-email') || defaultEmail;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email)
        .then(() => showToast(`Copied ${email} to clipboard!`))
        .catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }
  }

  function fallbackCopy(text) {
    try {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast(`Copied ${text} to clipboard!`);
    } catch (err) {
      prompt('Copy email manually:', text);
    }
  }

  const heroCopyBtn = document.getElementById('btn-copy-email-hero');
  const contactCopyBtn = document.getElementById('btn-copy-email-contact');
  if (heroCopyBtn) heroCopyBtn.addEventListener('click', handleCopyEmail);
  if (contactCopyBtn) contactCopyBtn.addEventListener('click', handleCopyEmail);

  // === 4. TOP NAVBAR SCROLL & ACTIVE SCROLLSPY ===
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const scrollPos = window.pageYOffset + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // === 5. MOBILE HAMBURGER MENU ===
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
});
