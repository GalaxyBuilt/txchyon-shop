import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/shop",
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
