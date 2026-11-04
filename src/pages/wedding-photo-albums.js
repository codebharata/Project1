const { Layout } = require('../components/Layout');

function renderWeddingPhotoAlbumsPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div class="page-hero-grid">
        <div>
          <span class="eyebrow">Products &bull; Dedicated Wedding Collections</span>
          <h1>Creative Wedding Photo Albums and Books</h1>
          <p class="lead">
            Lay Flat wedding photo albums and books from Ultraa Album are beautifully crafted and designed to preserve your wedding memories. Unlike traditional photo albums, our albums prevent bending and creasing since the pages lay flat.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request a quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--blush);">
            <img
              src="/images/wedding-photo-albums/D-1-scaled-300x300.webp"
              alt="Creative wedding photo album with bespoke acrylic crystal cover"
              width="600"
              height="600"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="features-row-grid">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Panoramic Spreads</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Display your panoramic ceremony and reception images seamlessly thanks to flat double-page spreads without center gutter loss.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Vivid Color Reproduction</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Printed on professional Fuji Crystal Archive photo papers to produce vivid images with high-density colors and clean whites.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Durable Heirloom Craft</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Handcrafted with rigid archival boards that resist page warping, ensuring your clients' memories remain preserved for decades.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div class="two-col-grid" style="margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/wedding-photo-albums/E-1-scaled-300x300.webp"
            alt="Wedding photo album showing exquisite page gilding and stitching"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Hand-Bound Artisan Quality</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Precision page mounting with durable bookbinding adhesives.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/wedding-photo-albums/F-1-scaled-300x300.webp"
            alt="Open wedding album demonstrating flat panoramic display"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Panoramic Display</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Perfect for dramatic wide-angle wedding photography.</p>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Creative Wedding Photo Albums and Books | Ultraa Albums',
    description: 'Explore our selections of wedding photo albums & create wedding memories with our affordable wedding photo album manufacturing service.',
    canonical: 'https://ultraaalbums.com/wedding-photo-albums/',
    currentPath: '/wedding-photo-albums/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderWeddingPhotoAlbumsPage };

