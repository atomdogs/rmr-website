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
              className="h-12 md:h-16 lg:h-20"
            />
          </Link>
          <div className="border-l border-white/30 pl-2 md:pl-4">
            <h1 className="text-sm md:text-2xl lg:text-[47px] font-light tracking-wide text-white">
              RMR Site Developments
            </h1>
            <p className="text-[8px] md:text-[10px] lg:text-sm text-white/60 tracking-wide">
              Building Tomorrow's Communities Today
            </p>
          </div>
        </div>

        {/* Hamburger menu - visible on all screen sizes */}
        <MobileMenu />
      </div>
    </header>
  );
}
