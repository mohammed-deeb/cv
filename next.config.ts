/**
 * @type {import('next').NextConfig}
 */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProduction ? '/cv' : '',
  assetPrefix: isProduction ? '/cv' : '',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig