import Link from "next/link";
export default function FlatRoofing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-[#bc1019] hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6">Flat Roofing</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Professional flat roofing solutions providing reliable weatherproofing and long-term performance for all building types.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <img
            src="https://ext.same-assets.com/3530247640/636894361.jpeg"
            alt="Flat Roofing"
            className="w-full h-[500px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-6">Comprehensive Flat Roofing Services</h2>
            <p className="text-gray-700 mb-6">
              We provide complete flat roofing solutions for commercial, industrial, and residential buildings. From new installations to refurbishment and repairs, our experienced teams deliver quality workmanship using premium materials and proven systems.
            </p>

            <h3 className="text-2xl font-light mb-4 mt-8">Flat Roofing Systems</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Single Ply Membranes</h4>
                <p className="text-gray-700">
                  High-performance PVC, TPO, and EPDM membranes offering excellent durability, flexibility, and weather resistance. Ideal for new builds and refurbishments.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Built-Up Felt Roofing</h4>
                <p className="text-gray-700">
                  Traditional multi-layer felt systems using modern polymer-modified bitumen membranes. Cost-effective and reliable for various applications.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Liquid Applied Membranes</h4>
                <p className="text-gray-700">
                  Seamless waterproofing ideal for complex roof shapes, repairs, and maintenance. Quick application with minimal disruption.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Green Roofs</h4>
                <p className="text-gray-700">
                  Vegetated roofing systems providing environmental benefits, insulation, and biodiversity. Complete design and installation service.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-light mb-4 mt-8">Key Benefits</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Waterproof Protection:</strong> Complete weather sealing against rain, snow, and standing water</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Thermal Efficiency:</strong> Modern insulation achieving excellent U-values</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Durability:</strong> Long-life systems with warranties up to 25 years</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Usable Space:</strong> Opportunity to create roof terraces or amenity areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Cost-Effective:</strong> Competitive installation and lifecycle costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Maintenance Access:</strong> Easy access for plant and equipment</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Applications</h3>
            <p className="text-gray-700 mb-4">Our flat roofing expertise covers:</p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Commercial offices and retail buildings</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Industrial warehouses and factories</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Educational facilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Residential apartment blocks</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Extensions and domestic garages</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Car park decks</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Balconies and terraces</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Insulation Options</h3>
            <p className="text-gray-700 mb-4">
              We install various insulation types to achieve required thermal performance:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span><strong>PIR/PUR Boards:</strong> High-performance rigid foam insulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span><strong>Mineral Wool:</strong> Fire-resistant, breathable insulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span><strong>EPS:</strong> Cost-effective expanded polystyrene</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span><strong>Cork:</strong> Natural, sustainable insulation</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Refurbishment Services</h3>
            <p className="text-gray-700 mb-4">
              We provide complete roof refurbishment including:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Surveys & Reports:</strong> Detailed condition assessments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Overlay Systems:</strong> New membrane over existing roofs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Strip & Replace:</strong> Complete roof renewal</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Repairs:</strong> Leak detection and targeted repairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Maintenance:</strong> Planned preventative maintenance programs</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Quality Assurance</h3>
            <p className="text-gray-700 mb-4">
              All our flat roofing installations include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Manufacturer-approved installation methods</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Quality materials from leading suppliers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Comprehensive warranties</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Building regulation compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Full insurance-backed guarantees available</span>
              </li>
            </ul>

            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Experienced Flat Roofing Specialists</h3>
              <p className="text-gray-700">
                With decades of experience in flat roofing, our skilled teams deliver reliable, weathertight installations across all sectors. We work closely with clients to recommend the most appropriate system for each application, ensuring long-term performance and value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1c1b] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Need Flat Roofing Advice?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your flat roofing requirements.
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
