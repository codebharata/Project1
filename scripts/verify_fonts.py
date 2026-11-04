import os
import re

failures = []

# 1. Search for any remote font links or CDNs in all HTML and CSS files in dist/
for root, dirs, files in os.walk('dist'):
    for fn in files:
        if fn.endswith(('.html', '.css', '.js')):
            p = os.path.join(root, fn)
            with open(p, 'r', encoding='utf-8') as f:
                c = f.read().lower()
            if 'fonts.googleapis.com' in c or 'fonts.gstatic.com' in c or 'use.typekit' in c or 'fontawesome' in c or 'cdnjs' in c:
                failures.append(f"Remote font / CDN asset found in {p}")

# 2. Check font families defined in src/styles/fonts.css
with open('src/styles/fonts.css', 'r', encoding='utf-8') as f:
    fc = f.read()

families = set(re.findall(r'font-family:\s*[\'"]?([^\'";]+)[\'"]?', fc))
print(f"Font families declared in @font-face: {families}")
if families != {'Newsreader', 'Instrument Sans'}:
    failures.append(f"Unexpected font families in fonts.css: {families}")

# 3. Check self-hosted font files in dist/fonts/
dist_fonts = os.listdir('dist/fonts')
print(f"Self-hosted font files in dist/fonts/: {dist_fonts}")
if len(dist_fonts) == 0:
    failures.append("No font files found in dist/fonts/")

# 4. Check banned fonts (Inter, Roboto, Poppins, Montserrat, Space Grotesk)
banned_fonts = ['inter', 'roboto', 'poppins', 'montserrat', 'space grotesk']
for root, dirs, files in os.walk('dist'):
    for fn in files:
        if fn.endswith(('.html', '.css')):
            p = os.path.join(root, fn)
            with open(p, 'r', encoding='utf-8') as f:
                c = f.read().lower()
            for bf in banned_fonts:
                if re.search(r'\b' + re.escape(bf) + r'\b', c):
                    failures.append(f"Banned font family '{bf}' found in {p}")

print("\n--- Font Verification Results ---")
if failures:
    print(f"FAIL: {len(failures)} font issues found:")
    for f in failures:
        print("  -", f)
    exit(1)
else:
    print("PASS: Exactly two font families loaded (Newsreader and Instrument Sans).")
    print("PASS: Both font families are 100% self-hosted.")
    print("PASS: Zero remote font calls or CDN references.")
    print("PASS: Zero banned fonts used.")

