import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";

export default function RainscreenCladding() {
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

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-[#bc1019] hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6">Rainscreen Cladding</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Modern, efficient, and aesthetically versatile rainscreen cladding solutions for commercial and residential buildings.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <img
            src="https://ext.same-assets.com/3530247640/3554118270.jpeg"
            alt="Rainscreen Cladding"
            className="w-full h-[500px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-6">What is Rainscreen Cladding?</h2>
            <p className="text-gray-700 mb-6">
              Rainscreen cladding is an advanced building envelope system that provides superior weather protection while enhancing the aesthetic appeal of buildings. It creates a ventilated cavity between the cladding material and the building structure, allowing moisture to escape and preventing water ingress.
            </p>

            <h3 className="text-2xl font-light mb-4 mt-8">Key Benefits</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Weather Protection:</strong> Superior protection against rain, wind, and moisture</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Thermal Performance:</strong> Improved insulation and energy efficiency</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Aesthetic Versatility:</strong> Wide range of materials, colors, and finishes available</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Durability:</strong> Long-lasting materials resistant to weathering and degradation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Low Maintenance:</strong> Minimal upkeep requirements over the building's lifetime</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Ventilation:</strong> Cavity design allows air circulation preventing condensation</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Materials We Work With</h3>
            <p className="text-gray-700 mb-4">Our rainscreen cladding expertise includes:</p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Fiber Cement Panels</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Aluminum Composite Panels (ACP)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Terracotta and Ceramic</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Brick Slips</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>High-Pressure Laminate (HPL)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Natural Stone</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Our Process</h3>
            <p className="text-gray-700 mb-4">
              We provide a complete rainscreen cladding service from initial consultation through to installation and aftercare:
            </p>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside mb-8">
              <li><strong>Consultation and Design:</strong> Understanding your requirements and developing the optimal solution</li>
              <li><strong>Material Selection:</strong> Helping you choose the perfect cladding material for your project</li>
              <li><strong>Technical Design:</strong> Detailed drawings and specifications ensuring compliance with regulations</li>
              <li><strong>Supply and Manufacture:</strong> Sourcing high-quality materials from trusted suppliers</li>
              <li><strong>Installation:</strong> Professional installation by our experienced teams</li>
              <li><strong>Quality Assurance:</strong> Rigorous inspections and testing throughout the project</li>
            </ol>

            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Why Choose RMR for Rainscreen Cladding?</h3>
              <p className="text-gray-700">
                With extensive experience in facade systems and a commitment to quality, RMR Facades delivers rainscreen cladding solutions that combine superior performance with outstanding aesthetics. Our team brings technical expertise, attention to detail, and dedication to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1c1b] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Discuss Your Rainscreen Cladding Project</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss how our rainscreen cladding solutions can enhance your building.
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
