import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/shop",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
