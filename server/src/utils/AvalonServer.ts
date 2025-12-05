import { Environment } from "@avalon/shared";
import { createServerClient } from "@supabase/ssr";
import { parse, serialize } from "cookie";
import { Server, Socket } from "socket.io";

export default class AvalonServer {
  private server: Server;

  constructor() {
    const port = Environment.getPort();

    this.server = new Server(port, {
      cors: {
        origin: Environment.getClientURL(),
        credentials: true,
      },
    });

    console.log(`[SERVER] - Server live on port ${port}.`);

    this.server.engine.on("headers", this.onHeaders);
    this.server.on("connect", this.onConnect);
  }

  private onHeaders = async (headers: any, request: any): Promise<void> => {
    const cookieString = request.headers.cookie;
    if (!cookieString) {
      return;
    }

    createServerClient(
      Environment.getSupabaseURL(),
      Environment.getSupabaseAnonKey(),
      {
        cookies: {
          getAll: () => {
            const parsedCookies = parse(cookieString);
            const cookies = Object.keys(parsedCookies).map((name) => ({
              name,
              value: `${parsedCookies[name]}`,
            }));

            return cookies;
          },
          setAll: (cookiesToSet) => {
            const cookies = cookiesToSet.map((cookie) =>
              serialize(cookie.name, cookie.value, cookie.options)
            );
            headers["set-cookie"] = cookies;
          },
        },
      }
    );
  };

  private onConnect = (socket: Socket): void => {
    console.log(`[SOCKET: ${socket.id}] - Socket connected.`);
    this.validateSupabaseSession(socket);
  };

  private validateSupabaseSession = async (socket: Socket): Promise<void> => {
    const cookieString = socket.handshake.headers.cookie ?? "";

    const supabase = createServerClient(
      Environment.getSupabaseURL(),
      Environment.getSupabaseAnonKey(),
      {
        cookies: {
          getAll: () => {
            const parsedCookies = parse(cookieString);
            const cookies = Object.keys(parsedCookies).map((name) => ({
              name,
              value: `${parsedCookies[name]}`,
            }));

            return cookies;
          },
          setAll: () => {},
        },
      }
    );

    const userResponse = await supabase.auth.getUser();

    if (userResponse.error) {
      socket.send("Unknown user. Terminating connection.");
      socket.disconnect(true);
      console.log(
        `[${socket.id}]: Supabase session invalid. Socket connection terminated.`
      );
      return;
    }

    const discordName =
      userResponse.data.user.user_metadata["custom_claims"]["global_name"] ||
      "discord user";

    console.log(
      `[USER: ${discordName}] - Session found for socket "${socket.id}".`
    );

    socket.send(`Greetings, ${discordName}.`);

    socket.on("message", () => {
      socket.send(`Thanks, ${discordName}.`);
    });
  };
}
