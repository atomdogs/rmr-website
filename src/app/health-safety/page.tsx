import Link from "next/link";
export default function HealthSafety() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">Safety First</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">Health & Safety Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: October 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Policy Statement</h2>
              <p className="text-gray-700 mb-4">
                RMR Construction Group Limited is committed to ensuring the health, safety and welfare of all our employees, contractors, visitors, and members of the public who may be affected by our activities. We recognize that health and safety is paramount in all our operations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Our Commitments</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide and maintain safe working environments, equipment, and systems</li>
                <li>Ensure safe handling, storage, and use of materials and substances</li>
                <li>Provide information, instruction, training, and supervision</li>
                <li>Consult with employees on health and safety matters</li>
                <li>Implement effective emergency procedures</li>
                <li>Comply with all health and safety legislation and regulations</li>
                <li>Continuously monitor and improve health and safety performance</li>
                <li>Allocate sufficient resources to meet health and safety objectives</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                <strong>Management:</strong> Responsible for implementing this policy, providing necessary resources, and ensuring compliance across all operations.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Employees:</strong> Required to take reasonable care of their own health and safety and that of others who may be affected by their actions, cooperate with management, and report any health and safety concerns.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Contractors:</strong> Must comply with our health and safety requirements and provide evidence of their competence and safety management systems.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Risk Assessment</h2>
              <p className="text-gray-700 mb-4">
                We carry out comprehensive risk assessments for all our activities and implement appropriate control measures to eliminate or minimize identified risks. Risk assessments are regularly reviewed and updated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Training and Competence</h2>
              <p className="text-gray-700 mb-4">
                We ensure all employees and contractors receive appropriate health and safety training and hold relevant qualifications and certifications for their roles. Regular refresher training is provided to maintain competence.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Incident Reporting</h2>
              <p className="text-gray-700 mb-4">
                All accidents, incidents, and near misses must be reported immediately. We investigate all incidents to identify root causes and implement preventive measures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Contact</h2>
              <p className="text-gray-700">
                Health & Safety Department<br />
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
            <p>© 2025 RMR Construction Group Limited - All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
