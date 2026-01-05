import type { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact RWUA - Get in Touch for Partnerships & Support',
  description: 'Connect with RWUA for partnerships, volunteer opportunities, donations, or program inquiries. Located in Madhesh Province, Nepal. Phone: +977-9854035079. Join our mission to empower rural women.',
  keywords: 'contact RWUA, Nepal NGO contact, women empowerment partnership, volunteer Nepal, donate rural development, Madhesh Province contact',
  openGraph: {
    title: 'Contact RWUA - Get in Touch for Partnerships & Support',
    description: 'Connect with RWUA for partnerships, volunteer opportunities, donations, or program inquiries. Join our mission to empower rural women in Nepal.',
    url: 'https://rwua.com.np/contact',
    type: 'website',
    images: [
      {
        url: 'https://rwua.com.np/images/og/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact RWUA - Partnership and support opportunities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rwuanepal',
    creator: '@rwuanepal',
    title: 'Contact RWUA - Get in Touch for Partnerships & Support',
    description: 'Connect with RWUA for partnerships, volunteer opportunities, donations, or program inquiries.',
    images: ['https://rwua.com.np/images/og/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://rwua.com.np/contact',
  },
};

export default function Contact() {
  return <ContactPage />;
}