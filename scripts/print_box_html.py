with open("scripts/raw_html/our-products.html", "r", encoding="utf-8") as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

for box in soup.find_all(class_='elementskit-info-image-box'):
    print("--- Box HTML ---")
    print(box.prettify()[:500])

