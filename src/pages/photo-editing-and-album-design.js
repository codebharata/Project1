const { Layout } = require('../components/Layout');

function renderPhotoEditingAndAlbumDesignPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container" style="max-width: 900px;">
      <div style="margin-bottom: var(--space-xl);">
        <span class="eyebrow">Studio Services &bull; Mumbai</span>
        <h1>Photo Editing &amp; Album Design</h1>
        <p class="lead">
          Every moment or every occasion you celebrate is a beautiful memory. So should not the pictures you click and edit also be a masterpiece? When you look at your memories after years, you feel refreshed and remember the beautiful moments again.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); margin-bottom: var(--space-2xl); align-items: center;">
        <div>
          <h2 style="font-size: 1.5rem;">Why Combined Editing &amp; Design Matters</h2>
          <p>
            Ultraa Albums is one of the leading photo editing and album design companies in Mumbai. We have carved a niche for photo editing services globally with a dedicated team of master retouchers and spread layout designers.
          </p>
          <p>
            When photo editing and layout design are handled harmoniously, colors across opposing pages match perfectly in balance, skin tones stay consistent across varied lighting setups, and panoramic spreads flow without aesthetic friction.
          </p>
        </div>
        <div style="background-color: var(--sky); padding: var(--space-xl); border-radius: var(--radius-sm); border: 1px solid var(--line);">
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: var(--space-sm);">Key Studio Highlights</h3>
          <ul style="list-style: none; padding: 0; margin: 0; color: var(--ink);">
            <li style="padding: 8px 0; border-bottom: 1px solid var(--line);">&bull; Master skin tone balancing &amp; retouching</li>
            <li style="padding: 8px 0; border-bottom: 1px solid var(--line);">&bull; Background distraction cleanup &amp; isolation</li>
            <li style="padding: 8px 0; border-bottom: 1px solid var(--line);">&bull; Curated multi-photo panoramic spread layouts</li>
            <li style="padding: 8px 0;">&bull; Unlimited revisions until client sign-off</li>
          </ul>
        </div>
      </div>

      <div style="text-align: center; margin-top: var(--space-xl);">
        <a href="/contact-us/" class="btn btn-primary">Start a Design Project</a>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Photo Editing - Ultraa Album',
    description: 'Ultraa Albums is one of the leading photo editing companies in Mumbai. We offer custom photo editing and album designing services.',
    canonical: 'https://ultraaalbums.com/photo-editing-and-album-design/',
    currentPath: '/photo-editing-and-album-design/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderPhotoEditingAndAlbumDesignPage };

