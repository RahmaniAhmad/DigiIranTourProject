/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "localhost:3001"], // Add the hostname(s) here
  },
};

export default nextConfig;
