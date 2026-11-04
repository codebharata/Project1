from bs4 import BeautifulSoup

def inspect_file(slug):
    with open(f"scripts/raw_html/{slug}.html", "r", encoding="utf-8") as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    for tag in soup.select('header, footer, nav, script, style, #jupiterx-header, #jupiterx-footer'):
        tag.decompose()
    main = soup.find('main') or soup.find(class_='jupiterx-main-content') or soup.body
    print(f"\n================= {slug} =================")
    print("All text snippet:")
    print(main.get_text(separator='\n', strip=True)[:1500])
    
    # Check accordion items
    acc_titles = soup.find_all(class_=lambda c: c and ('accordion-title' in c or 'tab-title' in c or 'toggle-title' in c))
    print(f"\nAccordion titles ({len(acc_titles)}):")
    for t in acc_titles:
        print("  Title:", t.get_text(strip=True))
        parent = t.find_parent(class_=lambda c: c and ('accordion-item' in c or 'toggle-item' in c or 'tab' in c))
        if parent:
            content = parent.find(class_=lambda c: c and ('accordion-content' in c or 'tab-content' in c or 'toggle-content' in c))
            if content:
                print("    Content:", content.get_text(strip=True)[:100])

inspect_file('faq')
inspect_file('contact-us')
inspect_file('our-products')

