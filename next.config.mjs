/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel handles optimization and routing automatically
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
