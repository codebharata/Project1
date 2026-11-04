import urllib.request
import re
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request('https://ultraaalbums.com/', headers=headers)
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')
# Look for rs-slide or revslider tags
slides = soup.find_all(lambda tag: tag.has_attr('data-thumb') or 'rs-slide' in tag.get('class', []) or tag.has_attr('data-slide-id'))
print(f"Found {len(slides)} potential slide elements")
for s in slides:
    print("Slide attrs:", {k: v for k, v in s.attrs.items() if 'image' in k or 'thumb' in k or 'lazy' in k or 'src' in k or 'orig' in k or 'param' in k or 'key' in k})

# Also search regex for revslider images or wp-content/uploads in rs-slide
rs_snippets = re.findall(r'<rs-slide[^>]*>.*?</rs-slide>', html, re.DOTALL)
print(f"Found {len(rs_snippets)} <rs-slide> blocks")
for i, block in enumerate(rs_snippets):
    print(f"\n--- Slide {i+1} ---")
    imgs = re.findall(r'(https?://[^\s"\'<>]*(?:jpg|jpeg|png|webp)|/[^\s"\'<>]*(?:jpg|jpeg|png|webp))', block)
    print("Images in slide block:", set(imgs))

