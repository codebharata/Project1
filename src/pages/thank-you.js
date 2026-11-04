const { Layout } = require('../components/Layout');

function renderThankYouPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container" style="max-width: 680px; text-align: center; padding: var(--space-2xl) var(--space-md);">
      <span class="eyebrow">Inquiry Received</span>
      <h1>Thank You</h1>
      <p class="lead">
        Thank you for filling out the form. We have received your information.
      </p>
      <p style="color: var(--ink-soft); line-height: 1.6; margin-bottom: var(--space-xl);">
        Our studio team will call you soon to discuss your album specifications. You may also call <a href="tel:+919322254315">+91-93222 54315</a> to schedule your appointment directly!
      </p>
      <div>
        <a href="/" class="btn btn-primary">Return to Homepage</a>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Thank You - Ultraa Album',
    description: 'Thank you for contacting Ultraa Album. We will get back to you shortly.',
    canonical: 'https://ultraaalbums.com/thank-you/',
    currentPath: '/thank-you/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderThankYouPage };

