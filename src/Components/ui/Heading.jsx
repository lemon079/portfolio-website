import React from "react";
import { motion } from "framer-motion";

const Heading = ({ className, children }) => {
  return (
    <motion.h2
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={`${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default Heading;
