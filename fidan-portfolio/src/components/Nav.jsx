
import { useState } from "react";
import { NAV_ITEMS } from "../data";
import { useIsMobile } from "../hooks/useWindowSize";

export default function Nav({ active, setActive, scrollY }) {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (item) => {
    setActive(item);
    setMenuOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: isMobile ? "0 24px" : "0 60px",
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrollY > 50 || menuOpen ? "rgba(6,8,14,0.95)" : "transparent",
        backdropFilter: scrollY > 50 || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.4s ease",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: 20, letterSpacing: 4, color: "#fff",
        }}>
          <span style={{ color: "#00f5c4" }}>{"<"}</span>FIDASHI<span style={{ color: "#00f5c4" }}>{"/>"}</span>
        </div>

        {!isMobile && (
          <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
            {NAV_ITEMS.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Space Mono', monospace", fontSize: 12,
                color: active === item ? "#00f5c4" : "#6b7688",
                letterSpacing: 1.5, textTransform: "uppercase",
                transition: "color 0.3s", position: "relative", padding: "4px 0",
              }}>
                {item}
                {active === item && (
                  <div style={{
                    position: "absolute", bottom: -2, left: 0, right: 0,
                    height: 1, background: "#00f5c4", boxShadow: "0 0 8px #00f5c4",
                  }} />
                )}
              </button>
            ))}
          </div>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: 5, padding: 4,
          }}>
            <div style={{ width: 24, height: 2, background: "#00f5c4", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <div style={{ width: 24, height: 2, background: "#00f5c4", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: 24, height: 2, background: "#00f5c4", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        )}
      </nav>

      {isMobile && (
        <div style={{
          position: "fixed", top: 70, left: 0, right: 0, zIndex: 99,
          background: "rgba(6,8,14,0.97)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: menuOpen ? "24px" : "0 24px",
          maxHeight: menuOpen ? 400 : 0,
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}>
          {NAV_ITEMS.map((item, i) => (
            <button key={item} onClick={() => scrollTo(item)} style={{
              display: "block", width: "100%",
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Space Mono', monospace", fontSize: 14,
              color: active === item ? "#00f5c4" : "#8892a4",
              letterSpacing: 2, textTransform: "uppercase", textAlign: "left",
              padding: "14px 0",
              borderBottom: i < NAV_ITEMS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              transition: "color 0.3s",
            }}>{item}</button>
          ))}
        </div>
      )}
    </>
  );
}