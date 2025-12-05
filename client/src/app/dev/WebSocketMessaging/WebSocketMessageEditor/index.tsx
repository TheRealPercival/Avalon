import styles from "./index.module.css";
import { ChangeEvent, KeyboardEvent } from "react";

const WebSocketMessageEditor = ({
  sendMessage,
  disabled,
}: {
  sendMessage: (message: string) => void;
  disabled?: boolean;
}) => {
  const getIsValidMessage = (messageString: string): boolean => {
    try {
      JSON.parse(messageString);
      return true;
    } catch {
      return false;
    }
  };

  const validate = (
    ev: KeyboardEvent<HTMLTextAreaElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const textArea = ev.currentTarget;

    if (getIsValidMessage(textArea.value)) {
      textArea.style.backgroundColor = "#00FF0022";
    } else {
      textArea.style.backgroundColor = "#FF000022";
    }
  };

  const messageEditorKeyDown = (
    ev: KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    const insertText = (text: string, offset: number): void => {
      ev.preventDefault();
      const start = ev.currentTarget.selectionStart;
      const end = ev.currentTarget.selectionEnd;
      const newValue = `${ev.currentTarget.value.substring(
        0,
        start
      )}${text}${ev.currentTarget.value.substring(end)}`;
      ev.currentTarget.value = newValue;
      ev.currentTarget.setSelectionRange(end + offset, end + offset);
    };

    const deleteAround = (): void => {
      ev.preventDefault();
      const start = ev.currentTarget.selectionStart;
      const newValue = `${ev.currentTarget.value.substring(
        0,
        start - 1
      )}${ev.currentTarget.value.substring(start + 1)}`;
      ev.currentTarget.value = newValue;
      ev.currentTarget.setSelectionRange(start - 1, start - 1);
    };

    const isInBetween = (text: string): boolean => {
      const start = ev.currentTarget.selectionStart;
      const end = ev.currentTarget.selectionEnd;
      const around = ev.currentTarget.value.substring(start - 1, start + 1);
      return around === text && start === end && start > 0;
    };

    switch (ev.key) {
      case "Tab":
        insertText("\u0020\u0020", 2);
        break;

      case "{":
        insertText("{}", 1);
        break;

      case "Enter":
        if (
          ev.ctrlKey &&
          !disabled &&
          getIsValidMessage(ev.currentTarget.value)
        ) {
          sendMessage(ev.currentTarget.value);
          ev.currentTarget.value = "";
        } else if (isInBetween("{}")) {
          insertText("\n\u0020\u0020\n", 3);
        }
        break;

      case '"':
        insertText('""', 1);
        break;

      case "Backspace":
        if (isInBetween("{}") || isInBetween('""')) {
          deleteAround();
        }
        break;
    }

    validate(ev);
  };

  return (
    <textarea
      className={styles.socketMessageEditor}
      disabled={disabled}
      onKeyDown={messageEditorKeyDown}
      onChange={validate}
    />
  );
};

export default WebSocketMessageEditor;
