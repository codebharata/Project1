const { Layout } = require('../components/Layout');

function renderPhotoBookForUKPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div class="page-hero-grid">
        <div>
          <span class="eyebrow">UK Edition &bull; Archival Photobooks</span>
          <h1>Photo-Book For UK</h1>
          <p class="lead">
            Photo books can be used to treasure precious moments from your child's birth to graduation. If you carry a penchant for the photography art, our custom photo books are used for exhibiting your work across the UK.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request UK Quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--blush);">
            <img
              src="/images/photo-book-for-uk/DSC_0451-scaled-1024x1024.webp"
              alt="Custom photo book printed for UK photographers"
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
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Fine Art Paper</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Heavyweight archival papers with luster or matte coatings that render delicate wedding tones faithfully.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Linen &amp; Hardcover Wraps</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Tactile woven fabrics, classic leatherette, and custom image hardcovers with foil stamping.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Reliable UK Dispatch</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Carefully packaged in heavy moisture-proof cardboard boxes delivered to your doorstep.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div class="two-col-grid" style="margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/photo-book-for-uk/U-55-1-scaled-1024x1024.webp"
            alt="Custom photo book with matching slipcase box"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Handmade Packaging</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Coordinated presentation boxes that add value to your studio packages.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md); display: flex; flex-direction: column; justify-content: center;">
          <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-bottom: var(--space-sm);">10% Off Studio Samples</h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin-bottom: var(--space-md);">
            Order a sample photo book showcasing your own work to introduce our print quality to UK couples.
          </p>
          <div>
            <a href="/contact-us/" class="btn btn-primary">Request Sample Book</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Photo-Book For UK - Ultraa Album',
    description: 'Custom Photo-Book for UK wedding photographers with fine art papers and handcrafted covers.',
    canonical: 'https://ultraaalbums.com/photo-book-for-uk/',
    currentPath: '/photo-book-for-uk/',
    lang: 'en-GB',
    hreflangPairs: [
      { lang: 'en-GB', url: 'https://ultraaalbums.com/photo-book-for-uk/' },
      { lang: 'en-IN', url: 'https://ultraaalbums.com/photo-book/' }
    ],
    content: content
  });
}

module.exports = { renderPhotoBookForUKPage };

