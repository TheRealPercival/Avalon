import Image from "next/image";

const DiscordSignInButton = () => {
  return (
    <button
      style={{
        display: "grid",
        gridTemplateColumns: "24px auto",
        alignItems: "center",
        columnGap: "16px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        color: "white",
        backgroundColor: "var(--discord-blurple)",
        fontFamily: "Discord",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <Image
        src="/Discord-Symbol-White.svg"
        alt="Discord Logo"
        width={24}
        height={24}
      />
      <span>Sign in with Discord</span>
    </button>
  );
};


export default DiscordSignInButton;
