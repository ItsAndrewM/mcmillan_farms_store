/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.swell.store",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/product",
        destination: "/collections",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
