/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   outputStandalone: true,
  // },
  output: "export",
};

module.exports = nextConfig;
