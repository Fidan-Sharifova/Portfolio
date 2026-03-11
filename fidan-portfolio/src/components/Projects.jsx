// import { useState } from "react";
// import FadeIn from "./FadeIn";
// import { PROJECTS } from "../data";

// function ProjectCard({ project, index }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <FadeIn delay={index * 0.12}>
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//           position: "relative",
//           padding: "36px",
//           border: `1px solid ${hovered ? project.color + "50" : "rgba(255,255,255,0.06)"}`,
//           borderRadius: 16,
//           background: hovered
//             ? "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(0,0,0,0.2))"
//             : "rgba(255,255,255,0.02)",
//           backdropFilter: "blur(12px)",
//           cursor: "pointer",
//           transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
//           transform: hovered ? "translateY(-6px)" : "translateY(0)",
//           boxShadow: hovered ? `0 24px 60px ${project.color}15` : "none",
//           overflow: "hidden",
//         }}
//       >
//         {/* Corner glow */}
//         <div style={{
//           position: "absolute", top: 0, right: 0,
//           width: 80, height: 80,
//           background: `radial-gradient(circle at top right, ${project.color}20, transparent 70%)`,
//           opacity: hovered ? 1 : 0.3,
//           transition: "opacity 0.4s",
//         }} />

//         {/* Top row */}
//         <div style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           marginBottom: 16,
//         }}>
//           <span style={{
//             fontFamily: "'Space Mono', monospace",
//             fontSize: 11,
//             color: project.color,
//             letterSpacing: 3,
//             textTransform: "uppercase",
//           }}>{project.year}</span>

//           <div style={{
//             width: 36, height: 36,
//             borderRadius: "50%",
//             border: `1px solid ${project.color}40`,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transform: hovered ? "rotate(45deg)" : "rotate(0deg)",
//             transition: "transform 0.4s",
//           }}>
//             <span style={{ color: project.color, fontSize: 16 }}>↗</span>
//           </div>
//         </div>

//         <h3 style={{
//           fontFamily: "'Bebas Neue', cursive",
//           fontSize: 34,
//           letterSpacing: 2,
//           color: "#fff",
//           marginBottom: 12,
//           lineHeight: 1,
//         }}>{project.title}</h3>

//         <p style={{
//           fontFamily: "'DM Sans', sans-serif",
//           fontSize: 14,
//           color: "#8892a4",
//           lineHeight: 1.7,
//           marginBottom: 24,
//         }}>{project.desc}</p>

//         {/* Tags */}
//         <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//           {project.tags.map((tag) => (
//             <span key={tag} style={{
//               padding: "4px 12px",
//               border: `1px solid ${project.color}30`,
//               borderRadius: 100,
//               fontSize: 11,
//               fontFamily: "'Space Mono', monospace",
//               color: project.color,
//               letterSpacing: 0.5,
//               background: `${project.color}08`,
//             }}>{tag}</span>
//           ))}
//         </div>
//       </div>
//     </FadeIn>
//   );
// }

// export default function Projects() {
//   return (
//     <section
//       id="projects"
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
//             }}>
//               02 / PROJECTS
//             </span>
//             <h2 style={{
//               fontFamily: "'Bebas Neue', cursive",
//               fontSize: 56,
//               letterSpacing: 2,
//               marginTop: 12,
//             }}>
//               SELECTED WORK
//             </h2>
//           </div>
//         </FadeIn>

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: 24,
//         }}>
//           {PROJECTS.map((p, i) => (
//             <ProjectCard key={p.id} project={p} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data";
import { useIsMobile, useIsTablet } from "../hooks/useWindowSize";

function ProjectCard({ project, index, isMobile }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={index * 0.12}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative", padding: isMobile ? "24px" : "36px",
          border: `1px solid ${hovered ? project.color + "50" : "rgba(255,255,255,0.06)"}`,
          borderRadius: 16,
          background: hovered ? "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(0,0,0,0.2))" : "rgba(255,255,255,0.02)",
          backdropFilter: "blur(12px)", cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? `0 24px 60px ${project.color}15` : "none",
          overflow: "hidden",
        }}>
        <div style={{
          position: "absolute", top: 0, right: 0, width: 80, height: 80,
          background: `radial-gradient(circle at top right, ${project.color}20, transparent 70%)`,
          opacity: hovered ? 1 : 0.3, transition: "opacity 0.4s",
        }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: project.color, letterSpacing: 3, textTransform: "uppercase" }}>{project.year}</span>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            border: `1px solid ${project.color}40`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transform: hovered ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.4s",
          }}>
            <span style={{ color: project.color, fontSize: 14 }}>↗</span>
          </div>
        </div>
        <h3 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: isMobile ? 28 : 34,
          letterSpacing: 2, color: "#fff", marginBottom: 10, lineHeight: 1,
        }}>{project.title}</h3>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 14,
          color: "#8892a4", lineHeight: 1.7, marginBottom: 20,
        }}>{project.desc}</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: "4px 10px",
              border: `1px solid ${project.color}30`,
              borderRadius: 100, fontSize: 11,
              fontFamily: "'Space Mono', monospace",
              color: project.color, letterSpacing: 0.5,
              background: `${project.color}08`,
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section id="projects" style={{
      padding: isMobile ? "80px 24px" : isTablet ? "100px 40px" : "120px 60px",
      position: "relative", zIndex: 2,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 56 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#00f5c4", letterSpacing: 4 }}>02 / PROJECTS</span>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: isMobile ? 42 : 56, letterSpacing: 2, marginTop: 12 }}>SELECTED WORK</h2>
          </div>
        </FadeIn>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 20,
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}