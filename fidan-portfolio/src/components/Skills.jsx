// import FadeIn from "./FadeIn";
// import { useInView } from "../hooks/useInView";
// import { SKILLS, EXTRA_SKILLS } from "../data";

// function SkillBar({ name, level, delay }) {
//   const [ref, inView] = useInView();

//   return (
//     <div ref={ref} style={{ marginBottom: 24 }}>
//       <div style={{
//         display: "flex",
//         justifyContent: "space-between",
//         marginBottom: 8,
//       }}>
//         <span style={{
//           fontFamily: "'Space Mono', monospace",
//           fontSize: 13,
//           color: "#b8c0cc",
//           letterSpacing: 1,
//         }}>{name}</span>
//         <span style={{
//           fontFamily: "'Space Mono', monospace",
//           fontSize: 12,
//           color: "#00f5c4",
//         }}>{level}%</span>
//       </div>

//       <div style={{
//         height: 3,
//         background: "rgba(255,255,255,0.06)",
//         borderRadius: 2,
//         overflow: "hidden",
//       }}>
//         <div style={{
//           height: "100%",
//           width: inView ? `${level}%` : "0%",
//           background: "linear-gradient(90deg, #00f5c4, #7b5ea7)",
//           borderRadius: 2,
//           transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
//           boxShadow: "0 0 12px rgba(0,245,196,0.4)",
//         }} />
//       </div>
//     </div>
//   );
// }

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       style={{
//         padding: "120px 60px",
//         position: "relative",
//         zIndex: 2,
//       }}
//     >
//       <div style={{
//         maxWidth: 1100,
//         margin: "0 auto",
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr",
//         gap: 100,
//       }}>
//         {/* Left — animated bars */}
//         <div>
//           <FadeIn>
//             <span style={{
//               fontFamily: "'Space Mono', monospace",
//               fontSize: 11,
//               color: "#00f5c4",
//               letterSpacing: 4,
//             }}>
//               03 / SKILLS
//             </span>
//             <h2 style={{
//               fontFamily: "'Bebas Neue', cursive",
//               fontSize: 56,
//               letterSpacing: 2,
//               marginTop: 12,
//               marginBottom: 48,
//             }}>
//               TECH STACK
//             </h2>
//           </FadeIn>

//           {SKILLS.map((s, i) => (
//             <SkillBar
//               key={s.name}
//               name={s.name}
//               level={s.level}
//               delay={i * 0.1}
//             />
//           ))}
//         </div>

//         {/* Right — extra skills */}
//         <FadeIn delay={0.2}>
//           <div style={{ paddingTop: 80 }}>
//             <h3 style={{
//               fontFamily: "'Bebas Neue', cursive",
//               fontSize: 28,
//               letterSpacing: 2,
//               color: "#fff",
//               marginBottom: 24,
//             }}>
//               ALSO EXPERIENCED WITH
//             </h3>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
//               {EXTRA_SKILLS.map((tech) => (
//                 <span
//                   key={tech}
//                   onMouseEnter={(e) => {
//                     e.target.style.borderColor = "rgba(0,245,196,0.3)";
//                     e.target.style.color = "#00f5c4";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.borderColor = "rgba(255,255,255,0.08)";
//                     e.target.style.color = "#8892a4";
//                   }}
//                   style={{
//                     padding: "8px 16px",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                     borderRadius: 6,
//                     fontFamily: "'Space Mono', monospace",
//                     fontSize: 11,
//                     color: "#8892a4",
//                     letterSpacing: 0.5,
//                     transition: "all 0.3s",
//                     cursor: "default",
//                   }}
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }



import FadeIn from "./FadeIn";
import { useInView } from "../hooks/useInView";
import { useIsMobile, useIsTablet } from "../hooks/useWindowSize";
import { SKILLS, EXTRA_SKILLS } from "../data";

function SkillBar({ name, level, delay }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ marginBottom: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#b8c0cc", letterSpacing: 1 }}>{name}</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#00f5c4" }}>{level}%</span>
      </div>
      <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: inView ? `${level}%` : "0%",
          background: "linear-gradient(90deg, #00f5c4, #7b5ea7)",
          borderRadius: 2,
          transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
          boxShadow: "0 0 12px rgba(0,245,196,0.4)",
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isSmall = isMobile || isTablet;

  return (
    <section id="skills" style={{
      padding: isMobile ? "80px 24px" : isTablet ? "100px 40px" : "120px 60px",
      position: "relative", zIndex: 2,
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
        gap: isSmall ? 60 : 100,
      }}>
        <div>
          <FadeIn>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#00f5c4", letterSpacing: 4 }}>03 / SKILLS</span>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: isMobile ? 42 : 56, letterSpacing: 2, marginTop: 12, marginBottom: 40 }}>TECH STACK</h2>
          </FadeIn>
          {SKILLS.map((s, i) => (
            <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.1} />
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div style={{ paddingTop: isSmall ? 0 : 80 }}>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 26, letterSpacing: 2, color: "#fff", marginBottom: 20 }}>
              ALSO EXPERIENCED WITH
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {EXTRA_SKILLS.map((tech) => (
                <span key={tech}
                  onMouseEnter={(e) => { e.target.style.borderColor = "rgba(0,245,196,0.3)"; e.target.style.color = "#00f5c4"; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.color = "#8892a4"; }}
                  style={{
                    padding: "7px 14px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 6,
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11, color: "#8892a4",
                    letterSpacing: 0.5, transition: "all 0.3s", cursor: "default",
                  }}>{tech}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}