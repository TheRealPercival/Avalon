const RequestAccessButton = ({
  accessRequested,
  setAccessRequested,
}: {
  accessRequested: boolean;
  setAccessRequested: (value: boolean) => void;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        border: `2px solid ${
          accessRequested ? "rgba(255, 255, 255, 0.5)" : ""
        }`,
        color: accessRequested ? "rgba(255, 255, 255, 0.5)" : "",
        cursor: accessRequested ? "default" : "pointer",
        WebkitTapHighlightColor: "transparent",
      }}
      onClick={accessRequested ? undefined : () => setAccessRequested(true)}
    >
      {accessRequested ? "Access Requested" : "Request Access"}
    </div>
  );
};

export default RequestAccessButton;
