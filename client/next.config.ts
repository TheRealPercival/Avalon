import { Environment } from "@avalon/shared";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SERVER_PORT: `${Environment.current.port}`,
  },
};

export default nextConfig;
