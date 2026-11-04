import urllib.request
import re
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for url in ['https://ultraaalbums.com/album-designing/', 'https://ultraaalbums.com/album-designs/']:
    req = urllib.request.Request(url, headers=headers)
    html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')
    soup = BeautifulSoup(html, 'html.parser')
    flip_links = [a['href'] for a in soup.find_all('a', href=True) if '3d-flip-book' in a['href'] or 'flip' in a['href']]
    print(f"{url} has flip links:", flip_links)

