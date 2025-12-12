import { ScrollReveal } from '@/components/ScrollReveal'
import { MobileMenu } from '@/components/MobileMenu'
import Link from 'next/link'
import Image from 'next/image'

export default function TeamPage() {
  const team = [
    {
      name: 'Ray Read',
      role: 'Project Director',
      org: 'RMR Site Developments Limited',
      image: '/uploads/Senior Team/rayread.png',
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
      image: '/uploads/Senior Team/mikewolfers.png',
      bio: `20 years of experience in the construction sector. A commercial management delivery and turnaround specialist with consultancy roles which include DHL International, Coutts Bank and VAG. Started his management career with ICI Group companies. Primary role to ensure delivery schedules are met along with commercial overview.`,
    },
    {
      name: 'Nikhil Jhangiani',
      role: 'Chief Alternative Investment Officer',
      org: 'RMR Site Development Limited',
      image: '/uploads/Senior Team/nikhiljhangiani.png',
      bio: `Previous roles include Chief Investment Advisor Officer Ferrier Lullin & CIE SA, Geneva (previously part of UBS Group.) Credit Bank Corp SA, Union Bancaire Privee (UBP) in Geneva & New York. Nikhil is Swiss, Italian and overseas Indian citizen, speaking 6 languages. Substantial experience in global strategic investment management both in real estate and other industries.`,
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
                    <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
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
