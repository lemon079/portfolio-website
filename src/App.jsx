import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GrProjects, GrCircleInformation } from "react-icons/gr";
import Home from "./Components/Home";
import Dock from "./Components/ui/Dock";
import Divider from "./Components/ui/Divider";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import SkillSet from "./Components/SkillSet";
import Note from "./Components/Note";

function App() {
  const [isNoteOpen, setIsNoteOpen] = useState(true);
  const items = [
    {
      icon: <FiHome size={24} />,
      label: "Home",
    },
    {
      icon: <GrProjects size={24} />,
      label: "Projects",
    },
    {
      icon: <RiContactsBook2Fill size={24} />,
      label: "Contact",
    },
    {
      icon: <GrCircleInformation size={24} />,
      label: "Note",
      onClick: () => setIsNoteOpen(true),
    },
  ];
  return (
    <>
      <Note isNoteOpen={isNoteOpen} setIsNoteOpen={setIsNoteOpen} />
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <main className="mx-auto max-w-[1360px] font-barlow">
        <Home />
        <Divider />
        <SkillSet />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
