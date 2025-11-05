"use client";

import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1b]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/">
            <img 
              src="https://ugc.same-assets.com/GDTnFO76x2BSF1_bN4R4Ib_xRQUn16-J.png" 
              alt="RSD Logo" 
              className="h-12 md:h-14 lg:h-16" 
            />
          </Link>
          <div className="border-l border-white/30 pl-2 md:pl-4">
            <h1 className="text-xs font-light tracking-wide md:text-lg lg:text-2xl text-white">
              RMR Site Developments
            </h1>
            <p className="text-[8px] text-white/60 tracking-wide md:text-[10px] lg:text-sm">
              Building Tomorrow's Communities Today
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-white/80">
      <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base text-red-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link href="/team" className="hover:text-white transition-colors">Senior Team</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base text-red-500">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link href="/team" className="hover:text-white transition-colors">Senior Team</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* Mobile menu (hamburger + overlay) */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
