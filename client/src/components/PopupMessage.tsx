const PopupMessage = ({
  header,
  children,
  showPopup = true,
  setShowPopup,
}: {
  header?: string;
  children: React.ReactNode;
  showPopup?: boolean;
  setShowPopup?: (value: boolean) => void;
}) => {
  return (
    showPopup && (
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
          {header && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2>{header}</h2>
                <div
                  style={{
                    height: "24px",
                    width: "24px",
                    alignContent: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPopup?.(false)}
                >
                  ✖
                </div>
              </div>
              <br />
            </>
          )}
          {children}
        </div>
      </div>
    )
  );
};

export default PopupMessage;
