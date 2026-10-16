/**
 * Main application coordinator
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize i18n
  if (window.portfolioI18n) {
    window.portfolioI18n.initI18n();
  }

  // 2. Initialize Gallery & Lightbox
  if (window.portfolioGallery) {
    window.portfolioGallery.initGallery();
  }

  // 3. Mobile Navigation Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navGroup = document.getElementById('nav-links-group');

  if (navToggle && navGroup) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navGroup.classList.toggle('is-open', !isExpanded);
    });

    // Close mobile nav on link click
    navGroup.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navGroup.classList.remove('is-open');
      });
    });
  }

  // 4. Header Shadow on Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(104, 0, 44, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });

  // 5. Helper function for clipboard copying
  function setupCopyButton(btnId, textElId) {
    const btn = document.getElementById(btnId);
    const textEl = document.getElementById(textElId);
    if (!btn || !textEl) return;

    btn.addEventListener('click', async () => {
      const textToCopy = textEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.textContent;
        const copiedLabel = window.portfolioI18n && window.portfolioI18n.currentLang === 'en'
          ? 'Copied!'
          : '¡Copiado!';
        btn.textContent = copiedLabel;
        btn.style.backgroundColor = 'var(--ink)';
        btn.style.color = 'var(--lemon)';

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
          btn.style.color = '';
        }, 2200);
      } catch (err) {
        console.error(`Failed to copy from #${textElId}:`, err);
      }
    });
  }

  setupCopyButton('copy-email-btn', 'contact-email-text');
  setupCopyButton('copy-phone-btn', 'contact-phone-text');
});
