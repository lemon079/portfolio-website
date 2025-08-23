import SpotlightCard from "./ui/SpotlightCard";
import Heading from "./ui/Heading";
import { ProjectLink } from "./ui/ProjectLink";
import SpotlightContainer from "./ui/SpotlightContainer";

const Projects = () => {
  const projects = [
    {
      heading: "Sundown-Studio",
      subheading: "Creative Agency Frontend Clone ( very beautiful )",
      imgSrc: "/sundown-studio.PNG",
      href: "https://sundown-studio-112.vercel.app"
    },
    {
      heading: "Threads",
      subheading: "Social Media Fullstack Clone",
      imgSrc: "/threads.PNG",
      href: "https://thread-112.vercel.app"
    },
    {
      heading: "Jira",
      subheading: "Project Management Fullstack Clone",
      imgSrc: "/jira.PNG",
      href: "https://jira-clone-112.vercel.app"
    },
    // {
    //   heading: "Fashi-Ecommerce",
    //   subheading: "ecommerce website Frontend Clone",
    //   imgSrc: "/fashi-ecommerce.PNG",
    //   href: "https://fashi-ecommerce-112.vercel.app"
    // },
    // {
    //   heading: "Villa",
    //   subheading: "villa buying website frontend Clone",
    //   imgSrc: "/villa.PNG",
    //   href: "https://villa-project-112.vercel.app"
    // },
  ]

  return (
    <section className="relative my-10">
      <SpotlightContainer className="project-section text-white" title="projects" spotlightColor="rgba(138, 43, 226, 0.5)">
        <ul className="project-list">
          {projects.map((project, index) => (
            <ProjectLink key={index + 1} className="w-full" heading={project.heading} href={project.href} imgSrc={project.imgSrc} subheading={project.subheading} headingClassName="text-4xl text-gray-200 " subheadingClassName="text-gray-300 text-base sm:text-lg" />
          ))}
        </ul>
      </SpotlightContainer>
    </section>
  );
};

export default Projects;
