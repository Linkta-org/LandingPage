/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static site generation
  images: {
    unoptimized: true, // Allows Next.js to export static images
  },
  experimental: {},
};

export default nextConfig;
