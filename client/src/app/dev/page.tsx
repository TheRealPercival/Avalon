import WebSocketMessaging from "./WebSocketMessaging";
import styles from "./page.module.css";

const DevPage = () => {
  return (
    <div className={styles.devContainer}>
      <h1>WebSocket Dev</h1>
      <WebSocketMessaging />
    </div>
  );
};

export default DevPage;
