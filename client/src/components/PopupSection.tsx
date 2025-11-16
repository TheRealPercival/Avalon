"use client";
import { useState } from "react";
import PopupMessage from "./PopupMessage";

const PopupSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "24px",
          height: "24px",
          borderRadius: "12px",
          border: "2px solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          cursor: "pointer",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
        }}
        onClick={() => setShowPopup(!showPopup)}
      >
        i
      </div>
      <PopupMessage
        header={"About"}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      >
        <p>
          This is a private server that you must request access from the owner
          to join. Find out how to deploy your own instance{" "}
          <a
            href="https://github.com/TheRealPercival/Avalon"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            here
          </a>
          .
        </p>
        <br />
        <p>
          The game is based on the card-based role-playing social deduction
          party game made by Don Eskridge.
        </p>
      </PopupMessage>
    </>
  );
};

export default PopupSection;
