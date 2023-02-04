/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
  disable:process.env.NODE_ENV === 'development'
});

const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
})

module.exports = nextConfig