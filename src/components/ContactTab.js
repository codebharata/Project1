/**
 * Floating ContactTab Component & Modal
 */
function ContactTab() {
  return `
  <!-- Floating Contact Tab Button -->
  <button type="button" class="contact-tab-button" id="contact-tab-toggle" aria-expanded="false" aria-controls="contact-modal-overlay" aria-label="Open contact form">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
    <span>Contact</span>
  </button>

  <!-- Contact Modal Overlay -->
  <div class="contact-modal-overlay" id="contact-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
    <div class="contact-modal">
      <div class="contact-modal-header">
        <h2 id="contact-modal-title" style="margin: 0; font-size: 1.5rem;">Get in Touch</h2>
        <button type="button" class="contact-modal-close" id="contact-modal-close" aria-label="Close contact form">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M1 1l16 16M17 1L1 17" />
          </svg>
        </button>
      </div>

      <form id="contact-quick-form" method="POST" novalidate>
        <!-- Honeypot -->
        <input type="text" name="_hp_website" class="form-honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />

        <div class="form-group">
          <label for="modal-name" class="form-label">Name *</label>
          <input type="text" id="modal-name" name="name" class="form-input" required autocomplete="name" />
        </div>

        <div class="form-group">
          <label for="modal-phone" class="form-label">Phone Number *</label>
          <input type="tel" id="modal-phone" name="phone" class="form-input" required autocomplete="tel" />
        </div>

        <div class="form-group">
          <label for="modal-email" class="form-label">Email *</label>
          <input type="email" id="modal-email" name="email" class="form-input" required autocomplete="email" />
        </div>

        <div class="form-group">
          <label for="modal-country" class="form-label">Country</label>
          <input type="text" id="modal-country" name="country" class="form-input" autocomplete="country-name" />
        </div>

        <div class="form-group">
          <label for="modal-message" class="form-label">Message *</label>
          <textarea id="modal-message" name="message" class="form-textarea" rows="3" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%;">Send message</button>

        <div class="form-status" id="modal-form-status" role="alert">
          Thank you. Your message has been sent. We will get back to you shortly.
        </div>
      </form>

      <div class="direct-contacts">
        <p><strong>Direct Call:</strong> <a href="tel:+919322254315">+91-93222 54315</a> / <a href="tel:+919320054315">+91-93200 54315</a></p>
        <p><strong>Email:</strong> <a href="mailto:ultraaalbums@gmail.com">ultraaalbums@gmail.com</a></p>
        <p><strong>Messenger:</strong> <a href="https://m.me/UltraaAlbums" target="_blank" rel="noopener noreferrer">Message us on Facebook</a></p>
      </div>
    </div>
  </div>`;
}

module.exports = { ContactTab };

