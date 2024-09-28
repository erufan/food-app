/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "0c4mywvftvgjmbwh.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
