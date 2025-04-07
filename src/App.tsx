import { useState, useEffect } from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import SkillSet from "./Components/SkillSet";
import AnimatedCursor from "react-animated-cursor";

function App() {
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
      <a
        href="https://drive.google.com/file/d/1RiXxTjw-fBMTfH_Dczy-TraoT24yDm-A/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black max-w-32 absolute top-5 right-10 text-white p-2 rounded-md hover:opacity-75 cursor-pointer hover:-translate-y-1 transition"
      >
        Resume
      </a>
      <main className="mx-auto lg:max-w-7xl font-barlow">
        <Home />
        <SkillSet />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
