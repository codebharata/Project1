const { Layout } = require('../components/Layout');

function render404Page() {
  const content = `
  <section class="section bg-paper">
    <div class="container" style="max-width: 680px; text-align: center; padding: var(--space-3xl) var(--space-md);">
      <span class="eyebrow">404 Error</span>
      <h1>Page Not Found</h1>
      <p class="lead" style="margin-bottom: var(--space-xl);">
        The page you are looking for does not exist or may have been relocated.
      </p>
      <div style="display: flex; gap: var(--space-md); justify-content: center; flex-wrap: wrap;">
        <a href="/" class="btn btn-primary">Return to Homepage</a>
        <a href="/our-products/" class="btn btn-outline">Explore Products</a>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Page Not Found - Ultraa Album',
    description: 'The requested page could not be found.',
    canonical: 'https://ultraaalbums.com/404/',
    currentPath: '/404/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { render404Page };

