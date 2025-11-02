import { Server } from "socket.io";

export default class AvalonServer {
  private server: Server;

  constructor(port: number) {
    this.server = new Server(port);
    console.log(`Server live on port: ${port}`);
  }
}
