/**
 * Power Solutions — Core Interactive Script
 * Class "A" Licensed Electrical Contractor | Govt. of Punjab Certified
 * Vanilla ES6 — High Performance, Modular, Zero Dependencies
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. SERVICES DATA CATALOG
  // =========================================================================
  const servicesCatalog = [
    {
      id: 'lt-ht',
      icon: 'fa-bolt',
      title: 'LT & HT Electrical Works',
      shortDesc: 'End-to-end low and high tension electrical installations engineered for industrial plants, commercial towers, and substations.',
      fullDesc: 'Power Solutions delivers certified Low Tension (up to 1kV) and High Tension (above 1kV) infrastructure. From transformer installations to HT/LT cabling, our government-certified team guarantees regulatory compliance and uncompromising safety.',
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
      icon: 'fa-industry',
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
      icon: 'fa-microchip',
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
      icon: 'fa-boxes-stacked',
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
      icon: 'fa-shield-halved',
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
      icon: 'fa-lightbulb',
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
  // 2. DOM CONTENT LOADED ENTRY POINT
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeroSlider();
    initStatsCounters();
    initServices();
    initProjectGallery();
    initTestimonials();
    initContactForm();
    initConsultationPopup();
    initFaqAccordion();
    initScrollToTop();
    initScrollReveal();
  });

  // =========================================================================
  // 3. NAVIGATION, HEADER SCROLL & MOBILE DRAWER
  // =========================================================================
  function initNavigation() {
    const header = document.getElementById('header');
    const topbar = document.getElementById('topbar');
    const navToggle = document.getElementById('nav-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileDrawerClose = document.getElementById('mobile-drawer-close');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const drawerActionBtns = document.querySelectorAll('.mobile-drawer-footer a');

    // Scroll state for sticky header & topbar collapse
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (topbar) {
        if (scrollY > 50) {
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

      // Active nav link highlight via scrollspy
      const sections = ['home', 'services', 'projects', 'brands', 'about', 'contact']
        .map(id => document.getElementById(id))
        .filter(Boolean);

      const headerOffset = (header ? header.offsetHeight : 80) + 60;
      let activeSectionId = 'home';

      sections.forEach(sec => {
        const top = sec.offsetTop - headerOffset;
        if (scrollY >= top) {
          activeSectionId = sec.id;
        }
      });

      // Update desktop links
      desktopNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${activeSectionId}`);
      });

      // Update mobile drawer links
      mobileNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${activeSectionId}`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

    // Smooth scroll for anchor links with offset adjustment
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 70;
          const targetTop = targetEl.offsetTop - headerHeight;
          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // =========================================================================
  // 4. AUTO-SLIDING HERO (Crossfade + Touch Gestures + Autoplay)
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

    // Pause on mouse hover & resume on mouse leave
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoplay);
      sliderContainer.addEventListener('mouseleave', startAutoplay);
      sliderContainer.addEventListener('focusin', stopAutoplay);
      sliderContainer.addEventListener('focusout', startAutoplay);

      // Touch gesture support (swipe left / right)
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

    // Initialize first slide & autoplay
    showSlide(0);
    startAutoplay();
  }

  // =========================================================================
  // 5. ANIMATED STATS COUNTER
  // =========================================================================
  function initStatsCounters() {
    const counterElements = document.querySelectorAll('.stat-count');
    if (!counterElements.length) return;

    const animateCount = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      const duration = 1800;
      const startTimestamp = performance.now();

      const easeOutQuad = (t) => t * (2 - t);

      const step = (currentTime) => {
        const elapsed = currentTime - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(easeOutQuad(progress) * target);

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
  // 6. SERVICES RENDERING & DETAIL MODAL
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
      <div class="service-card reveal reveal-delay-${(index % 3) + 1}" data-id="${service.id}">
        <div class="service-icon-halo">
          <i class="fas ${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.shortDesc}</p>
        <ul class="service-features-list">
          ${service.features.slice(0, 3).map(feat => `
            <li><i class="fas fa-circle-check"></i> <span>${feat}</span></li>
          `).join('')}
        </ul>
        <div class="service-action-link" role="button" tabindex="0">
          <span>Explore Technical Specs</span>
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    `).join('');

    // Open Modal Details
    const openServiceModal = (serviceId) => {
      const service = servicesCatalog.find(s => s.id === serviceId);
      if (!service || !modalBackdrop) return;

      if (modalIcon) modalIcon.className = `fas ${service.icon}`;
      if (modalTitle) modalTitle.textContent = service.title;
      if (modalDesc) modalDesc.textContent = service.fullDesc;

      if (modalFeaturesList) {
        modalFeaturesList.innerHTML = service.features.map(f => `
          <li><i class="fas fa-check-circle"></i> <span>${f}</span></li>
        `).join('');
      }

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

    // Attach click listeners to cards
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
  // 7. FILTERABLE PROJECT GALLERY
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
            setTimeout(() => {
              card.style.opacity = '1';
            }, 50);
          } else {
            card.classList.add('hide');
          }
        });
      });
    });
  }

  // =========================================================================
  // 8. TESTIMONIALS SLIDER
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

    const updateSlider = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    };

    const next = () => updateSlider(currentIndex + 1);
    const prev = () => updateSlider(currentIndex - 1);

    const startTimer = () => {
      stopTimer();
      autoplayTimer = setInterval(next, 6500);
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
  // 9. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
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
        // Strip spaces/dashes, match 10-digit phone
        const cleaned = value.replace(/[\s\-+]/g, '');
        const phoneRegex = /^[6-9]\d{9}$/;
        // Or accept with +91 or 91
        const fullIndianRegex = /^(?:91)?[6-9]\d{9}$/;
        isValid = phoneRegex.test(cleaned) || fullIndianRegex.test(cleaned);
      } else if (type === 'message' && value) {
        isValid = value.length >= 8;
      }

      input.classList.toggle('error', !isValid);
      return isValid;
    };

    // Live validation on blur & input
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
          feedback.innerHTML = '<i class="fas fa-triangle-exclamation"></i> Please fix the highlighted fields before submitting.';
          feedback.style.display = 'flex';
        }
        return;
      }

      // Submission UI State (Loading Simulation)
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Request...';
      }

      // Simulated network dispatch
      setTimeout(() => {
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.innerHTML = '<i class="fas fa-circle-check"></i> Thank you! Your electrical inquiry has been received. Our team will contact you within 2 business hours.';
          feedback.style.display = 'flex';
        }

        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        setTimeout(() => {
          if (feedback) {
            feedback.style.display = 'none';
          }
        }, 8000);
      }, 900);
    });
  }

  // =========================================================================
  // 10. CONSULTATION POPUP (Exit-Intent / Delay Offer)
  // =========================================================================
  function initConsultationPopup() {
    const popup = document.getElementById('consultation-popup');
    const closeBtn = document.getElementById('popup-close');
    const STORAGE_KEY = 'ps_consultation_dismissed_session';

    if (!popup) return;

    const openPopup = () => {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
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

    // Exit intent detection (cursor moves out of top viewport)
    let triggered = false;
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        openPopup();
      }
    });

    // Fallback delay trigger after 25 seconds
    setTimeout(() => {
      if (!triggered) {
        triggered = true;
        openPopup();
      }
    }, 25000);
  }

  // =========================================================================
  // 11. SCROLL TO TOP CONTROLLER
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
  // 12. SCROLL REVEAL OBSERVER
  // =========================================================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // =========================================================================
  // 13. FAQ ACCORDION HANDLER
  // =========================================================================
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const header = item.querySelector('.faq-header');
      if (!header) return;

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherHeader = otherItem.querySelector('.faq-header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

})();
