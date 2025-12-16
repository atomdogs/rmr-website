"use client";

import { ContactModal } from "@/components/ContactModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // LinkedIn posts - manually curated
  const linkedinPosts = [
    {
      id: 1,
      title: "Managing Health and Safety on Construction Projects",
      excerpt: "Over the last few decades, the construction industry has put a lot of effort into improving health and safety...",
      image: "/uploads/health-safety/health-safety-featured.png",
      link: "/news/managing-health-safety-construction",
      date: "December 16, 2024"
    },
    {
      id: 2,
      title: "Fire Safety in Facades: What You Need to Know",
      excerpt: "Fire safety in facades has never been more scrutinised – and rightly so. Since Grenfell, the entire industry has had to rethink...",
      image: "/uploads/news/firefacades-01.JPG",
      link: "/news/fire-safety-in-facades",
      date: "October 21, 2025"
    },
    {
      id: 3,
      title: "Your Next Update",
      excerpt: "Add your next LinkedIn post here with image, headline, and excerpt...",
      image: "/uploads/London_night_scene.jpg",
      link: "#",
      date: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden">
        {/* Background image */}
        <img
          src="/uploads/London_night_scene.jpg"
          alt="City skyline at night"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/60" />
            
        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-40 pb-20 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-light mb-8 lg:mx-[0px] lg:my-[40px] lg:px-[1px] lg:py-[9px]">Building Cities And Towns For Tomorrow's Communities.</h2>
            <p className="text-xl mb-8 text-white/80 max-w-md md:text-[29px] lg:mx-[0px] lg:py-[12px]">
              Leading Construction Specialists In AirSpace Development Solutions Across The United Kingdom And Europe.
            </p>
            <a href="/services/airspace-development" className="group relative overflow-hidden border-2 border-[#bc1019] px-8 py-4 rounded-full hover:bg-[#bc1019] transition-all duration-300 inline-block lg:py-[15px]">
              <span className="relative z-10 flex items-center gap-2">
                What We Do
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Decorative pattern section - inspired by 8build */}
        <div className="absolute bottom-0 left-0 right-0 py-16 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="aspect-square flex items-center justify-center">
                  {i % 4 === 0 ? (
                    <svg width="80" height="80" viewBox="0 0 100 100" className="fill-[#bc1019]">
                      <path d="M30 20 L50 10 L70 20 L70 40 L50 50 L30 40 Z" />
                    </svg>
                  ) : i % 4 === 1 ? (
                    <svg width="80" height="80" viewBox="0 0 100 100" className="fill-white">
                      <circle cx="50" cy="50" r="8" />
                      <circle cx="50" cy="50" r="20" strokeWidth="2" stroke="currentColor" fill="none" />
                    </svg>
                  ) : i % 4 === 2 ? (
                    <svg width="80" height="80" viewBox="0 0 100 100" className="fill-[#a7846d]">
                      <path d="M35 35 L65 35 L65 65 L35 65 Z" />
                    </svg>
                  ) : (
                    <svg width="80" height="80" viewBox="0 0 100 100" className="fill-white">
                      <path d="M40 30 L60 30 L70 50 L60 70 L40 70 L30 50 Z" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post-hero strapline */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <p className="text-left text-5xl md:text-7xl font-light md:font-bold">
            Building 100,000 affordable homes through 2025-2027.
          </p>
        </div>
      </section>

      {/* Airspace Development Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image Column */}
            <div>
              <img
                src="/uploads/Airspace/airspace1.png"
                alt="Existing residential building before Airspace development"
                className="w-full h-[600px] object-cover shadow-lg rounded-lg"
              />
            </div>

            {/* Content Column */}
            <div>
              <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider md:text-[30px] md:font-bold lg:text-[40px]">
                Airspace Development
              </p>
              <h2 className="text-3xl font-light mb-6 leading-tight md:text-[50px] md:font-semibold lg:text-[58px]">
                Adding Homes Where They're Needed Most
              </h2>
              <p className="text-lg text-gray-700 mb-6 md:text-[24px] lg:text-[28px]">
                Building new homes on top of existing buildings – utilising unused rooftop space to address the UK housing shortage. AirSpace development delivers additional accommodation on existing buildings, greyfield and brownfield sites, maximising the use of established infrastructure without displacing communities.
              </p>
              <p className="text-lg text-gray-700 mb-8 md:text-[24px] lg:text-[28px]">
                Using modular construction, we can add up to two storeys to existing residential blocks with minimal disruption. The infrastructure is already there – transport links, utilities, schools, shops – making this a practical and cost-effective solution for councils and housing associations.
              </p>
              <a href="/services/airspace-development" className="inline-block bg-[#bc1019] hover:bg-[#a00e15] text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                Learn More About Airspace Development
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-[#fbfbfb]">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-[#bc1019] text-sm font-semibold mb-2 uppercase tracking-wider md:text-[40px]">Delivering Homes That Matter</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={200}>
              <h2 className="text-5xl font-light mb-8 leading-tight md:text-[58px]">
                Delivering excellence across 250+ commercial, residential and public sector projects.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  RMR Site Developments partners with financial institutions, private investors, and local government to deliver affordable, social, and luxury housing across the UK.
                </p>
                <p>
                  From Airspace development that expands existing estates to executive developments in prime locations, we provide end-to-end expertise in design, funding, and construction. Fifty years of experience. Proven delivery. Real homes for real communities.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid - Hidden since all services are now on separate pages or moved to other divisions */}
      {/*
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider lg:text-[40px]">Comprehensive Solutions</p>
              <h2 className="text-4xl md:text-5xl font-light lg:text-[83px] lg:font-medium">Our Services Include</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              // Hidden - moved to RMR Facades
              // {
              //   title: 'Rainscreen Cladding',
              //   image: 'https://ext.same-assets.com/3530247640/3554118270.jpeg',
              //   link: '/services/rainscreen-cladding'
              // },
              // {
              //   title: 'Composite Roofing and Cladding',
              //   image: 'https://ext.same-assets.com/3530247640/3197313653.jpeg',
              //   link: '/services/composite-roofing'
              // },
              // {
              //   title: 'Windows and Curtain Walling',
              //   image: 'https://ext.same-assets.com/3530247640/1706515162.jpeg',
              //   link: '/services/windows-curtain-walling'
              // },
              // {
              //   title: 'Metal Roofing and Cladding',
              //   image: 'https://ext.same-assets.com/3530247640/2686712483.jpeg',
              //   link: '/services/metal-roofing'
              // },
              // {
              //   title: 'Zipped Standing Seam Roofing',
              //   image: 'https://ext.same-assets.com/3530247640/2465519261.jpeg',
              //   link: '/services/standing-seam'
              // },
              // {
              //   title: 'Flat Roofing',
              //   image: 'https://ext.same-assets.com/3530247640/636894361.jpeg',
              //   link: '/services/flat-roofing'
              // },
              // Hidden for now - Fire Remediation
              // {
              //   title: 'Fire Remediation',
              //   image: '/uploads/st-crispins-house.jpg',
              //   link: '/services/fire-remediation'
              // },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <a href={service.link} className="group relative overflow-hidden aspect-[4/3] rounded-lg block cursor-pointer">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-white text-2xl font-light">{service.title}</h3>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider lg:text-[40px]">Client Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-light lg:text-[83px] lg:font-medium">What Our Clients Say</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="bg-[#fbfbfb] p-8 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-[#bc1019]" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "RMR delivered an exceptional rainscreen cladding installation on our commercial development. Professional from start to finish."
                </p>
                <div>
                  <p className="font-semibold">Network Rail</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-[#fbfbfb] p-8 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-[#bc1019]" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The curtain walling system RMR installed has transformed our building. Quality workmanship and excellent project management."
                </p>
                <div>
                 <p className="font-semibold">St Crispins Place, Norwich</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-[#fbfbfb] p-8 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-[#bc1019]" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "We've worked with RMR on multiple projects. Their expertise in Airspace/ pitch roofing systems is second to none. Highly recommended."
                </p>
                <div>
                 <p className="font-semibold">Enfield Council - London</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#fbfbfb]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 lg:text-[73px] lg:font-medium">Why Choose Us</h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                title: 'Technical Excellence',
                description: 'We deliver comprehensive technical solutions across all project phases, from initial design through to completion, ensuring optimal outcomes for our clients.'
              },
              {
                title: 'Strategic Approach',
                description: 'Our experienced team rapidly assesses project requirements and develops robust, value-engineered solutions that meet both technical and commercial objectives.'
              },
              {
                title: 'Competitive Advantage',
                description: 'We leverage our established supply chain relationships and procurement expertise to deliver competitive pricing without compromising on quality or performance standards.'
              },
              {
                title: 'Quality Assurance',
                description: 'Our proven supply chain partners and rigorous quality management systems ensure consistent delivery of precision-engineered products manufactured to the highest standards.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-[#a7846d] text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates from LinkedIn */}
      <section className="py-20 bg-[#fbfbfb]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">Latest Updates</p>
            <h2 className="text-4xl md:text-5xl font-light">Recent from LinkedIn</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {linkedinPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <a
                  href={post.link}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                    <h3 className="text-xl font-light mb-3 text-[#1c1c1b] group-hover:text-[#bc1019] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-[#bc1019] font-medium text-sm">
                      Read More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/news"
              className="inline-block bg-[#bc1019] hover:bg-[#a00e15] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              View All Updates
            </a>
          </div>
        </div>
      </section>

      {/* Locations (cities only) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-2 lg:text-[83px] lg:font-semibold">Locations</h2>
          <p className="text-gray-600 text-lg lg:text-[44px] lg:font-medium">Norwich, London, Bristol, Glasgow</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-[#1c1c1b] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 lg:text-[64px]">Let's Discuss Your Next Project</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:text-[31px]">
            Fill out the form, or call us to set up a free consultation.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-[#bc1019] hover:bg-[#a00e15] text-white px-10 py-4 rounded-full text-lg font-medium transition-colors duration-300"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/team" className="hover:text-white transition-colors">Senior Team</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Divisions</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <span className="text-white font-semibold">RMR  Group</span>
                  <span className="ml-2 text-white/50"></span>
                  <ul className="mt-2 ml-4 space-y-1 list-disc">
                    <li>
                      <span>RMR Construction Group</span>
                      <span className="ml-2 text-white/50"></span>
                    </li>
                    <li>
                      <span>RMR Facades</span>
                      <span className="ml-2 text-white/50"></span>
                    </li>
                    <li>
                      <span>RMR Site Developments</span>
                      <span className="ml-2 text-white/50"></span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Policies</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/apprenticeships" className="hover:text-white transition-colors">Apprenticeships</a></li>
                <li><a href="/privacy-cookies" className="hover:text-white transition-colors">Privacy & Cookies</a></li>
                <li><a href="/data-protection" className="hover:text-white transition-colors">Data Protection</a></li>
                <li><a href="/environmental" className="hover:text-white transition-colors">Environmental</a></li>
                <li><a href="/health-safety" className="hover:text-white transition-colors">Health & Safety</a></li>
                <li><a href="/information-security" className="hover:text-white transition-colors">Information Security</a></li>
                <li><a href="/modern-slavery" className="hover:text-white transition-colors">Modern Slavery</a></li>
                <li><a href="/bribery-corruption" className="hover:text-white transition-colors">Bribery & Corruption</a></li>
                <li><a href="/quality" className="hover:text-white transition-colors">Quality</a></li>
                <li><a href="/carbon-reduction" className="hover:text-white transition-colors">Carbon Reduction</a></li>
                <li><a href="/sitemap-page" className="hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 md:text-[19px]">Contact</h3>
              <p className="text-sm text-white/70 mb-2 md:text-[17px]">Head Office, Norwich, NR1 1PG</p>
              <p className="text-sm text-white/70 mb-2 md:text-[17px]">01603 622595</p>
              <p className="text-sm text-white/70 md:text-[17px]">info@rmrdevelopments.uk</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>RMR Group © Website by Bayley and Green. Copyright © 2025 RMR Group.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
