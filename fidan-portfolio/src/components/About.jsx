// import FadeIn from "./FadeIn";

// const STATS = [
//   { num: "1+",   label: "Year Experience" },
//   { num: "10+",  label: "Projects Shipped" },
//   { num: "100%", label: "Commitment" },
//   { num: "∞",    label: "Love for Learning" },
// ];

// const TOOLS = [
//   { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
//   { category: "Backend",  items: ["Node.js", "Express", "REST API", "Firebase"] },
//   { category: "Tools",    items: ["Git", "GitHub", "Figma", "VS Code", "Vite"] },
//   { category: "Other",    items: ["Responsive Design", "SEO Basics", "Performance Optimization"] },
// ];

// export default function About() {
//   return (
//     <section
//       id="about"
//       style={{
//         padding: "120px 60px",
//         position: "relative",
//         zIndex: 2,
//       }}
//     >
//       <div style={{ maxWidth: 1100, margin: "0 auto" }}>
//         <FadeIn>
//           <div style={{ marginBottom: 64 }}>
//             <span style={{
//               fontFamily: "'Space Mono', monospace",
//               fontSize: 11,
//               color: "#00f5c4",
//               letterSpacing: 4,
//               textTransform: "uppercase",
//             }}>
//               01 / ABOUT
//             </span>
//             <h2 style={{
//               fontFamily: "'Bebas Neue', cursive",
//               fontSize: 56,
//               letterSpacing: 2,
//               marginTop: 12,
//             }}>
//               BUILDING WITH PURPOSE
//             </h2>
//           </div>
//         </FadeIn>

//         {/* ── Bio + Stats ── */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: 80,
//           marginBottom: 80,
//         }}>
//           <FadeIn delay={0.1}>
//             <p style={{ fontSize: 16, color: "#8892a4", lineHeight: 1.9, marginBottom: 20 }}>
//               I'm a frontend developer with a genuine passion for crafting
//               clean, fast, and visually engaging web experiences. Although I'm
//               early in my career — with around a year of hands-on experience —
//               I've already built and shipped real-world projects from scratch.
//             </p>
//             <p style={{ fontSize: 16, color: "#8892a4", lineHeight: 1.9, marginBottom: 20 }}>
//               I take pride in writing organized, readable code and paying close
//               attention to the small details that make a big difference — pixel-perfect
//               layouts, smooth interactions, and interfaces that just feel right.
//             </p>
//             <p style={{ fontSize: 16, color: "#8892a4", lineHeight: 1.9 }}>
//               I'm a fast learner who's always exploring new tools and techniques.
//               What I may lack in years, I make up for in curiosity, dedication,
//               and the drive to continuously improve with every project I take on.
//             </p>
//           </FadeIn>

//           <FadeIn delay={0.2}>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//               {STATS.map(({ num, label }) => (
//                 <div key={label}
//                   onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,245,196,0.2)"}
//                   onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
//                   style={{
//                     padding: "28px",
//                     borderRadius: 12,
//                     border: "1px solid rgba(255,255,255,0.06)",
//                     background: "rgba(255,255,255,0.02)",
//                     transition: "border-color 0.3s",
//                   }}>
//                   <div style={{
//                     fontFamily: "'Bebas Neue', cursive",
//                     fontSize: 42, color: "#00f5c4", letterSpacing: 2,
//                   }}>{num}</div>
//                   <div style={{
//                     fontFamily: "'Space Mono', monospace",
//                     fontSize: 11, color: "#6b7688", letterSpacing: 1, marginTop: 4,
//                   }}>{label}</div>
//                 </div>
//               ))}
//             </div>
//           </FadeIn>
//         </div>

//         {/* ── Tools & Technologies ── */}
//         <FadeIn delay={0.15}>
//           <div style={{ marginBottom: 32 }}>
//             <span style={{
//               fontFamily: "'Space Mono', monospace",
//               fontSize: 11, color: "#00f5c4",
//               letterSpacing: 4, textTransform: "uppercase",
//             }}>TECHNOLOGIES & TOOLS</span>
//           </div>
//         </FadeIn>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
//           {TOOLS.map(({ category, items }, i) => (
//             <FadeIn key={category} delay={i * 0.08}>
//               <div
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = "rgba(0,245,196,0.2)";
//                   e.currentTarget.style.background = "rgba(0,245,196,0.03)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
//                   e.currentTarget.style.background = "rgba(255,255,255,0.02)";
//                 }}
//                 style={{
//                   padding: "28px 24px", borderRadius: 14,
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   background: "rgba(255,255,255,0.02)",
//                   height: "100%", transition: "all 0.3s",
//                 }}>
//                 <div style={{
//                   fontFamily: "'Space Mono', monospace",
//                   fontSize: 10, color: "#00f5c4",
//                   letterSpacing: 3, textTransform: "uppercase",
//                   marginBottom: 20, paddingBottom: 12,
//                   borderBottom: "1px solid rgba(0,245,196,0.15)",
//                 }}>{category}</div>

//                 <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                   {items.map((item) => (
//                     <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                       <div style={{
//                         width: 4, height: 4, borderRadius: "50%",
//                         background: "#00f5c4", opacity: 0.5, flexShrink: 0,
//                       }} />
//                       <span style={{
//                         fontFamily: "'DM Sans', sans-serif",
//                         fontSize: 14, color: "#b8c0cc",
//                       }}>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>

//         {/* ── Responsive banner ── */}
//         <FadeIn delay={0.3}>
//           <div style={{
//             marginTop: 32, padding: "24px 32px", borderRadius: 14,
//             border: "1px solid rgba(123,94,167,0.2)",
//             background: "rgba(123,94,167,0.04)",
//             display: "flex", alignItems: "center", gap: 20,
//           }}>
//             <div style={{ fontSize: 28, flexShrink: 0 }}>📱</div>
//             <div>
//               <div style={{
//                 fontFamily: "'Space Mono', monospace",
//                 fontSize: 11, color: "#7b5ea7",
//                 letterSpacing: 2, marginBottom: 6, textTransform: "uppercase",
//               }}>Mobile-First & Responsive</div>
//               <p style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 fontSize: 14, color: "#8892a4", lineHeight: 1.7,
//               }}>
//                 Every project I build is fully responsive — designed and tested across
//                 mobile, tablet, and desktop screens. I use a mobile-first approach
//                 and care deeply about how the UI feels on any device.
//               </p>
//             </div>
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }




import FadeIn from "./FadeIn";
import { useIsMobile, useIsTablet } from "../hooks/useWindowSize";

const STATS = [
  { num: "1+",   label: "Year Experience" },
  { num: "10+",  label: "Projects Shipped" },
  { num: "100%", label: "Commitment" },
  { num: "∞",    label: "Love for Learning" },
];

const TOOLS = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend",  items: ["Node.js", "Express", "REST API", "Firebase"] },
  { category: "Tools",    items: ["Git", "GitHub", "Figma", "VS Code", "Vite"] },
  { category: "Other",    items: ["Responsive Design", "SEO Basics", "Performance"] },
];

export default function About() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isSmall = isMobile || isTablet;

  return (
    <section id="about" style={{
      padding: isMobile ? "0 24px" : isTablet ? "100px 40px" : "120px 60px",
      position: "relative", zIndex: 2,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <FadeIn>
          <div style={{ marginBottom: 56 }}>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: 11,
              color: "#00f5c4", letterSpacing: 4, textTransform: "uppercase",
            }}>01 / ABOUT</span>
            <h2 style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: isMobile ? 42 : 56,
              letterSpacing: 2, marginTop: 12,
            }}>BUILDING WITH PURPOSE</h2>
          </div>
        </FadeIn>

        {/* Bio + Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
          gap: isSmall ? 40 : 80,
          marginBottom: 60,
        }}>
          <FadeIn delay={0.1}>
            <p style={{ fontSize: 15, color: "#8892a4", lineHeight: 1.9, marginBottom: 18 }}>
              I'm a frontend developer with a genuine passion for crafting clean, fast,
              and visually engaging web experiences. Although I'm early in my career —
              with around a year of hands-on experience — I've already built and shipped
              real-world projects from scratch.
            </p>
            <p style={{ fontSize: 15, color: "#8892a4", lineHeight: 1.9, marginBottom: 18 }}>
              I take pride in writing organized, readable code and paying close attention
              to the small details — pixel-perfect layouts, smooth interactions, and
              interfaces that just feel right.
            </p>
            <p style={{ fontSize: 15, color: "#8892a4", lineHeight: 1.9 }}>
              I'm a fast learner always exploring new tools. What I may lack in years,
              I make up for in curiosity, dedication, and the drive to improve with
              every project I take on.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}>
              {STATS.map(({ num, label }) => (
                <div key={label}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,245,196,0.2)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
                  style={{
                    padding: isMobile ? "20px" : "28px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                    transition: "border-color 0.3s",
                  }}>
                  <div style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: isMobile ? 32 : 42,
                    color: "#00f5c4", letterSpacing: 2,
                  }}>{num}</div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10, color: "#6b7688", letterSpacing: 1, marginTop: 4,
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Tools grid */}
        <FadeIn delay={0.15}>
          <div style={{ marginBottom: 28 }}>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: 11,
              color: "#00f5c4", letterSpacing: 4, textTransform: "uppercase",
            }}>TECHNOLOGIES & TOOLS</span>
          </div>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: 16,
        }}>
          {TOOLS.map(({ category, items }, i) => (
            <FadeIn key={category} delay={i * 0.08}>
              <div
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,245,196,0.2)"; e.currentTarget.style.background = "rgba(0,245,196,0.03)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                style={{
                  padding: "22px 18px", borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  height: "100%", transition: "all 0.3s",
                }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 10,
                  color: "#00f5c4", letterSpacing: 3, textTransform: "uppercase",
                  marginBottom: 16, paddingBottom: 10,
                  borderBottom: "1px solid rgba(0,245,196,0.15)",
                }}>{category}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{
                        width: 4, height: 4, borderRadius: "50%",
                        background: "#00f5c4", opacity: 0.5, flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13, color: "#b8c0cc",
                      }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Responsive banner */}
        <FadeIn delay={0.3}>
          <div style={{
            marginTop: 28, padding: isMobile ? "20px" : "24px 32px",
            borderRadius: 14,
            border: "1px solid rgba(123,94,167,0.2)",
            background: "rgba(123,94,167,0.04)",
            display: "flex", alignItems: isMobile ? "flex-start" : "center",
            gap: 16, flexDirection: isMobile ? "column" : "row",
          }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>📱</div>
            <div>
              <div style={{
                fontFamily: "'Space Mono', monospace", fontSize: 11,
                color: "#7b5ea7", letterSpacing: 2, marginBottom: 6,
                textTransform: "uppercase",
              }}>Mobile-First & Responsive</div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, color: "#8892a4", lineHeight: 1.7,
              }}>
                Every project I build is fully responsive — designed and tested across
                mobile, tablet, and desktop. I use a mobile-first approach and care
                deeply about how the UI feels on any device.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}