"use client";
import { useState } from "react";
import Image from "next/image";

const LoginScreen = () => {
  const [showInfo, setShowInfo] = useState(false);
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
        onClick={() => setShowInfo(!showInfo)}
      >
        i
      </div>
      {showInfo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 5,
            userSelect: "none",
          }}
        >
          <div
            style={{
              padding: "16px",
              margin: "25vh 10vw",
              border: "2px solid white",
              borderRadius: "8px",
              backgroundColor: "background",
              color: "white",
              fontSize: "14px",
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>About</h2>
              <div
                style={{
                  height: "24px",
                  width: "24px",
                  alignContent: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: "18px",
                }}
                onClick={() => setShowInfo(!showInfo)}
              >
                ✖
              </div>
            </div>
            <br />
            <p>
              This is a private server that you must request access from the
              owner to join. Find out how to deploy your own instance{" "}
              <a
                href="https://github.com/TheRealPercival/Avalon/tree/main"
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
          </div>
        </div>
      )}
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
          <button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#5865F2",
              fontFamily: "Discord",
            }}
          >
            <Image
              src="/Discord-Symbol-White.svg"
              alt="Discord Logo"
              width={24}
              height={24}
              style={{ marginRight: "16px" }}
            />
            Sign in with Discord
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
