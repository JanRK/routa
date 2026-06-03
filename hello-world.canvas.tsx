export default function Canvas() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 32,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          border: "1px solid currentColor",
          borderRadius: 12,
          padding: "32px 40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 24, lineHeight: 1.2 }}>
          Hello World
        </h1>
        <p style={{ margin: "12px 0 0", fontSize: 14 }}>
          This is a Routa Canvas.
        </p>
      </section>
    </main>
  );
}
