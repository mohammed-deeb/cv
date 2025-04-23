/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: '/cv',
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig