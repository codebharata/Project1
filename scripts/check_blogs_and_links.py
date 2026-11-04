import urllib.request
from bs4 import BeautifulSoup
import re

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def fetch_url(url):
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as response:
        return response.geturl(), response.read().decode('utf-8', errors='ignore')

final_url, html = fetch_url('https://ultraaalbums.com/blogs/')
print("Fetched blogs page, final URL:", final_url)

# Find all links on /blogs/
links = set(re.findall(r'href=["\'](https?://ultraaalbums\.com/[^"\']*)["\']', html))
print(f"Links found on /blogs/: {len(links)}")
for l in sorted(links):
    print("  ", l)

# Also check /mount-flush-album/
try:
    mf_final, mf_html = fetch_url('https://ultraaalbums.com/mount-flush-album/')
    print(f"\n/mount-flush-album/ -> {mf_final}")
except Exception as e:
    print(f"\n/mount-flush-album/ error: {e}")

# Also check thank-you and landing-2023
for u in ['https://ultraaalbums.com/thank-you/', 'https://ultraaalbums.com/landing-2023/']:
    try:
        fin, h = fetch_url(u)
        print(f"{u} -> {fin} (len: {len(h)})")
    except Exception as e:
        print(f"{u} -> error {e}")

