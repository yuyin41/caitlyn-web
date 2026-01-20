import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Fixes image issues if any
  },
  // No 'output: export' - Vercel handles Next.js natively
  // No 'basePath' - Homepage should be at root '/'
};

export default nextConfig;
