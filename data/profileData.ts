import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export const profileData = {
  name: "Nataliia Hirniak",
  profession: "Software Engineer",
  description:
    "Skilled developer with a strong command over React.js and Node.js, equipped to build exceptional web applications. Feel free to reach out and discover more about my work.",
  links: [
    {
      key: 1,
      icon: FiLinkedin,
      link: "https://www.linkedin.com/in/nataliia-hirniak-075537255/",
    },
    {
      key: 2,
      icon: GrMail,
      link: "mailto:gn.natalia19@gmail.com",
    },
    {
      key: 3,
      icon: FaGithub,
      link: "https://github.com/liaHi19",
    },
  ],
};
