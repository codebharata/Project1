import os
import sys
import time
import subprocess
import threading
from http.server import HTTPServer, SimpleHTTPRequestHandler

EDGE_EXE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
PORT = 8089

PAGES = [
    ('home', '/'),
    ('product-flush-mount', '/flush-mount-album/'),
    ('about', '/about-us/'),
    ('contact', '/contact-us/'),
    ('faq', '/faq/')
]

VIEWPORTS = [
    ('360px', 360, 780),
    ('768px', 768, 1024),
    ('1440px', 1440, 900)
]

os.makedirs('screenshots', exist_ok=True)

class StaticHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='dist', **kwargs)
    def log_message(self, format, *args):
        pass # suppress log spam

httpd = HTTPServer(('127.0.0.1', PORT), StaticHandler)
server_thread = threading.Thread(target=httpd.serve_forever)
server_thread.daemon = True
server_thread.start()
print(f"Local server started on http://127.0.0.1:{PORT}")

time.sleep(1)

results = []

for page_name, route in PAGES:
    for vp_name, width, height in VIEWPORTS:
        out_fn = f"{page_name}_{vp_name}.png"
        out_path = os.path.abspath(os.path.join('screenshots', out_fn))
        url = f"http://127.0.0.1:{PORT}{route}"
        
        cmd = [
            EDGE_EXE,
            '--headless=new',
            '--disable-gpu',
            '--no-sandbox',
            '--hide-scrollbars',
            f'--window-size={width},{height}',
            f'--screenshot={out_path}',
            url
        ]
        
        try:
            res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=20)
            if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
                print(f"  ✓ Captured {out_fn} ({os.path.getsize(out_path)} bytes)")
                results.append((out_fn, True, os.path.getsize(out_path)))
            else:
                print(f"  ✗ Failed {out_fn} (code {res.returncode}): {res.stderr.decode('utf-8', errors='ignore')[:100]}")
                results.append((out_fn, False, 0))
        except Exception as e:
            print(f"  ✗ Error for {out_fn}: {e}")
            results.append((out_fn, False, 0))

httpd.shutdown()
print("\nAll screenshot captures completed.")
success_count = sum(1 for r in results if r[1])
print(f"Successfully generated {success_count}/{len(results)} screenshots.")
if success_count < len(results):
    sys.exit(1)

