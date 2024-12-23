/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
trailingSlash: true,
// output: 'export',
// basePath: "/xcareercompany", // サイトが配置されるサブディレクトリを指定
// assetPrefix: "https://www-dev.factorx.jp/xcareercompany", // 静的ファイルのベースパスを指定
images: {
  unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-1.amazonaws.com',
        port: '',
        pathname: '/xcareercompany/**',
      },
    ],
  },
};

// module.exports = nextConfig;

export default nextConfig;