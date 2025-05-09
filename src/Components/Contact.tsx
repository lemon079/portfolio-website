import AnimatedLink from "./ui/AnimatedLink";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import SpotlightContainer from "./ui/SpotlightContainer";

const Contact = () => {
  return (
    <SpotlightContainer title="get in touch" className="contact-section my-10" spotlightColor="rgba(0, 140, 255, 0.5)">
      <div className="flex">
        <h5 className="contact-location">
          <CiLocationOn size={24} className="contact-icon" /> Lahore, Pakistan
        </h5>
        <div className="contact-list-wrapper flex-1">
          <ul className="contact-list">
            <li className="contact-list-item">
              <AnimatedLink
                href={"https://www.linkedin.com/in/bilal-tahir-a743a12ab/"}
              >
                <FaLinkedin className="contact-icon" />
                Linked In
              </AnimatedLink>
            </li>
            <li className="contact-list-item">
              <AnimatedLink href={"https://github.com/lemon079"}>
                <FaGithub className="contact-icon" />
                Github
              </AnimatedLink>
            </li>
            <li className="contact-list-item">
              <AnimatedLink href="https://mail.google.com/mail/u/0/?fs=1&to=bilaltahir079@gmail.com&tf=cm">
                <SiGmail className="contact-icon" />
                Gmail
              </AnimatedLink>
            </li>
          </ul>
        </div>
      </div>
    </SpotlightContainer>
  );
};

export default Contact;
