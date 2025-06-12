import type { NextConfig } from "next";

const nextConfig: NextConfig =
  {
    turbopack:
      {
        // enabled: true,
        rules:
          {
            "*.svg":
              {
                loaders:
                  [
                    "@svgr/webpack",
                  ],
                as: "*.js",
              },
          },
      },
  };

export default nextConfig;
