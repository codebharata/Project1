const { Layout } = require('../components/Layout');

function renderSlipInAlbumsPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div class="page-hero-grid">
        <div>
          <span class="eyebrow">Products &bull; Quick Photo Pockets</span>
          <h1>Slip In Albums</h1>
          <p class="lead">
            Slip-in album is the best option to showcase your precious photos. Carefully handcrafted, this album is perfect for capturing and preserving your memories with archival PVC white pockets holding up to 300 photos.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request a quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--sage);">
            <img
              src="/images/slip-in-albums/006-scaled-1024x1024.webp"
              alt="Handcrafted slip-in photo album in fine leather cover"
              width="800"
              height="800"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="features-row-grid">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Up to 300 Photo Capacity</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Designed for high capacity photo storage with optical clear pockets that let you slide 4x6 or 5x7 prints directly into secure slots.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Archival PVC Pockets</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Acid-free white pocket pages that protect prints from dust, fingerprints, and environmental degradation over decades.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Leather Cover Options</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Bound in classic leather or leatherette in your choice of colors with optional personalized gold foil title stamping.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div class="two-col-grid" style="margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/slip-in-albums/DSC_0438-scaled-1024x1024.webp"
            alt="Interior view of slip-in album showing photo pocket arrangement"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Effortless Photo Organization</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Easily insert and reorder prints without mounting adhesives or glue.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/slip-in-albums/DSC_0445-scaled-1024x1024.webp"
            alt="Slip-in album closed showing spine and cover craftsmanship"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Durable Bookbound Spine</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Reinforced binding that lies comfortably in your hands.</p>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Best Slip In Albums -Ultraa Albums 2022',
    description: 'Slip in Albums are with PVC white pockets and comes upto 300 photo capacity. The cover is leather in any color.',
    canonical: 'https://ultraaalbums.com/slip-in-albums/',
    currentPath: '/slip-in-albums/',
    lang: 'en-IN',
    hreflangPairs: [
      { lang: 'en-IN', url: 'https://ultraaalbums.com/slip-in-albums/' },
      { lang: 'en-GB', url: 'https://ultraaalbums.com/slip-in-albums-for-uk/' }
    ],
    content: content
  });
}

module.exports = { renderSlipInAlbumsPage };

