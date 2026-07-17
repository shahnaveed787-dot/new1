import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local SVG illustrations are already optimized vector assets
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
