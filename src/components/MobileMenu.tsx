"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuStyles = {
    position: 'fixed' as const,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#1a1a1a',
    zIndex: 9998,
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 24px 40px'
  };

  const linkStyle = {
    fontSize: '28px',
    fontWeight: '300',
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.2s'
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2"
        style={{ position: 'relative', zIndex: 9999 }}
        aria-label="Toggle menu"
      >
        <div style={{ width: '24px', height: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span
            style={{
              display: 'block',
              height: '2px',
              width: '100%',
              backgroundColor: 'white',
              transition: 'all 0.3s',
              transform: isOpen ? 'rotate(45deg) translateY(9px)' : 'none'
            }}
          />
          <span
            style={{
              display: 'block',
              height: '2px',
              width: '100%',
              backgroundColor: 'white',
              transition: 'all 0.3s',
              opacity: isOpen ? 0 : 1
            }}
          />
          <span
            style={{
              display: 'block',
              height: '2px',
              width: '100%',
              backgroundColor: 'white',
              transition: 'all 0.3s',
              transform: isOpen ? 'rotate(-45deg) translateY(-9px)' : 'none'
            }}
          />
        </div>
      </button>

      {/* Mobile menu - solid dark background */}
      <div className="md:hidden" style={menuStyles}>
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', width: '100%' }}>
          <Link href="/" onClick={() => setIsOpen(false)} style={linkStyle}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} style={linkStyle}>
            About Us
          </Link>
          <a href="#services" onClick={() => setIsOpen(false)} style={linkStyle}>
            Services
          </a>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} style={linkStyle}>
            Portfolio
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} style={linkStyle}>
            Contact
          </Link>
          <Link href="/team" onClick={() => setIsOpen(false)} style={linkStyle}>
            Senior Team
          </Link>

          <div style={{ paddingTop: '32px', borderTop: '1px solid rgba(255, 255, 255, 0.2)', width: '256px', textAlign: 'center', marginTop: '16px' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '8px' }}>Contact Info</p>
            <p style={{ color: 'white', fontSize: '14px', marginBottom: '4px' }}>01603 622595</p>
            <p style={{ color: 'white', fontSize: '14px' }}>info@rmrfacades.co.uk</p>
          </div>
        </nav>
      </div>
    </>
  );
}
