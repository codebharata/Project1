import os
import urllib.request

os.makedirs('public/files', exist_ok=True)
pdf_url = 'https://ultraaalbums.com/wp-content/uploads/2021/11/Ultraa-product-Catelogue.pdf'
pdf_dest = 'public/files/Ultraa-product-Catelogue.pdf'

headers = {'User-Agent': 'Mozilla/5.0'}
print("Downloading catalog PDF...")
req = urllib.request.Request(pdf_url, headers=headers)
with urllib.request.urlopen(req, timeout=30) as resp:
    data = resp.read()
    with open(pdf_dest, 'wb') as f:
        f.write(data)

print(f"Catalog PDF downloaded: {len(data)} bytes -> {pdf_dest}")

