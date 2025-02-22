import { FiHome } from "react-icons/fi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GrProjects, GrCircleInformation } from "react-icons/gr";
import Home from "./Components/Home";
import Dock from "./Components/ui/Dock";
import Divider from "./Components/ui/Divider";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import SkillSet from "./Components/SkillSet";

function App() {
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
    },
  ];
  return (
    <>
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <main className="mx-auto max-w-[1360px]">
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
