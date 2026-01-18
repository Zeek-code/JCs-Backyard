/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages project sites, set basePath:
  // basePath: '/JCs-Backyard', // Commented out for local development
  // For GitHub Pages user/organization sites (username.github.io), set basePath to '' or omit
  trailingSlash: true,
}

module.exports = nextConfig

