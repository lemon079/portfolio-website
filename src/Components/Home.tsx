import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import RotatingText from "./ui/RotatingText";
import { Separator } from "./ui/separator";
import AnimatedContent from "./ui/AnimatedContent";

const Home = () => {
  return (
    <>
      <section className="overflow-visible relative p-5 m-20 max-w-2xl sm:max-w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-around">
        {/* Left-side content */}
        <div className="flex flex-col gap-y-5 items-baseline justify-center gap-4 w-full lg:w-[60%]">
          <span className="text-2xl">
            <AnimatedContent
              distance={20}
              direction="horizontal"
              reverse={true}
              config={{ tension: 50, friction: 10 }}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}>
              Hi, My name is{" "}
              <span className="font-bold text-5xl sm:text-6xl lg:text-8xl">Bilal Tahir</span>
            </AnimatedContent>
          </span>
          <RotatingText
            texts={[
              "Full-Stack Developer",
              "Loves Creative Designing",
              "Self-Taught Enthusiast",
            ]}
            mainClassName="text-3xl sm:text-5xl md:text-5xl lg:text-6xl p-2 uppercase font-bold overflow-hidden shadow-md rounded-md"
            staggerFrom={"first"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.01}
            splitBy="words"
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            rotationInterval={2000}
          />
          <div className="relative mt-7 flex gap-5">
            <AnimatedContent
              distance={20}
              direction="horizontal"
              reverse={true}
              config={{ tension: 50, friction: 10 }}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}>
              <p className="max-w-xl text-md sm:text-[1.35rem] tracking-wide leading-7 sm:leading-relaxed border-l-4 pl-4 border-gray-400">I’m a self‑taught full‑stack developer passionate about transforming ideas into clean, performant, and user‑centric applications. As a Computer Science student, I continually push my boundaries—learning new frameworks, refining my architecture patterns, and experimenting with AI‑powered tools. I thrive on solving complex challenges, designing for scalability and maintainability, and collaborating end‑to‑end from prototyping through deployment. Let’s build something great together.</p>
            </AnimatedContent>
          </div>
        </div>

        {/* Right-side profile image */}
        <div className="hidden md:flex justify-center mb-6">
          <img
            src="./pfp.png"
            alt="Bilal's Profile"
            className="w-80 h-80 md:w-80 md:h-full object-contain rounded-full"
          />
        </div>
      </section>
      <Separator />
    </>

  );
};

export default Home;
