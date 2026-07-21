import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No basePath — homepage is /easy-and-simple-tree-drawing
  // Laragon uses Apache proxy: /new1/* → http://127.0.0.1:3000/*
  poweredByHeader: false,
  compress: true,
  // WordPress-style postname permalinks: /%postname%/
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 defaults to qualities:[75] only — other q= values 400 and break images
    qualities: [60, 70, 72, 75, 80],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // Old learning-path prefix → postname
      {
        source: "/tutorial-step/:slug",
        destination: "/:slug/",
        permanent: true,
      },
      {
        source: "/tutorial-step/:slug/",
        destination: "/:slug/",
        permanent: true,
      },
      // Common alias
      {
        source: "/terms",
        destination: "/terms-and-conditions/",
        permanent: true,
      },
      {
        source: "/terms/",
        destination: "/terms-and-conditions/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
