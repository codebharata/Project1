const { Layout } = require('../components/Layout');
const { BeforeAfter } = require('../components/BeforeAfter');

function renderImageEditingForUKPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div class="page-hero-grid">
        <div>
          <span class="eyebrow">UK Edition &bull; Studio Post-Production</span>
          <h1>Image Editing For UK</h1>
          <p class="lead">
            Ultraa Album is a 10+ years experienced organization working for professional photographers across the globe. We provide image correction, retouching, and background manipulation tailored to UK wedding studio standards.
          </p>
          <div>
            <a href="/contact-us/" class="btn btn-primary">Submit Test Images from UK</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--sky);">
            <img
              src="/images/image-editing-for-uk/Image-editing-example-1024x717.webp"
              alt="Professional image editing example for UK photographers"
              width="800"
              height="560"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Feature Grid -->
      <div class="features-row-grid">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Natural Skin Tones</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Clean skin texture preservation without plastic or blurred artifacts, suited for fine art portraiture.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Fast Turnaround</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Quick turnaround with overnight delivery matching UK time zones to keep your studio workflow ahead of schedule.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Economical Rates</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Affordable wholesale per-image or bulk gallery rates that give working UK photographers strong margins.
          </p>
        </div>
      </div>

      <!-- Before After Section -->
      <div style="margin-bottom: var(--space-2xl);">
        <span class="eyebrow">Interactive Sample</span>
        <h2>Retouching Demonstration</h2>
        <div style="margin-top: var(--space-lg); max-width: 720px;">
          ${BeforeAfter({
            id: 'ba-editing-uk',
            title: 'UK Portrait Retouching Comparison',
            beforeSrc: '/images/index/06.-Image-Manipulation__a.-before.webp',
            beforeAlt: 'Before retouching',
            afterSrc: '/images/index/06.-Image-Manipulation__b.-after.webp',
            afterAlt: 'After retouching',
            width: 720,
            height: 480
          })}
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Image Editing For UK - Ultraa Album',
    description: 'Ultraa Albums is 10+ years experienced organization providing image editing and retouching for UK photographers.',
    canonical: 'https://ultraaalbums.com/image-editing-for-uk/',
    currentPath: '/image-editing-for-uk/',
    lang: 'en-GB',
    hreflangPairs: [
      { lang: 'en-GB', url: 'https://ultraaalbums.com/image-editing-for-uk/' },
      { lang: 'en-IN', url: 'https://ultraaalbums.com/image-editing/' }
    ],
    content: content
  });
}

module.exports = { renderImageEditingForUKPage };

