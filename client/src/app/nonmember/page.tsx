import RequestAccessButton from "@/components/RequestAccessButton";
import PopupMessage from "@/components/PopupMessage";

const NonMemberPage = () => {
  return (
    <PopupMessage>
      <p>
        You are not on the server's member list. You can request access to
        become a member of the server or learn how to deploy your own{" "}
        <a
          href="https://github.com/TheRealPercival/Avalon"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          here
        </a>
        .
      </p>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RequestAccessButton />
      </div>
    </PopupMessage>
  );
};

export default NonMemberPage;
