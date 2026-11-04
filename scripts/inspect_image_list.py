import os
import glob
import re

all_images = {}
for path in glob.glob("content/*.md"):
    if path.endswith("page-list.md"):
        continue
    slug = os.path.basename(path).replace('.md', '')
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # parse front matter images
    m = re.search(r'images:\n((?:  - url: .*\n    alt: .*\n?)*)', content)
    if m:
        block = m.group(1)
        entries = re.findall(r'  - url: "([^"]+)"\n    alt: "([^"]*)"', block)
        for url, alt in entries:
            if not any(ign in url for ign in ['plugins/', 'facebook.com', 'dummy.png', 'transparent.png']):
                if slug not in all_images:
                    all_images[slug] = []
                all_images[slug].append({'url': url, 'alt': alt})

print(f"Total slugs with images: {len(all_images)}")
total_imgs = sum(len(v) for v in all_images.values())
print(f"Total image references across pages: {total_imgs}")
all_unique_urls = set(item['url'] for v in all_images.values() for item in v)
print(f"Unique image URLs across site: {len(all_unique_urls)}")

