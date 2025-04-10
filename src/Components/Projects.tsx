import SpotlightCard from "./ui/SpotlightCard";
import Heading from "./ui/Heading";
import { ProjectLink } from "./ui/ProjectLink";

const Projects = () => {
  const projects = [
    {
      heading: "Fashi-Ecommerce",
      subheading: "hTML | CSS | SCSS |JS Frontend Project",
      imgSrc: "/fashi-ecommerce.PNG",
      href: "https://fashi-ecommerce-112.vercel.app"
    },
    {
      heading: "Villa",
      subheading: "Learned SASS/SCSS while making this lol",
      imgSrc: "/villa.PNG",
      href: "https://villa-project-112.vercel.app"
    },
    {
      heading: "Sundown-Studio",
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
        <ul className="project-list">
          {projects.map((project, index) => (
            <ProjectLink key={index + 1} className="max-w-xl" heading={project.heading} href={project.href} imgSrc={project.imgSrc} subheading={project.subheading} headingClassName="text-4xl md:text-5xl text-gray-200 " subheadingClassName="text-gray-300 text-base sm:text-lg" />
          ))}
        </ul>
      </SpotlightCard>
    </section>
  );
};

export default Projects;
