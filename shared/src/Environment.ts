import dotenv from "dotenv";

dotenv.config({
  path: "../shared/.env.local",
  quiet: true,
});

export default class Environment {
  // MARK: - CLIENT-PUBLIC

  /**
   * Port number for the websocket server
   */
  static getPort = (): number => {
    const portString = process.env.NEXT_PUBLIC_SERVER_PORT;

    if (!portString) {
      throw "NEXT_PUBLIC_SERVER_PORT not set!";
    }

    const port = parseInt(portString);

    if (Number.isNaN(port)) {
      throw "NEXT_PUBLIC_SERVER_PORT not an integer!";
    }

    return port;
  };

  /**
   * Supabase URL used to identify the target Supabase instance
   */
  static getSupabaseURL = (): string => {
    const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;

    if (!supabaseURL) {
      throw "NEXT_PUBLIC_SUPABASE_URL not set!";
    }

    return supabaseURL;
  };

  /**
   * Supabase key used to connect as an anonymous user
   */
  static getSupabaseAnonKey = (): string => {
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseAnonKey) {
      throw "NEXT_PUBLIC_SUPABASE_ANON_KEY not set!";
    }

    return supabaseAnonKey;
  };

  /**
   * URL address of the WebSocket server
   */
  static getWebSocketURL = (): string => {
    const webSocketURL = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

    if (!webSocketURL) {
      throw "NEXT_PUBLIC_WEBSOCKET_URL not set";
    }

    return webSocketURL;
  };

  // MARK: - SERVER-ONLY

  /**
   * URL address of the web client
   */
  static getClientURL = (): string => {
    const clientURL = process.env.CLIENT_URL;

    if (!clientURL) {
      throw "CLIENT_URL not set";
    }

    return clientURL;
  };
}
