const { Layout } = require('../components/Layout');

function renderBoxAndBagsPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="display: grid; grid-template-columns: 7fr 5fr; gap: var(--space-xl); align-items: center; margin-bottom: var(--space-2xl);">
        <div>
          <span class="eyebrow">Products &bull; Studio Presentation</span>
          <h1>Box &amp; Bags</h1>
          <p class="lead">
            Refined over the years, our regular box has been a popular feature of our range. It is a modern way of packaging that combines a designer hard wooden structure frame wrapped in leatherette material with a beautiful photo top cover.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Request a quote</a>
            <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--blush);">
            <img
              src="/images/box-and-bags/1-4-scaled-1024x1024.webp"
              alt="Custom wooden presentation album box wrapped in leatherette"
              width="800"
              height="800"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Features -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-lg); padding: var(--space-xl) 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: var(--space-2xl);">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Hard Wooden Frame</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Constructed with a sturdy hard wooden inner core that protects your albums from physical shock and long-term shelf storage pressure.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Leatherette &amp; Fabric Wraps</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Available in rich Italian leatherette, linen, or custom photo hardcovers to match your album's exterior aesthetic.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Protective Studio Bags</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Heavy-duty drawstring fabric bags and moisture-resistant carry cases designed for client handoffs and safe transport.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/box-and-bags/2-3-scaled-1024x1024.webp"
            alt="Handcrafted presentation box showing interior album placement"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Precision Interior Fit</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Silky ribbon lift and plush velvet lining for effortless album removal.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/box-and-bags/3-5-scaled-1024x1024.webp"
            alt="Custom album carry bags in protective fabric"
            width="600"
            height="600"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Studio Carry Bags</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Durable protective bags with reinforced stitched handles.</p>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Best Box And Bags for album in 2024 | Ultraa Albums',
    description: 'We offer a variety of box and bags for every occasion and shipping need. Boxes are available in multiple sizes and leatherette wraps.',
    canonical: 'https://ultraaalbums.com/box-and-bags/',
    currentPath: '/box-and-bags/',
    lang: 'en-IN',
    hreflangPairs: [
      { lang: 'en-IN', url: 'https://ultraaalbums.com/box-and-bags/' },
      { lang: 'en-GB', url: 'https://ultraaalbums.com/box-and-bags-for-uk/' }
    ],
    content: content
  });
}

module.exports = { renderBoxAndBagsPage };

