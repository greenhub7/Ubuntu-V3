/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack configuration for Windows compatibility
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Windows-specific file watching configuration
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
        ignored: ['**/node_modules/**', '**/.git/**', '**/.next/**'],
      }
    }
    return config
  },
  
  // Turbopack configuration to silence warnings
  turbopack: {},
  
  // Reduce concurrent operations
  experimental: {
    workerThreads: false,
  },
}

module.exports = nextConfig