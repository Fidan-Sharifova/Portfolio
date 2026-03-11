// import { useState } from "react";
// import FadeIn from "./FadeIn";
// import { SOCIAL_LINKS } from "../data";

// export default function Contact() {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText("yourname@email.com");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <section
//       id="contact"
//       style={{
//         padding: "120px 60px 80px",
//         position: "relative",
//         zIndex: 2,
//       }}
//     >
//       <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
//         <FadeIn>
//           <span style={{
//             fontFamily: "'Space Mono', monospace",
//             fontSize: 11,
//             color: "#00f5c4",
//             letterSpacing: 4,
//           }}>
//             04 / CONTACT
//           </span>
//           <h2 style={{
//             fontFamily: "'Bebas Neue', cursive",
//             fontSize: "clamp(48px, 7vw, 80px)",
//             letterSpacing: 2,
//             marginTop: 12,
//             marginBottom: 20,
//           }}>
//             LET'S BUILD
//             <br />
//             <span style={{
//               background: "linear-gradient(90deg, #00f5c4, #7b5ea7)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}>
//               SOMETHING GREAT
//             </span>
//           </h2>
//           <p style={{
//             fontSize: 16,
//             color: "#8892a4",
//             marginBottom: 48,
//             lineHeight: 1.8,
//           }}>
//             Open to new opportunities, collaborations, and interesting projects.
//             Let's talk.
//           </p>
//         </FadeIn>

//         {/* Email copy button */}
//         <FadeIn delay={0.2}>
//           <div
//             onClick={handleCopy}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.borderColor = "rgba(0,245,196,0.3)";
//               e.currentTarget.style.background = "rgba(0,245,196,0.05)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
//               e.currentTarget.style.background = "rgba(255,255,255,0.02)";
//             }}
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 16,
//               padding: "20px 36px",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: 12,
//               background: "rgba(255,255,255,0.02)",
//               cursor: "pointer",
//               transition: "all 0.3s",
//             }}
//           >
//             <span style={{
//               fontFamily: "'Space Mono', monospace",
//               fontSize: 14,
//               color: "#fff",
//               letterSpacing: 1,
//             }}>
//               sharifzadehfidan@gmail.com
//             </span>
//             <span style={{
//               fontFamily: "'Space Mono', monospace",
//               fontSize: 11,
//               color: copied ? "#00f5c4" : "#6b7688",
//               letterSpacing: 1,
//               transition: "color 0.3s",
//             }}>
//               {copied ? "COPIED!" : "COPY"}
//             </span>
//           </div>
//         </FadeIn>

//         {/* Social links */}
//         <FadeIn delay={0.3}>
//           <div style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: 24,
//             marginTop: 48,
//           }}>
//             {SOCIAL_LINKS.map(({ name, href }) => (
//               <a
//                 key={name}
//                 href={href}
//                 onMouseEnter={(e) => (e.target.style.color = "#00f5c4")}
//                 onMouseLeave={(e) => (e.target.style.color = "#3d4450")}
//                 style={{
//                   fontFamily: "'Space Mono', monospace",
//                   fontSize: 15,
//                   color: "#b1b2b2",
//                   letterSpacing: 2,
//                   textDecoration: "none",
//                   textTransform: "uppercase",
//                   transition: "color 0.3s",
//                 }}
//               >
//                 {name}
//               </a>
//             ))}
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import FadeIn from "./FadeIn";
import { SOCIAL_LINKS } from "../data";
import { useIsMobile, useIsTablet } from "../hooks/useWindowSize";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const handleCopy = () => {
    navigator.clipboard.writeText("yourname@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{
      padding: isMobile ? "80px 24px 80px" : isTablet ? "100px 40px 60px" : "120px 60px 80px",
      position: "relative", zIndex: 2,
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#00f5c4", letterSpacing: 4 }}>04 / CONTACT</span>
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: isMobile ? "clamp(40px, 12vw, 200px)" : "clamp(48px, 7vw, 80px)",
            letterSpacing: 2, marginTop: 12, marginBottom: 16,
          }}>
            LET'S BUILD
            <br />
            <span style={{
              background: "linear-gradient(90deg, #00f5c4, #7b5ea7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>SOMETHING GREAT</span>
          </h2>
          <p style={{ fontSize: isMobile ? 14 : 16, color: "#8892a4", marginBottom: 40, lineHeight: 1.8 }}>
            Open to new opportunities, collaborations, and interesting projects. Let's talk.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            onClick={handleCopy}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,245,196,0.3)"; e.currentTarget.style.background = "rgba(0,245,196,0.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 14,
              padding: isMobile ? "16px 24px" : "20px 36px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              background: "rgba(255,255,255,0.02)",
              cursor: "pointer", transition: "all 0.3s",
              maxWidth: "100%",
            }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: isMobile ? 12 : 14,
              color: "#fff", letterSpacing: 1,
              wordBreak: "break-all",
            }}>sharifzadehfidan@gmail.com</span>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: 11,
              color: copied ? "#00f5c4" : "#6b7688",
              letterSpacing: 1, transition: "color 0.3s", flexShrink: 0,
            }}>{copied ? "COPIED!" : "COPY"}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{
            display: "flex", justifyContent: "center",
            gap: isMobile ? 16 : 24,
            marginTop: 40, flexWrap: "wrap",
          }}>
            {SOCIAL_LINKS.map(({ name, href }) => (
              <a key={name} href={href}
                onMouseEnter={(e) => e.target.style.color = "#00f5c4"}
                onMouseLeave={(e) => e.target.style.color = "#3d4450"}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11, color: "#3d4450",
                  letterSpacing: 2, textDecoration: "none",
                  textTransform: "uppercase", transition: "color 0.3s",
                }}>{name}</a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}