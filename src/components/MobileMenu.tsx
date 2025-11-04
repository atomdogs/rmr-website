"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative p-2"
        style={{ zIndex: 10000 }}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className="block h-0.5 w-full bg-white" />
          <span className="block h-0.5 w-full bg-white" />
          <span className="block h-0.5 w-full bg-white" />
        </div>
      </button>
    );
  }

  return (
    <>
      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="md:hidden fixed p-2"
        style={{ zIndex: 10000, top: '20px', right: '20px' }}
        aria-label="Close menu"
      >
        <div className="w-6 h-6 relative">
          <span className="block h-0.5 w-full bg-white absolute rotate-45" style={{ top: '12px' }} />
          <span className="block h-0.5 w-full bg-white absolute -rotate-45" style={{ top: '12px' }} />
        </div>
      </button>

      {/* Full screen black menu */}
      <div 
        className="md:hidden fixed"
        style={{
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.98)',
          zIndex: 9500,
          overflow: 'auto'
        }}
      >
        <div style={{ marginTop: '150px', marginBottom: '50px', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
            <Link href="/" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', display: 'block', padding: '10px', textDecoration: 'none' }}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', display: 'block', padding: '10px', textDecoration: 'none' }}>
              About Us
            </Link>
            <Link href="#services" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', display: 'block', padding: '10px', textDecoration: 'none' }}>
              Services
            </Link>
            <Link href="/portfolio" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', display: 'block', padding: '10px', textDecoration: 'none' }}>
              Portfolio
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', display: 'block', padding: '10px', textDecoration: 'none' }}>
              Contact
            </Link>
            <Link href="/team" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '24px', display: 'block', padding: '10px', textDecoration: 'none' }}>
              Senior Team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
