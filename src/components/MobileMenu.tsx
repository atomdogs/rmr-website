"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - always on top */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative p-2"
        style={{ zIndex: 10000 }}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Full screen menu overlay */}
      {isOpen && (
        <div 
          className="md:hidden"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000000',
            zIndex: 9000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <Link href="/" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
              About Us
            </Link>
            <Link href="#services" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
              Services
            </Link>
            <Link href="/portfolio" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
              Portfolio
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
              Contact
            </Link>
            <Link href="/team" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
              Senior Team
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
