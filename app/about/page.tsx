import type { Metadata } from 'next';
import { CORE_VISION, CORE_MISSION, CORE_GOAL, OBJECTIVES, ORG_MEMBERS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About RWUA - Our Mission, Vision & 27-Year Journey',
  description: 'Learn about RWUA\'s 27-year journey empowering rural women in Nepal. Discover our mission, vision, leadership team, and commitment to quality education, health, and sustainable livelihoods since 1998.',
  keywords: 'RWUA about, rural women association Nepal, NGO history, Goma Devi Neupane, women empowerment organization, Nepal development, Madhesh Province NGO',
  openGraph: {
    title: 'About RWUA - Our Mission, Vision & 27-Year Journey',
    description: 'Learn about RWUA\'s 27-year journey empowering rural women in Nepal. Discover our mission, vision, leadership team, and commitment to sustainable development.',
    url: 'https://rwua.com.np/about',
    type: 'website',
    images: [
      {
        url: 'https://rwua.com.np/images/og/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About RWUA - Leadership team and organizational mission',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rwuanepal',
    creator: '@rwuanepal',
    title: 'About RWUA - Our Mission, Vision & 27-Year Journey',
    description: 'Learn about RWUA\'s 27-year journey empowering rural women in Nepal.',
    images: ['https://rwua.com.np/images/og/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://rwua.com.np/about',
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* About page content */}
      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-core-blue mb-8">
            About RWUA
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-impact-red mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">{CORE_VISION}</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-impact-red mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">{CORE_MISSION}</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-impact-red mb-4">Our Goal</h2>
              <p className="text-lg text-gray-700 mb-6">{CORE_GOAL}</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-impact-red mb-4">Our Objectives</h2>
              <ul className="list-disc pl-6 space-y-2">
                {OBJECTIVES.map((objective, index) => (
                  <li key={index} className="text-gray-700">{objective}</li>
                ))}
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-impact-red mb-4">Leadership Team</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {ORG_MEMBERS.slice(0, 2).map((member) => (
                  <div key={member.id} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-core-blue mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{member.nepaliName}</p>
                    <p className="text-sm font-semibold text-impact-red mb-4">{member.role}</p>
                    {member.contactPerson && (
                      <p className="text-sm text-gray-600">
                        Contact: {member.contactPerson} - {member.phone}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}