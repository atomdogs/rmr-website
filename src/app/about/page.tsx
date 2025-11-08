import Link from "next/link";
export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1c1c1b] to-[#2a2a2a] text-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-[#bc1019] hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6">About Us</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Established construction excellence, delivering high-value facades, roofing, and development solutions across major UK markets.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-6">
              RMR Group is an established construction specialist with extensive expertise across the built environment sector. Our divisions deliver comprehensive services including advanced facade systems, specialist roofing solutions, and integrated development projects.
            </p>
            <p className="text-gray-700 mb-8">
              With over five decades of operational experience, we have built a substantial portfolio of successfully delivered projects, serving major clients across East Anglia, London, Bristol, and Glasgow. Our track record demonstrates consistent delivery of complex, high-value construction packages across multiple sectors.
            </p>

            <h2 className="text-3xl font-light mb-6 mt-12">Our Mission</h2>
            <p className="text-gray-700 mb-8">
              Our mission is to deliver exceptional construction solutions that consistently exceed client expectations while maintaining rigorous standards of quality, safety, and sustainability. We build lasting partnerships with clients, supply chain partners, and stakeholders through technical excellence, commercial acumen, and operational integrity.
            </p>

            <h2 className="text-3xl font-light mb-6 mt-12">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#bc1019]">Excellence</h3>
                <p className="text-gray-700">
                  We maintain rigorous quality standards across all operations. Every project benefits from our comprehensive quality management systems and technical expertise.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#bc1019]">Safety Leadership</h3>
                <p className="text-gray-700">
                  Health and safety is embedded in our operational culture. We implement industry-leading safety management systems across all project activities.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#bc1019]">Innovation</h3>
                <p className="text-gray-700">
                  We leverage modern construction methodologies and emerging technologies to drive efficiency and deliver enhanced value for our clients.
                </p>
              </div>
              <div className="bg-[#fbfbfb] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#bc1019]">Integrity</h3>
                <p className="text-gray-700">
                  Our business is built on transparency, ethical practice, and professional conduct. We foster trust through consistent delivery and open communication.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-light mb-6 mt-12">Our Divisions</h2>

            <div className="mb-8">
              <h3 className="text-2xl font-light mb-4 text-[#bc1019]">RMR Facades</h3>
              <p className="text-gray-700 mb-4">
                Specialists in facade engineering and installation, RMR Facades delivers comprehensive cladding solutions including rainscreen cladding, curtain walling, and window systems. We work on projects of all sizes, from single buildings to large-scale developments.
              </p>
              <p className="text-gray-700">
                Our facade expertise covers design, supply, and installation, ensuring seamless delivery and exceptional results.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-light mb-4 text-[#bc1019]">RMR Roofing</h3>
              <p className="text-gray-700 mb-4">
                From traditional flat roofing to modern standing seam systems, our roofing division provides complete roofing solutions. We specialize in metal roofing, composite roofing, and all aspects of weatherproofing.
              </p>
              <p className="text-gray-700">
                Our technical knowledge and quality workmanship ensure long-lasting, weather-tight roofing systems.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-4 text-[#bc1019]">RMR Site Developments</h3>
              <p className="text-gray-700 mb-4">
                Our development division manages construction projects from planning through to completion. We bring together our expertise in facades and roofing with general construction capabilities to deliver turnkey solutions.
              </p>
              <p className="text-gray-700">
                Working closely with architects, developers, and main contractors, we ensure projects are delivered on time, on budget, and to the highest standards.
              </p>
            </div>

            <h2 className="text-3xl font-light mb-6 mt-12">Why Choose RMR?</h2>
            <ul className="space-y-3 text-gray-700 mb-12">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1 text-xl">•</span>
                <span><strong>Proven Delivery:</strong> Established track record of successfully delivering complex, high-value construction packages across multiple sectors</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1 text-xl">•</span>
                <span><strong>Technical Expertise:</strong> Decades of specialist experience in facades, advanced roofing systems, and integrated construction solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1 text-xl">•</span>
                <span><strong>Quality Assurance:</strong> Comprehensive quality management systems and industry-leading certifications ensuring consistent performance standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1 text-xl">•</span>
                <span><strong>End-to-End Capability:</strong> Full project lifecycle support from design development through installation to ongoing maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1 text-xl">•</span>
                <span><strong>Strategic Partnerships:</strong> Established relationships with premium manufacturers and suppliers ensuring optimal procurement and quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3 mt-1 text-xl">•</span>
                <span><strong>Skilled Workforce:</strong> Highly qualified, professionally certified teams delivering expert workmanship across all disciplines</span>
              </li>
            </ul>

            <h2 className="text-3xl font-light mb-6 mt-12">Our Accreditations</h2>
            <p className="text-gray-700 mb-6">
              We maintain industry-leading certifications and accreditations, demonstrating our commitment to quality, safety, and professional standards:
            </p>
            <div className="flex flex-wrap gap-6 mb-12">
              <img src="https://ext.same-assets.com/3530247640/583553176.jpeg" alt="Achilles" className="h-20 object-contain" />
              <img src="https://ext.same-assets.com/3530247640/116929908.jpeg" alt="Achilles Network" className="h-20 object-contain" />
              <img src="https://ext.same-assets.com/3530247640/556764098.png" alt="Constructionline" className="h-20 object-contain" />
            </div>

            <h2 className="text-3xl font-light mb-6 mt-12">Our Service Areas</h2>
            <p className="text-gray-700 mb-4">
              We proudly serve clients across:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>East Anglia</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>London</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Bristol</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#bc1019] mr-3">•</span>
                <span>Glasgow</span>
              </li>
            </ul>

            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-6">
                Whether you're planning a new development, refurbishment, or have a specific facade or roofing requirement, our team is here to help. Contact us today to discuss your project.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Head Office</h4>
                  <p className="text-gray-700 mb-1">Norwich</p>
                  <p className="text-gray-700 mb-3">NR1 1PG</p>
                  <p className="mb-2">
                    <a href="tel:01603622595" className="text-[#bc1019] hover:underline font-medium">
                      01603 622595
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@rmrdevelopments.uk" className="text-[#bc1019] hover:underline">
                      info@rmrdevelopments.uk
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">General Enquiries</h4>
                  <p>
                    <a href="mailto:info@rmrdevelopments.uk" className="text-[#bc1019] hover:underline">
                      info@rmrdevelopments.uk
                    </a>
                  </p>
                  <p className="text-gray-700 mt-4 text-sm">
                    Part of RMR Construction Group Limited
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1c1c1b] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help with your next construction project.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:01603622595"
              className="bg-[#bc1019] hover:bg-[#a00e15] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Call 01603 622595
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1c1c1b] px-8 py-4 rounded-lg font-medium transition-colors inline-block"
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>

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
