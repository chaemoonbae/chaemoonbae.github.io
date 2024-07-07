/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML 내보내기를 위해 필요
  images: {
    unoptimized: true,  // GitHub Pages에서 이미지 최적화를 지원하지 않으므로 필요
  },
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md/,
      use: "raw-loader",
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
