import subprocess
import os
import tempfile

EDGE_EXE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
out_path = os.path.abspath("screenshots/test.png")
os.makedirs("screenshots", exist_ok=True)
tmp_profile = os.path.abspath("temp_edge_profile")
os.makedirs(tmp_profile, exist_ok=True)

cmd = [
    EDGE_EXE,
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-software-rasterizer",
    f"--user-data-dir={tmp_profile}",
    f"--screenshot={out_path}",
    "https://example.com"
]

print("Running command...")
res = subprocess.run(cmd, capture_output=True, text=True)
print("Return code:", res.returncode)
print("Stderr:", res.stderr[:300])
print("File exists:", os.path.exists(out_path))
if os.path.exists(out_path):
    print("File size:", os.path.getsize(out_path))

