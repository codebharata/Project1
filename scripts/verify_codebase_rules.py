import os
import re

failures = []

ALLOWED_TOKEN_FILES = [
    os.path.normpath('src/styles/tokens.css'),
    os.path.normpath('dist/styles/tokens.css')
]

ALLOWED_BOX_SHADOW = "0 4px 16px rgba(42, 39, 36, 0.08)"

CHECK_DIRS = ['src', 'dist']

print("Checking codebase against Hard Rules & Verification Checklist...")

for d in CHECK_DIRS:
    for root, dirs, files in os.walk(d):
        for fn in files:
            ext = os.path.splitext(fn)[1].lower()
            if ext not in ['.css', '.js', '.html']:
                continue
                
            path = os.path.normpath(os.path.join(root, fn))
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # 1. zno references (case-insensitive)
            # Find zno as word or substring
            zno_matches = re.findall(r'\bzno\b', content, re.IGNORECASE)
            if zno_matches:
                failures.append(f"ZNO reference found in {path}: {zno_matches}")
                
            # 2. gradient(
            if 'gradient(' in content.lower():
                failures.append(f"Gradient found in {path}")
                
            # 3. backdrop-filter
            if 'backdrop-filter' in content.lower():
                failures.append(f"Backdrop-filter found in {path}")
                
            # 4. Box-shadow checks
            # Find all box-shadow: ... occurrences
            bs_matches = re.findall(r'box-shadow\s*:\s*([^;\}]+)', content, re.IGNORECASE)
            for bs in bs_matches:
                bs_clean = bs.strip()
                # Allowed is var(--shadow-product), none, inherit, or the exact allowed shadow
                if bs_clean not in ['var(--shadow-product)', 'none', 'inherit', ALLOWED_BOX_SHADOW]:
                    failures.append(f"Disallowed box-shadow '{bs_clean}' in {path}")
                    
            # 5. Border-radius checks (must not exceed 4px)
            br_matches = re.findall(r'border-radius\s*:\s*([^;\}]+)', content, re.IGNORECASE)
            for br in br_matches:
                br_clean = br.strip()
                # Look for numbers
                for px in re.findall(r'(\d+(?:\.\d+)?)\s*px', br_clean):
                    if float(px) > 4.0:
                        failures.append(f"Border-radius > 4px ({px}px) in {path}: '{br_clean}'")
                for rem in re.findall(r'(\d+(?:\.\d+)?)\s*rem', br_clean):
                    # 4px is 0.25rem
                    if float(rem) > 0.25:
                        failures.append(f"Border-radius > 4px ({rem}rem) in {path}: '{br_clean}'")
                if '%' in br_clean:
                    failures.append(f"Border-radius percentage in {path}: '{br_clean}'")
                    
            # 6. Hex colors outside token file
            if path not in ALLOWED_TOKEN_FILES:
                # Find hex colors (# followed by 3, 4, 6, 8 hex digits, not preceded by word char)
                # Ignore SVG url fragments or HTML entities
                hex_matches = re.findall(r'(?<![&\w])#([0-9a-fA-F]{3,8})\b', content)
                # Filter out pure digits if not a color or anchor links
                # In CSS and HTML, colors usually appear after :, ,, whitespace
                # Let's check color hexes specifically
                color_hexes = re.findall(r'[:\s,][#]([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b', content)
                if color_hexes:
                    failures.append(f"Hex color outside token file in {path}: {[f'#{h}' for h in color_hexes]}")

print("\n--- Codebase Rule Verification Results ---")
if failures:
    print(f"FAIL: {len(failures)} violations found:")
    for f in failures:
        print("  -", f)
    exit(1)
else:
    print("PASS: Zero zno references.")
    print("PASS: Zero gradients (gradient().")
    print("PASS: Zero backdrop-filters.")
    print("PASS: Zero box-shadows beyond the single allowed rule.")
    print("PASS: Zero border-radius above 4px.")
    print("PASS: Zero hex colours outside the token file.")

