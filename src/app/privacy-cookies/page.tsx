import Link from "next/link";
export default function PrivacyCookies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">Legal</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">Privacy and Cookies Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: October 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                RMR Construction Group Limited ("we", "our", "us") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect and process the following data about you:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Information you provide by filling in forms on our website</li>
                <li>Details of your visits to our website including traffic data, location data, and other communication data</li>
                <li>Information provided when you contact us for any reason</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">3. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
              </p>
              <p className="text-gray-700 mb-4">
                A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">4. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use information held about you in the following ways:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To provide you with information, products or services that you request from us</li>
                <li>To carry out our obligations arising from any contracts entered into between you and us</li>
                <li>To notify you about changes to our service</li>
                <li>To ensure that content from our site is presented in the most effective manner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to ask us not to process your personal data for marketing purposes. You can exercise your right to prevent such processing by contacting us at info@rmrdevelopments.uk
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">6. Contact</h2>
              <p className="text-gray-700 mb-4">
                Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to:
              </p>
              <p className="text-gray-700">
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
