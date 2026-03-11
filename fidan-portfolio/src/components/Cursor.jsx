import { useState, useEffect } from "react";

export default function Cursor({ pos }) {
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      setTrail((prev) => ({
        x: lerp(prev.x, pos.x, 0.12),
        y: lerp(prev.y, pos.y, 0.12),
      }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  return (
    <>
      {/* Main dot */}
      <div style={{
        position: "fixed",
        top: pos.y - 6,
        left: pos.x - 6,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "#00f5c4",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
        transition: "transform 0.1s",
      }} />

      {/* Trailing ring */}
      <div style={{
        position: "fixed",
        top: trail.y - 20,
        left: trail.x - 20,
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "1.5px solid rgba(0,245,196,0.4)",
        pointerEvents: "none",
        zIndex: 9998,
      }} />
    </>
  );
}