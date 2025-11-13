import Link from "next/link";
export default function EducationalFacilityProject() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="pt-24">
        <div className="w-full h-[60vh] relative">
          <img
            src="https://ext.same-assets.com/3530247640/1706515162.jpeg"
            alt="Educational Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="container mx-auto px-6 pb-12">
              <Link href="/portfolio" className="text-white/80 hover:text-white mb-4 inline-block">
                ← Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-6xl font-light text-white mb-4">Essex Academy Extension</h1>
              <p className="text-xl text-white/90">Chelmsford, Essex</p>
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
              <p className="text-lg font-medium">Essex County Council</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Value</p>
              <p className="text-lg font-medium">£1.8M</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Duration</p>
              <p className="text-lg font-medium">10 Months</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-6">Project Overview</h2>
            <p className="text-gray-700 mb-6">
              A major extension to an existing secondary school requiring a complete facade and glazing package. The project needed to integrate with the existing building while creating a modern, inspiring learning environment. All works were completed during term time with minimal disruption to students and staff.
            </p>

            <h3 className="text-2xl font-light mb-4 mt-8">The Challenge</h3>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Working on occupied school site with strict safety protocols</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Noise and disruption limitations during school hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Tight budget constraints from education funding</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Matching existing facade aesthetics</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Achieving Part Q security requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Completion deadline for new academic year</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Our Solution</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Curtain Walling</h4>
                <p className="text-gray-700">
                  Unitized curtain wall system enabling rapid installation during school holidays with minimal on-site work during term time.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Brise Soleil</h4>
                <p className="text-gray-700">
                  Aluminum solar shading providing glare control and reducing cooling loads while creating distinctive external appearance.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Entrance Systems</h4>
                <p className="text-gray-700">
                  Secure entrance lobby with automated doors, access control integration, and laminated security glazing.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Rainscreen Cladding</h4>
                <p className="text-gray-700">
                  Colored fiber cement panels complementing existing brickwork and providing modern contrast.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-light mb-4 mt-8">Working Around Education</h3>
            <p className="text-gray-700 mb-4">
              We developed a carefully phased program to minimize disruption:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Prefabrication:</strong> Maximum factory assembly of curtain wall units</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Holiday working:</strong> Noisy operations scheduled for school holidays</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Safety zoning:</strong> Complete segregation of work areas from students</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Enhanced security:</strong> Additional fencing and access controls during construction</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Communication:</strong> Weekly updates to school leadership and parents</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Sustainability Features</h3>
            <p className="text-gray-700 mb-4">
              The project incorporated several sustainable design features:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Solar control glazing reducing cooling energy by 35%</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Natural ventilation strategy with automated opening vents</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Daylight-responsive artificial lighting controls</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Recycled content in aluminum frames and cladding panels</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Rainwater harvesting from new roof areas</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Results</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">2 weeks early</p>
                <p className="text-gray-600">ready for new school year</p>
              </div>
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">0 incidents</p>
                <p className="text-gray-600">perfect safety record</p>
              </div>
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">BREEAM Very Good</p>
                <p className="text-gray-600">sustainability rating</p>
              </div>
              <div className="border-l-4 border-[#bc1019] pl-4">
                <p className="text-3xl font-light text-[#bc1019] mb-2">450 students</p>
                <p className="text-gray-600">now benefit from new spaces</p>
              </div>
            </div>

            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Client Testimonial</h3>
              <p className="text-gray-700 italic mb-4">
                "RMR's professional approach to working on an occupied school site was exemplary. Their team understood the unique challenges and worked seamlessly around our school day. The quality of the facade is outstanding, and we completed two weeks ahead of the new term. Highly recommended for education sector projects."
              </p>
              <p className="font-semibold">Margaret Foster</p>
              <p className="text-sm text-gray-600">Head of Property Services, Essex County Council</p>
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
            Get in touch to discuss how we can deliver exceptional results for your education sector project.
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
