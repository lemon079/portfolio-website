import Home from "./Components/Home";
import { lazy, Suspense } from "react";
import Loader from "./Components/ui/Loader";

const SkillSet = lazy(() => import("./Components/SkillSet"))
const Projects = lazy(() => import("./Components/Projects"))
const Contact = lazy(() => import("./Components/Contact"))

function App() {
  return (
    <>
      <main className="mx-auto lg:max-w-7xl font-barlow">
        <a
          href="https://drive.google.com/file/d/1IFgDipYyv4LY5dYuHxlPcXBBa8YnLPt8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black max-w-32 fixed w-16 z-10 text-center top-5 right-10 text-white p-2 rounded-md hover:opacity-75 cursor-pointer hover:-translate-y-1 transition"
        >
          Resume
        </a>
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <SkillSet />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App;
