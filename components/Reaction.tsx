/** @jsxImportSource frog/jsx */

interface ReactionProps {
  isMalicious: boolean;
}

export function Reaction({ isMalicious }: ReactionProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        color: isMalicious ? "#FFEEDD" : "#000080",
        background: isMalicious
          ? "linear-gradient(135deg, #F08080, #8B0000)"
          : "linear-gradient(135deg, #B0E0E6, #3CB371)",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        {isMalicious ? "Malicious 😈" : "Not marked as malicious 😎"}
      </h1>
    </div>
  );
}
