/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tailwindui.com",
      "localhost",
      "localhost:3001",
      "localhost:44390",
    ], // Add the hostname(s) here
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "localhost",
      port: "44390",
      pathname: "/uploads/**",
    },
  ],
};

export default nextConfig;
