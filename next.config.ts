import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds a plain static site in out/ for GitHub Pages
// (https://tqhuyen.github.io); without it the Vercel build is unchanged.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = staticExport
  ? { output: "export", trailingSlash: true }
  : {
      cacheComponents: true,
      partialPrefetching: true,
    };

export default nextConfig;
