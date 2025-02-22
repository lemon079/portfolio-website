import React from "react";
import RotatingText from "./ui/RotatingText";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="h-screen relative flex items-center">
      <div className="left-side w-[90%] flex flex-col justify-center gap-4">
        <span className="text-2xl">
          Hi, My name is{" "}
          <span className="font-bold text-8xl">Bilal</span>
        </span>
        <h1>
          <RotatingText
            texts={[
              "Full-Stack Developer",
              "Loves Creative Design",
              "Self-Taught Enthusiast",
            ]}
            mainClassName="text-[5.5rem]/25 w-fit px-2 uppercase font-bold sm:px-2 md:px-3 bg-gray-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            rotationInterval={3000}
          />
        </h1>
        <div className="pr-10 relative text-gray-800 mt-5 flex gap-5 text-justify">
          <div className="quote">
            <FaQuoteLeft />
          </div>
          <p className="text-[1.5rem] font-light mt-5 text-lg tracking-wide">
            I am a self-taught{" "}
            <span className="highlight">full-stack developer</span> with a
            passion for building dynamic and efficient applications. Alongside
            coding, I love <span className="highlight">creative designing</span>
            , always striving to craft visually appealing and user-friendly
            experiences. Currently pursuing a Bachelor's degree in Computer
            Science, I am continuously expanding my knowledge and refining my
            skills. Beyond tech, I{" "}
            <span className="highlight">enjoy reading books</span> that spark
            curiosity and broaden my perspective. I also practice calisthenics,
            pushing my limits both physically and mentally. With an ever-curious
            mind, I love exploring new ideas, technologies, and creative
            possibilities.
          </p>
          <div className="quote-icon self-end">
            <FaQuoteRight />
          </div>
        </div>
      </div>
      <figure className="right-side">
        <img
          src="./pfp4.png"
          alt="Bilal's Profile"
          className="object-cover pointer-events-none"
        />
      </figure>
    </section>
  );
};

export default Home;
