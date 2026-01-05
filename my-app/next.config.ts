import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rwua.com.np',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optimize for development
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
  // Remove webpack fallback config as it's not needed for most cases
  // and can slow down compilation
};

export default nextConfig;
