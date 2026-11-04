import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request('https://ultraaalbums.com/', headers=headers)
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')

for phrase in ['Manipulation', 'Background Removal', 'Foreground Removal', 'Before', 'ba-plus']:
    matches = [m.start() for m in re.finditer(phrase, html, re.IGNORECASE)]
    print(f"Matches for '{phrase}': {len(matches)}")
    for idx in matches[:3]:
        snippet = html[max(0, idx-150):min(len(html), idx+300)]
        print(f"  Snippet near {idx}:\n{snippet}\n")

