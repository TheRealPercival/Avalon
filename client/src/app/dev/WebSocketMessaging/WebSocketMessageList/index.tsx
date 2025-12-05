import styles from "./index.module.css";
import { Message } from "..";

const WebSocketMessageList = ({ messages }: { messages: Message[] }) => {
  const messageList = messages
    .sort((a, b) => {
      return a.timestamp.getTime() - b.timestamp.getTime();
    })
    .map((message, index) => {
      const detailTextColorClassName = message.isFromUser
        ? styles.userMessageDetailText
        : styles.serverMessageDetailText;
      const detailTextClassName = `${styles.socketMessageDetailText} ${detailTextColorClassName}`;

      const bodyColorClassName = message.isFromUser
        ? styles.userMessageBody
        : styles.serverMessageBody;
      const bodyClassName = `${styles.socketMessageBody} ${bodyColorClassName}`;

      const senderTitle = message.isFromUser ? "You" : "Server";
      const detailText = `${senderTitle} - ${message.timestamp.toLocaleTimeString()}`;

      return (
        <div key={index} className={styles.socketMessageDetailRow}>
          <div className={detailTextClassName}>{detailText}</div>
          <div className={bodyClassName}>{message.body}</div>
        </div>
      );
    })
    .toReversed();

  return <div className={styles.socketMessageList}>{messageList}</div>;
};

export default WebSocketMessageList;
