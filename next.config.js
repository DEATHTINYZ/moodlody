/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')
const isDev = process.env.NODE_ENV !== 'production'
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: isDev,
  exclude: [
    // add buildExcludes here
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith('server/') ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true
      }
      if (isDev && !asset.name.startsWith('static/runtime/')) {
        return true
      }
      return false
    }
  ]
})

const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
})

module.exports = nextConfig
