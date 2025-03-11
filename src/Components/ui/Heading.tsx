import React from "react";
import { motion } from "framer-motion";

interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ className = "", children }) => {
  return (
    <motion.h2
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={`font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default Heading;
