export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#080808",
        color: "#f2f0ec",
        fontFamily: "Manrope, Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p
          style={{
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9b9891",
            fontSize: 12,
            marginBottom: 18,
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            letterSpacing: "-0.08em",
            margin: 0,
          }}
        >
          Page not found
        </h1>
        <p style={{ color: "#aaa8a2", marginTop: 16, maxWidth: 460 }}>
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: 22,
            padding: "12px 18px",
            borderRadius: 8,
            background: "#967cff",
            color: "#0c0b0d",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Back home
        </a>
      </div>
    </main>
  );
}
