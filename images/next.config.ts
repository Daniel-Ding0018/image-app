import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://www.gravatar.com/avatar/?d=mp'), new URL('https://www.rspcansw.org.au/wp-content/uploads/2025/02/cat-hero2b.png')],
  },
}

export default nextConfig;
