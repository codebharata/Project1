import urllib.request
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def inspect_page(url):
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')
        soup = BeautifulSoup(html, 'html.parser')
        title = soup.title.string.strip() if soup.title else 'No Title'
        body_text = soup.body.get_text(separator=' ', strip=True)[:300] if soup.body else ''
        print(f"URL: {url}\n  Title: {title}\n  Snippet: {body_text}\n")
    except Exception as e:
        print(f"URL: {url} -> Error: {e}\n")

inspect_page('https://ultraaalbums.com/thank-you/')
inspect_page('https://ultraaalbums.com/landing-2023/')
inspect_page('https://ultraaalbums.com/3d-flip-book/elegant-design/')

