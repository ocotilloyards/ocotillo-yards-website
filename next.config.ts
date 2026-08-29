import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: "/ocotillo-yards-website",
  assetPrefix: "/ocotillo-yards-website",
  trailingSlash: true,
};

export default nextConfig;
