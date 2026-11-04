import os
import glob
from bs4 import BeautifulSoup

for path in glob.glob("scripts/raw_html/*.html"):
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()
    if '?' in html:
        soup = BeautifulSoup(html, 'html.parser')
        # check non-header/footer text
        for tag in soup.select('header, footer, nav, script, style, #jupiterx-header, #jupiterx-footer'):
            tag.decompose()
        text = soup.get_text(separator='\n', strip=True)
        q_lines = [line for line in text.splitlines() if '?' in line]
        if q_lines:
            slug = os.path.basename(path).replace('.html', '')
            print(f"\n{slug}:")
            for q in q_lines[:5]:
                print(f"  ? {q}")

