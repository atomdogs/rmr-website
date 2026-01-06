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
            Common questions about airspace development and rooftop extensions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">

          {/* What is Airspace Development */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">Understanding Airspace Development</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="What is airspace development?">
                  <p>
                    Airspace development involves building new homes on top of existing buildings by utilising unused rooftop space.
                    It's a practical solution to the UK housing shortage that adds homes where they're needed most without requiring new land acquisition or displacing existing residents.
                  </p>
                  <p className="mt-3">
                    Most of the construction work happens off-site using modular building techniques, with the new homes manufactured as prefabricated modules
                    then lifted into place by crane. This approach minimises disruption to existing residents who typically don't need to move out during construction.
                  </p>
                </AccordionItem>

                <AccordionItem title="Who is airspace development suitable for?">
                  <p>
                    Airspace development is particularly well-suited for:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Local authorities</strong> looking to add affordable housing without acquiring expensive land</li>
                    <li><strong>Housing associations</strong> seeking to maximise their existing housing stock</li>
                    <li><strong>Councils</strong> with long housing waiting lists and limited expansion options</li>
                    <li><strong>Property developers</strong> working in urban areas with high land values</li>
                  </ul>
                  <p className="mt-3">
                    The approach works particularly well in urban environments like London, Norwich, Manchester, and Birmingham where land scarcity
                    meets sustained housing demand.
                  </p>
                </AccordionItem>

                <AccordionItem title="Can any building be used for airspace development?">
                  <p>
                    Not every building is suitable. Several factors determine feasibility:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Structural capacity:</strong> The existing building must be able to support the additional weight. Many post-war blocks of flats have sufficient structural capacity, but older buildings may need reinforcement</li>
                    <li><strong>Building condition:</strong> The existing structure must be in good condition without major structural deficiencies or building safety concerns</li>
                    <li><strong>Height restrictions:</strong> Local planning policies may limit building heights</li>
                    <li><strong>Access:</strong> There must be adequate access for crane delivery and installation</li>
                  </ul>
                  <p className="mt-3">
                    We conduct comprehensive feasibility studies to assess whether your buildings are suitable candidates for airspace development.
                  </p>
                </AccordionItem>

                <AccordionItem title="How many homes can be added?">
                  <p>
                    The 2020 permitted development rights allow up to two additional storeys on certain existing residential blocks.
                    The actual number of homes depends on:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>The building's structural capacity</li>
                    <li>The existing building footprint</li>
                    <li>Planning requirements and local authority policies</li>
                    <li>Design considerations and building regulations</li>
                  </ul>
                  <p className="mt-3">
                    A typical residential block might accommodate anywhere from 4-20+ new homes depending on these factors.
                  </p>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Planning and Regulations */}
          <ScrollReveal delay={200}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">Planning & Regulations</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="Do I need planning permission?">
                  <p>
                    In 2020, the government introduced new permitted development rights specifically for airspace development.
                    These regulations allow up to two additional storeys to be added to certain existing residential blocks without needing full planning permission.
                  </p>
                  <p className="mt-3">
                    However, there are still requirements to meet:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Local authorities maintain oversight and approval rights</li>
                    <li>Projects must comply with all current building regulations</li>
                    <li>Some buildings or areas may not qualify for permitted development</li>
                    <li>Listed buildings and conservation areas have different requirements</li>
                  </ul>
                  <p className="mt-3">
                    We manage the entire planning process, liaising with local authorities to ensure compliance and secure necessary approvals.
                  </p>
                </AccordionItem>

                <AccordionItem title="What about building regulations and fire safety?">
                  <p>
                    All airspace development projects must comply with current building regulations, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Fire safety:</strong> Modern fire safety systems, compartmentation, and escape routes meeting current standards</li>
                    <li><strong>Structural integrity:</strong> Full structural calculations and certification</li>
                    <li><strong>Insulation and energy efficiency:</strong> Meeting or exceeding current thermal performance requirements</li>
                    <li><strong>Accessibility:</strong> Compliance with accessibility standards</li>
                    <li><strong>Ventilation and services:</strong> Proper ventilation, water, drainage, and electrical systems</li>
                  </ul>
                  <p className="mt-3">
                    Our in-house design and engineering teams ensure all projects meet these requirements from the outset.
                  </p>
                </AccordionItem>

                <AccordionItem title="How long does the approval process take?">
                  <p>
                    The timeline varies depending on the route you're taking:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Permitted development route:</strong> Typically 8-12 weeks for local authority determination</li>
                    <li><strong>Full planning permission:</strong> 8-13 weeks for standard applications, longer for major schemes</li>
                    <li><strong>Building regulations approval:</strong> 5-8 weeks for detailed plans</li>
                  </ul>
                  <p className="mt-3">
                    The permitted development route is considerably faster than traditional planning, which is one of the key advantages for councils
                    under pressure to deliver housing quickly.
                  </p>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Construction Process */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">Construction & Delivery</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="How long does construction take?">
                  <p>
                    One of the major advantages of modular airspace development is speed of delivery:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Feasibility and design:</strong> 8-12 weeks</li>
                    <li><strong>Off-site manufacturing:</strong> 12-16 weeks for module production</li>
                    <li><strong>Site preparation:</strong> 2-4 weeks (minimal groundworks required)</li>
                    <li><strong>Installation:</strong> Days to weeks depending on project size - modules lifted into place by crane</li>
                    <li><strong>Final connections and finishing:</strong> 4-8 weeks</li>
                  </ul>
                  <p className="mt-3">
                    Total project timelines from approval to completion typically range from 6-12 months, significantly faster than traditional construction.
                  </p>
                </AccordionItem>

                <AccordionItem title="Will residents need to move out during construction?">
                  <p>
                    No, residents typically do not need to move out. This is one of the key advantages of airspace development over demolition and rebuild schemes.
                  </p>
                  <p className="mt-3">
                    Because most construction happens off-site and modules are craned into place, disruption to existing residents is minimal.
                    There will be some temporary inconvenience during the installation phase (crane operations, site access, noise), but this is
                    measured in days or weeks rather than months or years.
                  </p>
                  <p className="mt-3">
                    Compare this to estate regeneration schemes where entire communities must be temporarily rehoused - airspace development avoids
                    displacing residents and breaking up established communities.
                  </p>
                </AccordionItem>

                <AccordionItem title="What is modular construction?">
                  <p>
                    Modular construction means the new homes are manufactured as prefabricated modules in a factory under controlled conditions,
                    then transported to site and assembled.
                  </p>
                  <p className="mt-3">
                    Advantages include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Quality control:</strong> Factory conditions allow better precision and quality than traditional on-site builds</li>
                    <li><strong>Speed:</strong> Manufacturing and site preparation happen simultaneously, reducing overall timelines</li>
                    <li><strong>Weather-independent:</strong> Factory production isn't delayed by poor weather</li>
                    <li><strong>Minimal site disruption:</strong> Most work happens off-site</li>
                    <li><strong>Sustainability:</strong> Less waste, better material efficiency, reduced transport</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="What happens to existing residents during the work?">
                  <p>
                    We implement comprehensive resident engagement and management strategies:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Regular communication before, during, and after construction</li>
                    <li>Advance notice of any temporary disruption (crane operations, access restrictions)</li>
                    <li>Designated liaison contact for resident queries and concerns</li>
                    <li>Careful scheduling to minimise noise and disruption</li>
                    <li>Maintaining safe access and egress at all times</li>
                  </ul>
                  <p className="mt-3">
                    Many residents actually benefit from airspace development projects through wider building improvements - upgraded communal areas,
                    new windows, better insulation, and modern fire safety systems that are installed as part of the project.
                  </p>
                </AccordionItem>

                <AccordionItem title="How are water, gas, and electricity supplies affected?">
                  <p>
                    Services to existing flats remain completely unaffected throughout the build process and after completion.
                    The new homes are connected independently by installing new service risers from ground level direct to the roof.
                  </p>
                  <p className="mt-3">
                    This approach ensures:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>No interruption to existing residents' utilities during construction</li>
                    <li>No additional load on existing building services</li>
                    <li>New homes have their own metered connections</li>
                    <li>Building capacity is assessed and upgraded if necessary</li>
                  </ul>
                  <p className="mt-3">
                    All utility works are coordinated with utility providers and building owners to ensure compliance and minimal disruption.
                  </p>
                </AccordionItem>

                <AccordionItem title="What refurbishment works are typically included?">
                  <p>
                    Airspace development projects often include comprehensive refurbishment works that benefit the entire building.
                    Each project is different, but typical improvements include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>New roof:</strong> Complete roof replacement with long-term guarantees (typically 20+ years)</li>
                    <li><strong>Communal areas:</strong> Renovation of lobbies, entrances, corridors, and stairwells</li>
                    <li><strong>External improvements:</strong> Upgraded facades, better insulation, modern cladding where appropriate</li>
                    <li><strong>Fire safety:</strong> Enhanced fire alarms, compartmentation, and emergency lighting</li>
                    <li><strong>Security systems:</strong> Upgraded entry systems, CCTV, and access control</li>
                    <li><strong>Outdoor spaces:</strong> Improvement to communal gardens or outdoor areas</li>
                    <li><strong>Windows and doors:</strong> Replacement or refurbishment where needed</li>
                  </ul>
                  <p className="mt-3">
                    We work with housing associations and councils to identify priority improvements that will benefit residents
                    and enhance the building's overall condition and value.
                  </p>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Costs and Viability */}
          <ScrollReveal delay={400}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">Costs & Viability</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="What does airspace development cost?">
                  <p>
                    Costs vary significantly based on project specifics, but airspace development offers several economic advantages:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>No land acquisition costs</strong> - you're using space you already own</li>
                    <li><strong>No demolition costs</strong> - existing buildings remain occupied</li>
                    <li><strong>Reduced groundworks</strong> - infrastructure already in place</li>
                    <li><strong>Faster delivery</strong> - lower financing costs due to shorter construction periods</li>
                  </ul>
                  <p className="mt-3">
                    Typical costs per unit are competitive with traditional new build construction, but the overall economics are often more
                    favourable when land and demolition savings are factored in.
                  </p>
                  <p className="mt-3">
                    We provide detailed feasibility studies including full cost analysis to help you assess viability before committing to a project.
                  </p>
                </AccordionItem>

                <AccordionItem title="What's included in a feasibility study?">
                  <p>
                    Our feasibility studies provide comprehensive assessment of whether airspace development is viable for your specific buildings:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Structural assessment:</strong> Can the building support additional storeys?</li>
                    <li><strong>Capacity analysis:</strong> How many new homes could be added?</li>
                    <li><strong>Planning review:</strong> What's the likely planning route and timeline?</li>
                    <li><strong>Design concepts:</strong> Initial designs showing how new homes would integrate</li>
                    <li><strong>Cost estimates:</strong> Projected costs and financial viability</li>
                    <li><strong>Programme:</strong> Indicative timelines from approval to completion</li>
                    <li><strong>Risk assessment:</strong> Identification of challenges and mitigation strategies</li>
                  </ul>
                  <p className="mt-3">
                    No obligation - just a straightforward assessment of what's possible for your site.
                  </p>
                </AccordionItem>

                <AccordionItem title="Can the new homes be affordable housing?">
                  <p>
                    Yes, airspace development is particularly well-suited to affordable housing delivery. Many councils and housing associations
                    are using airspace development specifically to increase their affordable housing stock.
                  </p>
                  <p className="mt-3">
                    The economic advantages (no land costs, no demolition, faster delivery) mean more of the budget goes into the homes themselves.
                    This can make it viable to deliver genuinely affordable homes, whether social rent, affordable rent, or shared ownership.
                  </p>
                  <p className="mt-3">
                    Some councils use a phasing approach where new airspace homes provide temporary accommodation for residents from lower floors
                    while those areas are refurbished - essentially regenerating entire estates without permanent displacement.
                  </p>
                </AccordionItem>

                <AccordionItem title="Will service charges for existing residents increase?">
                  <p>
                    No, service charges should actually decrease due to economies of scale. When new homes are added to a building,
                    the costs of maintaining communal areas, building insurance, and other shared services are spread across more units.
                  </p>
                  <p className="mt-3">
                    The newly developed properties typically contribute on a pro-rata basis to service charge costs, leading to a reduction
                    in the overall service charge per flat for existing residents. This is one of the direct benefits residents experience
                    from airspace development projects.
                  </p>
                  <p className="mt-3">
                    Additionally, the new roof installed as part of the development (typically with a 20-year guarantee) and other building
                    improvements reduce ongoing maintenance costs for the entire building.
                  </p>
                </AccordionItem>

                <AccordionItem title="Will property values be affected?">
                  <p>
                    Airspace development typically has a positive impact on the value of existing properties in the building.
                    Industry data shows an average 3-4% increase in capital value for existing flats below newly developed airspace.
                  </p>
                  <p className="mt-3">
                    This increase is driven by several factors:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Comprehensive refurbishment works to communal areas and building exteriors</li>
                    <li>New roof with long-term guarantees</li>
                    <li>Reduction in service charge costs</li>
                    <li>Improved building aesthetics and modern facilities</li>
                    <li>Enhanced fire safety and building compliance</li>
                    <li>Better thermal performance and insulation</li>
                  </ul>
                  <p className="mt-3">
                    The overall building becomes more attractive to buyers and residents benefit from both capital appreciation
                    and reduced running costs.
                  </p>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Design and Quality */}
          <ScrollReveal delay={500}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">Design & Quality</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="Will the new homes look out of place?">
                  <p>
                    Good design is essential. The new homes need to complement what's already there whilst meeting all current building regulations.
                  </p>
                  <p className="mt-3">
                    Our in-house architects understand both the technical constraints and aesthetic considerations. We don't believe in slapping
                    something on that looks completely out of place. The design process considers:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Integration with existing building character and materials</li>
                    <li>Respecting the surrounding context and streetscape</li>
                    <li>Modern construction standards whilst being sympathetic to existing architecture</li>
                    <li>Creating homes that communities are proud of, not eyesores they reject</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="What standard are the new homes built to?">
                  <p>
                    All new homes meet or exceed current building regulations including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Full compliance with fire safety requirements</li>
                    <li>Modern insulation and thermal performance standards</li>
                    <li>Accessibility requirements</li>
                    <li>Sound insulation between dwellings</li>
                    <li>Energy efficiency standards</li>
                  </ul>
                  <p className="mt-3">
                    Factory construction under controlled conditions generally means better quality control than traditional on-site builds.
                    Modules are inspected at multiple stages during manufacturing.
                  </p>
                </AccordionItem>

                <AccordionItem title="Do you provide design services in-house?">
                  <p>
                    Yes, we have in-house design and engineering teams with extensive experience in airspace development. This integrated approach means:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Better coordination between design and construction teams</li>
                    <li>Faster response to design queries and changes</li>
                    <li>Full understanding of both technical requirements and practical challenges</li>
                    <li>Single point of responsibility from feasibility through to completion</li>
                  </ul>
                  <p className="mt-3">
                    We've worked on major projects including the façade refurbishment of St Pancras Station and 940 flats at St Crispins House in Norwich,
                    so we understand complex building challenges.
                  </p>
                </AccordionItem>

                <AccordionItem title="What certifications and insurance do you provide?">
                  <p>
                    On completion of projects, we provide comprehensive compliance documentation and insurance coverage including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Building regulations certification:</strong> Full sign-off from Building Control</li>
                    <li><strong>Structural warranties:</strong> Long-term structural guarantees (typically 10-12 years)</li>
                    <li><strong>Professional indemnity insurance:</strong> Our architects and engineers hold high levels of professional indemnity insurance</li>
                    <li><strong>Contractor insurance:</strong> Full liability coverage throughout construction</li>
                    <li><strong>Compliance documentation:</strong> EWS1 forms, fire safety certificates, and all relevant compliance paperwork</li>
                    <li><strong>Manufacturer warranties:</strong> Warranties for roofing materials, windows, and building components</li>
                  </ul>
                  <p className="mt-3">
                    All consultants and contractors involved in projects hold appropriate levels of professional indemnity insurance,
                    enabling them to execute their duties professionally and providing protection for building owners and residents.
                  </p>
                  <p className="mt-3">
                    We ensure buildings are fully compliant with all regulations and provide the documentation needed for mortgage lenders,
                    insurance companies, and building safety requirements.
                  </p>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Getting Started */}
          <ScrollReveal delay={600}>
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-[#bc1019]">Getting Started</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <AccordionItem title="How do I get started?">
                  <p>
                    The first step is a straightforward conversation about your specific situation:
                  </p>
                  <ol className="list-decimal pl-6 mt-2 space-y-2">
                    <li>Contact us to discuss your buildings and objectives</li>
                    <li>We'll arrange a site visit to assess the buildings</li>
                    <li>We conduct a feasibility study (structural, planning, design, costs)</li>
                    <li>You receive a comprehensive report on viability and options</li>
                    <li>If viable and you wish to proceed, we develop detailed proposals</li>
                    <li>We manage planning/building regulations approvals</li>
                    <li>Construction commences with full project management</li>
                  </ol>
                  <p className="mt-3">
                    No obligation at the feasibility stage - just honest assessment of whether airspace development could work for your buildings.
                  </p>
                </AccordionItem>

                <AccordionItem title="Where are you currently working?">
                  <p>
                    We work primarily in urban areas where airspace development makes most sense:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>London:</strong> Where land scarcity and housing demand are most acute</li>
                    <li><strong>Norwich:</strong> Our base, with extensive local experience</li>
                    <li><strong>Other UK cities:</strong> Manchester, Birmingham, Bristol, and anywhere with similar housing pressures</li>
                  </ul>
                  <p className="mt-3">
                    We're interested in projects of all sizes - from single buildings to estate-wide programmes involving multiple blocks.
                  </p>
                </AccordionItem>

                <AccordionItem title="What experience do you have?">
                  <p>
                    RMR Site Developments has been working on innovative housing solutions across the UK for years. Our experience includes:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Major refurbishment projects like St Pancras Station façade work</li>
                    <li>940 flats at St Crispins House, Norwich</li>
                    <li>Extensive experience with modular construction techniques</li>
                    <li>In-house design and engineering capability</li>
                    <li>Working with local authorities and housing associations</li>
                  </ul>
                  <p className="mt-3">
                    We're not just selling a concept - we're delivering actual projects that work for councils, housing associations, and the communities they serve.
                  </p>
                </AccordionItem>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact CTA */}
          <ScrollReveal delay={700}>
            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Still Have Questions?</h3>
              <p className="text-gray-700 mb-6">
                If you're a local authority or housing association interested in airspace development, we'd welcome a straightforward
                conversation about what's possible for your estates.
              </p>
              <p className="text-gray-700 mb-6">
                No hard sell, just honest assessment of whether this approach could work for your specific situation.
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
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Explore Airspace Development?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss whether your existing buildings could benefit from airspace development.
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
              Get In Touch
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
