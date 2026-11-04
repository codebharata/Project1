from bs4 import BeautifulSoup

with open("scripts/raw_html/our-products.html", "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

for tag in soup.select('header, footer, nav, script, style, #jupiterx-header, #jupiterx-footer'):
    tag.decompose()

# Find the heading "Flush Mount Albums" and its parent/siblings
for h in soup.find_all(lambda t: t.name in ['h1','h2','h3','h4','h5','h6'] and 'Flush Mount' in t.get_text()):
    print("Found heading:", h)
    col = h.find_parent(class_='elementor-column')
    if col:
        print("Column text:\n", col.get_text(separator=' | ', strip=True))
        print("Column HTML:\n", col.prettify()[:1000])

