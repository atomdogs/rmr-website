import Link from "next/link";
export default function CompositeRoofing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-[#bc1019] hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6">Composite Roofing and Cladding</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Advanced composite panels combining strength, insulation, and aesthetic versatility for modern building envelopes.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <img
            src="https://ext.same-assets.com/3530247640/3197313653.jpeg"
            alt="Composite Roofing and Cladding"
            className="w-full h-[500px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-6">What is Composite Roofing and Cladding?</h2>
            <p className="text-gray-700 mb-6">
              Composite panels are engineered building materials consisting of two metal skins bonded to an insulating core. These innovative systems provide exceptional thermal performance, structural integrity, and weather protection in a single, efficient solution.
            </p>

            <h3 className="text-2xl font-light mb-4 mt-8">Key Benefits</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Superior Insulation:</strong> Excellent thermal performance reducing energy costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Fast Installation:</strong> Large panels enable rapid construction programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Weather Tight:</strong> Integrated sealing systems ensure complete weatherproofing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Lightweight:</strong> Reduces structural loads compared to traditional systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Fire Performance:</strong> Available in various fire ratings to meet regulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1">•</span>
                <span><strong>Aesthetic Options:</strong> Wide range of profiles, colors, and finishes</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Applications</h3>
            <p className="text-gray-700 mb-4">Composite panels are ideal for:</p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Industrial and warehouse buildings</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Commercial and retail developments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Cold stores and temperature-controlled facilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Sports halls and leisure centers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Educational facilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Agricultural buildings</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light mb-4 mt-8">Panel Types</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Wall Panels</h4>
                <p className="text-gray-700">
                  Composite wall panels provide vertical cladding solutions with various profiles including flat, microrib, and corrugated finishes.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-[#bc1019]">Roof Panels</h4>
                <p className="text-gray-700">
                  Composite roof panels deliver complete roofing systems with integrated weatherproofing and insulation in thicknesses from 40mm to 200mm.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-light mb-4 mt-8">Our Service</h3>
            <p className="text-gray-700 mb-4">
              RMR provides complete composite panel solutions including:
            </p>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside mb-8">
              <li><strong>Technical Design:</strong> Structural calculations and thermal modeling</li>
              <li><strong>Material Supply:</strong> Sourcing quality panels from leading manufacturers</li>
              <li><strong>Project Management:</strong> Coordinating all aspects of delivery and installation</li>
              <li><strong>Professional Installation:</strong> Expert fitting by qualified teams</li>
              <li><strong>Quality Assurance:</strong> Rigorous testing and inspection</li>
              <li><strong>Warranty Support:</strong> Comprehensive guarantees and aftercare</li>
            </ol>

            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Technical Excellence</h3>
              <p className="text-gray-700">
                Our technical team works closely with manufacturers and clients to ensure every composite panel installation meets the highest standards of thermal performance, weather resistance, and building regulation compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1c1b] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Discuss Your Composite Panel Requirements</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how composite roofing and cladding can benefit your project.
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
