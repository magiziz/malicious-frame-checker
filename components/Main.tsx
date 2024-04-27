/** @jsxImportSource frog/jsx */

interface MainProps {
  title: string;
}

export function Main({ title }: MainProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        color: "#333333",
        background: "linear-gradient(135deg, #a2d2ff, #89c2d9)",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        {title}
      </h1>
    </div>
  );
}
