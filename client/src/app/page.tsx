"use client";
import { useState } from "react";
import PopupMessage from "@/components/PopupMessage";
import DiscordSignInButton from "@/components/DiscordSignInButton";

const LoginScreen = () => {
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
            style={{ color: "lightblue", textDecoration: "underline" }}
          >
            here
          </a>
          .
        </p>
        <br />
        <p>
          The game is based on the social role-playing card-based social
          deduction party game made by Don Eskridge.
        </p>
      </PopupMessage>
      <div>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20vh",
            userSelect: "none",
          }}
        >
          Avalon
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "10vw",
            left: "0",
            right: "0",
          }}
        >
          <DiscordSignInButton />
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
