/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: "cdn.sanity.io",
            protocol: "https",
            port: "",
          },
          {
            hostname: "avatars.githubusercontent.com", // Add this to handle GitHub avatar images
            protocol: "https",
            port: "",
          },
        ],
      },
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true
      },
      env: {
        NEXT_PUBLIC_SANITY_ID: process.env.NEXT_PUBLIC_SANITY_ID,
      },
};

export default nextConfig;
