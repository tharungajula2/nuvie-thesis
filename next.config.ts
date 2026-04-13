import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/strategy', destination: '/how-i-can-help', permanent: true },
      { source: '/economics', destination: '/how-i-can-help', permanent: true },
      { source: '/channels', destination: '/products', permanent: true },
      { source: '/growth', destination: '/products', permanent: true },
      { source: '/occasions', destination: '/products', permanent: true },
      { source: '/labs/packaging', destination: '/how-i-can-help', permanent: true },
      { source: '/labs/flavor', destination: '/products', permanent: true },
      { source: '/labs/manufacturing', destination: '/how-i-can-help', permanent: true },
      { source: '/labs/r-and-d', destination: '/how-i-can-help', permanent: true },
      { source: '/labs/expansion', destination: '/how-i-can-help', permanent: true },
      { source: '/products/:slug', destination: '/products', permanent: true },
    ];
  },
};

export default nextConfig;
