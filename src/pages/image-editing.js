const { Layout } = require('../components/Layout');
const { BeforeAfter } = require('../components/BeforeAfter');

function renderImageEditingPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div class="page-hero-grid">
        <div>
          <span class="eyebrow">Services &bull; Professional Retouching</span>
          <h1>Best Image Editing Services</h1>
          <p class="lead">
            Looking for affordable &amp; best image editing service? Count on us as we've been providing professional editing services globally with a team of highly skilled photo editors.
          </p>
          <div>
            <a href="/contact-us/" class="btn btn-primary">Submit Test Images</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--sky);">
            <img
              src="/images/image-editing/Image-editing-example-1024x717.webp"
              alt="Professional image retouching sample showing skin smoothing and color enhancement"
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
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Skin &amp; Portrait Retouching</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Natural skin texture preservation, blemish removal, stray hair cleanup, and delicate facial tone evening.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Background &amp; Object Removal</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Distracting foreground objects removed, unwanted background clutter cleanly excised, and scenery replaced cleanly.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Color Grading &amp; Matching</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Custom studio color grading tailored to match your brand look across indoor flash and outdoor ambient lighting.
          </p>
        </div>
      </div>

      <!-- Before After Section -->
      <div style="margin-bottom: var(--space-2xl);">
        <span class="eyebrow">Interactive Comparisons</span>
        <h2>Retouching Before / After Samples</h2>
        <div style="margin-top: var(--space-lg); max-width: 720px;">
          ${BeforeAfter({
            id: 'ba-editing-page',
            title: 'Image Manipulation & Color Balancing',
            beforeSrc: '/images/index/06.-Image-Manipulation__a.-before.webp',
            beforeAlt: 'Raw portrait before professional skin and lighting retouching',
            afterSrc: '/images/index/06.-Image-Manipulation__b.-after.webp',
            afterAlt: 'Finished portrait after professional retouching and tone balancing',
            width: 720,
            height: 480
          })}
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Best Image Editing Services | Ultraa Albums',
    description: 'Looking for affordable & best image editing service? Count on us as we\'ve been providing professional editing services.',
    canonical: 'https://ultraaalbums.com/image-editing/',
    currentPath: '/image-editing/',
    lang: 'en-IN',
    hreflangPairs: [
      { lang: 'en-IN', url: 'https://ultraaalbums.com/image-editing/' },
      { lang: 'en-GB', url: 'https://ultraaalbums.com/image-editing-for-uk/' }
    ],
    content: content
  });
}

module.exports = { renderImageEditingPage };
