import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";

export default function Environmental() {
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
          <h1 className="text-4xl md:text-5xl font-light mb-8">Environmental Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: October 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Our Commitment</h2>
              <p className="text-gray-700 mb-4">
                RMR Construction Group Limited is committed to minimizing the environmental impact of our activities and continually improving our environmental performance. We recognize that our operations can have an impact on the environment and we are committed to operating in an environmentally responsible manner.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Environmental Objectives</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Comply with all relevant environmental legislation and regulations</li>
                <li>Minimize waste production and increase recycling rates</li>
                <li>Reduce energy consumption and carbon emissions</li>
                <li>Promote sustainable procurement practices</li>
                <li>Protect and enhance biodiversity where possible</li>
                <li>Prevent pollution in all its forms</li>
                <li>Engage with supply chain partners on environmental matters</li>
                <li>Provide environmental training to all employees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Waste Management</h2>
              <p className="text-gray-700 mb-4">
                We are committed to the waste hierarchy principles: reduce, reuse, recycle. We work to minimize waste generation at source and ensure proper segregation, recycling, and disposal of all waste materials in accordance with environmental regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Energy and Carbon</h2>
              <p className="text-gray-700 mb-4">
                We monitor and work to reduce our carbon footprint through efficient use of resources, selection of low-carbon materials, and implementation of energy-saving measures across our operations and projects.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Continuous Improvement</h2>
              <p className="text-gray-700 mb-4">
                We regularly review and monitor our environmental performance through established key performance indicators and implement improvement measures where identified. This policy is reviewed annually and communicated to all employees, contractors, and stakeholders.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Contact</h2>
              <p className="text-gray-700">
                For more information about our environmental initiatives:<br />
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
