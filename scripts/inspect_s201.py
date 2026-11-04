import urllib.request
import re
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request('https://ultraaalbums.com/', headers=headers)
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')
s201_divs = soup.find_all(lambda tag: tag.get('class') and any('s201' in c for c in tag.get('class')))
print(f"Found {len(s201_divs)} s201 elements")

# Find the parent containers of before-after sliders
sliders = soup.find_all(attrs={'data-s201': True}) or soup.find_all(class_=re.compile(r's201_main'))
print(f"Found {len(sliders)} slider containers")
for s in sliders:
    print("\n--- Slider ---")
    print("Class:", s.get('class'))
    imgs = s.find_all('img')
    for img in imgs:
        print("  Img src:", img.get('src'))

# Also let's find all images in the home page containing "before" or "after"
print("\nImages with before or after in url:")
all_imgs = [img.get('src') for img in soup.find_all('img') if img.get('src')]
for u in set(all_imgs):
    if 'before' in u.lower() or 'after' in u.lower() or 'manipulation' in u.lower():
        print(" ", u)

