import { DefaultSeoProps } from 'next-seo';

/**
 * Global SEO configuration for RWUA website
 * This configuration provides default SEO settings that will be applied to all pages
 * unless overridden by page-specific NextSeo components
 */
export const defaultSEOConfig: DefaultSeoProps = {
  // Default page title - appears in browser tab and search results
  title: 'RWUA - Rural Upliftment Women Association',
  
  // Default meta description - appears in search results snippet (150-160 characters optimal)
  description: 'Empowering rural women through education, skill development, and sustainable livelihood opportunities in Nepal since 1998.',
  
  // Canonical URL - helps prevent duplicate content issues and establishes preferred URL
  canonical: 'https://rwua.com.np/',
  
  // Open Graph configuration for social media sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rwua.com.np/',
    siteName: 'RWUA - Rural Upliftment Women Association',
    title: 'RWUA - Rural Upliftment Women Association',
    description: 'Empowering rural women through education, skill development, and sustainable livelihood opportunities in Nepal since 1998.',
    images: [
      {
        url: 'https://rwua.com.np/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'RWUA - Empowering Rural Women in Nepal',
        type: 'image/jpeg',
      },
      {
        url: 'https://rwua.com.np/images/og/og-logo.jpg',
        width: 800,
        height: 600,
        alt: 'RWUA Logo - Rural Upliftment Women Association',
        type: 'image/jpeg',
      },
    ],
  },
  
  // Twitter Card configuration for Twitter sharing
  twitter: {
    handle: '@rwuanepal',
    site: '@rwuanepal',
    cardType: 'summary_large_image',
  },
  
  // Additional meta tags for enhanced SEO
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'author',
      content: 'RWUA - Rural Upliftment Women Association',
    },
    {
      name: 'keywords',
      content: 'rural development, women empowerment, Nepal NGO, education, skill development, community development, sustainable livelihoods, child rights, health programs',
    },
    {
      name: 'theme-color',
      content: '#0100FA', // RWUA core blue brand color
    },
    {
      name: 'msapplication-TileColor',
      content: '#0100FA',
    },
    {
      name: 'language',
      content: 'English',
    },
    {
      name: 'geo.region',
      content: 'NP', // Nepal country code
    },
    {
      name: 'geo.placename',
      content: 'Nepal',
    },
    {
      name: 'organization',
      content: 'Rural Upliftment Women Association',
    },
    {
      name: 'classification',
      content: 'Non-Profit Organization',
    },
  ],
  
  // Additional link tags for favicons and app icons
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/images/icons/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/images/icons/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/images/icons/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
  ],
};

/**
 * Organization structured data schema for enhanced search results
 * This helps search engines understand RWUA as an organization
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Rural Upliftment Women Association',
  alternateName: 'RWUA',
  url: 'https://rwua.com.np',
  logo: 'https://rwua.com.np/images/logo/rwua-logo.png',
  description: 'Empowering rural women through education, skill development, and sustainable livelihood opportunities in Nepal since 1998.',
  foundingDate: '1998',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Nepal',
    addressRegion: 'Madhesh Province',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+977-9854035079',
    contactType: 'customer service',
    availableLanguage: ['English', 'Nepali'],
  },
  sameAs: [
    'https://www.facebook.com/rwuanepal',
    'https://twitter.com/rwuanepal',
    'https://www.linkedin.com/company/rwuanepal',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Nepal',
  },
  knowsAbout: [
    'Women Empowerment',
    'Rural Development',
    'Education',
    'Skill Development',
    'Community Development',
    'Child Rights',
    'Health Programs',
    'Sustainable Livelihoods',
  ],
};

/**
 * Bilingual meta tags helper for pages with Nepali content
 */
export const getBilingualMetaTags = (nepaliTitle?: string, nepaliDescription?: string) => [
  ...(nepaliTitle ? [{
    name: 'title',
    content: nepaliTitle,
    lang: 'ne',
  }] : []),
  ...(nepaliDescription ? [{
    name: 'description',
    content: nepaliDescription,
    lang: 'ne',
  }] : []),
  {
    name: 'language',
    content: 'en,ne',
  },
];