with open("scripts/raw_html/our-products.html", "r", encoding="utf-8") as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

box = soup.find(class_='elementskit-info-image-box')
body = box.find(class_='elementskit-box-body')
print(body.prettify())

