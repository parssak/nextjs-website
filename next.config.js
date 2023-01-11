/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/browser-engine",
        destination: "https://parssak.github.io/browser-engine",
        permanent: false,
        basePath: false
      }
    ];
  }
};

module.exports = nextConfig;
