import Link from "next/link";
export default function DataProtection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">Legal</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">Data Protection Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: October 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">1. Policy Statement</h2>
              <p className="text-gray-700 mb-4">
                RMR Construction Group Limited is committed to compliance with all relevant UK and EU data protection legislation and regulations, including the General Data Protection Regulation (GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">2. Data Protection Principles</h2>
              <p className="text-gray-700 mb-4">We ensure that all personal data is:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Processed lawfully, fairly and in a transparent manner</li>
                <li>Collected for specified, explicit and legitimate purposes</li>
                <li>Adequate, relevant and limited to what is necessary</li>
                <li>Accurate and kept up to date</li>
                <li>Kept in a form which permits identification for no longer than necessary</li>
                <li>Processed in a manner that ensures appropriate security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">3. Individual Rights</h2>
              <p className="text-gray-700 mb-4">Under GDPR, individuals have the following rights:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>The right to be informed</li>
                <li>The right of access</li>
                <li>The right to rectification</li>
                <li>The right to erasure</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object</li>
                <li>Rights in relation to automated decision making and profiling</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">4. Data Breach Procedure</h2>
              <p className="text-gray-700 mb-4">
                In the event of a data breach, we will notify the appropriate authorities within 72 hours and affected individuals without undue delay where the breach is likely to result in a high risk to the rights and freedoms of individuals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">5. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For any data protection queries or to exercise your rights, please contact:
              </p>
              <p className="text-gray-700">
                Data Protection Officer<br />
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
