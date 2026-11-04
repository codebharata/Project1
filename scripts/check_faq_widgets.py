from bs4 import BeautifulSoup

with open("scripts/raw_html/faq.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
for c in soup.find_all(class_='elementor-widget-container'):
    # ignore header and footer
    if not c.find_parent('header') and not c.find_parent('footer'):
        print("Widget container text:", c.get_text(separator=' ', strip=True))

