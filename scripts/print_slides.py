import urllib.request
import re
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request('https://ultraaalbums.com/', headers=headers)
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')

rs_snippets = re.findall(r'<rs-slide[^>]*>(.*?)</rs-slide>', html, re.DOTALL)
for i, block in enumerate(rs_snippets):
    soup = BeautifulSoup(block, 'html.parser')
    print(f"\n--- Slide {i+1} Text ---")
    print(soup.get_text(separator=' ', strip=True))

