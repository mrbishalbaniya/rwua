import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ModernNavbar from "@/components/ModernNavbar";
import Footer from "@/components/Footer";
import { organizationSchema } from '@/lib/seo.config';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RWUA - Rural Upliftment Women Association",
  description: "Empowering rural women through education, skill development, and sustainable livelihood opportunities in Nepal since 1998.",
  keywords: "rural development, women empowerment, education, skill development, NGO, Nepal, community development, sustainable livelihoods, child rights, health programs",
  authors: [{ name: "RWUA Team" }],
  openGraph: {
    title: "RWUA - Rural Upliftment Women Association",
    description: "Empowering rural women through education, skill development, and sustainable livelihood opportunities in Nepal since 1998.",
    type: "website",
    locale: "en_US",
    url: "https://rwua.com.np/",
    siteName: "RWUA - Rural Upliftment Women Association",
    images: [
      {
        url: "https://rwua.com.np/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "RWUA - Empowering Rural Women in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rwuanepal",
    creator: "@rwuanepal",
    title: "RWUA - Rural Upliftment Women Association",
    description: "Empowering rural women through education, skill development, and sustainable livelihood opportunities in Nepal since 1998.",
    images: ["https://rwua.com.np/images/og/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0100FA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Organization structured data for enhanced search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://rwua.com.np" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" type="image/png" href="/images/icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/images/icons/favicon-16x16.png" sizes="16x16" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional meta tags */}
        <meta name="author" content="RWUA - Rural Upliftment Women Association" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Nepal" />
        <meta name="organization" content="Rural Upliftment Women Association" />
        <meta name="classification" content="Non-Profit Organization" />
      </head>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning={true}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-rwua-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
          Skip to main content
        </a>
        <ModernNavbar />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
