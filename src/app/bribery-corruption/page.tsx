import Link from "next/link";
export default function BriberyCorruption() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">
            Ethics & Compliance
          </p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">
            Bribery & Corruption Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: October 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Policy Statement</h2>
              <p className="text-gray-700 mb-4">
                RMR Construction Group Limited is committed to conducting business in an ethical and honest manner. We have a zero-tolerance approach to bribery and corruption and are committed to acting professionally, fairly, and with integrity in all our business dealings and relationships.
              </p>
              <p className="text-gray-700 mb-4">
                This policy applies to all employees, contractors, consultants, and any other persons associated with us, or any of our subsidiaries or affiliated companies (collectively referred to as "workers" in this policy).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">What is Bribery?</h2>
              <p className="text-gray-700 mb-4">
                Bribery is offering, promising, giving, accepting, or soliciting an advantage as an inducement for an action which is illegal, unethical, or a breach of trust. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Offering a bribe (promising or giving a financial or other advantage)</li>
                <li>Receiving a bribe (accepting or requesting a financial or other advantage)</li>
                <li>Bribing a public official</li>
                <li>Facilitation payments (small payments to secure or expedite routine actions)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Gifts and Hospitality</h2>
              <p className="text-gray-700 mb-4">
                Reasonable and proportionate hospitality and gifts are acceptable, provided they:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Are not made with the intention of influencing a business decision</li>
                <li>Are proportionate and reasonable</li>
                <li>Are given openly, not secretly</li>
                <li>Comply with local laws and regulations</li>
                <li>Are properly recorded in our accounts</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Cash gifts or cash equivalents must never be given or received under any circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                All workers must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Ensure they read, understand, and comply with this policy</li>
                <li>Avoid any activity that might lead to a breach of this policy</li>
                <li>Raise concerns about any issue or suspicion of malpractice at the earliest possible stage</li>
                <li>Report any requests or offers of bribes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Record Keeping</h2>
              <p className="text-gray-700 mb-4">
                We maintain accurate financial records and have appropriate internal controls to prevent bribery. All accounts, invoices, and other documents must be prepared with strict accuracy and completeness.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Reporting Concerns</h2>
              <p className="text-gray-700 mb-4">
                If you have concerns about bribery or corruption, please report them immediately. We are committed to protecting whistleblowers and ensuring no one suffers detrimental treatment for refusing to participate in bribery or corruption.
              </p>
              <p className="text-gray-700">
                Contact:<br />
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
