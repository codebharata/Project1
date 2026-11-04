import os
import re
from bs4 import BeautifulSoup

def extract_content(html):
    soup = BeautifulSoup(html, 'html.parser')
    
    # Remove junk
    for tag in soup.select('header, footer, nav, script, style, noscript, iframe, .jupiterx-header, .jupiterx-footer, #jupiterx-header, #jupiterx-footer, .mystickyelements-fixed, .joinchat, #wpadminbar, .elementor-location-header, .elementor-location-footer'):
        tag.decompose()
        
    main = soup.find('main') or soup.find(class_='jupiterx-main-content') or soup.body
    
    # We want structured extraction:
    # Walk through elementor sections / columns / widgets
    blocks = []
    
    for widget in main.find_all(class_='elementor-widget'):
        # Determine widget type
        w_classes = widget.get('class', [])
        widget_type = ''
        for c in w_classes:
            if c.startswith('elementor-widget-'):
                widget_type = c.replace('elementor-widget-', '')
                break
                
        # Don't process nested widgets if any
        text = widget.get_text(separator=' ', strip=True)
        if not text:
            continue
            
        headings = widget.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
        if headings:
            for h in headings:
                blocks.append(f"{'#' * int(h.name[1])} {h.get_text(strip=True)}\n")
            # If there is also paragraph text inside this widget
            ps = widget.find_all(['p', 'li'])
            for p in ps:
                p_text = p.get_text(strip=True)
                if p_text:
                    blocks.append(f"{p_text}\n")
        else:
            # If no heading, check if it's text editor or button or generic
            ps = widget.find_all(['p', 'li', 'span', 'div'])
            # Just get the clean text of the widget container
            wc = widget.find(class_='elementor-widget-container') or widget
            # Clean paragraphs
            p_tags = wc.find_all('p')
            if p_tags:
                for p in p_tags:
                    pt = p.get_text(strip=True)
                    if pt:
                        blocks.append(f"{pt}\n")
            else:
                wt = wc.get_text(separator='\n', strip=True)
                if wt:
                    blocks.append(f"{wt}\n")
                    
    # If no elementor widgets found (e.g. standard page)
    if not blocks:
        for tag in main.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'blockquote']):
            t = tag.get_text(strip=True)
            if not t:
                continue
            if tag.name.startswith('h'):
                blocks.append(f"{'#' * int(tag.name[1])} {t}\n")
            elif tag.name in ['ul', 'ol']:
                for li in tag.find_all('li'):
                    blocks.append(f"- {li.get_text(strip=True)}")
                blocks.append("")
            else:
                blocks.append(f"{t}\n")
                
    # Deduplicate consecutive identical blocks
    clean_blocks = []
    prev = ""
    for b in blocks:
        b_str = b.strip()
        if b_str and b_str != prev:
            clean_blocks.append(b)
            prev = b_str
            
    return "\n".join(clean_blocks)

# Test on our-products, about-us, flush-mount-album
for s in ['our-products', 'about-us', 'flush-mount-album', 'contact-us']:
    with open(f"scripts/raw_html/{s}.html", "r", encoding="utf-8") as f:
        html = f.read()
    res = extract_content(html)
    print(f"\n=== {s} extracted ({len(res)} chars) ===")
    print(res[:600])

