import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // Set basePath for GitHub Pages deployment
  // If GITHUB_PAGES_BASE_PATH is set, use it; otherwise empty (for custom domain or local dev)
  basePath: process.env.GITHUB_PAGES_BASE_PATH || '',
};

export default withMDX(config);
