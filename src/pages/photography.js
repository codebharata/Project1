const { Layout } = require('../components/Layout');

function renderPhotographyPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="display: grid; grid-template-columns: 7fr 5fr; gap: var(--space-xl); align-items: center; margin-bottom: var(--space-2xl);">
        <div>
          <span class="eyebrow">Services &bull; Mumbai Studio &amp; Travel</span>
          <h1>Affordable Wedding Photography Service</h1>
          <p class="lead">
            Capture the essence of your wedding with our stunning videography and photography. With our team of 15+ skilled photographers and videographers, you can rest assured that every smile, every tear, and every heartfelt moment will be captured.
          </p>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <a href="/contact-us/" class="btn btn-primary">Book a Consultation</a>
            <a href="/album-designing/" class="btn btn-outline">Explore Album Design</a>
          </div>
        </div>
        <div>
          <div class="product-image-shadow" style="border-radius: var(--radius-sm); overflow: hidden; background: var(--sage);">
            <img
              src="/images/photography/003-scaled-683x1024.webp"
              alt="Bridal wedding portrait captured by Ultraa Album photography team"
              width="683"
              height="1024"
              style="width: 100%; height: auto;"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Feature Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-lg); padding: var(--space-xl) 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: var(--space-2xl);">
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">15+ Skilled Crew</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            Professional candid photographers, traditional documentary shooters, and cinematographers equipped with high-end camera rigs.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">Pan-India &amp; Destination Travel</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            We travel across the country, creating an incredible montage of the most priceless moments of the weddings we cover.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: var(--space-xs);">End-to-End Delivery</h2>
          <p style="color: var(--ink-soft); font-size: 0.9375rem;">
            From raw shoot to cinematic editing and final physical hand-bound album manufacturing under one roof in Mumbai.
          </p>
        </div>
      </div>

      <!-- Gallery -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); margin-bottom: var(--space-2xl);">
        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md);">
          <img
            src="/images/photography/IMG_0529-scaled-683x1024.webp"
            alt="Candid wedding ceremony moment captured in natural light"
            width="600"
            height="900"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <h3 style="font-size: 1.25rem; margin-top: var(--space-sm);">Storytelling Through Our Lens</h3>
          <p style="font-size: 0.9375rem; color: var(--ink-soft); margin: 0;">Unobtrusive documentary style that preserves authentic emotion.</p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; background: var(--paper); border: 1px solid var(--line); padding: var(--space-md); display: flex; flex-direction: column; justify-content: center;">
          <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-bottom: var(--space-sm);">Combined Shoot &amp; Album Packages</h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin-bottom: var(--space-md);">
            Save studio coordination time by combining wedding coverage, editorial retouching, and handcrafted flush mount album binding.
          </p>
          <div>
            <a href="/contact-us/" class="btn btn-primary">Inquire About Packages</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Affordable Wedding Photography Service | Ultraa Albums',
    description: 'Looking for the quality but affordable wedding photography service? Rely on Ultra Album for all kind of events.',
    canonical: 'https://ultraaalbums.com/photography/',
    currentPath: '/photography/',
    lang: 'en-IN',
    hreflangPairs: [
      { lang: 'en-IN', url: 'https://ultraaalbums.com/photography/' },
      { lang: 'en-GB', url: 'https://ultraaalbums.com/photography-for-uk/' }
    ],
    content: content
  });
}

module.exports = { renderPhotographyPage };

