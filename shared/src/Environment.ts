import dotenv from "dotenv";

export default class Environment {
  static current = new Environment();

  /**
   * Port number for the websocket server
   */
  public readonly port: number;

  private constructor() {
    dotenv.config({
      path: "../shared/.env.local",
      quiet: true,
    });

    this.port = this.getPort();
  }

  private getPort = (): number => {
    const portVar = process.env.NEXT_PUBLIC_SERVER_PORT;

    if (!portVar) {
      throw "NEXT_PUBLIC_SERVER_PORT not set!";
    }

    const port = parseInt(portVar);

    if (Number.isNaN(port)) {
      throw "NEXT_PUBLIC_SERVER_PORT not an integer!";
    }

    return port;
  };
}
