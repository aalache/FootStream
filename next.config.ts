import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      new URL('http://103.176.90.154/picons/logos/**'),
      new URL('https://cdn-icons-png.flaticon.com/**'),
      new URL('http://103.176.90.118/picons/logos/**'),
    ]
  }
};

export default nextConfig;
