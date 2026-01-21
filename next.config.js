/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // exportPathMap: () => {}
  swcMinify: true,
  webpack: (config) => {
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(woff|woff2)$/,
          type: 'asset/resource'
        },
      ],
    };
    return config;
  },
};
