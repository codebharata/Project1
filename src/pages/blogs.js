const { Layout } = require('../components/Layout');

function renderBlogsPage() {
  const articles = [
    {
      title: 'Professional Photo Retouching Services for Photographers',
      date: 'March 2026',
      excerpt: 'Are you looking for anyone who can do retouching for your photographs as per your convenience? Don\'t hesitate just call us. We have a team of highly skilled & expert professionals who can give you best photo editing services. We are one of leading Album designing and manufacturing company in India having situated in Mumbai.',
      image: '/images/index/06.-Image-Manipulation__b.-after.webp'
    },
    {
      title: 'Why Hand-Bound Flush Mount Albums Outlast Machine-Glued Books',
      date: 'February 2026',
      excerpt: 'Discover the traditional bookbinding techniques and archival adhesive substrates that give handcrafted flush mount albums decades of spine durability without page detachment.',
      image: '/images/index/10-scaled.webp'
    },
    {
      title: 'How Professional Wedding Photographers Present Studio Samples',
      date: 'January 2026',
      excerpt: 'In spite of keeping competitive pricing, studio samples allow prospective wedding couples to experience tactile cover materials, embossing, and panoramic spreads firsthand.',
      image: '/images/index/1-3-scaled.webp'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Ultraa Album Blog",
    "description": "Insights on wedding album manufacturing, photo editing, and studio sample presentation.",
    "url": "https://ultraaalbums.com/blogs/"
  };

  const content = `
  <section class="section bg-paper">
    <div class="container" style="max-width: 960px;">
      <div style="margin-bottom: var(--space-xl);">
        <span class="eyebrow">Studio Journal</span>
        <h1>Our Blogs</h1>
        <p class="lead">
          Guidance on album manufacturing, photo retouching, paper selections, and studio workflows for wedding photographers.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: var(--space-xl);">
        ${articles.map(art => `
        <article class="blog-card-grid">
          <div style="width: 100%; aspect-ratio: 3 / 2; background-color: var(--blush); border-radius: var(--radius-sm); overflow: hidden;">
            <img
              src="${art.image}"
              alt="${art.title}"
              width="600"
              height="400"
              style="width: 100%; height: 100%; object-fit: cover;"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span class="caption">${art.date}</span>
            <h2 style="font-size: 1.5rem; margin-top: 4px; margin-bottom: var(--space-xs);">${art.title}</h2>
            <p style="color: var(--ink-soft); line-height: 1.6; margin-bottom: var(--space-sm);">${art.excerpt}</p>
            <a href="/contact-us/" class="text-link">Inquire about our studio services &rarr;</a>
          </div>
        </article>
        `).join('')}
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Blogs - Ultraa Album',
    description: 'Ultraa Album photography insights, album care guides, and professional photo retouching articles from Mumbai\'s leading album manufacturer.',
    canonical: 'https://ultraaalbums.com/blogs/',
    currentPath: '/blogs/',
    lang: 'en-IN',
    structuredData: structuredData,
    content: content
  });
}

module.exports = { renderBlogsPage };

