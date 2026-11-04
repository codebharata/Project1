const { Layout } = require('../components/Layout');

function renderPhotographyForUKPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div class="page-hero-grid">
        <div>
          <span class="eyebrow">UK Edition &bull; Destination Coverage</span>
          <h1>Photography For UK</h1>
          <p class="lead">
            Quality photography for your wedding event at an affordable price. We offer a wide variety of packages, services, and handcrafted album delivery for destination weddings and UK celebrations.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Inquire About UK Coverage</a>
            <a href="/our-products/" class="btn btn-outline">Explore Albums</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--sage);">
            <img
              src="/images/photography-for-uk/003-scaled-683x1024.webp"
              alt="Bridal portrait captured for UK wedding photography client"
              width="683"
              height="1024"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Feature Grid -->
      <div class="features-row-grid">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Destination Wedding Coverage</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Experienced multi-cultural wedding photographers familiar with South Asian, traditional British, and fusion celebrations.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Candid &amp; Cinematic</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Unposed documentary photography coupled with high-resolution cinematic film capture.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Complete Album Package</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Combined coverage and physical flush mount album manufacturing with tracked international shipping to the UK.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div class="two-col-grid" style="margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/photography-for-uk/IMG_0529-scaled-683x1024.webp"
            alt="Candid wedding celebration moment"
            width="600"
            height="900"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Authentic Moments</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Preserving spontaneous emotions and joyous celebration memories.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md); display: flex; flex-direction: column; justify-content: center;">
          <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-bottom: var(--space-sm);">Consult with Our Studio</h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin-bottom: var(--space-md);">
            Speak directly with our team to discuss coverage dates, destination logistics, and album design preferences.
          </p>
          <div>
            <a href="/contact-us/" class="btn btn-primary">Schedule Consultation</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Photography For UK - Ultraa Album',
    description: 'Quality photography for your event at an affordable price from Ultraa Album.',
    canonical: 'https://ultraaalbums.com/photography-for-uk/',
    currentPath: '/photography-for-uk/',
    lang: 'en-GB',
    hreflangPairs: [
      { lang: 'en-GB', url: 'https://ultraaalbums.com/photography-for-uk/' },
      { lang: 'en-IN', url: 'https://ultraaalbums.com/photography/' }
    ],
    content: content
  });
}

module.exports = { renderPhotographyForUKPage };

