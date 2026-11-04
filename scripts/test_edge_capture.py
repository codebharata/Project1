import subprocess
import os

EDGE_EXE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
out_path = os.path.abspath("screenshots/test.png")
os.makedirs("screenshots", exist_ok=True)

cmd = [
    EDGE_EXE,
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    f"--screenshot={out_path}",
    "https://example.com"
]

print("Running command:", " ".join(cmd))
res = subprocess.run(cmd, capture_output=True, text=True)
print("Return code:", res.returncode)
print("Stdout:", res.stdout)
print("Stderr:", res.stderr)
print("File exists:", os.path.exists(out_path))
if os.path.exists(out_path):
    print("File size:", os.path.getsize(out_path))

