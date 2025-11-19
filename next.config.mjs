/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ["i.ibb.co.com"], // external images allowed
  },
};

export default nextConfig;
