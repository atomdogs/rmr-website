import Link from "next/link";
export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
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
                <li>
                  <Link href="/about" className="text-[#bc1019] hover:underline">About</Link>
                </li>
                <li>
                  <Link href="/team" className="text-[#bc1019] hover:underline">Team</Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-[#bc1019] hover:underline">Portfolio</Link>
                </li>
                <li>
                  <Link href="/news" className="text-[#bc1019] hover:underline">News</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#bc1019] hover:underline">Contact</Link>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Services</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/rainscreen-cladding" className="text-[#bc1019] hover:underline">Rainscreen Cladding</Link>
                </li>
                <li>
                  <Link href="/services/composite-roofing" className="text-[#bc1019] hover:underline">Composite Roofing and Cladding</Link>
                </li>
                <li>
                  <Link href="/services/windows-curtain-walling" className="text-[#bc1019] hover:underline">Windows and Curtain Walling</Link>
                </li>
                <li>
                  <Link href="/services/metal-roofing" className="text-[#bc1019] hover:underline">Metal Roofing and Cladding</Link>
                </li>
                <li>
                  <Link href="/services/standing-seam" className="text-[#bc1019] hover:underline">Zipped Standing Seam Roofing</Link>
                </li>
                <li>
                  <Link href="/services/flat-roofing" className="text-[#bc1019] hover:underline">Flat Roofing</Link>
                </li>
                <li>
                  <Link href="/services/airspace-development" className="text-[#bc1019] hover:underline">Airspace Development</Link>
                </li>
                {/* Hidden for now - Fire Remediation
                <li>
                  <Link href="/services/fire-remediation" className="text-[#bc1019] hover:underline">Fire Remediation</Link>
                </li>
                */}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Projects</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/projects/modern-office-building" className="text-[#bc1019] hover:underline">Modern Office Building</Link>
                </li>
                <li>
                  <Link href="/projects/educational-facility" className="text-[#bc1019] hover:underline">Educational Facility</Link>
                </li>
                <li>
                  <Link href="/projects/residential-development" className="text-[#bc1019] hover:underline">Residential Development</Link>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">News & Articles</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/news" className="text-[#bc1019] hover:underline">News Overview</Link>
                </li>
                <li>
                  <Link href="/news/fire-safety-in-facades" className="text-[#bc1019] hover:underline">Fire Safety in Facades</Link>
                </li>
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
                  Email: <a href="mailto:info@rmrdevelopments.uk" className="text-[#bc1019] hover:underline">info@rmrdevelopments.uk</a>
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
            <p>RMR Group © Website by Bayley and Green. Copyright © 2025 RMR Group.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
