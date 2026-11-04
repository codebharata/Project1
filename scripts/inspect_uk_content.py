uk_pages = [
    'flush-mount-album-for-uk', 'luxury-albums-for-uk', 'box-and-bags-for-uk',
    'slip-in-albums-for-uk', 'image-editing-for-uk', 'photo-book-for-uk', 'photography-for-uk'
]

for p in uk_pages:
    with open(f"content/{p}.md", "r", encoding="utf-8") as f:
        text = f.read()
    lines = [line.strip() for line in text.splitlines() if line.strip() and not line.startswith('---') and not line.startswith('url:') and not line.startswith('route:') and not line.startswith('images:') and not line.startswith('- url:') and not line.startswith('alt:')]
    print(f"\n=================== {p} ===================")
    for l in lines[:8]:
        print(" ", l[:120])

