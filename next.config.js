/** @type {import('next').NextConfig} */

const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

const nextConfig = {
  distDir: "build",
};

module.exports = {
  nextConfig,
  reactStrictMode: true,
  exportPathMap: () => {},
  swcMinify: true,
  output: 'export',
  assetPrefix: isGithubPages ? '/website-v2-vercel/' : '',
  basePath: isGithubPages ? '/website-v2-vercel' : '',
}
