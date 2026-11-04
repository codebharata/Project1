const { Layout } = require('../components/Layout');

function renderSlipInAlbumsForUKPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="display: grid; grid-template-columns: 7fr 5fr; gap: var(--space-xl); align-items: center; margin-bottom: var(--space-2xl);">
        <div>
          <span class="eyebrow">UK Edition &bull; Quick Pocket Albums</span>
          <h1>Slip In Albums For UK</h1>
          <p class="lead">
            Slip in albums with optical clear white PVC pockets holding up to 300 photo capacity. Crafted in leather and leatherette for UK photographers seeking timeless parent albums and event presentations.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request UK Quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--sage);">
            <img
              src="/images/slip-in-albums-for-uk/006-scaled-1024x1024.webp"
              alt="Slip-in album with leather cover for UK photographers"
              width="800"
              height="800"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Feature Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-lg); padding: var(--space-xl) 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: var(--space-2xl);">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Large Capacity</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Accommodates up to 300 standard prints in neat double-sided layout pockets.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Archival Protection</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Acid-free white pocket pages preventing print degradation and dust accumulation.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">UK Delivery</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Reliable doorstep shipping across the United Kingdom with tracking.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/slip-in-albums-for-uk/DSC_0438-scaled-1024x1024.webp"
            alt="Interior of slip in album with clear photo pockets"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Handmade Spine Quality</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Comfortable to hold and easy to browse during family gatherings.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md); display: flex; flex-direction: column; justify-content: center;">
          <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-bottom: var(--space-sm);">Parent Albums &amp; Event Keepsakes</h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin-bottom: var(--space-md);">
            Cost-effective additions for client packages allowing parents and guests to hold duplicate prints.
          </p>
          <div>
            <a href="/contact-us/" class="btn btn-primary">Order UK Samples</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Slip In Albums For UK - Ultraa Album',
    description: 'Slip In Albums for UK wedding photographers with high photo capacity and handcrafted leather covers.',
    canonical: 'https://ultraaalbums.com/slip-in-albums-for-uk/',
    currentPath: '/slip-in-albums-for-uk/',
    lang: 'en-GB',
    hreflangPairs: [
      { lang: 'en-GB', url: 'https://ultraaalbums.com/slip-in-albums-for-uk/' },
      { lang: 'en-IN', url: 'https://ultraaalbums.com/slip-in-albums/' }
    ],
    content: content
  });
}

module.exports = { renderSlipInAlbumsForUKPage };

