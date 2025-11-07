#!/usr/bin/env python3
import re
from pathlib import Path

def fix_page(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    original_content = content
    
    # Remove MobileMenu import
    content = re.sub(r"import \{ MobileMenu \} from ['\"]@/components/MobileMenu['\"];\s*\n", "", content)
    
    # Remove header sections
    content = re.sub(r'\s*{/\*\s*Header.*?\*/}\s*<header[^>]*>.*?</header>\s*\n', '\n', content, flags=re.DOTALL)
    content = re.sub(r'\s*<header className="fixed top-0[^>]*>.*?</header>\s*\n', '\n', content, flags=re.DOTALL)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

src_dir = Path('src/app')
page_files = [f for f in src_dir.rglob('page.tsx') if str(f) != 'src/app/page.tsx']

fixed_count = 0
for page_file in page_files:
    if fix_page(page_file):
        print(f"✓ Fixed: {page_file}")
        fixed_count += 1

print(f"\nFixed {fixed_count} pages")
