import urllib.request
import re
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request('https://ultraaalbums.com/', headers=headers)
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')
# ba-plus sliders
ba_sliders = soup.find_all(class_=re.compile(r'ba-plus|before-after|baplus'))
print(f"Found {len(ba_sliders)} before/after elements")
for ba in ba_sliders:
    imgs = [img.get('src') or img.get('data-src') for img in ba.find_all('img')]
    print("BA slider images:", imgs)
    print("BA slider text:", ba.get_text(separator=' ', strip=True)[:200])

