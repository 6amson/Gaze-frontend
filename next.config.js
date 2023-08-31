/** @type {import('next').NextConfig} */

const { hostname } = require("os");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
};

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
