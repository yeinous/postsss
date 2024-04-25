/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "/yeinous" : "",
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
