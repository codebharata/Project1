import os
import urllib.request
import re

os.makedirs('public/fonts', exist_ok=True)

# We can query Google Fonts css with a modern User-Agent to get woff2 URLs
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

font_urls = [
    # Newsreader: normal weights 400, 500, 600 and italic
    'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&display=swap',
    # Instrument Sans: normal weights 400, 500, 600 and italic
    'https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..600;1,400..600&display=swap'
]

downloaded_files = {}

for u in font_urls:
    req = urllib.request.Request(u, headers=headers)
    css = urllib.request.urlopen(req, timeout=15).read().decode('utf-8')
    # Parse @font-face blocks
    blocks = re.findall(r'@font-face\s*\{([^}]+)\}', css)
    for b in blocks:
        family_m = re.search(r'font-family:\s*[\'"]?([^\'";]+)[\'"]?', b)
        style_m = re.search(r'font-style:\s*([^;]+);', b)
        weight_m = re.search(r'font-weight:\s*([^;]+);', b)
        url_m = re.search(r'url\((https://fonts\.gstatic\.com/[^)]+\.woff2)\)', b)
        
        if family_m and url_m:
            fam = family_m.group(1).strip()
            style = style_m.group(1).strip() if style_m else 'normal'
            weight = weight_m.group(1).strip() if weight_m else '400'
            url = url_m.group(1).strip()
            
            # Clean filename
            fam_slug = re.sub(r'[^a-zA-Z0-9]', '', fam)
            fn = f"{fam_slug}-{weight}-{style}.woff2"
            dest = f"public/fonts/{fn}"
            
            if fn not in downloaded_files:
                print(f"Downloading {fn} from {url}...")
                urllib.request.urlretrieve(url, dest)
                downloaded_files[fn] = {
                    'family': fam,
                    'style': style,
                    'weight': weight,
                    'file': fn,
                    'path': f"/fonts/{fn}"
                }

print(f"Downloaded {len(downloaded_files)} font files.")
# Write @font-face CSS to src/styles/fonts.css or similar
os.makedirs('src/styles', exist_ok=True)
with open('src/styles/fonts.css', 'w', encoding='utf-8') as f:
    for k, v in downloaded_files.items():
        f.write(f"""@font-face {{
  font-family: '{v['family']}';
  font-style: {v['style']};
  font-weight: {v['weight']};
  font-display: swap;
  src: url('{v['path']}') format('woff2');
}}
""")
print("Generated src/styles/fonts.css with local woff2 sources!")

