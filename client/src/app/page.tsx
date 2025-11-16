import DiscordSignInButton from "@/components/DiscordSignInButton";
import PopupSection from "@/components/PopupSection";

const LoginScreen = () => {
  return (
    <>
      <PopupSection />

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
          <DiscordSignInButton />
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
