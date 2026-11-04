const { Layout } = require('../components/Layout');

function renderBoxAndBagsForUKPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="display: grid; grid-template-columns: 7fr 5fr; gap: var(--space-xl); align-items: center; margin-bottom: var(--space-2xl);">
        <div>
          <span class="eyebrow">UK Edition &bull; Luxury Packaging</span>
          <h1>Box &amp; Bags for UK</h1>
          <p class="lead">
            Refined over the years, our regular box has been a popular feature of our range for wedding photo albums UK. It combines a designer hard wooden structure frame wrapped in leatherette with a matching protective album bag.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request UK Quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--blush);">
            <img
              src="/images/box-and-bags-for-uk/1-4-scaled-1024x1024.webp"
              alt="Handcrafted presentation box and matching album bag for UK photographers"
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
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Hard Wooden Structure</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Sturdy wooden framework wrapped in leatherette with photographic cover inserts or metallic nameplates.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Protective Carry Bags</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Heavyweight fabric bags designed to shield leather albums from scuffs and atmospheric moisture during UK delivery.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Direct UK Studio Delivery</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Securely boxed and shipped with international air couriers directly to your studio address.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/box-and-bags-for-uk/2-3-scaled-1024x1024.webp"
            alt="Interior of wooden presentation box with ribbon lift"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Velvet Interior Lining</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Plush finish with matching ribbon for easy removal.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md); display: flex; flex-direction: column; justify-content: center;">
          <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-bottom: var(--space-sm);">Complete Presentation Suites</h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin-bottom: var(--space-md);">
            Pair your UK wedding album orders with matching presentation boxes and parent albums for cohesive client collections.
          </p>
          <div>
            <a href="/contact-us/" class="btn btn-primary">Inquire About Packaging</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Box-And-Bags For UK - Ultraa Album',
    description: 'Refined over the years, our regular box has been a popular feature of our range for wedding photo albums UK.',
    canonical: 'https://ultraaalbums.com/box-and-bags-for-uk/',
    currentPath: '/box-and-bags-for-uk/',
    lang: 'en-GB',
    hreflangPairs: [
      { lang: 'en-GB', url: 'https://ultraaalbums.com/box-and-bags-for-uk/' },
      { lang: 'en-IN', url: 'https://ultraaalbums.com/box-and-bags/' }
    ],
    content: content
  });
}

module.exports = { renderBoxAndBagsForUKPage };

