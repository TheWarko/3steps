import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.(test|cy)\.(js|jsx|ts|tsx)$/,
  //     use: "ignore-loader",
  //   });
  //   return config;
  // },
  // assetPrefix: "",
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
