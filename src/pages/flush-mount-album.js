const { Layout } = require('../components/Layout');

function renderFlushMountAlbumPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="display: grid; grid-template-columns: 7fr 5fr; gap: var(--space-xl); align-items: center; margin-bottom: var(--space-2xl);">
        <div>
          <span class="eyebrow">Products &bull; Hand-Bound Craftsmanship</span>
          <h1>Flush Mount Albums</h1>
          <p class="lead">
            Keep your memories alive with a flush mount album. Ultraa Albums creates all of our albums HAND BOUND using traditional bookbinding techniques that were used years ago when individual books were made by hand.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request a quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--blush);">
            <img
              src="/images/flush-mount-album/D-1-scaled-1024x1024.webp"
              alt="Handcrafted luxury flush mount wedding photo album with acrylic cover"
              width="800"
              height="800"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Specifications Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-lg); padding: var(--space-xl) 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: var(--space-2xl);">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Panoramic Spreads</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Our flush mount albums are hand-bound with Silver halide prints and a thick white/black substrate in between. This gives a crispy, straight panoramic view of the entire spread.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Archival Page Thickness</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Thick archival core board is 0.5mm–1mm thick. Final page thickness is 1mm as standard and 1.5mm for extra thick pages, engineered to withstand everyday viewing.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Fuji Crystal Archive Paper</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Printed on Fuji Crystal Archive silver halide photo paper with luster finish for excellent image stability, clean whites, and accurate color reproduction.
          </p>
        </div>
      </div>

      <!-- Cover Options Section -->
      <div style="margin-bottom: var(--space-2xl);">
        <span class="eyebrow">Rich Materials</span>
        <h2>The Covers — The Story Starts From Here</h2>
        <p style="max-width: 68ch; margin-bottom: var(--space-xl);">
          Creating the cover is one of the most exciting moments in the album design process. Ultraa Albums offers richness of materials and customizations: handmade covers with aesthetic sensibility.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-lg);">
          <div style="border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md); background: var(--paper);">
            <h3 style="font-size: 1.25rem;">Acrylic-Crystal Cover Pad</h3>
            <p style="font-size: 0.9375rem; color: var(--ink-soft);">
              Cover photo mounted in crystal-clear acrylic with diamond polishing and finely tapered edges. Spine and back in premium black leatherette.
            </p>
          </div>
          <div style="border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md); background: var(--paper);">
            <h3 style="font-size: 1.25rem;">Canvas Covers</h3>
            <p style="font-size: 0.9375rem; color: var(--ink-soft);">
              Printed on bright white poly-cotton blend canvas with protective varnish coating to guard against moisture, abrasion, and UV exposure.
            </p>
          </div>
          <div style="border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md); background: var(--paper);">
            <h3 style="font-size: 1.25rem;">Linen Fabric Collection</h3>
            <p style="font-size: 0.9375rem; color: var(--ink-soft);">
              Fine natural linen textiles resistant to wear. Names and dates printed or foil embossed directly on the fabric.
            </p>
          </div>
          <div style="border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md); background: var(--paper);">
            <h3 style="font-size: 1.25rem;">Full Wrap Leather</h3>
            <p style="font-size: 0.9375rem; color: var(--ink-soft);">
              Supple leather wrap with optional cameo cutout. Three imprinting styles: Laser Engraving, Silver/Gold Foil Stamping, and UV printing.
            </p>
          </div>
          <div style="border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md); background: var(--paper);">
            <h3 style="font-size: 1.25rem;">Metal &amp; Wood Cover Pads</h3>
            <p style="font-size: 0.9375rem; color: var(--ink-soft);">
              Silver plate with matte brushed finish or natural hardwood cases laser-engraved with custom typography.
            </p>
          </div>
          <div style="border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md); background: var(--paper);">
            <h3 style="font-size: 1.25rem;">Raised Embossing</h3>
            <p style="font-size: 0.9375rem; color: var(--ink-soft);">
              Modern raised surface lettering in shining Gold, Rose Gold, or Silver foil for titles and wedding monograms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery / Work Showcase -->
  <section class="section bg-sage">
    <div class="container">
      <div style="margin-bottom: var(--space-xl);">
        <span class="eyebrow">Studio Showcase</span>
        <h2>Handcrafted Album Finishes</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-md);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper);">
          <img
            src="/images/flush-mount-album/E-1-scaled-1024x1024.webp"
            alt="Handcrafted flush mount album cover and binding detail"
            width="500"
            height="500"
            style="width: 100%; height: auto;"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper);">
          <img
            src="/images/flush-mount-album/F-1-scaled-1024x1024.webp"
            alt="Open flush mount album showing layflat panoramic spine"
            width="500"
            height="500"
            style="width: 100%; height: auto;"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper);">
          <img
            src="/images/flush-mount-album/U-18-2-1024x1024.webp"
            alt="Custom wedding photo album with presentation slipcase"
            width="500"
            height="500"
            style="width: 100%; height: auto;"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div style="margin-top: var(--space-xl); text-align: center;">
        <a href="/contact-us/" class="btn btn-primary">Request a sample for your studio</a>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Flush Mount Albums for Professional Photographers | Ultraa Album',
    description: 'Ultra Album is offerig best flush mount albums. We are one of the best album manufacturing company in mumbai.',
    canonical: 'https://ultraaalbums.com/flush-mount-album/',
    currentPath: '/flush-mount-album/',
    lang: 'en-IN',
    hreflangPairs: [
      { lang: 'en-IN', url: 'https://ultraaalbums.com/flush-mount-album/' },
      { lang: 'en-GB', url: 'https://ultraaalbums.com/flush-mount-album-for-uk/' }
    ],
    content: content
  });
}

module.exports = { renderFlushMountAlbumPage };

