import Link from "next/link";
export default function ModernOfficeBuildingProject() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="pt-24">
        <div className="w-full h-[60vh] relative">
          <img
            src="https://ext.same-assets.com/2311182597/2631950844.jpeg"
            alt="Modern Office Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="container mx-auto px-6 pb-12">
              <Link href="/portfolio" className="text-white/80 hover:text-white mb-4 inline-block">
                ← Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-6xl font-light text-white mb-4">Modern Office Building</h1>
              <p className="text-xl text-white/90">Norwich, Norfolk</p>
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
              <p className="text-lg font-medium">Norfolk Developments Ltd</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Value</p>
              <p className="text-lg font-medium">£2.5M</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Duration</p>
              <p className="text-lg font-medium">12 Months</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-6">Project Overview</h2>
            <p className="text-gray-700 mb-6">
              This contemporary office development in Norwich required a complete facade package combining rainscreen cladding, curtain walling, and aluminum window systems. The project showcases our ability to deliver complex facade solutions on time and to the highest quality standards.
            </p>

            <h3 className="text-2xl font-light mb-4 mt-8">The Challenge</h3>
            <p className="text-gray-700 mb-4">
              The client required a high-performance building envelope that would:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Achieve excellent thermal performance (U-value of 0.18 W/m²K)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Provide striking contemporary aesthetics</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Maximize natural light penetration</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Meet tight program requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Comply with stringent fire safety regulations</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Our Solution</h3>
            <p className="text-gray-700 mb-4">
              We developed a comprehensive facade solution incorporating:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Rainscreen Cladding</h4>
                <p className="text-gray-700">
                  Terracotta rainscreen panels providing durable, low-maintenance facade with excellent weather protection and thermal performance.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Curtain Walling</h4>
                <p className="text-gray-700">
                  High-performance aluminum curtain wall system with thermally broken frames and triple glazed units achieving exceptional U-values.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Window Systems</h4>
                <p className="text-gray-700">
                  Bespoke aluminum windows with powder-coated RAL 7016 finish matching the overall design aesthetic.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Fire Safety</h4>
                <p className="text-gray-700">
                  A1 non-combustible materials throughout ensuring full compliance with Building Regulations Part B.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-light mb-4 mt-8">Key Features</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>4,200m² of rainscreen cladding</strong> in terracotta finish</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>850m² of curtain walling</strong> with triple glazing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Custom entrance system</strong> with automatic sliding doors</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>BIM Level 2 coordination</strong> with design team</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Full testing regime</strong> including air and water tightness tests</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Project Delivery</h3>
            <p className="text-gray-700 mb-4">
              Our project management approach ensured seamless delivery:
            </p>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside mb-8">
              <li><strong>Design Phase:</strong> Worked with architects to develop detailed facade design</li>
              <li><strong>Off-site Fabrication:</strong> All panels manufactured in controlled factory conditions</li>
              <li><strong>Coordination:</strong> Regular site meetings with main contractor and design team</li>
              <li><strong>Installation:</strong> Experienced installation teams working to strict safety standards</li>
              <li><strong>Quality Control:</strong> Independent testing and inspection at key stages</li>
              <li><strong>Handover:</strong> Full O&M manuals and warranty documentation provided</li>
            </ol>

            <h3 className="text-2xl font-light mb-4 mt-8">Results</h3>
            <p className="text-gray-700 mb-6">
              The project was completed on time and within budget, achieving:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">0 defects</p>
                <p className="text-gray-600">at practical completion</p>
              </div>
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">100%</p>
                <p className="text-gray-600">client satisfaction</p>
              </div>
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">BREEAM Excellent</p>
                <p className="text-gray-600">sustainability rating achieved</p>
              </div>
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">12 weeks</p>
                <p className="text-gray-600">ahead of original program</p>
              </div>
            </div>

            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Client Testimonial</h3>
              <p className="text-gray-700 italic mb-4">
                "RMR Facades delivered an exceptional facade package for our Norwich office development. Their technical expertise, attention to detail, and commitment to quality were outstanding. The project was completed ahead of schedule with zero defects at handover."
              </p>
              <p className="font-semibold">David Williams</p>
              <p className="text-sm text-gray-600">Project Director, Norfolk Developments Ltd</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-[#fbfbfb]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/projects/residential-development" className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src="https://ext.same-assets.com/2311182597/2178678330.jpeg"
                  alt="Residential Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Residential Development</h3>
              <p className="text-gray-600">Cambridge</p>
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
            Get in touch to discuss how we can deliver exceptional results for your facade project.
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
          <p>RMR Group © Website by Bayley and Green. Copyright © 2025 RMR Group.</p>
        </div>
      </footer>
    </div>
  );
}
