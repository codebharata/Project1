import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';
import lighthouse from 'lighthouse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PORT = 8096;
const DIST_DIR = path.join(__dirname, '..', 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.endsWith('/')) {
    reqPath += 'index.html';
  } else if (!path.extname(reqPath)) {
    reqPath += '/index.html';
  }

  const filePath = path.join(DIST_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': mime,
      'Cache-Control': 'no-cache'
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

async function main() {
  await new Promise((resolve) => server.listen(PORT, '127.0.0.1', resolve));
  console.log(`Server running at http://127.0.0.1:${PORT}`);

  const profileDir = path.join(__dirname, '..', 'temp_lh_profile_' + Date.now());
  fs.mkdirSync(profileDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    userDataDir: profileDir,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--remote-debugging-port=9222'
    ]
  });

  const endpoint = browser.wsEndpoint();
  const port = new URL(endpoint).port;
  console.log(`Browser launched on port ${port}`);

  try {
    const url = `http://127.0.0.1:${PORT}/`;
    const runnerResult = await lighthouse(url, {
      port: Number(port),
      output: 'json',
      logLevel: 'error',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    });

    const reportJson = JSON.parse(runnerResult.report);
    const categories = reportJson.categories;

    const scores = {
      performance: Math.round((categories.performance?.score || 0) * 100),
      accessibility: Math.round((categories.accessibility?.score || 0) * 100),
      bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
      seo: Math.round((categories.seo?.score || 0) * 100),
    };

    console.log('--- LIGHTHOUSE RESULTS (Mobile) ---');
    console.log(`Performance:    ${scores.performance}`);
    console.log(`Accessibility:  ${scores.accessibility}`);
    console.log(`Best Practices: ${scores.bestPractices}`);
    console.log(`SEO:            ${scores.seo}`);

    fs.writeFileSync(
      path.join(__dirname, '..', 'lighthouse-report.json'),
      runnerResult.report,
      'utf-8'
    );
    console.log('Saved full report to lighthouse-report.json');

    // Also output audit failures if any
    for (const [catKey, catVal] of Object.entries(categories)) {
      console.log(`\nAudit details for ${catVal.title}:`);
      for (const auditRef of catVal.auditRefs) {
        const audit = reportJson.audits[auditRef.id];
        if (audit && audit.score !== null && audit.score < 1) {
          console.log(`  [FAIL/WARN ${audit.score}] ${audit.id}: ${audit.title}`);
          if (audit.explanation) console.log(`    ${audit.explanation}`);
          if (audit.displayValue) console.log(`    Value: ${audit.displayValue}`);
        }
      }
    }

  } finally {
    await browser.close();
    server.close();
    try {
      fs.rmSync(profileDir, { recursive: true, force: true });
    } catch (e) {}
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

