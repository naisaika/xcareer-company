/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    output: 'export',
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

export default nextConfig;