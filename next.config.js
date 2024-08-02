/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "standalone",
  basePath: isProd ? "/postsss" : "",
  assetPrefix: isProd ? "/postsss/" : "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    reactCompiler: true,
  },
};

module.exports = nextConfig;
