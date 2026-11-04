const { Layout } = require('../components/Layout');

function renderLanding2023Page() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div class="page-hero-grid">
        <div>
          <span class="eyebrow">Personalized Studio Printing</span>
          <h1>Ultraa Album &mdash; Handcrafted Memories</h1>
          <p class="lead">
            Ready to turn your moments into lasting memories? Join Ultraa Album today and start creating your personalized photo albums. Whether it's a wedding, a vacation, or a simple family gathering, every moment is worth celebrating.
          </p>
          <div>
            <a href="/contact-us/" class="btn btn-primary">Get Started</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--blush);">
            <img
              src="/images/landing-2023/1638785655236-scaled-1024x866.webp"
              alt="Personalized custom photo album on display"
              width="800"
              height="676"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Why Choose Us Grid -->
      <div style="padding: var(--space-xl) 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: var(--space-2xl);">
        <span class="eyebrow">Studio Values</span>
        <h2>Why Choose Ultraa Album?</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-lg); margin-top: var(--space-lg);">
          <div>
            <h3 style="font-size: 1.25rem; margin-bottom: var(--space-xs);">Personalized Touch</h3>
            <p style="color: var(--ink-soft); font-size: 0.9375rem;">
              Customize every detail of your album. From cover materials to page layouts, make it uniquely yours.
            </p>
          </div>
          <div>
            <h3 style="font-size: 1.25rem; margin-bottom: var(--space-xs);">High-Quality Printing</h3>
            <p style="color: var(--ink-soft); font-size: 0.9375rem;">
              We use the finest silver halide archival materials to ensure your memories are preserved in the best possible way.
            </p>
          </div>
          <div>
            <h3 style="font-size: 1.25rem; margin-bottom: var(--space-xs);">Secure and Private</h3>
            <p style="color: var(--ink-soft); font-size: 0.9375rem;">
              Your photos and personal data are safe with us. We respect your privacy and take security seriously.
            </p>
          </div>
        </div>
      </div>

      <!-- Packages Section from Live Copy -->
      <div style="margin-bottom: var(--space-2xl);">
        <span class="eyebrow">Package Specifications</span>
        <h2>Our Album Specifications</h2>
        <p style="color: var(--ink-soft); max-width: 68ch; margin-bottom: var(--space-xl);">
          These collections cater to different needs and preferences, ranging from small meaningful keepsakes to luxurious heirloom experiences.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-lg);">
          <div style="border: 1px solid var(--line); padding: var(--space-lg); border-radius: var(--radius-sm); background: var(--paper);">
            <h3 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Essential Memories</h3>
            <p class="caption">Size: 8&Prime; &times; 8&Prime; &bull; 20 pages</p>
            <p style="font-size: 0.9375rem; color: var(--ink-soft);">Up to 50 photos. Basic curated theme options. Perfect for creating small and meaningful photo albums.</p>
          </div>

          <div style="border: 1px solid var(--line); padding: var(--space-lg); border-radius: var(--radius-sm); background: var(--paper);">
            <h3 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Classic Collection</h3>
            <p class="caption">Size: 10&Prime; &times; 10&Prime; &bull; 40 pages</p>
            <p style="font-size: 0.9375rem; color: var(--ink-soft);">Up to 100 photos. Advanced theme options, captions, layouts, and photo editing tools. Ideal for special events.</p>
          </div>

          <div style="border: 1px solid var(--line); padding: var(--space-lg); border-radius: var(--radius-sm); background: var(--paper);">
            <h3 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Premium Experience</h3>
            <p class="caption">Size: 12&Prime; &times; 12&Prime; &bull; 60 pages</p>
            <p style="font-size: 0.9375rem; color: var(--ink-soft);">Up to 150 photos. Personalized themes, high-resolution printing, and deluxe cover materials.</p>
          </div>

          <div style="border: 1px solid var(--line); padding: var(--space-lg); border-radius: var(--radius-sm); background: var(--paper);">
            <h3 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Ultimate Legacy</h3>
            <p class="caption">Size: 14&Prime; &times; 14&Prime; &bull; 80 pages</p>
            <p style="font-size: 0.9375rem; color: var(--ink-soft);">Up to 200 photos. Exclusive album box, premium paper quality, dedicated design consultant, and expedited shipping.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Landing 2023 - Ultraa Album',
    description: 'Ready to turn your moments into lasting memories? Join Ultraa Album today and start creating your personalized photo albums.',
    canonical: 'https://ultraaalbums.com/landing-2023/',
    currentPath: '/landing-2023/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderLanding2023Page };

