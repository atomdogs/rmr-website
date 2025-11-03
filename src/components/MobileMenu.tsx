"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-[200] p-2"
        aria-label="Toggle menu"
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

      {/* Mobile menu overlay - completely covers screen when open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[150] md:hidden">
          <nav className="flex flex-col items-center justify-center min-h-screen space-y-8 py-20">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-white hover:text-[#bc1019] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-white hover:text-[#bc1019] transition-colors"
            >
              About Us
            </Link>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-white hover:text-[#bc1019] transition-colors"
            >
              Services
            </a>
            <Link
              href="/portfolio"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-white hover:text-[#bc1019] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-white hover:text-[#bc1019] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/team"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-white hover:text-[#bc1019] transition-colors"
            >
              Senior Team
            </Link>

            <div className="pt-8 border-t border-white/20 w-64 text-center">
              <p className="text-white/70 text-sm mb-2">Contact Info</p>
              <p className="text-white text-sm mb-1">01603 622595</p>
              <p className="text-white text-sm">info@rmrfacades.co.uk</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
