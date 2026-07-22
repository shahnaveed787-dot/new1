import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site home is domain root (/). Published pages use /%postname%/.
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 70, 72, 75, 80],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/easy-and-simple-tree-drawing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/easy-and-simple-tree-drawing/",
        destination: "/",
        permanent: true,
      },
      // Unpublished legacy paths → home (no coming-soon URLs)
      {
        source: "/tutorial-step/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/:slug*",
        destination: "/",
        permanent: true,
      },
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
