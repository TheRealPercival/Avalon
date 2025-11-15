"use client";
import { useState } from "react";

const NonMemberPage = () => {
  const [accessRequested, setAccessRequested] = useState(false);

  return (
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
        <p>
          You are not on the server's member list. You can request access to
          become a member of the server or learn how to deploy your own{" "}
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
        {accessRequested ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "2px solid",
            }}
          >
            Access Requested
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "2px solid",
            }}
            onClick={() => setAccessRequested(true)}
          >
            Request Access
          </div>
        )}
      </div>
    </div>
  );
};

export default NonMemberPage;
