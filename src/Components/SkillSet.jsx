import React from "react";
import Heading from "./ui/Heading";
import SpotlightCard from "./ui/SpotlightCard";

const SkillSet = () => {
  return (
    <SpotlightCard
      className="skillset-section"
      id="projects"
      spotlightColor="rgba(0, 140, 255, 0.5)"
    >
      <Heading className={"project-title"}>Stack</Heading>
    </SpotlightCard>
  );
};

export default SkillSet;
