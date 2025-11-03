import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";

export default function StandingSeam() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1b]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <a
            href="https://rmrdevelopments.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <img src="https://ugc.same-assets.com/GDTnFO76x2BSF1_bN4R4Ib_xRQUn16-J.png" alt="RSD Logo" className="h-16 md:h-20" />
            <div className="border-l border-white/30 pl-4 hidden md:block">
              <h1 className="text-2xl md:text-3xl font-light tracking-wide text-white">RMR Site Developments</h1>
              <p className="text-xs text-white/60 tracking-wide">Building Tomorrow's Communities Today</p>
            </div>
          </a>
          <MobileMenu />
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-[#bc1019] hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6">Zipped Standing Seam Roofing</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Premium architectural metal roofing with concealed fixings, delivering sleek aesthetics and superior weathertightness.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <img
            src="https://ext.same-assets.com/3530247640/2465519261.jpeg"
            alt="Zipped Standing Seam Roofing"
            className="w-full h-[500px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-6">What is Standing Seam Roofing?</h2>
            <p className="text-gray-700 mb-6">
              Standing seam roofing is a premium metal roofing system characterized by vertical metal panels with raised seams that interlock. The concealed fixing system creates a clean, modern appearance with no exposed fasteners, while providing exceptional weather protection and longevity.
            </p>

            <h3 className="text-2xl font-light mb-4 mt-8">Key Advantages</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Concealed Fixings:</strong> No visible screws or fasteners for a sleek finish</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Weather Tight:</strong> Raised seams and continuous panels eliminate leak points</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Thermal Movement:</strong> Clip system allows for expansion and contraction</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Long Panels:</strong> Minimal joints for enhanced weatherproofing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Modern Aesthetic:</strong> Clean lines ideal for contemporary architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Durability:</strong> 30+ year expected lifespan with minimal maintenance</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">System Types</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Snap Lock Seam</h4>
                <p className="text-gray-700">
                  Economical system where adjacent panels snap together without specialist tools. Suitable for pitches down to 3 degrees.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Mechanically Seamed</h4>
                <p className="text-gray-700">
                  Premium system with double-lock seaming using specialist machinery. Provides the ultimate in weathertightness.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Batten Roll</h4>
                <p className="text-gray-700">
                  Traditional rolled seam system ideal for complex roof shapes and heritage applications.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Curved Systems</h4>
                <p className="text-gray-700">
                  Specialist systems for curved roofs, barrel vaults, and architectural features.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-light mb-4 mt-8">Material Options</h3>
            <p className="text-gray-700 mb-4">Standing seam roofing is available in various metals:</p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span><strong>Pre-finished Steel:</strong> Cost-effective with 25-year coating warranties</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span><strong>Aluminum:</strong> Lightweight, corrosion-resistant, ideal for coastal locations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span><strong>Zinc:</strong> Natural patina develops over time, fully recyclable</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span><strong>Copper:</strong> Premium material with exceptional longevity</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span><strong>Stainless Steel:</strong> Ultimate durability for demanding environments</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Applications</h3>
            <p className="text-gray-700 mb-4">Standing seam roofing is ideal for:</p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Commercial and office buildings</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Contemporary residential properties</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Educational and public buildings</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Sports facilities and leisure centers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Canopies and feature roofs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Low-pitch and complex roof geometries</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Technical Benefits</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Low Pitch Capability:</strong> Suitable for pitches as low as 1.5 degrees</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Solar Ready:</strong> Ideal substrate for PV panel installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Acoustic Performance:</strong> Excellent sound dampening with appropriate underlays</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Fire Rated:</strong> Non-combustible construction achieving high fire ratings</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Our Installation Process</h3>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside mb-8">
              <li><strong>Design & Specification:</strong> Detailed technical design and material selection</li>
              <li><strong>Panel Manufacturing:</strong> Custom fabrication to exact project dimensions</li>
              <li><strong>Substrate Preparation:</strong> Installation of insulation and vapor control layers</li>
              <li><strong>Panel Installation:</strong> Precision fitting by specialist teams</li>
              <li><strong>Seaming:</strong> Machine seaming for mechanically locked systems</li>
              <li><strong>Flashings & Details:</strong> Custom flashings for penetrations and edges</li>
              <li><strong>Quality Checks:</strong> Rigorous inspection at each stage</li>
            </ol>

            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Specialist Expertise</h3>
              <p className="text-gray-700">
                Standing seam roofing requires specialist knowledge and equipment. Our experienced teams have extensive training in the installation of all standing seam systems, ensuring your roof delivers outstanding performance and appearance for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1c1b] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Explore Standing Seam Roofing</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss how standing seam roofing can enhance your project.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="tel:01603622595"
              className="bg-[#bc1019] hover:bg-[#a00e15] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Call 01603 622595
            </a>
            <Link
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1c1c1b] px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-8">
        <div className="container mx-auto px-6 text-center text-sm text-white/50">
          <p>© 2025 RMR Construction Group Limited - All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
