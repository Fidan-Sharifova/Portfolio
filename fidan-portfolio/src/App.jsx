import { useState } from "react";
import "./index.css";

import { useMousePosition } from "./hooks/useMousePosition";
import { useScrollY } from "./hooks/useScrollY";

import Cursor         from "./components/Cursor";
import { Noise, Orbs } from "./components/Background";
import Nav            from "./components/Nav";
import Hero           from "./components/Hero";
import About          from "./components/About";
import Projects       from "./components/Projects";
import Skills         from "./components/Skills";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";

export default function App() {
  const mouse   = useMousePosition();
  const scrollY = useScrollY();
  const [active, setActive] = useState("Home");

  return (
    <div style={{ background: "#06080e", minHeight: "100vh" }}>
      {/* Decorative layers */}
      <Cursor pos={mouse} />
      <Noise />
      <Orbs />

      {/* Navigation */}
      <Nav active={active} setActive={setActive} scrollY={scrollY} />

      {/* Page sections */}
      <Hero     setActive={setActive} />
      <About    />
      <Projects />
      <Skills   />
      <Contact  />
      <Footer   />
    </div>
  );
}