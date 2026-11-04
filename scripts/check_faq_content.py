with open("scripts/raw_html/faq.html", "r", encoding="utf-8") as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

print("FAQ HTML length:", len(html))
# Let's print all text in body
print("Body text:")
print(soup.body.get_text(separator=' | ', strip=True))

