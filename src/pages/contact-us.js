const { Layout } = require('../components/Layout');

function renderContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ultraa Album",
    "image": "https://ultraaalbums.com/images/common/cropped-ultra-logo.webp",
    "telephone": ["+91-93222 54315", "+91-93200 54315"],
    "email": "ultraaalbums@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shree Krishna Ind. Estate, Near Toll Naka, 211, Western Express Hwy, Dahisar East",
      "addressLocality": "Mumbai",
      "postalCode": "400068",
      "addressCountry": "IN"
    },
    "url": "https://ultraaalbums.com/contact-us/",
    "priceRange": "$$"
  };

  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="max-width: 680px; margin-bottom: var(--space-xl);">
        <span class="eyebrow">Studio Studio &bull; Mumbai</span>
        <h1>Contact Us</h1>
        <p class="lead">
          Connect directly with our production studio for custom album quotes, sample requests, and design consultations.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Left: Contact Information -->
        <div>
          <div style="margin-bottom: var(--space-lg); border-bottom: 1px solid var(--line); padding-bottom: var(--space-md);">
            <span class="eyebrow">Visit Us</span>
            <address style="font-style: normal; font-size: 1.125rem; line-height: 1.6; margin-top: 8px;">
              Shree Krishna Ind. Estate, Near Toll Naka,<br />
              211, Western Express Hwy, Dahisar East,<br />
              Mumbai 400068, INDIA
            </address>
            <div style="margin-top: var(--space-sm);">
              <a href="https://maps.google.com/?q=Shree+Krishna+Ind.+Estate+Western+Express+Hwy+Dahisar+East+Mumbai" target="_blank" rel="noopener noreferrer" class="text-link">
                <span>View on Google Maps</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div style="margin-bottom: var(--space-lg); border-bottom: 1px solid var(--line); padding-bottom: var(--space-md);">
            <span class="eyebrow">Call Us</span>
            <p style="font-size: 1.125rem; margin-top: 8px; margin-bottom: 4px;">
              <a href="tel:+919322254315" style="text-decoration: none;">+91-93222 54315</a>
            </p>
            <p style="font-size: 1.125rem; margin: 0;">
              <a href="tel:+919320054315" style="text-decoration: none;">+91-93200 54315</a>
            </p>
          </div>

          <div style="margin-bottom: var(--space-lg); border-bottom: 1px solid var(--line); padding-bottom: var(--space-md);">
            <span class="eyebrow">Email Us</span>
            <p style="margin-top: 8px; margin-bottom: 4px;">
              <a href="mailto:ultraaalbums@gmail.com">ultraaalbums@gmail.com</a>
            </p>
            <p style="margin: 0;">
              <a href="mailto:ultraadesignes@gmail.com">ultraadesignes@gmail.com</a>
            </p>
          </div>

          <div>
            <span class="eyebrow">Facebook Messenger</span>
            <p style="margin-top: 8px;">
              <a href="https://m.me/UltraaAlbums" target="_blank" rel="noopener noreferrer" class="text-link">
                <span>Message on Facebook Messenger</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>

        <!-- Right: Inquiry Form -->
        <div style="background-color: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-xl);">
          <h2 style="font-size: 1.75rem; margin-bottom: var(--space-md);">Get In Touch With Us!</h2>

          <form id="main-contact-form" method="POST" novalidate>
            <!-- Honeypot anti-spam -->
            <input type="text" name="_hp_website" class="form-honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />

            <div class="form-group">
              <label for="name" class="form-label">Name *</label>
              <input type="text" id="name" name="name" class="form-input" required autocomplete="name" />
            </div>

            <div class="form-group">
              <label for="phone" class="form-label">Phone Number *</label>
              <input type="tel" id="phone" name="phone" class="form-input" required autocomplete="tel" />
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email *</label>
              <input type="email" id="email" name="email" class="form-input" required autocomplete="email" />
            </div>

            <div class="form-group">
              <label for="country" class="form-label">Country</label>
              <input type="text" id="country" name="country" class="form-input" autocomplete="country-name" />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message *</label>
              <textarea id="message" name="message" class="form-textarea" rows="4" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>

            <div class="form-status" id="main-form-status" role="alert">
              Thank you. Your message has been sent. We will get back to you shortly.
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Contact Us - Ultraa Album',
    description: 'Visit us at Shree Krishna Ind. Estate, Near Toll Naka, 211, Western Express Hwy, Dahisar East, Mumbai 400068. Call +91-93222 54315.',
    canonical: 'https://ultraaalbums.com/contact-us/',
    currentPath: '/contact-us/',
    lang: 'en-IN',
    structuredData: structuredData,
    content: content
  });
}

module.exports = { renderContactPage };

