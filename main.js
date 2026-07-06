/* ====================================================
   AWN ALMAALI — SHARED JS
   Language Switching • Scroll Animations • Nav • Cards
   ==================================================== */

(function () {
  'use strict';

  // ─── Language State ─────────────────────────────────────────────────────────

  let currentLang = localStorage.getItem('alnoor_lang') || 'en';
  let arTranslations = null;

  function getLangRoot() { return document.documentElement; }

  function saveEnglishTexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (!el.dataset.i18nEn) {
        el.dataset.i18nEn = el.textContent;
      }
    });
  }

  async function loadArTranslations() {
    if (arTranslations) return arTranslations;
    try {
      const res = await fetch('locales/ar.json');
      if (!res.ok) throw new Error('Failed to load ar.json');
      arTranslations = await res.json();
      return arTranslations;
    } catch (e) {
      console.warn('Translation load failed:', e);
      return {};
    }
  }

  async function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('alnoor_lang', lang);

    const root = getLangRoot();
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    if (lang === 'ar') {
      const t = await loadArTranslations();
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
          el.textContent = t[key];
        }
      });
    } else {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        if (el.dataset.i18nEn !== undefined) {
          el.textContent = el.dataset.i18nEn;
        }
      });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active-lang', btn.dataset.lang === lang);
    });
  }

  function initLang() {
    saveEnglishTexts();
    applyLang(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
  }

  // ─── Navigation ─────────────────────────────────────────────────────────────

  function initNav() {
    const header = document.getElementById('header');
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    const closeBtn = document.getElementById('navClose');
    const overlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!header) return;

    // Scroll → sticky light header
    const onScroll = () => {
      header.classList.toggle('light', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu — create overlay if missing
    let navOverlay = overlay;
    if (!navOverlay) {
      navOverlay = document.createElement('div');
      navOverlay.id = 'navOverlay';
      navOverlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:998;opacity:0;pointer-events:none;transition:opacity .3s ease';
      document.body.appendChild(navOverlay);
    }
    const overlayEl = navOverlay;

    const openMenu = () => {
      menu?.classList.add('open');
      overlayEl.style.opacity = '1';
      overlayEl.style.pointerEvents = 'auto';
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      menu?.classList.remove('open');
      overlayEl.style.opacity = '0';
      overlayEl.style.pointerEvents = 'none';
      document.body.style.overflow = '';
    };

    toggle?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlayEl.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (
        (currentPage === '' || currentPage === 'index.html') && href.includes('index') ||
        href.includes(currentPage.replace('.html', ''))
      ) {
        link.classList.add('active');
      }
    });
  }

  // ─── Scroll Reveal ───────────────────────────────────────────────────────────

  function initScrollReveal() {
    const targets = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.12 }
    );

    targets.forEach(t => io.observe(t));
  }

  // ─── Animated Counters ───────────────────────────────────────────────────────

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + '+';
      if (current < target) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            animateCount(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(c => io.observe(c));
  }

  // ─── Favourite (Heart) Button ────────────────────────────────────────────────

  function initFavButtons() {
    document.querySelectorAll('.prop-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.classList.toggle('loved');

        // Burst micro-animation
        btn.style.transform = 'scale(1.4)';
        setTimeout(() => { btn.style.transform = ''; }, 220);
      });
    });
  }

  // ─── Gallery Filter ──────────────────────────────────────────────────────────

  function initFilter() {
    const tabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.prop-card[data-cat]');
    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const cat = tab.dataset.cat;

        cards.forEach((card, i) => {
          const show = cat === 'all' || cat === 'investment' || card.dataset.cat === cat;
          card.style.display = show ? 'block' : 'none';
          if (show) {
            card.style.animation = `none`;
            card.offsetHeight; // reflow
            card.style.animation = `fadeIn 0.4s ease ${i * 60}ms both`;
          }
        });
      });
    });
  }

  // ─── Countdown Timer ─────────────────────────────────────────────────────────

  function initCountdown() {
    const wrap = document.getElementById('countdown');
    if (!wrap) return;

    // Count to a fixed future date (7 days from a fixed anchor)
    const target = new Date();
    target.setDate(target.getDate() + 7);
    target.setHours(23, 59, 59, 0);

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    function pad(n) { return String(n).padStart(2, '0'); }

    function update() {
      const diff = target - Date.now();
      if (diff <= 0) {
        [daysEl, hoursEl, minsEl, secsEl].forEach(el => { if (el) el.textContent = '00'; });
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      if (daysEl) daysEl.textContent = pad(d);
      if (hoursEl) hoursEl.textContent = pad(h);
      if (minsEl) minsEl.textContent = pad(m);
      if (secsEl) secsEl.textContent = pad(s);
    }

    update();
    setInterval(update, 1000);
  }

  // ─── Contact Form ────────────────────────────────────────────────────────────

  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;

      btn.textContent = currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';
      btn.disabled = true;

      try {
        const data = new FormData(form);
        data.append('_subject', currentLang === 'ar' ? 'استفسار جديد من موقع عون المعالي' : 'New inquiry from Awnalmaali website');

        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          btn.textContent = currentLang === 'ar' ? 'تم الإرسال!' : 'Sent!';
          btn.style.background = 'var(--success)';
          form.reset();
        } else {
          btn.textContent = currentLang === 'ar' ? 'فشل الإرسال' : 'Failed';
          btn.style.background = 'var(--error)';
        }
      } catch {
        btn.textContent = currentLang === 'ar' ? 'خطأ في الاتصال' : 'Network error';
        btn.style.background = 'var(--error)';
      }

      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    });
  }

  // ─── Back to Top ─────────────────────────────────────────────────────────────

  function initBackTop() {
    const btn = document.getElementById('backTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ─── Smooth Scroll for Hash Links ───────────────────────────────────────────

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#') return;
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ─── Card Tilt (subtle 3D on mouse move) ────────────────────────────────────

  function initCardTilt() {
    document.querySelectorAll('.prop-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rotX = ((e.clientY - cy) / (rect.height / 2)) * -5;
        const rotY = ((e.clientX - cx) / (rect.width / 2)) * 5;
        card.style.transform = `translateY(-12px) scale(1.01) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ─── Page Transition Fade ────────────────────────────────────────────────────

  function initPageFade() {
    if (document.visibilityState === 'hidden') return;
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.35s ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { document.body.style.opacity = '1'; });
    });
  }

  window.addEventListener('pageshow', e => {
    if (e.persisted) {
      document.body.style.opacity = '1';
    }
  });

  // ─── Init ────────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', () => {
    initLang();
    initNav();
    initScrollReveal();
    initCounters();
    initFavButtons();
    initFilter();
    initCountdown();
    initContactForm();
    initBackTop();
    initSmoothScroll();
    initCardTilt();
    initPageFade();
  });

})();
