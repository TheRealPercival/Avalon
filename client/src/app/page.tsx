import Image from "next/image";

const LoginScreen = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "20vh",
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
  );
};

export default LoginScreen;
