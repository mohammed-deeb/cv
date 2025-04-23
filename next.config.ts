/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: 'https://mohammed-deeb.github.io/cv',
  assetPrefix: 'https://mohammed-deeb.github.io/cv/',
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig