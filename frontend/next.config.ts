import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL, // No NEXT_PUBLIC_ needed here
  },
};

export default nextConfig;
