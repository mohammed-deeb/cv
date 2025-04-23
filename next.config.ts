/**
 * @type {import('next').NextConfig}
 */

const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProduction ? '/cv' : '',
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig