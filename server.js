const http = require('http');
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');
const START_PORT = parseInt(process.env.PORT, 10) || 3000;
const MAX_PORT_ATTEMPTS = 20;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function createServer() {
  return http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];

    // Decode URI path in case of encoded characters
    try {
      reqUrl = decodeURIComponent(reqUrl);
    } catch (e) {}

    // Redirect /mount-flush-album/ to /flush-mount-album/
    if (reqUrl === '/mount-flush-album' || reqUrl === '/mount-flush-album/') {
      res.writeHead(301, { Location: '/flush-mount-album/' });
      res.end();
      return;
    }

    let filePath = path.join(DIST_DIR, reqUrl);

    // If path is a directory or lacks extension, attempt index.html
    if (fs.existsSync(filePath)) {
      if (fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
    } else {
      if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      }
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const mime = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': mime,
        'Cache-Control': 'no-cache'
      });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // 404 handler
      const notFoundPath = path.join(DIST_DIR, '404.html');
      if (fs.existsSync(notFoundPath)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(notFoundPath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      }
    }
  });
}

function startServer(port, attempt = 0) {
  if (attempt >= MAX_PORT_ATTEMPTS) {
    console.error(`Could not find an open port after ${MAX_PORT_ATTEMPTS} attempts.`);
    process.exit(1);
  }

  const server = createServer();

  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, attempting next port ${port + 1}...`);
      startServer(port + 1, attempt + 1);
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });

  server.once('listening', () => {
    console.log(`DEV SERVER ACTIVE: http://localhost:${port}`);
    console.log(`Serving files from ${DIST_DIR}`);
    try {
      fs.writeFileSync(path.join(__dirname, 'server_port.txt'), port.toString(), 'utf8');
    } catch (e) {}
  });

  server.listen(port, '0.0.0.0');
}

startServer(START_PORT);

