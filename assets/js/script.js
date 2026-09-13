/**
 * Power Solutions — Industrial Precision Interactive & Motion Engine
 * Class "A" Licensed Electrical Contractor | Government of Punjab Certified
 * Pure Vanilla ES6 — Zero External Dependencies / High Performance
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. SERVICES CATALOG (100% Preserved Data + Lucide Icon Mappings)
  // =========================================================================
  const servicesCatalog = [
    {
      id: 'lt-ht',
      icon: 'zap',
      title: 'LT & HT Electrical Works',
      shortDesc: 'End-to-end low and high tension electrical installations engineered for industrial plants, commercial towers, and substations.',
      fullDesc: 'Power Solutions delivers certified Low Tension (up to 1kV) and High Tension (above 1kV up to 33kV) infrastructure. From transformer installations to HT/LT cabling, our government-certified team guarantees regulatory compliance and uncompromising safety.',
      features: [
        'HT Substation & Transformer Erection (up to 33kV)',
        'LT Distribution Systems & Heavy Cable Laying',
        'Busbar Trunking Systems (BBT) & Cable Trays',
        'Certified Insulation Resistance & Hi-Pot Testing',
        'Load Calculation, Power Factor & Harmonic Analysis',
        'Statutory Approvals & CEIG Inspection Clearance'
      ]
    },
    {
      id: 'panel',
      icon: 'cpu',
      title: 'Panel Manufacturing & Assembly',
      shortDesc: 'Custom-engineered electrical control panels built with genuine switchgear from ABB, Schneider, L&T, and Siemens.',
      fullDesc: 'We manufacture customized electrical control panels meeting CPRI standards and industrial protocols. Every panel undergoes stringent multi-stage dielectric, continuity, and load testing prior to site commissioning.',
      features: [
        'Power Control Centers (PCC) & Motor Control Centers (MCC)',
        'Automatic Power Factor Correction (APFC) Panels',
        'Automatic Mains Failure (AMF) & DG Synchronization Panels',
        'VFD & Soft Starter Control Panels',
        'Modular Form-4 Enclosures with IP54/IP55 Protection',
        'Routine Inspection, Factory Acceptance Tests (FAT) & AMC'
      ]
    },
    {
      id: 'automation',
      icon: 'activity',
      title: 'Automation & SCADA Works',
      shortDesc: 'Intelligent industrial automation, programmable logic controllers (PLC), and real-time SCADA monitoring systems.',
      fullDesc: 'Modernize manufacturing lines with smart automation. We program and commission robust PLC, HMI, and telemetry systems that maximize operational throughput while minimizing unplanned downtime.',
      features: [
        'PLC System Architecture (Siemens, Schneider, ABB, Delta)',
        'HMI & SCADA Interface Design for Real-Time Telemetry',
        'Process Sensor & Actuator Loop Integration',
        'Industrial Networking (Modbus, Profinet, Ethernet/IP)',
        'Legacy Panel Retrofitting & Automation Upgrades',
        '24/7 Remote Diagnostic & Troubleshooting Support'
      ]
    },
    {
      id: 'supply',
      icon: 'boxes',
      title: 'Authorized Electrical Supply',
      shortDesc: 'Direct authorized distributor of premium electrical switchgear, HT/LT cables, and heavy-duty wiring accessories.',
      fullDesc: 'Guaranteed 100% genuine products sourced straight from top manufacturers with original test certificates and manufacturer warranty. We fulfill bulk requirements with fast-track supply chain delivery.',
      features: [
        'Cables & Wires: Havells, Polycab, KEI, RR Kabel, Finolex',
        'Switchgear: ABB, Schneider, L&T, Siemens, C&S, Legrand',
        'Switches & Sockets: Anchor, Goldmedal, GM Modular, Wipro',
        'Heavy Industrial Fuses, Relays & Contactors',
        'Original Manufacturer Test Certificates Provided',
        'Transparent Wholesale Pricing & Project Quotations'
      ]
    },
    {
      id: 'earthing',
      icon: 'shield-check',
      title: 'Earthing Materials & Protection',
      shortDesc: 'Advanced chemical earthing electrodes, copper/GI strips, and comprehensive lightning protection systems.',
      fullDesc: 'Safeguard vital equipment and human life against surges, phase faults, and direct lightning strikes. Our earthing solutions adhere to IS 3043 standards with low maintenance requirements.',
      features: [
        'Maintenance-Free Chemical Gel Earthing Electrodes',
        'High-Conductivity Copper-Bonded & GI Earthing Strips',
        'Early Streamer Emission (ESE) Lightning Arrestors',
        'Soil Resistivity Surveys & Earth Pit Value Testing',
        'Earth Pit Chambers, Covers & Compound Compounds',
        'Annual Earth Testing & Compliance Certification'
      ]
    },
    {
      id: 'street-light',
      icon: 'lightbulb',
      title: 'Street Lighting & Infrastructure',
      shortDesc: 'Turnkey municipal and residential street lighting systems, GI octagonal poles, and automated LED illumination.',
      fullDesc: 'Comprehensive street and campus illumination solutions from foundation casting to automated timer-controlled lighting. Designed for high wind-load tolerance, weather resilience, and maximum lumens per watt.',
      features: [
        'Custom Hot-Dip Galvanized Octagonal & Tubular Poles (6M to 12M)',
        'High-Lumen Industrial LED Street & Flood Fixtures',
        'Smart Automatic Twilight / Astronomical Timer Switches',
        'Hybrid Solar-Powered Street Light Pole Assemblies',
        'Civil Foundation Casting, Cable Trenching & Erection',
        'Complete Municipal & Township Turnkey Execution'
      ]
    }
  ];

  // =========================================================================
  // 2. DOM INITIALIZATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initGrandOpeningModal();
    refreshLucideIcons();
    initScrollProgress();
    initNavigation();
    initHeroSlider();
    initHeroParallax();
    initStatsCounters();
    initServices();
    initProjectGallery();
    initTestimonials();
    initMagneticCTA();
    initContactForm();
    initConsultationPopup();
    initFaqAccordion();
    initScrollToTop();
    initScrollReveal();
  });

  // Safe wrapper for Lucide Icons
  function refreshLucideIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // =========================================================================
  // 2B. THEME SWITCHER (Light Mode Green+White Default <-> Dark Mode Pine/Obsidian)
  // =========================================================================
  function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const headerLogo = document.getElementById('site-logo');
    const mobileLogo = document.getElementById('mobile-site-logo');
    const footerLogo = document.getElementById('footer-site-logo');

    // Default to 'light' (Green and White)
    const currentTheme = localStorage.getItem('ps_theme') || 'light';

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('ps_theme', theme);
      } catch (e) {}

      // Swap brand logo SVG for optimal contrast against light/dark header and footer
      const logoPath = theme === 'dark' ? 'assets/images/logo-dark.svg' : 'assets/images/logo.svg';
      if (headerLogo) {
        headerLogo.src = logoPath;
      }
      if (mobileLogo) {
        mobileLogo.src = logoPath;
      }
      if (footerLogo) {
        footerLogo.src = logoPath;
      }

      if (themeToggleBtn) {
        const isDark = theme === 'dark';
        themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
        themeToggleBtn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
      }

      refreshLucideIcons();
    }

    // Initialize with current or stored theme
    applyTheme(currentTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }
  }

  // =========================================================================
  // 3. REAL-TIME SCROLL PROGRESS BAR
  // =========================================================================
  function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    const updateProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = (window.scrollY / docHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // =========================================================================
  // 4. NAVIGATION, SLIDING INDICATOR & MOBILE DRAWER
  // =========================================================================
  function initNavigation() {
    const header = document.getElementById('header');
    const topbar = document.getElementById('topbar');
    const navToggle = document.getElementById('nav-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileDrawerClose = document.getElementById('mobile-drawer-close');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const desktopNavMenu = document.querySelector('.desktop-nav-menu');
    const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const drawerActionBtns = document.querySelectorAll('.mobile-drawer-footer a');
    const navIndicator = document.getElementById('nav-indicator');

    // Reposition sliding active indicator pill
    const updateNavIndicator = (activeLink) => {
      if (!navIndicator || !activeLink || !desktopNavMenu) return;
      const linkRect = activeLink.getBoundingClientRect();
      const menuRect = desktopNavMenu.getBoundingClientRect();

      navIndicator.style.width = `${linkRect.width}px`;
      navIndicator.style.left = `${linkRect.left - menuRect.left}px`;
      navIndicator.style.opacity = '1';
    };

    // Scroll state & scrollspy
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (topbar) {
        if (scrollY > 40) {
          topbar.classList.add('collapsed');
        } else {
          topbar.classList.remove('collapsed');
        }
      }

      if (header) {
        if (scrollY > 30) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      }

      // Scrollspy detection
      const sections = ['home', 'services', 'projects', 'brands', 'about', 'contact']
        .map(id => document.getElementById(id))
        .filter(Boolean);

      const headerOffset = (header ? header.offsetHeight : 80) + 70;
      let activeSectionId = 'home';

      sections.forEach(sec => {
        const top = sec.offsetTop - headerOffset;
        if (scrollY >= top) {
          activeSectionId = sec.id;
        }
      });

      let currentActiveLink = null;
      desktopNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isActive = href === `#${activeSectionId}`;
        link.classList.toggle('active', isActive);
        if (isActive) currentActiveLink = link;
      });

      if (currentActiveLink) {
        updateNavIndicator(currentActiveLink);
      }

      mobileNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${activeSectionId}`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      const activeLink = document.querySelector('.desktop-nav .nav-link.active');
      if (activeLink) updateNavIndicator(activeLink);
    });

    // Hover effect on desktop links moves the pill smoothly
    desktopNavLinks.forEach(link => {
      link.addEventListener('mouseenter', () => updateNavIndicator(link));
    });

    if (desktopNavMenu) {
      desktopNavMenu.addEventListener('mouseleave', () => {
        const activeLink = document.querySelector('.desktop-nav .nav-link.active');
        if (activeLink) updateNavIndicator(activeLink);
      });
    }

    handleScroll();

    // Mobile Drawer Controller
    if (navToggle && mobileDrawer) {
      const toggleDrawer = (open) => {
        const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('active');
        mobileDrawer.classList.toggle('active', isOpen);
        navToggle.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
        if (mobileOverlay) {
          mobileOverlay.classList.toggle('active', isOpen);
        }
        document.body.style.overflow = isOpen ? 'hidden' : '';
      };

      navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDrawer();
      });

      if (mobileDrawerClose) {
        mobileDrawerClose.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleDrawer(false);
        });
      }

      if (mobileOverlay) {
        mobileOverlay.addEventListener('click', () => toggleDrawer(false));
      }

      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => toggleDrawer(false));
      });

      drawerActionBtns.forEach(btn => {
        btn.addEventListener('click', () => toggleDrawer(false));
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
          toggleDrawer(false);
        }
      });
    }

    // Smooth scroll for anchor links with header compensation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 76;
          const targetTop = targetEl.offsetTop - headerHeight + 5;
          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // =========================================================================
  // 5. HERO SLIDER (Crossfade + Scale Parallax + Gestures)
  // =========================================================================
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicator');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const sliderContainer = document.querySelector('.hero');

    if (!slides.length) return;

    let currentIndex = 0;
    let autoplayTimer = null;
    const interval = 5500;

    const showSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
      });

      indicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
        dot.setAttribute('aria-selected', i === currentIndex);
      });
    };

    const nextSlide = () => showSlide(currentIndex + 1);
    const prevSlide = () => showSlide(currentIndex - 1);

    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = setInterval(nextSlide, interval);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoplay();
      });
    }

    indicators.forEach((indicator, idx) => {
      indicator.addEventListener('click', () => {
        showSlide(idx);
        startAutoplay();
      });
    });

    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoplay);
      sliderContainer.addEventListener('mouseleave', startAutoplay);

      // Touch gesture support
      let touchStartX = 0;
      let touchEndX = 0;

      sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 45) {
          if (diff < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          startAutoplay();
        }
      }, { passive: true });
    }

    showSlide(0);
    startAutoplay();
  }

  // =========================================================================
  // 6. HERO PARALLAX FOR TRUST CHIPS (Desktop Mouse Interaction)
  // =========================================================================
  function initHeroParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 1100) return;

    const heroSection = document.querySelector('.hero');
    const chips = document.querySelectorAll('.hero-chip');

    if (!heroSection || !chips.length) return;

    heroSection.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (clientY / window.innerHeight - 0.5) * 2;

      chips.forEach((chip, i) => {
        const factor = (i + 1) * 12;
        chip.style.transform = `translate3d(${xPercent * factor}px, ${yPercent * factor}px, 0)`;
      });
    });

    heroSection.addEventListener('mouseleave', () => {
      chips.forEach(chip => {
        chip.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  }

  // =========================================================================
  // 7. ANIMATED STATS COUNTER WITH EXPONENTIAL EASING
  // =========================================================================
  function initStatsCounters() {
    const counterElements = document.querySelectorAll('.stat-count');
    if (!counterElements.length) return;

    const animateCount = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      const duration = 2000;
      const startTimestamp = performance.now();

      // Weighted ease-out curve
      const easeOutExpo = (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

      const step = (currentTime) => {
        const elapsed = currentTime - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(easeOutExpo(progress) * target);

        el.textContent = currentCount;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      };

      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // =========================================================================
  // 8. SERVICES GRID & MODAL
  // =========================================================================
  function initServices() {
    const servicesGrid = document.getElementById('services-grid');
    const modalBackdrop = document.getElementById('service-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalFeaturesList = document.getElementById('modal-features-list');
    const modalIcon = document.getElementById('modal-icon');
    const modalCta = document.getElementById('modal-cta');

    if (!servicesGrid) return;

    // Render service cards dynamically
    servicesGrid.innerHTML = servicesCatalog.map((service, index) => `
      <div class="service-card reveal reveal-delay-${(index % 3) + 1}" data-id="${service.id}" tabindex="0" role="button" aria-label="View specifications for ${service.title}">
        <div class="service-icon-halo">
          <i data-lucide="${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.shortDesc}</p>
        <ul class="service-features-list">
          ${service.features.slice(0, 3).map(feat => `
            <li><i data-lucide="check-circle-2"></i> <span>${feat}</span></li>
          `).join('')}
        </ul>
        <div class="service-action-link">
          <span>Technical Specifications</span>
          <i data-lucide="arrow-right"></i>
        </div>
      </div>
    `).join('');

    refreshLucideIcons();

    // Open Service Detail Modal
    const openServiceModal = (serviceId) => {
      const service = servicesCatalog.find(s => s.id === serviceId);
      if (!service || !modalBackdrop) return;

      if (modalIcon) {
        modalIcon.setAttribute('data-lucide', service.icon);
      }
      if (modalTitle) modalTitle.textContent = service.title;
      if (modalDesc) modalDesc.textContent = service.fullDesc;

      if (modalFeaturesList) {
        modalFeaturesList.innerHTML = service.features.map(f => `
          <li><i data-lucide="check-circle-2"></i> <span>${f}</span></li>
        `).join('');
      }

      refreshLucideIcons();

      if (modalCta) {
        modalCta.href = '#contact';
        modalCta.onclick = () => {
          closeModal();
          const serviceSelect = document.getElementById('service-select');
          if (serviceSelect) {
            serviceSelect.value = service.id;
          }
        };
      }

      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      if (modalBackdrop) {
        modalBackdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    servicesGrid.querySelectorAll('.service-card').forEach(card => {
      const id = card.getAttribute('data-id');
      card.addEventListener('click', () => openServiceModal(id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openServiceModal(id);
        }
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // =========================================================================
  // 9. FILTERABLE PROJECT GALLERY
  // =========================================================================
  function initProjectGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.classList.remove('hide');
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s var(--ease-precision), transform 0.4s var(--ease-precision)';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.classList.add('hide');
          }
        });
      });
    });
  }

  // =========================================================================
  // 10. TESTIMONIALS SLIDER WITH TIMED PROGRESS
  // =========================================================================
  function initTestimonials() {
    const track = document.getElementById('testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('test-prev');
    const nextBtn = document.getElementById('test-next');
    const dots = document.querySelectorAll('.testimonial-dot');

    if (!track || !slides.length) return;

    let currentIndex = 0;
    let autoplayTimer = null;
    const interval = 6500;

    const updateSlider = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
        dot.setAttribute('aria-selected', i === currentIndex);
      });
    };

    const next = () => updateSlider(currentIndex + 1);
    const prev = () => updateSlider(currentIndex - 1);

    const startTimer = () => {
      stopTimer();
      autoplayTimer = setInterval(next, interval);
    };

    const stopTimer = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };

    if (nextBtn) nextBtn.addEventListener('click', () => { next(); startTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startTimer(); });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        updateSlider(idx);
        startTimer();
      });
    });

    const box = document.querySelector('.testimonials-slider-box');
    if (box) {
      box.addEventListener('mouseenter', stopTimer);
      box.addEventListener('mouseleave', startTimer);
    }

    updateSlider(0);
    startTimer();
  }

  // =========================================================================
  // 11. MAGNETIC CTA BUTTON & RIPPLE EFFECT
  // =========================================================================
  function initMagneticCTA() {
    const magneticBtns = document.querySelectorAll('.cta-call-btn, .btn-primary');

    magneticBtns.forEach(btn => {
      // Magnetic pull effect on desktop
      if (window.innerWidth >= 1024 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate(${x * 0.2}px, ${y * 0.25}px)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate(0, 0)';
        });
      }

      // Micro-ripple on click
      btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple';
        const diameter = Math.max(rect.width, rect.height);
        const radius = diameter / 2;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${e.clientX - rect.left - radius}px`;
        ripple.style.top = `${e.clientY - rect.top - radius}px`;

        const existingRipple = this.querySelector('.btn-ripple');
        if (existingRipple) existingRipple.remove();

        this.appendChild(ripple);
      });
    });
  }

  // =========================================================================
  // 12. CONTACT FORM VALIDATION & SUBMISSION
  // =========================================================================
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('form-submit-btn');

    if (!form) return;

    const validateField = (input) => {
      const value = input.value.trim();
      let isValid = true;
      const type = input.getAttribute('name');

      if (input.hasAttribute('required') && !value) {
        isValid = false;
      } else if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
      } else if (type === 'phone' && value) {
        const cleaned = value.replace(/[\s\-+]/g, '');
        const phoneRegex = /^[6-9]\d{9}$/;
        const fullIndianRegex = /^(?:91)?[6-9]\d{9}$/;
        isValid = phoneRegex.test(cleaned) || fullIndianRegex.test(cleaned);
      } else if (type === 'message' && value) {
        isValid = value.length >= 8;
      }

      input.classList.toggle('error', !isValid);
      return isValid;
    };

    form.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let formIsValid = true;
      const inputs = form.querySelectorAll('.form-control[required]');

      inputs.forEach(input => {
        if (!validateField(input)) {
          formIsValid = false;
        }
      });

      if (!formIsValid) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.innerHTML = '<i data-lucide="alert-triangle"></i> <span>Please fix the highlighted fields before submitting.</span>';
          feedback.style.display = 'flex';
          refreshLucideIcons();
        }
        return;
      }

      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="lucide-spin"></i> <span>Processing Request...</span>';
        refreshLucideIcons();
      }

      // Simulated dispatch
      setTimeout(() => {
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.innerHTML = '<i data-lucide="check-circle-2"></i> <span>Thank you! Your electrical inquiry has been received. Our team will contact you within 2 business hours.</span>';
          feedback.style.display = 'flex';
          refreshLucideIcons();
        }

        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          refreshLucideIcons();
        }

        setTimeout(() => {
          if (feedback) {
            feedback.style.display = 'none';
          }
        }, 8000);
      }, 950);
    });
  }

  // =========================================================================
  // 13. CONSULTATION POPUP (Exit-Intent / Fallback Delay)
  // =========================================================================
  function initConsultationPopup() {
    const popup = document.getElementById('consultation-popup');
    const closeBtn = document.getElementById('popup-close');
    const STORAGE_KEY = 'ps_consultation_dismissed_v2';

    if (!popup) return;

    const openPopup = () => {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      const openingModal = document.getElementById('opening-modal');
      if (openingModal && openingModal.classList.contains('active')) return;
      popup.classList.add('active');
      sessionStorage.setItem(STORAGE_KEY, 'true');
    };

    const closePopup = () => {
      popup.classList.remove('active');
    };

    if (closeBtn) closeBtn.addEventListener('click', closePopup);

    popup.addEventListener('click', (e) => {
      if (e.target === popup) closePopup();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && popup.classList.contains('active')) {
        closePopup();
      }
    });

    // Exit intent detection
    let triggered = false;
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        openPopup();
      }
    });

    // Fallback trigger
    setTimeout(() => {
      if (!triggered) {
        triggered = true;
        openPopup();
      }
    }, 28000);
  }

  // =========================================================================
  // 14. SCROLL TO TOP
  // =========================================================================
  function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 15. FAQ ACCORDION
  // =========================================================================
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const header = item.querySelector('.faq-header');
      if (!header) return;

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherHeader = otherItem.querySelector('.faq-header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // =========================================================================
  // 16. BESPOKE SCROLL REVEAL OBSERVER
  // =========================================================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-wipe, .reveal-heading');
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // =========================================================================
  // 17. NEW OFFICE GRAND OPENING MODAL & CELEBRATION VECTORS ENGINE
  // Active when visit time < September 14, 2026 11:00 PM IST
  // Ceremony Timing: 4:00 PM (16:00:00) IST
  // =========================================================================
  function initGrandOpeningModal() {
    const modal = document.getElementById('opening-modal');
    const closeBtn = document.getElementById('opening-modal-close');
    const celebrateBtn = document.getElementById('celebrate-again-btn');
    const canvas = document.getElementById('celebration-canvas');
    if (!modal) return;

    // Cutoff time: 14-09-2026 at 11:00 PM (23:00:00) IST
    const cutoffTime = new Date('2026-09-14T23:00:00+05:30').getTime();
    // Welcome time: 14-09-2026 at 4:00 PM (16:00:00) IST
    const eventStartTime = new Date('2026-09-14T16:00:00+05:30').getTime();

    const now = new Date().getTime();

    // Verification check: Only active if current time < 14-09-2026 11:00 PM
    if (now >= cutoffTime) {
      return;
    }

    const hoursEl = document.getElementById('countdown-hours');
    const minsEl = document.getElementById('countdown-minutes');
    const secsEl = document.getElementById('countdown-seconds');
    const countdownContainer = document.getElementById('opening-countdown');

    function updateCountdown() {
      const currentTime = new Date().getTime();
      const diff = eventStartTime - currentTime;

      if (diff > 0) {
        const totalHours = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        if (hoursEl) hoursEl.textContent = String(totalHours).padStart(2, '0');
        if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
        if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
      } else {
        // Happening today past 4:00 PM IST
        if (countdownContainer) {
          countdownContainer.innerHTML = '<div style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 800; color: #10b981; text-align: center; width: 100%;">🎉 GRAND OPENING IS LIVE TODAY! WELCOME TO ALL!</div>';
        }
      }
    }

    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);

    // =========================================================================
    // ADVANCED CANVAS CELEBRATION VECTORS ENGINE
    // Spreads 3D tumbling ribbons, twinkling gold stars, sequins, and streamers
    // =========================================================================
    let ctx = canvas ? canvas.getContext('2d') : null;
    let animId = null;
    let ambientTimer = null;
    let particles = [];
    let width = 0;
    let height = 0;

    const colors = [
      '#10B981', // Electric Emerald
      '#024F16', // Forest Green
      '#0E793C', // Brand Green
      '#F59E0B', // Festive Gold
      '#FCD34D', // Shimmer Amber
      '#34D399', // Mint Sparkle
      '#FFFFFF', // Specular White
      '#FFE082', // Champagne Gold
      '#D97706'  // Warm Bronze
    ];

    function resizeCanvas() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function drawStar(context, cx, cy, spikes, outerRadius, innerRadius) {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      context.beginPath();
      context.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
      context.lineTo(cx, cy - outerRadius);
      context.closePath();
    }

    function spawnCannonBurst(originX, originY, count, angleMin, angleMax, minSpeed, maxSpeed) {
      for (let i = 0; i < count; i++) {
        const angle = angleMin + Math.random() * (angleMax - angleMin);
        const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
        const typeRand = Math.random();

        let type = 'ribbon';
        if (typeRand < 0.28) type = 'star';
        else if (typeRand < 0.50) type = 'diamond';
        else if (typeRand < 0.72) type = 'circle';
        else if (typeRand < 0.88) type = 'ribbon';
        else type = 'streamer';

        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          sizeW: 8 + Math.random() * 12,
          sizeH: 14 + Math.random() * 22,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 18,
          tilt: Math.random() * Math.PI,
          tiltSpeed: 0.08 + Math.random() * 0.12,
          drag: 0.982,
          gravity: 0.32 + Math.random() * 0.16,
          alpha: 1,
          fadeSpeed: 0.0035 + Math.random() * 0.006,
          type: type,
          waveAngle: Math.random() * Math.PI * 2,
          waveSpeed: 0.05 + Math.random() * 0.06
        });
      }
    }

    function spawnTopCascade(count) {
      for (let i = 0; i < count; i++) {
        const typeRand = Math.random();
        particles.push({
          x: Math.random() * width,
          y: -20 - Math.random() * 80,
          vx: (Math.random() - 0.5) * 3,
          vy: 2 + Math.random() * 4,
          sizeW: 7 + Math.random() * 10,
          sizeH: 12 + Math.random() * 18,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 12,
          tilt: Math.random() * Math.PI,
          tiltSpeed: 0.06 + Math.random() * 0.1,
          drag: 0.99,
          gravity: 0.18 + Math.random() * 0.15,
          alpha: 1,
          fadeSpeed: 0.0025 + Math.random() * 0.005,
          type: typeRand > 0.4 ? 'star' : (typeRand > 0.2 ? 'diamond' : 'circle'),
          waveAngle: Math.random() * Math.PI * 2,
          waveSpeed: 0.04 + Math.random() * 0.05
        });
      }
    }

    function spawnClickBurst(x, y, count) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 14;
        const typeRand = Math.random();

        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          sizeW: 6 + Math.random() * 10,
          sizeH: 10 + Math.random() * 16,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 20,
          tilt: Math.random() * Math.PI,
          tiltSpeed: 0.1 + Math.random() * 0.14,
          drag: 0.965,
          gravity: 0.28,
          alpha: 1,
          fadeSpeed: 0.008 + Math.random() * 0.012,
          type: typeRand > 0.5 ? 'star' : 'diamond',
          waveAngle: 0,
          waveSpeed: 0
        });
      }
    }

    function launchGrandCelebration() {
      if (!canvas || !ctx) return;
      resizeCanvas();

      // Dual Bottom Cannons (Bottom-Left & Bottom-Right)
      spawnCannonBurst(width * 0.08, height * 0.88, 140, -Math.PI * 0.45, -Math.PI * 0.15, 16, 32);
      spawnCannonBurst(width * 0.92, height * 0.88, 140, -Math.PI * 0.85, -Math.PI * 0.55, 16, 32);

      // Top Center Radiant Cascade
      spawnTopCascade(80);

      // Center Burst directly around the modal
      spawnClickBurst(width * 0.5, height * 0.4, 50);
    }

    function renderLoop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.vx *= p.drag;
        p.vy = p.vy * p.drag + p.gravity;
        p.x += p.vx;
        p.y += p.vy;

        p.rotation += p.rotSpeed;
        p.tilt += p.tiltSpeed;
        p.alpha -= p.fadeSpeed;

        if (p.type === 'streamer') {
          p.waveAngle += p.waveSpeed;
          p.x += Math.sin(p.waveAngle) * 1.6;
        }

        if (p.alpha <= 0 || p.y > height + 50) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;

        const tiltScale = Math.abs(Math.cos(p.tilt));

        if (p.type === 'star') {
          // Shimmering Golden Star Vector
          drawStar(ctx, 0, 0, 5, p.sizeW, p.sizeW * 0.45);
          ctx.fill();
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        } else if (p.type === 'diamond') {
          // 4-Point Diamond Sparkle
          ctx.beginPath();
          ctx.moveTo(0, -p.sizeH * 0.6);
          ctx.lineTo(p.sizeW * 0.5, 0);
          ctx.lineTo(0, p.sizeH * 0.6);
          ctx.lineTo(-p.sizeW * 0.5, 0);
          ctx.closePath();
          ctx.fill();
        } else if (p.type === 'circle') {
          // Metallic Festive Sequin
          ctx.beginPath();
          ctx.arc(0, 0, p.sizeW * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else if (p.type === 'streamer') {
          // Sinusoidal Celebration Ribbon
          ctx.beginPath();
          ctx.rect(-p.sizeW * 0.35, -p.sizeH * 0.5, p.sizeW * 0.7, p.sizeH);
          ctx.fill();
        } else {
          // 3D Tumbling Confetti Ribbon
          const currentW = Math.max(1.5, p.sizeW * tiltScale);
          ctx.fillRect(-currentW / 2, -p.sizeH / 2, currentW, p.sizeH);
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 0.5;
          ctx.strokeRect(-currentW / 2, -p.sizeH / 2, currentW, p.sizeH);
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(renderLoop);
    }

    function startCelebrationEngine() {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      if (!animId) {
        animId = requestAnimationFrame(renderLoop);
      }

      // Initial Grand Celebration Blast
      launchGrandCelebration();

      // Continuous Ambient Celebration Floaters: Keeps celebration active around modal
      if (ambientTimer) clearInterval(ambientTimer);
      ambientTimer = setInterval(() => {
        if (!modal.classList.contains('active')) return;
        if (particles.length < 180) {
          spawnTopCascade(3);
        }
      }, 160);
    }

    function stopCelebrationEngine() {
      if (ambientTimer) {
        clearInterval(ambientTimer);
        ambientTimer = null;
      }
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      particles = [];
      window.removeEventListener('resize', resizeCanvas);
    }

    // Show on visit with smooth timing
    setTimeout(() => {
      modal.classList.add('active');
      startCelebrationEngine();
      refreshLucideIcons();
    }, 650);

    function closeModal() {
      modal.classList.remove('active');
      clearInterval(countdownTimer);
      stopCelebrationEngine();
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      } else if (e.target === canvas) {
        // Interactive firework burst on canvas click
        spawnClickBurst(e.clientX, e.clientY, 35);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    if (celebrateBtn) {
      celebrateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        launchGrandCelebration();
      });
    }
  }

})();
