/**
 * SEO utility functions for RWUA website
 * These functions help generate dynamic SEO content and structured data
 */

import { NewsArticle, SuccessStory, Vacancy } from './data';

/**
 * Generate slug from title for URL-friendly paths
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Truncate text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

/**
 * Generate Open Graph image URL for dynamic content
 */
export function generateOGImageUrl(
  title: string,
  type: 'news' | 'story' | 'vacancy' | 'default' = 'default'
): string {
  const baseUrl = 'https://rwua.com.np/images/og/';
  const encodedTitle = encodeURIComponent(title);
  
  // In a real implementation, you might use a service like Vercel OG or generate images dynamically
  switch (type) {
    case 'news':
      return `${baseUrl}og-news-${generateSlug(title)}.jpg`;
    case 'story':
      return `${baseUrl}og-story-${generateSlug(title)}.jpg`;
    case 'vacancy':
      return `${baseUrl}og-vacancy-${generateSlug(title)}.jpg`;
    default:
      return `${baseUrl}og-default.jpg`;
  }
}

/**
 * Generate structured data for news articles
 */
export function generateNewsArticleStructuredData(article: NewsArticle, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    image: [article.image],
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://rwua.com.np',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RWUA - Rural Upliftment Women Association',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rwua.com.np/images/logo/rwua-logo.png',
        width: 200,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rwua.com.np/news/${slug}`,
    },
    articleSection: article.category,
    keywords: article.tags.join(', '),
    wordCount: article.description.split(' ').length,
    inLanguage: 'en',
    isAccessibleForFree: true,
    copyrightHolder: {
      '@type': 'Organization',
      name: 'RWUA - Rural Upliftment Women Association',
    },
    copyrightYear: new Date(article.date).getFullYear(),
  };
}

/**
 * Generate structured data for success stories
 */
export function generateSuccessStoryStructuredData(story: SuccessStory, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.title,
    description: truncateText(story.description, 160),
    image: [story.image],
    datePublished: story.date,
    dateModified: story.date,
    author: {
      '@type': 'Organization',
      name: story.author,
      url: 'https://rwua.com.np',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RWUA - Rural Upliftment Women Association',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rwua.com.np/images/logo/rwua-logo.png',
        width: 200,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rwua.com.np/success-story/${slug}`,
    },
    articleSection: story.category,
    keywords: story.tags.join(', '),
    about: {
      '@type': 'Thing',
      name: 'Women Empowerment',
      description: 'Rural women empowerment and community development in Nepal',
    },
    mentions: [
      {
        '@type': 'Place',
        name: 'Nepal',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.3949,
          longitude: 84.1240,
        },
      },
    ],
    inLanguage: 'en',
    isAccessibleForFree: true,
  };
}

/**
 * Generate structured data for job postings
 */
export function generateJobPostingStructuredData(vacancy: Vacancy, slug: string) {
  const isExpired = new Date(vacancy.deadline) < new Date();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: vacancy.position,
    description: vacancy.description,
    identifier: {
      '@type': 'PropertyValue',
      name: 'RWUA Job ID',
      value: vacancy.id,
    },
    datePosted: vacancy.deadline, // In real app, use actual posting date
    validThrough: vacancy.deadline,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'NGO',
      name: 'Rural Upliftment Women Association',
      sameAs: 'https://rwua.com.np',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rwua.com.np/images/logo/rwua-logo.png',
        width: 200,
        height: 60,
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Nepal',
        addressRegion: 'Madhesh Province',
      },
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
    workHours: 'Full-time',
    jobBenefits: [
      'Health insurance',
      'Professional development opportunities',
      'Meaningful work environment',
      'Competitive salary',
    ],
    url: `https://rwua.com.np/vacancy/${slug}`,
    applicationDeadline: vacancy.deadline,
    jobLocationType: 'OnSite',
    ...(isExpired && { jobPostingStatus: 'Expired' }),
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Generate FAQ structured data for pages with common questions
 */
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate meta keywords from tags and content
 */
export function generateMetaKeywords(
  baseTags: string[],
  contentTags: string[] = [],
  location: string = 'Nepal'
): string {
  const allTags = [
    ...baseTags,
    ...contentTags,
    'RWUA',
    'rural development',
    'women empowerment',
    location,
    'NGO',
    'community development',
  ];
  
  // Remove duplicates and join
  return [...new Set(allTags)].join(', ');
}

/**
 * Format date for meta tags and structured data
 */
export function formatDateForMeta(dateString: string): string {
  return new Date(dateString).toISOString();
}

/**
 * Generate social media sharing URLs
 */
export function generateSocialShareUrls(url: string, title: string, description: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=rwuanepal`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };
}