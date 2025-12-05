"use client";
import { Environment } from "@avalon/shared";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import styles from "./index.module.css";
import WebSocketMessageEditor from "./WebSocketMessageEditor";
import WebSocketMessageList from "./WebSocketMessageList";

const WebSocketMessaging = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>(
    ConnectionStatus.DISCONNECTED
  );

  const addMessageToList = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  useEffect(() => {
    const recieveMessage = (message: string) => {
      addMessageToList({
        isFromUser: false,
        body: message,
        timestamp: new Date(),
      });
    };

    const handleConnectionError = () => {
      socket.disconnect();
      setConnectionStatus(ConnectionStatus.DISCONNECTED);
      alert("Could not connect to the WebSocket server!");
    };

    const socketListeners: Listeners = {
      connect: () => setConnectionStatus(ConnectionStatus.CONNECTED),
      disconnect: () => setConnectionStatus(ConnectionStatus.DISCONNECTED),
      message: recieveMessage,
      connect_error: () => handleConnectionError(),
    };

    Object.keys(socketListeners).forEach((eventName) => {
      socket.on(eventName, socketListeners[eventName]);
    });

    return () => {
      Object.keys(socketListeners).forEach((eventName) => {
        socket.off(eventName, socketListeners[eventName]);
      });
    };
  }, []);

  const sendMessage = (message: string) => {
    addMessageToList({
      isFromUser: true,
      body: message,
      timestamp: new Date(),
    });
    socket.send(message);
  };

  const getConnectionIndicatorClassName = (): string => {
    const getColorClassName = (): string => {
      switch (connectionStatus) {
        case ConnectionStatus.CONNECTED:
          return styles.connectionIndicatorConnected;
        case ConnectionStatus.CONNECTING:
          return styles.connectionIndicatorConnecting;
        case ConnectionStatus.DISCONNECTED:
          return styles.connectionIndicatorDisconnected;
      }
    };

    return `${styles.connectionIndicator} ${getColorClassName()}`;
  };

  const getConnectButtonText = (): string => {
    switch (connectionStatus) {
      case ConnectionStatus.CONNECTED:
        return "Disconnect";
      case ConnectionStatus.CONNECTING:
        return "Connecting...";
      case ConnectionStatus.DISCONNECTED:
        return "Connect";
    }
  };

  const toggleSocketConnection = (): void => {
    switch (connectionStatus) {
      case ConnectionStatus.CONNECTING:
        setConnectionStatus(ConnectionStatus.DISCONNECTED);
      case ConnectionStatus.CONNECTED:
        socket.disconnect();
        break;
      case ConnectionStatus.DISCONNECTED:
        setConnectionStatus(ConnectionStatus.CONNECTING);
        socket.connect();
    }
  };

  const redirectToDiscordOAuth = (): void => {
    supabase.auth.signInWithOAuth({
      provider: "discord",
      options: { redirectTo: window.location.href },
    });
  };

  const testSupabaseAuthStatus = async (): Promise<void> => {
    const userResponse = await supabase.auth.getUser();

    if (userResponse.error) {
      alert("No Supabase session found!");
      return;
    }

    const userData = userResponse.data.user.user_metadata;
    const userDataString = JSON.stringify(userData, null, 1);

    alert(`Supabase user session data:\n${userDataString}`);
  };

  const clearAllCookies = async (): Promise<void> => {
    const cookies = await cookieStore.getAll();
    cookies.forEach((cookie) => cookie.name && cookieStore.delete(cookie.name));
    alert("All cookies have been cleared!");
  };

  return (
    <>
      <div>
        <div className={styles.devButtonRow}>
          <div className={getConnectionIndicatorClassName()} />
          <button
            className={styles.devButton}
            onClick={toggleSocketConnection}
            title="WebSocket server connection toggle"
          >
            {getConnectButtonText()}
          </button>
          <button
            className={styles.devButton}
            onClick={redirectToDiscordOAuth}
            title="Authenticate through Discord"
          >
            Discord Sign-In
          </button>
          <button
            className={styles.devButton}
            onClick={testSupabaseAuthStatus}
            title="Make a Supabase auth user request"
          >
            Supabase Test
          </button>
          <button
            className={styles.devButton}
            onClick={clearAllCookies}
            title="Clear all stored JS cookies"
          >
            Clear Cookies
          </button>
        </div>
      </div>
      <WebSocketMessageEditor
        sendMessage={sendMessage}
        disabled={connectionStatus !== ConnectionStatus.CONNECTED}
      />
      <WebSocketMessageList messages={messages} />
    </>
  );
};

type Listeners = {
  [eventName: string]: (...args: string[]) => void;
};

export type Message = {
  isFromUser: boolean;
  body: string;
  timestamp: Date;
};

enum ConnectionStatus {
  DISCONNECTED,
  CONNECTING,
  CONNECTED,
}

const socket = io(Environment.getWebSocketURL(), {
  autoConnect: false,
  withCredentials: true,
});

const supabase = createBrowserClient(
  Environment.getSupabaseURL(),
  Environment.getSupabaseAnonKey()
);

export default WebSocketMessaging;
