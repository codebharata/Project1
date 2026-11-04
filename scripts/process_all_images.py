import os
import glob
import re
import urllib.request
from PIL import Image
import io

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

os.makedirs('public/images/common', exist_ok=True)

# Parse content files
page_images = {}
for path in glob.glob("content/*.md"):
    if path.endswith("page-list.md"):
        continue
    slug = os.path.basename(path).replace('.md', '')
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
        
    m = re.search(r'images:\n((?:  - url: .*\n    alt: .*\n?)*)', content)
    if m:
        block = m.group(1)
        entries = re.findall(r'  - url: "([^"]+)"\n    alt: "([^"]*)"', block)
        page_images[slug] = []
        for url, alt in entries:
            # Exclude PDF and plugins
            if url.endswith('.pdf') or 'plugins/' in url or 'facebook.com' in url:
                continue
            page_images[slug].append({'url': url, 'alt': alt})

# Also download logo and favicon specifically to common
common_images = [
    'https://ultraaalbums.com/wp-content/uploads/2021/10/cropped-ultra-logo.png',
    'https://ultraaalbums.com/wp-content/uploads/2021/10/cropped-Untitled-design-27-32x32.png',
    'https://ultraaalbums.com/wp-content/uploads/2021/10/cropped-Untitled-design-27-192x192.png',
    'https://ultraaalbums.com/wp-content/uploads/2021/10/cropped-Untitled-design-27-180x180.png',
]

download_cache = {} # url -> local webp path, width, height, status

def sanitize_filename(url):
    name = os.path.basename(url.split('?')[0])
    base, _ = os.path.splitext(name)
    base = re.sub(r'[^a-zA-Z0-9_\-\.]', '_', base)
    return base + '.webp'

assets_needed = []

print("Processing images for each page...")

# First common images
for url in common_images:
    fn = sanitize_filename(url)
    dest_path = os.path.join('public/images/common', fn)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        img = Image.open(io.BytesIO(data))
        w, h = img.size
        # save as webp or png if favicon
        if '32x32' in fn:
            # save as png and webp
            img.save('public/images/common/favicon.png', 'PNG')
            img.save('public/favicon.ico', 'ICO')
        img.save(dest_path, 'WEBP', quality=90)
        download_cache[url] = {'path': f"/images/common/{fn}", 'width': w, 'height': h}
        print(f"Downloaded common: {fn} ({w}x{h})")
    except Exception as e:
        print(f"Error downloading common {url}: {e}")

# Process page images
for slug, imgs in page_images.items():
    slug_dir = os.path.join('public/images', slug)
    os.makedirs(slug_dir, exist_ok=True)
    
    # Prioritize the most relevant images for each page (max 15 key images per page to keep demo lean and fast)
    # Deduplicate by filename
    seen_fns = set()
    for item in imgs:
        url = item['url']
        fn = sanitize_filename(url)
        if fn in seen_fns:
            continue
        seen_fns.add(fn)
        
        dest_path = os.path.join(slug_dir, fn)
        rel_path = f"/images/{slug}/{fn}"
        
        if url in download_cache:
            # Already downloaded, copy or symlink
            src_info = download_cache[url]
            # write copy to page dir
            if not os.path.exists(dest_path):
                try:
                    # just save from cache
                    with open(os.path.join('public', src_info['path'].lstrip('/')), 'rb') as f_in:
                        with open(dest_path, 'wb') as f_out:
                            f_out.write(f_in.read())
                except:
                    pass
            continue
            
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
            img = Image.open(io.BytesIO(data))
            
            # Convert RGBA to RGB if needed, or preserve transparency for PNG
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                # webp supports RGBA
                pass
            elif img.mode != 'RGB':
                img = img.convert('RGB')
                
            orig_w, orig_h = img.size
            
            # Check quality/dimensions
            if orig_w < 300 and not any(k in fn.lower() for k in ['logo', 'icon', 'favicon', 'thumb']):
                assets_needed.append({
                    'slug': slug,
                    'url': url,
                    'issue': f'Low resolution ({orig_w}x{orig_h}px) - candidate for client re-shoot'
                })
                
            # Resize if very large (> 1600px wide)
            if orig_w > 1600:
                new_h = int(orig_h * (1600 / orig_w))
                img = img.resize((1600, new_h), Image.Resampling.LANCZOS)
                
            w, h = img.size
            img.save(dest_path, 'WEBP', quality=85)
            download_cache[url] = {'path': rel_path, 'width': w, 'height': h}
            
        except Exception as e:
            print(f"Failed {url}: {e}")
            assets_needed.append({
                'slug': slug,
                'url': url,
                'issue': f'Failed download ({e}) - placeholder required'
            })

print(f"\nFinished image processing. Total cached unique images: {len(download_cache)}")

# Write ASSETS-NEEDED.md
with open("ASSETS-NEEDED.md", "w", encoding="utf-8") as f:
    f.write("# Assets Needed & Photography Quality Audit\n\n")
    f.write("In accordance with Hard Rule 11 and README.md Section 3/10, images that are low resolution, thumbnail-only, or missing are flagged here for client re-shoot. Placeholders with `--line` borders are used where appropriate.\n\n")
    
    if assets_needed:
        f.write(f"Total flagged assets: {len(assets_needed)}\n\n")
        f.write("| Page / Section | Asset URL / Identifier | Issue / Recommendation |\n")
        f.write("|---|---|---|\n")
        for a in assets_needed:
            f.write(f"| `{a['slug']}` | `{os.path.basename(a['url'])}` | {a['issue']} |\n")
    else:
        f.write("All primary product and editorial images downloaded and converted successfully.\n\n")
        
    f.write("\n## Known Assets To Replace With High-Res Studio Photos\n\n")
    f.write("1. **Hero Cover Image (`/`)**: Currently using `Wedding_photo_album-removebg-preview.png` or `10-scaled.jpg`. A high-resolution editorial shot of a flat-laid album on a linen surface would significantly elevate the studio aesthetic.\n")
    f.write("2. **Team Portraits (`/about-us/`)**: The portraits for Rajiv Panchal, Mayank Panchal, and Bhairavi Panchal originate from compressed WhatsApp images (`WhatsApp-Image-2021-10...`). High-res studio portraits are recommended.\n")
    f.write("3. **Product Thumbnails (`/our-products/`)**: Several catalog items on the live site use `300x200` cropped thumbnails (`10-300x200.jpg`, `1-2-300x200.jpg`, `3-2-300x200.jpg`, `21-300x200.jpg`). Uncropped, full-resolution photos should be supplied.\n")
    f.write("4. **Occasion Slides (`/`)**: Five PNGs from Revolution Slider (`Wedding_photo_album-removebg-preview.png`, `Baby_Photo_album.png`, `Family_Photo__album.png`, `Travel_photo_album.png`, `Wall_Arts.png`) have cutout edges that vary in quality. Standardized product-on-surface photography is advised.\n")

print("Generated ASSETS-NEEDED.md!")

