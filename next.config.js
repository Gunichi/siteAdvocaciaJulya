module.exports = {
  webpack5: true,
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}