"use client";

import Link from "next/link";
import { AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1c1c1b] to-[#2a2a2a] text-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-[#bc1019] hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Find answers to common questions about our services, processes, and capabilities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">

          {/* General Questions */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">General Questions</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="What services does RMR Site Developments offer?">
                  <p>
                    RMR Site Developments provides comprehensive construction services including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Facade systems (rainscreen cladding, curtain walling, windows)</li>
                    <li>Specialist roofing solutions (flat roofing, standing seam, metal roofing)</li>
                    <li>AirSpace development and construction</li>
                    <li>Fire remediation and building safety compliance</li>
                    <li>Complete project management from planning to completion</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="What areas do you serve?">
                  <p>
                    We operate across major UK markets including East Anglia, London, Bristol, and Glasgow.
                    Our head office is based in Norwich, and we have successfully delivered projects throughout these regions for over five decades.
                  </p>
                </AccordionItem>

                <AccordionItem title="What types of projects do you work on?">
                  <p>
                    We work on a diverse range of projects including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Residential developments (houses, apartments, mixed-use)</li>
                    <li>Commercial buildings (offices, retail, industrial)</li>
                    <li>Educational facilities (schools, universities)</li>
                    <li>Healthcare facilities</li>
                    <li>Refurbishment and renovation projects</li>
                    <li>New build construction</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="How long has RMR been in business?">
                  <p>
                    RMR Group has over five decades of operational experience in the construction industry.
                    This extensive track record demonstrates our commitment to quality, safety, and client satisfaction
                    across thousands of successfully delivered projects.
                  </p>
                </AccordionItem>

                <AccordionItem title="Are you certified and accredited?">
                  <p>
                    Yes, we maintain industry-leading certifications including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Achilles certification for supply chain performance</li>
                    <li>Constructionline Gold accreditation</li>
                    <li>Comprehensive quality management systems (ISO standards)</li>
                    <li>Health and safety accreditations</li>
                    <li>Environmental management certifications</li>
                  </ul>
                  <p className="mt-3">
                    These accreditations demonstrate our commitment to maintaining the highest standards across all aspects of our operations.
                  </p>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Project-Specific Questions */}
          <ScrollReveal delay={200}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">Project Process</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="How do I get started with a project?">
                  <p>
                    Getting started is simple:
                  </p>
                  <ol className="list-decimal pl-6 mt-2 space-y-2">
                    <li>Contact us via phone (01603 622595) or email (info@rmrdevelopments.uk)</li>
                    <li>Discuss your project requirements with our team</li>
                    <li>We'll arrange a site visit and initial consultation</li>
                    <li>Receive a detailed proposal and quotation</li>
                    <li>Once approved, we'll develop a comprehensive project plan</li>
                    <li>Work commences with full project management support</li>
                  </ol>
                </AccordionItem>

                <AccordionItem title="Do you provide free quotes?">
                  <p>
                    Yes, we provide free, no-obligation quotations for all projects. Our quotes are comprehensive
                    and transparent, detailing all costs, timelines, and specifications. We believe in clear communication
                    from the outset to ensure there are no surprises.
                  </p>
                </AccordionItem>

                <AccordionItem title="How long does a typical project take?">
                  <p>
                    Project timelines vary significantly based on scope, complexity, and size. For example:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Small roofing projects: 1-2 weeks</li>
                    <li>Facade installations: 4-12 weeks</li>
                    <li>AirSpace developments: 3-9 months</li>
                    <li>Large-scale construction projects: 6-18 months</li>
                  </ul>
                  <p className="mt-3">
                    We'll provide a detailed timeline during the quotation phase, and we pride ourselves on
                    delivering projects on schedule.
                  </p>
                </AccordionItem>

                <AccordionItem title="Do you handle planning permissions and building regulations?">
                  <p>
                    Yes, we have extensive experience working with planning authorities and building control.
                    We can assist with:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Planning applications and submissions</li>
                    <li>Building regulations approval</li>
                    <li>Technical drawings and specifications</li>
                    <li>Liaison with local authorities</li>
                    <li>Compliance certification</li>
                  </ul>
                  <p className="mt-3">
                    Our team works closely with architects, engineers, and planning consultants to ensure
                    all necessary approvals are obtained.
                  </p>
                </AccordionItem>

                <AccordionItem title="What is your approach to health and safety?">
                  <p>
                    Health and safety is embedded in our operational culture. Our approach includes:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Industry-leading safety management systems</li>
                    <li>Comprehensive risk assessments for all projects</li>
                    <li>Regular safety training and toolbox talks</li>
                    <li>Qualified health and safety officers on-site</li>
                    <li>Full CDM (Construction Design and Management) compliance</li>
                    <li>Zero-tolerance policy for safety violations</li>
                  </ul>
                  <p className="mt-3">
                    We maintain an excellent safety record and are committed to ensuring every worker
                    returns home safely.
                  </p>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Service-Specific Questions */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">Service-Specific Questions</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="What is AirSpace development?">
                  <p>
                    AirSpace development involves developing the unused space above existing buildings,
                    typically adding one or more additional floors. This is an innovative solution for:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Creating additional residential or commercial space</li>
                    <li>Maximizing property value without expanding footprint</li>
                    <li>Addressing housing shortages in urban areas</li>
                    <li>Generating revenue from underutilized rooftop space</li>
                  </ul>
                  <p className="mt-3">
                    We specialize in assessing structural feasibility, obtaining planning permissions,
                    and delivering complete AirSpace construction projects.
                  </p>
                </AccordionItem>

                <AccordionItem title="What roofing systems do you install?">
                  <p>
                    We install a comprehensive range of roofing systems including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Flat roofing:</strong> Single-ply membranes, built-up felt, liquid waterproofing</li>
                    <li><strong>Standing seam:</strong> Modern metal roofing with concealed fixings</li>
                    <li><strong>Metal roofing:</strong> Aluminum, zinc, copper, and steel systems</li>
                    <li><strong>Composite roofing:</strong> Insulated panel systems</li>
                    <li><strong>Green roofs:</strong> Vegetated roofing systems</li>
                  </ul>
                  <p className="mt-3">
                    All roofing systems come with manufacturer warranties and our workmanship guarantee.
                  </p>
                </AccordionItem>

                <AccordionItem title="What facade systems do you offer?">
                  <p>
                    Our facade division provides:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Rainscreen cladding:</strong> Ventilated facade systems in various materials</li>
                    <li><strong>Curtain walling:</strong> Aluminum and glazed wall systems</li>
                    <li><strong>Windows:</strong> Commercial and residential window installations</li>
                    <li><strong>Brise soleil:</strong> Solar shading systems</li>
                    <li><strong>Composite panels:</strong> ACM, MCM, and insulated panels</li>
                  </ul>
                  <p className="mt-3">
                    We handle design, supply, and installation, ensuring seamless delivery and exceptional results.
                  </p>
                </AccordionItem>

                <AccordionItem title="Do you handle fire remediation work?">
                  <p>
                    Yes, fire remediation is a key service area. Following the Grenfell tragedy and subsequent
                    building safety reforms, we provide:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Building safety assessments and fire risk evaluations</li>
                    <li>Removal and replacement of non-compliant cladding</li>
                    <li>Installation of fire-rated facade systems</li>
                    <li>Compartmentation and fire stopping works</li>
                    <li>Full compliance with Building Safety Act 2022</li>
                    <li>EWS1 and fire safety certification support</li>
                  </ul>
                  <p className="mt-3">
                    We work with building owners, management companies, and leaseholders to ensure
                    buildings meet current fire safety standards.
                  </p>
                </AccordionItem>

                <AccordionItem title="Can you work on occupied buildings?">
                  <p>
                    Yes, we have extensive experience working on occupied residential and commercial buildings.
                    Our approach includes:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Minimal disruption strategies and phased working</li>
                    <li>Clear communication with residents and occupants</li>
                    <li>Out-of-hours working when required</li>
                    <li>Dust and noise mitigation measures</li>
                    <li>Safe access and egress maintenance</li>
                    <li>Regular progress updates and liaison</li>
                  </ul>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Quality & Warranties */}
          <ScrollReveal delay={400}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">Quality & Warranties</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="What warranties do you provide?">
                  <p>
                    We provide comprehensive warranty coverage including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Workmanship warranties:</strong> Typically 10-12 years on installation quality</li>
                    <li><strong>Manufacturer warranties:</strong> Material warranties ranging from 10-25+ years depending on product</li>
                    <li><strong>Weatherproofing guarantees:</strong> Performance guarantees for roofing and facade systems</li>
                    <li><strong>Structural warranties:</strong> Available through NHBC or similar schemes for new builds</li>
                  </ul>
                  <p className="mt-3">
                    All warranty terms are clearly documented and provided upon project completion.
                  </p>
                </AccordionItem>

                <AccordionItem title="How do you ensure quality on projects?">
                  <p>
                    Quality is embedded in everything we do through:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Comprehensive quality management systems (ISO certified)</li>
                    <li>Rigorous supplier and subcontractor vetting</li>
                    <li>Regular site inspections and quality audits</li>
                    <li>Skilled, professionally certified workforce</li>
                    <li>Technical expertise and continuous training</li>
                    <li>Client sign-off at key project stages</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Do you provide aftercare and maintenance?">
                  <p>
                    Yes, we offer comprehensive aftercare including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Defect resolution during warranty period</li>
                    <li>Planned maintenance programs</li>
                    <li>Emergency repair services</li>
                    <li>Regular inspection and servicing</li>
                    <li>Technical support and advice</li>
                  </ul>
                  <p className="mt-3">
                    We build long-term relationships with our clients and remain available to support
                    your building throughout its lifecycle.
                  </p>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Sustainability */}
          <ScrollReveal delay={500}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">Sustainability & Environment</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="What is your approach to sustainability?">
                  <p>
                    Sustainability is core to our operations. Our approach includes:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Carbon reduction initiatives and environmental management systems</li>
                    <li>Sustainable material sourcing and waste minimization</li>
                    <li>Energy-efficient building systems and thermal performance optimization</li>
                    <li>Circular economy principles (reuse, recycling, responsible disposal)</li>
                    <li>Low-carbon construction methodologies</li>
                    <li>Biodiversity protection on construction sites</li>
                  </ul>
                  <p className="mt-3">
                    We are committed to reducing our environmental impact while delivering exceptional results.
                  </p>
                </AccordionItem>

                <AccordionItem title="Can you help with building energy efficiency?">
                  <p>
                    Yes, improving building energy efficiency is a key part of our service offering. We can assist with:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>High-performance insulation systems</li>
                    <li>Thermally efficient facades and roofing</li>
                    <li>Airtightness and weatherproofing improvements</li>
                    <li>Renewable energy integration (solar PV, heat pumps)</li>
                    <li>EPC (Energy Performance Certificate) improvements</li>
                    <li>Retrofit projects for existing buildings</li>
                  </ul>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact CTA */}
          <ScrollReveal delay={600}>
            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Still Have Questions?</h3>
              <p className="text-gray-700 mb-6">
                If you couldn't find the answer you were looking for, our team is here to help.
                Get in touch and we'll be happy to discuss your specific requirements.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="tel:01603622595"
                  className="bg-[#bc1019] hover:bg-[#a00e15] text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                >
                  Call 01603 622595
                </a>
                <a
                  href="mailto:info@rmrdevelopments.uk"
                  className="border-2 border-[#bc1019] text-[#bc1019] hover:bg-[#bc1019] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                >
                  Email Us
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-gray-300 text-gray-700 hover:border-[#bc1019] hover:text-[#bc1019] px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1c1c1b] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your construction vision to life.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:01603622595"
              className="bg-[#bc1019] hover:bg-[#a00e15] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Call 01603 622595
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1c1c1b] px-8 py-4 rounded-lg font-medium transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

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
