/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages project sites, set basePath:
  basePath: '/JCs-Backyard',
  // For GitHub Pages user/organization sites (username.github.io), set basePath to '' or omit
  trailingSlash: true,
}

module.exports = nextConfig

