module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: config => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
};
