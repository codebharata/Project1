import os
from bs4 import BeautifulSoup

failures = []
total_images = 0

for root, dirs, files in os.walk('dist'):
    for fn in files:
        if fn.endswith('.html'):
            p = os.path.join(root, fn)
            with open(p, 'r', encoding='utf-8') as f:
                html = f.read()
            soup = BeautifulSoup(html, 'html.parser')
            for img in soup.find_all('img'):
                total_images += 1
                src = img.get('src', '[no src]')
                alt = img.get('alt')
                width = img.get('width')
                height = img.get('height')
                
                # Check alt
                if alt is None or alt.strip() == '':
                    failures.append(f"In {p}: <img> with src '{src}' is missing alt text")
                    
                # Check width
                if not width or width.strip() == '':
                    failures.append(f"In {p}: <img> with src '{src}' is missing width")
                    
                # Check height
                if not height or height.strip() == '':
                    failures.append(f"In {p}: <img> with src '{src}' is missing height")

print(f"Total <img> tags evaluated across all pages: {total_images}")
print("\n--- Image Tag Verification Results ---")
if failures:
    print(f"FAIL: {len(failures)} image tag attribute issues found:")
    for f in failures[:15]:
        print("  -", f)
    if len(failures) > 15:
        print(f"  ...and {len(failures) - 15} more.")
    exit(1)
else:
    print(f"PASS: Every single image ({total_images} total) has alt text and explicit width and height!")

