import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d27735ao2xxhhe.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.adecco.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.intracen.org",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/#skills",
        permanent: true,
      },
      {
        source: "/our-team",
        destination: "/#experience",
        permanent: true,
      },
      {
        source: "/family-card",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

