import urllib.request
import json
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

req = urllib.request.Request('https://ultraaalbums.com/blogs/', headers=headers)
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')
# check main content
main = soup.find('main') or soup.find('article') or soup.find(class_='jupiterx-main-content')
print("Blog page main text snippet:")
if main:
    print(main.get_text(separator=' ', strip=True)[:1000])
else:
    print("No main tag found. Body snippet:")
    print(soup.body.get_text(separator=' ', strip=True)[:1000])

print("\nChecking WordPress posts API /wp-json/wp/v2/posts...")
try:
    req2 = urllib.request.Request('https://ultraaalbums.com/wp-json/wp/v2/posts', headers=headers)
    posts_data = json.loads(urllib.request.urlopen(req2, timeout=15).read().decode('utf-8'))
    print(f"Posts found via API: {len(posts_data)}")
    for p in posts_data:
        print(f"Post ID: {p.get('id')}, Slug: {p.get('slug')}, Title: {p.get('title', {}).get('rendered')}, Link: {p.get('link')}")
except Exception as e:
    print("API error:", e)

