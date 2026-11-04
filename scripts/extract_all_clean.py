import os
import re
from bs4 import BeautifulSoup, Comment, NavigableString

os.makedirs('content', exist_ok=True)

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

def clean_str(s):
    if not s:
        return ""
    s = s.replace('\xa0', ' ').replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"')
    s = re.sub(r'[ \t]+', ' ', s)
    return s.strip()

def extract_page_data(slug, route):
    html_path = f"scripts/raw_html/{slug}.html"
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
        
    soup = BeautifulSoup(html, 'html.parser')
    
    title = soup.title.string.strip() if soup.title else ""
    meta_tag = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'property': 'og:description'})
    meta_desc = meta_tag['content'].strip() if (meta_tag and meta_tag.get('content')) else ""
    canonical = soup.find('link', rel='canonical')
    can_url = canonical['href'].strip() if (canonical and canonical.get('href')) else f"https://ultraaalbums.com{route}"
    
    images = []
    seen_urls = set()
    
    for img in soup.find_all(['img', 'source']):
        src = img.get('src') or img.get('data-src') or img.get('data-lazy-src') or img.get('srcset')
        if not src:
            continue
        first_src = src.split(',')[0].strip().split(' ')[0]
        if first_src.startswith('//'):
            first_src = 'https:' + first_src
        if 'ultraaalbums.com' in first_src and not any(x in first_src for x in ['dummy.png', 'transparent.png', 'plugins/']):
            if first_src not in seen_urls:
                seen_urls.add(first_src)
                alt = clean_str(img.get('alt', ''))
                images.append({'url': first_src, 'alt': alt})
                
    extra_uploads = re.findall(r'https?://(?:www\.)?ultraaalbums\.com/wp-content/uploads/[^\s"\'()<>]+\.(?:jpg|jpeg|png|webp|gif|pdf)', html, re.IGNORECASE)
    for u in extra_uploads:
        if u not in seen_urls:
            seen_urls.add(u)
            images.append({'url': u, 'alt': ''})
            
    for sel in ['header', 'footer', 'nav', 'script', 'style', 'noscript', 'iframe', '.jupiterx-header', '.jupiterx-footer', '#jupiterx-header', '#jupiterx-footer', '.mystickyelements-fixed', '.joinchat', '#wpadminbar', '.elementor-location-header', '.elementor-location-footer']:
        for tag in soup.select(sel):
            tag.decompose()
            
    main = soup.find('main') or soup.find(class_='jupiterx-main-content') or soup.body
    
    lines = []
    seen_block_texts = set()

    def add_block(b_type, text):
        clean = clean_str(text)
        if not clean or clean in seen_block_texts:
            return
        # Avoid single numbers or symbols (like '0' or '%')
        if clean in ['0', '%', '0%', 'Learn more', 'Click Here']:
            return
        seen_block_texts.add(clean)
        if b_type.startswith('h'):
            lvl = int(b_type[1])
            lines.append(f"{'#' * lvl} {clean}\n")
        elif b_type == 'li':
            lines.append(f"- {clean}")
        elif b_type == 'quote':
            lines.append(f"> {clean}\n")
        else:
            lines.append(f"{clean}\n")
            
    # Walk tags
    for el in main.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'blockquote', 'div']):
        if el.find_parent(['header', 'footer', 'nav']):
            continue
            
        if el.name.startswith('h'):
            add_block(el.name, el.get_text())
        elif el.name == 'p':
            if not el.find_parent(['li', 'blockquote']):
                add_block('p', el.get_text())
        elif el.name in ['ul', 'ol']:
            for li in el.find_all('li', recursive=False):
                add_block('li', li.get_text())
            lines.append("")
        elif el.name == 'blockquote':
            add_block('quote', el.get_text())
        elif el.name == 'div':
            # Check if this div is a leaf text container like elementskit-box-style-content or elementor-text-editor
            classes = el.get('class', [])
            if any(c in classes for c in ['elementskit-box-style-content', 'elementor-text-editor', 'elementskit-info-box-description']):
                # If it doesn't contain p tags
                if not el.find('p'):
                    add_block('p', el.get_text())

    content_md = "\n".join(lines)
    
    return {
        'title': title,
        'description': meta_desc,
        'url': can_url,
        'route': route,
        'slug': slug,
        'images': images,
        'content': content_md
    }

for route, slug in PAGES:
    data = extract_page_data(slug, route)
    out_path = f"content/{slug}.md"
    
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("---\n")
        f.write(f"title: \"{data['title']}\"\n")
        f.write(f"description: \"{data['description']}\"\n")
        f.write(f"url: \"{data['url']}\"\n")
        f.write(f"route: \"{data['route']}\"\n")
        f.write("images:\n")
        for img in data['images']:
            f.write(f"  - url: \"{img['url']}\"\n")
            f.write(f"    alt: \"{img['alt']}\"\n")
        f.write("---\n\n")
        
        if slug == 'index':
            f.write("""## Occasions Strip
- **Wedding Photo Albums**: Wedding album is a high-quality, meticulously crafted photo album designed to preserve and showcase the precious memories of a couple's wedding day in an elegant and lavish manner.
- **Baby Photo Albums**: Creating a cherished photo album for your little one is a delightful way to capture and celebrate those precious moments. There are plenty of creative ideas to explore.
- **Family Photo Albums**: Collection of photographs that document the significant moments, events, and memories shared by a family. Preserving moments of joy, milestones, celebrations, vacations, and everyday life.
- **Travel Photo Albums**: It is a wonderful way to cherish your adventures and relive those special moments. It is not just about preserving images; it's also an opportunity to tell your unique story through visuals, captions, and mementos. It is a reflection of your adventures and the joy you experienced during your travels.
- **Premium Wall Art**: Wall decor encompasses a wide range of items that can enhance the aesthetic appeal of your space and reflect your personality and style.

""")
        f.write(data['content'])
        
    print(f"Processed {slug}: {len(data['images'])} images, {len(data['content'])} chars")
