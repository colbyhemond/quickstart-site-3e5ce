/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // false to prevent double render
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '/images/*/*/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
