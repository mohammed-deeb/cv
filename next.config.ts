/**
 * @type {import('next').NextConfig}
 */

const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProduction ? 'https://mohammed-deeb.github.io/cv/' : "/",
  assetPrefix: isProduction ? 'https://mohammed-deeb.github.io/cv/' : "/",
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig