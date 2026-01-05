'use client';

import { NextSeo } from 'next-seo';
import { getBilingualMetaTags } from '@/lib/seo.config';
import { vacancies, Vacancy } from '@/lib/data';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface VacancyPageProps {
  params: Promise<{ slug: string }>;
}

// Helper function to get vacancy by slug
function getVacancyBySlug(slug: string): Vacancy | undefined {
  return vacancies.find(vacancy => 
    vacancy.position.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );
}

export default function VacancyPage({ params }: VacancyPageProps) {
  const { slug } = use(params);
  const vacancy = getVacancyBySlug(slug);

  if (!vacancy) {
    notFound();
  }

  // Generate structured data for job posting
  const jobPostingStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: vacancy.position,
    description: vacancy.description,
    identifier: {
      '@type': 'PropertyValue',
      name: 'RWUA Job ID',
      value: vacancy.id,
    },
    datePosted: vacancy.deadline, // Using deadline as posted date for demo
    validThrough: vacancy.deadline,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'NGO',
      name: 'Rural Upliftment Women Association',
      sameAs: 'https://rwua.com.np',
      logo: 'https://rwua.com.np/images/logo/rwua-logo.png',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: vacancy.location,
        addressCountry: 'Nepal',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'NPR',
      value: {
        '@type': 'QuantitativeValue',
        value: 'Competitive',
        unitText: 'MONTH',
      },
    },
    qualifications: vacancy.tags.join(', '),
    responsibilities: vacancy.description,
    industry: 'Non-Profit Organization',
    occupationalCategory: vacancy.department,
  };

  const isExpired = new Date(vacancy.deadline) < new Date();
  const statusColor = vacancy.status === 'open' && !isExpired ? 'bg-green-500' : 'bg-red-500';
  const statusText = vacancy.status === 'open' && !isExpired ? 'Open' : 'Closed';

  return (
    <>
      {/* Dynamic SEO configuration for job vacancies */}
      <NextSeo
        // Dynamic title from vacancy position
        title={`${vacancy.position} - Join RWUA Team | Career Opportunities`}
        
        // Dynamic description from vacancy details
        description={`Join RWUA as ${vacancy.position} in ${vacancy.department}. ${vacancy.description.substring(0, 120)}... Apply by ${new Date(vacancy.deadline).toLocaleDateString()}.`}
        
        // Dynamic canonical URL for this vacancy
        canonical={`https://rwua.com.np/vacancy/${slug}`}
        
        // Open Graph configuration with dynamic content
        openGraph={{
          url: `https://rwua.com.np/vacancy/${slug}`,
          title: `${vacancy.position} - Join RWUA Team`,
          description: `Join RWUA as ${vacancy.position} in ${vacancy.department}. Make a difference in rural women empowerment in Nepal.`,
          type: 'website',
          images: [
            {
              url: vacancy.image || 'https://rwua.com.np/images/og/og-careers.jpg',
              width: 1200,
              height: 630,
              alt: `${vacancy.position} position at RWUA`,
              type: 'image/jpeg',
            },
            {
              url: 'https://rwua.com.np/images/og/og-team.jpg',
              width: 1200,
              height: 630,
              alt: 'Join RWUA Team - Career opportunities in Nepal',
              type: 'image/jpeg',
            },
          ],
        }}
        
        // Twitter Card with dynamic content
        twitter={{
          handle: '@rwuanepal',
          site: '@rwuanepal',
          cardType: 'summary_large_image',
        }}
        
        // Additional meta tags for job postings
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `${vacancy.tags.join(', ')}, RWUA careers, Nepal NGO jobs, ${vacancy.department} jobs, rural development careers, women empowerment jobs`,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            name: 'job:location',
            content: vacancy.location,
          },
          {
            name: 'job:department',
            content: vacancy.department,
          },
          {
            name: 'job:deadline',
            content: vacancy.deadline,
          },
          {
            name: 'job:status',
            content: vacancy.status,
          },
          // Bilingual meta tags for job postings
          ...getBilingualMetaTags(
            `${vacancy.position} - RWUA टोलीमा सामेल हुनुहोस्`,
            `${vacancy.department} मा ${vacancy.position} को रूपमा RWUA मा सामेल हुनुहोस्। नेपालमा ग्रामीण महिला सशक्तिकरणमा फरक पार्नुहोस्।`
          ),
        ]}
        
        // JSON-LD structured data for job posting
        additionalJsonLd={[
          jobPostingStructuredData,
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://rwua.com.np/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Careers',
                item: 'https://rwua.com.np/vacancy',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: vacancy.position,
                item: `https://rwua.com.np/vacancy/${slug}`,
              },
            ],
          },
        ]}
      />
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Job header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className={`${statusColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {statusText}
                </span>
                <span className="bg-core-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {vacancy.department}
                </span>
                <span className="text-gray-500 text-sm">
                  Deadline: {new Date(vacancy.deadline).toLocaleDateString()}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-core-blue mb-4 leading-tight">
                {vacancy.position}
              </h1>
              
              <div className="flex items-center gap-6 text-lg text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {vacancy.location}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {vacancy.department}
                </div>
              </div>
              
              <div className="flex gap-2 mb-6">
                {vacancy.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </header>
            
            {/* Job image */}
            {vacancy.image && (
              <div className="mb-8">
                <img 
                  src={vacancy.image} 
                  alt={vacancy.position}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
            
            {/* Job description */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-core-blue mb-4">Job Description</h2>
              <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                {vacancy.description}
              </div>
              
              <h3 className="text-xl font-bold text-core-blue mt-8 mb-4">About RWUA</h3>
              <p className="text-gray-700">
                Rural Upliftment Women Association (RWUA) has been empowering rural women 
                in Nepal since 1998. We focus on education, skill development, and sustainable 
                livelihoods to create lasting change in communities across Madhesh Province and beyond.
              </p>
              
              <h3 className="text-xl font-bold text-core-blue mt-8 mb-4">Why Join RWUA?</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Make a meaningful impact in rural communities</li>
                <li>Work with a dedicated team of professionals</li>
                <li>Opportunities for professional growth and development</li>
                <li>Competitive compensation and benefits</li>
                <li>Collaborative and inclusive work environment</li>
              </ul>
            </div>
            
            {/* Application section */}
            <div className="bg-gradient-to-r from-core-blue/5 to-impact-red/5 rounded-lg p-8 border-l-4 border-flash-yellow">
              <h3 className="text-2xl font-bold text-core-blue mb-4">
                {vacancy.status === 'open' && !isExpired ? 'Ready to Apply?' : 'Application Closed'}
              </h3>
              
              {vacancy.status === 'open' && !isExpired ? (
                <>
                  <p className="text-gray-700 mb-6">
                    Join our mission to empower rural women and transform communities across Nepal. 
                    Submit your application before the deadline.
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-impact-red text-white px-8 py-4 rounded-lg font-bold hover:bg-impact-red/90 transition-colors">
                      Apply Now
                    </button>
                    <button className="border-2 border-core-blue text-core-blue px-8 py-4 rounded-lg font-bold hover:bg-core-blue hover:text-white transition-colors">
                      Download Job Description
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Application deadline: {new Date(vacancy.deadline).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-700 mb-6">
                    This position is no longer accepting applications. Check our other 
                    career opportunities or sign up for job alerts.
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-core-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-core-blue/90 transition-colors">
                      View Open Positions
                    </button>
                    <button className="border-2 border-core-blue text-core-blue px-8 py-4 rounded-lg font-bold hover:bg-core-blue hover:text-white transition-colors">
                      Job Alerts
                    </button>
                  </div>
                </>
              )}
            </div>
            
            {/* Job footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Posted: {new Date(vacancy.deadline).toLocaleDateString()} • 
                  Department: {vacancy.department} • 
                  Location: {vacancy.location}
                </div>
                <div className="flex gap-4">
                  <button className="text-core-blue hover:text-impact-red transition-colors">
                    Share Position
                  </button>
                  <button className="text-core-blue hover:text-impact-red transition-colors">
                    View All Jobs
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}