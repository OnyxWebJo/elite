/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/elite',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
