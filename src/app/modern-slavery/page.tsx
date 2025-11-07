import Link from "next/link";
export default function ModernSlavery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">Ethics</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">Modern Slavery & Human Trafficking Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: October 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Statement</h2>
              <p className="text-gray-700 mb-4">
                RMR Construction Group Limited is committed to acting ethically and with integrity in all our business dealings and relationships. We are committed to implementing and enforcing effective systems and controls to ensure modern slavery and human trafficking is not taking place anywhere in our own business or in any of our supply chains.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Our Business</h2>
              <p className="text-gray-700 mb-4">
                As a construction and facades specialist operating primarily in the UK, we maintain a zero-tolerance approach to modern slavery and human trafficking. We are committed to transparency in our business and our approach to tackling modern slavery throughout our supply chains.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Our Policies</h2>
              <p className="text-gray-700 mb-4">We have the following policies in place to identify and prevent modern slavery:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Recruitment policy ensuring all employment is freely chosen</li>
                <li>Supplier code of conduct setting out the standards we expect</li>
                <li>Whistleblowing policy enabling employees to report concerns</li>
                <li>Anti-bribery and corruption policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Due Diligence</h2>
              <p className="text-gray-700 mb-4">As part of our initiative to identify and mitigate risk we:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Conduct risk assessments of our supply chain</li>
                <li>Require suppliers to demonstrate compliance with employment laws</li>
                <li>Conduct audits of high-risk suppliers</li>
                <li>Maintain certification standards such as Constructionline</li>
                <li>Protect whistleblowers who report concerns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Training</h2>
              <p className="text-gray-700 mb-4">
                We provide training to relevant staff to ensure a high level of understanding of the risks of modern slavery and human trafficking in our business and supply chains.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Our Effectiveness</h2>
              <p className="text-gray-700 mb-4">
                We measure the effectiveness of our approach through regular audits, supplier assessments, and feedback mechanisms. This statement is reviewed annually.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Reporting Concerns</h2>
              <p className="text-gray-700 mb-4">
                If you have concerns about modern slavery or human trafficking in our business or supply chain, please contact:
              </p>
              <p className="text-gray-700">
                Compliance Officer<br />
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
