/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://jylee378.github.io/hgu-power-lab/"
      : "",
  images: {
    loader: 'akamai',
    path: '/',
  }
}

module.exports = nextConfig
