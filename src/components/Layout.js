const { AnnouncementBar } = require('./AnnouncementBar');
const { Header } = require('./Header');
const { Footer } = require('./Footer');
const { ContactTab } = require('./ContactTab');

function Layout({
  title = 'Ultraa Album | Photo Album Manufacturer Mumbai',
  description = 'Handcrafted wedding photo albums, photobooks, and professional design services.',
  canonical = 'https://ultraaalbums.com/',
  currentPath = '/',
  lang = 'en-IN',
  preloadHero = null,
  structuredData = null,
  hreflangPairs = [],
  content = ''
}) {
  const fullCanonical = canonical.startsWith('http') ? canonical : `https://ultraaalbums.com${canonical}`;
  
  // Format hreflang tags if any
  const alternateTags = hreflangPairs.map(p => 
    `<link rel="alternate" hreflang="${p.lang}" href="${p.url}" />`
  ).join('\n    ');

  // JSON-LD structured data
  let schemaScript = '';
  if (structuredData) {
    schemaScript = `<script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
    </script>`;
  }

  // Preload hero image tag
  let preloadTag = '';
  if (preloadHero) {
    preloadTag = `<link rel="preload" as="image" href="${preloadHero}" type="image/webp" />`;
  }

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${fullCanonical}" />
  ${alternateTags ? `${alternateTags}` : ''}

  <!-- Open Graph -->
  <meta property="og:site_name" content="Ultraa Album" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${fullCanonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://ultraaalbums.com/images/common/cropped-ultra-logo.webp" />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/images/common/favicon.png" />
  <link rel="apple-touch-icon" href="/images/common/cropped-Untitled-design-27-180x180.webp" />

  <!-- Preload Critical Fonts & Assets -->
  <link rel="preload" href="/fonts/Newsreader-normal.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="/fonts/InstrumentSans-normal.woff2" as="font" type="font/woff2" crossorigin />
  ${preloadTag}

  <!-- Stylesheets -->
  <link rel="stylesheet" href="/styles/tokens.css" />
  <link rel="stylesheet" href="/styles/fonts.css" />
  <link rel="stylesheet" href="/styles/base.css" />
  <link rel="stylesheet" href="/styles/components.css" />

  ${schemaScript}
</head>
<body>
  <a href="#main-content" class="skip-to-content">Skip to content</a>

  ${AnnouncementBar()}
  ${Header(currentPath)}

  <main id="main-content">
    ${content}
  </main>

  ${Footer()}
  ${ContactTab()}

  <script src="/scripts/main.js"></script>
</body>
</html>`;
}

module.exports = { Layout };

