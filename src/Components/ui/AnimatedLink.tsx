import React from "react";

interface AnimatedLinkProps {
  href?: string;
  children: React.ReactNode;
  underLineColor?: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href = "#",
  children,
  underLineColor = "bg-black",
}) => {
  return (
    <a href={href} target="_blank" className="relative inline-block group">
      {children}
      <span
        className={`absolute left-0 -bottom-1 h-[0.2px] w-full ${underLineColor} transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100`}
      ></span>
    </a>
  );
};

export default AnimatedLink;
