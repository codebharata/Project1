const { Layout } = require('../components/Layout');

function renderLuxuryAlbumsForUKPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="display: grid; grid-template-columns: 7fr 5fr; gap: var(--space-xl); align-items: center; margin-bottom: var(--space-2xl);">
        <div>
          <span class="eyebrow">UK Edition &bull; Bespoke Heirlooms</span>
          <h1>Luxury Wedding Albums UK</h1>
          <p class="lead">
            We provide high quality albums for the best prices in the luxury wedding albums UK market. If you are a professional photographer in the UK, enhance your client presentation with our handcrafted artisan albums.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request UK Quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--sage);">
            <img
              src="/images/luxury-albums-for-uk/1-2-scaled-1024x683.webp"
              alt="Luxury wedding album handcrafted for UK photographers"
              width="800"
              height="533"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Features -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-lg); padding: var(--space-xl) 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: var(--space-2xl);">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Fine Leather &amp; Linen</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Genuine leatherette, fine European linens, and crystal acrylic covers tailored to your client's wedding color scheme.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Foil Stamping &amp; Debossing</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Custom font debossing and metallic foil stamping in Gold, Silver, and Rose Gold.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Secure UK Dispatch</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Tracked international courier delivery directly to your studio address with zero hassle.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/luxury-albums-for-uk/1-3-scaled-1024x768.webp"
            alt="Luxury album detail showing thick panoramic core boards"
            width="600"
            height="450"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Handcrafted Presentation</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Heirloom archival quality that lasts a lifetime.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md); display: flex; flex-direction: column; justify-content: center;">
          <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-bottom: var(--space-sm);">10% Off Studio Samples for UK Studios</h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin-bottom: var(--space-md);">
            Order a physical demonstration album with your own studio photography to show wedding couples at client meetings.
          </p>
          <div>
            <a href="/contact-us/" class="btn btn-primary">Order Studio Sample</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Quality Luxury Wedding Albums UK for Professional Photographers',
    description: 'We provide high quality albums for the best prices in the luxury wedding albums UK. For professional photographers.',
    canonical: 'https://ultraaalbums.com/luxury-albums-for-uk/',
    currentPath: '/luxury-albums-for-uk/',
    lang: 'en-GB',
    hreflangPairs: [
      { lang: 'en-GB', url: 'https://ultraaalbums.com/luxury-albums-for-uk/' },
      { lang: 'en-IN', url: 'https://ultraaalbums.com/luxury-albums/' }
    ],
    content: content
  });
}

module.exports = { renderLuxuryAlbumsForUKPage };
