/** @type {import('next').NextConfig} */

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || ''

const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: CDN_URL.replace('https://', ''),
            pathname: '/**',
        },
        ],
        formats: ['image/webp'],
        minimumCacheTTL: 31536000, // 1 año
    },

};

export default nextConfig;
