import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";

export default function CarbonReduction() {
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
          <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">Sustainability</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">Carbon Reduction Plan</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: October 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Commitment to Net Zero</h2>
              <p className="text-gray-700 mb-4">
                RMR Construction Group Limited is committed to achieving Net Zero carbon emissions by 2050 in line with UK government targets. We recognize the urgency of climate action and our responsibility to reduce our environmental impact across all our operations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Baseline Emissions Footprint</h2>
              <p className="text-gray-700 mb-4">
                We have established our baseline carbon footprint covering:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Scope 1:</strong> Direct emissions from owned or controlled sources (company vehicles, fuel combustion)</li>
                <li><strong>Scope 2:</strong> Indirect emissions from purchased energy (electricity, heating)</li>
                <li><strong>Scope 3:</strong> Indirect emissions from our supply chain and business activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Reduction Targets</h2>
              <p className="text-gray-700 mb-4">We have set the following carbon reduction targets:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Reduce Scope 1 and 2 emissions by 50% by 2030 (from baseline year)</li>
                <li>Reduce Scope 3 emissions by 30% by 2030</li>
                <li>Achieve Net Zero across all scopes by 2050</li>
                <li>Annual reduction targets of 5% year-on-year</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Carbon Reduction Projects</h2>
              <p className="text-gray-700 mb-4">Key initiatives to achieve our targets include:</p>

              <h3 className="text-xl font-light mb-3 mt-6">Operational Efficiency</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Transition company vehicle fleet to electric and hybrid vehicles</li>
                <li>Install LED lighting and energy-efficient equipment in offices and facilities</li>
                <li>Implement smart building management systems</li>
                <li>Optimize logistics and reduce unnecessary travel</li>
              </ul>

              <h3 className="text-xl font-light mb-3 mt-6">Renewable Energy</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Procure 100% renewable electricity for offices and facilities</li>
                <li>Install solar panels where feasible</li>
                <li>Investigate on-site renewable energy generation for projects</li>
              </ul>

              <h3 className="text-xl font-light mb-3 mt-6">Supply Chain Engagement</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Work with suppliers to reduce embodied carbon in materials</li>
                <li>Prioritize low-carbon and sustainable materials</li>
                <li>Require carbon reporting from key suppliers</li>
                <li>Support suppliers in their own carbon reduction efforts</li>
              </ul>

              <h3 className="text-xl font-light mb-3 mt-6">Construction Practices</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Implement circular economy principles - reduce, reuse, recycle</li>
                <li>Minimize waste and maximize material efficiency</li>
                <li>Use modern methods of construction to reduce on-site emissions</li>
                <li>Design for energy efficiency and sustainability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Monitoring and Reporting</h2>
              <p className="text-gray-700 mb-4">
                We measure and report our carbon emissions annually using recognized methodologies and standards. Progress against targets is monitored quarterly and reported to senior management. This plan is reviewed and updated annually to ensure continued progress.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Employee Engagement</h2>
              <p className="text-gray-700 mb-4">
                We engage all employees in our carbon reduction efforts through training, awareness campaigns, and encouraging sustainable behaviors both at work and in their personal lives.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Declaration and Sign Off</h2>
              <p className="text-gray-700 mb-4">
                This Carbon Reduction Plan has been completed in accordance with PPN 06/21 and associated guidance and reporting standard for Carbon Reduction Plans.
              </p>
              <p className="text-gray-700 mb-4">
                Emissions have been reported and recorded in accordance with the published reporting standard for Carbon Reduction Plans and the GHG Reporting Protocol corporate standard.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Contact</h2>
              <p className="text-gray-700">
                Sustainability Manager<br />
                RMR Construction Group Limited<br />
                Head Office, Norwich, NR1 1PG<br />
                Email: info@rmrfacades.co.uk<br />
                Phone: 01603 622595
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
