/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  basePath: '/NicksBurritos',
  assetPrefix: '/NicksBurritos/',
  output: 'export',
}

module.exports = nextConfig 