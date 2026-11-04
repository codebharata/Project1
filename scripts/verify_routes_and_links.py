import os
import re
from bs4 import BeautifulSoup
from urllib.parse import urlparse

DIST_DIR = 'dist'

# 1. Parse routes from content/page-list.md
with open('content/page-list.md', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract routes from markdown table
route_matches = re.findall(r'\|\s*`(/[^`]*)`\s*\|', text)
routes = sorted(list(set(route_matches)))

print(f"Total routes found in page-list.md: {len(routes)}")

missing_routes = []
for r in routes:
    if r == '/':
        target_file = os.path.join(DIST_DIR, 'index.html')
    else:
        target_file = os.path.join(DIST_DIR, r.strip('/'), 'index.html')
    
    if not os.path.exists(target_file):
        missing_routes.append((r, target_file))

if missing_routes:
    print(f"FAIL: {len(missing_routes)} routes missing built HTML:")
    for r, f in missing_routes:
        print(f"  Missing: {r} -> {f}")
else:
    print(f"PASS: All {len(routes)} routes exist in {DIST_DIR}/!")

# 2. Check all internal links in every built HTML file
broken_links = []
total_links_checked = 0

for root, dirs, files in os.walk(DIST_DIR):
    for fn in files:
        if fn.endswith('.html'):
            html_path = os.path.join(root, fn)
            with open(html_path, 'r', encoding='utf-8') as f:
                html = f.read()
            soup = BeautifulSoup(html, 'html.parser')
            
            # Find all IDs on this page for anchor checking
            page_ids = set([el['id'] for el in soup.find_all(id=True)])
            
            for a in soup.find_all('a', href=True):
                href = a['href'].strip()
                if not href or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('javascript:'):
                    continue
                if href.startswith('http://') or href.startswith('https://'):
                    # External link or canonical link to ultraaalbums.com
                    if 'ultraaalbums.com' in href:
                        parsed = urlparse(href)
                        href = parsed.path
                        if not href:
                            href = '/'
                    else:
                        continue # external
                
                total_links_checked += 1
                
                # Internal anchor link on same page
                if href.startswith('#'):
                    anchor = href[1:]
                    if anchor and anchor not in page_ids:
                        broken_links.append((html_path, href, f"Anchor #{anchor} not found on page"))
                    continue
                    
                # Internal route link
                path_part = href.split('#')[0]
                anchor_part = href.split('#')[1] if '#' in href else ''
                
                if path_part.startswith('/'):
                    rel_path = path_part.lstrip('/')
                    if not rel_path:
                        expected_file = os.path.join(DIST_DIR, 'index.html')
                    else:
                        # Could be /file.pdf or /images/... or /route/
                        if '.' in os.path.basename(rel_path):
                            expected_file = os.path.join(DIST_DIR, rel_path)
                        else:
                            expected_file = os.path.join(DIST_DIR, rel_path, 'index.html')
                            
                    if not os.path.exists(expected_file):
                        broken_links.append((html_path, href, f"Target file does not exist: {expected_file}"))

print(f"\nInternal links checked: {total_links_checked}")
if broken_links:
    print(f"FAIL: {len(broken_links)} broken internal links found:")
    for src, link, reason in broken_links:
        print(f"  In {src}: href='{link}' -> {reason}")
    exit(1)
else:
    print("PASS: Zero broken internal links found across all pages!")

