import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all image sources; adjust domains as needed for production
    remotePatterns: [],
  },
};

export default nextConfig;
