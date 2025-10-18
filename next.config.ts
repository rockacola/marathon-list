import type { NextConfig } from "next";
import { basePath } from "./utils/getBasePath";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
