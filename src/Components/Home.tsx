import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import RotatingText from "./ui/RotatingText";
import { Separator } from "./ui/separator";

const Home = () => {
  return (
    <>
      <section className="overflow-visible relative my-4 sm:my-20 p-10 max-w-2xl sm:max-w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-around">

        {/* Left-side content */}
        <div className="flex flex-col items-baseline justify-center gap-4 w-full lg:w-[60%]">
          <span className="text-2xl">
            Hi, My name is{" "}
            <span className="font-bold text-8xl">Bilal</span>
          </span>
          <RotatingText
            texts={[
              "Full-Stack Developer",
              "Loves Creative Design",
              "Self-Taught Enthusiast",
            ]}
            mainClassName="text-3xl sm:text-5xl lg:text-7xl p-2 uppercase font-bold bg-neutral-200 text-neutral-700 overflow-hidden rounded-custom"
            staggerFrom={"first"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "120%" }}
            staggerDuration={0.02}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            rotationInterval={2500}
          />
          <div className="relative text-gray-800 mt-10 flex gap-5">
            <div className="quote-icon text-xl">
              <FaQuoteLeft />
            </div>
            <p className="max-w-xl font-light text-md sm:text-xl lg:text-2xl tracking-wide leading-7 sm:leading-relaxed">
              I am a self-taught <span className="highlight">full-stack developer</span> passionate about building efficient applications and creative designs. Currently pursuing a Bachelor's in Computer Science, I'm always learning. Beyond tech, I enjoy reading and practicing calisthenics to stay curious and active.
            </p>

            <div className="quote-icon self-end text-xl">
              <FaQuoteRight />
            </div>
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
