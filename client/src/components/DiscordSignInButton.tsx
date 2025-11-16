import Image from "next/image";

const DiscordSignInButton = () => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        color: "white",
        backgroundColor: "#5865F2",
        fontFamily: "Discord",
        WebkitTapHighlightColor: "transparent",
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
  );
};

export default DiscordSignInButton;
