import Link from "next/link";

export default function HealthSafetyArticle() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1c1c1b] to-[#2a2a2a] text-white">
        <div className="container mx-auto px-6">
          <Link href="/news" className="text-[#bc1019] hover:underline mb-6 inline-block">
            ← Back to News
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-[#bc1019] uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full">
              Industry News
            </span>
            <span className="text-sm text-white/60">December 16, 2024</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6 max-w-4xl">
            Managing Health and Safety on Construction Projects
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">

            <p className="text-gray-700 mb-6 text-lg">
              Over the last few decades, the construction industry has put a lot of effort into improving health and safety. And I think that's brilliant, obviously.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              We've got regulations like the Health and Safety at Work Act and the CDM Regulations (more on those in a minute). They're meant to point everyone in the right direction. But here's the thing – just ticking boxes and meeting minimum requirements doesn't really cut it anymore.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              At RMR Developments, we take this stuff seriously. Perhaps more than we need to, but that's intentional.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Managing health and safety properly during construction means everyone has to play their part. Designers, contractors, health and safety professionals, even clients themselves. It's not just about having a plan – it's about actually sticking to it.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              We provide knowledge and support throughout every project stage. The relevant laws get followed, always. And we expect everyone involved to commit fully to that. From the people on site right up to senior management.
            </p>

            {/* Image 1 */}
            <div className="my-12">
              <img
                src="/uploads/health-safety/health-safety-featured.png"
                alt="RMR Developments construction planning with safety hard hat and blueprints on site"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-light mt-12 mb-6 text-[#1c1c1b]">What Are the CDM Regulations 2015?</h2>

            <p className="text-gray-700 mb-6 text-lg">
              The Health and Safety Executive brought in the Construction (Design and Management) Regulations 2015. The CDM regulations, as they're usually called.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Their purpose is straightforward enough. Promote and protect health and safety in construction. They set out specific roles and responsibilities that everyone on a construction site must carry out by law.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              The regulations aim to do three main things:
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Improve and manage health and safety on-site. Aid planning and management of construction projects. And reduce unnecessary bureaucracy (which is always welcome, I reckon).
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Duty holders are expected to use these principles to identify potential health and safety issues before they become actual problems.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6 text-[#1c1c1b]">General Principles of Prevention</h2>

            <p className="text-gray-700 mb-6 text-lg">
              Prevention is the key. That's probably obvious, but it's worth saying.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Here are the general principles that should guide any construction project:
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Avoid risks where you can. Assess the risks you can't avoid. Identify where the risk comes from and manage it properly.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Adapt the work to the individual. This means thinking about workplace design, equipment choices, working methods. The goal is to reduce monotonous work and its impact on health.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Keep up with technical progress. Replace dangerous materials when safer alternatives exist.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Develop an overall prevention policy that covers technology, work organisation, working conditions, social relationships. All of it.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Prioritise collective protective measures over individual ones. And make sure employees get appropriate instruction.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              We believe every construction company has a moral obligation here. Provide a safe environment for anyone who enters the buildings they manage. Protect the health and wellbeing of everyone working on a project.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              By monitoring performance against ambitious targets, we aim to lead the industry in this area. That's best achieved through continual improvement in health and safety management. Both internally and throughout our supply chain.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Our health and safety management system gets reviewed regularly against the highest industry standards. Only through extensive risk assessments across each area of the company can we keep improving.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              This includes training and educating all staff in their individual responsibilities.
            </p>

            {/* Image 2 */}
            <div className="my-12">
              <img
                src="/uploads/health-safety/health-safety-03.png"
                alt="Construction professional in safety equipment including hard hat and hi-vis vest on building project"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-light mt-12 mb-6 text-[#1c1c1b]">The Responsibilities of Each Duty Holder</h2>

            <p className="text-gray-700 mb-6 text-lg">
              Under the CDM regulations, almost everyone working on a project has legal health and safety responsibilities.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              <strong>Client</strong> – Someone who has construction work carried out on their behalf. They must provide suitable health and safety management on the project.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              <strong>Designer</strong> – Those who prepare or revise designs, drawings and specifications. They need to reduce, control or limit foreseeable risks in a completed structure or during construction. If there's more than one designer, the 'principal designer' manages health and safety issues throughout the design phase.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              <strong>Contractor</strong> – An individual or business overseeing construction work. They eliminate, reduce or control foreseeable risks that may arise during construction or while the completed structure is being used or maintained. With multiple contractors, a 'principal contractor' typically gets appointed to handle health and safety during the construction phase.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              <strong>Worker</strong> – An individual employed to carry out building work, alterations, maintenance or demolitions. They co-operate with other duty holders and report anything they see that might affect or endanger health and safety.
            </p>

            {/* Image 3 */}
            <div className="my-12">
              <img
                src="/uploads/health-safety/health-safety-harness.png"
                alt="Safety harness and fall protection equipment on construction site ensuring worker safety"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-light mt-12 mb-6 text-[#1c1c1b]">A Collaborative Approach</h2>

            <p className="text-gray-700 mb-6 text-lg">
              At RMR Developments, we know a project succeeds when the team is engaged and invested. When information gets communicated clearly and regularly. When there's clear and proactive support from all relevant parties.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Only through a collaborative approach to health and safety can we achieve the level of coordination, cooperation and communication we demand in all our projects.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              It's not just about compliance. It's about creating a culture where everyone looks out for each other. Where safety isn't an afterthought – it's built into every decision from day one.
            </p>

            {/* Call to action */}
            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Discuss Your Project</h3>
              <p className="text-gray-700 mb-6">
                Want to talk about health and safety for your construction project? Get in touch for a free consultation.
              </p>
              <a
                href="/contact#contact-form"
                className="inline-block bg-[#bc1019] hover:bg-[#a00e15] text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
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
