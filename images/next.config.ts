import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['image-bucket-mac.s3.ap-southeast-2.amazonaws.com'],
    remotePatterns: [new URL('https://www.gravatar.com/avatar/?d=mp'), new URL('https://www.rspcansw.org.au/wp-content/uploads/2025/02/cat-hero2b.png'), new URL('https://www.pumpkin.care/wp-content/uploads/2020/07/2467643531-scaled.jpeg')],
  },
}

export default nextConfig;
