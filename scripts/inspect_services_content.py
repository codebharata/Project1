services = ['image-editing', 'photography', 'photo-editing-and-album-design', 'album-designs', 'album-designing']

for s in services:
    with open(f"content/{s}.md", "r", encoding="utf-8") as f:
        text = f.read()
    lines = [line.strip() for line in text.splitlines() if line.strip() and not line.startswith('---') and not line.startswith('url:') and not line.startswith('route:') and not line.startswith('images:') and not line.startswith('- url:') and not line.startswith('alt:')]
    print(f"\n=================== {s} ===================")
    for l in lines[:10]:
        print(" ", l[:120])

