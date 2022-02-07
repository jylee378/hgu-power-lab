/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://jylee378.github.io/hgu-power-lab/"
      : "",
}

module.exports = nextConfig
