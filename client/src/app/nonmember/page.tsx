"use client";
import RequestAccessButton from "@/components/RequestAccessButton";
import PopupMessage from "@/components/PopupMessage";
import { useState } from "react";

const NonMemberPage = () => {
  const [accessRequested, setAccessRequested] = useState(false);

  return (
    <PopupMessage>
      <p>
        You are not on the server's member list. You can request access to
        become a member of the server or learn how to deploy your own{" "}
        <a
          href="https://github.com/TheRealPercival/Avalon"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--link-text)", textDecoration: "underline" }}
        >
          here
        </a>
        .
      </p>
      <br />
      <RequestAccessButton
        accessRequested={accessRequested}
        setAccessRequested={setAccessRequested}
      />
    </PopupMessage>
  );
};

export default NonMemberPage;
