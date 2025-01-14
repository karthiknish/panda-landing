/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "panda-landing.vercel.app",
      },
    ],
  },
};

export default nextConfig;
