const fs = require('fs');
const path = require('path');

// Page renderers
const { renderHomePage } = require('./src/pages/index');
const { renderAboutPage } = require('./src/pages/about-us');
const { renderOurProductsPage } = require('./src/pages/our-products');
const { renderContactPage } = require('./src/pages/contact-us');
const { renderFAQPage } = require('./src/pages/faq');
const { renderBlogsPage } = require('./src/pages/blogs');
const { renderPrivacyPolicyPage } = require('./src/pages/privacy-policy');
const { renderTermsPage } = require('./src/pages/terms-and-condition');
const { renderFlushMountAlbumPage } = require('./src/pages/flush-mount-album');
const { renderLayflatPage } = require('./src/pages/layflat');
const { renderPhotoBookPage } = require('./src/pages/photo-book');
const { renderLuxuryAlbumsPage } = require('./src/pages/luxury-albums');
const { renderBoxAndBagsPage } = require('./src/pages/box-and-bags');
const { renderSlipInAlbumsPage } = require('./src/pages/slip-in-albums');
const { renderWeddingPhotoAlbumsPage } = require('./src/pages/wedding-photo-albums');
const { renderImageEditingPage } = require('./src/pages/image-editing');
const { renderPhotographyPage } = require('./src/pages/photography');
const { renderPhotoEditingAndAlbumDesignPage } = require('./src/pages/photo-editing-and-album-design');
const { renderAlbumDesignsPage } = require('./src/pages/album-designs');
const { renderAlbumDesigningPage } = require('./src/pages/album-designing');
const { renderFlushMountAlbumForUKPage } = require('./src/pages/flush-mount-album-for-uk');
const { renderLuxuryAlbumsForUKPage } = require('./src/pages/luxury-albums-for-uk');
const { renderBoxAndBagsForUKPage } = require('./src/pages/box-and-bags-for-uk');
const { renderSlipInAlbumsForUKPage } = require('./src/pages/slip-in-albums-for-uk');
const { renderImageEditingForUKPage } = require('./src/pages/image-editing-for-uk');
const { renderPhotoBookForUKPage } = require('./src/pages/photo-book-for-uk');
const { renderPhotographyForUKPage } = require('./src/pages/photography-for-uk');
const { renderThankYouPage } = require('./src/pages/thank-you');
const { renderLanding2023Page } = require('./src/pages/landing-2023');
const { render404Page } = require('./src/pages/404');

const DIST_DIR = path.join(__dirname, 'dist');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  console.log('Building Ultraa Album static site...');
  fs.mkdirSync(DIST_DIR, { recursive: true });

  // 1. Copy Public Assets
  console.log('Copying public assets to dist...');
  copyDirRecursive(path.join(__dirname, 'public'), DIST_DIR);

  // 2. Copy Styles
  console.log('Copying stylesheets to dist/styles...');
  copyDirRecursive(path.join(__dirname, 'src/styles'), path.join(DIST_DIR, 'styles'));

  // 3. Copy Scripts
  console.log('Copying scripts to dist/scripts...');
  copyDirRecursive(path.join(__dirname, 'src/scripts'), path.join(DIST_DIR, 'scripts'));

  // 4. Render Pages Map
  const routes = [
    { path: '/', file: 'index.html', renderer: renderHomePage },
    { path: '/about-us/', file: 'about-us/index.html', renderer: renderAboutPage },
    { path: '/our-products/', file: 'our-products/index.html', renderer: renderOurProductsPage },
    { path: '/contact-us/', file: 'contact-us/index.html', renderer: renderContactPage },
    { path: '/faq/', file: 'faq/index.html', renderer: renderFAQPage },
    { path: '/blogs/', file: 'blogs/index.html', renderer: renderBlogsPage },
    { path: '/privacy-policy/', file: 'privacy-policy/index.html', renderer: renderPrivacyPolicyPage },
    { path: '/terms-and-condition/', file: 'terms-and-condition/index.html', renderer: renderTermsPage },
    { path: '/flush-mount-album/', file: 'flush-mount-album/index.html', renderer: renderFlushMountAlbumPage },
    { path: '/layflat/', file: 'layflat/index.html', renderer: renderLayflatPage },
    { path: '/photo-book/', file: 'photo-book/index.html', renderer: renderPhotoBookPage },
    { path: '/luxury-albums/', file: 'luxury-albums/index.html', renderer: renderLuxuryAlbumsPage },
    { path: '/box-and-bags/', file: 'box-and-bags/index.html', renderer: renderBoxAndBagsPage },
    { path: '/slip-in-albums/', file: 'slip-in-albums/index.html', renderer: renderSlipInAlbumsPage },
    { path: '/wedding-photo-albums/', file: 'wedding-photo-albums/index.html', renderer: renderWeddingPhotoAlbumsPage },
    { path: '/image-editing/', file: 'image-editing/index.html', renderer: renderImageEditingPage },
    { path: '/photography/', file: 'photography/index.html', renderer: renderPhotographyPage },
    { path: '/photo-editing-and-album-design/', file: 'photo-editing-and-album-design/index.html', renderer: renderPhotoEditingAndAlbumDesignPage },
    { path: '/album-designs/', file: 'album-designs/index.html', renderer: renderAlbumDesignsPage },
    { path: '/album-designing/', file: 'album-designing/index.html', renderer: renderAlbumDesigningPage },
    { path: '/flush-mount-album-for-uk/', file: 'flush-mount-album-for-uk/index.html', renderer: renderFlushMountAlbumForUKPage },
    { path: '/luxury-albums-for-uk/', file: 'luxury-albums-for-uk/index.html', renderer: renderLuxuryAlbumsForUKPage },
    { path: '/box-and-bags-for-uk/', file: 'box-and-bags-for-uk/index.html', renderer: renderBoxAndBagsForUKPage },
    { path: '/slip-in-albums-for-uk/', file: 'slip-in-albums-for-uk/index.html', renderer: renderSlipInAlbumsForUKPage },
    { path: '/image-editing-for-uk/', file: 'image-editing-for-uk/index.html', renderer: renderImageEditingForUKPage },
    { path: '/photo-book-for-uk/', file: 'photo-book-for-uk/index.html', renderer: renderPhotoBookForUKPage },
    { path: '/photography-for-uk/', file: 'photography-for-uk/index.html', renderer: renderPhotographyForUKPage },
    { path: '/thank-you/', file: 'thank-you/index.html', renderer: renderThankYouPage },
    { path: '/landing-2023/', file: 'landing-2023/index.html', renderer: renderLanding2023Page },
  ];

  console.log(`Rendering ${routes.length} main pages...`);
  for (const r of routes) {
    const html = r.renderer();
    const dest = path.join(DIST_DIR, r.file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, html, 'utf-8');
    console.log(`  ✓ Built ${r.path} -> ${r.file} (${html.length} bytes)`);
  }

  // 5. Render 404 Page
  const html404 = render404Page();
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), html404, 'utf-8');
  console.log(`  ✓ Built 404 -> 404.html (${html404.length} bytes)`);

  // 6. Redirect for /mount-flush-album/
  const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=/flush-mount-album/" />
  <link rel="canonical" href="https://ultraaalbums.com/flush-mount-album/" />
  <title>Redirecting to Flush Mount Album...</title>
</head>
<body>
  <p>Redirecting to <a href="/flush-mount-album/">Flush Mount Album</a>...</p>
  <script>window.location.replace('/flush-mount-album/');</script>
</body>
</html>`;
  const redirectDest = path.join(DIST_DIR, 'mount-flush-album/index.html');
  fs.mkdirSync(path.dirname(redirectDest), { recursive: true });
  fs.writeFileSync(redirectDest, redirectHtml, 'utf-8');
  console.log(`  ✓ Built 301 Redirect /mount-flush-album/ -> /flush-mount-album/`);

  // 7. _redirects file
  const redirectsContent = `/mount-flush-album/ /flush-mount-album/ 301\n/mount-flush-album /flush-mount-album/ 301\n`;
  fs.writeFileSync(path.join(DIST_DIR, '_redirects'), redirectsContent, 'utf-8');

  // 8. Robots.txt
  const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: https://ultraaalbums.com/sitemap.xml\n`;
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf-8');
  console.log(`  ✓ Generated robots.txt`);

  // 9. Sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>https://ultraaalbums.com${r.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`  ✓ Generated sitemap.xml with ${routes.length} URLs`);

  console.log('\nBuild complete! All routes successfully generated in /dist.');
}

build();

