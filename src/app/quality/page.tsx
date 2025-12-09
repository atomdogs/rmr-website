import Link from "next/link";
export default function Quality() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">Excellence</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">Quality Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: October 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Our Commitment to Quality</h2>
              <p className="text-gray-700 mb-4">
                RMR Construction Group Limited is committed to delivering exceptional quality in all aspects of our work. We recognize that quality is fundamental to our success and the satisfaction of our clients. Our quality management system is designed to consistently meet and exceed customer expectations while complying with all relevant standards and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Quality Objectives</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Meet or exceed customer requirements and expectations</li>
                <li>Deliver projects on time and within budget</li>
                <li>Ensure all work complies with specifications, regulations, and standards</li>
                <li>Minimize defects and rework through right-first-time approach</li>
                <li>Continuously improve our processes and systems</li>
                <li>Maintain strong relationships with quality-focused supply chain partners</li>
                <li>Develop competent and skilled workforce</li>
                <li>Foster a culture of quality throughout the organization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Quality Management System</h2>
              <p className="text-gray-700 mb-4">
                Our quality management system is based on the following principles:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Customer Focus:</strong> Understanding and meeting customer needs</li>
                <li><strong>Leadership:</strong> Creating unity of purpose and direction</li>
                <li><strong>Engagement of People:</strong> Enabling people to contribute to quality objectives</li>
                <li><strong>Process Approach:</strong> Managing activities as processes</li>
                <li><strong>Improvement:</strong> Continual improvement as a permanent objective</li>
                <li><strong>Evidence-based Decision Making:</strong> Decisions based on data analysis</li>
                <li><strong>Relationship Management:</strong> Managing relationships with interested parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Quality Control and Assurance</h2>
              <p className="text-gray-700 mb-4">We implement rigorous quality control measures including:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Comprehensive project planning and design review</li>
                <li>Material testing and verification</li>
                <li>Regular site inspections and monitoring</li>
                <li>Independent quality audits</li>
                <li>Non-conformance tracking and corrective action</li>
                <li>Customer feedback and satisfaction surveys</li>
                <li>Post-completion reviews and lessons learned</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Supplier Quality Management</h2>
              <p className="text-gray-700 mb-4">
                We work with approved suppliers who demonstrate commitment to quality. Our supply chain partners are selected based on their ability to consistently provide quality products and services that meet our requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Training and Competence</h2>
              <p className="text-gray-700 mb-4">
                We invest in training and development to ensure our workforce maintains the skills and knowledge necessary to deliver quality work. All personnel receive appropriate training for their roles and responsibilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Continuous Improvement</h2>
              <p className="text-gray-700 mb-4">
                We regularly review our quality performance and implement improvements through monitoring key performance indicators, customer feedback, internal audits, and management reviews.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Contact</h2>
              <p className="text-gray-700">
                Quality Manager<br />
                RMR Construction Group Limited<br />
                Head Office, Norwich, NR1 1PG<br />
                Email: info@rmrdevelopments.uk<br />
                Phone: 01603 622595
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/apprenticeships" className="hover:text-white transition-colors">Apprenticeships</Link></li>
              <li><Link href="/privacy-cookies" className="hover:text-white transition-colors">Privacy & Cookies</Link></li>
              <li><Link href="/data-protection" className="hover:text-white transition-colors">Data Protection</Link></li>
              <li><Link href="/environmental" className="hover:text-white transition-colors">Environmental</Link></li>
              <li><Link href="/health-safety" className="hover:text-white transition-colors">Health & Safety</Link></li>
              <li><Link href="/information-security" className="hover:text-white transition-colors">Information Security</Link></li>
              <li><Link href="/modern-slavery" className="hover:text-white transition-colors">Modern Slavery</Link></li>
              <li><Link href="/bribery-corruption" className="hover:text-white transition-colors">Bribery & Corruption</Link></li>
              <li><Link href="/quality" className="hover:text-white transition-colors">Quality</Link></li>
              <li><Link href="/carbon-reduction" className="hover:text-white transition-colors">Carbon Reduction</Link></li>
            </ul>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>RMR Group © Website by Bayley and Green. Copyright © 2025 RMR Group.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
