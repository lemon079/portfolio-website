import React from "react";
import AnimatedLink from "./ui/AnimatedLink";
import SpotlightCard from "./ui/SpotlightCard";
import Heading from "./ui/Heading";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <SpotlightCard className="contact-section" spotlightColor="rgba(0, 140, 255, 0.5)">
      <h5 className="contact-location">
        <CiLocationOn size={24} className="contact-icon" /> Lahore, Pakistan
      </h5>
      <Heading className="contact-heading">Get In Touch!</Heading>
      <div className="contact-list-wrapper">
        <ul className="contact-list">
          <li className="contact-list-item">
            <AnimatedLink href={"https://thread-112.vercel.app"}>
              <FaLinkedin size={24} className="contact-icon" />
              Linked In
            </AnimatedLink>
          </li>
          <li className="contact-list-item">
            <AnimatedLink href={"https://github.com/lemon079"}>
              <FaGithub size={24} className="contact-icon" />
              Github
            </AnimatedLink>
          </li>
          <li className="contact-list-item">
            <AnimatedLink href={"https://mail.google.com/mail/u/0/?fs=1&to=bilaltahir079@gmail.com&tf=cm"}>
              <SiGmail size={24} className="contact-icon" />
              Gmail
            </AnimatedLink>
          </li>
        </ul>
      </div>
    </SpotlightCard>
  );
};

export default Contact;
