import urllib.request
import re
import xml.etree.ElementTree as ET
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def fetch_url(url):
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            return response.status, response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        return None, str(e)

print("Checking robots.txt...")
status, robots = fetch_url('https://ultraaalbums.com/robots.txt')
print("Robots status:", status)
print("Robots content:\n", robots)

print("\nChecking sitemaps...")
for sm_url in [
    'https://ultraaalbums.com/sitemap.xml',
    'https://ultraaalbums.com/wp-sitemap.xml',
    'https://ultraaalbums.com/sitemap_index.xml',
    'https://ultraaalbums.com/post-sitemap.xml',
    'https://ultraaalbums.com/page-sitemap.xml'
]:
    status, content = fetch_url(sm_url)
    print(f"{sm_url} -> {status} (len: {len(content) if content else 0})")
    if status == 200 and ('<urlset' in content or '<sitemapindex' in content):
        print(f"Content preview of {sm_url}:", content[:400])

