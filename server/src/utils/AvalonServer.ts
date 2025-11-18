import { Server, Socket } from "socket.io";

export default class AvalonServer {
  private server: Server;

  constructor(port: number) {
    this.server = new Server(port);
    console.log(`Server live on port: ${port}`);

    this.server.on("connect", this.onConnect);

    process.on("SIGINT", () => {
      this.server.close();
      console.log("Server has closed");
    });
  }

  private onConnect = (socket: Socket): void => {
    socket.on("disconnect", () => this.onDisconnect(socket));

    const cookieString = socket.handshake.headers.cookie;

    if (!cookieString) {
      console.log("No cookies found!");
      return;
    }

    const cookies = cookieString.split("; ").map((pair) => {
      const [name, value] = pair.split("=");

      return {
        name,
        value,
      };
    });

    console.log("Cookies:", cookies);
  };

  private onDisconnect = (socket: Socket): void => {
    console.log(`\nThe user left! ${socket.handshake.address}`);
  };
}
