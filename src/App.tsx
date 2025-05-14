import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import SkillSet from "./Components/SkillSet";

function App() {

  return (
    <>
      <main className="mx-auto lg:max-w-7xl font-barlow">
        <a
          href="https://drive.google.com/file/d/1i23pK3kpbKrnh8jfOJapLrIEhLno0QZ0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black max-w-32 fixed w-16 z-10 text-center top-5 right-10 text-white p-2 rounded-md hover:opacity-75 cursor-pointer hover:-translate-y-1 transition"
        >
          Resume
        </a>
        <Home />
        <SkillSet />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
