import glob
import os

products = ['flush-mount-album', 'layflat', 'photo-book', 'luxury-albums', 'box-and-bags', 'slip-in-albums', 'wedding-photo-albums']

for p in products:
    path = f"content/{p}.md"
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    lines = [line.strip() for line in text.splitlines() if line.strip() and not line.startswith('---') and not line.startswith('url:') and not line.startswith('route:') and not line.startswith('images:') and not line.startswith('- url:') and not line.startswith('alt:')]
    print(f"\n=================== {p} ===================")
    for l in lines[:12]:
        print(" ", l[:120])

