/**
 * Client-side interactivity for Ultraa Album Redesign
 * Minimal, zero-dependency, strictly accessible
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Announcement Bar Dismissal
    var annBar = document.getElementById('announcement-bar');
    var annClose = document.getElementById('announcement-close');
    if (annBar && annClose) {
      if (sessionStorage.getItem('ultraa_announcement_dismissed') === 'true') {
        annBar.style.display = 'none';
      }
      annClose.addEventListener('click', function () {
        annBar.style.display = 'none';
        sessionStorage.setItem('ultraa_announcement_dismissed', 'true');
      });
    }

    // 2. Mobile Nav Drawer
    var mobileToggle = document.getElementById('mobile-menu-toggle');
    var mobileDrawer = document.getElementById('mobile-nav-drawer');
    var mobileClose = document.getElementById('mobile-menu-close');

    if (mobileToggle && mobileDrawer) {
      function openDrawer() {
        mobileDrawer.classList.add('is-active');
        mobileToggle.setAttribute('aria-expanded', 'true');
        if (mobileClose) mobileClose.focus();
      }

      function closeDrawer() {
        mobileDrawer.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus();
      }

      mobileToggle.addEventListener('click', openDrawer);
      if (mobileClose) mobileClose.addEventListener('click', closeDrawer);

      // Close on escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('is-active')) {
          closeDrawer();
        }
      });

      // Mobile sub-menus
      var subToggles = mobileDrawer.querySelectorAll('.mobile-sub-toggle');
      subToggles.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', !expanded);
          var subList = btn.nextElementSibling;
          if (subList) {
            subList.classList.toggle('is-open', !expanded);
            var spanIndicator = btn.querySelector('span:last-child');
            if (spanIndicator) {
              spanIndicator.textContent = expanded ? '+' : '-';
            }
          }
        });
      });
    }

    // 3. Desktop Dropdown Menus Keyboard Navigation
    var dropdownToggles = document.querySelectorAll('.nav-item .dropdown-toggle');
    dropdownToggles.forEach(function (btn) {
      var panel = btn.nextElementSibling;
      if (!panel) return;

      btn.addEventListener('click', function (e) {
        var isOpen = btn.getAttribute('aria-expanded') === 'true';
        closeAllDropdowns();
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          panel.classList.add('is-open');
        }
      });

      btn.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          btn.setAttribute('aria-expanded', 'true');
          panel.classList.add('is-open');
          var firstLink = panel.querySelector('a');
          if (firstLink) firstLink.focus();
        }
      });
    });

    function closeAllDropdowns() {
      dropdownToggles.forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'false');
        var panel = btn.nextElementSibling;
        if (panel) panel.classList.remove('is-open');
      });
    }

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-item')) {
        closeAllDropdowns();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeAllDropdowns();
      }
    });

    // 4. Accordion Toggle
    var accordionTriggers = document.querySelectorAll('.accordion-trigger');
    accordionTriggers.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        var panelId = btn.getAttribute('aria-controls');
        var panel = document.getElementById(panelId);

        btn.setAttribute('aria-expanded', !expanded);
        if (panel) {
          panel.classList.toggle('is-open', !expanded);
        }
      });
    });

    // 5. Before / After Interactive Sliders
    var baContainers = document.querySelectorAll('.ba-container');
    baContainers.forEach(function (container) {
      var handle = container.querySelector('.ba-handle');
      var beforeWrapper = container.querySelector('.ba-before-wrapper');
      var isDragging = false;

      function updatePosition(pct) {
        pct = Math.max(0, Math.min(100, pct));
        container.setAttribute('data-position', pct);
        if (beforeWrapper) beforeWrapper.style.width = pct + '%';
        if (handle) {
          handle.style.left = pct + '%';
          handle.setAttribute('aria-valuenow', Math.round(pct));
        }
      }

      function handleMove(clientX) {
        var rect = container.getBoundingClientRect();
        var x = clientX - rect.left;
        var pct = (x / rect.width) * 100;
        updatePosition(pct);
      }

      container.addEventListener('mousedown', function (e) {
        isDragging = true;
        handleMove(e.clientX);
      });

      window.addEventListener('mousemove', function (e) {
        if (isDragging) {
          e.preventDefault();
          handleMove(e.clientX);
        }
      });

      window.addEventListener('mouseup', function () {
        isDragging = false;
      });

      // Touch events
      container.addEventListener('touchstart', function (e) {
        if (e.touches.length === 1) {
          isDragging = true;
          handleMove(e.touches[0].clientX);
        }
      }, { passive: true });

      window.addEventListener('touchmove', function (e) {
        if (isDragging && e.touches.length === 1) {
          handleMove(e.touches[0].clientX);
        }
      }, { passive: true });

      window.addEventListener('touchend', function () {
        isDragging = false;
      });

      // Keyboard navigation for handle
      if (handle) {
        handle.addEventListener('keydown', function (e) {
          var current = parseFloat(container.getAttribute('data-position') || '50');
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            updatePosition(current - 5);
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            updatePosition(current + 5);
          } else if (e.key === 'Home') {
            e.preventDefault();
            updatePosition(0);
          } else if (e.key === 'End') {
            e.preventDefault();
            updatePosition(100);
          }
        });
      }
    });

    // 6. Floating ContactTab & Modal
    var contactTabToggle = document.getElementById('contact-tab-toggle');
    var contactOverlay = document.getElementById('contact-modal-overlay');
    var contactClose = document.getElementById('contact-modal-close');
    var quickForm = document.getElementById('contact-quick-form');

    if (contactTabToggle && contactOverlay) {
      function openContact() {
        contactOverlay.classList.add('is-active');
        contactTabToggle.setAttribute('aria-expanded', 'true');
        var firstInput = contactOverlay.querySelector('input:not([type="hidden"]):not(.form-honeypot)');
        if (firstInput) firstInput.focus();
      }

      function closeContact() {
        contactOverlay.classList.remove('is-active');
        contactTabToggle.setAttribute('aria-expanded', 'false');
        contactTabToggle.focus();
      }

      contactTabToggle.addEventListener('click', openContact);
      if (contactClose) contactClose.addEventListener('click', closeContact);

      contactOverlay.addEventListener('click', function (e) {
        if (e.target === contactOverlay) {
          closeContact();
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && contactOverlay.classList.contains('is-active')) {
          closeContact();
        }
      });

      if (quickForm) {
        quickForm.addEventListener('submit', function (e) {
          e.preventDefault();
          var hp = quickForm.querySelector('input[name="_hp_website"]');
          if (hp && hp.value) {
            // Honeypot caught
            return;
          }

          var name = quickForm.querySelector('[name="name"]').value.trim();
          var phone = quickForm.querySelector('[name="phone"]').value.trim();
          var email = quickForm.querySelector('[name="email"]').value.trim();
          var message = quickForm.querySelector('[name="message"]').value.trim();

          if (!name || !phone || !email || !message) {
            alert('Please fill in all required fields.');
            return;
          }

          var statusEl = document.getElementById('modal-form-status');
          if (statusEl) {
            statusEl.classList.add('is-success');
            quickForm.reset();
          }
        });
      }
    }

    // 7. Standalone Contact Forms (e.g. on /contact-us/)
    var mainContactForm = document.getElementById('main-contact-form');
    if (mainContactForm) {
      mainContactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var hp = mainContactForm.querySelector('input[name="_hp_website"]');
        if (hp && hp.value) return;

        var name = mainContactForm.querySelector('[name="name"]').value.trim();
        var phone = mainContactForm.querySelector('[name="phone"]').value.trim();
        var email = mainContactForm.querySelector('[name="email"]').value.trim();
        var message = mainContactForm.querySelector('[name="message"]').value.trim();

        if (!name || !phone || !email || !message) {
          alert('Please fill in all required fields.');
          return;
        }

        var statusEl = document.getElementById('main-form-status');
        if (statusEl) {
          statusEl.classList.add('is-success');
          mainContactForm.reset();
        }
      });
    }
  });
})();

