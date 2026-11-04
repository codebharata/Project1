const { Layout } = require('../components/Layout');

function renderLuxuryAlbumsPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div class="page-hero-grid">
        <div>
          <span class="eyebrow">Products &bull; Heirloom Collection</span>
          <h1>Luxury Albums</h1>
          <p class="lead">
            Ultraa Albums is a renowned luxury albums maker, providing online luxury photo albums and wedding photo albums crafted to your taste, adding an elegant touch to your photographs.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request a quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--sage);">
            <img
              src="/images/luxury-albums/1-2-scaled-1024x683.webp"
              alt="Bespoke luxury wedding photo album in fine leather binding"
              width="800"
              height="533"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="features-row-grid">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Handmade Uniqueness</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            In order to give every piece uniqueness, our covers are all handmade with aesthetic sensibility, combining leather, canvas, linen, and polished metals.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Foil Stamping &amp; Debossing</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Monograms and titles can be embossed or foil-stamped in shining Gold, Rose Gold, or Silver foil for an enduring tactile impression.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Bespoke Slipcases</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Each luxury album can be paired with an archival handcrafted wooden or leatherette presentation box with magnetic closures.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div class="two-col-grid" style="margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/luxury-albums/1-3-scaled-1024x768.webp"
            alt="Luxury album detail showing thick panoramic page construction"
            width="600"
            height="450"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Hand-Mounted Core Substrates</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Unbending, warp-resistant archival boards ensuring longevity.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/luxury-albums/2-2-scaled-1024x683.webp"
            alt="Luxury album packaging with custom engraved metal accents"
            width="600"
            height="400"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Refined Metal &amp; Wood Details</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Brushed silver plaques and natural wood accents crafted to order.</p>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Best Luxury Albums Maker in Mumbai | Ultraa Albums',
    description: 'Ultraa Albums is a famous Luxury Albums maker, provides online Luxury Photo Albums, Wedding Photo Albums handcrafted in Mumbai.',
    canonical: 'https://ultraaalbums.com/luxury-albums/',
    currentPath: '/luxury-albums/',
    lang: 'en-IN',
    hreflangPairs: [
      { lang: 'en-IN', url: 'https://ultraaalbums.com/luxury-albums/' },
      { lang: 'en-GB', url: 'https://ultraaalbums.com/luxury-albums-for-uk/' }
    ],
    content: content
  });
}

module.exports = { renderLuxuryAlbumsPage };

