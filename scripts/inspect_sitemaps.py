import urllib.request
import xml.etree.ElementTree as ET

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def fetch_url(url):
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as response:
        return response.read().decode('utf-8', errors='ignore')

content = fetch_url('https://ultraaalbums.com/sitemap_index.xml')
print("Full sitemap_index.xml:")
print(content)

root = ET.fromstring(content)
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
sub_sitemaps = [loc.text for loc in root.findall('.//sm:loc', ns)]
print("\nSub-sitemaps found:", sub_sitemaps)

all_urls = []
for sub in sub_sitemaps:
    print(f"\nFetching {sub}...")
    try:
        sub_content = fetch_url(sub)
        sub_root = ET.fromstring(sub_content)
        locs = [loc.text for loc in sub_root.findall('.//sm:loc', ns)]
        print(f"Found {len(locs)} URLs in {sub}:")
        for loc in locs:
            print("  ", loc)
            all_urls.append(loc)
    except Exception as e:
        print(f"Error fetching {sub}: {e}")

print(f"\nTotal URLs across all sitemaps: {len(all_urls)}")

