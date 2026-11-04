import re
from bs4 import BeautifulSoup

with open("scripts/raw_html/our-products.html", "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

for box in soup.find_all(class_='elementskit-info-image-box'):
    title = box.find(class_='elementskit-info-box-title')
    desc = box.find(class_=re.compile(r'description|box-body|elementskit-box-style-content')) or box.find('p')
    link = box.find('a', href=True)
    img = box.find('img')
    print("BOX:")
    print("  Title:", title.get_text(strip=True) if title else None)
    print("  Desc:", desc.get_text(strip=True) if desc else None)
    print("  Link:", link['href'] if link else None)
    print("  Img:", img.get('src') if img else None)
