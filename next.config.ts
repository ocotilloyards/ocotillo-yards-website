import type { NextConfig } from "next";

const basePath = "/ocotillo-yards-website";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};

export default nextConfig;
