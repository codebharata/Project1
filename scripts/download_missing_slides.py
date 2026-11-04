import urllib.request
from PIL import Image
import io

slider_imgs = [
    ('https://ultraaalbums.com/wp-content/uploads/2024/07/Wedding_photo_album-removebg-preview.png', 'public/images/index/Wedding_photo_album-removebg-preview.webp'),
    ('https://ultraaalbums.com/wp-content/uploads/2024/07/Baby_Photo_album.png', 'public/images/index/Baby_Photo_album.webp'),
    ('https://ultraaalbums.com/wp-content/uploads/2024/07/Family_Photo__album.png', 'public/images/index/Family_Photo__album.webp'),
    ('https://ultraaalbums.com/wp-content/uploads/2024/07/Wall_Arts.png', 'public/images/index/Wall_Arts.webp')
]

headers = {'User-Agent': 'Mozilla/5.0'}

for url, dest in slider_imgs:
    print(f"Downloading {url}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        img = Image.open(io.BytesIO(data))
        img.save(dest, 'WEBP', quality=85)
        print(f"Saved {dest} ({img.size})")
    except Exception as e:
        print(f"Error for {url}: {e}")

