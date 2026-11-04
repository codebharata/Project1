import subprocess
import os
import time
import threading
from http.server import HTTPServer, SimpleHTTPRequestHandler

EDGE_EXE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
PORT = 8092
out_path = os.path.abspath("screenshots/home_test.png")
tmp_profile = os.path.abspath("temp_edge_profile")

class StaticHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='dist', **kwargs)
    def log_message(self, format, *args):
        pass

httpd = HTTPServer(('127.0.0.1', PORT), StaticHandler)
t = threading.Thread(target=httpd.serve_forever)
t.daemon = True
t.start()
print("Server up on port", PORT)

cmd = [
    EDGE_EXE,
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-software-rasterizer",
    f"--user-data-dir={tmp_profile}",
    "--window-size=1440,900",
    f"--screenshot={out_path}",
    f"http://127.0.0.1:{PORT}/"
]

res = subprocess.run(cmd, capture_output=True, text=True)
print("Return code:", res.returncode)
print("Stderr:", res.stderr[:300])
print("Screenshot exists:", os.path.exists(out_path))
if os.path.exists(out_path):
    print("Screenshot size:", os.path.getsize(out_path))

httpd.shutdown()

