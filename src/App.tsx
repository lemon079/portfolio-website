import { useState, useEffect, useMemo } from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import SkillSet from "./Components/SkillSet";
import { NoteModal } from "./Components/ui/NoteModal";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isNoteOpen, setIsNoteOpen] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkIfTouchDevice = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkIfTouchDevice();
    window.addEventListener("resize", checkIfTouchDevice);
    return () => window.removeEventListener("resize", checkIfTouchDevice);
  }, []);

  return (
    <>
      {!isTouchDevice && (
        <AnimatedCursor
          innerSize={8}
          outerSize={10}
          color="30, 41, 57"
          outerAlpha={0.2}
          innerScale={0.7}
          showSystemCursor
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      )}
      <NoteModal isNoteOpen={isNoteOpen} setIsNoteOpen={setIsNoteOpen} />
      <main className="min-h-screen mx-auto lg:max-w-7xl font-barlow">
        <Home />
        <SkillSet />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
