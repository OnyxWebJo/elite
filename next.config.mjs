/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel handles optimization and routing automatically
  images: {
    unoptimized: true, // Keeping this for now for simplicity
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
