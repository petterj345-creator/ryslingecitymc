/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the file-tracing root to this project so Next doesn't pick up a
  // parent lockfile (matters for correct bundling on Vercel).
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
