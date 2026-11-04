const http = require('http');

const PORT = 3000;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const PAGES = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about-us/' },
  { name: 'Our Products', path: '/our-products/' },
  { name: 'Contact', path: '/contact-us/' },
  { name: 'Product: Flush Mount Album', path: '/flush-mount-album/' },
  { name: 'UK Page: Flush Mount Album UK', path: '/flush-mount-album-for-uk/' }
];

function checkPage(page) {
  return new Promise((resolve) => {
    const url = `${BASE_URL}${page.path}`;
    const req = http.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const hasH1 = /<h1[^>]*>([\s\S]*?)<\/h1>/i.test(body);
        const titleMatch = body.match(/<title[^>]*>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : '';
        resolve({
          name: page.name,
          path: page.path,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          contentLength: body.length,
          hasH1,
          title,
          ok: res.statusCode === 200 && body.length > 500 && hasH1
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        name: page.name,
        path: page.path,
        error: err.message,
        ok: false
      });
    });
  });
}

async function run() {
  console.log(`Checking pages against ${BASE_URL}...\n`);
  let allOk = true;

  for (const page of PAGES) {
    const res = await checkPage(page);
    if (res.ok) {
      console.log(`✓ [${res.statusCode}] ${res.name} (${res.path}) - Size: ${res.contentLength} bytes | Title: "${res.title}"`);
    } else {
      allOk = false;
      console.error(`✗ FAILED: ${res.name} (${res.path}) - Status: ${res.statusCode} | Error: ${res.error || 'Empty or invalid markup'}`);
    }
  }

  if (allOk) {
    console.log('\nAll checked pages loaded successfully with HTTP 200 and valid content!');
  } else {
    console.error('\nSome pages failed to load!');
    process.exit(1);
  }
}

run();

