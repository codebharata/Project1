const { Layout } = require('../components/Layout');

function renderAlbumDesignsPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="max-width: 800px; margin-bottom: var(--space-xl);">
        <span class="eyebrow">Portfolio &bull; Curated Spreads</span>
        <h1>Album Designing Services &amp; Themes</h1>
        <p class="lead">
          Ultra Album has expert album designers for traditional and modern wedding themes. Reach out to us as we have the perfect album solutions for you.
        </p>
      </div>

      <div class="product-grid">
        <!-- Theme 1 -->
        <article style="border: 1px solid var(--line); border-radius: var(--radius-sm); overflow: hidden; background: var(--paper);">
          <div style="width: 100%; aspect-ratio: 2 / 1; background: var(--blush); overflow: hidden;">
            <img
              src="/images/album-designs/1-6-scaled.webp"
              alt="Indian Classic Album Designs spread with balanced ceremonial pacing"
              width="600"
              height="300"
              style="width: 100%; height: 100%; object-fit: cover;"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div style="padding: var(--space-md);">
            <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Indian Classic Album Designs</h2>
            <p style="font-size: 0.9375rem; color: var(--ink-soft); margin-bottom: var(--space-sm);">
              Carefully balanced multi-image spreads tailored for vibrant Indian wedding ceremonies, sangeet, and mandap rituals.
            </p>
            <a href="/contact-us/" class="text-link">Inquire about this theme &rarr;</a>
          </div>
        </article>

        <!-- Theme 2 -->
        <article style="border: 1px solid var(--line); border-radius: var(--radius-sm); overflow: hidden; background: var(--paper);">
          <div style="width: 100%; aspect-ratio: 2 / 1; background: var(--sage); overflow: hidden;">
            <img
              src="/images/album-designs/5-5-scaled.webp"
              alt="Western Classic Album Design with clean whitespace and portrait emphasis"
              width="600"
              height="300"
              style="width: 100%; height: 100%; object-fit: cover;"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div style="padding: var(--space-md);">
            <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Western Classic Album Design</h2>
            <p style="font-size: 0.9375rem; color: var(--ink-soft); margin-bottom: var(--space-sm);">
              Minimalist layout with generous paper margins, delicate typography accents, and emphasis on couple portraits.
            </p>
            <a href="/contact-us/" class="text-link">Inquire about this theme &rarr;</a>
          </div>
        </article>
      </div>

      <div style="margin-top: var(--space-2xl); text-align: center;">
        <a href="/contact-us/" class="btn btn-primary">Request Custom Design for Your Studio</a>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Album Designing Services | Ultra Album | Best Album Designs',
    description: 'Ultra album has expert album designers for traditional and modern wedding theme. Reach out to us for custom album spreads.',
    canonical: 'https://ultraaalbums.com/album-designs/',
    currentPath: '/album-designs/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderAlbumDesignsPage };

