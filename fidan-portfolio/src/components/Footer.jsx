import { useIsMobile } from "../hooks/useWindowSize";

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{
      padding: isMobile ? "20px 24px" : "24px 60px",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: isMobile ? 8 : 0,
      position: "relative", zIndex: 2,
      textAlign: isMobile ? "center" : "left",
    }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#3d4450", letterSpacing: 1 }}>© {new Date().getFullYear()} Fidan Sharifzade</span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#3d4450", letterSpacing: 1 }}>DESIGNED & BUILT WITH ♥</span>
    </footer>
  );
}