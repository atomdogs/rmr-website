"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Enable portal after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[110] p-2"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile menu overlay rendered in portal to avoid header clipping */}
      {mounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className={`fixed inset-0 z-[9999] ${
              isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            } transition-opacity duration-200`}
          >
            {/* Opaque full-screen panel */}
            <div
              className={`absolute inset-0 bg-black/75 transition-transform duration-300 ${
                isOpen ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4 p-3 rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Menu content */}
              <nav className="h-full overflow-y-auto px-6 pt-24 pb-16 text-white flex flex-col space-y-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl hover:text-[#bc1019] transition-colors">
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl hover:text-[#bc1019] transition-colors">
                  About Us
                </Link>
                <Link href="/services/airspace-development" onClick={() => setIsOpen(false)} className="text-2xl hover:text-[#bc1019] transition-colors">
                  Airspace
                </Link>
                <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-2xl hover:text-[#bc1019] transition-colors">
                  Portfolio
                </Link>
                <Link href="/news" onClick={() => setIsOpen(false)} className="text-2xl hover:text-[#bc1019] transition-colors">
                  News
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl hover:text-[#bc1019] transition-colors">
                  Contact
                </Link>
                <Link href="/team" onClick={() => setIsOpen(false)} className="text-2xl hover:text-[#bc1019] transition-colors">
                  Senior Team
                </Link>

                <div className="pt-8 border-t border-white/20 w-64">
                  <p className="text-white/70 text-sm mb-2">Contact Info</p>
                  <p className="text-white text-sm mb-1">01603 622595</p>
                  <p className="text-white text-sm">info@rmrdevelopments.uk</p>
                </div>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
