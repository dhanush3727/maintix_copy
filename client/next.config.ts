import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://maintix-copy.onrender.com/api/:path*",
      },
    ];
  },

  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "*/dxzdsnaye/**",
      },
    ],
  },
  turbopack: {
    root: __dirname, // why is this needed? because turbopack needs to know the root directory of the project to resolve paths correctly. It helps in optimizing the build process and managing dependencies effectively.
  },
};

export default nextConfig;
