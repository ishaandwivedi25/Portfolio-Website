const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repository = process.env.GITHUB_REPOSITORY?.replace(/.*\//, '') || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: isGithubActions ? `/${repository}` : '',
  assetPrefix: isGithubActions ? `/${repository}/` : ''
};

export default nextConfig;
