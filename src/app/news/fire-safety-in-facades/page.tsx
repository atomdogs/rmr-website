import Link from "next/link";

export default function FireSafetyArticle() {
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
              Projects
            </span>
            <span className="text-sm text-white/60">October 21, 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6 max-w-4xl">
            Fire Safety in Facades: What You Need to Know
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-light mt-12 mb-6 text-[#1c1c1b]">
              Fire safety isn't just about ticking boxes. It's about people.
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              After Grenfell, everything changed. The regulations got tighter, and frankly, that's how it should be. We work in an industry where our decisions affect lives, and that responsibility sits with us every day.
            </p>

            {/* Image 1 */}
            <div className="my-12">
              <img
                src="/uploads/news/firefacades-01.JPG"
                alt="Fire safety facade inspection"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-light mt-12 mb-6 text-[#1c1c1b]">Getting Compliance Right</h2>

            <p className="text-gray-700 mb-6 text-lg">
              The UK's fire safety regulations are some of the strictest around. And they need to be.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              We've seen what happens when corners get cut. Building control, fire engineers, architects – everyone's got a role to play here. The regulations cover the obvious stuff like fire resistance and escape routes, but they also dig into the detail of material specifications and compartmentalisation.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              It's not always straightforward, mind you. The guidance evolves, standards shift. Perhaps that's a good thing though – it means we're learning.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6 text-[#1c1c1b]">Material Choices Matter</h2>

            <p className="text-gray-700 mb-6 text-lg">
              This is where it gets proper technical.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Non-combustible materials are your safest bet. Brick, concrete, stone – they've been around for centuries for a reason. They don't burn. Simple as that.
            </p>

            {/* Image 2 */}
            <div className="my-12">
              <img
                src="/uploads/news/firefacades-02.JPG"
                alt="Fire-safe facade materials"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 mb-6 text-lg">
              Metal cladding systems and fibre cement have their place too. But since 2017, we've had to rethink combustible materials entirely, especially on high-rise buildings. The regulations now basically say: if it can burn, it shouldn't be on a building over 18 metres.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Some developers push back on this. They want certain aesthetics or lighter weight systems. I get it – but safety comes first. Always.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6 text-[#1c1c1b]">Design Considerations</h2>

            <p className="text-gray-700 mb-6 text-lg">
              Here's where engineering meets reality.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Compartmentalisation is your friend. Fire barriers, cavity barriers, fire breaks – they all work to stop flames spreading between floors or units. The design needs to account for smoke movement too, because let's be honest, smoke kills faster than fire in most cases.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              You've got to think about ventilation, glazing specifications, and escape routes from day one. Not as an afterthought.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Balancing aesthetics with safety? That's the daily challenge. Some architects want full glass facades or interesting cladding patterns. Fine – but it needs to work from a fire safety perspective first. We work closely with fire engineers on every project for this exact reason.
            </p>

            {/* Image 3 */}
            <div className="my-12">
              <img
                src="/uploads/news/firefacades-03.png"
                alt="Facade fire safety design"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-light mt-12 mb-6 text-[#1c1c1b]">Maintenance and Inspections</h2>

            <p className="text-gray-700 mb-6 text-lg">
              Building it right is only half the job.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              The Fire Safety Order puts the responsibility squarely on building owners and managers. Regular inspections aren't optional – they're mandatory. Cladding systems need checking, fire stopping needs verifying, and any issues need sorting quickly.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              We've seen buildings deteriorate over time. Seals fail, materials degrade, installations get compromised during other works. It happens. The key is catching it early through proper inspection regimes.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6 text-[#1c1c1b]">Moving Forward</h2>

            <p className="text-gray-700 mb-6 text-lg">
              The industry's in a better place now than it was a few years back. Everyone's more aware, more cautious perhaps.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              But there's still work to do. Standards will keep evolving, and we'll keep adapting. That's the nature of construction – constant improvement, constant vigilance.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              At RMR Site Developments, we take fire safety seriously from initial design through to handover and beyond. If you're planning a project and want to discuss how we approach facade safety, get in touch. We offer free initial consultations and we're always happy to talk through your plans.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Because at the end of the day, we're not just building facades. We're building places where people live and work. And they deserve to feel safe.
            </p>

            {/* Call to action */}
            <div className="bg-[#fbfbfb] p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-light mb-4">Discuss Your Project</h3>
              <p className="text-gray-700 mb-6">
                Want to talk about fire safety for your facade project? Get in touch for a free consultation.
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
            <p>© 2025 RMR Construction Group Limited - All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}