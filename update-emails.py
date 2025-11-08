#!/usr/bin/env python3
import re
from pathlib import Path

def update_emails(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Replace both old email addresses
    content = content.replace('info@rmrfacades.co.uk', 'info@rmrdevelopments.uk')
    content = content.replace('info@rmrgroup.co.uk', 'info@rmrdevelopments.uk')
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Find all .tsx files
files = list(Path('src').rglob('*.tsx'))

fixed = 0
for file in files:
    if update_emails(file):
        print(f"✓ Updated: {file}")
        fixed += 1

print(f"\nUpdated {fixed} files")
