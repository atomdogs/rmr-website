import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";

export default function BriberyCorruption() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1b]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <a
            href="https://rmrdevelopments.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <img
              src="https://ugc.same-assets.com/GDTnFO76x2BSF1_bN4R4Ib_xRQUn16-J.png"
              alt="RSD Logo"
              className="h-16 md:h-20"
            />
            <div className="border-l border-white/30 pl-4 hidden md:block">
              <h1 className="text-2xl md:text-3xl font-light tracking-wide text-white">
                RMR Site Developments
              </h1>
              <p className="text-xs text-white/60 tracking-wide">
                Building Tomorrow's Communities Today
              </p>
            </div>
          </a>
          <MobileMenu />
        </div>
      </header>

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
