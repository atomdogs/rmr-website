import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1b]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <a href="https://rmrdevelopments.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
            <img src="https://ugc.same-assets.com/GDTnFO76x2BSF1_bN4R4Ib_xRQUn16-J.png" alt="RSD Logo" className="h-16 md:h-20" />
            <div className="border-l border-white/30 pl-4 hidden md:block">
              <h1 className="text-2xl md:text-3xl font-light tracking-wide text-white">RMR Site Developments</h1>
              <p className="text-xs text-white/60 tracking-wide">Building Tomorrow's Communities Today</p>
            </div>
          </a>
          <MobileMenu />
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">Navigation</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">Sitemap</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Find all pages and resources available on the RMR Construction Group website.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[#bc1019] hover:underline">Home</Link>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Services</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Rainscreen Cladding</li>
                <li>Composite Roofing and Cladding</li>
                <li>Windows and Curtain Walling</li>
                <li>Metal Roofing and Cladding</li>
                <li>Zipped Standing Seam Roofing</li>
                <li>Flat Roofing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Company Divisions</h2>
              <ul className="space-y-2 text-gray-700">
                <li>RMR Facades</li>
                <li>RMR Construction Group</li>
                <li>RMR Site Developments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Policies & Compliance</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-cookies" className="text-[#bc1019] hover:underline">Privacy and Cookies</a>
                </li>
                <li>
                  <a href="/data-protection" className="text-[#bc1019] hover:underline">Data Protection</a>
                </li>
                <li>
                  <a href="/environmental" className="text-[#bc1019] hover:underline">Environmental Policy</a>
                </li>
                <li>
                  <a href="/health-safety" className="text-[#bc1019] hover:underline">Health & Safety</a>
                </li>
                <li>
                  <a href="/information-security" className="text-[#bc1019] hover:underline">Information Security</a>
                </li>
                <li>
                  <a href="/modern-slavery" className="text-[#bc1019] hover:underline">Modern Slavery & Human Trafficking Policy</a>
                </li>
                <li>
                  <a href="/bribery-corruption" className="text-[#bc1019] hover:underline">Bribery & Corruption Policy</a>
                </li>
                <li>
                  <a href="/quality" className="text-[#bc1019] hover:underline">Quality Policy</a>
                </li>
                <li>
                  <a href="/carbon-reduction" className="text-[#bc1019] hover:underline">Carbon Reduction Plan</a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Contact Information</h2>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Head Office</h3>
                <p className="text-gray-700 mb-2">Norwich, NR1 1PG</p>
                <p className="text-gray-700 mb-2">
                  Phone: <a href="tel:01603622595" className="text-[#bc1019] hover:underline">01603 622595</a>
                </p>
                <p className="text-gray-700">
                  Email: <a href="mailto:info@rmrfacades.co.uk" className="text-[#bc1019] hover:underline">info@rmrfacades.co.uk</a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Service Areas</h2>
              <p className="text-gray-700">
                East Anglia, London, Bristol, and Glasgow
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-white/50">
            <p>© 2025 RMR Construction Group Limited - All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
