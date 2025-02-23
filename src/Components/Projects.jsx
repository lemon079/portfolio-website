import React from "react";
import AnimatedLink from "./ui/AnimatedLink";
import SpotlightCard from "./ui/SpotlightCard";
import Heading from "./ui/Heading";
import Connector from "./ui/Connector";

const Projects = () => {
  return (
    <section className="relative">
      <SpotlightCard
        className="project-section text-white"
        id="projects"
        spotlightColor="rgba(138, 43, 226, 0.5)"
      >
        <Heading className={"project-title"}>Projects</Heading>
        <div className="flex justify-end">
          <ul className="project-list">
            <li className="project-category">
              <h3 className="project-subtitle">Full-Stack:</h3>
              <ul className="project-inner-list">
                <li>
                  <AnimatedLink
                    href={"https://thread-112.vercel.app"}
                    underLineColor="bg-white"
                  >
                    Threads Clone
                  </AnimatedLink>
                </li>
              </ul>
            </li>
            <li className="project-category">
              <h3 className="project-subtitle">Front-End:</h3>
              <ul className="project-inner-list">
                <li>
                  <AnimatedLink
                    href={"https://sundown-studio-112.vercel.app"}
                    underLineColor="bg-white"
                  >
                    Sundown Studio Clone
                  </AnimatedLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SpotlightCard>
      <Connector />
    </section>
  );
};

export default Projects;
