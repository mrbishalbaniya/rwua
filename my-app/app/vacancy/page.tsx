import type { Metadata } from 'next';
import { vacancies } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers at RWUA - Join Our Mission to Empower Rural Women',
  description: 'Explore career opportunities at RWUA Nepal. Join our team working on women empowerment, rural development, education, and community transformation. Current openings in various departments.',
  keywords: 'RWUA careers, Nepal NGO jobs, rural development jobs, women empowerment careers, community development jobs, social work Nepal, NGO employment',
  openGraph: {
    title: 'Careers at RWUA - Join Our Mission to Empower Rural Women',
    description: 'Explore career opportunities at RWUA Nepal. Join our team working on women empowerment, rural development, and community transformation.',
    url: 'https://rwua.com.np/vacancy',
    type: 'website',
    images: [
      {
        url: 'https://rwua.com.np/images/og/og-careers.jpg',
        width: 1200,
        height: 630,
        alt: 'RWUA Careers - Join our team in Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rwuanepal',
    creator: '@rwuanepal',
    title: 'Careers at RWUA - Join Our Mission to Empower Rural Women',
    description: 'Explore career opportunities at RWUA Nepal.',
    images: ['https://rwua.com.np/images/og/og-careers.jpg'],
  },
  alternates: {
    canonical: 'https://rwua.com.np/vacancy',
  },
};

export default function VacanciesPage() {
  const openVacancies = vacancies.filter(v => v.status === 'open' && new Date(v.deadline) >= new Date());
  const closedVacancies = vacancies.filter(v => v.status === 'closed' || new Date(v.deadline) < new Date());

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Page header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-core-blue mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Be part of RWUA's mission to empower rural women and transform 
              communities across Nepal. Explore our current career opportunities.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-16">
              <div className="text-center">
                <div className="text-3xl font-black text-impact-red mb-2">{openVacancies.length}</div>
                <div className="text-sm text-gray-600">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-impact-red mb-2">5+</div>
                <div className="text-sm text-gray-600">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-impact-red mb-2">27</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-impact-red mb-2">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
          </header>
          
          {/* Open positions */}
          {openVacancies.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-core-blue mb-8">Open Positions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {openVacancies.map((vacancy) => {
                  const slug = vacancy.position.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  
                  return (
                    <article key={vacancy.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-core-blue mb-2">
                            <Link 
                              href={`/vacancy/${slug}`}
                              className="hover:text-impact-red transition-colors"
                            >
                              {vacancy.position}
                            </Link>
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {vacancy.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              {vacancy.location}
                            </span>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Open
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {vacancy.description.substring(0, 150)}...
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {vacancy.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm text-gray-500 mb-1">
                            Deadline: {new Date(vacancy.deadline).toLocaleDateString()}
                          </div>
                          <Link 
                            href={`/vacancy/${slug}`}
                            className="bg-impact-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-impact-red/90 transition-colors text-sm"
                          >
                            Apply Now →
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
          
          {/* Closed positions */}
          {closedVacancies.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-600 mb-8">Recent Positions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {closedVacancies.map((vacancy) => {
                  const slug = vacancy.position.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  
                  return (
                    <article key={vacancy.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6 opacity-75">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-700 mb-2">
                            {vacancy.position}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                            <span>{vacancy.department}</span>
                            <span>{vacancy.location}</span>
                          </div>
                        </div>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Closed
                        </span>
                      </div>
                      
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {vacancy.description.substring(0, 100)}...
                      </p>
                      
                      <div className="text-xs text-gray-400">
                        Deadline was: {new Date(vacancy.deadline).toLocaleDateString()}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
          
          {/* Why work with us */}
          <section className="bg-gradient-to-r from-core-blue/5 to-impact-red/5 rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-core-blue mb-8 text-center">
              Why Work With RWUA?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-impact-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-core-blue mb-2">Meaningful Impact</h3>
                <p className="text-gray-600">
                  Make a real difference in the lives of rural women and communities across Nepal.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-flash-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-core-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-core-blue mb-2">Great Team</h3>
                <p className="text-gray-600">
                  Work alongside passionate professionals dedicated to social change.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-core-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-core-blue mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Develop your skills and advance your career in the development sector.
                </p>
              </div>
            </div>
          </section>
          
          {/* Call to action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-core-blue mb-4">
              Don't See the Right Position?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion 
              for rural development and women empowerment.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-core-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-core-blue/90 transition-colors">
                Send Your CV
              </button>
              <button className="border-2 border-core-blue text-core-blue px-8 py-4 rounded-lg font-bold hover:bg-core-blue hover:text-white transition-colors">
                Job Alerts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}