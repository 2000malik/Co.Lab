/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    ENV: process.env.ENV,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
  },
};

module.exports = nextConfig;
