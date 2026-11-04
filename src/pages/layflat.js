const { Layout } = require('../components/Layout');

function renderLayflatPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="display: grid; grid-template-columns: 7fr 5fr; gap: var(--space-xl); align-items: center; margin-bottom: var(--space-2xl);">
        <div>
          <span class="eyebrow">Products &bull; Layflat Spreads</span>
          <h1>Best Layflat Albums</h1>
          <p class="lead">
            Our Layflat Albums are very similar to our Flush Mount Album except the substrate is thinner and lighter in weight, which allows more pages and is more economical. It is a lighter flush mount album in weight.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request a quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--sage);">
            <img
              src="/images/layflat/U-151-scaled-1024x1024.webp"
              alt="Panoramic layflat photo album opening completely flat across double page spread"
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
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Panoramic Lay Flat Pages</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            The great thing about the Lay Flat is that you can print an image across a double page spread without worrying about a gutter fold interrupting your image.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Portfolios &amp; Design Art</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Lay flat photo books make excellent professional portfolios for interior designers, fashion stylists, and fine art wedding photographers.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Hand-Bound Traditional Quality</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Using traditional bookbinding techniques, our photo albums lie completely flat on a table, elevating the physical presentation experience.
          </p>
        </div>
      </div>

      <!-- Showcase Images -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/layflat/4-4-scaled-1024x1024.webp"
            alt="Layflat album open showcasing continuous panoramic layout"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Continuous Double-Page Panoramas</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">No loss of image detail in the binding center.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/layflat/B-3-scaled-1024x1024.webp"
            alt="Layflat album with custom textured fabric cover"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Handmade Cover Customization</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Available in acrylic crystal, linen fabric, canvas, and genuine leatherette.</p>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Best Layflat Albums for Professional Wedding Photographers | Ultraa Album',
    description: 'Ultraa Album offers a variety of albums to suit your needs, including layflat wedding albums with seamless double-page spreads.',
    canonical: 'https://ultraaalbums.com/layflat/',
    currentPath: '/layflat/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderLayflatPage };
