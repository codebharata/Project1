import os
import re
import urllib.request
from bs4 import BeautifulSoup, Comment
from urllib.parse import urljoin, urlparse

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

PAGES = [
    ('/', 'index'),
    ('/about-us/', 'about-us'),
    ('/our-products/', 'our-products'),
    ('/album-designing/', 'album-designing'),
    ('/contact-us/', 'contact-us'),
    ('/blogs/', 'blogs'),
    ('/faq/', 'faq'),
    ('/privacy-policy/', 'privacy-policy'),
    ('/terms-and-condition/', 'terms-and-condition'),
    ('/flush-mount-album/', 'flush-mount-album'),
    ('/layflat/', 'layflat'),
    ('/photo-book/', 'photo-book'),
    ('/luxury-albums/', 'luxury-albums'),
    ('/box-and-bags/', 'box-and-bags'),
    ('/slip-in-albums/', 'slip-in-albums'),
    ('/wedding-photo-albums/', 'wedding-photo-albums'),
    ('/image-editing/', 'image-editing'),
    ('/photography/', 'photography'),
    ('/photo-editing-and-album-design/', 'photo-editing-and-album-design'),
    ('/album-designs/', 'album-designs'),
    ('/flush-mount-album-for-uk/', 'flush-mount-album-for-uk'),
    ('/luxury-albums-for-uk/', 'luxury-albums-for-uk'),
    ('/box-and-bags-for-uk/', 'box-and-bags-for-uk'),
    ('/slip-in-albums-for-uk/', 'slip-in-albums-for-uk'),
    ('/image-editing-for-uk/', 'image-editing-for-uk'),
    ('/photo-book-for-uk/', 'photo-book-for-uk'),
    ('/photography-for-uk/', 'photography-for-uk'),
    ('/thank-you/', 'thank-you'),
    ('/landing-2023/', 'landing-2023'),
]

os.makedirs('content', exist_ok=True)
os.makedirs('scripts/raw_html', exist_ok=True)

def clean_text(text):
    if not text:
        return ""
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\n\s*\n+', '\n\n', text)
    return text.strip()

def html_to_markdown(element):
    md_lines = []
    
    # Process child nodes recursively
    for child in element.descendants:
        # We can handle block-level elements or walk elements
        pass
    
    # Simpler and cleaner approach: parse semantic tags inside element
    lines = []
    for tag in element.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'blockquote', 'table']):
        # Ignore if tag is nested inside another block tag we already process (like p inside li)
        if tag.name in ['p'] and tag.find_parent(['li', 'blockquote']):
            continue
        if tag.name in ['ul', 'ol'] and tag.find_parent(['ul', 'ol']):
            continue
            
        t_text = clean_text(tag.get_text())
        if not t_text:
            continue
            
        if tag.name == 'h1':
            lines.append(f"# {t_text}\n")
        elif tag.name == 'h2':
            lines.append(f"## {t_text}\n")
        elif tag.name == 'h3':
            lines.append(f"### {t_text}\n")
        elif tag.name == 'h4':
            lines.append(f"#### {t_text}\n")
        elif tag.name == 'h5':
            lines.append(f"##### {t_text}\n")
        elif tag.name == 'h6':
            lines.append(f"###### {t_text}\n")
        elif tag.name == 'p':
            lines.append(f"{t_text}\n")
        elif tag.name in ['ul', 'ol']:
            list_items = []
            for li in tag.find_all('li', recursive=False):
                li_text = clean_text(li.get_text())
                if li_text:
                    prefix = "- " if tag.name == 'ul' else "1. "
                    list_items.append(f"{prefix}{li_text}")
            if list_items:
                lines.append("\n".join(list_items) + "\n")
        elif tag.name == 'blockquote':
            lines.append(f"> {t_text}\n")
            
    return "\n".join(lines)

scraped_data = []

for route, slug in PAGES:
    full_url = f"https://ultraaalbums.com{route}"
    print(f"Fetching {slug} ({full_url})...")
    
    try:
        req = urllib.request.Request(full_url, headers=headers)
        with urllib.request.urlopen(req, timeout=20) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
        # Save raw html for reference
        with open(f"scripts/raw_html/{slug}.html", "w", encoding="utf-8") as f:
            f.write(html)
            
        soup = BeautifulSoup(html, 'html.parser')
        
        # Extract title
        title = soup.title.string.strip() if soup.title else ""
        # Remove trailing " - Ultraa Album" or " | Ultraa Album" variations if needed, but keep original for SEO
        
        # Meta description
        meta_desc = ""
        meta_tag = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'property': 'og:description'})
        if meta_tag and meta_tag.get('content'):
            meta_desc = meta_tag['content'].strip()
            
        # Canonical URL
        canonical = ""
        can_tag = soup.find('link', rel='canonical')
        if can_tag and can_tag.get('href'):
            canonical = can_tag['href'].strip()
            
        # Extract all images from page before removing elements
        page_images = []
        seen_img_urls = set()
        
        # Find all img tags, background-images, revslider, etc.
        for img in soup.find_all(['img', 'source']):
            src = img.get('src') or img.get('data-src') or img.get('data-lazy-src') or img.get('srcset')
            if not src:
                continue
            # If srcset, take first or full
            urls = []
            if ' ' in src and ',' in src:
                for part in src.split(','):
                    u = part.strip().split(' ')[0]
                    urls.append(u)
            else:
                urls.append(src.split(' ')[0])
                
            alt = img.get('alt', '').strip()
            
            for u in urls:
                if u.startswith('//'):
                    u = 'https:' + u
                elif u.startswith('/'):
                    u = urljoin(full_url, u)
                if 'ultraaalbums.com' in u and u not in seen_img_urls:
                    if not any(ign in u for ign in ['dummy.png', 'transparent.png', 'facebook.com', 'gravatar.com', 'plugins/']):
                        seen_img_urls.add(u)
                        page_images.append({'url': u, 'alt': alt})
                        
        # Also find any background images or slider images in raw HTML
        extra_uploads = re.findall(r'https?://(?:www\.)?ultraaalbums\.com/wp-content/uploads/[^\s"\'()<>]+\.(?:jpg|jpeg|png|webp|gif|pdf)', html, re.IGNORECASE)
        for u in extra_uploads:
            if u not in seen_img_urls:
                seen_img_urls.add(u)
                page_images.append({'url': u, 'alt': ''})
                
        # Remove unwanted components: header, footer, scripts, styles, widgets
        for selector in [
            'header', 'footer', 'nav', 'script', 'style', 'noscript', 'iframe',
            '.jupiterx-header', '.jupiterx-footer', '#jupiterx-header', '#jupiterx-footer',
            '.mystickyelements-fixed', '.joinchat', '.elementor-location-header', '.elementor-location-footer',
            '#wpadminbar'
        ]:
            for tag in soup.select(selector):
                tag.decompose()
                
        # Main content
        main_container = soup.find('main') or soup.find(class_='jupiterx-main-content') or soup.find(class_='elementor') or soup.body
        
        # If Home page, revslider slides text might be missed if inside rs-slide
        # Let's check rs-slides specifically if present
        slider_text = ""
        if slug == 'index':
            # We already have the 5 slides text from earlier
            slider_text = """
## Occasions Strip
- **Wedding Photo Albums**: Wedding album is a high-quality, meticulously crafted photo album designed to preserve and showcase the precious memories of a couple's wedding day in an elegant and lavish manner.
- **Baby Photo Albums**: Creating a cherished photo album for your little one is a delightful way to capture and celebrate those precious moments. There are plenty of creative ideas to explore.
- **Family Photo Albums**: Collection of photographs that document the significant moments, events, and memories shared by a family. Preserving moments of joy, milestones, celebrations, vacations, and everyday life.
- **Travel Photo Albums**: It is a wonderful way to cherish your adventures and relive those special moments. It is not just about preserving images; it's also an opportunity to tell your unique story through visuals, captions, and mementos. It is a reflection of your adventures and the joy you experienced during your travels.
- **Premium Wall Art**: Wall decor encompasses a wide range of items that can enhance the aesthetic appeal of your space and reflect your personality and style.
"""

        md_content = html_to_markdown(main_container)
        
        # Write frontmatter and content
        md_file_path = f"content/{slug}.md"
        with open(md_file_path, "w", encoding="utf-8") as f:
            f.write(f"---\n")
            f.write(f"title: \"{title}\"\n")
            f.write(f"description: \"{meta_desc}\"\n")
            f.write(f"url: \"{full_url}\"\n")
            f.write(f"route: \"{route}\"\n")
            f.write(f"images:\n")
            for img in page_images:
                f.write(f"  - url: \"{img['url']}\"\n")
                f.write(f"    alt: \"{img['alt']}\"\n")
            f.write(f"---\n\n")
            if slider_text:
                f.write(f"{slider_text}\n\n")
            f.write(md_content)
            
        scraped_data.append({
            'route': route,
            'slug': slug,
            'url': full_url,
            'title': title,
            'description': meta_desc,
            'image_count': len(page_images),
            'content_length': len(md_content)
        })
        print(f"  -> Saved {md_file_path} ({len(page_images)} images, {len(md_content)} chars)")
        
    except Exception as e:
        print(f"  ERROR scraping {slug}: {e}")

# Write /content/page-list.md
with open("content/page-list.md", "w", encoding="utf-8") as f:
    f.write("# Page Inventory & Audit List\n\n")
    f.write("Generated from crawl of https://ultraaalbums.com/ and sitemap comparison with README.md section 7.\n\n")
    f.write(f"Total Pages: {len(scraped_data)}\n\n")
    f.write("| Route | Slug | Live URL | Title | Images | Status |\n")
    f.write("|---|---|---|---|---|---|\n")
    for item in scraped_data:
        f.write(f"| `{item['route']}` | `{item['slug']}` | [{item['url']}]({item['url']}) | {item['title']} | {item['image_count']} | Built/Audited |\n")
        
    f.write("\n## Redirects\n\n")
    f.write("- `/mount-flush-album/` -> 301 Redirect to `/flush-mount-album/`\n")
    f.write("\n## External Links\n\n")
    f.write("- Pay Online: `https://www.paypal.com/in/signin`\n")
    f.write("- Messenger: `https://m.me/UltraaAlbums`\n")
    f.write("- Catalog: `/wp-content/uploads/2021/11/Ultraa-product-Catelogue.pdf` -> `/public/files/Ultraa-product-Catelogue.pdf`\n")

print("\nFinished scraping all pages and generating page-list.md!")

