import SpotlightCard from "./ui/SpotlightCard";
import Heading from "./ui/Heading";
import { ProjectLink } from "./ui/ProjectLink";

const Projects = () => {
  const projects = [
    {
      heading: "Sundown Studio",
      subheading: "Creative Agency Clone",
      imgSrc: "/sundown-studio.PNG",
      href: "https://sundown-studio-112.vercel.app"
    },
    {
      heading: "Threads",
      subheading: "Social Media Clone",
      imgSrc: "/threads.PNG",
      href: "https://thread-112.vercel.app"
    },
    {
      heading: "Jira",
      subheading: "Project Management Clone",
      imgSrc: "/jira.PNG",
      href: "https://jira-clone-112.vercel.app"
    },
  ]

  return (
    <section className="relative my-10">
      <SpotlightCard
        className="project-section text-white"
        spotlightColor="rgba(138, 43, 226, 0.5)"
      >
        <Heading className={"project-title"}>Projects</Heading>
        <div className="">
          <ul className="project-list">
            {projects.map((project, index) => (
              <ProjectLink key={index + 1} heading={project.heading} href={project.href} imgSrc={project.imgSrc} subheading={project.subheading} headingClassName="text-4xl md:text-5xl text-gray-200 " subheadingClassName="text-gray-300 text-base sm:text-lg" />
            ))}
          </ul>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default Projects;
