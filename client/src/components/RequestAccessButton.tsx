"use client";
import { useState } from "react";

const RequestAccessButton = () => {
  const [accessRequested, setAccessRequested] = useState(false);

  return (
    <button
      onClick={() => setAccessRequested(true)}
      disabled={accessRequested}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
      }}
    >
      {accessRequested ? "Access Requested" : "Request Access"}
    </button>
  );
};

export default RequestAccessButton;
