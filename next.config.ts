/**
 * @type {import('next').NextConfig}
 */

// const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/cv',
  assetPrefix: '/cv/',
  distDir: 'out',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mohammed-deeb.github.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
};
 
module.exports = nextConfig