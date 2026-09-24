/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/KhayaDirect",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
