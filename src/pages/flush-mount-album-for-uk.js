const { Layout } = require('../components/Layout');

function renderFlushMountAlbumForUKPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div class="page-hero-grid">
        <div>
          <span class="eyebrow">UK Edition &bull; Worldwide Studio Delivery</span>
          <h1>Wedding Album Printing UK</h1>
          <p class="lead">
            Ultraa Album is a leading printing services provider of wedding album printing for professional photographers across the United Kingdom. We offer bespoke hand-bound craftsmanship with direct manufacturer pricing.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request UK Studio Quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--blush);">
            <img
              src="/images/flush-mount-album-for-uk/D-1-scaled-1024x1024.webp"
              alt="Handcrafted flush mount wedding album printed for UK wedding photographers"
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
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Reliable UK Delivery</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Doorstep tracked shipping to England, Scotland, Wales, and Northern Ireland with moisture-proof protective packaging.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Hand-Bound Spreads</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Solid archival core boards and genuine layflat panoramic spreads printed on Fuji Crystal Archive photographic paper.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Studio Sample Discount</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            UK photographers receive 10% off on studio sample albums to showcase our binding quality and cover materials to clients.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div class="two-col-grid" style="margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/flush-mount-album-for-uk/E-1-scaled-1024x1024.webp"
            alt="Flush mount album craftsmanship showing edge finish"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Handcrafted Acrylic &amp; Leather</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Polished crystal-clear acrylic fronts and supple leatherette wraps.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/flush-mount-album-for-uk/F-1-scaled-1024x1024.webp"
            alt="Open flush mount album flat panoramic spread"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Panoramic Layflat Spreads</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Continuous double-page spreads without center gutter loss.</p>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Best wedding album printing UK With Your Wedding Memory - Ultraa Album',
    description: 'The wedding album printing UK is a leading printing services provider of wedding album printing for professional photographers.',
    canonical: 'https://ultraaalbums.com/flush-mount-album-for-uk/',
    currentPath: '/flush-mount-album-for-uk/',
    lang: 'en-GB',
    hreflangPairs: [
      { lang: 'en-GB', url: 'https://ultraaalbums.com/flush-mount-album-for-uk/' },
      { lang: 'en-IN', url: 'https://ultraaalbums.com/flush-mount-album/' }
    ],
    content: content
  });
}

module.exports = { renderFlushMountAlbumForUKPage };
