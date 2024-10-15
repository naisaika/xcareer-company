/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.ap-northeast-1.amazonaws.com', // S3のホスト名
                port: '',
                pathname: '/xcareercompany/**', // パス
            },
        ],
    },
};

export default nextConfig;