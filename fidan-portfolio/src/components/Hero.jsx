import { useState } from "react";
import { useIsMobile, useIsTablet } from "../hooks/useWindowSize";

export default function Hero({ setActive }) {
  const [imgError, setImgError] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isSmall = isMobile || isTablet;

  return (
    <section id="home" style={{
minHeight: "calc(var(--vh, 1vh) * 100)",
      display: "flex",
      alignItems: "center",
      padding: isMobile ? "40px 24px 60px" : isTablet ? "100px 40px 60px" : "100px 60px 60px",
      position: "relative",
      zIndex: 2,
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
        gap: isSmall ? 60 : 80,
        alignItems: "center",
      }}>

        {/* Photo - mobile-da üstdə göstər */}
        {isSmall && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProfilePhoto imgError={imgError} setImgError={setImgError} size={isMobile ? 200 : 240} />
          </div>
        )}

        {/* Left - text */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 100,
            border: "1px solid rgba(0,245,196,0.3)",
            background: "rgba(0,245,196,0.06)",
            marginBottom: 28,
            animation: "fadeUp 0.6s ease both",
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#00f5c4", boxShadow: "0 0 8px #00f5c4",
              animation: "blink 2s ease-in-out infinite",
            }} />
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: 11,
              color: "#00f5c4", letterSpacing: 2,
            }}>AVAILABLE FOR WORK</span>
          </div>

          <h1 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: isMobile ? "clamp(52px, 14vw, 72px)" : "clamp(56px, 7vw, 90px)",
            lineHeight: 0.95, letterSpacing: 3,
            marginBottom: 20,
            animation: "fadeUp 0.6s ease 0.1s both",
          }}>
            <span style={{ color: "#fff" }}>FRONTEND</span>
            <br />
            <span style={{
              background: "linear-gradient(90deg, #00f5c4, #7b5ea7, #e84393, #00f5c4)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 4s ease infinite",
            }}>DEVELOPER</span>
          </h1>

          <p style={{
            fontSize: isMobile ? 14 : 16,
            color: "#8892a4", lineHeight: 1.8,
            maxWidth: 480, marginBottom: 36,
            animation: "fadeUp 0.6s ease 0.2s both",
          }}>
            I craft exceptional digital experiences with a focus on performance,
            accessibility, and delightful interactions. From concept to deployment.
          </p>

          <div style={{
            display: "flex", gap: 12, flexWrap: "wrap",
            animation: "fadeUp 0.6s ease 0.3s both",
          }}>
            <button
              onClick={() => { document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); setActive("Projects"); }}
              onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 40px rgba(0,245,196,0.4)"; }}
              onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 0 30px rgba(0,245,196,0.25)"; }}
              style={{
                padding: isMobile ? "12px 24px" : "14px 32px",
                background: "#00f5c4", border: "none", borderRadius: 8,
                fontFamily: "'Space Mono', monospace", fontSize: 12,
                letterSpacing: 2, color: "#06080e", cursor: "pointer",
                fontWeight: 700, transition: "all 0.3s",
                boxShadow: "0 0 30px rgba(0,245,196,0.25)",
              }}>VIEW WORK</button>

            <button
              onClick={() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); setActive("Contact"); }}
              onMouseEnter={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.4)"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.color = "#b8c0cc"; }}
              style={{
                padding: isMobile ? "12px 24px" : "14px 32px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                fontFamily: "'Space Mono', monospace", fontSize: 12,
                letterSpacing: 2, color: "#b8c0cc", cursor: "pointer",
                transition: "all 0.3s",
              }}>CONTACT</button>
          </div>
        </div>

        {/* Right - desktop-da göstər */}
        {!isSmall && (
          <div style={{ display: "flex", justifyContent: "center", animation: "fadeUp 0.6s ease 0.25s both" }}>
            <ProfilePhoto imgError={imgError} setImgError={setImgError} size={280} />
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {!isMobile && (
        <div style={{
          position: "absolute", bottom: 40, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          animation: "fadeUp 0.6s ease 0.6s both",
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: 10,
            color: "#3d4450", letterSpacing: 3, textTransform: "uppercase",
          }}>scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #3d4450, transparent)" }} />
        </div>
      )}
    </section>
  );
}

function ProfilePhoto({ imgError, setImgError, size }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        position: "absolute", inset: -16, borderRadius: "50%",
        border: "1px solid transparent",
        borderTopColor: "#00f5c4",
        borderRightColor: "rgba(0,245,196,0.3)",
        animation: "spin 8s linear infinite",
      }} />
      <div style={{
        position: "absolute", inset: -28, borderRadius: "50%",
        border: "1px dashed rgba(123,94,167,0.3)",
        animation: "spin 20s linear infinite reverse",
      }} />
      <div style={{
        width: size, height: size, borderRadius: "50%",
        overflow: "hidden",
        border: "3px solid rgba(0,245,196,0.2)",
        background: "linear-gradient(135deg, #0d1020, #1a1040)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {!imgError ? (
          <img
            src="/src/assets/me2.jpeg"
            alt="Profile"
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: size * 0.22 }}>👤</div>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: 9,
              color: "#00f5c4", letterSpacing: 1, display: "block", marginTop: 6,
            }}>YOUR PHOTO</span>
          </div>
        )}
      </div>
      <div style={{
        position: "absolute", bottom: 10, right: -20,
        padding: "8px 14px",
        background: "rgba(6,8,14,0.9)",
        border: "1px solid rgba(0,245,196,0.2)",
        borderRadius: 12, backdropFilter: "blur(12px)",
      }}>
        <div style={{ fontSize: 10, color: "#8892a4", fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}>EXP</div>
        <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: "#00f5c4", letterSpacing: 2, lineHeight: 1 }}>1+ YR</div>
      </div>
    </div>
  );
}