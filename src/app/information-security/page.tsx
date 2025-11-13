import Link from "next/link";
export default function InformationSecurity() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">Security</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">Information Security Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: October 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Policy Statement</h2>
              <p className="text-gray-700 mb-4">
                RMR Construction Group Limited is committed to protecting the confidentiality, integrity, and availability of all information assets. We recognize that information security is essential to our business operations and reputation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Information Security Objectives</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Protect information from unauthorized access, use, disclosure, or modification</li>
                <li>Ensure business continuity and minimize damage from security incidents</li>
                <li>Comply with legal, statutory, regulatory, and contractual requirements</li>
                <li>Maintain the trust and confidence of customers, partners, and stakeholders</li>
                <li>Provide secure and reliable information systems and services</li>
                <li>Foster a culture of security awareness across the organization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Security Controls</h2>
              <p className="text-gray-700 mb-4">We implement appropriate technical and organizational measures including:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access controls and authentication mechanisms</li>
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Secure backup and disaster recovery procedures</li>
                <li>Network security and firewall protection</li>
                <li>Antivirus and malware protection</li>
                <li>Physical security of information assets</li>
                <li>Secure disposal of information and equipment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">All employees and contractors must:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Comply with this information security policy and related procedures</li>
                <li>Use strong passwords and protect authentication credentials</li>
                <li>Report security incidents or suspected breaches immediately</li>
                <li>Only access information necessary for their role</li>
                <li>Not share confidential information with unauthorized parties</li>
                <li>Use company IT systems responsibly and in accordance with acceptable use policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Incident Management</h2>
              <p className="text-gray-700 mb-4">
                Security incidents must be reported immediately to IT management. We investigate all incidents, implement corrective actions, and review procedures to prevent recurrence.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Training and Awareness</h2>
              <p className="text-gray-700 mb-4">
                Regular information security training is provided to all staff to ensure awareness of threats, responsibilities, and best practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Contact</h2>
              <p className="text-gray-700">
                IT Security Officer<br />
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
          <div className="text-center text-sm text-white/50">
            <p>RMR Group © Website by Bayley and Green. Copyright © 2025 RMR Group.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
