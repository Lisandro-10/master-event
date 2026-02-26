/** @type {import('next').NextConfig} */

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || ''

// Safely extract hostname from CDN URL
function getCDNHostname() {
  if (!CDN_URL) return ''
  try {
    const url = new URL(CDN_URL)
    return url.hostname
  } catch {
    return CDN_URL.replace(/^https?:\/\//, '').split('/')[0]
  }
}

const cdnHostname = getCDNHostname()

const nextConfig = {
    images: {
        remotePatterns: cdnHostname ? [
            {
                protocol: 'https',
                hostname: cdnHostname,
                pathname: '/**',
            },
        ] : [],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000, // 1 year
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
};

export default nextConfig;
