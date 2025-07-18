import React from "react";
import SpotlightContainer from "./ui/SpotlightContainer";
import {
  RiReactjsLine,
  RiNodejsLine,
  RiNextjsLine,
} from "react-icons/ri";
import { SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";
import { FaFire } from "react-icons/fa";

const SkillSet: React.FC = () => {
  const items = [
    { icon: <RiNextjsLine size={25} />, label: "Next.js" },
    { icon: <SiMongodb size={25} />, label: "MongoDB" },
    { icon: <SiExpress size={25} />, label: "Express.js" },
    { icon: <RiReactjsLine size={25} />, label: "React.js" },
    { icon: <RiNodejsLine size={25} />, label: "Node.js" },
    { icon: <SiPostgresql size={25} />, label: "PostgreSQL" },
    { icon: <FaFire size={25} />, label: "Hono.js" },
  ];

  return (
    <section className="relative my-10">
      <SpotlightContainer className="skillset-section" title="tech stack">
        <ul className="flex items-center justify-center flex-wrap gap-10">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-xl sm:text-2xl font-medium"
            >
              {item.icon} <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </SpotlightContainer>
    </section>
  );
};

export default SkillSet;
