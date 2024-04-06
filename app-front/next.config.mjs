/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindui.com", "localhost:3001"], // Add the hostname(s) here
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/uploads/images/**",
      },
    ],
  },
};

export default nextConfig;
