import urllib.request
import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

test_urls = [
    'https://ultraaalbums.com/',
    'https://ultraaalbums.com/about-us/',
    'https://ultraaalbums.com/flush-mount-album/'
]

for url in test_urls:
    req = urllib.request.Request(url, headers=headers)
    html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')
    soup = BeautifulSoup(html, 'html.parser')
    
    title = soup.title.string.strip() if soup.title else ''
    meta_desc = ''
    desc_tag = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'property': 'og:description'})
    if desc_tag and desc_tag.get('content'):
        meta_desc = desc_tag['content'].strip()
        
    print(f"=== {url} ===")
    print(f"Title: {title}")
    print(f"Meta Description: {meta_desc}")
    
    # Check structure: JupiterX header, main, footer
    header = soup.find('header')
    footer = soup.find('footer')
    # Elementor main content container
    # Let's see what classes JupiterX / Elementor uses
    elementor = soup.find('div', class_='elementor')
    print("Found elementor div:", bool(elementor))
    # Also find all images in the page
    images = []
    for img in soup.find_all('img'):
        src = img.get('src') or img.get('data-src') or img.get('data-lazy-src')
        if src and not src.startswith('data:'):
            images.append(src)
    print(f"Total img tags: {len(images)}")
    # Print sample images
    for s in images[:5]:
        print("  Sample img:", s)

