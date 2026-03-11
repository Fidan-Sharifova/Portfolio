export function Noise() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
      opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundSize: "128px",
    }} />
  );
}

export function Orbs() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 0,
      overflow: "hidden",
      pointerEvents: "none",
    }}>
      <div style={{
        position: "absolute",
        width: 600, height: 600,
        borderRadius: "50%",
        top: "-200px", left: "-200px",
        background: "radial-gradient(circle, rgba(0,245,196,0.08) 0%, transparent 70%)",
        animation: "orbFloat1 12s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        width: 500, height: 500,
        borderRadius: "50%",
        bottom: "10%", right: "-100px",
        background: "radial-gradient(circle, rgba(123,94,167,0.1) 0%, transparent 70%)",
        animation: "orbFloat2 15s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        width: 400, height: 400,
        borderRadius: "50%",
        top: "40%", left: "50%",
        background: "radial-gradient(circle, rgba(232,67,147,0.06) 0%, transparent 70%)",
        animation: "orbFloat3 18s ease-in-out infinite",
      }} />
    </div>
  );
}