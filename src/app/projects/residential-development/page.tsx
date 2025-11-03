import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";

export default function ResidentialDevelopmentProject() {
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

      {/* Hero Image */}
      <section className="pt-24">
        <div className="w-full h-[60vh] relative">
          <img
            src="https://ext.same-assets.com/2311182597/2178678330.jpeg"
            alt="Residential Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="container mx-auto px-6 pb-12">
              <Link href="/portfolio" className="text-white/80 hover:text-white mb-4 inline-block">
                ← Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-6xl font-light text-white mb-4">Riverside Residential Development</h1>
              <p className="text-xl text-white/90">Cambridge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Client</p>
              <p className="text-lg font-medium">Cambridge Homes PLC</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Value</p>
              <p className="text-lg font-medium">£3.8M</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Duration</p>
              <p className="text-lg font-medium">18 Months</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-6">Project Overview</h2>
            <p className="text-gray-700 mb-6">
              This prestigious residential development comprises 64 luxury apartments across four blocks, requiring a complete building envelope package including composite cladding, metal roofing, windows, and balcony systems. The riverside location demanded exceptional weather protection and aesthetics.
            </p>

            <h3 className="text-2xl font-light mb-4 mt-8">The Challenge</h3>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Four separate blocks requiring careful coordination</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Strict acoustic performance requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>High-end aesthetic expectations from buyers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Complex balcony waterproofing details</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Working around occupied neighboring properties</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Our Solution</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Composite Cladding</h4>
                <p className="text-gray-700">
                  High-pressure laminate composite panels in mixed colors creating visual interest while providing excellent insulation and weather protection.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Metal Roofing</h4>
                <p className="text-gray-700">
                  Standing seam zinc roofing with integrated rainwater management systems and concealed fixings for long-term durability.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Window Systems</h4>
                <p className="text-gray-700">
                  Triple-glazed aluminum windows achieving U-values of 0.8 W/m²K with integrated trickle ventilation.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Balconies</h4>
                <p className="text-gray-700">
                  Glass balustrade systems with stainless steel handrails and fully waterproofed deck surfaces.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-light mb-4 mt-8">Technical Innovation</h3>
            <p className="text-gray-700 mb-4">
              The project showcased several innovative approaches:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Thermal bridging mitigation:</strong> Carefully detailed facade junctions to eliminate cold bridging</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Acoustic glazing:</strong> Specialized laminated glass achieving 45dB sound reduction</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Prefabrication:</strong> Factory-assembled window and balcony modules for quality control</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Smart integration:</strong> Pre-wired for smart home systems</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Results</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">64 apartments</p>
                <p className="text-gray-600">completed to highest standards</p>
              </div>
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">100%</p>
                <p className="text-gray-600">sold within 6 months</p>
              </div>
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">SAP A-rated</p>
                <p className="text-gray-600">energy performance</p>
              </div>
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">5* rated</p>
                <p className="text-gray-600">by homebuyers</p>
              </div>
            </div>

            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Client Testimonial</h3>
              <p className="text-gray-700 italic mb-4">
                "RMR delivered a first-class facade and roofing package for our flagship development. Their attention to detail and quality of workmanship exceeded our expectations. The apartments sold exceptionally well, with buyers particularly impressed by the build quality."
              </p>
              <p className="font-semibold">Richard Patterson</p>
              <p className="text-sm text-gray-600">Development Director, Cambridge Homes PLC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-[#fbfbfb]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/projects/modern-office-building" className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src="https://ext.same-assets.com/2311182597/2631950844.jpeg"
                  alt="Modern Office Building"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Modern Office Building</h3>
              <p className="text-gray-600">Norwich, Norfolk</p>
            </Link>

            <Link href="/projects/educational-facility" className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src="https://ext.same-assets.com/3530247640/1706515162.jpeg"
                  alt="Educational Facility"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Educational Facility</h3>
              <p className="text-gray-600">Essex</p>
            </Link>

            <Link href="/portfolio" className="group flex items-center justify-center bg-white rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-center">
                <p className="text-[#bc1019] font-medium mb-2">View All Projects</p>
                <svg className="w-8 h-8 mx-auto text-[#bc1019]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1c1b] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Discuss Your Project</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss how we can deliver exceptional results for your residential development.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-[#bc1019] hover:bg-[#a00e15] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1c1c1b] px-8 py-4 rounded-lg font-medium transition-colors"
            >
              View Portfolio
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
