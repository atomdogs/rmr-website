import Link from "next/link";
export default function Portfolio() {
  const projects = [
    {
      title: "Modern Office Building",
      location: "Norwich, Norfolk",
      category: "Commercial",
      image: "https://ext.same-assets.com/2311182597/2631950844.jpeg",
      description: "Contemporary facade system with rainscreen cladding and curtain walling.",
      link: "/projects/modern-office-building"
    },
    {
      title: "Residential Development",
      location: "Cambridge",
      category: "Residential",
      image: "https://ext.same-assets.com/2311182597/2178678330.jpeg",
      description: "Multi-unit housing with composite cladding and metal roofing.",
      link: "/projects/residential-development"
    },
    {
      title: "Educational Facility",
      location: "Essex",
      category: "Education",
      image: "https://ext.same-assets.com/3530247640/1706515162.jpeg",
      description: "Complete facade package including windows and curtain walling systems.",
      link: "/projects/educational-facility"
    },
    {
      title: "Retail Complex",
      location: "Greater London",
      category: "Commercial",
      image: "https://ext.same-assets.com/3530247640/3197313653.jpeg",
      description: "Composite roofing and cladding solution for large retail development.",
      link: "#"
    },
    {
      title: "Industrial Unit",
      location: "Norfolk",
      category: "Industrial",
      image: "https://ext.same-assets.com/3530247640/2465519261.jpeg",
      description: "Standing seam metal roofing with high-performance cladding.",
      link: "#"
    },
    {
      title: "Mixed-Use Development",
      location: "Cambridgeshire",
      category: "Mixed-Use",
      image: "https://ext.same-assets.com/3530247640/636894361.jpeg",
      description: "Flat roofing and rainscreen cladding for modern mixed-use building.",
      link: "#"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1c1c1b] to-[#2a2a2a] text-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-[#bc1019] hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6">Our Portfolio</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Explore our completed projects across the UK. From commercial developments to residential complexes, we deliver exceptional quality in every project.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pt-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:py-[24px]">
            {projects.map((project, index) => (
              <Link key={index} href={project.link} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="inline-block bg-[#bc1019] text-white text-xs px-3 py-1 rounded-full mb-2">
                        {project.category}
                      </span>
                      <p className="text-white text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-600">{project.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-[#fbfbfb]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Our Capabilities</h2>
            <p className="text-lg text-gray-700 mb-12">
              We deliver comprehensive facade and roofing solutions across all sectors
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-[#bc1019]">Commercial</h3>
                <p className="text-gray-600">
                  Office buildings, retail complexes, and commercial developments
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-[#bc1019]">Residential</h3>
                <p className="text-gray-600">
                  Housing developments, apartment buildings, and mixed-use projects
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-[#bc1019]">Industrial</h3>
                <p className="text-gray-600">
                  Warehouses, manufacturing facilities, and logistics centers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1c1b] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Start Your Project With Us</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to discuss your next construction project? Get in touch with our team today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:01603622595"
              className="bg-[#bc1019] hover:bg-[#a00e15] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Call 01603 622595
            </a>
            <a
              href="mailto:info@rmrfacades.co.uk"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1c1c1b] px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Email Us
            </a>
            <Link
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1c1c1b] px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-8">
        <div className="container mx-auto px-6 text-center text-sm text-white/50">
          <p>© 2025 RMR Construction Group Limited - All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
