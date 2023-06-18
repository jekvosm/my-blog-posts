/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/jekvosm/blog-posts-for-project/master/images/**',
      },
    ],
  },
}

module.exports = nextConfig
