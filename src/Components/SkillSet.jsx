import React from "react";
import Heading from "./ui/Heading";
import SpotlightCard from "./ui/SpotlightCard";
import { RiReactjsLine, RiNodejsLine, RiNextjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import GlassIcons from "./ui/GlassIcons";
import Connector from "./ui/Connector";

const SkillSet = () => {
  const items = [
    { icon: <RiNextjsLine size={60} />, label: "Next.js" },
    { icon: <SiMongodb size={60} />, label: "Mongodb" },
    { icon: <SiExpress size={60} />, label: "Express.js" },
    { icon: <RiReactjsLine size={60} />, label: "React.js" },
    { icon: <RiNodejsLine size={60} />, label: "Node.js" },
  ];

  return (
    <section className="relative">
      <SpotlightCard
        className="skillset-section"
        id="projects"
        spotlightColor="gray"
      >
        <Heading className={"text-9xl font-bold"}>Stack</Heading>
        <section>
          <GlassIcons items={items} className={"flex gap-10 justify-end"} />
        </section>
      </SpotlightCard>
      <Connector />
    </section>
  );
};

export default SkillSet;
