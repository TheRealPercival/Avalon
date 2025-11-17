import DiscordSignInButton from "@/components/DiscordSignInButton";
import PopupSection from "@/components/PopupSection";

const LoginScreen = () => {
  return (
    <>
      <PopupSection />

      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr auto 1fr",
          alignItems: "center",
          minHeight: "100dvh",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            userSelect: "none",
          }}
        >
          Avalon
        </h1>
        <div style={{ display: "grid", placeItems: "center" }}>
          <DiscordSignInButton />
        </div>
        <div />
      </div>
    </>
  );
};

export default LoginScreen;
