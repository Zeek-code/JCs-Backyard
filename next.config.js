/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages project sites, uncomment and set basePath:
  // basePath: '/JCs-Backyard',
  // For GitHub Pages user/organization sites (username.github.io), leave basePath empty or omit
  trailingSlash: true,
}

module.exports = nextConfig

