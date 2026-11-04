const { Layout } = require('../components/Layout');

function renderPhotoBookPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div class="page-hero-grid">
        <div>
          <span class="eyebrow">Products &bull; Archival Custom Books</span>
          <h1>Custom Photo Books</h1>
          <p class="lead">
            Capture your life's most memorable moments and make them last forever with a custom photo book. We are so confident you'll appreciate your photo book that we offer a 100% satisfaction guarantee.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request a quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--blush);">
            <img
              src="/images/photo-book/U-152-1-1024x1024.webp"
              alt="Custom photo book showcasing rich photographic print reproduction"
              width="800"
              height="800"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Feature Grid -->
      <div class="features-row-grid">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Versatile Occasions</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Photo Books can be used to treasure precious moments from your child's birth to graduation, or for exhibiting your photography portfolio to prospective clients.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Archival Fine Papers</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Choose from luster, matte, or silk paper finishes with vibrant color fidelity and deep shadow contrast that resists aging.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Quality Guaranteed</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Each photo book is individually examined and quality-checked before careful moisture-sealed packaging for worldwide dispatch.
          </p>
        </div>
      </div>

      <!-- Showcase Images -->
      <div class="two-col-grid" style="margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/photo-book/DSC_0451-scaled-1024x1024.webp"
            alt="Custom photo book opened to show clean typography and photo layout"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Handcrafted Presentation</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Tailored design layouts with clean whitespace and balanced image pacing.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/photo-book/U-55-1-scaled-1024x1024.webp"
            alt="Bespoke photo book with matching slipcase box"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Custom Packaging Options</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Pair with custom fabric bags and presentation boxes for elevated studio delivery.</p>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Best Custom Photo Book: Make Your Memories Last Forever - Ultraa Album',
    description: 'Capture your life\'s most memorable moments and make them last forever with a custom photo book from Ultraa Album.',
    canonical: 'https://ultraaalbums.com/photo-book/',
    currentPath: '/photo-book/',
    lang: 'en-IN',
    hreflangPairs: [
      { lang: 'en-IN', url: 'https://ultraaalbums.com/photo-book/' },
      { lang: 'en-GB', url: 'https://ultraaalbums.com/photo-book-for-uk/' }
    ],
    content: content
  });
}

module.exports = { renderPhotoBookPage };

