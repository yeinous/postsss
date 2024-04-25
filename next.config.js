/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/yeinous",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
