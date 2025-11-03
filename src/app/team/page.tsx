import { ScrollReveal } from '@/components/ScrollReveal'
import { MobileMenu } from '@/components/MobileMenu'
import Link from 'next/link'

export default function TeamPage() {
  const team = [
    {
      name: 'Ray Read',
      role: 'Project Director',
      org: 'RMR Site Developments Limited',
      bio: `20 years experience of Airspace development, Steel fabrication & design, engineering consultancy which includes Crossrail, Tesco. Structural Engineer/Project Director with 30 years+ experience of complex builds within the public and private sectors.`,
      notable: [
        'St Pancras Station, London: Total refurbishment of the roof in collaboration with English Heritage.',
        'Leipzig Trade Fair Centre (New Exhibition Centre), Germany: Construction. Greenwich Millennium Village (Residential): Construction of a large residential development consisting of private and social housing.',
        'Paternoster Square, London: Large commercial development adjacent to St Paul\'s Cathedral.',
        'St Crispins House, Norwich: Refurbishment of a 1970\'s office building to create 750 student apartments.',
      ],
    },
    {
      name: 'Mike Wolfers',
      role: 'Commercial Director',
      org: 'RMR Site Developments Limited',
      bio: `20 years of experience in the construction sector. A commercial management delivery and turnaround specialist with consultancy roles which include DHL International, Coutts Bank and VAG. Started his management career with ICI Group companies. Primary role to ensure delivery schedules are met along with commercial overview.`,
    },
    {
      name: 'Nikhil Jhangiani',
      role: 'Chief Alternative Investment Officer',
      org: 'RMR Site Development Limited',
      bio: `Previous roles include Chief Investment Advisor Officer Ferrier Lullin & CIE SA, Geneva (previously part of UBS Group.) Credit Bank Corp SA, Union Bancaire Privee (UBP) in Geneva & New York. Nikhil is Swiss, Italian and overseas Indian citizen, speaking 6 languages. Substantial experience in global strategic investment management both in real estate and other industries.`,
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1b]/95 backdrop-blur-sm border-b border-white/10 text-white">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://rmrdevelopments.uk/" target="_blank" rel="noopener noreferrer">
              <img src="https://ugc.same-assets.com/GDTnFO76x2BSF1_bN4R4Ib_xRQUn16-J.png" alt="RSD Logo" className="h-16 md:h-20" />
            </a>
            <div className="border-l border-white/30 pl-4 hidden md:block">
              <h1 className="text-2xl font-light tracking-wide md:text-[47px]">RMR Site Developments</h1>
              <p className="text-xs text-white/60 tracking-wide md:text-[21px] md:py-[14px]">Building Tomorrow's Communities Today</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/80">
            {/* No Senior Team link in header; available via mobile menu and footer */}
            <MobileMenu />
          </div>
        </div>
      </header>

      <section className="relative bg-[#0a0a0a] text-white pt-40 pb-24">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-block text-white/80 hover:text-white mb-4">← Back to Home</Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6">Senior Leadership Team</h1>
          <p className="text-white/80 max-w-3xl">An experienced team delivering the future of affordable housing across the UK.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="rounded-lg border border-gray-200 p-8 bg-[#fbfbfb]">
                  <div className="flex items-start gap-6">
                    <div className="h-20 w-20 rounded-full bg-gray-200" aria-hidden />
                    <div>
                      <h2 className="text-2xl font-semibold">{member.name}</h2>
                      <p className="text-[#bc1019] font-medium">{member.role}</p>
                      <p className="text-sm text-gray-600">{member.org}</p>
                    </div>
                  </div>
                  {member.bio ? (
                    <p className="mt-6 text-gray-700 leading-relaxed">{member.bio}</p>
                  ) : (
                    <p className="mt-6 text-gray-500 italic">Content forthcoming.</p>
                  )}
                  {member.notable && (
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Notable Projects:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {member.notable.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
