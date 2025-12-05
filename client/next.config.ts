import { Environment } from "@avalon/shared";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SERVER_PORT: `${Environment.getPort()}`,
    NEXT_PUBLIC_SUPABASE_URL: Environment.getSupabaseURL(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: Environment.getSupabaseAnonKey(),
    NEXT_PUBLIC_WEBSOCKET_URL: Environment.getWebSocketURL(),
  },
};

export default nextConfig;
