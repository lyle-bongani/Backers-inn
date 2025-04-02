/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 