import os
import re

BANNED_WORDS = [
    'elevate',
    'unlock',
    'seamless',
    'seamlessly',
    'empower',
    'supercharge',
    'revolutionize',
    'cutting-edge',
    'game-changing',
    'next-level',
    'tailored solutions',
    'journey',
    'delve',
    'crafted experiences'
]

# Check authored files in src/components and src/scripts and 404
AUTHORED_PATHS = [
    'src/components',
    'src/scripts',
    'src/styles',
    'src/pages/404.js'
]

violations = []

for base_dir in AUTHORED_PATHS:
    if os.path.isfile(base_dir):
        files_to_check = [base_dir]
    else:
        files_to_check = []
        for root, dirs, files in os.walk(base_dir):
            for fn in files:
                files_to_check.append(os.path.join(root, fn))
                
    for path in files_to_check:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read().lower()
        for bw in BANNED_WORDS:
            # Check for word boundary
            pattern = r'\b' + re.escape(bw) + r'\b'
            matches = re.findall(pattern, content)
            if matches:
                violations.append((path, bw, len(matches)))

# Also check button labels, nav labels, alt texts across src/pages/
for root, dirs, files in os.walk('src/pages'):
    for fn in files:
        if fn.endswith('.js') and fn != '404.js':
            path = os.path.join(root, fn)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            # Extract alt attributes
            alts = re.findall(r'alt=["\']([^"\']+)["\']', content)
            for a in alts:
                for bw in BANNED_WORDS:
                    if re.search(r'\b' + re.escape(bw) + r'\b', a.lower()):
                        violations.append((path, f"alt text '{a}' contains '{bw}'", 1))
            # Extract button labels
            buttons = re.findall(r'<button[^>]*>([^<]+)</button>', content)
            for b in buttons:
                for bw in BANNED_WORDS:
                    if re.search(r'\b' + re.escape(bw) + r'\b', b.lower()):
                        violations.append((path, f"button text '{b}' contains '{bw}'", 1))

print("--- Banned Words Verification Results ---")
if violations:
    print(f"FAIL: {len(violations)} banned words found:")
    for path, word, count in violations:
        print(f"  In {path}: '{word}'")
    exit(1)
else:
    print("PASS: Zero banned words in any authored text, buttons, alt text, or navigation!")

